import ObjectLoader from "@js/Core/Loader/ObjectLoader";
import Ragnaros from "@js/Domain/Object/Ragnaros";

export default class RagnarosFactory {
    static create(): Promise<Ragnaros> {
        return new Promise((resolve, reject) => {
            const objectLoader = new ObjectLoader('Ragnaros'),
                promiseLoad = objectLoader.load('Ragnaros');

            promiseLoad
                .then(object => resolve(new Ragnaros(object)))
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        });
    }
}