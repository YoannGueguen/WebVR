import {Camera, CubeCamera, OrthographicCamera, PerspectiveCamera, StereoCamera} from "three";

export default class CameraType {
    private readonly camera: Camera;
    private readonly perspectiveCamera: PerspectiveCamera = new PerspectiveCamera();
    private readonly stereoCamera: StereoCamera = new StereoCamera();
    private readonly orthographicCamera: OrthographicCamera = new OrthographicCamera(0, 0, 0, 0);
    private readonly cubeCamera: CubeCamera = new CubeCamera();

    constructor(camera: Camera) {
        this.camera = camera;
    }

    public isPerspectiveCamera(): boolean {
        return this.camera.type === this.perspectiveCamera.type;
    }

    public isStereoCamera(): boolean {
        return this.camera.type === this.stereoCamera.type;
    }

    public isOrthographicCamera(): boolean {
        return this.camera.type === this.orthographicCamera.type;
    }

    public isCubeCamera(): boolean {
        return this.camera.type === this.orthographicCamera.type;
    }
}
