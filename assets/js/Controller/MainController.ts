import {AmbientLight, Camera, PointLight, PointLightHelper, Scene} from "three";
import {Inject} from "typescript-ioc";
import GUIService from "@js/Service/GUIService";
import AnimationService from "@js/Service/AnimationService";
import Controller from "@js/Core/Kernel/Controller";

// noinspection JSUnusedGlobalSymbols
export default class MainController implements Controller {
    @Inject
    private guiService: GUIService;
    @Inject
    private animationService: AnimationService;

    public async run(scene: Scene, camera: Camera) {
        camera.position.set(40, 20, 100);

        const pointLight = new PointLight();
        pointLight.castShadow = true;
        pointLight.position.set(20, 90, 90);
        this.guiService.addPositionsGUI(pointLight);
        scene.add(pointLight);
        scene.add(new PointLightHelper(pointLight, 2));
        scene.add(new AmbientLight(0xffffff, 1));
    }
}
