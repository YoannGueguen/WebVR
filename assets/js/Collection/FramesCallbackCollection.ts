export default class FramesCallbackCollection extends Array {
    public runCallbacks(): void {
        this.forEach((callback: Function) => callback());
    }
}