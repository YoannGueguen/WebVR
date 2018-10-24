import {Group, MaterialCreator} from "three";
import {MTLLoader, OBJLoader} from "three-obj-mtl-loader";
import ObjectFileLoader from "@js/Core/Loader/ObjectFileLoader";

export default class ObjectLoader {
    private onProgressCallback: Function;

    constructor(private directoryPath: string) {
        new ObjectFileLoader();

        this.onProgressCallback = xhr => console.info(`${Math.floor(xhr.loaded / xhr.total * 100)}% loaded`);
    }

    public load(modelName: string): Promise<Group> {
        return new Promise((resolve, reject) => {
            const object = require(`@js/Models/${this.directoryPath}/${modelName}.obj`),
                textures = require(`@js/Models/${this.directoryPath}/${modelName}.mtl`);

            const mtlLoader = new MTLLoader();
            mtlLoader.setBaseUrl('/models/textures/');
            mtlLoader.load(textures, (materials: MaterialCreator) => {
                materials.preload();

                const objLoader = new OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.load(
                    // Resource URL
                    object,
                    // Called when resource is loaded
                    resolve,
                    // Called when loading is in progresses
                    this.onProgressCallback,
                    // Called when loading has errors
                    reject
                );
            }, () => {
            }, reject);
        });
    }

    public onProgress(callback: Function): void {
        this.onProgressCallback = callback;
    }
}