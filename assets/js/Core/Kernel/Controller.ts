import {Camera, Scene} from "three";

export default interface Controller {
    run(scene: Scene, camera: Camera): void;
}
