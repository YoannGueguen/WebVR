import ApplicationRenderer from "@js/Core/Render/ApplicationRenderer";

export default class FramesRenderer {
    constructor(private applicationRenderer: ApplicationRenderer) {
        this.frame();
    }

    private frame(): void {
        requestAnimationFrame(() => {
            this.applicationRenderer.orbitControls.update();

            this.applicationRenderer.renderer.render(
                this.applicationRenderer.scene,
                this.applicationRenderer.camera,
                this.applicationRenderer.renderTarget,
                this.applicationRenderer.forceClear,
            );

            this.frame();
        });
    }
}