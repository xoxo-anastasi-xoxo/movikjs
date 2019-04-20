import {Vec3f} from '../utils/Vec3f';
import {Mat4f} from '../utils/Mat4f';
import {Utils} from '../utils/Utils';

/**
 * Положение в пространстве сцены.
 */
export class Transform {
    position: Vec3f;
    scale: Vec3f;
    rotation: Vec3f;
    matView: Mat4f;
    matNormal: Float32Array;
    forward: Float32Array;
    up: Float32Array;
    right: Float32Array;

    constructor() {
        this.position = new Vec3f(0, 0, 0);
        this.scale = new Vec3f(1, 1, 1);
        this.rotation = new Vec3f(0, 0, 0);
        this.matView = new Mat4f();
        this.matNormal = new Float32Array(9);

        this.forward = new Float32Array(4);
        this.up = new Float32Array(4);
        this.right = new Float32Array(4);
    }

    updateMatrix() {
        this.matView.reset()
        .vtranslate(this.position)
        .rotateX(this.rotation.x * Utils.DEGS_TO_RADS)
        .rotateZ(this.rotation.z * Utils.DEGS_TO_RADS)
        .rotateY(this.rotation.y * Utils.DEGS_TO_RADS)
        .vscale(this.scale);

        Mat4f.normalMat3(this.matNormal, this.matView.raw);

        Mat4f.transformVec4(this.forward, [0, 0, 1, 0], this.matView.raw);
        Mat4f.transformVec4(this.up, [0, 1, 0, 0], this.matView.raw);
        Mat4f.transformVec4(this.right, [1, 0, 0, 0], this.matView.raw);

        return this.matView.raw;
    }

    updateDirection() {
        Mat4f.transformVec4(this.forward, [0, 0, 1, 0], this.matView.raw);
        Mat4f.transformVec4(this.up, [0, 1, 0, 0], this.matView.raw);
        Mat4f.transformVec4(this.right, [1, 0, 0, 0], this.matView.raw);
        return this;
    }

    getViewMatrix() {
        return this.matView.raw;
    }

    reset() {
        this.position.set(0, 0, 0);
        this.scale.set(1, 1, 1);
        this.rotation.set(0, 0, 0);
    }
}
