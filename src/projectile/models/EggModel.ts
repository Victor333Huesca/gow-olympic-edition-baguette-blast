import { Vector3 } from '@babylonjs/core';
import ProjectileModel from './ProjectileModel';
import Gravity from '../../behaviors/Gravity';

class EggModel extends ProjectileModel {
    public constructor(initialPosition: Vector3, initialOrientation: Vector3, initialSpeedVector: Vector3) {
        super(
            initialPosition,
            initialOrientation,
            initialSpeedVector,
            1,
            60,
            10,
            1,
            [new Gravity(25)]
        );
    }
}

export default EggModel;
