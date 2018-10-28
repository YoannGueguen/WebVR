import CustomObject3D from "@js/Domain/Object/CustomObject3D";

export default class Moon extends CustomObject3D {
    public castShadow: boolean = true;

    static async create() {
        return new Moon().create();
    }
}