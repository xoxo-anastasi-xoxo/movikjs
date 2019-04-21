import {Vec2f} from '../utils/Vec2f';
import {FabrikChain2D} from './FabrikChain2D';
import {BoneConnectionPoint} from './BoneConnectionPoint';
import {BaseboneConstraintType2D} from './BaseboneConstraintType2D';

/**
 * Набор 2D цепей.
 **/
export class FabrikStructure2D {
    private static UP: Vec2f = new Vec2f(0.0, 1.0);

    // ---------- Private Properties ----------

    /** Название структуры. */
    private _name: string = '';

    /** Список цепей. */
    private _chains: FabrikChain2D[] = [];

    // --------- Public Methods ----------

    /** Конструктор.
     * Принимает два варианта значений:
     * Конструктор без параметров - задает всем полям значения по умолчанию.
     *
     * Один параметр. Задает имя структуры.
     *
     * @param name Имя структуры.
     * */
    constructor(name: string = '') {
        this._name = name;
    }

    /**
     * Задаёт имя структуре.
     *
     * @param    name    Желаемое имя.
     */
    public setName(name: string): void { this._name = name; }

    /**
     * Решает задачу ИК для всех цепей структуры.
     * <p>
     * Все цепи перемещаются к единой целевой позиции за исключением тех, для которых задан embeddedTargetMode.
     *
     * @param   newTargetLocation    Целевая позиция для всех эффекторов структуры.
     */
    public solveForTarget(newTargetLocation: Vec2f): void {
        const nu_chains = this._chains.length;
        let hostChainNumber: number;
        let thisChain: FabrikChain2D;


        for (let loop = 0; loop < nu_chains; ++loop) {
            thisChain = this._chains[loop];

            hostChainNumber = thisChain.getConnectedChainNumber();

            const constraintType = thisChain.getBaseboneConstraintType();

            if (hostChainNumber !== -1 && constraintType !== BaseboneConstraintType2D.GLOBAL_ABSOLUTE) {
                const hostBone = this._chains[hostChainNumber].getBone(this._chains[loop].getConnectedBoneNumber());

                if (thisChain.getBoneConnectionPoint() == BoneConnectionPoint.START) {
                    thisChain.setBaseLocation(hostBone.getStartLocation());
                }
                else {
                    thisChain.setBaseLocation(hostBone.getEndLocation());
                }

                const hostBoneUV = hostBone.getDirectionUV();
                if (constraintType == BaseboneConstraintType2D.LOCAL_RELATIVE) {
                    this._chains[loop].setBaseboneConstraintUV(hostBoneUV);
                }
                else if (constraintType == BaseboneConstraintType2D.LOCAL_ABSOLUTE) {
                    const angleDegs = FabrikStructure2D.UP.getSignedAngleDegsTo(hostBoneUV);

                    const relativeConstraintUV = Vec2f.rotateDegs(thisChain.getBaseboneConstraintUV(), angleDegs);

                    thisChain.setBaseboneRelativeConstraintUV(relativeConstraintUV);
                }
            }

            if (!thisChain.getEmbeddedTargetMode()) {
                thisChain.solveForTarget(newTargetLocation);
            }
            else {
                thisChain.solveForEmbeddedTarget();
            }

        }

    }

    /**
     * Добавляет цепь в структуру.
     *
     * @param   chain    Новая цепь.
     */
    addChain(chain: FabrikChain2D): void {
        this._chains.push(chain);
    }
    /**
     * Добавляет цепь в структуру, присоединяя ее к существующей в структуре цепи.
     *
     * @param   newChain    Новая цепь.
     * @param   existingChainNumber    Номер цепи, к которой необходимо присоединить новую цепь.
     * @param   existingBoneNumber    Номер кости, к которой необходимо присоединить новую цепь.
     * @param   boneConnectionPoint    К началу или к концу кости присоединять.
     */
    connectChain(chain: FabrikChain2D, chainNumber: number, boneNumber: number, boneConnectionPoint: BoneConnectionPoint, shouldCalcCoordinates: boolean): void {
        chain.setBoneConnectionPoint(boneConnectionPoint);
        if (chainNumber >= this._chains.length) {
            throw new Error('Cannot connect to chain ' + chainNumber + ' - no such chain (remember that chains are zero indexed).');
        }

        if (boneNumber >= this._chains[chainNumber].getNumBones()) {
            throw new Error('Cannot connect to bone ' + boneNumber + ' of chain ' + chainNumber + ' - no such bone (remember that bones are zero indexed).');
        }

        const relativeChain = new FabrikChain2D(chain);
        relativeChain.setConnectedChainNumber(chainNumber);
        relativeChain.setConnectedBoneNumber(boneNumber);

        const connectionPoint = chain.getBoneConnectionPoint();
        let connectionLocation;
        if (connectionPoint == BoneConnectionPoint.START) {
            connectionLocation = this._chains[chainNumber].getBone(boneNumber).getStartLocation();
        } else {
            connectionLocation = this._chains[chainNumber].getBone(boneNumber).getEndLocation();
        }
        relativeChain.setBaseLocation(connectionLocation);

        relativeChain.setFixedBaseMode(true);

        if (shouldCalcCoordinates) {
            for (let loop = 0; loop < chain.getNumBones(); ++loop) {
                const origStart = relativeChain.getBone(loop).getStartLocation();
                const origEnd = relativeChain.getBone(loop).getEndLocation();

                const translatedStart = origStart.plus(connectionLocation);
                const translatedEnd = origEnd.plus(connectionLocation);

                relativeChain.getBone(loop).setStartLocation(translatedStart);
                relativeChain.getBone(loop).setEndLocation(translatedEnd);
            }
        }

        this.addChain(relativeChain);
    }

    /**
     * Возвращает количество цепей в структуре.
     */
    getNumChains(): number { return this._chains.length; }

    /**
     * Возвращает цепь структуры по индексу.
     *
     * @param    chainNumber    Индекс цепи.
     */
    getChain(chainNumber: number): FabrikChain2D { return this._chains[chainNumber]; }

    /**
     * Возвращает имя структуры.
     *
     * @return
     */
    getName(): string {
        return this._name;
    }
}
