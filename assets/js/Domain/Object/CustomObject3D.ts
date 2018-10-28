import {Object3D} from "@root/node_modules/@types/three";

export default abstract class CustomObject3D {
    // noinspection TypeScriptAbstractClassConstructorCanBeMadeProtected
    constructor(private object3D: Object3D) {
    }

    public getObject3D(): Object3D {
        return this.object3D;
    }
}