import ObjectLoader from "@js/Core/Loader/ObjectLoader";
import Moon from "@js/Domain/Object/Moon";

export default class MoonFactory {
    static create(): Promise<Moon> {
        const objectLoader = new ObjectLoader('moon'),
            promiseLoad = objectLoader.load('Moon 2K');

        promiseLoad.catch(console.error);

        return promiseLoad;
    }
}