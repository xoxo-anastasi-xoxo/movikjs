import {BoneConnectionPoint} from './BoneConnectionPoint';
import {FabrikJoint3D} from './FabrikJoint3D';
import {JointType} from './JointType';
import {Vec3f} from '../utils/Vec3f';
import {Colour4f} from '../utils/Colour4f';
import {Utils} from '../utils/Utils';

/**
 * Кость.
 * <p>
 * FabrikBone3D состоит из начальной и конечной позиции и FabrikJoint3D, который ограничивает возможность поворота.
 */
export class FabrikBone3D {
    /**
     * Если данная кость присоединена к кости из другой цепи, к какому концу другой цепи она должна присоединяться?
     * <p>
     * По умолчанию присоединяется к концу данной кости.
     * <p>
     * Это поле может быть изменено с помощью метода {#link #setBoneConnectionPoint(BoneConnectionPoint)}, или при соединении кости
     * с другой цепью с помощью метода {@link FabrikStructure3D#connectChain(FabrikChain3D, number, number, BoneConnectionPoint)}.
     */
    private _boneConnectionPoint: BoneConnectionPoint = BoneConnectionPoint.END;

    /**
     * _joint	Сустав для данной кости.
     * <p>
     * У каждой кости есть один сустав, располагающийся в начальной позиции кости.
     * Он определяет как кость может быть повернута относительно предыдущей кости в цепи.
     * <p>
     * По умолчанию сустав не имеет ограничений, но они могут быть заданы с помощью методов
     * {@link #setClockwiseConstraintDegs(number)} и {@link #setAnticlockwiseConstraintDegs(number)}.
     */
    private _joint: FabrikJoint3D = new FabrikJoint3D();

    /**
     * _startLocation	Начальная позиция кости.
     * <p>
     * Начальная позиция должна задаваться только через конструктор или
     * с помощью метода 'addBone' класса {@link FabrikChain3D}.
     */
    private _startLocation: Vec3f = new Vec3f();

    /**
     * _endLocation	Конечная позиция кости.
     * <p>
     * Конечная позиция должна задаваться только через конструктор
     * или через метод 'addBone' класса {@link FabrikChain3D}.
     */
    private _endLocation: Vec3f = new Vec3f();

    /**
     * _name	Имя кости.
     * <p>
     * Не обязательно использовать это свойство.
     * Иногда его использование облегчает идентификацию кости в цепи.
     *
     * @see #setName(string)
     * @see #FabrikBone3D(Vec3f, Vec3f, string)
     * @see #FabrikBone3D(Vec3f, Vec3f, number, string)
     */
    private _name: string = '';

    /**
     * Длина кости.
     */
    private _length: number = 0;

    /**
     * Цвет для визуализации кости.
     *
     * @default Белый непрозрачный - [1, 1, 1, 1].
     */
    private _colour: Colour4f = new Colour4f();

    // ---------- Constructors ----------

    /**
     * Конструктор.
     * <p>
     * Принимает несколько возможных комбинаций параметров:
     * <p>
     * Конструктор без параметров. Все поля класса принимают значения по умолчанию.
     * <p>
     * Если третий параметр конструктора задан как null или undefiened, но при этом первые 2 параметра присутствуют,
     * то конструктор будет воспринимать первые 2 параметра как начальную и конечную позиции данной кости.
     * Параметры с четвертого по седьмой опциональны.
     *
     * @param	startLocation	            Начальная позиция кости в мировой системе координат.
     * @param	endLocationOrDirection		Конечная позиция кости в мировой системе координат.
     * @param	length		                null или undefined.
     * @param	colour		                Цвет кости.
     * @param	name		                Название кости.
     * <p>
     * Если третий параметр конструктора - это число, но при этом первые 2 параметра присутствуют,
     * то конструктор будет воспринимать первые 2 параметра как начальную позицию данной кости и её направление.
     * Параметры с четвертого по седьмой опциональны.
     *
     * @param	startLocation	            Начальная позиция кости в мировой системе координат.
     * @param	endLocationOrDirection		Конечная позиция кости в мировой системе координат.
     * @param	length		                null или undefined.
     * @param	colour		                Цвет кости.
     * @param	name		                Название кости.
     */
    constructor(
        startLocation?: Vec3f,
        endLocationOrDirection?: Vec3f,
        length?: number | null,
        colour?: Colour4f,
        name?: string,
    ) {
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                throw new Error('FabrikBone2D constructor can not have 1 param.');
            default:
                if (!startLocation || !endLocationOrDirection) {
                    throw new Error('Invalid FabrikBone2D constructor params.');
                }
                if (length === null || length === undefined) {
                    // Представляем первые 2 вектора как начальную и конечную позиции кости.
                    this._startLocation.set(startLocation);
                    this._endLocation.set(endLocationOrDirection);
                    this._updateLength();
                } else {
                    // Представляем первые 2 вектора как начальную позицию и направление кости.
                    Utils.validateDirectionUV(endLocationOrDirection);

                    this._startLocation.set(startLocation);
                    this._endLocation.set( this._startLocation.plus( endLocationOrDirection.normalised().times(length) ) );

                    this._updateLength();
                }

                if (colour instanceof Colour4f) this._colour.set(colour.toArray());
                if (typeof name === 'string') this._name = name;
        }
    }

    // ---------- Methods ----------
    /**
     * Задаёт всем полям данной кости такие жа значения как у кости источника.
     * <p>
     * Копирование свойств неглубокое.
     * После применнеия метода данная кость и кость источник будут содержать общие элементы.
     *
     * @param	source	Кость источник.
     */
    set(source: FabrikBone3D) {
        this._startLocation.set(source._startLocation);
        this._endLocation.set(source._endLocation);
        this._joint.set(source._joint);
        this._colour.set(source._colour.toArray());

        this._name               = source._name;
        this._length             = source._length;
        this._boneConnectionPoint = source._boneConnectionPoint;
    }

    /**
     * Возвращает длину кости.
     *
     * @return
     */
    getLength = (): number => this._length;

    /**
     * Возвращает длину кости.
     *
     * @return
     */
    getLifeLength = (): number => Vec3f.distanceBetween(this._startLocation, this._endLocation);

    /**
     * Задаёт точку соединения.
     * <p>
     * Эта точка соединения контролирует куда присоединяется кость из другой цепи при соединении с нашей костью.
     * <p>
     * Значение по умолчанию BoneConnectionPoint3D.END.
     *
     * @param	bcp	    Точка соединения (BoneConnectionPoint3.START или BoneConnectionPoint.END).
     *
     */
    setBoneConnectionPoint(bcp: BoneConnectionPoint): void { this._boneConnectionPoint = bcp; }

    /**
     * Возвращает точку соединения с данной костью.
     *
     * @return
     */
    getBoneConnectionPoint = (): BoneConnectionPoint => this._boneConnectionPoint;

    /**
     * Возвращает цвет кости
     *
     * @return
     */
    getColour = (): Colour4f => this._colour;

    /**
     * Задаёт цвет кости.
     *
     * @param	colour	Будущий цвет кости для отрисовки.
     */
    setColour(colour: Colour4f): void { this._colour.set(colour.toArray()); }

    /**
     * Возвращает начальную позицию кости.
     *
     * @return Начальная позиция кости.
     */
    getStartLocation = (): Vec3f => this._startLocation;

    /**
     * Возвращает начальную позицию кости в виде числового массива.
     *
     * @return  Начальная позиция кости.
     */
    getStartLocationAsArray = (): number[] => [this._startLocation.x, this._startLocation.y, this._startLocation.z];

    /**
     * Возвращает конечную позицию кости.
     *
     * @return Конечная позиция кости.
     */
    getEndLocation = (): Vec3f => this._endLocation;

    /**
     * Возвращает конечную позицию кости в виде числового массива.
     *
     * @return  Конечная позиция кости.
     */
    getEndLocationAsArray = (): number[] => [this._endLocation.x, this._endLocation.y, this._endLocation.z];

    /**
     * Задаёт сустав для кости.
     *
     * @param	joint	Сустав.
     */
    setJoint(joint: FabrikJoint3D): void { this._joint.set(joint); }

    /**
     * Возвращает сустав для кости.
     *
     * @return  Сустав.
     */
    getJoint = (): FabrikJoint3D => this._joint;

    /**
     * Возвращает тип сустава.
     *
     * @return
     */
    getJointType = (): JointType => this._joint.getJointType();

    /**
     * Задаёт угол ограничение по часовой стрелке для шарнирного сустава.
     * <p>
     * Вызывает ошибки, если угол выходит за границы допустимых значений и
     * если тип сустава не шарнирный.
     *
     * @param    angleDegs    Угол ограничение по часовой стрелке в градусах.
     */
    setHingeJointClockwiseConstraintDegs(angleDegs): void {	this._joint.setHingeJointClockwiseConstraintDegs(angleDegs);	}

    /**
     * Возвращает угол-ограничение по часовой стрелке для шарнирного сустава.
     * <p>
     * Вызывает ошибку, если тип сустава не шарнирный.
     *
     * @return Угол-ограничение по часовой стрелке в градусах.
     */
    getHingeJointClockwiseConstraintDegs(): number	{ return this._joint.getHingeClockwiseConstraintDegs(); }

    /**
     * Задаёт угол ограничение против часовой стрелки для шарнирного сустава.
     * <p>
     * Вызывает ошибки, если угол выходит за границы допустимых значений и
     * если тип сустава не шарнирный.
     *
     * @param    angleDegs    Угол ограничение против часовой стрелки в градусах.
     */
    setHingeJointAnticlockwiseConstraintDegs(angleDegs: number): void { this._joint.setHingeJointAnticlockwiseConstraintDegs(angleDegs); }

    /**
     * Возвращает угол-ограничение против часовой стрелки для шарнирного сустава.
     * <p>
     * Вызывает ошибку, если тип сустава не шарнирный.
     *
     * @return Угол-ограничение против часовой стрелки в градусах.
     */
    getHingeJointAnticlockwiseConstraintDegs(): number { return this._joint.getHingeAnticlockwiseConstraintDegs(); }

    /**
     * Задаёт угол-ограничение для шарового сустава.
     * <p>
     * Вызывает ошибку, если тип сустава не шаровой или
     * угол выходит за границы допустимых значений.
     *
     * @param	angleDegs	Угол-ограничение в градусах.
     */
    setBallJointConstraintDegs(angleDegs: number): void {
        this._joint.setBallJointConstraintDegs(angleDegs);
    }

    /**
     * Возвращает угол ограничение шарового сустава.
     * <p>
     * Вызывает ошибку, если тип сустава не шаровой
     *
     * @return	Угол-ограничение в градусах.
     */
    getBallJointConstraintDegs(): number { return this._joint.getBallJointConstraintDegs();	}

    /**
     * Возвращает направление кости.
     * <p>
     * Если необходимо получить направление обратное направлению кости - воспользуйтесь методом negated вектора.
     *
     * @return  Единичный вектор направления данной кости.
     * @see		Vec3f#negated()
     */
    getDirectionUV(): Vec3f {
        return Vec3f.getDirectionUV(this._startLocation, this._endLocation);
    }

    /**
     * Возвращает глобальный поворот кости относительно глобальной оси X.
     * Возвращаемое значение находится в диапазоне -179.9..180.0.
     *
     * @return	Отклонение вектора в градусах.
     **/
    getGlobalPitchDegs(): number {
        return  Vec3f.getDirectionUV(this._startLocation, this._endLocation).getGlobalPitchDegs();
    }

    /**
     * Возвращает глобальный поворот кости относительно глобальной оси Y.
     * Возвращаемое значение находится в диапазоне -179.9..180.0.
     *
     * @return	Отклонение вектора в градусах.
     **/
    getGlobalYawDegs(): number {
        return  Vec3f.getDirectionUV(this._startLocation, this._endLocation).getGlobalYawDegs();
    }

    /**
     * Задаёт имя кости.
     *
     * @param	name	The name to set.
     */
    setName(name: string): void { this._name = name; }

    /**
     * Возвращает имя кости.
     *
     * @return String
     */
    getName = (): string => this._name;

    /**
     * Задаёт начальную позицию кости.
     *
     * @param location Начальная позиция кости.
     */
    setStartLocation(location: Vec3f): void {
        this._startLocation.set(location);
    }

    /**
     * Задаёт конечную позицию кости.
     *
     * @param location Конечная позиция кости.
     */
    setEndLocation(location: Vec3f): void {
        this._endLocation.set(location);
    }

    /**
     * Пересчитывает длину кости, опираясь на внутренние поля начальной и конечной позиции.
     */
    _updateLength(): void {
        const length = Vec3f.distanceBetween(this._startLocation, this._endLocation);

        if (length >= 0.0) {
            this._length = length;
        } else {
            throw new Error('Bone getLength must be a positive value.');
        }
    }
}
