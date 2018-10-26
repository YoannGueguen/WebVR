import {PerspectiveCamera, Scene} from "three";
import ApplicationRenderer from "@js/Core/Render/ApplicationRenderer";

export default class Application {
    private readonly _scene: Scene;
    private readonly _camera: PerspectiveCamera;
    private readonly _applicationRenderer: ApplicationRenderer;

    constructor(scene: Scene, camera: PerspectiveCamera) {
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
    get camera(): PerspectiveCamera {
        return this._camera;
    }

    get applicationRenderer(): ApplicationRenderer {
        return this._applicationRenderer;
    }
}