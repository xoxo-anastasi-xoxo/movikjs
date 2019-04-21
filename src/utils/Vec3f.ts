import {Utils} from './Utils';
import {Mat3f} from './Mat3f';

/**
 * 3D вектор.
 */
export class Vec3f {
    // Координатные оси
    static X_AXIS = new Vec3f(1, 0, 0);
    static Y_AXIS = new Vec3f(0, 1, 0);
    static Z_AXIS = new Vec3f(0, 0, 1);

    // ----- Properties -----

    // Координаты вектора
    x: number = 0;
    y: number = 0;
    z: number = 0;

    // ----- Methods -----

    /**
     * Конструктор, который принимает четыре вариации параметров:
     * <p>
     * Без параметров - все поля принимают значения по умолчанию.
     * <p>
     * Конструктор копирования. Создается глубокая копия объекта.
     *
     * @param value Вектор-источник
     * <p>
     * Конструктор с одним параметром - числом, задающим координаты вектора по всем осям.
     *
     * @param value Координата вектора по каждой из осей.
     * <p>
     * Конструктор с тремя параметрами - значения координат по X, Y, Z осям соответственно.
     *
     * @param value Значении координаты по оси X.
     * @param y Значении координаты по оси Y.
     * @param z Значении координаты по оси Z.
     * */
    constructor(value?: number | Vec3f, y?: number, z?: number) {
        switch (arguments.length) {
            case 0: break;
            case 1:
                if (value instanceof Vec3f) {
                    this.x = value.x;
                    this.y = value.y;
                    this.z = value.z;
                } else {
                    this.x = this.y = this.z = value;
                }
                break;
            case 3:
                if (typeof value === 'number') {
                    this.x = value;
                    this.y = y;
                    this.z = z;
                } else {
                    throw new Error('Vec3f constructor was invoked incorrectly.')
                }
                break;
        }
    }

    /**
     * Возвращает копию вектора-источника.
     *
     * @param	source	Вектор-источник.
     * @return		    Глубокая копия вектора источника .
     */
    static clone = (source: Vec3f): Vec3f => new Vec3f(source.x, source.y, source.z);

    /**
     * Задаёт значения полей вектора.
     * Принимает две вариации параметров:
     * <p>
     * Один параметр - вектор источник.
     *
     * @param	source	Вектор-источник.
     * <p>
     * Три параметра - x, y, z соответственно.
     *
     * @param	source	Значение координаты по X.
     * @param	y	Значение координаты по Y.
     * @param	z	Значение координаты по Z.
     */
    set(source: Vec3f | number, y?: number, z?: number): void {
        switch (arguments.length) {
            case 0: break;
            case 1:
                if (source instanceof Vec3f) {
                    this.x = source.x;
                    this.y = source.y;
                    this.z = source.z;
                } else {
                    throw new Error('Vec3f set was invoked incorrectly.')
                }
                break;
            case 3:
                if (typeof source === 'number') {
                    this.x = source;
                    this.y = y;
                    this.z = z;
                } else {
                    throw new Error('Vec3f set was invoked incorrectly.')
                }
                break;
            default:
                throw new Error('Vec3f set was invoked incorrectly.')
        }
    }

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
    approximatelyEquals(v, tolerance) {
        if (tolerance < 0) {
            throw Error('Equality threshold must be greater than or equal to 0.0f');
        }

        const xDiff = Math.abs(this.x - v.x);
        const yDiff = Math.abs(this.y - v.y);
        const zDiff = Math.abs(this.z - v.z);

        return (xDiff < tolerance && yDiff < tolerance && zDiff < tolerance);
    }

    /**
     * Возвращает перпендикулярны ли два вектора.
     *
     * @param	a	Первый вектор.
     * @param	b	Второй вектор.
     * @return		Перпендикулярны ли они.
     */
    static perpendicular = (a: Vec3f, b: Vec3f): boolean => Utils.approximatelyEquals( Vec3f.dotProduct(a, b), 0.0, 0.01 );

    /**
     * Возвращает равна ли примерно длина данного вектора числу параметру.
     *
     * @param	value		Значение для сравнения с длиной.
     * @param	tolerance	Значение "терпимости".
     * @return				Равны ли примерно длина и число-параметр.
     */
    lengthIsApproximately(value: number, tolerance: number): boolean {
        if (tolerance < 0) {
            throw new Error('Comparison tolerance cannot be less than zero.');
        }

        return (Math.abs(this.length() - value) < tolerance);
    }

    /** Зануляет координаты данного вектора */
    zero(): void { this.x = this.y = this.z = 0.0; }

    /**
     * Задаёт текущему вектору противоположное направление. Возвращает this для построения цепочек.
     *
     * @return	Вектор с противоположным направлением.
     */
    negate(): Vec3f {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;

        return this;
    }

    /**
     * Возвращает вектор противоположного направления.
     * Сам вектор не меняет.
     *
     * @return Вектор противоположного направления.
     */
    negated = (): Vec3f => new Vec3f(-this.x, -this.y, -this.z);

    /**
     * Возвращает равны ли примерно вектора при заданном уровне "терпимости".
     *
     * @param	a		Первый вектор.
     * @param	b		Второй вектор.
     * @param	tolerance	Уровень "терпимости", максимальная разница между векторами, при которой они всё еще равны.
     * @return
     */
    static approximatelyEqual = (a: Vec3f, b: Vec3f, tolerance: number): boolean => (
        (Math.abs(a.x - b.x) < tolerance)
        && (Math.abs(a.y - b.y) < tolerance)
        && (Math.abs(a.z - b.z) < tolerance)
    );

    /**
     * Нормализует и возвращает себя.
     * Если величина вектора равна нулю, то возвращается вектор без изменений.
     *
     * @return	Нормализованный вектор.
     */
     normalise(): Vec3f {
        const magnitude = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

        if (magnitude > 0) {
            this.x /= magnitude;
            this.y /= magnitude;
            this.z /= magnitude;
        }

        return this;
    }

    /**
     * Возвращает нормализованную версию данного вектора, не меняясь сам.
     *
     * @return	Нормализованный вектор.
     */
    normalised(): Vec3f { return new Vec3f(this).normalise(); }

    /**
     * Возвращает скалярное произведение двух векторов переданных в параметрах.
     *
     * @param	v1	Первый вектор.
     * @param	v2	Второй вектор.
     * @return		Скалярное произведение.
     */
    static scalarProduct = (v1: Vec3f, v2: Vec3f): number => v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;

    /**
     * Возвращает скалярное произведение двух нормализованных векторов переданных в параметрах.
     *
     * @param	v1	Первый вектор.
     * @param	v2	Второй вектор.
     * @return		Скалярное произведение нормализованных векторов.
     */
    static  dotProduct(v1: Vec3f, v2: Vec3f): number {
        const v1Norm = v1.normalised();
        const v2Norm = v2.normalised();

        return v1Norm.x * v2Norm.x + v1Norm.y * v2Norm.y + v1Norm.z * v2Norm.z;
    }

    /**
     * Возвращает векторное произведение двух векторов переданных в параметрах.
     *
     * @param	v1	Первый вектор.
     * @param	v2	Второй вектор.
     * @return		Векторное произведение векторов.
     */
    static crossProduct = (v1: Vec3f, v2: Vec3f): Vec3f => new Vec3f(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);

    /**
     * Возвращает векторное произведение двух векторов: this и параметра.
     *
     * @param	v	Второй вектор.
     * @return		Скалярное произведение нормализованных векторов.
     */
    cross = (v: Vec3f): Vec3f => new Vec3f(this.y * v.z - this.z * v.y,	this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);

    /**
     * Вычисляет расстояние между двумя точками в 3D.
     *
     * @param	v1	Первая точка.
     * @param	v2	Вторая точка.
     * @return		Расстояние между точками.
     */
    static distanceBetween(v1: Vec3f, v2: Vec3f) : number {
        const dx = v2.x - v1.x;
        const dy = v2.y - v1.y;
        const dz = v2.z - v1.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    /**
     * Возвращает длину вектора.
     *
     * @return	Длина вектора.
     */
    length = (): number => Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

    /**
     * Возвращает вектор, компоненты которого - это абсолютные значения вектора-параметра.
     * Не меняет исходный вектор.
     *
     * @param	source	Вектор.
     * @return		    Покомпонентно абсолютный аналог вектора параметра.
     */
    static abs(source: Vec3f): Vec3f {
        const absVector = new Vec3f();

        if (source.x < 0.0) { absVector.x = -source.x; } else { absVector.x = source.x; }
        if (source.y < 0.0) { absVector.y = -source.y; } else { absVector.y = source.y; }
        if (source.z < 0.0) { absVector.z = -source.z; } else { absVector.z = source.z; }

        return absVector;
    }

    /**
     * Возвращает единичный вектор-перпендикуляр к вектору параметру.
     *
     * @param	u	Вектор.
     * @return		Единичный вектор-перпендикуляр для вектора-параметра.
     */
    static genPerpendicularVectorQuick(u: Vec3f): Vec3f {
        let perp: Vec3f;

        if (Math.abs(u.y) < 0.99) {
            perp = new Vec3f(-u.z, 0.0, u.x); // cross(u, UP)
        }
        else {
            perp = new Vec3f(0.0, u.z, -u.y); // cross(u, RIGHT)
        }

        return perp.normalise();
    }

    /**
     * Возвращает единичный вектор-направление от первой точки ко второй.
     *
     * @param	v1	Первая точка.
     * @param	v2	Вторая точка.
     * @return		Единичный вектор-направление.
     */
    static getUvBetween = (v1: Vec3f, v2: Vec3f): Vec3f => new Vec3f( v2.minus(v1) ).normalise();

    /**
     * Возвращает вектор в радианах между векторами.
     * <p>
     * Результат будет всегда положительным числом от 0 до pi (3.14159) радиан.
     *
     * @param	v1	Первый вектор.
     * @param	v2	Второй вектор.
     * @return		Угол между векторами в радианах.
     */
    static getAngleBetweenRads(v1: Vec3f, v2: Vec3f): number {
        // Note: a and b are normalised within the dotProduct method.
        return Math.acos( Vec3f.dotProduct(v1,  v2) );
    }

    /**
     * Возвращает вектор в градусах между векторами.
     * <p>
     * Результат будет всегда положительным числом от 0 до 180.
     *
     * @param	v1	Первый вектор.
     * @param	v2	Второй вектор.
     * @return		Угол между векторами в градусах.
     */
    static getAngleBetweenDegs(v1: Vec3f, v2: Vec3f): number { return Vec3f.getAngleBetweenRads(v1, v2) * Utils.RADS_TO_DEGS; }

    /**
     * Возвращает угол между векторами [-179.9..180.0].
     *
     * @param	referenceVector	Первый, базовый вектор, от которого ведется отсчет.
     * @param	otherVector		Второй вектор.
     * @param	normalVector	Вектор, первендикулярный первым двум.
     * @return					Угол между векторами.
     **/
    static getSignedAngleBetweenDegs(referenceVector: Vec3f, otherVector: Vec3f, normalVector: Vec3f): number {
        const unsignedAngle = Vec3f.getAngleBetweenDegs(referenceVector, otherVector);
        const sign          = Utils.sign( Vec3f.dotProduct(Vec3f.crossProduct(referenceVector, otherVector), normalVector));
        return unsignedAngle * sign;
    }

    /**
     * Возвращает вектор с применёнными к нему ограничениями.
     *
     * @param	vecToLimit		Вектор поворот которого надо ограничить по отношению к базовому вектору.
     * @param	vecBaseline		Базовый вектор.
     * @param	angleLimitDegs	Максимально допустимый угол в градусах.
     * @return					Ограниченный вектор.
     */
    static getAngleLimitedUnitVectorDegs(vecToLimit: Vec3f, vecBaseline: Vec3f, angleLimitDegs: number): Vec3f {
        const angleBetweenVectorsDegs = Vec3f.getAngleBetweenDegs(vecBaseline, vecToLimit);

        if (angleBetweenVectorsDegs > angleLimitDegs) {
            const correctionAxis = Vec3f.crossProduct(vecBaseline.normalised(), vecToLimit.normalised() ).normalise();

            return Vec3f.rotateAboutAxisDegs(vecBaseline, angleLimitDegs, correctionAxis).normalised();
        } else {
            return vecToLimit.normalised();
        }
    }

    /**
     * Возвращает глобальный поворот этого вектора относительно глобальной оси X.
     * Возвращаемое значение находится в диапазоне -179.9..180.0.
     *
     * @return	Отклонение вектора в градусах.
     **/
    getGlobalPitchDegs(): number {
        const xProjected = this.projectOntoPlane(Vec3f.X_AXIS);
        const pitch = Vec3f.getAngleBetweenDegs( Vec3f.Z_AXIS.negated(), xProjected);
        return xProjected.y < 0.0 ? -pitch : pitch;
    }

    /**
     * Возвращает глобальный поворот этого вектора относительно глобальной оси Y.
     * Возвращаемое значение находится в диапазоне -179.9..180.0.
     *
     * @return	Отклонение вектора в градусах.
     **/
    getGlobalYawDegs(): number {
        const yProjected = this.projectOntoPlane(Vec3f.Y_AXIS);
        const yaw = Vec3f.getAngleBetweenDegs( Vec3f.Z_AXIS.negated(), yProjected);
        return yProjected.x < 0.0 ? -yaw : yaw;
    }

    /**
     * Поворачивает вектор-параметр вокруг оси X на заданный угол в радианах.
     *
     * @param	source		Вектор для поворота.
     * @param	angleRads	Угол в радианах.
     * @return				Повернутый вектор.
     */
    static rotateXRads(source: Vec3f, angleRads: number): Vec3f {
        // Поворот вокруг оси x:
        // x' = x
        // y' = y*cos q - z*sin q
        // z' = y*sin q + z*cos q

        const cosTheta = Math.cos(angleRads);
        const sinTheta = Math.sin(angleRads);

        return new Vec3f(source.x, source.y * cosTheta - source.z * sinTheta, source.y * sinTheta + source.z * cosTheta);
    }

    /**
     * Поворачивает вектор-параметр вокруг оси X на заданный угол в градусах.
     *
     * @param	source		Вектор для поворота.
     * @param	angleDegs	Угол в градусах.
     * @return				Повернутый вектор.
     */
    static rotateXDegs(source: Vec3f, angleDegs: number): Vec3f { return Vec3f.rotateXRads(source, angleDegs * Utils.DEGS_TO_RADS); }

    /**
     * Поворачивает вектор-параметр вокруг оси Y на заданный угол в радианах.
     *
     * @param	source		Вектор для поворота.
     * @param	angleRads	Угол в радианах.
     * @return				Повернутый вектор.
     */
    static rotateYRads(source: Vec3f, angleRads: number): Vec3f {
        // Поворот вокруг оси y:
        // x' = z*sin q + x*cos q
        // y' = y
        // z' = z*cos q - x*sin q
    
        const cosTheta = Math.cos(angleRads);
        const sinTheta = Math.sin(angleRads);
    
        return new Vec3f(source.z * sinTheta + source.x * cosTheta, source.y, source.z * cosTheta - source.x * sinTheta);
    }

    /**
     * Поворачивает вектор-параметр вокруг оси Y на заданный угол в градусах.
     *
     * @param	source		Вектор для поворота.
     * @param	angleDegs	Угол в градусах.
     * @return				Повернутый вектор.
     */
    static rotateYDegs(source: Vec3f, angleDegs: number): Vec3f { return Vec3f.rotateYRads(source, angleDegs * Utils.DEGS_TO_RADS); }

    /**
     * Поворачивает вектор-параметр вокруг оси Z на заданный угол в радианах.
     *
     * @param	source		Вектор для поворота.
     * @param	angleRads	Угол в радианах.
     * @return				Повернутый вектор.
     */
    static rotateZRads(source: Vec3f, angleRads: number): Vec3f {
        // Поворот вокруг оси z:
        // x' = x*cos q - y*sin q
        // y' = x*sin q + y*cos q
        // z' = z

        const cosTheta = Math.cos(angleRads);
        const sinTheta = Math.sin(angleRads);

        return new Vec3f(source.x * cosTheta - source.y * sinTheta, source.x * sinTheta + source.y * cosTheta, source.z);
    }

    /**
     * Поворачивает вектор-параметр вокруг оси Z на заданный угол в градусах.
     *
     * @param	source		Вектор для поворота.
     * @param	angleDegs	Угол в градусах.
     * @return				Повернутый вектор.
     */
    static rotateZDegs(source: Vec3f, angleDegs: number): Vec3f { return Vec3f.rotateZRads(source, angleDegs * Utils.DEGS_TO_RADS); }

    /**
     * Поворачивает вектор относительно оси.
     *
     * @param source		Вектор для поворота.
     * @param angleDegs		Угол поворота в радианах.
     * @param rotationAxis	Ось вращения.
     * @return				Исходный вектор, повернутый на нужный угол.
     */
    static rotateAboutAxisRads(source: Vec3f, angleRads: number, rotationAxis: Vec3f): Vec3f {
        const rotationMatrix = new Mat3f();

        const sinTheta         = Math.sin(angleRads);
        const cosTheta         = Math.cos(angleRads);
        const oneMinusCosTheta = 1.0 - cosTheta;

        const xyOne = rotationAxis.x * rotationAxis.y * oneMinusCosTheta;
        const xzOne = rotationAxis.x * rotationAxis.z * oneMinusCosTheta;
        const yzOne = rotationAxis.y * rotationAxis.z * oneMinusCosTheta;

        rotationMatrix.m00 = rotationAxis.x * rotationAxis.x * oneMinusCosTheta + cosTheta;
        rotationMatrix.m01 = xyOne + rotationAxis.z * sinTheta;
        rotationMatrix.m02 = xzOne - rotationAxis.y * sinTheta;

        rotationMatrix.m10 = xyOne - rotationAxis.z * sinTheta;
        rotationMatrix.m11 = rotationAxis.y * rotationAxis.y * oneMinusCosTheta + cosTheta;
        rotationMatrix.m12 = yzOne + rotationAxis.x * sinTheta;

        rotationMatrix.m20 = xzOne + rotationAxis.y * sinTheta;
        rotationMatrix.m21 = yzOne - rotationAxis.x * sinTheta;
        rotationMatrix.m22 = rotationAxis.z * rotationAxis.z * oneMinusCosTheta + cosTheta;

        return rotationMatrix.times(source);
    }

    /**
     * Поворачивает вектор относительно оси.
     *
     * @param source		Вектор для поворота.
     * @param angleDegs		Угол поворота в градусах.
     * @param rotationAxis	Ось вращения.
     * @return				Исходный вектор, повернутый на нужный градус.
     */
    static rotateAboutAxisDegs(source: Vec3f, angleDegs: number, rotationAxis: Vec3f): Vec3f {
        return Vec3f.rotateAboutAxisRads(source, angleDegs * Utils.DEGS_TO_RADS, rotationAxis);
    }

    /**
     * Возвращает сумму данного вектора с вектором из параметров, не меняя данный вектор.
     *
     * @param	v	Вектор.
     * @return		Результат сложения данного вектора с вектором параметром.
     **/
    plus = (v: Vec3f): Vec3f  => new Vec3f(this.x + v.x, this.y + v.y, this.z + v.z);

    /**
     * Возвращает разность данного вектора с вектором из параметров, не меняя данный вектор.
     *
     * @param	v	Вектор.
     * @return		Результат вычитания из данного вектора вектора-параметра.
     **/
    minus = (v: Vec3f): Vec3f => new Vec3f(this.x - v.x, this.y - v.y, this.z - v.z);

    /**
     * Возвращает новый вектор, у которого каждая компонента домноженный на число или
     * на соответствующую компоненту вектора-параметра.
     *
     * @param	scale	Число или вектор.
     * @return
     **/
    times(scale: Vec3f | number): Vec3f {
        if (scale instanceof Vec3f) {
            return new Vec3f(this.x * scale.x, this.y * scale.y, this.z * scale.z);
        } else {
            return new Vec3f(this.x * scale, this.y * scale, this.z * scale);
        }
    }

    /**
     * Домножает каждую компоненту вектора-параметра на число-параметр.
     *
     * @param	v		Вектор.
     * @param	scale	Число, на которое надо домножить.
     **/
    static times(v: Vec3f, scale: number): void { v.x *= scale; v.y *= scale; v.z *= scale; }

    /**
     * Покомпонентно складывает два вектора, записывая результат в первый.
     *
     *  @param	source	Вектор, в который запишется результат сложения.
     *  @param	other	Второй вектор.
     */
    static add(source: Vec3f, other: Vec3f): void { source.x += other.x; source.y += other.y; source.z += other.z; }

    /**
     * Покомпонентно вычитает из первого вектора второй, модифицируя первый.
     *
     *  @param	source	Вектор, который будет содержать результат.
     *  @param	other	Второй вектор.
     */
    static subtract(source: Vec3f, other: Vec3f): void { source.x -= other.x; source.y -= other.y; source.z -= other.z; }

    /**
     * Делит вектор на число и возвращает результат, не меняя при этом исходный вектор.
     *
     * @param	value	Число, на которое необходимо поделить.
     * @return			Результат деления данного вектора на число.
     **/
    dividedBy(value: number): Vec3f { return new Vec3f(this.x / value, this.y / value, this.z / value); }

    /**
     * Возвращает проекцию вектора на плоскость.
     *
     * @param	planeNormal	Нормаль к плоскости.
     * @return				Проекция вектора.
     */
    projectOntoPlane(planeNormal: Vec3f): Vec3f {
        if ( !(planeNormal.length() > 0.0) ) {	throw new Error('Plane normal cannot be a zero vector.'); }

        // Проекция вектора b на плоскость с нормалью n : b - ( b.n / ( |n| squared )) * n
        const b = this.normalised();
        const n = planeNormal.normalised();
        return b.minus(n.times(Vec3f.dotProduct(b, planeNormal))).normalise();
    }

    /**
     * Возвращает направление вектора, для которого v1 - начальная точка, а v2 - конечная.
     * Направление будет единичным вектором.
     *
     * @param	v1	Начальная точка.
     * @param	v2	Конечная точка.
     * @return
     */
    static getDirectionUV(v1: Vec3f, v2: Vec3f): Vec3f { return v2.minus(v1).normalise(); }

    toArray = (): number[] => [this.x, this.y, this.z];
}
