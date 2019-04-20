import {Colour4f} from './Colour4f';
import {Vec3f} from './Vec3f';
import {Vec2f} from './Vec2f';

/**
 * Вспомогательные методы.
 */
export class Utils {
    // Константы для перевода из градусов в радианы и наоборот
    static DEGS_TO_RADS = Math.PI / 180.0;
    static RADS_TO_DEGS = 180.0 / Math.PI;

    // Приведение чисел к формату с тремя знаками после запятой
    static formatter = (num) => num.toFixed(3);

    /**
     * Некоторые цвета.
     */
    static RED       = new Colour4f([1.0, 0.0, 0.0, 1.0]);
    static GREEN     = new Colour4f([0.0, 1.0, 0.0, 1.0]);
    static BLUE      = new Colour4f([0.0, 0.0, 1.0, 1.0]);
    static MID_RED   = new Colour4f([0.6, 0.0, 0.0, 1.0]);
    static MID_GREEN = new Colour4f([0.0, 0.6, 0.0, 1.0]);
    static MID_BLUE  = new Colour4f([0.0, 0.0, 0.6, 1.0]);
    static BLACK     = new Colour4f([0.0, 0.0, 0.0, 1.0]);
    static GREY      = new Colour4f([0.5, 0.5, 0.5, 1.0]);
    static WHITE     = new Colour4f([1.0, 1.0, 1.0, 1.0]);
    static YELLOW    = new Colour4f([1.0, 1.0, 0.0, 1.0]);
    static CYAN      = new Colour4f([0.0, 1.0, 1.0, 1.0]);
    static MAGENTA   = new Colour4f([1.0, 0.0, 1.0, 1.0]);

    /**
     * Возвращает котангенс угла в радианах.
     * Return the co-tangent of an angle specified in radians.
     *
     * @param	angleRads	Угол врадианах.
     * @return				Котангенс угла.
     */
    static cot = (angleRads: number) => ( 1.0 / Math.tan(angleRads) );

    /**
     * Конвертирует из радиан в градусы.
     *
     * @param	angleRads	Угол в радианах.
     * @return				Угол в градусах.
     */
    static radiansToDegrees = (angleRads: number): number => angleRads * Utils.RADS_TO_DEGS;

    /**
     * Конвертирует из градусов в радианы.
     *
     * @param	angleDegs	Угол в градусах.
     * @return				Угол в радианах.
     */
    static degreesToRadians = (angleDegs: number): number => angleDegs * Utils.DEGS_TO_RADS;

    /**
     * Возвращвет знак числа.
     *
     * @param	value	Число.
     * @return			1 если значение больше или равно нулю, иначе -1.
     */
    static sign(value: number): number {
        if (value >= 0.0) {
            return 1.0;
        }
        return -1.0;
    }

    /**
     * Валидирует направление вектора, чтобы убедиться, что он не равен нулю.
     * <p>
     * Если длина вектора равна нулю бросает Error.
     * @param	directionUV     Вектор.
     */
    static validateDirectionUV(directionUV: Vec2f | Vec3f): void {
        if ( directionUV.length() <= 0.0) {
            throw new Error('Vec direction unit vector cannot be zero.');
        }
    }

    /**
     * Валидирует длину кости, чтобы убедаться, что она не нулевая.
     * <p>
     * Если длина кости равна нулю бросает Error.
     * @param	length	Длина.
     */
    static validateLength(length: number): void {
        if (length < 0.0) {
            throw new Error('Length must be a greater than or equal to zero.');
        }
    }

    /**
     * Возвращает флаг, показывающий равны ли значения с заданным уровнем терпимости.
     *
     * @param	a		Первое значение.
     * @param	b		Второе значение.
     * @param	tolerance	Максимальная разница между числами при которой они будут считаться равными.
     * @return			Равны ли значения.
     */
    static approximatelyEquals = (a: number, b: number, tolerance: number): boolean => (Math.abs(a - b) <= tolerance);
}
