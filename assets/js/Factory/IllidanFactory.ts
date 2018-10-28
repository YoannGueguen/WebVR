import ObjectLoader from "@js/Core/Loader/ObjectLoader";
import Illidan from "@js/Domain/Object/Illidan";

export default class IllidanFactory {
    static create(): Promise<Illidan> {
        return new Promise((resolve, reject) => {
            const objectLoader = new ObjectLoader('Illidan Legion'),
                promiseLoad = objectLoader.load('IllidanLegion');

            promiseLoad
                .then(object => resolve(new Illidan(object)))
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        });
    }
}