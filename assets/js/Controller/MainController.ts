import {AmbientLight, PerspectiveCamera, PointLight, PointLightHelper, Scene} from "three";
import {Inject} from "typescript-ioc";
import GUIService from "@js/Service/GUIService";
import AnimationService from "@js/Service/AnimationService";
import Guldan from "@js/Domain/Object/Guldan";

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
            debugger
        });

        // MoonFactory.create().then(moon => {
        //     const moonObject = moon.getObject3D();
        //     moonObject.position.set(160, 40, -600);
        //     moonObject.scale.addScalar(50);
        //     scene.add(moonObject);
        //     scene.add(new BoxHelper(moonObject));
        //
        //     this.animationService.addFramesCallback(() => {
        //         moonObject.rotation.y += 0.001;
        //     });
        // });
        //
        // IllidanFactory.create().then(illidan => {
        //     const illidanObject = illidan.getObject3D();
        //     illidanObject.scale.addScalar(3);
        //     illidanObject.position.set(15, -3, 5);
        //     scene.add(illidanObject);
        // });
        //
        // GuldanFactory.create().then(guldan => {
        //     const guldanObject = guldan.getObject3D();
        //     guldanObject.scale.addScalar(8);
        //     guldanObject.position.x = -5;
        //
        //     scene.add(guldanObject);
        // });
        //
        // RagnarosFactory.create().then(ragnaros => {
        //     const ragnarosObject = ragnaros.getObject3D();
        //     ragnarosObject.position.z = -40;
        //
        //     scene.add(ragnarosObject);
        // });
        //
        // IleJapFactory.create().then(ileJapLandcape => {
        //     const ileJapObject = ileJapLandcape.getObject3D();
        //
        //     ileJapObject.scale.setScalar(10);
        //     ileJapObject.position.set(0, -90, -120);
        //
        //     scene.add(ileJapObject);
        // });
    }
}