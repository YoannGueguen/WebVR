import CustomObject3D from "@js/Domain/Object/CustomObject3D";
import ObjectLoader from "@js/Core/Loader/ObjectLoader";

export default class Guldan extends CustomObject3D {
    public castShadow: boolean = true;

    static async create() {
        return new Guldan().create(await new ObjectLoader().load('Guldan'));
    }
}