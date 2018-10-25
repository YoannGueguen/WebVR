import ApplicationRenderer from "@js/Core/Render/ApplicationRenderer";

export default class FramesRenderer {
    constructor(private applicationRenderer: ApplicationRenderer) {
        this.frame();
    }

    private frame(): void {
        requestAnimationFrame(() => {
            this.applicationRenderer.render();

            this.frame();
        });
    }
}