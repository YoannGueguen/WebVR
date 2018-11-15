import CustomObject3D from "./CustomObject3D";

export default class Guldan extends CustomObject3D {
    public castShadow: boolean = true;

    static async create(): Promise<Guldan> {
        return new Guldan().create();
    }
}
