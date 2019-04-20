import {Vec2f} from '../utils/Vec2f';
import {FabrikJoint2D} from './FabrikJoint2D';
import {Colour4f} from '../utils/Colour4f';
import {Utils} from '../utils/Utils';
import {ConstraintCoordinateSystem} from './ConstraintCoordinateSystem';

/**
 * Кость.
 * <p>
 * FabrikBone2D состоит из начальной и конечной позиции и FabrikJoint2D, который ограничивает возможность поворота
 * относительно предыдущей кости в цепи или мировой системы координат.
 */
export class FabrikBone2D {
    /**
     * _joint	Сустав прикреплённый к FabrikBone2D.
     * <p>
     * Каждая кость содержит один сустав, который крепит данную кость к предыдущей.
     * <p>
     * По умолчанию сустав ничем не ограничен. Он может вращаться во всех возможных направлениях.
     * Изменить параметры сустава можно через конструктор кости или с помощью методов
     * {@link #setClockwiseConstraintDegs(float)} и {@link #setAnticlockwiseConstraintDegs(float)}.
     */
    private _joint = new FabrikJoint2D();

    /**
     * _startLocation	Начальная позиция кости.
     * <p>
     * Начальная позиция может быть задана через конструктоp или с помощью методов 'addBone'
     * или 'addConsecutiveBone' из класса {@link FabrikChain2D}.
     */
    private _startLocation = new Vec2f();

    /**
     * _endLocation	Конечная позиция кости.
     * <p>
     * Конечная позиция может быть задана через конструктоp или с помощью метода 'addBone'
     * из класса {@link FabrikChain2D}.
     */
    private _endLocation = new Vec2f();

    /**
     * _name	Название кости.
     * <p>
     * Необязательное поле,облегчающее идентификацию кости в цепи.
     */
    private _name: string = '';

    /**
     * _length	Длина кости вычисленная из её начальной и конечной позиции.
     * <p>
     * В процессе использования кости её длина не меняется.
     */
    private _length: number;

    private _globalConstraintUV = new Vec2f(1.0, 0.0);

    /**
     * Цвет кости.
     * <p>
     * По умолчанию кость белая непрозрачная.
     */
    private _colour = new Colour4f();

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
     * @param	cwConstraintDegs		    Угол-ограничение по часовой стрелке.
     * @param	acwConstraintDegs		    Угол-ограничение против часовой стрелки.
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
     * @param	cwConstraintDegs		    Угол-ограничение по часовой стрелке.
     * @param	acwConstraintDegs		    Угол-ограничение против часовой стрелки.
     * @param	colour		                Цвет кости.
     * @param	name		                Название кости.
     */
    constructor(
        startLocation?: Vec2f,
        endLocationOrDirection?: Vec2f,
        length?: number | null,
        cwConstraintDegs?: number,
        acwConstraintDegs?: number,
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
                    this._endLocation.set( this._startLocation.plus( Vec2f.normalised(endLocationOrDirection).times(length) ) );

                    this._updateLength();
                }

                if (typeof cwConstraintDegs === 'number') this.setClockwiseConstraintDegs(cwConstraintDegs);
                if (typeof acwConstraintDegs === 'number') this.setAnticlockwiseConstraintDegs(acwConstraintDegs);
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
    set(source: FabrikBone2D) {
        this._startLocation.set(source._startLocation);
        this._endLocation.set(source._endLocation);
        this._joint.set(source._joint);
        this._colour.set(source._colour.toArray());

        this._name               = source._name;
        this._length             = source._length;
        this._globalConstraintUV = source._globalConstraintUV;
    }

    getGlobalConstraintUV = () => this._globalConstraintUV;

    /**
     * Возвращает длину кости.
     *
     * @return
     */
    getLength = (): number => this._length;

    /**
     * Задаёт цвет кости.
     *
     * @param	colour	Цвет кости.
     */
    setColour(colour: Colour4f): void {this._colour.set(colour.toArray()); }

    /**
     * Возвращает цвет кости.
     *
     * @return  Цвет кости.
     */
    getColour = (): Colour4f => this._colour;

    /**
     * Задаёт начальную позицию кости.
     *
     * @param location Начальная позиция кости.
     */
    setStartLocation(location: Vec2f): void {
        this._startLocation.set(location);
    }

    /**
     * Возвращает начальную позицию кости.
     *
     * @return Начальная позиция кости.
     */
    getStartLocation = (): Vec2f  => this._startLocation;

    /**
     * Возвращает начальную позицию кости в виде числового массива.
     *
     * @return  Начальная позиция кости.
     */
    getStartLocationAsArray = (): number[] => [this._startLocation.x, this._startLocation.y];

    /**
     * Задаёт конечную позицию кости.
     *
     * @param location Конечная позиция кости.
     */
    setEndLocation(location: Vec2f): void {
        this._endLocation.set(location);
    }

    /**
     * Возвращает конечную позицию кости.
     *
     * @return Конечная позиция кости.
     */
    getEndLocation = (): Vec2f => this._endLocation;

    /**
     * Возвращает конечную позицию кости в виде числового массива.
     *
     * @return  Конечная позиция кости.
     */
    getEndLocationAsArray = (): number[] => [this._endLocation.x, this._endLocation.y];

    /**
     * Задаёт сустав для кости.
     *
     * @param  joint  Сустав.
     */
    setJoint(joint: FabrikJoint2D): void {	this._joint.set(joint); }

    /**
     * Возвращает сустав для кости.
     *
     * @return  Сустав.
     */
    getJoint = (): FabrikJoint2D => this._joint;

    /**
     * Задаёт угол-ограничение по часовой стрелке для сустава кости.
     * <p>
     * При передаче угла вне допустимого диапазона, угол приравневается к одному из граничных значений.
     *
     * @param  angleDegs  Угол-ограничение в градусах.
     */
    setClockwiseConstraintDegs(angleDegs: number): void { this._joint.setClockwiseConstraintDegs(angleDegs); }

    /**
     * Возвращает угол-ограничение по часовой стрелке для сустава кости.
     *
     * @return  Угол-ограничение по часовой стрелке в градусах.
     */
    getClockwiseConstraintDegs = (): number => this._joint.getClockwiseConstraintDegs();

    /**
     * Задаёт угол-ограничение против часовой стрелки для сустава кости.
     * <p>
     * При передаче угла вне допустимого диапазона, угол приравневается к одному из граничных значений.
     *
     * @param  angleDegs  Угол-ограничение в градусах.
     */
    setAnticlockwiseConstraintDegs(angleDegs: number): void { this._joint.setAnticlockwiseConstraintDegs(angleDegs); }

    /**
     * Возвращает угол-ограничение против часовой стрелки для сустава кости.
     *
     * @return  Угол-ограничение против часовой стрелки в градусах.
     */
    getAnticlockwiseConstraintDegs(): number { return this._joint.getAnticlockwiseConstraintDegs(); }

    /**
     * Возвращает направление кости.
     * <p>
     * Если необходимо получить направление обратное направлению кости - воспользуйтесь методом negated вектора.
     *
     * @return  Единичный вектор направления данной кости.
     * @see		Vec2f#negated()
     */
    getDirectionUV = (): Vec2f => Vec2f.getDirectionUV(this._startLocation, this._endLocation);

    /**
     * Задаёт значение имени кости.
     *
     * @param	name	Имя.
     */
    setName(name: string): void { this._name = name; }

    /**
     * Возвращает имя кости.
     *
     * @return	Имя.
     */
    getName = (): string => this._name;

    /**
     * Задаёт тип сустава.
     *
     * @param	coordSystem		Тип сустава.
     */
    setJointConstraintCoordinateSystem(coordSystem: ConstraintCoordinateSystem): void {
        this._joint.setConstraintCoordinateSystem(coordSystem);
    }

    /**
     * Возвращает тип сустава.
     *
     * @return	Тип сустава.
     */
    getJointConstraintCoordinateSystem = (): ConstraintCoordinateSystem => this._joint.getConstraintCoordinateSystem();

    /**
     * Пересчитывает длину кости, опираясь на внутренние поля начальной и конечной позиции.
     */
    private _updateLength(): void {
        const length = Vec2f.distanceBetween(this._startLocation, this._endLocation);

        if (length >= 0.0) {
            this._length = length;
        }
        else {
            throw new Error('Bone getLength must be a positive value.');
        }
    }
}
