import '@sass/app.scss';
import Application from "@js/Core/Application/Application";
import {PerspectiveCamera, Scene} from "three";
import EnvironmentService from "@js/Service/EnvironmentService";
import Kernel from "@js/Core/Kernel/Kernel";

const application = new Application(
    new Scene(),
    new PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    )
);

// Run application's kernel
new Kernel(application);

if (EnvironmentService.isDevelopmentEnvironment()) {
    // Export application variable on development mode
    window['application'] = application;
}