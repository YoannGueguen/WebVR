import {Loader} from "three";
import TGALoader from "@js/Core/Loader/TGALoader";
import {Singleton} from "typescript-ioc";

@Singleton
export default class ObjectFileLoader {
    constructor() {
        // Copy textures files in public path
        require.context(`@assets/models`, true, /^(.*\.(jpg|dds|png|tga|bmp$))[^.]*$/im);

        // Add TGA Loader
        Loader.Handlers.add(/\.tga$/i, new TGALoader());
    }
}
