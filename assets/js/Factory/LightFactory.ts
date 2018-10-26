import {Color, Light, Mesh, MeshPhongMaterial, PointLight, SphereGeometry} from "three";
import {DEBUG_LIGHTS} from "@root/env.json";
import GUIService from "@js/Service/GUIService";
import {Inject} from "@root/node_modules/typescript-ioc";

export default class LightFactory {
    @Inject
    private _GUIService: GUIService;

    public createPointLight(color?: Color | string | number, intensity?: number, distance?: number, decay?: number): PointLight {
        const pointLight = new PointLight(color, intensity, distance, decay);

        this.showLight(pointLight);

        this._GUIService.GUI.add(pointLight.position, 'x', -20, 20, .01);
        this._GUIService.GUI.add(pointLight.position, 'y', -20, 20, .01);
        this._GUIService.GUI.add(pointLight.position, 'z', -20, 20, .01);

        return pointLight;
    }

    private showLight(light: Light): void {
        if (DEBUG_LIGHTS) {
            const boxGeometry = new SphereGeometry(.1);
            const material = new MeshPhongMaterial({
                color: 0xffffff
            });

            light.add(new Mesh(boxGeometry, material));
        }
    }
}