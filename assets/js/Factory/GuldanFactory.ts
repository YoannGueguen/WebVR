import ObjectLoader from "@js/Core/Loader/ObjectLoader";
import Guldan from "@js/Domain/Object/Guldan";

export default class GuldanFactory {
    static create(): Promise<Guldan> {
        const objectLoader = new ObjectLoader('Guldan'),
            promiseLoad = objectLoader.load('Guldan');

        promiseLoad.catch(console.error);

        return promiseLoad;
    }
}