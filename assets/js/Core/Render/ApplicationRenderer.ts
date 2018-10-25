import {PerspectiveCamera, RenderTarget, Scene, WebGLRenderer} from "three";
import FramesRenderer from "@js/Core/Render/FramesRenderer";
import {OrbitControls} from "three-orbitcontrols-ts";

export default class ApplicationRenderer {
    private _renderer = new WebGLRenderer();
    private readonly _scene: Scene;
    private readonly _camera: PerspectiveCamera;
    private readonly _renderTarget: RenderTarget;
    private readonly _forceClear: boolean;
    private readonly _orbitControls: OrbitControls;
    private framesRenderer: FramesRenderer;

    constructor(scene: Scene, camera: PerspectiveCamera, renderTarget?: RenderTarget, forceClear?: boolean) {
        this._scene = scene;
        this._camera = camera;
        this._renderTarget = renderTarget;
        this._forceClear = forceClear;

        this._renderer.shadowMap.enabled = true;
        this._renderer.setClearColor('rgb(120, 120, 120)');

        this.onResize();
        window.onresize = this.onResize.bind(this);

        this._orbitControls = new OrbitControls(camera, this._renderer.domElement);

        this.framesRenderer = new FramesRenderer(this);

        this.appendToHtml();
    }

    /**
     * On window resize, update renderer view
     */
    private onResize(): void {
        this._camera.aspect = window.innerWidth / window.innerHeight;
        this._camera.updateProjectionMatrix();
        this._renderer.setSize(window.innerWidth, window.innerHeight)
    }

    /**
     * Append application renderer to HTML
     */
    private appendToHtml(): void {
        document.getElementById('app').appendChild(this._renderer.domElement);
    }

    /**
     * Render a frame
     */
    public render(): void {
        this._orbitControls.update();

        this._renderer.render(
            this._scene,
            this._camera,
            this._renderTarget,
            this._forceClear,
        );
    }
}