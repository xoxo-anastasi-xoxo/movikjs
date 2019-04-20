import {Transform} from './Transform';

/**
 * Универсальное представление отрисовываемого объекта.
 * Содержит в себе исходные данные об объекте, а также его положение относительно мировых координат.
 */
export class Modal {
    transform;
    mesh;

    constructor(meshData) {
        this.transform = new Transform();
        this.mesh = meshData;
    }
    
    setScale(x, y, z) {
        this.transform.scale.set(x, y, z);
        return this;
    }

    setPosition(x, y, z) {
        this.transform.position.set(x, y, z);
        return this;
    }

    setRotation(x, y, z) {
        this.transform.rotation.set(x, y, z);
        return this;
    }

    addScale(x, y, z) {
        this.transform.scale.x += x;
        this.transform.scale.y += y;
        this.transform.scale.z += z;
        return this;
    }

    addPosition(x, y, z) {
        this.transform.position.x += x;
        this.transform.position.y += y;
        this.transform.position.z += z;
        return this;
    }

    addRotation(x, y, z) {
        this.transform.rotation.x += x;
        this.transform.rotation.y += y;
        this.transform.rotation.z += z;
        return this;
    }

    preRender() {
        this.transform.updateMatrix();
        return this;
    }
}
