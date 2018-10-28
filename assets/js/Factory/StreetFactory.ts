import ObjectLoader from "@js/Core/Loader/ObjectLoader";
import Street from "@js/Domain/Object/Street";

export default class StreetFactory {
    static create(): Promise<Street> {
        return new Promise((resolve, reject) => {
            const objectLoader = new ObjectLoader('street-environment'),
                promiseLoad = objectLoader.load('Street environment_V01');

            promiseLoad
                .then(object => resolve(new Street(object)))
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        });
    }
}