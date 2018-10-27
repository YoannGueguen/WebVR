import ObjectLoader from "@js/Core/Loader/ObjectLoader";
import Illidan from "@js/Domain/Object/Illidan";

export default class IllidanFactory {
    static create(): Promise<Illidan> {
        const objectLoader = new ObjectLoader('Illidan Legion'),
            promiseLoad = objectLoader.load('IllidanLegion');

        promiseLoad.catch(console.error);

        return promiseLoad;
    }
}