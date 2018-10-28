import {AmbientLight, BoxHelper, PerspectiveCamera, PointLight, PointLightHelper, Scene, Vector3} from "three";
import MoonFactory from "@js/Factory/MoonFactory";
import {Inject} from "typescript-ioc";
import GUIService from "@js/Service/GUIService";
import AnimationService from "@js/Service/AnimationService";
import IllidanFactory from "@js/Factory/IllidanFactory";
import GuldanFactory from "@js/Factory/GuldanFactory";

// noinspection JSUnusedGlobalSymbols
export default class MainController {
    @Inject
    private guiService: GUIService;
    @Inject
    private animationService: AnimationService;

    // noinspection JSUnusedGlobalSymbols
    constructor(scene: Scene, camera: PerspectiveCamera) {
        camera.position.set(0, 20, 100);
        camera.lookAt(new Vector3(50, 40, 50));

        const pointLight = new PointLight();
        pointLight.castShadow = true;
        pointLight.position.set(20, 90, 90);
        this.guiService.addPositionsGUI(pointLight);
        scene.add(pointLight);
        scene.add(new PointLightHelper(pointLight, 2));

        scene.add(new AmbientLight(0xffffff, 1));

        MoonFactory.create().then(moon => {
            const moonObject = moon.getObject3D();
            moonObject.position.set(20, 20, -200);
            moonObject.scale.addScalar(30);
            scene.add(moonObject);
            scene.add(new BoxHelper(moonObject));

            this.animationService.addFramesCallback(() => {
                moonObject.rotation.y += 0.001;
            });
        });

        IllidanFactory.create().then(illidan => {
            const illidanObject = illidan.getObject3D();
            illidanObject.scale.addScalar(3);
            illidanObject.position.x = 10;
            scene.add(illidanObject);
        });

        GuldanFactory.create().then(guldan => {
            const guldanObject = guldan.getObject3D();
            guldanObject.scale.addScalar(8);
            guldanObject.position.x = -10;

            scene.add(guldanObject);
        });
    }
}