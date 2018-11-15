import {
    AmbientLight,
    BoxBufferGeometry,
    Camera,
    Color,
    Mesh,
    MeshLambertMaterial,
    Renderer,
    Scene,
    SpotLight
} from "three";
import {Inject} from "typescript-ioc";
import GUIService from "@js/Service/GUIService";
import DragControls from "three-dragcontrols";
import TrackballControls from "three-trackballcontrols";
import InteractionService from "@js/Service/InteractionService";
import Controller from "@js/Core/Kernel/Controller"

// noinspection JSUnusedGlobalSymbols
export default class InteractController implements Controller {
    @Inject
    private guiService: GUIService;
    @Inject
    private InteractionService: InteractionService;

    public async run(scene: Scene, camera: Camera, renderer: Renderer) {
        let controls;
        const objects = [];
            controls = new TrackballControls( camera );
            controls.rotateSpeed = 1.0;
            controls.zoomSpeed = 1.2;
            controls.panSpeed = 0.8;
            controls.noZoom = false;
            controls.noPan = false;
            controls.staticMoving = true;
            controls.dynamicDampingFactor = 0.3;

            let dragControls = new DragControls( objects, camera, renderer.domElement );
            dragControls.addEventListener( 'dragstart', function () {
                controls.enabled = false;
            } );
            dragControls.addEventListener( 'dragend', function () {
                controls.enabled = true;
            } );
            //
        }
}
