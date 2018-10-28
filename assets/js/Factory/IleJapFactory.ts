import ObjectLoader from "@js/Core/Loader/ObjectLoader";
import IleJap from "@js/Domain/Object/IleJap";

export default class IleJapFactory {
    static create(): Promise<IleJap> {
        return new Promise((resolve, reject) => {
            const objectLoader = new ObjectLoader('Ile_Jap'),
                promiseLoad = objectLoader.load('Ile_Jap');

            promiseLoad
                .then(object => resolve(new IleJap(object)))
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        });
    }
}