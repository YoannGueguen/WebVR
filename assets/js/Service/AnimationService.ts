import {Singleton} from "typescript-ioc";
import FramesCallbackCollection from "@js/Collection/FramesCallbackCollection";

@Singleton
export default class AnimationService {
    private framesCallbackCollection: FramesCallbackCollection = new FramesCallbackCollection();

    /**
     * Register a callback called for each frame
     *
     * @param callback
     */
    public onUpdate(callback: Function): void {
        this.framesCallbackCollection.push(callback);
    }

    /**
     * Run all registered callbacks
     */
    public runCallbacks(): void {
        this.framesCallbackCollection.runCallbacks();
    }
}
