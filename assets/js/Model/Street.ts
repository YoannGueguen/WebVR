import CustomObject3D from "./CustomObject3D";

export default class Street extends CustomObject3D {
    public castShadow: boolean = true;

    static async create(): Promise<Street> {
        return new Street().create();
    }
}
