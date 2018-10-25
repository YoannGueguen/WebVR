import {AmbientLight, PerspectiveCamera, Scene, Vector3} from "three";
import {MTLLoader, OBJLoader} from "three-obj-mtl-loader";
import PonteVecchioFactory from "@js/Factory/PonteVecchioFactory";

// noinspection JSUnusedGlobalSymbols
export default class MainController {
    constructor(scene: Scene, camera: PerspectiveCamera) {
        camera.position.x = 20;
        camera.position.y = 10;
        camera.position.z = 20;
        camera.lookAt(new Vector3(0, 0, 0));
        scene.add(camera);

        const light = new AmbientLight(0xffffff, 1);
        scene.add(light);

        PonteVecchioFactory.create().then(object => scene.add(object));
    }
}