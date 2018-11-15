import CustomObject3D from "./CustomObject3D";

export default class JapanIsland extends CustomObject3D {
    public castShadow: boolean = true;

    static async create(): Promise<JapanIsland> {
        return new JapanIsland().create();
    }
}
