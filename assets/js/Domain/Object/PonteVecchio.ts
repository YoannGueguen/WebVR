import CustomObject3D from "@js/Domain/Object/CustomObject3D";

export default class PonteVecchio extends CustomObject3D {
    public castShadow: boolean = true;

    static async create() {
        return new PonteVecchio().create();
    }
}