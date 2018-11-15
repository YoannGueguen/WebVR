export default class FramesCallbackCollection extends Array {
    /**
     * Run all registered callbacks
     */
    public runCallbacks(): void {
        this.forEach((callback: Function) => callback());
    }
}