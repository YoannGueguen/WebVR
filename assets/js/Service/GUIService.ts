import {GUI} from "dat.gui";
import {Inject, Singleton} from "typescript-ioc";
import {Object3D} from "three";

@Singleton
export default class GUIService {
    @Inject
    private _GUI: GUI = new GUI();

    get GUI(): GUI {
        return this._GUI;
    }

    public addPanelControl(): GUI {
        return new GUI();
    }

    public addPositionsGUI(object: Object3D): void {
        this.GUI.name = object.name;
        this.GUI.add(object.position, 'x');
        this.GUI.add(object.position, 'y');
        this.GUI.add(object.position, 'z');
    }
}
