import {
    Camera, Mesh, MeshLambertMaterial,
    Renderer,
    Scene, SphereGeometry
} from "three";
import {Inject} from "typescript-ioc";
import GUIService from "@js/Service/GUIService";
import DragControls from "three-dragcontrols";
import TrackballControls from "three-trackballcontrols";
import InteractionService from "@js/Service/InteractionService";
import Controller from "@js/Core/Kernel/Controller"
import Illidan from "@js/Model/Illidan";
import Ragnaros from "@js/Model/Ragnaros";
import Guldan from "@js/Model/Guldan";
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

        let guldan = await Guldan.create();
        guldan.scale.addScalar(8);
        guldan.position.x = -5;
        guldan.castShadow =true;
        guldan.receiveShadow = true;
        scene.add(guldan);

        objects.push( guldan );

        /*
                let illidan = await Illidan.create();
                illidan.scale.addScalar(3);
                illidan.position.set(15, -3, 5);
                scene.add(illidan);

                let ragnaros = await Ragnaros.create();
                ragnaros.position.z = -40;
                scene.add(ragnaros);

                objects.push(guldan);
                objects.push(illidan);
                objects.push(ragnaros);*/

        const geometry = new SphereGeometry( 40, 40, 40 );

        for (let i = 0; i < 100; i++) {
            const object = new Mesh( geometry, new MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

            object.position.x = Math.random() * 1000 - 500;
            object.position.y = Math.random() * 600 - 300;
            object.position.z = Math.random() * 800 - 400;

            object.castShadow = true;
            object.receiveShadow = true;

            scene.add( object );

            objects.push( object );
        }

        controls = new TrackballControls(camera);
        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;
        controls.noZoom = false;
        controls.noPan = false;
        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.3;

        let dragControls = new DragControls(objects, camera, renderer.domElement);
        dragControls.addEventListener('dragstart', () => {
            controls.enabled = false;
        });
        dragControls.addEventListener('dragend', () => {
            controls.enabled = true;
        });

        this.animationService.onUpdate(() => {
            controls.update();
        });
    }

}
