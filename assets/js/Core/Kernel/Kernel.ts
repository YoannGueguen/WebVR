import Application from "@js/Core/Application/Application";

export default class Kernel {
    private services: any[] = [];

    constructor(private application: Application) {
        this.loadControllers();
    }

    /**
     * Instancy all application's controllers
     */
    private loadControllers(): void {
        const requireContext = require.context(`@js/Controller`, true, /^(.*\.(ts$))[^.]*$/im);

        requireContext.keys().forEach(controllerPath => {
            const controller = requireContext(controllerPath).default;

            new controller(
                this.application.scene,
                this.application.camera
            );
        });
    }

    private loadServices(): void {
        const requireContext = require.context(`@js/Service`, true, /^(.*\.(ts$))[^.]*$/im);

        requireContext.keys().forEach(controllerPath => {
            const controller = requireContext(controllerPath).default;

            new controller(
                this.application.scene,
                this.application.camera
            );
        });
    }
}