import {Singleton} from "typescript-ioc";

@Singleton
export default class MesureService {
    private scaleCentimeterToPixel: number = 1; // 37.795275591
    private scalePixelToCentimeter: number = 1; // 0.026458333

    public centimeterToPixel(value: number): number {
        return value * this.scaleCentimeterToPixel;
    }

    public meterToPixel(value: number): number {
        return this.centimeterToPixel(value) * 100;
    }

    public pixelToCentimeter(value: number): number {
        return value * this.scalePixelToCentimeter;
    }
}
