import ObjectLoader from "@js/Core/Loader/ObjectLoader";
import Moon from "@js/Domain/Object/Moon";

export default class MoonFactory {
    static create(): Promise<Moon> {
        return new Promise((resolve, reject) => {
            const objectLoader = new ObjectLoader('moon'),
                promiseLoad = objectLoader.load('Moon 2K');

            promiseLoad
                .then(object => resolve(new Moon(object)))
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        });
    }
}