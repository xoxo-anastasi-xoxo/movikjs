class Shader {
    constructor(gl, vertShaderSrc, fragShaderSrc) {
        this.program = ShaderUtil.createProgramFromText(gl, vertShaderSrc, fragShaderSrc, true);

        if (this.program != null) {
            this.gl = gl;
            gl.useProgram(this.program);
            this.attribLoc = ShaderUtil.getStandardAttribLocations(gl, this.program);
            this.uniformLoc = ShaderUtil.getStandardUniformLocations(gl, this.program);
        }
    }

    activate() {
        this.gl.useProgram(this.program);
        return this;
    }

    deactivate() {
        this.gl.useProgram(null);
        return this;
    }

    setPerspective(matData) {
        this.gl.uniformMatrix4fv(this.uniformLoc.perspective, false, matData);
        return this;
    }

    setModalMatrix(matData) {
        this.gl.uniformMatrix4fv(this.uniformLoc.modalMatrix, false, matData);
        return this;
    }

    setCameraMatrix(matData) {
        this.gl.uniformMatrix4fv(this.uniformLoc.cameraMatrix, false, matData);
        return this;
    }

    dispose() {
        if (this.gl.getParameter(this.gl.CURRENT_PROGRAM) === this.program) this.gl.useProgram(null);
        this.gl.deleteProgram(this.program);
    }

    preRender() {
    }

    renderModal(modal) {
        this.setModalMatrix(modal.transform.getViewMatrix());
        this.gl.bindVertexArray(modal.mesh.vao);

        if (modal.mesh.noCulling) this.gl.disable(this.gl.CULL_FACE);
        if (modal.mesh.doBlending) this.gl.enable(this.gl.BLEND);

        if (modal.mesh.indexCount) this.gl.drawElements(modal.mesh.drawMode, modal.mesh.indexCount, gl.UNSIGNED_SHORT, 0);
        else this.gl.drawArrays(modal.mesh.drawMode, 0, modal.mesh.vertexCount);

        this.gl.bindVertexArray(null);
        if (modal.mesh.noCulling) this.gl.enable(this.gl.CULL_FACE);
        if (modal.mesh.doBlending) this.gl.disable(this.gl.BLEND);

        return this;
    }
}

class ShaderUtil {
    static domShaderSrc(elmID) {
        let elm = document.getElementById(elmID);
        if (!elm || elm.text === '') {
            console.log(elmID + ' shader not found or no text.');
            return null;
        }

        return elm.text;
    }

    static createShader(gl, src, type) {
        let shader = gl.createShader(type);
        gl.shaderSource(shader, src);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Error compiling shader : ' + src, gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    static createProgram(gl, vShader, fShader, doValidate) {
        let prog = gl.createProgram();
        gl.attachShader(prog, vShader);
        gl.attachShader(prog, fShader);

        gl.bindAttribLocation(prog, ATTR_POSITION_LOC, ATTR_POSITION_NAME);
        gl.bindAttribLocation(prog, ATTR_COLOR_LOC, ATTR_COLOR_NAME);

        gl.linkProgram(prog);

        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
            console.error('Error creating shader program.', gl.getProgramInfoLog(prog));
            gl.deleteProgram(prog);
            return null;
        }

        if (doValidate) {
            gl.validateProgram(prog);
            if (!gl.getProgramParameter(prog, gl.VALIDATE_STATUS)) {
                console.error('Error validating program', gl.getProgramInfoLog(prog));
                gl.deleteProgram(prog);
                return null;
            }
        }

        gl.detachShader(prog, vShader);
        gl.detachShader(prog, fShader);
        gl.deleteShader(fShader);
        gl.deleteShader(vShader);

        return prog;
    }

    static domShaderProgram(gl, vectID, fragID) {
        let vShaderTxt = ShaderUtil.domShaderSrc(vectID);
        if (!vShaderTxt) return null;
        let fShaderTxt = ShaderUtil.domShaderSrc(fragID);
        if (!fShaderTxt) return null;
        let vShader = ShaderUtil.createShader(gl, vShaderTxt, gl.VERTEX_SHADER);
        if (!vShader) return null;
        let fShader = ShaderUtil.createShader(gl, fShaderTxt, gl.FRAGMENT_SHADER);
        if (!fShader) {
            gl.deleteShader(vShader);
            return null;
        }

        return ShaderUtil.createProgram(gl, vShader, fShader, true);
    }

    static createProgramFromText(gl, vShaderTxt, fShaderTxt) {
        let vShader = ShaderUtil.createShader(gl, vShaderTxt, gl.VERTEX_SHADER);
        if (!vShader) return null;
        let fShader = ShaderUtil.createShader(gl, fShaderTxt, gl.FRAGMENT_SHADER);
        if (!fShader) {
            gl.deleteShader(vShader);
            return null;
        }

        return ShaderUtil.createProgram(gl, vShader, fShader, true);
    }

    static getStandardAttribLocations(gl, program) {
        return {
            position: gl.getAttribLocation(program, ATTR_POSITION_NAME),
            color: gl.getAttribLocation(program, ATTR_COLOR_NAME),
        };
    }

    static getStandardUniformLocations(gl, program) {
        return {
            perspective: gl.getUniformLocation(program, 'uPMatrix'),
            modalMatrix: gl.getUniformLocation(program, 'uMVMatrix'),
            cameraMatrix: gl.getUniformLocation(program, 'uCameraMatrix'),
            mainTexture: gl.getUniformLocation(program, 'uMainTex'),
        };
    }
}

class GridAxisShader extends Shader {
    constructor(gl, pMatrix) {
        const vertSrc = '#version 300 es\n' +
            'in vec3 a_position;' +
            'layout(location=4) in float a_color;' +
            'uniform mat4 uPMatrix;' +
            'uniform mat4 uMVMatrix;' +
            'uniform mat4 uCameraMatrix;' +
            'uniform vec3 uColor[4];' +
            'out lowp vec4 color;' +
            'void main(void){' +
            'color = vec4(uColor[ int(a_color) ],1.0);' +
            'gl_Position = uPMatrix * uCameraMatrix * uMVMatrix * vec4(a_position, 1.0);' +
            '}';
        const fragSrc = '#version 300 es\n' +
            'precision mediump float;' +
            'in vec4 color;' +
            'out vec4 finalColor;' +
            'void main(void){ finalColor = color; }';

        super(gl, vertSrc, fragSrc);

        this.setPerspective(pMatrix);

        const uColor = gl.getUniformLocation(this.program, 'uColor');
        gl.uniform3fv(uColor, new Float32Array([0.8, 0.8, 0.8, 1, 0, 0, 0, 1, 0, 0, 0, 1]));

        gl.useProgram(null);
    }
}

class PrimitiveShader extends Shader {
    constructor(gl, pMatrix) {
        const vertSrc = `#version 300 es
		in vec3 a_position;	//Standard position data.
		in vec4 a_color;

		uniform mat4 uPMatrix;
		uniform mat4 uMVMatrix;
		uniform mat4 uCameraMatrix;

		out vec4 color;

		void main(void) {
			color = a_color;
			gl_Position = uPMatrix * uCameraMatrix * uMVMatrix * vec4(a_position, 1.0); 
		}`;
        const fragSrc = `#version 300 es
		precision mediump float;
		in vec4 color;

		out vec4 finalColor;
		
		void main(void) {
			finalColor = color;
		}`;
        super(gl, vertSrc, fragSrc);

        this.setPerspective(pMatrix);
        gl.useProgram(null);
    }
}
