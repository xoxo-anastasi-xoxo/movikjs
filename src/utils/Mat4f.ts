/**
 * Матрица 4x4.
 *
 * Класс, используемый для отрисовки.
 */
export class Mat4f {
    raw;

    constructor() {
        this.raw = Mat4f.identity();
    }

    vtranslate(v) {
        Mat4f.translate(this.raw, v.x, v.y, v.z);
        return this;
    }

    rotateY(rad) {
        Mat4f.rotateY(this.raw, rad);
        return this;
    }

    rotateX(rad) {
        Mat4f.rotateX(this.raw, rad);
        return this;
    }

    rotateZ(rad) {
        Mat4f.rotateZ(this.raw, rad);
        return this;
    }

    vscale(vec3) {
        Mat4f.scale(this.raw, vec3.x, vec3.y, vec3.z);
        return this;
    }

    reset() {
        for (let i = 0; i < this.raw.length; i++) this.raw[i] = (i % 5 === 0) ? 1 : 0;
        return this;
    }

    static identity() {
        let a = new Float32Array(16);
        a[0] = a[5] = a[10] = a[15] = 1;
        return a;
    }

    static perspective(out, fovy, aspect, near, far) {
        let f = 1.0 / Math.tan(fovy / 2),
            nf = 1 / (near - far);
        out[0] = f / aspect;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = f;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = (far + near) * nf;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[14] = (2 * far * near) * nf;
        out[15] = 0;
    }

    static normalMat3(out, a) {
        let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
            a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
            a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
            a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

            b00 = a00 * a11 - a01 * a10,
            b01 = a00 * a12 - a02 * a10,
            b02 = a00 * a13 - a03 * a10,
            b03 = a01 * a12 - a02 * a11,
            b04 = a01 * a13 - a03 * a11,
            b05 = a02 * a13 - a03 * a12,
            b06 = a20 * a31 - a21 * a30,
            b07 = a20 * a32 - a22 * a30,
            b08 = a20 * a33 - a23 * a30,
            b09 = a21 * a32 - a22 * a31,
            b10 = a21 * a33 - a23 * a31,
            b11 = a22 * a33 - a23 * a32,


            det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        if (!det) return null;

        det = 1.0 / det;

        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

        out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

        out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        return out;
    }

    static transformVec4(out, v, m) {
        out[0] = m[0] * v[0] + m[4] * v[1] + m[8] * v[2] + m[12] * v[3];
        out[1] = m[1] * v[0] + m[5] * v[1] + m[9] * v[2] + m[13] * v[3];
        out[2] = m[2] * v[0] + m[6] * v[1] + m[10] * v[2] + m[14] * v[3];
        out[3] = m[3] * v[0] + m[7] * v[1] + m[11] * v[2] + m[15] * v[3];
        return out;
    }


    static scale(out, x, y, z) {
        out[0] *= x;
        out[1] *= x;
        out[2] *= x;
        out[3] *= x;
        out[4] *= y;
        out[5] *= y;
        out[6] *= y;
        out[7] *= y;
        out[8] *= z;
        out[9] *= z;
        out[10] *= z;
        out[11] *= z;
        return out;
    };

    static rotateY(out, rad) {
        let s = Math.sin(rad),
            c = Math.cos(rad),
            a00 = out[0],
            a01 = out[1],
            a02 = out[2],
            a03 = out[3],
            a20 = out[8],
            a21 = out[9],
            a22 = out[10],
            a23 = out[11];


        out[0] = a00 * c - a20 * s;
        out[1] = a01 * c - a21 * s;
        out[2] = a02 * c - a22 * s;
        out[3] = a03 * c - a23 * s;
        out[8] = a00 * s + a20 * c;
        out[9] = a01 * s + a21 * c;
        out[10] = a02 * s + a22 * c;
        out[11] = a03 * s + a23 * c;
        return out;
    }

    static rotateX(out, rad) {
        let s = Math.sin(rad),
            c = Math.cos(rad),
            a10 = out[4],
            a11 = out[5],
            a12 = out[6],
            a13 = out[7],
            a20 = out[8],
            a21 = out[9],
            a22 = out[10],
            a23 = out[11];


        out[4] = a10 * c + a20 * s;
        out[5] = a11 * c + a21 * s;
        out[6] = a12 * c + a22 * s;
        out[7] = a13 * c + a23 * s;
        out[8] = a20 * c - a10 * s;
        out[9] = a21 * c - a11 * s;
        out[10] = a22 * c - a12 * s;
        out[11] = a23 * c - a13 * s;
        return out;
    }

    static rotateZ(out, rad) {
        let s = Math.sin(rad),
            c = Math.cos(rad),
            a00 = out[0],
            a01 = out[1],
            a02 = out[2],
            a03 = out[3],
            a10 = out[4],
            a11 = out[5],
            a12 = out[6],
            a13 = out[7];


        out[0] = a00 * c + a10 * s;
        out[1] = a01 * c + a11 * s;
        out[2] = a02 * c + a12 * s;
        out[3] = a03 * c + a13 * s;
        out[4] = a10 * c - a00 * s;
        out[5] = a11 * c - a01 * s;
        out[6] = a12 * c - a02 * s;
        out[7] = a13 * c - a03 * s;
        return out;
    }

    static invert(out, mat) {
        if (mat === undefined) mat = out;

        let a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3],
            a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7],
            a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11],
            a30 = mat[12], a31 = mat[13], a32 = mat[14], a33 = mat[15],

            b00 = a00 * a11 - a01 * a10,
            b01 = a00 * a12 - a02 * a10,
            b02 = a00 * a13 - a03 * a10,
            b03 = a01 * a12 - a02 * a11,
            b04 = a01 * a13 - a03 * a11,
            b05 = a02 * a13 - a03 * a12,
            b06 = a20 * a31 - a21 * a30,
            b07 = a20 * a32 - a22 * a30,
            b08 = a20 * a33 - a23 * a30,
            b09 = a21 * a32 - a22 * a31,
            b10 = a21 * a33 - a23 * a31,
            b11 = a22 * a33 - a23 * a32,


            det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        if (!det) return false;
        det = 1.0 / det;

        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

        return true;
    }

    static translate(out, x, y, z) {
        out[12] = out[0] * x + out[4] * y + out[8] * z + out[12];
        out[13] = out[1] * x + out[5] * y + out[9] * z + out[13];
        out[14] = out[2] * x + out[6] * y + out[10] * z + out[14];
        out[15] = out[3] * x + out[7] * y + out[11] * z + out[15];
    }
}
