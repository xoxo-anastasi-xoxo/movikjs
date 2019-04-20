import {Modal} from './Modal';
import {ATTR_POSITION_LOC} from './Scene';

export const Primatives: any = {};

Primatives.Primitive = class {
    static createModal(gl, name, verts, colors) {
        return new Modal(Primatives.Primitive.createMesh(gl, name, verts, colors));
    }

    static createMesh(gl, name, verts, colors) {
        let mesh = gl.fCreateMeshVAO(name, verts, colors, gl.LINES);
        mesh.noCulling = true;
        mesh.doBlending = true;
        return mesh;
    }
};

Primatives.Point = class {
    static createModal(gl, name, verts, colors) {
        return new Modal(Primatives.Point.createMesh(gl, name, verts, colors));
    }

    static createMesh(gl, name, verts, colors) {
        let mesh = gl.fCreateMeshVAO(name, verts, colors, gl.POINTS);
        mesh.noCulling = true;
        mesh.doBlending = true;
        return mesh;
    }
};

Primatives.GridAxis = class {
    static createModal(gl, incAxis) {
        return new Modal(Primatives.GridAxis.createMesh(gl, incAxis));
    }

    static createMesh(gl, incAxis) {
        let verts = [],
            size = 2, div = 10.0, step = size / div, half = size / 2;
        let p;
        for (let i = 0; i <= div; i++) {
            p = -half + (i * step);
            verts.push(p);
            verts.push(0);
            verts.push(half);
            verts.push(0);
            verts.push(p);
            verts.push(0);
            verts.push(-half);
            verts.push(0);
            p = half - (i * step);
            verts.push(-half);
            verts.push(0);
            verts.push(p);
            verts.push(0);
            verts.push(half);
            verts.push(0);
            verts.push(p);
            verts.push(0);
        }

        if (incAxis) {
            verts.push(-1.1);
            verts.push(0);
            verts.push(0);
            verts.push(1);
            verts.push(1.1);
            verts.push(0);
            verts.push(0);
            verts.push(1);
            verts.push(0);
            verts.push(-1.1);
            verts.push(0);
            verts.push(2);
            verts.push(0);
            verts.push(1.1);
            verts.push(0);
            verts.push(2);
            verts.push(0);
            verts.push(0);
            verts.push(-1.1);
            verts.push(3);
            verts.push(0);
            verts.push(0);
            verts.push(1.1);
            verts.push(3);
        }

        let attrColorLoc = 4,
            strideLen,
            mesh: any = {drawMode: gl.LINES, vao: gl.createVertexArray()};

        mesh.vertexComponentLen = 4;
        mesh.vertexCount = verts.length / mesh.vertexComponentLen;
        strideLen = Float32Array.BYTES_PER_ELEMENT * mesh.vertexComponentLen;
        mesh.bufVertices = gl.createBuffer();
        gl.bindVertexArray(mesh.vao);
        gl.bindBuffer(gl.ARRAY_BUFFER, mesh.bufVertices);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(ATTR_POSITION_LOC);
        gl.enableVertexAttribArray(attrColorLoc);

        gl.vertexAttribPointer(
            ATTR_POSITION_LOC, 3, gl.FLOAT, false, strideLen, 0);

        gl.vertexAttribPointer(
            attrColorLoc, 1, gl.FLOAT
            , false
            , strideLen, Float32Array.BYTES_PER_ELEMENT * 3);

        gl.bindVertexArray(null);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.mMeshCache['grid'] = mesh;
        return mesh;
    }
};
