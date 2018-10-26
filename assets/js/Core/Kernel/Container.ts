import Application from "@js/Core/Application/Application";

export default class Kernel {
    private services: any[] = [];

    constructor(private application: Application) {
    }

    private loadServices(): void {
        const requireContext = require.context(`@js/Service`, true, /^(.*\.(ts$))[^.]*$/im);

        requireContext.keys().forEach(servicePath => {
            const service = requireContext(servicePath).default;

            new service(
                this.application.scene,
                this.application.camera
            );
        });
    }
}