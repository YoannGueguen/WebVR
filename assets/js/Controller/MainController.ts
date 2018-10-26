import {AmbientLight, PerspectiveCamera, Scene, Vector3} from "three";
import StreetFactory from "@js/Factory/StreetFactory";
import MoonFactory from "@js/Factory/MoonFactory";
import LightFactory from "@js/Factory/LightFactory";
import {Inject} from "@root/node_modules/typescript-ioc";
import GUIService from "@js/Service/GUIService";
import AnimationService from "@js/Service/AnimationService";

// noinspection JSUnusedGlobalSymbols
export default class MainController {
    @Inject
    private lightFactory: LightFactory;
    @Inject
    private guiService: GUIService;
    @Inject
    private animationService: AnimationService;

    // noinspection JSUnusedGlobalSymbols
    constructor(scene: Scene, camera: PerspectiveCamera) {
        camera.position.x = 0;
        camera.position.y = 20;
        camera.position.z = 100;
        camera.lookAt(new Vector3(50, 40, 50));

        this.guiService.GUI.add(camera.position, 'x', 0, 2000, 5);
        this.guiService.GUI.add(camera.position, 'y', 0, 2000, 5);
        this.guiService.GUI.add(camera.position, 'z', 0, 2000, 5);

        const pointLight = this.lightFactory.createPointLight();
        pointLight.castShadow = true;
        pointLight.position.y = 20;
        scene.add(pointLight);

        scene.add(new AmbientLight(0xffffff, 1));

        MoonFactory.create().then(moon => {
            scene.add(moon);

            this.animationService.addFramesCallback(() => {
                moon.rotation.y += 0.001;
                moon.position.set(20, 20, -200);
                moon.scale.set(20, 20, 20);
            });
        });

        StreetFactory.create().then(street => {
            street.castShadow = true;
            street.receiveShadow = true;
            scene.add(street)
        });
    }
}