import {Camera, Scene} from "three";
import ApplicationRenderer from "@js/Core/Render/ApplicationRenderer";

export default class Application {
    private readonly _scene: Scene;
    private readonly _camera: Camera;
    private readonly _applicationRenderer: ApplicationRenderer;

    constructor(scene: Scene, camera: Camera) {
        this._scene = scene;
        this._camera = camera;
        this._applicationRenderer = new ApplicationRenderer(this.scene, this.camera);
    }

    /**
     * Get the principal application's scene
     */
    get scene(): Scene {
        return this._scene;
    }

    /**
     * Get the principal application's camera
     */
    get camera(): Camera {
        return this._camera;
    }
}
