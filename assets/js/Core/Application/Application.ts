import {PerspectiveCamera, Scene} from "three";
import ApplicationRenderer from "@js/Core/Render/ApplicationRenderer";

export default class Application {
    private readonly _scene: Scene;
    private readonly _camera: PerspectiveCamera;

    constructor(scene: Scene, camera: PerspectiveCamera) {
        this._scene = scene;
        this._camera = camera;

        new ApplicationRenderer(this.scene, this.camera);
    }

    get scene(): Scene {
        return this._scene;
    }

    get camera(): PerspectiveCamera {
        return this._camera;
    }
}