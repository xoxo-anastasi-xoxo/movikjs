import {FabrikBone2D} from './FabrikBone2D';
import {Vec2f} from '../utils/Vec2f';
import {BoneConnectionPoint} from './BoneConnectionPoint';
import {Colour4f} from '../utils/Colour4f';
import {Utils} from '../utils/Utils';
import {ConstraintCoordinateSystem} from './ConstraintCoordinateSystem';
import {BaseboneConstraintType2D} from './BaseboneConstraintType2D';

/**
 * 2D цепь костей, решающая задачу инверсной кинематики с помощью алгоритма FABRIK.
 */
export class FabrikChain2D {

    // ---------- Private Properties ----------

    /**
     * Массив костей.
     */
    private _chain: FabrikBone2D[] = [];

    /**
     * Название цепи.
     * <p>
     * Необязательное к использованию поле, помогающее идентифицировать цепь.
     */
    private _name: string = '';
    
    /**
     * Порог, достигнув которого мы считаем задачу инверсной кинематики решенной.
     * <p>
     * При решении задачи ИК, когда расстояние между текущим положением и желаемым положением становится меньше или равно
     * значению порога, мы прерываем дальнейшие итерации и считаем задачу решенной.
     * <p>
     * Значение по умолчанию 1.
     * <p>
     * Минимально допустимое значение - 0, но стоит помнить о погрешности вычисления и не задавать порог равным нулю, так
     * как это может привести к бесконечным бесполезным попыткам.
     * <p>
     * Хотя данное поле и самый важный критерий останова для ИК-алгоритма, оно работает в комбинации с
     * {@link #_maxIterationAttempts} и {@link _minIterationChange}. Эти вспомогательные свойства помогают пережить ситуации,
     * когда длины цепи не хватает для достижения цели или когда суставы цепи сильно ограничены.
     */
    private _solveDistanceThreshold: number = 1.0;


    /**
     * Максимальное количество итераций алгоритма, применяемых при решении задачи ИК.
     *
     * @default 20
     */
    private _maxIterationAttempts: number = 15;

    /**
     * Минимальное значения для дельты рассотояний между итерациями алгоритма.
     *
     * @default 0.01
     */
    private _minIterationChange: number = 0.01;

    /**
     * Длина цепи.
     */
    private _chainLength: number = 0;

    /**
     * Начальная позиция первой кости в цепи.
     *
     * @default: Vec3f(0, 0)
     */
    private _baseLocation: Vec2f = new Vec2f();

    /**
     * Зафиксирована ли начальная позиция цепи.
     * Если нет - то она может перемещаться.
     *
     * @default true
     */
    private _fixedBaseMode: boolean = true;

    /**
     * Тип сустава первой кости в цепи.
     */
    private _baseboneConstraintType: BaseboneConstraintType2D = BaseboneConstraintType2D.NONE;

    private _boneConnectionPoint: BoneConnectionPoint = BoneConnectionPoint.END;

    /**
     * Направление относительно которого мы ограничиваем первую кость цепи.
     */
    private _baseboneConstraintUV: Vec2f = new Vec2f();

    private _baseboneRelativeConstraintUV: Vec2f = new Vec2f();

    /**
     * Последняя целевая позиция, относительно которой решалась задача ИК.
     *
     * @default Vec3f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
     */
    private _lastTargetLocation: Vec2f = new Vec2f(Number.MAX_VALUE, Number.MAX_VALUE);

    /**
     * Предыдущая начальная позиция базовой (первой в цепи) кости.
     * <p>
     * Данное значение хранится для того, чтобы сравнивать изменилось ли
     * начальное положение базовой кости в процессе решения.
     *
     * @default Vec3f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
     */
    private _lastBaseLocation:Vec2f = new Vec2f(Number.MAX_VALUE, Number.MAX_VALUE);

    /**
     * Встроенное целевое расположение,которое можно использовать для решения ИК.
     * <p>
     * Встроенные целевые местоположения позволяют решать ИК структуры для нескольких целей (по одной на цепочку в структуре)
     * вместо того, чтобы все цепочки решались для одной и той же цели. Чтобы использовать встроенные цели, флаг _useEmbeddedTargets
     * должно быть true(что не является значением по умолчанию) - этот флаг можно установить с помощью вызова setEmbeddedTargetMode (true).
     */
    private _embeddedTarget: Vec2f = new Vec2f();

    /**
     * _useEmbeddedTarget    Следует ли использовать местоположение _embeddedTarget при решении этой цепочки.
     * <p>
     * Этот флаг можно переключить, вызвав setEmbeddedTargetMode (true) в цепочке.
     *
     * @default false
     */
    private _useEmbeddedTarget: boolean = false;

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
    private _connectedBoneNumber: number  = -1;

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
     * @param	source	Имя данной цепи.
     *
     * Конструктор копирования.
     *
     * @param	source	Цепь для копирования.
     */
    constructor(source?: string | FabrikChain2D) {
        if (!source) {
            return;
        }
        if (typeof source === 'string') {
            this._name = source;
        } else {
            this._chain = source.cloneChainVector();
            this._baseLocation.set(source._baseLocation);
            this._lastTargetLocation.set(source._lastTargetLocation);
            this._lastBaseLocation.set(source._lastBaseLocation);
            this._baseboneConstraintUV.set(source._baseboneConstraintUV);
            this._baseboneRelativeConstraintUV.set(source._baseboneRelativeConstraintUV);
            this._embeddedTarget.set(source._embeddedTarget);

            this._chainLength            = source._chainLength;
            this._currentSolveDistance   = source._currentSolveDistance;
            this._connectedChainNumber   = source._connectedChainNumber;
            this._connectedBoneNumber    = source._connectedBoneNumber;
            this._baseboneConstraintType = source._baseboneConstraintType;
            this._boneConnectionPoint    = source._boneConnectionPoint;
            this._name                   = source._name;
            this._useEmbeddedTarget      = source._useEmbeddedTarget;
        }
    }

// ---------- Public Methods ------------

    /**
     * Добавляет кость в конец цепи.
     *
     * @param    bone    Кость.
     */
    addBone(bone: FabrikBone2D): void {
        this._chain.push(bone);

        if (this._chain.length === 1) {
            this._baseLocation.set( bone.getStartLocation() );

            this._baseboneConstraintUV = bone.getDirectionUV();
        }

        this.updateChainLength();
    }

    addConsecutiveConstrainedBone(directionUV: Vec2f, length: number, clockwiseDegs: number, anticlockwiseDegs: number, colour: Colour4f = new Colour4f()): void {
        Utils.validateDirectionUV(directionUV);

        Utils.validateLength(length);

        if (this._chain.length !== 0) {
            const prevBoneEnd = this._chain[this._chain.length - 1].getEndLocation();

            let bone = new FabrikBone2D(prevBoneEnd, Vec2f.normalised(directionUV), length, clockwiseDegs, anticlockwiseDegs, colour);
            this.addBone(bone);
        } else {
            throw new Error('You cannot add the base bone to a chain using this method as it does not provide a start location.');
        }
    }

    addConsecutiveBone(directionUV: Vec2f, length: number): void {
        this.addConsecutiveConstrainedBone( directionUV, length, 180.0, 180.0, new Colour4f() );
    }

    addConsecutiveCreatedBone(bone: FabrikBone2D): void {
        const dir = bone.getDirectionUV();
        Utils.validateDirectionUV(dir);

        const len = bone.getLength();
        Utils.validateLength(len);

        if (this._chain.length !== 0) {
            const prevBoneEnd = this._chain[this._chain.length - 1].getEndLocation();

            bone.setStartLocation(prevBoneEnd);
            bone.setEndLocation( prevBoneEnd.plus(dir.times(len)) );

            this.addBone(bone);
        } else {
            throw new Error('You cannot add the base bone to a chain using this method as it does not provide a start location.');
        }
    }

    /**
     * Возвращает тип сустава базовой кости.
     *
     * @return
     */
    getBaseboneConstraintType(): BaseboneConstraintType2D { return this._baseboneConstraintType; }

    getBaseboneConstraintUV(): Vec2f { return this._baseboneConstraintUV; }

    /**
     * Возвращает базовое расположение цепочки IK.
     * <p>
     * Независимо от того, сколько костей содержится в цепи, базовое местоположение всегда является начальным местоположением
     * первой кости в цепи.
     *
     * @return
     */
    getBaseLocation(): Vec2f {
        if (this._chain.length !== 0) {
            return this._chain[0].getStartLocation();
        } else {
            throw new Error('Cannot get base location as there are zero bones in the chain.');
        }
    }

    getBone(boneNumber: number): FabrikBone2D {
        return this._chain[boneNumber];
    }

    getBoneConnectionPoint(): BoneConnectionPoint { return this._boneConnectionPoint; }

    getChain(): FabrikBone2D[] { return this._chain; }

    getChainLength(): number { return this._chainLength; }

    getConnectedBoneNumber(): number { return this._connectedBoneNumber; }

    getConnectedChainNumber(): number { return this._connectedChainNumber; }

    getEffectorLocation(): Vec2f {
        if (this._chain.length !== 0) {
            return this._chain[this._chain.length - 1].getEndLocation();
        }
        else {
            throw new Error('Cannot get effector location as there are zero bones in the chain.');
        }
    }

    getEmbeddedTargetMode(): boolean { return this._useEmbeddedTarget; }

    getEmbeddedTarget(): Vec2f { return this._embeddedTarget; }

    getLastTargetLocation(): Vec2f { return this._lastTargetLocation; }

    getName(): string { return this._name; }

    getNumBones(): number { return this._chain.length; }

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

    setBaseboneConstraintType(type: BaseboneConstraintType2D): void { this._baseboneConstraintType = type; }

    setBaseboneConstraintUV(constraintUV: Vec2f): void {
        Utils.validateDirectionUV(constraintUV);

        this._baseboneConstraintUV.set(Vec2f.normalised(constraintUV));
    }

    setBaseLocation(baseLocation: Vec2f): void {
        this._baseLocation.set(baseLocation);
    }

    setBoneConnectionPoint(boneConnectionPoint: BoneConnectionPoint) { this._boneConnectionPoint = boneConnectionPoint; }

    setChain(chain: FabrikBone2D[]): void {
        this._chain = chain;
    }

    setColour(colour: Colour4f): void {
        for (let aBone of this._chain) {
            aBone.setColour(colour);
        }
    }

    setConnectedBoneNumber(boneNumber: number): void {
        this._connectedBoneNumber = boneNumber;
    }

    setConnectedChainNumber(chainNumber: number): void {
        this._connectedChainNumber = chainNumber;
    }

    setFixedBaseMode(value: boolean): void {
        if (!value && this._connectedChainNumber !== -1) {
            throw new Error('This chain is connected to another chain so must remain in fixed base mode.');
        }

        if (this._baseboneConstraintType === BaseboneConstraintType2D.GLOBAL_ABSOLUTE && !value) {
            throw new Error('Cannot set a non-fixed base mode when the chain\'s constraint type is BaseBoneConstraintType2D.GLOBAL_ABSOLUTE.');
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
        if (minIterationChange < 0) {
            throw new Error('The minimum iteration change value must be more than or equal to zero.');
        }

        this._minIterationChange = minIterationChange;
    }

    setName(name: string): void { this._name = name; }

    setSolveDistanceThreshold(solveDistance: number): void {
        if (solveDistance < 0.0) {
            throw new Error('The solve distance threshold must be greater than or equal to zero.');
        }

        this._solveDistanceThreshold = solveDistance;
    }

    /**
     * Решает задачу ИК с помощью алгоритма FABRIK.
     * <p>
     * Если в цепи еще нет костей - возникнет ошибка.
     *
     * @param target    Целевое местоположение.
     * @return            Наименьшее расстояние между новым положением эффектора и целевым местоположением, которого удалось достичь.
     */
    private solveIK(target: Vec2f): number {
        // ---------- Прямой проход от эффектора к основанию  -----------

        for (let loop = this._chain.length - 1; loop >= 0; --loop) {
            const thisBone = this._chain[loop];

            const boneLength = thisBone.getLength();

            if (loop !== this._chain.length - 1) {
                const outerBone = this._chain[loop + 1];

                const outerBoneOuterToInnerUV = outerBone.getDirectionUV().negated();

                const thisBoneOuterToInnerUV = thisBone.getDirectionUV().negated();

                const clockwiseConstraintDegs = outerBone.getJoint().getClockwiseConstraintDegs();
                const antiClockwiseConstraintDegs = outerBone.getJoint().getAnticlockwiseConstraintDegs();


                let constrainedUV;
                if (this._chain[loop].getJointConstraintCoordinateSystem() == ConstraintCoordinateSystem.LOCAL) {
                    constrainedUV = Vec2f.getConstrainedUV(thisBoneOuterToInnerUV, outerBoneOuterToInnerUV, clockwiseConstraintDegs, antiClockwiseConstraintDegs);
                } else {
                    constrainedUV = Vec2f.getConstrainedUV(thisBoneOuterToInnerUV, thisBone.getGlobalConstraintUV().negated(), clockwiseConstraintDegs, antiClockwiseConstraintDegs);
                }


                const newStartLocation = thisBone.getEndLocation().plus(constrainedUV.times(boneLength));

                thisBone.setStartLocation(newStartLocation);

                if (loop > 0) {
                    this._chain[loop - 1].setEndLocation(newStartLocation);
                }
            } else {
                thisBone.setEndLocation(target);

                const thisBoneOuterToInnerUV = thisBone.getDirectionUV().negated();

                let constrainedUV;
                if (loop > 0) {
                    const innerBoneOuterToInnerUV = this._chain[loop - 1].getDirectionUV().negated();

                    const clockwiseConstraintDegs = thisBone.getJoint().getClockwiseConstraintDegs();
                    const antiClockwiseConstraintDegs = thisBone.getJoint().getAnticlockwiseConstraintDegs();

                    if (thisBone.getJoint().getConstraintCoordinateSystem() == ConstraintCoordinateSystem.LOCAL) {
                        constrainedUV = Vec2f.getConstrainedUV(thisBoneOuterToInnerUV, innerBoneOuterToInnerUV, clockwiseConstraintDegs, antiClockwiseConstraintDegs);
                    }
                    else {
                        constrainedUV = Vec2f.getConstrainedUV(thisBoneOuterToInnerUV, thisBone.getGlobalConstraintUV().negated(), clockwiseConstraintDegs, antiClockwiseConstraintDegs);
                    }

                } else {
                    if (thisBone.getJointConstraintCoordinateSystem() == ConstraintCoordinateSystem.LOCAL) {
                        constrainedUV = thisBoneOuterToInnerUV;
                    } else {
                        constrainedUV = Vec2f.getConstrainedUV(thisBoneOuterToInnerUV, thisBone.getGlobalConstraintUV().negated(), thisBone.getClockwiseConstraintDegs(), thisBone.getAnticlockwiseConstraintDegs());
                    }
                }

                const newStartLocation = thisBone.getEndLocation().plus(constrainedUV.times(boneLength));

                thisBone.setStartLocation(newStartLocation);

                if (loop > 0) {
                    this._chain[loop - 1].setEndLocation(newStartLocation);
                }
            }
        }

        // ---------- Обратный проход от основания к эффектору -----------

        for (let loop = 0; loop < this._chain.length; ++loop) {
            const boneLength = this._chain[loop].getLength();

            const thisBone = this._chain[loop];
            if (loop !== 0) {
                const previousBone = this._chain[loop - 1];

                const thisBoneInnerToOuterUV = thisBone.getDirectionUV();
                const prevBoneInnerToOuterUV = previousBone.getDirectionUV();

                const clockwiseConstraintDegs = thisBone.getJoint().getClockwiseConstraintDegs();
                const antiClockwiseConstraintDegs = thisBone.getJoint().getAnticlockwiseConstraintDegs();

                let constrainedUV;
                if (thisBone.getJointConstraintCoordinateSystem() == ConstraintCoordinateSystem.LOCAL) {
                    constrainedUV = Vec2f.getConstrainedUV(thisBoneInnerToOuterUV, prevBoneInnerToOuterUV, clockwiseConstraintDegs, antiClockwiseConstraintDegs);
                } else {
                    constrainedUV = Vec2f.getConstrainedUV(thisBoneInnerToOuterUV, thisBone.getGlobalConstraintUV(), clockwiseConstraintDegs, antiClockwiseConstraintDegs);
                }

                const newEndLocation = thisBone.getStartLocation().plus(constrainedUV.times(boneLength));

                thisBone.setEndLocation(newEndLocation);

                if (loop < this._chain.length - 1) {
                    this._chain[loop + 1].setStartLocation(newEndLocation);
                }
            } else {
                if (this._fixedBaseMode) {
                    this._chain[0].setStartLocation(this._baseLocation);
                } else {
                    const boneZeroUV = this._chain[0].getDirectionUV();
                    const boneZeroEndLocation = this._chain[0].getEndLocation();
                    const newBoneZeroStartLocation = boneZeroEndLocation.minus(boneZeroUV.times(boneLength));
                    this._chain[0].setStartLocation(newBoneZeroStartLocation);
                }

                if (this._baseboneConstraintType == BaseboneConstraintType2D.NONE) {
                    const thisBoneInnerToOuterUV = thisBone.getDirectionUV();

                    const newEndLocation = thisBone.getStartLocation().plus(thisBoneInnerToOuterUV.times(boneLength));

                    this._chain[0].setEndLocation(newEndLocation);

                    if (this._chain.length > 1) {
                        this._chain[1].setStartLocation(newEndLocation);
                    }
                } else {
                    const thisBoneInnerToOuterUV = thisBone.getDirectionUV();

                    const clockwiseConstraintDegs = thisBone.getJoint().getClockwiseConstraintDegs();
                    const antiClockwiseConstraintDegs = thisBone.getJoint().getAnticlockwiseConstraintDegs();

                    let constrainedUV;
                    if (this._baseboneConstraintType === BaseboneConstraintType2D.LOCAL_ABSOLUTE) {
                        constrainedUV = Vec2f.getConstrainedUV(thisBoneInnerToOuterUV, this._baseboneRelativeConstraintUV, clockwiseConstraintDegs, antiClockwiseConstraintDegs);

                    } else {
                        constrainedUV = Vec2f.getConstrainedUV(thisBoneInnerToOuterUV, this._baseboneConstraintUV, clockwiseConstraintDegs, antiClockwiseConstraintDegs);
                    }
                    const newEndLocation = this._chain[loop].getStartLocation().plus(constrainedUV.times(boneLength));

                    this._chain[loop].setEndLocation(newEndLocation);

                    if (loop < this._chain.length - 1) {
                        this._chain[loop + 1].setStartLocation(newEndLocation);
                    }
                }
            }
        }

        this._lastTargetLocation.set(target);

        const currentEffectorLocation = this._chain[this._chain.length - 1].getEndLocation();

        return Vec2f.distanceBetween(currentEffectorLocation, target);
    }

    /**
     * Устанавливает должна ли использоваться встроенная целевая позиция.
     *
     * @param    value
     */
    setEmbeddedTargetMode(value: boolean): void { this._useEmbeddedTarget = value; }

    private cloneChainVector(): FabrikBone2D[] {
        const numBones = this._chain.length;

        const clonedChain = [];

        for (let loop = 0; loop < numBones; ++loop) {
            const bone = new FabrikBone2D();
            bone.set(this._chain[loop]);
            clonedChain.push(bone);
        }

        return clonedChain;
    }

    updateChainLength(): void {
        this._chainLength = 0.0;
        for (let aBone of this._chain) {
            this._chainLength += aBone.getLength();
        }
    }

    updateEmbeddedTarget(newEmbeddedTarget: Vec2f): void {
        if (this._useEmbeddedTarget) {
            this._embeddedTarget.set(newEmbeddedTarget);
        } else {
            throw new Error('This chain does not have embedded targets enabled - enable with setEmbeddedTargetMode(true).');
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
    solveForTarget(newTarget: Vec2f): number {
        if (this._lastTargetLocation.approximatelyEquals(newTarget, 0.001) && this._lastBaseLocation.approximatelyEquals(this._baseLocation, 0.001)) {
            return this._currentSolveDistance;
        }

        let startingDistance;
        let startingSolution = null;

        if (this._lastBaseLocation.approximatelyEquals(this._baseLocation, 0.001)) {
            startingDistance = Vec2f.distanceBetween(this._chain[this._chain.length - 1].getEndLocation(), newTarget);
            startingSolution = this.cloneChainVector();
        } else {
            startingDistance = Number.MAX_VALUE;
        }

        let bestSolution: FabrikBone2D[] = [];

        let bestSolveDistance = Number.MAX_VALUE;
        let lastPassSolveDistance = Number.MAX_VALUE;

        let solveDistance;
        for (let loop = 0; loop < this._maxIterationAttempts; ++loop) {
            solveDistance = this.solveIK(newTarget);

            if (solveDistance < bestSolveDistance) {
                bestSolveDistance = solveDistance;
                bestSolution = this.cloneChainVector();

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

        if (bestSolveDistance < startingDistance) {
            this._currentSolveDistance = bestSolveDistance;
            this._chain = bestSolution;
        } else {
            this._currentSolveDistance = startingDistance;
            this._chain = startingSolution;
        }

        this._lastBaseLocation.set(this._baseLocation);
        this._lastTargetLocation.set(newTarget);

        return this._currentSolveDistance;
    }

    getBaseboneRelativeConstraintUV(): Vec2f { return this._baseboneRelativeConstraintUV; }

    setBaseboneRelativeConstraintUV(constraintUV: Vec2f): void { this._baseboneRelativeConstraintUV.set(constraintUV); }

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
