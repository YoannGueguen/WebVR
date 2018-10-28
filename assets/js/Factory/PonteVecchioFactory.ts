import PonteVecchio from "@js/Domain/Object/PonteVecchio";
import ObjectLoader from "@js/Core/Loader/ObjectLoader";

export default class PonteVecchioFactory {
    static create(): Promise<PonteVecchio> {
        return new Promise((resolve, reject) => {
            const objectLoader = new ObjectLoader('FlorenceBridge'),
                promiseLoad = objectLoader.load('PonteVecchio');

            promiseLoad
                .then(object => resolve(new PonteVecchio(object)))
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        });
    }
}