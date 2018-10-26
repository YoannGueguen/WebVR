import ObjectLoader from "@js/Core/Loader/ObjectLoader";
import FalconMillenium from "@js/Domain/Object/FalconMillenium";

export default class FalconMilleniumFactory {
    static create(): Promise<FalconMillenium> {
        const objectLoader = new ObjectLoader('millenium-falcon'),
            promiseLoad = objectLoader.load('millenium-falcon');

        promiseLoad.catch(console.error);

        return promiseLoad;
    }
}