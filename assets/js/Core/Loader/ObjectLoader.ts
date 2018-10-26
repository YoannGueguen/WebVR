import {Group, MaterialCreator} from "three";
import {MTLLoader, OBJLoader} from "three-obj-mtl-loader";
import ObjectFileLoader from "@js/Core/Loader/ObjectFileLoader";
import ObjectCacheLoader from "@js/Core/Loader/ObjectCacheLoader";
import ObjectCacheLoaderCollection from "@js/Core/Loader/ObjectCacheLoaderCollection";
import EnvironmentService from "@js/Service/EnvironmentService";
import {Inject} from "@root/node_modules/typescript-ioc";

export default class ObjectLoader {
    private static objectCacheCollection = new ObjectCacheLoaderCollection();
    @Inject
    private environmentService: EnvironmentService;
    private onProgressCallback: Function;

    constructor(private directoryPath: string) {
        new ObjectFileLoader();

        this.onProgressCallback = xhr => {
            if (this.environmentService.isDevelopmentEnvironment()) {
                console.info(`${Math.floor(xhr.loaded / xhr.total * 100)}% loaded`);
            }
        }
    }

    /**
     * Load an 3D object with file name parameter
     * @param modelName
     */
    public load(modelName: string): Promise<Group> {
        return new Promise((resolve, reject) => {
            // Search object in cache collection
            const objectCache = ObjectLoader.objectCacheCollection.findObject(this.directoryPath, modelName);
            // If object exist in cache collection
            if (objectCache !== null) {
                // Return a clone of this object
                return resolve(Object.assign({}, objectCache.object));
            }

            const object = require(`@js/Models/${this.directoryPath}/${modelName}.obj`),
                textures = require(`@js/Models/${this.directoryPath}/${modelName}.mtl`);

            const mtlLoader = new MTLLoader();
            mtlLoader.setTexturePath('/models/textures/');
            mtlLoader.load(textures, (materials: MaterialCreator) => {
                materials.preload();

                const objLoader = new OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.load(
                    // Resource URL
                    object,
                    // Called when resource is loaded
                    (group) => {
                        // Add object to cache system
                        ObjectLoader.objectCacheCollection.add(new ObjectCacheLoader(this.directoryPath, modelName, group));
                        resolve(group);
                    },
                    // Called when loading is in progresses
                    this.onProgressCallback,
                    // Called when loading has errors
                    reject
                );
            }, () => {
            }, reject);
        });
    }

    /**
     * On progress 3D model load callback
     * @param callback
     */
    public onProgress(callback: Function): void {
        this.onProgressCallback = callback;
    }
}