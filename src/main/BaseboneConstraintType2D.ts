/**
 * Типы ограничений первой кости в цепи.
 *
 * Имеет следующие значения:
 * <ul>
 * <li>NONE - Без ограничений.</li>
 * <li>GLOBAL_ABSOLUTE - Ограничена относительно мировых координат.</li>
 * <li>LOCAL_RELATIVE - Ограничена относительно прикреплённой к ней кости.</li>
 * <li>LOCAL_ABSOLUTE - Ограничена относительно прикреплённой к ней кости.</li>
 * </ul>
 */
export enum BaseboneConstraintType2D { NONE, GLOBAL_ABSOLUTE, LOCAL_RELATIVE, LOCAL_ABSOLUTE }
