import {ConstraintCoordinateSystem} from './ConstraintCoordinateSystem';

/**
 * Сустав, определяющий углы-ограничения между костями цепи.
 * <p>
 * FabrikJoint2D состоит из пары углов:
 * <ul><li>Угол-ограничение по часовой стрелке;</li>
 * <li>Угол-ограничение против часовой стрелки.</li></ul>
 * <p>
 * Они оба измеряются в градусах [0..180].
 * Значение по умолчанию для обоих углов - 180, что означает, что сустав не имеет ограничений.
 * Для установки собственных значений углов-ограничений можно воспользоваться конструктором, задать свойствам значения
 * непосредственно по ссылкам {@link #_clockwiseConstraintDegs} и {@link #_anticlockwiseConstraintDegs} или
 * воспользоваться методами-сеттерами {@link #setClockwiseConstraintDegs} and {@link #setAnticlockwiseConstraintDegs}.
 * Первый и третий метод наиболее предпочтительные, так как они осуществляют проверку задаваемых значений.
 * <p>
 * Каждая FabrikBone2D содержит в себе один FabrikJoint2D, который располагается в начале кости {@code mStartLocation}.
 * <p>
 * Сустав отделен от кости в самостоятельный класс в связи с тем, что существует несколько типов ограничений, что
 * делает функциональность сустава громоздкой и сложной для понимания внутри класса кости.
 */
export class FabrikJoint2D {
    /** Минимальный угол-ограничение для любого из направлений в градусах. Полностью обездвиживает кость. */
    static MIN_2D_CONSTRAINT_ANGLE_DEGS = 0;

    /** Максимальный угол-ограничение для любого из направлений в градусах. Даёт кости полную свободу. */
    static MAX_2D_CONSTRAINT_ANGLE_DEGS = 180;

    /**
     * _clockwiseConstraintDegs	Угол в градусах, на который данный FabrikJoint2D может быть повернут по часовой стрелке
     * относительно предыдущей кости или мировой системы координат, в зависимости от выбранной системы координат.
     * <p>
     * Допустимые значения [0..180].
     *
     * @default 180.0
     */
    private _clockwiseConstraintDegs = FabrikJoint2D.MAX_2D_CONSTRAINT_ANGLE_DEGS;

    /**
     * mAntiClockwiseContraintDegs	Угол в градусах, на который данный FabrikJoint2D может быть повернут против часовой стрелки
     * относительно предыдущей кости или мировой системы координат, в зависимости от выбранной системы координат.
     * <p>
     * Допустимые значения [0..180].
     *
     * @default 180.0
     */
    private _anticlockwiseConstraintDegs = FabrikJoint2D.MAX_2D_CONSTRAINT_ANGLE_DEGS;

    /**
     * _constraintCoordinateSystem	Система координат, относительно которой задаются углы-ограничения.
     * <p>
     * Может принимать значения из перечисления {@link #ConstraintCoordinateSystem}
     * <p>
     * Значение по умолчанию - ConstraintCoordinateSystem.LOCAL.
     */
    private _constraintCoordinateSystem = ConstraintCoordinateSystem.LOCAL;

    // ---------- Constructor ----------

    /**
     * Конструктор.
     * <p>
     * Принимает три параметра угол-ограничение по часовой стрелке, против часовой стрелки и систему координат.
     * Все параметры опциональны, в случае отсутствия принимают значения по умолчанию.
     *
     * @param clockwiseConstraintDegs		Угол-ограничение по часовой стрелке в градусах.
     * @param antiClockwiseConstraintDegs	Угол-ограничение против часовой стрелки в градусах.
     * @param constraintCoordSystem         Система координат.
     */
    constructor(clockwiseConstraintDegs?: number, antiClockwiseConstraintDegs?: number, constraintCoordSystem?: ConstraintCoordinateSystem) {
       switch (arguments.length) {
           case 0:
               return;
           case 3:
               this.setClockwiseConstraintDegs(clockwiseConstraintDegs);
               this.setAnticlockwiseConstraintDegs(antiClockwiseConstraintDegs);
               this._constraintCoordinateSystem = constraintCoordSystem;
               return;
           default:
               throw Error('Invalid FabrikJoint2D constructor params!');
       }
    }

    // ---------- Methods ----------

    /**
     * Копирует sourceJoint в данный сустав.
     *
     * @param sourceJoint   Сустав, значения которого будут скопированы.
     */
    set(sourceJoint: FabrikJoint2D): void {
        this.setClockwiseConstraintDegs(sourceJoint._clockwiseConstraintDegs);
        this.setAnticlockwiseConstraintDegs(sourceJoint._anticlockwiseConstraintDegs);
        this._constraintCoordinateSystem = sourceJoint._constraintCoordinateSystem;
    };

    /**
     * Задаёт угол-ограничение по часовой стрелке в градусах.
     * <p>
     * Угол-ограничение может принимать значения от 0 (не предусматривает движения), до 180 (полностью подвижен).
     * @param	angleDegs	Угол-ограничение по часовой стрелке в градусах.
     */
    setClockwiseConstraintDegs (angleDegs: number): void  {
        if (angleDegs < FabrikJoint2D.MIN_2D_CONSTRAINT_ANGLE_DEGS) {
            this._clockwiseConstraintDegs = FabrikJoint2D.MIN_2D_CONSTRAINT_ANGLE_DEGS;
        } else if (angleDegs > FabrikJoint2D.MAX_2D_CONSTRAINT_ANGLE_DEGS) {
            this._clockwiseConstraintDegs = FabrikJoint2D.MAX_2D_CONSTRAINT_ANGLE_DEGS;
        } else {
            this._clockwiseConstraintDegs = angleDegs;
        }
    };

    /**
     * Возвращает угол-ограничение по часовой стрелке в градусах.
     *
     * @return	Угол-ограничение по часовой стрелке в градусах.
     */
    getClockwiseConstraintDegs = (): number => this._clockwiseConstraintDegs;

    /**
     * Задаёт угол-ограничение против часовой стрелки в градусах.
     * <p>
     * Угол-ограничение может принимать значения от 0 (не предусматривает движения), до 180 (полностью подвижен).
     * @param	angleDegs	Угол-ограничение против часовой стрелки в градусах.
     */
    setAnticlockwiseConstraintDegs (angleDegs: number): void {
        if (angleDegs < FabrikJoint2D.MIN_2D_CONSTRAINT_ANGLE_DEGS) {
            this._anticlockwiseConstraintDegs = FabrikJoint2D.MIN_2D_CONSTRAINT_ANGLE_DEGS;
        }
        else if (angleDegs > FabrikJoint2D.MAX_2D_CONSTRAINT_ANGLE_DEGS) {
            this._anticlockwiseConstraintDegs = FabrikJoint2D.MAX_2D_CONSTRAINT_ANGLE_DEGS;
        } else {
            this._anticlockwiseConstraintDegs = angleDegs;
        }
    };

    /**
     * Возвращает угол-ограничение против часовой стрелки в градусах.
     *
     * @return	Угол-ограничение против часовой стрелки в градусах.
     */
    getAnticlockwiseConstraintDegs = (): number => this._anticlockwiseConstraintDegs;

    /**
     * Задаёт систему координат данного ограничения.
     *
     * @param	coordSystem	Система координат.
     */
    setConstraintCoordinateSystem = (coordSystem: ConstraintCoordinateSystem): void => {
        this._constraintCoordinateSystem = coordSystem;
    };

    /**
     * Возвращает систему координат данного ограничения.
     *
     * @return	Система координат.
     */
    getConstraintCoordinateSystem = (): ConstraintCoordinateSystem => {
        return this._constraintCoordinateSystem;
    };
}
