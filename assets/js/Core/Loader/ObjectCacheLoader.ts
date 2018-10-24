import {Group} from "three";

export default class ObjectCacheLoader {
    constructor(private _objectDirectoryPath: string, private _objectName: string, private _object: Group) {
    }

    get objectDirectoryPath(): string {
        return this._objectDirectoryPath;
    }

    get objectName(): string {
        return this._objectName;
    }

    get object(): Group {
        return this._object;
    }
}