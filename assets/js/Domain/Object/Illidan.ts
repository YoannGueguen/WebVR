import CustomObject3D from "@js/Domain/Object/CustomObject3D";

export default class Illidan extends CustomObject3D {
    public castShadow: boolean = true;

    static async create(): Promise<Illidan> {
        return new Illidan().create();
    }
}
