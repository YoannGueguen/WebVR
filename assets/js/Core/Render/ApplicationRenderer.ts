import {Camera, PerspectiveCamera, RenderTarget, Scene, WebGLRenderer} from "three";
import FramesRenderer from "@js/Core/Render/FramesRenderer";
import {OrbitControls} from "three-orbitcontrols-ts";
import CameraType from "@js/Core/Camera/CameraType";

export default class ApplicationRenderer {
    private readonly renderer = new WebGLRenderer();
    private readonly scene: Scene;
    private readonly camera: Camera;
    private readonly renderTarget: RenderTarget;
    private readonly forceClear: boolean;
    private readonly orbitControls: OrbitControls;
    private readonly cameraType: CameraType;
    private readonly framesRenderer: FramesRenderer;
    private readonly DOMElementId: string = 'app';

    constructor(scene: Scene, camera: Camera, renderTarget?: RenderTarget, forceClear?: boolean) {
        this.scene = scene;
        this.camera = camera;
        this.renderTarget = renderTarget;
        this.forceClear = forceClear;
        this.cameraType = new CameraType(this.camera);

        // Add camera to scene
        this.scene.add(this.camera);

        this.renderer.shadowMap.enabled = true;
        this.renderer.setClearColor('rgb(120, 120, 120)');

        this.onResize();
        window.onresize = this.onResize.bind(this);

        this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement);
        this.orbitControls.enableZoom = true;
        this.orbitControls.minDistance = 1;
        this.orbitControls.rotateSpeed = .5;
        // @ts-ignore
        this.orbitControls.damping = 0.2;

        this.framesRenderer = new FramesRenderer(this);

        this.appendToHtml();
    }

    /**
     * On window resize, update renderer view
     */
    private onResize(): void {
        if (this.cameraType.isPerspectiveCamera()) {
            const camera = this.camera as PerspectiveCamera;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        }

        this.renderer.setSize(window.innerWidth, window.innerHeight)
    }

    /**
     * Append application renderer to HTML
     */
    private appendToHtml(): void {
        document.getElementById(this.DOMElementId).appendChild(this.renderer.domElement);
    }

    /**
     * Render a frame
     */
    public render(): void {
        this.orbitControls.update();

        this.renderer.render(
            this.scene,
            this.camera,
            this.renderTarget,
            this.forceClear,
        );
    }
}
