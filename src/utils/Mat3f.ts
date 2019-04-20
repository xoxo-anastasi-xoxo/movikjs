import {Vec3f} from './Vec3f';
import {Utils} from './Utils';

/**
 * Числовая матрица 3x3.
 * <p>
 * Элементы данной матрицы:
 * m00  m10  m20
 * m01	m11  m21
 * m02	m12  m22
 * <p>
 * Основной элемент матрицы - столбец.
 *
 */
export class Mat3f {
    // Первый вектор-столбец - положительно направление оси X.
    m00: number = 0;
    m01: number = 0;
    m02: number = 0;

    // Второй вектор-столбец - положительно направление оси Y.
    m10: number = 0;
    m11: number = 0;
    m12: number = 0;

    // Третий вектор-столбец - положительно направление оси Z.
    m20: number = 0;
    m21: number = 0;
    m22: number = 0;

    /**
     * Конструктор.
     * Принимает 9 параметров или ноль.
     *
     * @param	m00	Первый компонент по оси X.
     * @param	m01	Второй компонент по оси X.
     * @param	m02	Третий компонент по оси X.
     * @param	m10	Первый компонент по оси Y.
     * @param	m11	Второй компонент по оси Y.
     * @param	m12	Третий компонент по оси Y.
     * @param	m20	Первый компонент по оси Z.
     * @param	m21	Второй компонент по оси Z.
     * @param	m22	Третий компонент по оси Z.
     */
    constructor(m00?: number, m01?: number, m02?: number, m10?: number, m11?: number, m12?: number, m20?: number, m21?: number, m22?: number) {
        switch (arguments.length) {
            case 0:
                return;
            case 9:
                this.m00 = m00;
                this.m01 = m01;
                this.m02 = m02;

                this.m10 = m10;
                this.m11 = m11;
                this.m12 = m12;

                this.m20 = m20;
                this.m21 = m21;
                this.m22 = m22;
                return;
            default:
                throw Error('Invalid Mat3f constructor params.')
        }
    }

    /** Зануляет все числа в матрице. */
    zero(): void { this.m00 = this.m01 = this.m02 = this.m10 = this.m11 = this.m12 = this.m20 = this.m21 = this.m22 = 0.0; }

    /** Превращает данную матрицу в единичную. */
    setIdentity(): void {
        this.m00 = this.m11 = this.m22 = 1.0;
        this.m01 = this.m02 = this.m10 = this.m12 = this.m20 = this.m21 = 0.0;
    }

    /**
     * Возвращает новую матрицу, транспонированную версию матрицы-параметра.
     *
     * @param	m	Матрицу, которую хотят транспонировать.
     * @return		Транспонированная версия матрицы-параметра.
     */
    static transpose = (m: Mat3f): Mat3f => new Mat3f(m.m00, m.m10, m.m20, m.m01, m.m11, m.m21, m.m02, m.m12, m.m22);

    /**
     * Задаёт матрицу вращения.
     *
     * @param	referenceDirection	Вектор используемый в качестве оси Z.
     * @return	Матрица вращения.
     */
    static createRotationMatrix(referenceDirection: Vec3f): Mat3f {
        const  rotMat = new Mat3f();

        if (referenceDirection.y == 1.0) {
        referenceDirection.y -= 0.0001;
        referenceDirection.normalise();
    }

        rotMat.setZBasis( referenceDirection );
        rotMat.setXBasis( Vec3f.crossProduct( referenceDirection, new Vec3f(0.0, 1.0, 0.0) ).normalised() );
        rotMat.setYBasis( Vec3f.crossProduct( rotMat.getXBasis(), rotMat.getZBasis() ).normalised() );

        return rotMat;
    }

    /**
     * Состоит ли матрица из трёх ортогональных векторов.
     *
     * @return	Ортогональна ли матрица.
     */
    isOrthogonal(): boolean {
        const xCrossYDot = Vec3f.dotProduct(this.getXBasis(), this.getYBasis());
        const xCrossZDot = Vec3f.dotProduct(this.getXBasis(), this.getZBasis());
        const yCrossZDot = Vec3f.dotProduct(this.getYBasis(), this.getZBasis());

        return (Utils.approximatelyEquals(xCrossYDot, 0.0, 0.01) &&
            Utils.approximatelyEquals(xCrossZDot, 0.0, 0.01) &&
            Utils.approximatelyEquals(yCrossZDot, 0.0, 0.01));
    }

    /**
     * Умножает матрицу на вектор обычным матричным умножением.
     *
     * @param	source	Вектор.
     * @return
     */
    times(source: Vec3f): Vec3f {
        return new Vec3f(this.m00 * source.x + this.m10 * source.y + this.m20 * source.z,
            this.m01 * source.x + this.m11 * source.y + this.m21 * source.z,
            this.m02 * source.x + this.m12 * source.y + this.m22 * source.z);
    }

    /**
     * Вычисляет определитель матрицы.
     *
     * @return	Определитель матрицы.
     */
    determinant() {
        return this.m20 * this.m01 * this.m12
            - this.m20  * this.m02 * this.m11
            - this.m10 * this.m01 * this.m22
            + this.m10 * this.m02 * this.m21
            + this.m00 * this.m11 * this.m22
            - this.m00 * this.m12 * this.m21;
    }

    /**
     * Возвращает обратную матрицу для матрицы-параметра.
     *
     * @param	m	Исходная матрица.
     * @return		Матрица обратная исходной.
     */
    static inverse(m: Mat3f): Mat3f {
        const  d = m.determinant();

        const  temp = new Mat3f();

        temp.m00 =  (m.m11  * m.m22 - m.m12 * m.m21) / d;
        temp.m01 = -(m.m01  * m.m22 - m.m02 * m.m21) / d;
        temp.m02 =  (m.m01  * m.m12 - m.m02 * m.m11) / d;
        temp.m10 = -(-m.m20 * m.m12 + m.m10 * m.m22) / d;
        temp.m11 =  (-m.m20 * m.m02 + m.m00 * m.m22) / d;
        temp.m12 = -(-m.m10 * m.m02 + m.m00 * m.m12) / d;
        temp.m20 =  (-m.m20 * m.m11 + m.m10 * m.m21) / d;
        temp.m21 = -(-m.m20 * m.m01 + m.m00 * m.m21) / d;
        temp.m22 =  (-m.m10 * m.m02 + m.m00 * m.m11) / d;

        return temp;
    }

    /**
     * Поворачивает эту матрицу на угол-параметр относительно оси-параметра.
     * Не модифицирует исходную матрицу.
     *
     *  @param	angleRads	Угол в радианах.
     *  @param	rotationAxis	Ось.
     *  @return
     *  */
    rotateRads(rotationAxis: Vec3f, angleRads: number): Mat3f {
        const  dest = new Mat3f();

        const  sin         = Math.sin(angleRads);
        const  cos         = Math.cos(angleRads);
        const  oneMinusCos = 1.0 - cos;

        const  xy = rotationAxis.x * rotationAxis.y;
        const  yz = rotationAxis.y * rotationAxis.z;
        const  xz = rotationAxis.x * rotationAxis.z;
        const  xs = rotationAxis.x * sin;
        const  ys = rotationAxis.y * sin;
        const zs = rotationAxis.z * sin;

        const f00 = rotationAxis.x * rotationAxis.x * oneMinusCos + cos;
        const f01 = xy * oneMinusCos + zs;
        const f02 = xz * oneMinusCos - ys;

        const f10 = xy * oneMinusCos - zs;
        const f11 = rotationAxis.y * rotationAxis.y * oneMinusCos + cos;
        const f12 = yz * oneMinusCos + xs;

        const f20 = xz * oneMinusCos + ys;
        const f21 = yz * oneMinusCos - xs;
        const f22 = rotationAxis.z * rotationAxis.z * oneMinusCos + cos;

        const t00 = this.m00 * f00 + this.m10 * f01 + this.m20 * f02;
        const t01 = this.m01 * f00 + this.m11 * f01 + this.m21 * f02;
        const t02 = this.m02 * f00 + this.m12 * f01 + this.m22 * f02;

        const t10 = this.m00 * f10 + this.m10 * f11 + this.m20 * f12;
        const t11 = this.m01 * f10 + this.m11 * f11 + this.m21 * f12;
        const t12 = this.m02 * f10 + this.m12 * f11 + this.m22 * f12;

        dest.m20 = this.m00 * f20 + this.m10 * f21 + this.m20 * f22;
        dest.m21 = this.m01 * f20 + this.m11 * f21 + this.m21 * f22;
        dest.m22 = this.m02 * f20 + this.m12 * f21 + this.m22 * f22;

        dest.m00 = t00;
        dest.m01 = t01;
        dest.m02 = t02;

        dest.m10 = t10;
        dest.m11 = t11;
        dest.m12 = t12;

        return dest;
    }

    /**
     * Поворачивает эту матрицу на угол-параметр относительно оси-параметра.
     * Не модифицирует исходную матрицу.
     *
     *  @param	angleDegs	Угол в градусах.
     *  @param	localAxis	Ось.
     *  @return
     *  */
    rotateDegs = (angleDegs: number, localAxis: Vec3f): Mat3f => this.rotateRads(localAxis, angleDegs * Utils.DEGS_TO_RADS);

    /**
     * Задаёт ось X матрице.
     *
     * @param	v	Вектор, значения которого будут использоваться в качестве оси матрицы.
     */
    setXBasis(v: Vec3f): void { this.m00 = v.x; this.m01 = v.y; this.m02 = v.z; }

    /**
     * Возвращает значения матрицы по оси X.
     *
     * @return
     **/
    getXBasis = (): Vec3f => new Vec3f(this.m00, this.m01, this.m02);

    /**
     * Задаёт ось Y матрице.
     *
     * @param	v	Вектор, значения которого будут использоваться в качестве оси матрицы.
     */
    setYBasis(v: Vec3f): void { this.m10 = v.x; this.m11 = v.y; this.m12 = v.z; }

    /**
     * Возвращает значения матрицы по оси Y.
     *
     * @return
     **/
    getYBasis = (): Vec3f => new Vec3f(this.m10, this.m11, this.m12);

    /**
     * Задаёт ось Z матрице.
     *
     * @param	v	Вектор, значения которого будут использоваться в качестве оси матрицы.
     */
    setZBasis(v: Vec3f): void { this.m20 = v.x; this.m21 = v.y; this.m22 = v.z; }

    /**
     * Возвращает значения матрицы по оси Z.
     *
     * @return
     **/
    getZBasis = (): Vec3f => new Vec3f(this.m20, this.m21, this.m22);

    /**
     * Возвращает матрицу в виде массива из девяти чисел.
     *
     * @return	Матрица как массив из 9 чисел.
     */
    toArray = (): number[] => [this.m00, this.m01, this.m02, this.m10, this.m11, this.m12, this.m20, this.m21, this.m22];

    static identity() {
        let a = new Float32Array(9);
        a[0] = a[4] = a[8]  = 1;
        return a;
    }
}
