import Collection from "@js/Collection/Collection";

export default class FramesCallbackCollection extends Collection<Function> {
    /**
     * Run all registered callbacks
     */
    public runCallbacks(): void {
        this.forEach((callback: Function) => callback());
    }
}
