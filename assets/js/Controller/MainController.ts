import {AmbientLight, BoxGeometry, Camera,GridHelper,
    Mesh,
    MeshPhongMaterial, PointLight, PointLightHelper,Renderer, Scene} from "three";
import {Inject} from "typescript-ioc";
import GUIService from "@js/Service/GUIService";
import AnimationService from "@js/Service/AnimationService";
import Moon from "@js/Model/Moon";
import JapanIsland from "@js/Model/JapanIsland";
import Controller from "@js/Core/Kernel/Controller";
import MesureService from "@js/Service/MesureService";
import CollisionService from "@js/Service/CollisionService";
import Character from "@js/Model/Character";

// noinspection JSUnusedGlobalSymbols
export default class MainController implements Controller {
    @Inject
    private guiService: GUIService;
    @Inject
    private animationService: AnimationService;
    @Inject
    private mesureService: MesureService;
    @Inject
    private collisionService: CollisionService;

    public async run(scene: Scene, camera: Camera, renderer: Renderer) {
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

        const geometry = new BoxGeometry(150, 150, 150);
        const material = new MeshPhongMaterial();
        const mesh = new Mesh(geometry, material);
        mesh.position.set(0, 0, 100);
        scene.add(mesh);
        this.collisionService.addObstacle(mesh);

        const character = new Character();
        character.mesh.position.set(0, 0, -400);
        scene.add(character.mesh);

        this.guiService.addPositionsGUI(character.mesh);

        // Update collision on each frames
        this.animationService.onUpdate(() => {
            this.collisionService.update(character);
        });

        const moon = await Moon.create();
        moon.position.set(160, 40, -600);
        moon.scale.addScalar(50);

        scene.add(moon);

        this.animationService.onUpdate(() => {
            moon.rotation.y += 0.001;
        });

        const japanIsland = await JapanIsland.create();
        japanIsland.scale.setScalar(10);
        japanIsland.position.set(0, -90, -120);

        scene.add(japanIsland);
    }
}
