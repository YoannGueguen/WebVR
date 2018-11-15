import {Singleton} from "typescript-ioc";
import Stats from "stats-js";

@Singleton
export default class StatsService {
    private stats = new Stats();

    constructor() {
        // Align top-left
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.left = 0;
        this.stats.domElement.style.top = 0;

        document.body.appendChild(this.stats.domElement);
    }

    public begin(): void {
        this.stats.begin();
    }

    public end(): void {
        this.stats.end();
    }
}
