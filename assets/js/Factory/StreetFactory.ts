import ObjectLoader from "@js/Core/Loader/ObjectLoader";
import Street from "@js/Domain/Object/Street";

export default class StreetFactory {
    static create(): Promise<Street> {
        const objectLoader = new ObjectLoader('street-environment'),
            promiseLoad = objectLoader.load('Street environment_V01');

        promiseLoad.catch(console.error);

        return promiseLoad;
    }
}