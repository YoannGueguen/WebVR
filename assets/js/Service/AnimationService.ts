import {Singleton} from "typescript-ioc";
import FramesCallbackCollection from "@js/Collection/FramesCallbackCollection";

@Singleton
export default class AnimationService {
    private framesCallbackCollection: FramesCallbackCollection = new FramesCallbackCollection();

    public getFramesCallbackCollection(): FramesCallbackCollection {
        return this.framesCallbackCollection;
    }

    public addFramesCallback(callback: Function): void {
        this.framesCallbackCollection.push(callback);
    }
}
