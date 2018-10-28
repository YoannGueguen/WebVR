import {AmbientLight, BoxHelper, PerspectiveCamera, PointLight, PointLightHelper, Scene} from "three";
import {Inject} from "typescript-ioc";
import GUIService from "@js/Service/GUIService";
import AnimationService from "@js/Service/AnimationService";
import Guldan from "@js/Domain/Object/Guldan";
import Moon from "@js/Domain/Object/Moon";
import Illidan from "@js/Domain/Object/Illidan";
import Ragnaros from "@js/Domain/Object/Ragnaros";
import JapanIsland from "@js/Domain/Object/JapanIsland";

// noinspection JSUnusedGlobalSymbols
export default class MainController {
    @Inject
    private guiService: GUIService;
    @Inject
    private animationService: AnimationService;

    constructor(scene: Scene, camera: PerspectiveCamera) {
        camera.position.set(40, 20, 100);

        const pointLight = new PointLight();
        pointLight.castShadow = true;
        pointLight.position.set(20, 90, 90);
        this.guiService.addPositionsGUI(pointLight);
        scene.add(pointLight);
        scene.add(new PointLightHelper(pointLight, 2));
        scene.add(new AmbientLight(0xffffff, 1));

        Guldan.create().then(guldan => {
            guldan.scale.addScalar(8);
            guldan.position.x = -5;

            scene.add(guldan);
            scene.add(new BoxHelper(guldan));
        });

        Moon.create().then(moon => {
            moon.position.set(160, 40, -600);
            moon.scale.addScalar(50);

            scene.add(moon);

            this.animationService.onUpdate(() => {
                moon.rotation.y += 0.001;
            });
        });

        Illidan.create().then(illidan => {
            illidan.scale.addScalar(3);
            illidan.position.set(15, -3, 5);

            scene.add(illidan);
        });

        Ragnaros.create().then(ragnaros => {
            ragnaros.position.z = -40;

            scene.add(ragnaros);
        });

        JapanIsland.create().then(ileJap => {
            ileJap.scale.setScalar(10);
            ileJap.position.set(0, -90, -120);

            scene.add(ileJap);
        });
    }
}