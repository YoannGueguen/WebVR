import CustomObject3D from "@js/Domain/Object/CustomObject3D";

export default class Ragnaros extends CustomObject3D {
    public castShadow: boolean = true;

    static async create(): Promise<Ragnaros> {
        return new Ragnaros().create();
    }
}
