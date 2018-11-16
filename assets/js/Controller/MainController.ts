import {AmbientLight, Camera, GridHelper, PointLight, PointLightHelper, Scene} from "three";
import {Inject} from "typescript-ioc";
import GUIService from "@js/Service/GUIService";
import AnimationService from "@js/Service/AnimationService";
import Controller from "@js/Core/Kernel/Controller";
import MesureService from "@js/Service/MesureService";

// noinspection JSUnusedGlobalSymbols
export default class MainController implements Controller {
    @Inject
    private guiService: GUIService;
    @Inject
    private animationService: AnimationService;
    @Inject
    private mesureService: MesureService;

    public async run(scene: Scene, camera: Camera) {
        camera.position.set(
            0,
            this.mesureService.meterToPixel(50),
            this.mesureService.meterToPixel(20)
        );
        camera.lookAt(0, 0, 0);

        scene.add(new GridHelper(this.mesureService.meterToPixel(100), 10));

        const pointLight = new PointLight();
        pointLight.castShadow = true;
        pointLight.position.set(20, 90, 90);
        scene.add(pointLight);
        scene.add(new PointLightHelper(pointLight, 2));
        scene.add(new AmbientLight(0xffffff, 1));
    }
}
