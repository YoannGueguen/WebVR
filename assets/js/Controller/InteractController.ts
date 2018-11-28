import {Camera, Mesh, MeshLambertMaterial, Renderer, Scene, SphereGeometry} from "three";
import {Inject} from "typescript-ioc";
import GUIService from "@js/Service/GUIService";
import TrackballControls from "three-trackballcontrols";
import InteractionService from "@js/Service/InteractionService";
import Controller from "@js/Core/Kernel/Controller"
import AnimationService from "@js/Service/AnimationService";

// noinspection JSUnusedGlobalSymbols
export default class InteractController implements Controller {
    @Inject
    private guiService: GUIService;
    @Inject
    private interactionService: InteractionService;
    @Inject
    private animationService: AnimationService;

    public async run(scene: Scene, camera: Camera, renderer: Renderer) {
        let controls;
        let objects = [];

        const geometry = new SphereGeometry(40, 40, 40);
        for (let i = 0; i < 100; i++) {
            const object = new Mesh(geometry, new MeshLambertMaterial({color: Math.random() * 0xffffff}));

            object.position.x = Math.random() * 1000 - 500;
            object.position.y = Math.random() * 600 - 300;
            object.position.z = Math.random() * 800 - 400;

            object.castShadow = true;
            object.receiveShadow = true;

            scene.add(object);
            objects.push(object);
        }

        controls = new TrackballControls(camera);
        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;
        controls.noZoom = false;
        controls.noPan = false;
        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.3;

        this.interactionService.dragObject(objects, camera, renderer, controls);
    }
}
