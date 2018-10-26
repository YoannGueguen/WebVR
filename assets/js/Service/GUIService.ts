import {GUI} from "dat.gui";
import {Inject, Singleton} from "typescript-ioc";

@Singleton
export default class GUIService {
    @Inject
    private _GUI: GUI = new GUI();

    get GUI(): GUI {
        return this._GUI;
    }

    public createNewGUI(): GUI {
        return new GUI();
    }
}
