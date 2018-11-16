import {Inject, Singleton} from "typescript-ioc";
import {DragControls} from "three";
import AnimationService from "@js/Service/AnimationService";

@Singleton
export default class InteractionService {
    @Inject
    private animationService: AnimationService;

    public dragObject(objects, camera, renderer, controls){
        let dragControls = new DragControls(objects, camera, renderer.domElement);
        dragControls.addEventListener('dragstart', () => {
            controls.enabled = false;
        });
        dragControls.addEventListener('dragend', () => {
            controls.enabled = true;
        });

        this.animationService.onUpdate(() => {
            controls.update();
        });
    }
}
