import {AmbientLight, PerspectiveCamera, Scene, Vector3} from "three";
import PonteVecchioFactory from "@js/Factory/PonteVecchioFactory";

// noinspection JSUnusedGlobalSymbols
export default class MainController {
    // noinspection JSUnusedGlobalSymbols
    constructor(scene: Scene, camera: PerspectiveCamera) {
        camera.position.x = 20;
        camera.position.y = 10;
        camera.position.z = 20;
        camera.lookAt(new Vector3(0, 0, 0));

        scene.add(new AmbientLight(0xffffff, 1));

        PonteVecchioFactory.create().then(object => scene.add(object));
    }
}