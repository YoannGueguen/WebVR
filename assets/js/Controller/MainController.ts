import {AmbientLight, BoxHelper, Camera, PointLight, PointLightHelper, Scene} from "three";
import {Inject} from "typescript-ioc";
import GUIService from "@js/Service/GUIService";
import AnimationService from "@js/Service/AnimationService";
import Guldan from "@js/Model/Guldan";
import Moon from "@js/Model/Moon";
import Illidan from "@js/Model/Illidan";
import Ragnaros from "@js/Model/Ragnaros";
import JapanIsland from "@js/Model/JapanIsland";
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

        const guldan = await Guldan.create();
        guldan.scale.addScalar(8);
        guldan.position.x = -5;

        scene.add(guldan);
        scene.add(new BoxHelper(guldan));

        const moon = await Moon.create();
        moon.position.set(160, 40, -600);
        moon.scale.addScalar(50);

        scene.add(moon);

        this.animationService.onUpdate(() => {
            moon.rotation.y += 0.001;
        });

        const illidan = await Illidan.create();
        illidan.scale.addScalar(3);
        illidan.position.set(15, -3, 5);

        scene.add(illidan);

        const ragnaros = await Ragnaros.create();
        ragnaros.position.z = -40;

        scene.add(ragnaros);

        const japanIsland = await JapanIsland.create();
        japanIsland.scale.setScalar(10);
        japanIsland.position.set(0, -90, -120);

        scene.add(japanIsland);
    }
}
