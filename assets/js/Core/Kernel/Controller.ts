import {Camera, Renderer, Scene} from "three";

export default interface Controller {
    run(scene: Scene, camera: Camera, renderer: Renderer): void;
}
