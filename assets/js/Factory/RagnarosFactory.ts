import ObjectLoader from "@js/Core/Loader/ObjectLoader";
import Ragnaros from "@js/Domain/Object/Ragnaros";

export default class RagnarosFactory {
    static create(): Promise<Ragnaros> {
        const objectLoader = new ObjectLoader('Ragnaros'),
            promiseLoad = objectLoader.load('Ragnaros');

        promiseLoad.catch(console.error);

        return promiseLoad;
    }
}