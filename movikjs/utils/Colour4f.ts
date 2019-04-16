/**
 * Цвет в формате RGBA.
 * <p>
 * Представлен четырьмя r, g, b, a свойствами типа Number.
 * Задать значения данных свойств можно присваиванием напрямую, через конструктор или
 * через функции сеттеры.
 * Допустимые значения для каждой переменной - число [0..1].
 * Использование значений вне этого диапазона может привести к неопределенному поведению.
 */
export class Colour4f {
    // ---------- Properties ----------

    /** Минимально допустимое значение для компоненты цвета. */
    static MIN_COMPONENT_VALUE = 0;

    /** Максимально допустимое значение для компоненты цвета. */
    static MAX_COMPONENT_VALUE = 1;

    /** Red компонента. */
    r: number = 1;

    /** Green компонента. */
    g: number = 1;

    /** Blue компонента. */
    b: number = 1;

    /** Alpha компонента (компонента непрозрачности).
     *  */
    a: number = 1;

    // ---------- Constructor ----------

    /**
     * Конструктор.
     * <p>
     * Принимает один из двух возможных сочетаний параметров:<ul>
     * <li>
     *     Без параметров - проставляет значения по умолчанию всем полям.
     * </li>
     * <li>
     *     Принимает массив из 4 значений для компонент по порядку: [red, green, blue, alpha].
     *
     *     @param source {number[]} Значения компонент цвета.
     * </li>
     * </ul>
     *
     * Все значения должны быть в пределах [0..1].
     */
    constructor(source?: number[]) {
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                if (source instanceof Array && source.length == 4) {
                    this.r = Colour4f._clamp(source[0]);
                    this.g = Colour4f._clamp(source[1]);
                    this.b = Colour4f._clamp(source[2]);
                    this.a = Colour4f._clamp(source[3]);
                } else {
                    throw new Error('Colour source array size must be precisely 4 elements.');
                }
                break;
            default:
                throw new Error('Colour constructor was invoked incorrectly.');
        }
    }

    // ---------- Public Methods ----------

    /**
     * Задёт значения компонент.
     * <p>
     * Если значения не подходят по диапазону, то они заменяются на граничные.
     *
     * @param   source 	Массив из 4 значений для компонент по порядку: [red, green, blue, alpha].
     */
    set(source: number[]): void {
        this.r = Colour4f._clamp(source[0]);
        this.g = Colour4f._clamp(source[1]);
        this.b = Colour4f._clamp(source[2]);
        this.a = Colour4f._clamp(source[3]);
    };

    /**
     * Добавляет заданные значения к RGB компонентам и возвращает изменненный цвет для формирования цепочки.
     * <p>
     * Если при добавленни значений происходит выход за границы диапазона,
     * то результат заменяется на ближайшее граничное.
     *
     * @param   red		Red компонента для добавления.
     * @param   green	Green компонента для добавления.
     * @param   blue	Blue компонента для добавления.
     * @return			This модифицированный цвет.
     */
    addRGB (red: number, green: number, blue: number): Colour4f {
        this.r = Colour4f._clamp(this.r + red);
        this.g = Colour4f._clamp(this.g + green);
        this.b = Colour4f._clamp(this.b + blue);
        return this;
    };

    /**
     * Вычитает заданные значения из RGB компонент и возвращает изменненный цвет для формирования цепочки.
     * <p>
     * Если при вычитании значений происходит выход за границы диапазона,
     * то результат заменяется на ближайшее граничное.
     *
     * @param   red		Red компонента для вычитания.
     * @param   green	Green компонента для вычитания.
     * @param   blue	Blue компонента для вычитания.
     * @return			This модифицированный цвет.
     */
    subtractRGB (red: number, green: number, blue: number): Colour4f {
        this.r = Colour4f._clamp(this.r - red);
        this.g = Colour4f._clamp(this.g - green);
        this.b = Colour4f._clamp(this.b - blue);
        return this;
    };

    /**
     * Осветляет RGB компоненты данного цвета на заданное количество единиц.
     * <p>
     * Результирующий цвет приводится к диапазону [0..1] и возвращается для создания цепочки.
     *
     * @param	amount	Значение, которое необходимо прибавить к RGB компонентам текущего цвета.
     * @return			Текущий цвет после модицикации.
     */
    lighten (amount: number): Colour4f {
        return this.addRGB(amount, amount, amount);
    }

    /**
     * Затемняет RGB компоненты данного цвета на заданное количество единиц.
     * <p>
     * Результирующий цвет приводится к диапазону [0..1] и возвращается для создания цепочки.
     *
     * @param	amount	Значение, которое необходимо отнять от RGB компонент текущего цвета.
     * @return			Текущий цвет после модицикации.
     */
    darken (amount: number): Colour4f {
        return this.subtractRGB(amount, amount, amount);
    }

    /**
     * Возвращает массив компонент данного цвета в порядке RGBA.
     *
     * @return	Данный цвет в виде числового массива.
     */
    toArray = (): number[] => [this.r, this.g, this.b, this.a];

    // ---------- Private Methods ----------

    private static _clamp(componentValue: number): number {
        if      (componentValue > Colour4f.MAX_COMPONENT_VALUE) { return Colour4f.MAX_COMPONENT_VALUE; }
        else if (componentValue < Colour4f.MIN_COMPONENT_VALUE) { return Colour4f.MIN_COMPONENT_VALUE; }
        else    { return componentValue; }
    }
}
