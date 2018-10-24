import {Group, MaterialCreator} from "three";
import {MTLLoader, OBJLoader} from "three-obj-mtl-loader";
import ObjectFileLoader from "@js/Core/Loader/ObjectFileLoader";

export default class ObjectLoader {
    constructor(private directoryPath: string) {
        new ObjectFileLoader();
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
                    xhr => console.log((xhr.loaded / xhr.total * 100) + '% loaded'),
                    // Called when loading has errors
                    reject
                );
            }, () => {
            }, reject);
        });
    }
}