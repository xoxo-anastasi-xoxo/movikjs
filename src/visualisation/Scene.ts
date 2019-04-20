import {Camera, CameraController} from './Camera';
import {Primatives} from './Primatives'
import {GridAxisShader, Primitive3DShader} from './Shaders';
import {RenderLoop} from './RenderLoop';

export const ATTR_POSITION_NAME = 'a_position';
export const ATTR_POSITION_LOC = 0;
export const ATTR_COLOR_NAME = 'a_color';
export const ATTR_COLOR_LOC = 1;

export class Scene {
    canvas;
    gl;
    gCamera;
    gCameraCtrl;
    gGridShader;
    gGridModal;
    RLoop;
    _primitives = [];
    _points = [];

    constructor(canvasID) {
        this.canvas = document.getElementById(canvasID);
        const gl = this.gl = this.canvas.getContext('webgl2');

        if (!gl) {
            console.error('WebGL context is not available.');
            return;
        }

        gl.mMeshCache = [];	// Будем кешировать всё, что рисуем на сцене.

        // Задаём необходимые конфигурации сцене.
        gl.cullFace(gl.BACK);								// Back is also default
        gl.frontFace(gl.CCW);								// Dont really need to set it, its ccw by default.
        gl.enable(gl.DEPTH_TEST);							// Shouldn't use this, use something else to add depth detection
        gl.enable(gl.CULL_FACE);							// Cull back face, so only show triangles that are created clockwise
        gl.depthFunc(gl.LEQUAL);							// Near things obscure far things
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);	// Setup default alpha blending
        gl.clearColor(1.0, 1.0, 1.0, 1.0);	                // Set clear color


        //  Чистим канвас от всего, что изображено.
        gl.fClear = function () {
            this.clear(this.COLOR_BUFFER_BIT | this.DEPTH_BUFFER_BIT);
            return this;
        };

        // Создаём и заполняем буффер.
        gl.fCreateArrayBuffer = function (floatAry, isStatic = true) {
            let buf = this.createBuffer();
            this.bindBuffer(this.ARRAY_BUFFER, buf);
            this.bufferData(this.ARRAY_BUFFER, floatAry, (isStatic) ? this.STATIC_DRAW : this.DYNAMIC_DRAW);
            this.bindBuffer(this.ARRAY_BUFFER, null);
            return buf;
        };

        // Превращаем массивы в GL буферы и заполняем VAO, которые будут предопределять буферы стандартных атрибутов шейдера.
        gl.fCreateMeshVAO = function (name, arrVert, arrCol, drawMode = this.LINES) {
            let res: any = {drawMode};

            res.vao = this.createVertexArray();
            this.bindVertexArray(res.vao);

            //.......................................................
            // Задаём константы
            if (arrVert) {
                res.bufVertices = this.createBuffer();
                res.vertexComponentLen = 3;
                res.vertexCount = arrVert.length / res.vertexComponentLen;

                this.bindBuffer(this.ARRAY_BUFFER, res.bufVertices);
                this.bufferData(this.ARRAY_BUFFER, new Float32Array(arrVert), this.STATIC_DRAW);
                this.enableVertexAttribArray(ATTR_POSITION_LOC);
                this.vertexAttribPointer(ATTR_POSITION_LOC, 3, this.FLOAT, false, 0, 0);
            }

            //.......................................................
            // Задаём цвета
            if (arrCol) {
                res.bufColors = this.createBuffer();

                this.bindBuffer(this.ARRAY_BUFFER, res.bufColors);
                this.bufferData(this.ARRAY_BUFFER, new Float32Array(arrCol), this.STATIC_DRAW);
                this.enableVertexAttribArray(ATTR_COLOR_LOC);
                this.vertexAttribPointer(ATTR_COLOR_LOC, 4, this.FLOAT, false, 0, 0);
            }

            this.bindVertexArray(null);					// !!!
            this.bindBuffer(this.ARRAY_BUFFER, null);

            this.mMeshCache[name] = res;
            return res;
        };

        gl.fSetSize = function (w, h) {
            this.canvas.style.width = w + 'px';
            this.canvas.style.height = h + 'px';
            this.canvas.width = w;
            this.canvas.height = h;

            this.viewport(0, 0, w, h);
            return this;
        };

        gl.fFitScreen = function (wp = 1, hp = 1) {
            return this.fSetSize(window.innerWidth * wp, window.innerHeight * hp);
        };
    }

    init() {
        this.gl.fFitScreen(1, 1).fClear();

        this.gCamera = new Camera(this.gl);
        this.gCamera.transform.position.set(0, 0.3, 3);
        this.gCameraCtrl = new CameraController(this.gl, this.gCamera);

        this.gGridShader = new GridAxisShader(this.gl, this.gCamera.projectionMatrix);
        this.gGridModal = Primatives.GridAxis.createModal(this.gl, true);

        this.RLoop = new RenderLoop(this.onRender, 30).start();
    }

    onRender = () => {
        this.gCamera.updateViewMatrix();
        this.gl.fClear();

        this.gGridShader.activate()
        .setCameraMatrix(this.gCamera.viewMatrix)
        .renderModal(this.gGridModal.preRender());

        for (let primitive of this._primitives) {
            primitive.gShader.activate()
            .setCameraMatrix(this.gCamera.viewMatrix)
            .renderModal(primitive.gModal.preRender());
        }
        for (let point of this._points) {
            point.gShader.activate()
            .setCameraMatrix(this.gCamera.viewMatrix)
            .renderModal(point.gModal.preRender());
        }
    };

    addPrimitive(structure) {
        const prim = new Primitive(this.gl, this.gCamera, structure);
        this._primitives.push(prim);

        return prim;
    }

    addPoint(vec, color) {
        this._points.push(new Point(this.gl, this.gCamera, vec, color));
    }
}

class Point {
    gModal;
    gShader;

    constructor(gl, camera, vec, color) {
        this.gShader = new Primitive3DShader(gl, camera.projectionMatrix);
        this.gModal = Primatives.Point.createModal(gl, 'point', vec.toArray(), color.toArray());
    }
}

class Primitive {
    structure;
    gl;
    gShader;
    gModal;
    name;
    effectors;
    colors;
    verts;

    constructor(gl, camera, structure) {
        this.structure = structure;
        this.parseStructure();
        this.gl = gl;

        this.gShader = new Primitive3DShader(gl, camera.projectionMatrix);
        this.gModal = Primatives.Primitive.createModal(gl, this.name, this.verts, this.colors);
    }

    parseStructure() {
        this.name = this.structure.getName();
        this.effectors = [];

        this.colors = [];
        this.verts = [];

        for (let i = 0; i < this.structure.getNumChains(); i++) {
            for (let bone of this.structure.getChain(i).getChain()) {
                this.colors.push(...bone.getColour().toArray());
                this.colors.push(...bone.getColour().toArray());
                this.verts.push(...bone.getStartLocationAsArray());
                this.verts.push(...bone.getEndLocationAsArray());
            }
            this.effectors.push(this.structure.getChain(i));
        }
    }

    moveTo(index, vec) {
        for (let i = 0; i < this.structure.getNumChains(); i++) {
            this.structure.getChain(i).setEmbeddedTargetMode(index !== i);
            if (index !== i) {
                this.structure.getChain(i).updateEmbeddedTarget(this.structure.getChain(i).getEffectorLocation());
            }
        }
        this.structure.solveForTarget(vec);
        this.parseStructure();
        this.gModal = Primatives.Primitive.createModal(this.gl, this.name, this.verts, this.colors);
    }
}
