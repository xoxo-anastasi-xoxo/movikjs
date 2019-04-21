import {FabrikBone3D} from './FabrikBone3D';
import {FabrikJoint3D} from './FabrikJoint3D';
import {FabrikStructure3D} from './FabrikStructure3D';
import {JointType} from './JointType';
import {Vec3f} from '../utils/Vec3f';
import {BaseboneConstraintType3D} from './BaseboneConstraintType3D';
import {Utils} from '../utils/Utils';
import {Colour4f} from '../utils/Colour4f';
import {Mat3f} from '../utils/Mat3f';

/**
 * 3D цепь костей, решающая задачу инверсной кинематики с помощью алгоритма FABRIK.
 */
export class FabrikChain3D {
    // ---------- Private Properties ----------
    /**
     * Массив костей цепи.
     */
    private _chain: FabrikBone3D[] = [];

    /**
     * Название цепи.
     * <p>
     * Необязательное к использованию поле, помогающее идентифицировать цепь.
     */
    private _name: string;

    /**
     * Порог, достигнув которого мы считаем задачу инверсной кинематики решенной.
     * <p>
     * При решении задачи ИК, когда расстояние между текущим положением и желаемым положением становится меньше или равно
     * значению порога, мы прерываем дальнейшие итерации и считаем задачу решенной.
     * <p>
     * Значение по умолчанию 0.01.
     * <p>
     * Минимально допустимое значение - 0, но стоит помнить о погрешности вычисления и не задавать порог равным нулю, так
     * как это может привести к бесконечным бесполезным попыткам.
     * <p>
     * Хотя данное поле и самый важный критерий останова для ИК-алгоритма, оно работает в комбинации с
     * {@link #_maxIterationAttempts} и {@link _minIterationChange}. Эти вспомогательные свойства помогают пережить ситуации,
     * когда длины цепи не хватает для достижения цели или когда суставы цепи сильно ограничены.
     */
    private _solveDistanceThreshold = 0.01;

    /**
     * Максимальное количество итераций алгоритма, применяемых при решении задачи ИК.
     *
     * @default 20
     */
    private _maxIterationAttempts = 20;

    /**
     * Минимальное значения для дельты рассотояний между итерациями алгоритма.
     *
     * @default 0.01
     */
    private _minIterationChange = 0.01;

    /**
     * Длина цепи.
     */
    private _chainLength: number;

    /**
     * Начальная позиция первой кости в цепи.
     *
     * @default: Vec3f(0, 0)
     */
    private _fixedBaseLocation = new Vec3f();

    /**
     * Зафиксирована ли начальная позиция цепи.
     * Если нет - то она может перемещаться.
     *
     * @default true
     */
    private _fixedBaseMode = true;

    /**
     * Тип сустава первой кости в цепи.
     */
    private _baseboneConstraintType: BaseboneConstraintType3D = BaseboneConstraintType3D.NONE;

    /**
     * Направление относительно которого мы ограничиваем первую кость цепи.
     */
    private _baseboneConstraintUV = new Vec3f();

    private _baseboneRelativeConstraintUV: Vec3f = new Vec3f();

    private _baseboneRelativeReferenceConstraintUV: Vec3f = new Vec3f();

    /**
     * Последняя целевая позиция, относительно которой решалась задача ИК.
     *
     * @default Vec3f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
     */
    private _lastTargetLocation: Vec3f = new Vec3f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);

    /**
     * Предыдущая начальная позиция базовой (первой в цепи) кости.
     * <p>
     * Данное значение хранится для того, чтобы сравнивать изменилось ли
     * начальное положение базовой кости в процессе решения.
     *
     * @default Vec3f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
     */
    private _lastBaseLocation: Vec3f = new Vec3f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);

    /**
     * Текущее расстояние между эффектором(концом последней точки в цепи) и целевой позицией.
     */
    private _currentSolveDistance: number = Number.MAX_VALUE;

    /**
     * Номер цепи, к которой эта цепь подключена в FabrikStructure3D.
     * <p>
     * Если значение -1, значит данная цепь ни с чем не связана.
     *
     * @default -1
     */
    private _connectedChainNumber: number = -1;

    /**
     * Номер кости, с которой связана эта цепь, если она вообще связана с другой цепью.
     * <p>
     * Если значение -1, значит данная цепь ни с чем не связана.
     *
     * @default -1
     */
    private _connectedBoneNumber: number = -1;

    /**
     * Встроенное целевое расположение,которое можно использовать для решения ИК.
     * <p>
     * Встроенные целевые местоположения позволяют решать ИК структуры для нескольких целей (по одной на цепочку в структуре)
     * вместо того, чтобы все цепочки решались для одной и той же цели. Чтобы использовать встроенные цели, флаг _useEmbeddedTargets
     * должно быть true(что не является значением по умолчанию) - этот флаг можно установить с помощью вызова setEmbeddedTargetMode (true).
     */
    private _embeddedTarget: Vec3f = new Vec3f();

    /**
     * _useEmbeddedTarget    Следует ли использовать местоположение _embeddedTarget при решении этой цепочки.
     * <p>
     * Этот флаг можно переключить, вызвав setEmbeddedTargetMode (true) в цепочке.
     *
     * @default false
     * @see {@link setEmbeddedTargetMode(boolean) }
     */
    private _useEmbeddedTarget: boolean = false;

    // ---------- Constructors ----------

    /**
     * Конструктор.
     *
     * Принимает три вариации параметров:
     *
     * Без параметров. Всем полям проставляются значения по умолчанию.
     *
     * Один параметр-строка.
     *
     * @param    source    Имя данной цепи.
     *
     * Конструктор копирования.
     *
     * @param    source    Цепь для копирования.
     */
    constructor(source?: string | FabrikChain3D) {
        if (!source) {
            return;
        }
        if (typeof source === 'string') {
            this._name = source;
        } else {
            this._chain = source.cloneIkChain();

            this._fixedBaseLocation.set(source.getBaseLocation());
            this._lastTargetLocation.set(source._lastTargetLocation);
            this._lastBaseLocation.set(source._lastBaseLocation);
            this._embeddedTarget.set(source._embeddedTarget);

            if (source._baseboneConstraintType != BaseboneConstraintType3D.NONE) {
                this._baseboneConstraintUV.set(source._baseboneConstraintUV);
                this._baseboneRelativeConstraintUV.set(source._baseboneRelativeConstraintUV);
            }

            this._chainLength = source._chainLength;
            this._currentSolveDistance = source._currentSolveDistance;
            this._connectedChainNumber = source._connectedChainNumber;
            this._connectedBoneNumber = source._connectedBoneNumber;
            this._baseboneConstraintType = source._baseboneConstraintType;
            this._name = source._name;
            this._useEmbeddedTarget = source._useEmbeddedTarget;
        }
    }

    // ---------- Public Methods ------------

    /**
     * Добавляет кость в конец цепи.
     *
     * @param    bone    Кость.
     */
    addBone(bone: FabrikBone3D): void {
        this._chain.push(bone);

        if (this._chain.length == 1) {
            this._fixedBaseLocation.set(bone.getStartLocation());

            this._baseboneConstraintUV = bone.getDirectionUV();
        }

        this.updateChainLength();
    }

    /***
     * Добавляет последовательную кость в конец этой цепи IK с учетом вектора направления и длины новой кости.
     * <p>
     * Добавленная кость не имеет каких-либо ограничений.
     * <p>
     * Этот метод можно использовать только тогда, когда цепь IK содержит базовую кость, так как без нее у нас нет
     * начального местоположения для этой кости (т. е. конечного местоположения предыдущей).
     * <p>
     * Если этот метод выполняется в цепочке, которая не содержит основной кости, то возбуждается ошибка.
     * <p>
     * Если вектор направления или длина равны нулю, то возбуждается ошибка.
     *
     * @param    directionUV    Первоначальное направление новой кости.
     * @param    length        Длина новой кости.
     * @param    colour        Цвет для отрисовки новой кости.
     * @param    name          Имя новой кости.
     */
    addConsecutiveBone(directionUV: Vec3f, length: number, colour?: Colour4f, name?: string): void {
        Utils.validateDirectionUV(directionUV);

        Utils.validateLength(length);

        if (!(this._chain.length === 0)) {
            const prevBoneEnd: Vec3f = this._chain[this._chain.length - 1].getEndLocation();

            this.addBone(new FabrikBone3D(prevBoneEnd, directionUV.normalised(), length, colour, name));
        } else {
            throw new Error('You cannot add the basebone as a consecutive bone as it does not provide a start location. Use the addBone() method instead.');
        }
    }

    /**
     * Добавляет предварительно созданную последовательную кость к концу этой цепочки IK.
     * <p>
     * Этот метод можно использовать только тогда, когда цепь IK содержит базовую кость, так как без нее у нас нет
     * начального местоположения для этой кости (т. е. конечного местоположения предыдущей).
     * <p>
     * Если этот метод выполняется в цепочке, которая не содержит основной кости,
     * или кость, которую пытаются добавить имеет нулевую длину то возбуждается ошибка.
     *
     * @param    bone        Кость.
     */
    addConsecutiveCreatedBone(bone: FabrikBone3D): void {
        const dir: Vec3f = bone.getDirectionUV();
        Utils.validateDirectionUV(dir);

        const len = bone.getLength();
        Utils.validateLength(len);

        if (!(this._chain.length === 0)) {
            const prevBoneEnd: Vec3f = this._chain[this._chain.length - 1].getEndLocation();

            bone.setStartLocation(prevBoneEnd);
            bone.setEndLocation(prevBoneEnd.plus(dir.times(len)));

            this.addBone(bone);
        } else {
            throw new Error('You cannot add the base bone to a chain using this method as it does not provide a start location.');
        }
    }

    /**
     * Добавляет последовательную шарнирную кость к концу этой цепи IK.
     * <p>
     * Тип шарнира может быть глобальным, ось вращения которого указана в мировом пространстве, или
     * локальным, ось вращения которого расположена относительно предыдущей кости в цепи.
     * <p>
     * Если этот метод выполняется в цепочке, которая не содержит основной кости, возникает ошибка.
     * Если направление кости или ось ограничения шарнира нули, возникает ошибка.
     * Если запрошенный тип соединения не является LOCAL_HINGE или GLOBAL_HINGE, возникает ошибка.
     *
     * @param    directionUV            Начальное направление новой кости.
     * @param    length                Длина новой кости.
     * @param    jointType            Тип сустава новой кости.
     * @param    hingeRotationAxis    Ось вращения шарнира.
     * @param    clockwiseDegs        Угол-ограничение по часовой стрелке в градусах.
     * @param    anticlockwiseDegs    Угол-ограничение против часовой стрелки в градусах.
     * @param    hingeReferenceAxis    Ось относительно которой ведется отсчет угла поворота шарнира.
     * @param    colour                Цвет новой кости.
     */
    addConsecutiveHingedBone(
        directionUV: Vec3f,
        length: number,
        jointType: JointType,
        hingeRotationAxis: Vec3f,
        clockwiseDegs: number = 180,
        anticlockwiseDegs: number = 180,
        hingeReferenceAxis: Vec3f = Vec3f.genPerpendicularVectorQuick(hingeRotationAxis),
        colour: Colour4f = new Colour4f(),
    ): void {
        Utils.validateDirectionUV(directionUV);
        Utils.validateDirectionUV(hingeRotationAxis);
        Utils.validateLength(length);

        if (this._chain.length === 0) {
            throw new Error('You must add a basebone before adding a consectutive bone.');
        }

        directionUV.normalise();
        hingeRotationAxis.normalise();

        const prevBoneEnd: Vec3f = this._chain[this._chain.length - 1].getEndLocation();

        const bone: FabrikBone3D = new FabrikBone3D(prevBoneEnd, directionUV, length, colour);

        const joint: FabrikJoint3D = new FabrikJoint3D();
        switch (jointType) {
            case JointType.GLOBAL_HINGE:
                joint.setHingeJoint(JointType.GLOBAL_HINGE, hingeRotationAxis, clockwiseDegs, anticlockwiseDegs, hingeReferenceAxis);
                break;
            case JointType.LOCAL_HINGE:
                joint.setHingeJoint(JointType.LOCAL_HINGE, hingeRotationAxis, clockwiseDegs, anticlockwiseDegs, hingeReferenceAxis);
                break;
            default:
                throw new Error('Hinge joint types may be only JointType.GLOBAL_HINGE or JointType.LOCAL_HINGE.');
        }

        bone.setJoint(joint);

        this.addBone(bone);
    }

    /**
     * Добавляет последовательный шаровой сустав, ограничивающий кость, к концу этой цепи IK.
     * <p>
     * Этот метод можно использовать только тогда, когда цепь IK содержит базовую кость, так как без нее у нас нет
     * начального местоположения для этой кости (т. е. конечного местоположения предыдущей).
     * <p>
     * Если этот метод выполняется в цепочке, которая не содержит основной кости,
     * или кость, которую пытаются добавить имеет нулевую длину то возбуждается ошибка.
     *
     * @param    boneDirectionUV                    Начальное направление единичного вектора новой кости.
     * @param    boneLength                        Длина новой кости.
     * @param    constraintAngleDegs                Угол ограничение.
     * @param    colour                            Цвет для отрисовки новой кости.
     */
    addConsecutiveRotorConstrainedBone(
        boneDirectionUV: Vec3f,
        boneLength: number,
        constraintAngleDegs: number = 180,
        colour: Colour4f = new Colour4f(),
    ): void {
        Utils.validateDirectionUV(boneDirectionUV);
        Utils.validateLength(boneLength);
        if (this._chain.length === 0) {
            throw new Error('Add a basebone before attempting to add consectuive bones.');
        }

        const bone: FabrikBone3D = new FabrikBone3D(this._chain[this._chain.length - 1].getEndLocation(), boneDirectionUV.normalise(), boneLength, colour);
        bone.setBallJointConstraintDegs(constraintAngleDegs);
        this.addBone(bone);
    }

    /**
     * Возвращает относительный единичный вектор основной кости этой цепочки.
     *
     * @return
     */
    getBaseboneRelativeConstraintUV = (): Vec3f => this._baseboneRelativeConstraintUV;

    /**
     * Возвращает тип сустава базовой кости.
     *
     * @return
     */
    getBaseboneConstraintType = (): BaseboneConstraintType3D => this._baseboneConstraintType;

    /**
     * Возвращает ограничение направления основной кости.
     * <p>
     * Если базовая кость не ограничена, то возникает ошибка. Если вы хотите проверить, ограничена ли
     * базовая кость этой цепочки ИК вы можете использовать метод {@link #getBaseboneConstraintType()}.
     *
     * @return
     */
    getBaseboneConstraintUV(): Vec3f {
        if (this._baseboneConstraintType != BaseboneConstraintType3D.NONE) {
            return this._baseboneConstraintUV;
        } else {
            throw new Error('Cannot return the basebone constraint when the basebone constraint type is NONE.');
        }
    }

    /**
     * Возвращает базовое расположение цепочки IK.
     * <p>
     * Независимо от того, сколько костей содержится в цепи, базовое местоположение всегда является начальным местоположением
     * первой кости в цепи.
     *
     * @return
     */
    getBaseLocation = (): Vec3f => this._chain[0].getStartLocation();

    /**
     * Возвращает кость цепи по индексу.
     *
     * @param    boneNumber    Индекс кости.
     * @return                Кость.
     */
    getBone = (boneNumber: number): FabrikBone3D => this._chain[boneNumber];

    /**
     * Возвращает массив костей цепи.
     *
     * @return
     */
    getChain(): FabrikBone3D[] {
        return this._chain;
    }

    /**
     * Возвращает длину цепи.
     *
     * @return
     */
    getChainLength = (): number => this._chainLength;

    /**
     * Возвращает индекс кости из другой цепи, к которой присоединена наша цепь.
     * <p>
     * Возвращает -1 если мы ни к кому не присоединены.
     *
     * @return
     */
    getConnectedBoneNumber = (): number => this._connectedBoneNumber;

    /**
     * Возвращает индекс цепи в структуре, к которой присоединена наша цепь.
     * <p>
     * Возвращает -1 если мы ни к кому не присоединены.
     *
     * @return
     */
    getConnectedChainNumber = (): number => this._connectedChainNumber;

    /**
     * Возвращает эффектор.
     * <p>
     * Независимо от того, сколько костей содержится в цепи, эффектор - это всегда конец
     * последней кости в цепи.
     *
     * @return
     */
    getEffectorLocation(): Vec3f {
        return this._chain[this._chain.length - 1].getEndLocation();
    }

    /**
     * Возвращает должна ли цепь использовать встроенное целевое положение.
     *
     * @return
     */
    getEmbeddedTargetMode(): boolean {
        return this._useEmbeddedTarget;
    }

    /**
     * Возврат внедренного целевого местоположения.
     *
     * @return
     */
    getEmbeddedTarget = (): Vec3f => this._embeddedTarget;

    /**
     * Возвращает цель последней попытки решения.
     * <p>
     * Целевое местоположение и местоположение эффектора не обязательно находятся в одном и том же месте.
     *
     * @return
     */
    getLastTargetLocation = (): Vec3f => this._lastTargetLocation;

    /**
     * Возвращает название этой ИК цепи.
     *
     * @return
     */
    getName = (): string => this._name;

    /**
     * Возвращает количество костей в цепи.
     *
     * @return
     */
    getNumBones = (): number => this._chain.length;

    /**
     * Удаляет кость из этой цепи IK по ее индексу в цепи.
     * <p>
     * Если номер кости, которую необходимо удалить, не существует в цепочке, то возникает ошибка.
     *
     * @param    boneNumber    Индекс кости в цепи.
     */
    removeBone(boneNumber: number): void {
        if (boneNumber < this._chain.length) {
            this._chain.splice(boneNumber, 1);
            this.updateChainLength();
        } else {
            throw new Error('Bone ' + boneNumber + ' does not exist to be removed from the chain. Bones are zero indexed.');
        }
    }

    _setBaseboneRelativeConstraintUV(constraintUV: Vec3f): void {
        this._baseboneRelativeConstraintUV = constraintUV;
    }

    _setBaseboneRelativeReferenceConstraintUV(constraintUV: Vec3f): void {
        this._baseboneRelativeReferenceConstraintUV = constraintUV;
    }

    getBaseboneRelativeReferenceConstraintUV = (): Vec3f => this._baseboneRelativeReferenceConstraintUV;

    /**
     * Устанавливает должна ли использоваться встроенная целевая позиция.
     *
     * @param    value
     */
    setEmbeddedTargetMode(value: boolean): void {
        this._useEmbeddedTarget = value;
    }

    setRotorBaseboneConstraint(rotorType: BaseboneConstraintType3D, constraintAxis: Vec3f, angleDegs: number): void {
        if (this._chain.length === 0) {
            throw new Error('Chain must contain a basebone before we can specify the basebone constraint type.');
        }
        if (constraintAxis.length() <= 0.0) {
            throw new Error('Constraint axis cannot be zero.');
        }
        if (angleDegs < 0.0) {
            angleDegs = 0.0;
        }
        if (angleDegs > 180.0) {
            angleDegs = 180.0;
        }
        if (!(rotorType == BaseboneConstraintType3D.GLOBAL_ROTOR || rotorType == BaseboneConstraintType3D.LOCAL_ROTOR)) {
            throw new Error('The only valid rotor types for this method are GLOBAL_ROTOR and LOCAL_ROTOR.');
        }

        this._baseboneConstraintType = rotorType;
        this._baseboneConstraintUV = constraintAxis.normalised();
        this._baseboneRelativeConstraintUV.set(this._baseboneConstraintUV);
        this.getBone(0).getJoint().setAsBallJoint(angleDegs);
    }

    setHingeBaseboneConstraint(hingeType: BaseboneConstraintType3D, hingeRotationAxis: Vec3f, cwConstraintDegs: number, acwConstraintDegs: number, hingeReferenceAxis: Vec3f): void {
        if (this._chain.length === 0) {
            throw new Error('Chain must contain a basebone before we can specify the basebone constraint type.');
        }
        if (hingeRotationAxis.length() <= 0.0) {
            throw new Error('Hinge rotation axis cannot be zero.');
        }
        if (hingeReferenceAxis.length() <= 0.0) {
            throw new Error('Hinge reference axis cannot be zero.');
        }
        if (!(Vec3f.perpendicular(hingeRotationAxis, hingeReferenceAxis))) {
            throw new Error('The hinge reference axis must be in the plane of the hinge rotation axis, that is, they must be perpendicular.');
        }
        if (!(hingeType == BaseboneConstraintType3D.GLOBAL_HINGE || hingeType == BaseboneConstraintType3D.LOCAL_HINGE)) {
            throw new Error('The only valid hinge types for this method are GLOBAL_HINGE and LOCAL_HINGE.');
        }

        this._baseboneConstraintType = hingeType;
        this._baseboneConstraintUV.set(hingeRotationAxis.normalised());

        const hinge: FabrikJoint3D = new FabrikJoint3D();

        if (hingeType == BaseboneConstraintType3D.GLOBAL_HINGE) {
            hinge.setHingeJoint(JointType.GLOBAL_HINGE, hingeRotationAxis, cwConstraintDegs, acwConstraintDegs, hingeReferenceAxis);
        } else {
            hinge.setHingeJoint(JointType.LOCAL_HINGE, hingeRotationAxis, cwConstraintDegs, acwConstraintDegs, hingeReferenceAxis);
        }
        this.getBone(0).setJoint(hinge);
    }

    setBaseboneConstraintUV(constraintUV: Vec3f): void {
        if (this._baseboneConstraintType == BaseboneConstraintType3D.NONE) {
            throw new Error('Specify the basebone constraint type with setBaseboneConstraintTypeCannot specify a basebone constraint when the current constraint type is BaseboneConstraint.NONE.');
        }

        Utils.validateDirectionUV(constraintUV);

        constraintUV.normalise();
        this._baseboneConstraintUV.set(constraintUV);
    }

    setBaseLocation(baseLocation: Vec3f): void {
        this._fixedBaseLocation.set(baseLocation);
    }

    /**
     * Присоединяет цепь к кости из другой цепи.
     * <p>
     * Чтобы соединить эту цепь с другой цепью, обе цепи должны существовать в одной и той же структуре.
     * <p>
     * Если структура не содержит указанную цепь или кость, то возникает ошибка.
     *
     * @param    structure    Структура, в которой произойдёт соединение.
     * @param    chainNumber    Индекс цепи для присоединения.
     * @param    boneNumber    Индекс кости к которой мы присоединяемся.
     */
    connectToStructure(structure: FabrikStructure3D, chainNumber: number, boneNumber: number): void {
        const nu_chains = structure.getNumChains();
        if (chainNumber > nu_chains) {
            throw new Error('Structure does not contain a chain ' + chainNumber + ' - it has ' + nu_chains + ' chains.');
        }

        const numBones = structure.getChain(chainNumber).getNumBones();
        if (boneNumber > numBones) {
            throw new Error('Chain does not contain a bone ' + boneNumber + ' - it has ' + numBones + ' bones.');
        }

        this._connectedChainNumber = chainNumber;
        this._connectedBoneNumber = boneNumber;
    }

    setFixedBaseMode(value: boolean): void {
        if (!value && this._connectedChainNumber != -1) {
            throw new Error('This chain is connected to another chain so must remain in fixed base mode.');
        }

        if (this._baseboneConstraintType == BaseboneConstraintType3D.GLOBAL_ROTOR && !value) {
            throw new Error('Cannot set a non-fixed base mode when the chain\'s constraint type is BaseboneConstraintType3D.GLOBAL_ABSOLUTE_ROTOR.');
        }

        this._fixedBaseMode = value;
    }

    setMaxIterationAttempts(maxIterations: number): void {
        if (maxIterations < 1) {
            throw new Error('The maximum number of attempts to solve this IK chain must be at least 1.');
        }

        this._maxIterationAttempts = maxIterations;
    }

    setMinIterationChange(minIterationChange: number): void {
        if (minIterationChange < 0.0) {
            throw new Error('The minimum iteration change value must be more than or equal to zero.');
        }

        this._minIterationChange = minIterationChange;
    }

    setName(name: string): void {
        this._name = name;
    }

    setSolveDistanceThreshold(solveDistance: number): void {
        if (solveDistance < 0.0) {
            throw new Error('The solve distance threshold must be greater than or equal to zero.');
        }

        this._solveDistanceThreshold = solveDistance;
    }

    setColour(colour: Colour4f): void {
        for (let aBone of this._chain) {
            aBone.setColour(colour);
        }
    }

    /**
     * Решает задачу ИК с помощью алгоритма FABRIK для внутреннего положения.
     * <p>
     * Если в цепи еще нет костей - возникнет ошибка.
     *
     * @return            Наименьшее расстояние между новым положением эффектора и целевым местоположением, которого удалось достичь.
     */
    solveForEmbeddedTarget(): number {
        if (this._useEmbeddedTarget) {
            return this.solveForTarget(this._embeddedTarget);
        } else {
            throw new Error('This chain does not have embedded targets enabled - enable with setEmbeddedTargetMode(true).');
        }
    }

    /**
     * Решает задачу ИК с помощью алгоритма FABRIK.
     * <p>
     * Если в цепи еще нет костей - возникнет ошибка.
     *
     * @param newTarget    Целевое местоположение.
     * @return            Наименьшее расстояние между новым положением эффектора и целевым местоположением, которого удалось достичь.
     */
    solveForTarget(newTarget: Vec3f): number {
        if (this._lastTargetLocation.approximatelyEquals(newTarget, 0.00001) &&
            (!this._fixedBaseMode && this._lastBaseLocation.approximatelyEquals(this.getBaseLocation(), 0.00001)) &&
            (this._fixedBaseMode && this._fixedBaseLocation.approximatelyEquals(this.getBaseLocation(), 0.00001))
        ) {
            return this._currentSolveDistance;
        }

        let bestSolution: FabrikBone3D[] = [];

        let bestSolveDistance = Number.MAX_VALUE;

        let lastPassSolveDistance = Number.MAX_VALUE;

        let solveDistance;
        for (let loop = 0; loop < this._maxIterationAttempts; ++loop) {
            solveDistance = this.solveIK(newTarget);

            if (solveDistance < bestSolveDistance) {
                bestSolveDistance = solveDistance;
                bestSolution = this.cloneIkChain();

                if (solveDistance <= this._solveDistanceThreshold) {
                    break;
                }
            } else {
                if (Math.abs(solveDistance - lastPassSolveDistance) < this._minIterationChange) {
                    break;
                }
            }

            lastPassSolveDistance = solveDistance;

        }
        this._currentSolveDistance = bestSolveDistance;
        this._chain = bestSolution;

        this._lastBaseLocation.set(this.getBaseLocation());
        this._lastTargetLocation.set(newTarget);

        return this._currentSolveDistance;
    }

// ---------- Private Methods ----------

    /**
     * Решает задачу ИК с помощью алгоритма FABRIK.
     * <p>
     * Если в цепи еще нет костей - возникнет ошибка.
     *
     * @param target    Целевое местоположение.
     * @return            Наименьшее расстояние между новым положением эффектора и целевым местоположением, которого удалось достичь.
     */
    private solveIK(target: Vec3f): number {
        if (this._chain.length === 0) {
            throw new Error('It makes no sense to solve an IK chain with zero bones.');
        }

        // ---------- ПРЯМОЙ ПРОХОД: от эффектора к базовой кости -----------

        for (let loop = this._chain.length - 1; loop >= 0; --loop) {
            const thisBone: FabrikBone3D = this._chain[loop];
            const thisBoneLength: number = thisBone.getLength();
            const thisBoneJoint: FabrikJoint3D = thisBone.getJoint();
            const thisBoneJointType: JointType = thisBone.getJointType();

            if (loop != this._chain.length - 1) {
                const outerBoneOuterToInnerUV: Vec3f = this._chain[loop + 1].getDirectionUV().negated();

                let thisBoneOuterToInnerUV: Vec3f = thisBone.getDirectionUV().negated();

                if (thisBoneJointType == JointType.BALL) {
                    const angleBetweenDegs = Vec3f.getAngleBetweenDegs(outerBoneOuterToInnerUV, thisBoneOuterToInnerUV);
                    const constraintAngleDegs = thisBoneJoint.getBallJointConstraintDegs();
                    if (angleBetweenDegs > constraintAngleDegs) {
                        thisBoneOuterToInnerUV = Vec3f.getAngleLimitedUnitVectorDegs(thisBoneOuterToInnerUV, outerBoneOuterToInnerUV, constraintAngleDegs);
                    }
                } else if (thisBoneJointType == JointType.GLOBAL_HINGE) {
                    thisBoneOuterToInnerUV = thisBoneOuterToInnerUV.projectOntoPlane(thisBoneJoint.getHingeRotationAxis());
                } else if (thisBoneJointType == JointType.LOCAL_HINGE) {
                    let m;
                    let relativeHingeRotationAxis;
                    if (loop > 0) {
                        m = Mat3f.createRotationMatrix(this._chain[loop - 1].getDirectionUV());
                        relativeHingeRotationAxis = m.times(thisBoneJoint.getHingeRotationAxis()).normalise();
                    } else {
                        relativeHingeRotationAxis = this._baseboneRelativeConstraintUV;
                    }

                    thisBoneOuterToInnerUV = thisBoneOuterToInnerUV.projectOntoPlane(relativeHingeRotationAxis);
                }

                let newStartLocation = thisBone.getEndLocation().plus(thisBoneOuterToInnerUV.times(thisBoneLength));

                thisBone.setStartLocation(newStartLocation);

                if (loop > 0) {
                    this._chain[loop - 1].setEndLocation(newStartLocation);
                }
            } else {

                thisBone.setEndLocation(target);

                let thisBoneOuterToInnerUV = thisBone.getDirectionUV().negated();

                switch (thisBoneJointType) {
                    case JointType.BALL:
                        break;
                    case JointType.GLOBAL_HINGE:
                        thisBoneOuterToInnerUV = thisBoneOuterToInnerUV.projectOntoPlane(thisBoneJoint.getHingeRotationAxis());
                        break;
                    case JointType.LOCAL_HINGE:
                        const m = Mat3f.createRotationMatrix(this._chain[loop - 1].getDirectionUV());

                        const relativeHingeRotationAxis = m.times(thisBoneJoint.getHingeRotationAxis()).normalise();

                        thisBoneOuterToInnerUV = thisBoneOuterToInnerUV.projectOntoPlane(relativeHingeRotationAxis);
                        break;
                }

                const newStartLocation = target.plus(thisBoneOuterToInnerUV.times(thisBoneLength));

                thisBone.setStartLocation(newStartLocation);

                if (loop > 0) {
                    this._chain[loop - 1].setEndLocation(newStartLocation);
                }
            }

        }

        // ---------- Обратный проход -----------

        for (let loop = 0; loop < this._chain.length; ++loop) {
            const thisBone: FabrikBone3D = this._chain[loop];
            const thisBoneLength = thisBone.getLength();

            if (loop != 0) {
                let thisBoneInnerToOuterUV: Vec3f = thisBone.getDirectionUV();
                let prevBoneInnerToOuterUV: Vec3f = this._chain[loop - 1].getDirectionUV();

                const thisBoneJoint: FabrikJoint3D = thisBone.getJoint();
                const jointType: JointType = thisBoneJoint.getJointType();
                if (jointType == JointType.BALL) {
                    const angleBetweenDegs: number = Vec3f.getAngleBetweenDegs(prevBoneInnerToOuterUV, thisBoneInnerToOuterUV);
                    const constraintAngleDegs: number = thisBoneJoint.getBallJointConstraintDegs();

                    if (angleBetweenDegs > constraintAngleDegs) {
                        thisBoneInnerToOuterUV = Vec3f.getAngleLimitedUnitVectorDegs(thisBoneInnerToOuterUV, prevBoneInnerToOuterUV, constraintAngleDegs);
                    }
                }
                else if (jointType == JointType.GLOBAL_HINGE) {
                    const hingeRotationAxis: Vec3f = thisBoneJoint.getHingeRotationAxis();
                    thisBoneInnerToOuterUV = thisBoneInnerToOuterUV.projectOntoPlane(hingeRotationAxis);

                    const cwConstraintDegs = -thisBoneJoint.getHingeClockwiseConstraintDegs();
                    const acwConstraintDegs = thisBoneJoint.getHingeAnticlockwiseConstraintDegs();
                    if (!(Utils.approximatelyEquals(cwConstraintDegs, -FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS, 0.001)) &&
                        !(Utils.approximatelyEquals(acwConstraintDegs, FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS, 0.001))) {
                        const hingeReferenceAxis: Vec3f = thisBoneJoint.getHingeReferenceAxis();

                        const signedAngleDegs: number = Vec3f.getSignedAngleBetweenDegs(hingeReferenceAxis, thisBoneInnerToOuterUV, hingeRotationAxis);

                        if (signedAngleDegs > acwConstraintDegs) {
                            thisBoneInnerToOuterUV = Vec3f.rotateAboutAxisDegs(hingeReferenceAxis, acwConstraintDegs, hingeRotationAxis).normalised();
                        } else if (signedAngleDegs < cwConstraintDegs) {
                            thisBoneInnerToOuterUV = Vec3f.rotateAboutAxisDegs(hingeReferenceAxis, cwConstraintDegs, hingeRotationAxis).normalised();
                        }
                    }
                } else if (jointType == JointType.LOCAL_HINGE) {
                    const hingeRotationAxis: Vec3f = thisBoneJoint.getHingeRotationAxis();

                    const m: Mat3f = Mat3f.createRotationMatrix(prevBoneInnerToOuterUV);

                    const relativeHingeRotationAxis: Vec3f = m.times(hingeRotationAxis).normalise();

                    thisBoneInnerToOuterUV = thisBoneInnerToOuterUV.projectOntoPlane(relativeHingeRotationAxis);

                    const cwConstraintDegs = -thisBoneJoint.getHingeClockwiseConstraintDegs();
                    const acwConstraintDegs = thisBoneJoint.getHingeAnticlockwiseConstraintDegs();
                    if (!(Utils.approximatelyEquals(cwConstraintDegs, -FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS, 0.001)) &&
                        !(Utils.approximatelyEquals(acwConstraintDegs, FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS, 0.001))) {
                        const relativeHingeReferenceAxis: Vec3f = m.times(thisBoneJoint.getHingeReferenceAxis()).normalise();

                        const signedAngleDegs = Vec3f.getSignedAngleBetweenDegs(relativeHingeReferenceAxis, thisBoneInnerToOuterUV, relativeHingeRotationAxis);

                        if (signedAngleDegs > acwConstraintDegs) {
                            thisBoneInnerToOuterUV = Vec3f.rotateAboutAxisDegs(relativeHingeReferenceAxis, acwConstraintDegs, relativeHingeRotationAxis).normalise();
                        } else if (signedAngleDegs < cwConstraintDegs) {
                            thisBoneInnerToOuterUV = Vec3f.rotateAboutAxisDegs(relativeHingeReferenceAxis, cwConstraintDegs, relativeHingeRotationAxis).normalise();
                        }
                    }

                }
                const newEndLocation = thisBone.getStartLocation().plus(thisBoneInnerToOuterUV.times(thisBoneLength));

                thisBone.setEndLocation(newEndLocation);

                if (loop < this._chain.length - 1) {
                    this._chain[loop + 1].setStartLocation(newEndLocation);
                }
            } else {
                if (this._fixedBaseMode) {
                    thisBone.setStartLocation(this._fixedBaseLocation);
                } else {
                    thisBone.setStartLocation(thisBone.getEndLocation().minus(thisBone.getDirectionUV().times(thisBoneLength)));
                }

                if (this._baseboneConstraintType == BaseboneConstraintType3D.NONE) {
                    const newEndLocation = thisBone.getStartLocation().plus(thisBone.getDirectionUV().times(thisBoneLength));
                    thisBone.setEndLocation(newEndLocation);

                    if (this._chain.length > 1) {
                        this._chain[1].setStartLocation(newEndLocation);
                    }
                } else {
                    if (this._baseboneConstraintType == BaseboneConstraintType3D.GLOBAL_ROTOR) {
                        let thisBoneInnerToOuterUV: Vec3f = thisBone.getDirectionUV();

                        const angleBetweenDegs = Vec3f.getAngleBetweenDegs(this._baseboneConstraintUV, thisBoneInnerToOuterUV);
                        const constraintAngleDegs = thisBone.getBallJointConstraintDegs();

                        if (angleBetweenDegs > constraintAngleDegs) {
                            thisBoneInnerToOuterUV = Vec3f.getAngleLimitedUnitVectorDegs(thisBoneInnerToOuterUV, this._baseboneConstraintUV, constraintAngleDegs);
                        }

                        const newEndLocation = thisBone.getStartLocation().plus(thisBoneInnerToOuterUV.times(thisBoneLength));

                        thisBone.setEndLocation(newEndLocation);

                        if (this._chain.length > 1) {
                            this._chain[1].setStartLocation(newEndLocation);
                        }
                    } else if (this._baseboneConstraintType == BaseboneConstraintType3D.LOCAL_ROTOR) {
                        let thisBoneInnerToOuterUV = thisBone.getDirectionUV();

                        const angleBetweenDegs = Vec3f.getAngleBetweenDegs(this._baseboneRelativeConstraintUV, thisBoneInnerToOuterUV);
                        const constraintAngleDegs = thisBone.getBallJointConstraintDegs();
                        if (angleBetweenDegs > constraintAngleDegs) {
                            thisBoneInnerToOuterUV = Vec3f.getAngleLimitedUnitVectorDegs(thisBoneInnerToOuterUV, this._baseboneRelativeConstraintUV, constraintAngleDegs);
                        }

                        const newEndLocation = thisBone.getStartLocation().plus(thisBoneInnerToOuterUV.times(thisBoneLength));
                        thisBone.setEndLocation(newEndLocation);

                        if (this._chain.length > 1) {
                            this._chain[1].setStartLocation(newEndLocation);
                        }
                    } else if (this._baseboneConstraintType == BaseboneConstraintType3D.GLOBAL_HINGE) {
                        const thisJoint = thisBone.getJoint();
                        const hingeRotationAxis = thisJoint.getHingeRotationAxis();
                        const cwConstraintDegs = -thisJoint.getHingeClockwiseConstraintDegs();
                        const acwConstraintDegs = thisJoint.getHingeAnticlockwiseConstraintDegs();

                        let thisBoneInnerToOuterUV = thisBone.getDirectionUV().projectOntoPlane(hingeRotationAxis);

                        if (!(Utils.approximatelyEquals(cwConstraintDegs, -FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS, 0.01) &&
                            Utils.approximatelyEquals(acwConstraintDegs, FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS, 0.01))) {
                            const hingeReferenceAxis = thisJoint.getHingeReferenceAxis();
                            const signedAngleDegs = Vec3f.getSignedAngleBetweenDegs(hingeReferenceAxis, thisBoneInnerToOuterUV, hingeRotationAxis);

                            if (signedAngleDegs > acwConstraintDegs) {
                                thisBoneInnerToOuterUV = Vec3f.rotateAboutAxisDegs(hingeReferenceAxis, acwConstraintDegs, hingeRotationAxis).normalise();
                            }
                            else if (signedAngleDegs < cwConstraintDegs) {
                                thisBoneInnerToOuterUV = Vec3f.rotateAboutAxisDegs(hingeReferenceAxis, cwConstraintDegs, hingeRotationAxis).normalise();
                            }
                        }

                        const newEndLocation = thisBone.getStartLocation().plus(thisBoneInnerToOuterUV.times(thisBoneLength));
                        thisBone.setEndLocation(newEndLocation);

                        if (this._chain.length > 1) {
                            this._chain[1].setStartLocation(newEndLocation);
                        }
                    } else if (this._baseboneConstraintType == BaseboneConstraintType3D.LOCAL_HINGE) {
                        const thisJoint = thisBone.getJoint();
                        const hingeRotationAxis = this._baseboneRelativeConstraintUV;
                        const cwConstraintDegs = -thisJoint.getHingeClockwiseConstraintDegs();
                        const acwConstraintDegs = thisJoint.getHingeAnticlockwiseConstraintDegs();

                        let thisBoneInnerToOuterUV = thisBone.getDirectionUV().projectOntoPlane(hingeRotationAxis);

                        if (!(Utils.approximatelyEquals(cwConstraintDegs, -FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS, 0.01) &&
                            Utils.approximatelyEquals(acwConstraintDegs, FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS, 0.01))) {
                            const hingeReferenceAxis = this._baseboneRelativeReferenceConstraintUV;
                            const signedAngleDegs = Vec3f.getSignedAngleBetweenDegs(hingeReferenceAxis, thisBoneInnerToOuterUV, hingeRotationAxis);

                            if (signedAngleDegs > acwConstraintDegs) {
                                thisBoneInnerToOuterUV = Vec3f.rotateAboutAxisDegs(hingeReferenceAxis, acwConstraintDegs, hingeRotationAxis).normalise();
                            } else if (signedAngleDegs < cwConstraintDegs) {
                                thisBoneInnerToOuterUV = Vec3f.rotateAboutAxisDegs(hingeReferenceAxis, cwConstraintDegs, hingeRotationAxis).normalise();
                            }
                        }

                        const newEndLocation = thisBone.getStartLocation().plus(thisBoneInnerToOuterUV.times(thisBoneLength));
                        thisBone.setEndLocation(newEndLocation);

                        if (this._chain.length > 1) {
                            this._chain[1].setStartLocation(newEndLocation);
                        }
                    }
                }
            }
        }

        this._lastTargetLocation.set(target);

        return Vec3f.distanceBetween(this._chain[this._chain.length - 1].getEndLocation(), target);
    }

    updateChainLength(): void {
        this._chainLength = 0.0;

        for (let aBone of this._chain) {
            this._chainLength += aBone.getLength();
        }
    }

    updateEmbeddedTarget(newEmbeddedTarget: Vec3f): void {
        if (this._useEmbeddedTarget) {
            this._embeddedTarget.set(newEmbeddedTarget);
        } else {
            throw new Error('This chain does not have embedded targets enabled - enable with setEmbeddedTargetMode(true).');
        }
    }

    private cloneIkChain(): FabrikBone3D[] {
        const clonedChain = [];

        for (let aBone of this._chain) {
            const bone = new FabrikBone3D();
            bone.set(aBone);
            clonedChain.push(bone);
        }

        return clonedChain;
    }

    getMaxIterationAttempts(): number {
        return this._maxIterationAttempts;
    }

    getMinIterationChange(): number {
        return this._minIterationChange;
    }

    getSolveDistanceThreshold(): number {
        return this._solveDistanceThreshold;
    }
}
