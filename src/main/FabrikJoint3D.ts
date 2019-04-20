import {Utils} from '../utils/Utils';
import {JointType} from './JointType';
import {Vec3f} from '../utils/Vec3f';

/**
 * Сустав, определяющий углы-ограничения между костями цепи.
 * <p>
 * Существует три типа суставов:
 * <ul>
 * <li>JointType.BALL - сустав будет вращаться на один и тот же угол во все стороны относительно предыдущей кости
 * в цепи или относительно мировой системы координат, в случае если это начальная кость цепи,</li>
 * <li>JointType.GLOBAL_HINGE - сустав, для которого заданы углы-ограничители относительно мировой системы координат
 * для выбранной оси по и против часовой стрелки,</li>
 * <li>JointType.LOCAL_HINGE - сустав, для которого заданы углы-ограничители относительно предыдущей кости
 * для выбранной оси по и против часовой стрелки.</li>
 * </ul>
 * Шаровой сустав может вращаться в любую сторону относительно положения предыдущей кости в цепи.
 * Угол-ограничитель в 180 градусов будет давать суставу полную свободу движения, а угол в 0
 * градусов не предусматривает движения совсем, делая текущую кость продолжением предыдущей.
 * <p>
 * Шарнирный сустав может вращаться по и против часовой стрелки вдоль каждой оси на допустимое число градусов [0..180].
 * Локальный шарнир ведет отсчет градусов относительно предыдущей кости в цепи,
 * а глобальный - относительно мировой системы координат.
 * <p>
 * Каждая FabrikBone3D имеет один FabrikJoint3D, который располагается в начальной точке кости {@code mStartLocation}.
 *
 */
export class FabrikJoint3D {
    /** Минимальный угол-ограничение для любого из направлений в градусах. Полностью обездвиживает кость. */
    static MIN_CONSTRAINT_ANGLE_DEGS: number = 0.0;

    /** Максимальный угол-ограничение для любого из направлений в градусах. Даёт кости полную свободу. */
    static MAX_CONSTRAINT_ANGLE_DEGS: number = 180.0;

    /**
     * Угол-ограничение в градусах, на который позволяет повернуться сустав (для шаровых суставов).
     * <p>
     * Допустимые значения  [0..180].
     *
     * @default 180.0
     */
    private _rotorConstraintDegs: number = FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS;

    /**
     * Угол в градусах, на который сустав позволяет повернуться по часовой стрелке
     * относительно выбранной оси и системы координат (для шарнирных суставов).
     * <p>
     * Допустимые значения  [0..180].
     *
     * @default 180.0
     * @see mHingeAxis
     */
    private _hingeClockwiseConstraintDegs: number = FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS;

    /**
     * Угол в градусах, на который сустав позволяет повернуться против часовой стрелки
     * относительно выбранной оси и системы координат (для шарнирных суставов).
     * <p>
     * Допустимые значения  [0..180].
     *
     * @default 180.0
     * @see mHingeAxis
     */
    private _hingeAnticlockwiseConstraintDegs: number = FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS;

    /** Ось вращения шарнирного сустава. */
    private _rotationAxisUV: Vec3f = new Vec3f();

    /** Опорная ось шарнирного сустава. */
    private _referenceAxisUV: Vec3f = new Vec3f();

    /**
     * Тип сустава.
     * <p>
     * Допустимые значения - JointType.BALL, JointType.GLOBAL_HINGE или JointType.LOCAL_HINGE.
     *
     * @default	JointType.BALL
     */
    private _jointType: JointType = JointType.BALL;

    // ---------- Constructors ----------

    /**
     * Конструктор.
     * <p>
     * Принимает 2 возможных сочетания параметров:
     * <p>
     * Без параметров.
     * Все поля получают занчения по умолчанию.
     * Задать недефолтные значения можно через методы
     * {@link #setAsGlobalHinge(Vec3f, number, number, Vec3f)} и
     * {@link #setAsLocalHinge(Vec3f, number, number, Vec3f)} methods.
     * <p>
     * Конструктор копирования.
     * Создаёт глубокую копию сустава.
     *
     * @param source Сустав источник.
     */
    constructor(source?: FabrikJoint3D) { if (source) this.set(source); }

    /**
     * Делает из данного сустава глубокую копию сустава-источника.
     *
     * @param	source	Сустав источник.
     */
    set(source: FabrikJoint3D): void {
        this._jointType                        = source._jointType;
        this._rotorConstraintDegs              = source._rotorConstraintDegs;
        this._hingeClockwiseConstraintDegs     = source._hingeClockwiseConstraintDegs;
        this._hingeAnticlockwiseConstraintDegs = source._hingeAnticlockwiseConstraintDegs;

        this._rotationAxisUV.set(source._rotationAxisUV);
        this._referenceAxisUV.set(source._referenceAxisUV);
    }

    /**
     * Задаёт данному суставу шаровой тип.
     *
     * @param	constraintAngleDegs	Максимальный допустимый угол в градусах между костью сустава и предыдущей костью в цепи.
     */
    setAsBallJoint(constraintAngleDegs: number): void {
        FabrikJoint3D._validateConstraintAngleDegs(constraintAngleDegs);

        this._rotorConstraintDegs = constraintAngleDegs;
        this._jointType = JointType.BALL;
    }

    /**
     * Задаёт данному суставу шарнирный тип.
     *
     * @param jointType						Тип сустава, допустимы и BALL, и GLOBAL_HINGE, и LOCAL_HINGE.
     * @param rotationAxis					Ось вращения шарнира.
     * @param clockwiseConstraintDegs		Угол ограничение по часовой стрелке относительно опорной оси.
     * @param anticlockwiseConstraintDegs	Угол ограничение против часовой стрелки относительно опорной оси.
     * @param referenceAxis					Опорная ось.
     */
    setHingeJoint(jointType: JointType, rotationAxis: Vec3f, clockwiseConstraintDegs: number, anticlockwiseConstraintDegs: number, referenceAxis: Vec3f): void {
        // Убедимся, что ось вращения и опорная ось образуют плоскость (т. к. они могут быть перпендикулярны и их скалярное произведение равно 0)
        if ( !Utils.approximatelyEquals( Vec3f.dotProduct(rotationAxis, referenceAxis), 0.0, 0.01) ) {
            const angleDegs = Vec3f.getAngleBetweenDegs(rotationAxis, referenceAxis);
            throw new Error('The reference axis must be in the plane of the hinge rotation axis - angle between them is currently: ' + angleDegs);
        }

        FabrikJoint3D._validateConstraintAngleDegs(clockwiseConstraintDegs);
        FabrikJoint3D._validateConstraintAngleDegs(anticlockwiseConstraintDegs);
        FabrikJoint3D._validateAxis(rotationAxis);
        FabrikJoint3D._validateAxis(referenceAxis);

        this._hingeClockwiseConstraintDegs     = clockwiseConstraintDegs;
        this._hingeAnticlockwiseConstraintDegs = anticlockwiseConstraintDegs;
        this._jointType                        = jointType;
        this._rotationAxisUV.set(  rotationAxis.normalised()  );
        this._referenceAxisUV.set( referenceAxis.normalised() );
    }

    /**
     * Задаёт угол ограничение по часовой стрелке для шарнирного сустава.
     * <p>
     * Вызывает ошибки, если угол выходит за границы допустимых значений и
     * если тип сустава не шарнирный.
     *
     * @param    angleDegs    Угол ограничение по часовой стрелке в градусах.
     */
    setHingeJointClockwiseConstraintDegs(angleDegs: number): void {
        FabrikJoint3D._validateConstraintAngleDegs(angleDegs);

        if (this._jointType !== JointType.BALL) {
            this._hingeClockwiseConstraintDegs = angleDegs;
        } else {
            throw new Error('Joint type is JointType.BALL - it does not have hinge constraint angles.');
        }
    }

    /**
     * Возвращает угол-ограничение по часовой стрелке для шарнирного сустава.
     * <p>
     * Вызывает ошибку, если тип сустава не шарнирный.
     *
     * @return Угол-ограничение по часовой стрелке в градусах.
     */
    getHingeClockwiseConstraintDegs(): number {
        if ( this._jointType !== JointType.BALL ) {
            return this._hingeClockwiseConstraintDegs;
        } else {
            throw new Error('Joint type is JointType.BALL - it does not have hinge constraint angles.');
        }
    }

    /**
     * Задаёт угол ограничение против часовой стрелки для шарнирного сустава.
     * <p>
     * Вызывает ошибки, если угол выходит за границы допустимых значений и
     * если тип сустава не шарнирный.
     *
     * @param    angleDegs    Угол ограничение против часовой стрелки в градусах.
     */
    setHingeJointAnticlockwiseConstraintDegs(angleDegs: number): void {
        FabrikJoint3D._validateConstraintAngleDegs(angleDegs);

        if (this._jointType !== JointType.BALL) {
            this._hingeAnticlockwiseConstraintDegs = angleDegs;
        } else {
            throw new Error('Joint type is JointType.BALL - it does not have hinge constraint angles.');
        }
    }

    /**
     * Возвращает угол-ограничение против часовой стрелки для шарнирного сустава.
     * <p>
     * Вызывает ошибку, если тип сустава не шарнирный.
     *
     * @return Угол-ограничение против часовой стрелки в градусах.
     */
    getHingeAnticlockwiseConstraintDegs() {
        if ( this._jointType !== JointType.BALL ) {
            return this._hingeAnticlockwiseConstraintDegs;
        } else {
            throw new Error('Joint type is JointType.BALL - it does not have hinge constraint angles.');
        }
    }

    /**
     * Задаёт угол-ограничение для шарового сустава.
     * <p>
     * Вызывает ошибку, если тип сустава не шаровой или
     * угол выходит за границы допустимых значений.
     *
     * @param	angleDegs	Угол-ограничение в градусах.
     */
    setBallJointConstraintDegs(angleDegs: number): void {
        FabrikJoint3D._validateConstraintAngleDegs(angleDegs);

        if (this._jointType === JointType.BALL) {
            this._rotorConstraintDegs = angleDegs;
        } else {
            throw new Error('This joint is of type: ' + this._jointType + ' - only joints of type JointType.BALL have a ball joint constraint angle.');
        }
    }

    /**
     * Возвращает угол ограничение шарового сустава.
     * <p>
     * Вызывает ошибку, если тип сустава не шаровой
     *
     * @return	Угол-ограничение в градусах.
     */
    getBallJointConstraintDegs(): number {
        if (this._jointType === JointType.BALL) {
            return this._rotorConstraintDegs;
        }
        else {
            throw new Error('This joint is not of type JointType.BALL - it does not have a ball joint constraint angle.');
        }
    }

    /**
     * Задаёт ось вращения шарнирного сустава как нормализованную версию исходной оси.
     * <p>
     * Вызывает ошибки, если переданная ось имеет нулевую длину и если тип сустава не шарнирный.
     *
     * @param axis	Ось вращения.
     */
    setHingeRotationAxis(axis: Vec3f): void {
        FabrikJoint3D._validateAxis(axis);

        if ( this._jointType !== JointType.BALL ) {
            this._rotationAxisUV.set( axis.normalised() );
        } else {
            throw new Error('Joint type is JointType.BALL - it does not have a hinge rotation axis.');
        }
    }

    /**
     * Возвращает опорную ось шарнирного сустава.
     * <p>
     * Если тип сустава не шарнирный, выбрасывается ошибка.
     *
     * @return	Опорная ось.
     */
    getHingeReferenceAxis(): Vec3f {
        if ( this._jointType !== JointType.BALL ) {
            return this._referenceAxisUV;
        } else {
            throw new Error('Joint type is JointType.BALL - it does not have a hinge reference axis.');
        }
    }

    /**
     * Задаёт опорную ось шарнирного сустава, относительно которой измеряется угол вращения сустава.
     * <p>
     * Вызывает ошибки, если переданная ось имеет нулевую длину и если тип сустава не шарнирный.
     *
     * @param referenceAxis	Опорная ось.
     */
    setHingeReferenceAxis(referenceAxis: Vec3f): void {
        FabrikJoint3D._validateAxis(referenceAxis);

        if ( this._jointType !== JointType.BALL ) {
            this._referenceAxisUV.set( referenceAxis.normalised() );
        } else {
            throw new Error('Joint type is JointType.BALL - it does not have a hinge reference axis.');
        }
    }

    /**
     * Возвращает ось вращения шарнирного сустава.
     * <p>
     * Если у сустава тип JointType.BALL (т.е. он не шарнирный) бросам ошибку.
     *
     * @return	Ось вращения шарнирного сустава.
     */
    getHingeRotationAxis(): Vec3f {
        if ( this._jointType !== JointType.BALL ) {
            return this._rotationAxisUV;
        } else {
            throw new Error('Joint type is JointType.BALL - it does not have a hinge rotation axis.');
        }
    }

    /**
     * Возвращает тип сустава.
     * <p>
     * Допустимые значения: JointType.BALL, JointType.GLOBAL_HINGE, JointType.LOCAL_HINGE.
     *
     * @return	Тип сустава.
     */
    getJointType(): JointType { return this._jointType; }

    // ---------- Private Methods ----------

    static _validateConstraintAngleDegs(angleDegs: number): void {
        if (angleDegs < FabrikJoint3D.MIN_CONSTRAINT_ANGLE_DEGS || angleDegs > FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS) {
            throw new Error('Constraint angles must be within the range ' + FabrikJoint3D.MIN_CONSTRAINT_ANGLE_DEGS + ' to ' + FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS + ' inclusive.');
        }
    }

    static _validateAxis(axis: Vec3f): void {
        if ( axis.length() <= 0.0 ) {
            throw new Error('Provided axis is illegal - it has a magnitude of zero.');
        }
    }
}
