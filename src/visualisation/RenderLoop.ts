/**
 * Контролирует перерисовку сцены.
 *
 * Tutorial on how to control FPS :: http://codetheory.in/controlling-the-frame-rate-with-requestanimationframe/
 * EXAMPLE:
 * rloop = new RenderLoop(function(dt){
 *     console.log(rloop.fps + ' ' + dt);
 * },10).start();
*/

export class RenderLoop {
    msLastFrame;
    callBack;
    isActive;
    fps;
    msFpsLimit;
    run;

    constructor(callback, fps) {
        let oThis = this;
        this.msLastFrame = null;	// Время в миллисекундах последнего кадра.
        this.callBack = callback;	// Какую функцию вызывать для каждого кадра.
        this.isActive = false;		// Управление состоянием включения/выключения цикла рендеринга.
        this.fps = 0;				// Хранит значение скорости цикла.

        if (fps !== undefined && fps > 0) { // Создать метод run, который ограничивает частоту кадров.
            this.msFpsLimit = 1000 / fps; // Считаем, сколько миллисекунд на кадр в одной секунде времени.
            this.run = function () {
                // Вычислите Deltatime между кадрами и FPS в настоящее время.
                let msCurrent = performance.now(),
                    msDelta = (msCurrent - oThis.msLastFrame),
                    deltaTime = msDelta / 1000.0;		// Какую долю секунды составляет Deltatime.

                if (msDelta >= oThis.msFpsLimit) { // Теперь выполним кадр как только истечет время.
                    oThis.fps = Math.floor(1 / deltaTime);
                    oThis.msLastFrame = msCurrent;
                    oThis.callBack(deltaTime);
                }

                if (oThis.isActive) window.requestAnimationFrame(oThis.run);
            };
        } else { // В противном случае создайте метод run, который максимально оптимизирован.
            this.run = function () {
                // Вычислите Deltatime между кадрами и FPS в настоящее время.
                let msCurrent = performance.now(),
                    deltaTime = (msCurrent - oThis.msLastFrame) / 1000.0;	// Какую долю секунды составляет Deltatime.

                // Теперь выполним кадр как только истечет время.
                oThis.fps = Math.floor(1 / deltaTime); // Время, необходимое для создания одного кадра, разделите 1 на это, чтобы получить сколько кадров за одну секунду происходит.
                oThis.msLastFrame = msCurrent;

                oThis.callBack(deltaTime);
                if (oThis.isActive) window.requestAnimationFrame(oThis.run);
            };
        }
    }

    start() {
        this.isActive = true;
        this.msLastFrame = performance.now();
        window.requestAnimationFrame(this.run);
        return this;
    }

    stop() {
        this.isActive = false;
    }
}
