import ApplicationRenderer from "@js/Core/Render/ApplicationRenderer";
import {Inject} from "@root/node_modules/typescript-ioc";
import AnimationService from "@js/Service/AnimationService";

export default class FramesRenderer {
    @Inject
    private animationService: AnimationService;
    private applicationRenderer: ApplicationRenderer;

    constructor(applicationRenderer: ApplicationRenderer) {
        this.applicationRenderer = applicationRenderer;
        this.frame();
    }

    /**
     * Recursive frames renderer
     */
    private frame(): void {
        requestAnimationFrame(() => {
            this.animationService.getFramesCallbackCollection().runCallbacks();
            this.applicationRenderer.render();

            this.frame();
        });
    }
}