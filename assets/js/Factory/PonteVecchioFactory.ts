import PonteVecchio from "@js/Domain/Object/PonteVecchio";
import ObjectLoader from "@js/Core/Loader/ObjectLoader";

export default class PonteVecchioFactory {
    static create(): Promise<PonteVecchio> {
        const objectLoader = new ObjectLoader('FlorenceBridge'),
            promiseLoad = objectLoader.load('PonteVecchio');

        promiseLoad.catch(console.error);

        return promiseLoad;
    }
}