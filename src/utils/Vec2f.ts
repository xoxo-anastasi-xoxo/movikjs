import {Utils} from './Utils';

/**
 * 2D вектор.
 * <p>
 * Состоит из x и y полей, задающих направление вектора.
 */
export class Vec2f {
    x: number = 0;
    y: number = 0;

    // ---------- Constructors ----------

    /**
     * Конструктор.
     * <p>
     * Принимает три вариации параметров:
     * <p>
     * Без параметров. Заполняет x и y значениями по умолчанию (нулями).
     * <p>
     * Конструктор копирования. Задаёт x и y равными значениям source-вектора.
     *
     * @param source Вектор, параметры которого будут скопированы.
     * <p>
     * Конструктор с двумя параметрами, задающими x и y.
     *
     * @param source Значение координаты по оси x.
     * @param y Значение координаты по оси y.
     */
    constructor(source?: Vec2f | number, y?: number) {
        switch (arguments.length) {
            case 0:
                return;
            case 1:
                if (source instanceof Vec2f) {
                    this.x = source.x;
                    this.y = source.y;
                    return;
                } else {
                    throw new Error('Wrong Vec2f constructor params!');
                }
            case 2:
                if (typeof source === 'number') {
                    this.x = source;
                    this.y = y;
                    return;
                } else {
                    throw new Error('Wrong Vec2f constructor params!');
                }
        }
    }

    // ---------- Methods ----------

    /**
     * Проверяет вектора на примерное равенство.
     * Векторы примерно равны если модуль их координат по каждой из осей меньше tolerance.
     * <p>
     * Если значение tolerance меньше 0 - бросаем ошибку.
     *
     * @param	v			Вектор для сравнения.
     * @param   tolerance	Значение "терпимости" к разнице.
     * @return				Результат сравнения.
     */
    approximatelyEquals(v: Vec2f, tolerance: number): boolean {
        if (tolerance < 0) {	throw new Error('Equality threshold must be greater than or equal to 0.0');	}
        return (Math.abs(this.x - v.x) < tolerance &&  Math.abs(this.y - v.y) < tolerance);
    }

    /**
     * Возвращает сумму данного вектора с вектором из параметров, не меняя данный вектор.
     *
     * @param	v	Вектор.
     * @return		Результат сложения данного вектора с вектором параметром.
     **/
    plus = (v: Vec2f): Vec2f => new Vec2f(this.x + v.x, this.y + v.y);

    /**
     * Возвращает разность данного вектора с вектором из параметров, не меняя данный вектор.
     *
     * @param	v	Вектор.
     * @return		Результат вычитания из данного вектора вектора-параметра.
     **/
    minus = (v: Vec2f): Vec2f => new Vec2f(this.x - v.x, this.y - v.y);

    /**
     * Умножает вектор на число и возвращает результат, не меняя при этом исходный вектор.
     *
     * @param	value	Число, на которое необходимо умножить.
     * @return			Результат умножения данного вектора на число.
     **/
    times = (value: number): Vec2f => new Vec2f(this.x * value, this.y * value);

    /**
     * Делит вектор на число и возвращает результат, не меняя при этом исходный вектор.
     *
     * @param	value	Число, на которое необходимо поделить.
     * @return			Результат деления данного вектора на число.
     **/
    dividedBy = (value: number): Vec2f => new Vec2f(this.x / value, this.y / value);

    /**
     * Возвращает вектор противоположного направления.
     * Сам вектор не меняет.
     *
     * @return Вектор противоположного направления.
     */
    negated = (): Vec2f => new Vec2f(-this.x, -this.y);

    /**
     * Задаёт значения полей вектора.
     * Принимает две вариации параметров:
     * <p>
     * Один параметр - вектор источник.
     *
     * @param	source	Вектор-источник.
     * <p>
     * Два параметра - x и y соответственно.
     *
     * @param	source	Значение координаты по X.
     * @param	y	Значение координаты по Y.
     */
    set(source: Vec2f | number, y?: number): void {
        switch (arguments.length) {
            case 1:
                if (source instanceof Vec2f) {
                    this.x = source.x;
                    this.y = source.y;
                    return;
                } else {
                    throw new Error('Wrong Vec2f set params!');
                }
            case 2:
                if (typeof source === 'number') {
                    this.x = source;
                    this.y = y;
                    return;
                } else {
                    throw new Error('Wrong Vec2f set params!');
                }
            default:
                throw new Error('Wrong Vec2f set params!');
        }
    }

    /**
     * Возвращает длину вектора.
     *
     * @return	Длина вектора.
     */
    length = (): number => Math.sqrt(this.x * this.x + this.y * this.y);

    /**
     * Нормализует и возвращает себя.
     *
     * @return	Нормализованный вектор.
     */
    normalise(): Vec2f {
        const magnitude = Math.sqrt(this.x * this.x + this.y * this.y);

        if (magnitude > 0.0) {
            this.x /= magnitude;
            this.y /= magnitude;
        }

        return this;
    }

    /**
     * Возвращает нормализованную версию вектора-параметра, не меняясь сам.
     *
     * @param source Вектор для нормализации.
     * @return	Нормализованный вектор.
     */
    static normalised(source: Vec2f): Vec2f { return new Vec2f(source).normalise(); }

    /**
     * Возвращает направление вектора, для которого a - начальная точка, а b - конечная.
     * Направление будет единичным вектором.
     *
     * @param	a	Начальная точка.
     * @param	b	Конечная точка.
     * @return
     */
    static getDirectionUV = (a: Vec2f, b: Vec2f): Vec2f => b.minus(a).normalise();

    /**
     * Возвращает расстояние между двумя точками.
     *
     * @param	v1	Начальная позиция.
     * @param	v2	Конечная позиция.
     * @return		Расстояние.
     */
    static distanceBetween = (v1: Vec2f, v2:Vec2f): number	=> Math.sqrt( (v2.x - v1.x) * (v2.x - v1.x) + (v2.y - v1.y) * (v2.y - v1.y) );

    /**
     * Возвращает скалярное произведение двух векторов параметров.
     *
     * @param	v1	Первый вектор.
     * @param	v2	Второй вектор.
     * @return		Скалярное произведение.
     */
    static dot = (v1: Vec2f, v2: Vec2f): number => v1.x * v2.x + v1.y * v2.y;

    /**
     * Возвращает скалярное произведение двух векторов: this и вектора-параметра.
     *
     * @param	v	Второй вектор.
     * @return		Скалярное произведение.
     */
    dot = (v: Vec2f): number => this.x * v.x + this.y * v.y;

    /**
     * Возвращает угол между двумя векторами-параметрами.
     * У возвращаемого угла нет знака, все значения лежат в проеделах [0..180].
     *
     * @param	v1	    Первый вектор.
     * @param	v2	    Второй вектор.
     * @return	float   Угол между векторами.
     */
    static getUnsignedAngleBetweenVectorsDegs = (v1: Vec2f, v2: Vec2f): number => Math.acos( Vec2f.normalised(v1).dot( Vec2f.normalised(v2) ) ) * Utils.RADS_TO_DEGS;

    /**
     * Возвращает знак угла между двумя векторами.
     * 1, если второй вектор находится против часовой стрелки относительно первого;
     * -1, если второй вектор находится по часовой стрелке относительно первого;
     * 0, если угол между ними 0.
     *
     * @param	u	Первый угол.
     * @param	v	Второй угол.
     * @return		Знак угла.
     */
    static zcross(u: Vec2f, v: Vec2f): number {
        const p = u.x * v.y - v.x * u.y;

        if (p > 0.0) {
            return 1;
        } else {
            if (p < 0.0) {
                return -1;
            }
        }

        return 0;
    }

    /**
     * Возвращает угол со знаком между двумя векорами: this и параметром.
     * <p>
     * Угол будет положительным, если второй вектор находится против часовой стрелки относительно первого;
     * Угол будет отричательным, если второй вектор находится по часовой стрелке относительно первого.
     *
     * @param	otherVector Второй вектор.
     * @return	float       Угол между векторами в градусах.
     */
    public getSignedAngleDegsTo(otherVector: Vec2f): number {
        const thisVectorUV  = Vec2f.normalised(this);
        const otherVectorUV = Vec2f.normalised(otherVector);

        const unsignedAngleDegs = Math.acos( thisVectorUV.dot(otherVectorUV) ) * Utils.RADS_TO_DEGS;

        if ( Vec2f.zcross(thisVectorUV, otherVectorUV) == 1) {
            return unsignedAngleDegs;
        } else {
            return -unsignedAngleDegs;
        }
    }

    /**
     * Возвращает единичный вектор с примененными к нему ограничениями.
     * Если угол между идеальным положением вектора и бейзлайном привышает ограничения, то
     * возвращаем вектор, который повернут на граничный угол относительно бейзлайна.
     * В противном случае - возвращаем идеальный вектор.
     *
     * @param	directionUV	                Идеальное положение вектора, которое возможно недостижимо.
     * @param	baselineUV	                Вектор относительно которого считаются углы.
     * @param	clockwiseConstraintDegs	    Угол-ограничение по часовой стрелке.
     * @param	antiClockwiseConstraintDegs	Угол-ограничение против часовой стрелки.
     * @return	Vec2f
     */
    static getConstrainedUV(directionUV: Vec2f, baselineUV: Vec2f, clockwiseConstraintDegs: number, antiClockwiseConstraintDegs: number): Vec2f {
        const signedAngleDegs = baselineUV.getSignedAngleDegsTo(directionUV);

        if (signedAngleDegs > antiClockwiseConstraintDegs) {
            return Vec2f.rotateDegs(baselineUV, antiClockwiseConstraintDegs);
        }

        if (signedAngleDegs < -clockwiseConstraintDegs) {
            return Vec2f.rotateDegs(baselineUV, -clockwiseConstraintDegs);
        }

        return directionUV;
    }

    /**
     * Вращает текущий вектор на число-параметр радиан.
     * <p>
     * Положительное значение угла свидетельствует о повороте против часовой стрелки.
     * Отрицательное значеине - по часовой.
     * <p>
     * Меняет текущий вектор и возвращает this для создания цепочек.
     * @param   angleRads	TУгол поворота в радианах.
     * @return	Vec2f
     */
    rotateRads(angleRads: number): Vec2f {
        // Поворот вокруг оси z:
        // x' = x*cos q - y*sin q
        // y' = x*sin q + y*cos q
        // z' = z

        const cosTheta = Math.cos(angleRads);
        const sinTheta = Math.sin(angleRads);

        const rotatedVector = new Vec2f(this.x * cosTheta - this.y * sinTheta,  // x
            this.x * sinTheta + this.y * cosTheta); // y

        this.x = rotatedVector.x;
        this.y = rotatedVector.y;

        return this;
    }

    /**
     * Поворачивает вектор-параметр на заданное число градусов.
     * Method to rotate this Vec2f by a given angle as specified in degrees.
     * <p>
     * Метод не меняет исходный вектор.
     * Положительное значение угла свидетельствует о повороте против часовой стрелки.
     * Отрицательное значеине - по часовой.
     *
     * @param	source		Вектор для поворота.
     * @param	angleDegs	Угол поворота в градусах.
     * @return	Vec2f
     */
    static rotateDegs(source: Vec2f, angleDegs: number): Vec2f {
        // Поворот вокруг оси z:
        // x' = x*cos q - y*sin q
        // y' = x*sin q + y*cos q
        // z' = z

        const angleRads = angleDegs * Utils.DEGS_TO_RADS;

        const cosTheta = Math.cos(angleRads);
        const sinTheta = Math.sin(angleRads);

        return new Vec2f(source.x * cosTheta - source.y * sinTheta,  // x
            source.x * sinTheta + source.y * cosTheta); // y
    }
}
