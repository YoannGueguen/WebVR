import ApplicationRenderer from "@js/Core/Render/ApplicationRenderer";
import {Inject} from "typescript-ioc";
import AnimationService from "@js/Service/AnimationService";
import StatsService from "@js/Service/StatsService";

export default class FramesRenderer {
    @Inject
    private animationService: AnimationService;
    @Inject
    private statsService: StatsService;
    private applicationRenderer: ApplicationRenderer;

    constructor(applicationRenderer: ApplicationRenderer) {
        this.applicationRenderer = applicationRenderer;
        this.frame();
    }

    /**
     * Recursive frames renderer
     */
    private frame(): void {
        this.statsService.begin();
        requestAnimationFrame(() => {
            this.animationService.getFramesCallbackCollection().runCallbacks();
            this.applicationRenderer.render();

            this.statsService.end();
            this.frame();
        });
    }
}