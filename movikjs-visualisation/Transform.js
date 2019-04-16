class Transform {
    constructor() {
        this.position = new MovikJS.Vec3f(0, 0, 0);
        this.scale = new MovikJS.Vec3f(1, 1, 1);
        this.rotation = new MovikJS.Vec3f(0, 0, 0);
        this.matView = new MovikJS.Mat4f();
        this.matNormal = new Float32Array(9);

        this.forward = new Float32Array(4);
        this.up = new Float32Array(4);
        this.right = new Float32Array(4);
    }

    updateMatrix() {
        this.matView.reset()
        .vtranslate(this.position)
        .rotateX(this.rotation.x * MovikJS.Utils.DEGS_TO_RADS)
        .rotateZ(this.rotation.z * MovikJS.Utils.DEGS_TO_RADS)
        .rotateY(this.rotation.y * MovikJS.Utils.DEGS_TO_RADS)
        .vscale(this.scale);

        MovikJS.Mat4f.normalMat3(this.matNormal, this.matView.raw);

        MovikJS.Mat4f.transformVec4(this.forward, [0, 0, 1, 0], this.matView.raw);
        MovikJS.Mat4f.transformVec4(this.up, [0, 1, 0, 0], this.matView.raw);
        MovikJS.Mat4f.transformVec4(this.right, [1, 0, 0, 0], this.matView.raw);

        return this.matView.raw;
    }

    updateDirection() {
        MovikJS.Mat4f.transformVec4(this.forward, [0, 0, 1, 0], this.matView.raw);
        MovikJS.Mat4f.transformVec4(this.up, [0, 1, 0, 0], this.matView.raw);
        MovikJS.Mat4f.transformVec4(this.right, [1, 0, 0, 0], this.matView.raw);
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
