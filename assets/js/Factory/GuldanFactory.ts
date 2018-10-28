import ObjectLoader from "@js/Core/Loader/ObjectLoader";
import Guldan from "@js/Domain/Object/Guldan";

export default class GuldanFactory {
    static create(): Promise<Guldan> {
        return new Promise((resolve, reject) => {
            const objectLoader = new ObjectLoader('Guldan'),
                promiseLoad = objectLoader.load('Guldan');

            promiseLoad
                .then(object => resolve(new Guldan(object)))
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        });
    }
}