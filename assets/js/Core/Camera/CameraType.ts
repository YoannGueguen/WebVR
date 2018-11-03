import {Camera, PerspectiveCamera} from "three";

export default class CameraType {
    private readonly camera: Camera;
    private readonly perspectiveCamera: PerspectiveCamera = new PerspectiveCamera();

    constructor(camera: Camera) {
        this.camera = camera;
    }

    public isPerspectiveCamera(): boolean {
        return this.camera.type === this.perspectiveCamera.type;
    }
}
