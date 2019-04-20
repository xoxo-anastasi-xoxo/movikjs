import {Mat4f} from '../utils/Mat4f';
import {Utils} from '../utils/Utils';
import {Transform} from './Transform';
import {DIMENSION} from "./Scene";

/**
 * Камера в сцене.
 */
export class Camera {
    projectionMatrix;
    transform;
    viewMatrix;

    constructor(gl, fov = 45, near = 0.1, far = 100.0) {
        this.projectionMatrix = new Float32Array(16);
        const ratio = gl.canvas.width / gl.canvas.height;
        Mat4f.perspective(this.projectionMatrix, fov, ratio, near, far);

        this.transform = new Transform();
        this.viewMatrix = new Float32Array(16);
    }

    panX(v) {
        this.updateViewMatrix();
        this.transform.position.x += v;
    }

    panY(v) {
        this.updateViewMatrix();
        this.transform.position.y += this.transform.up[1] * v;
    }

    panZ(v) {
        this.updateViewMatrix();
        this.transform.position.z += v;
    }

    updateViewMatrix() {

        this.transform.matView.reset()
        .rotateX(this.transform.rotation.x * Utils.DEGS_TO_RADS)
        .rotateY(this.transform.rotation.y * Utils.DEGS_TO_RADS)
        .vtranslate(this.transform.position);



        this.transform.updateDirection();

        Mat4f.invert(this.viewMatrix, this.transform.matView.raw);
        return this.viewMatrix;
    }
}

/**
 * Меняет положение камеры в ответ на действия пользователя.
 */
export class CameraController {
    canvas;
    camera;
    rotateRate= -300;
    panRate = 5;
    zoomRate = 200;
    offsetX;
    offsetY;
    prevX = 0;
    prevY = 0;
    onUpHandler;
    onMoveHandler;

    constructor(gl, camera) {
        const oThis = this;
        const box = gl.canvas.getBoundingClientRect();
        this.canvas = gl.canvas;
        this.camera = camera;

        this.offsetX = box.left;
        this.offsetY = box.top;

        if (DIMENSION !== 2) {
            this.onUpHandler = function () {
                oThis.onMouseUp();
            };
            this.onMoveHandler = function (e) {
                oThis.onMouseMove(e);
            };

            this.canvas.addEventListener('mousedown', function (e) {
                oThis.onMouseDown(e);
            });
        }

            this.canvas.addEventListener('mousewheel', function (e) {
                oThis.onMouseWheel(e);
            });

    }
    
    onMouseDown(e) {
        this.prevX = e.pageX - this.offsetX;
        this.prevY = e.pageY - this.offsetY;

        this.canvas.addEventListener('mouseup', this.onUpHandler);
        this.canvas.addEventListener('mousemove', this.onMoveHandler);
    }

    onMouseUp() {
        this.canvas.removeEventListener('mouseup', this.onUpHandler);
        this.canvas.removeEventListener('mousemove', this.onMoveHandler);
    }

    onMouseWheel(e) {
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))); 
        this.camera.panZ(delta * (this.zoomRate / this.canvas.height));		
    }

    onMouseMove(e) {
        let x = e.pageX - this.offsetX,	
            y = e.pageY - this.offsetY,
            dx = x - this.prevX,		
            dy = y - this.prevY;

        
        if (!e.shiftKey || DIMENSION === 2) {
            this.camera.transform.rotation.y += dx * (this.rotateRate / this.canvas.width);
            this.camera.transform.rotation.x += dy * (this.rotateRate / this.canvas.height);
        } else {
            this.camera.panX(-dx * (this.panRate / this.canvas.width));
            this.camera.panY(dy * (this.panRate / this.canvas.height));
        }

        this.prevX = x;
        this.prevY = y;
    }
}
