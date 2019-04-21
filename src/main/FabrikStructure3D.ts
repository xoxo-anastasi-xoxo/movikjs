import {FabrikChain3D} from './FabrikChain3D';
import {FabrikBone3D} from './FabrikBone3D';
import {BoneConnectionPoint} from './BoneConnectionPoint';
import {Vec3f} from '../utils/Vec3f';
import {BaseboneConstraintType3D} from './BaseboneConstraintType3D';
import {Mat3f} from '../utils/Mat3f';

/**
 * Набор 3D цепей.
 **/
export class FabrikStructure3D {
    // ---------- Private Properties ----------

    /** Название структуры. */
    private _name: string = '';

    /** Список цепей. */
    private _chains: FabrikChain3D[] = [];

    // --------- Public Methods ----------

    /**
     * Конструктор.
     * Принимает два варианта значений:
     *
     * Конструктор без параметров - задает всем полям значения по умолчанию.
     *
     * Один параметр. Задает имя структуры.
     * @param name Имя структуры.
     * */
    constructor(name: string = '') {
        this._name = name;
    }

    /**
     * Решает задачу ИК для всех цепей структуры.
     * <p>
     * Все цепи перемещаются к единой целевой позиции за исключением тех, для которых задан embeddedTargetMode.
     *
     * @param   newTargetLocation    Целевая позиция для всех эффекторов структуры.
     */
    public solveForTarget(newTargetLocation: Vec3f): void {
        const nu_chains = this._chains.length;
        let connectedChainNumber;

        for (let loop = 0; loop < nu_chains; ++loop) {
            const thisChain = this._chains[loop];
            connectedChainNumber = thisChain.getConnectedChainNumber();

            if (connectedChainNumber === -1) {
                if (!thisChain.getEmbeddedTargetMode()) {
                    thisChain.solveForTarget(newTargetLocation);
                } else {
                    thisChain.solveForEmbeddedTarget();
                }
            } else {
                const hostChain: FabrikChain3D = this._chains[connectedChainNumber];
                const hostBone: FabrikBone3D = hostChain.getBone(thisChain.getConnectedBoneNumber());
                if (hostBone.getBoneConnectionPoint() == BoneConnectionPoint.START) {
                    thisChain.setBaseLocation(hostBone.getStartLocation());
                } else {
                    thisChain.setBaseLocation(hostBone.getEndLocation());
                }

                const constraintType: BaseboneConstraintType3D = thisChain.getBaseboneConstraintType();
                switch (constraintType) {
                    case BaseboneConstraintType3D.NONE:
                    case BaseboneConstraintType3D.GLOBAL_ROTOR:
                    case BaseboneConstraintType3D.GLOBAL_HINGE:
                        break;

                    case BaseboneConstraintType3D.LOCAL_ROTOR:
                    case BaseboneConstraintType3D.LOCAL_HINGE: {
                        const connectionBoneMatrix: Mat3f = Mat3f.createRotationMatrix(hostBone.getDirectionUV());
                        const relativeBaseboneConstraintUV: Vec3f = connectionBoneMatrix.times(thisChain.getBaseboneConstraintUV()).normalised();

                        thisChain._setBaseboneRelativeConstraintUV(relativeBaseboneConstraintUV);

                        if (constraintType == BaseboneConstraintType3D.LOCAL_HINGE) {
                            thisChain._setBaseboneRelativeReferenceConstraintUV(connectionBoneMatrix.times(thisChain.getBone(0).getJoint().getHingeReferenceAxis()));
                        }
                        break;
                    }

                }
                if (!thisChain.getEmbeddedTargetMode()) {
                    thisChain.solveForTarget(newTargetLocation);
                } else {
                    thisChain.solveForEmbeddedTarget();
                }
            }
        }
    }

    /**
     * Добавляет цепь в структуру.
     *
     * @param   chain    Новая цепь.
     */
    addChain(chain: FabrikChain3D): void {
        this._chains.push(chain);
    }

    /**
     * Удаляет цепь из структуры.
     *
     * @param   chainIndex    Индекс удаляемой цепи.
     */
    removeChain(chainIndex): void {
        this._chains.splice(chainIndex, 1);
    }

    /**
     * Добавляет цепь в структуру, присоединяя ее к существующей в структуре цепи.
     *
     * @param   newChain    Новая цепь.
     * @param   existingChainNumber    Номер цепи, к которой необходимо присоединить новую цепь.
     * @param   existingBoneNumber    Номер кости, к которой необходимо присоединить новую цепь.
     * @param   boneConnectionPoint    К началу или к концу кости присоединять.
     */
    connectChain(newChain: FabrikChain3D, existingChainNumber: number, existingBoneNumber: number, boneConnectionPoint: BoneConnectionPoint, shouldCalcCoordinates: boolean): void {
        if (existingChainNumber > this._chains.length) {
            throw new Error('Cannot connect to chain ' + existingChainNumber + ' - no such chain (remember that chains are zero indexed).');
        }

        if (existingBoneNumber > this._chains[existingChainNumber].getNumBones()) {
            throw new Error('Cannot connect to bone ' + existingBoneNumber + ' of chain ' + existingChainNumber + ' - no such bone (remember that bones are zero indexed).');
        }

        const relativeChain: FabrikChain3D = new FabrikChain3D(newChain);

        relativeChain.connectToStructure(this, existingChainNumber, existingBoneNumber);

        this.getChain(existingChainNumber).getBone(existingBoneNumber).setBoneConnectionPoint(boneConnectionPoint);
        let connectionLocation: Vec3f;
        if (boneConnectionPoint == BoneConnectionPoint.START) {
            connectionLocation = this._chains[existingChainNumber].getBone(existingBoneNumber).getStartLocation();
        } else {
            connectionLocation = this._chains[existingChainNumber].getBone(existingBoneNumber).getEndLocation();
        }
        relativeChain.setBaseLocation(connectionLocation);

        relativeChain.setFixedBaseMode(true);

        if (shouldCalcCoordinates) {
            for (let loop = 0; loop < relativeChain.getNumBones(); ++loop) {
                const origStart: Vec3f = relativeChain.getBone(loop).getStartLocation();
                const origEnd: Vec3f = relativeChain.getBone(loop).getEndLocation();

                const translatedStart: Vec3f = origStart.plus(connectionLocation);
                const translatedEnd: Vec3f = origEnd.plus(connectionLocation);

                relativeChain.getBone(loop).setStartLocation(translatedStart);
                relativeChain.getBone(loop).setEndLocation(translatedEnd);
            }
        }

        this.addChain(relativeChain);
    }

    /**
     * Возвращает количество цепей в структуре.
     */
    getNumChains(): number {
        return this._chains.length;
    }

    /**
     * Возвращает цепь структуры по индексу.
     *
     * @param    chainNumber    Индекс цепи.
     */
    getChain(chainNumber: number): FabrikChain3D {
        return this._chains[chainNumber];
    }

    /**
     * Задаёт имя структуре.
     *
     * @param    name    Желаемое имя.
     */
    setName(name: string): void {
        this._name = name;
    }

    /**
     * Возвращает имя структуры.
     *
     * @return
     */
    getName(): string {
        return this._name;
    }
}
