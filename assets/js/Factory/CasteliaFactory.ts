import ObjectLoader from "@js/Core/Loader/ObjectLoader";
import Castelia from "@js/Domain/Object/Castelia";

export default class CasteliaFactory {
    static create(): Promise<Castelia> {
        const objectLoader = new ObjectLoader('Castelia'),
            promiseLoad = objectLoader.load('Castelia City');

        promiseLoad.catch(console.error);

        return promiseLoad;
    }
}