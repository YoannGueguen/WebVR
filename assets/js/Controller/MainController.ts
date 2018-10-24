import {AmbientLight, PerspectiveCamera, Scene, Vector3} from "three";
import {MTLLoader, OBJLoader} from "three-obj-mtl-loader";
import ApplicationRenderer from "@js/Core/Render/ApplicationRenderer";
import ObjectLoader from "@js/Core/Loader/ObjectLoader";

export default class MainController {
    private scene = new Scene();

    constructor() {
        const camera = new PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );

        camera.position.x = 20;
        camera.position.y = 20;
        camera.position.z = 0;
        camera.lookAt(new Vector3(0, 0, 0));
        this.scene.add(camera);

        const light = new AmbientLight(0xffffff, 1);
        this.scene.add(light);

        const objectLoader = new ObjectLoader('FlorenceBridge');
        objectLoader.load('PonteVecchio')
            .then(object => {
                this.scene.add(object);
            })
            .catch(console.error);

        new ApplicationRenderer(this.scene, camera);
    }
}