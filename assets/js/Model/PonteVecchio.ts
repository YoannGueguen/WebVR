import CustomObject3D from "./CustomObject3D";

export default class PonteVecchio extends CustomObject3D {
    public castShadow: boolean = true;

    static async create(): Promise<PonteVecchio> {
        return new PonteVecchio().create();
    }
}
