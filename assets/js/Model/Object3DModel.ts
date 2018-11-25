import {Group, Object3D} from "three";
import ObjectLoader from "@js/Core/Loader/ObjectLoader";
import Collection from "@js/Collection/Collection";

export default abstract class Object3DModel extends Group {
    private static readonly defaultObject = new Object3D();

    protected async create(): Promise<this> {
        const source = await new ObjectLoader().load(this.constructor.name);

        if (Object3DModel.defaultObject.name === this.name) {
            this.name = source.name;
        }

        if (Object3DModel.defaultObject.up === this.up) {
            this.up.copy(source.up);
        }

        if (Object3DModel.defaultObject.position === this.position) {
            this.position.copy(source.position);
        }

        if (Object3DModel.defaultObject.quaternion === this.quaternion) {
            this.quaternion.copy(source.quaternion);
        }

        if (Object3DModel.defaultObject.scale === this.scale) {
            this.scale.copy(source.scale);
        }

        if (Object3DModel.defaultObject.matrix === this.matrix) {
            this.matrix.copy(source.matrix);
        }

        if (Object3DModel.defaultObject.matrixWorld === this.matrixWorld) {
            this.matrixWorld.copy(source.matrixWorld);
        }

        if (Object3DModel.defaultObject.matrixAutoUpdate === this.matrixAutoUpdate) {
            this.matrixAutoUpdate = source.matrixAutoUpdate;
        }

        if (Object3DModel.defaultObject.matrixWorldNeedsUpdate === this.matrixWorldNeedsUpdate) {
            this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;
        }

        if (Object3DModel.defaultObject.layers.mask === this.layers.mask) {
            this.layers.mask = source.layers.mask;
        }

        if (Object3DModel.defaultObject.visible === this.visible) {
            this.visible = source.visible;
        }

        if (Object3DModel.defaultObject.castShadow === this.castShadow) {
            this.castShadow = source.castShadow;
        }

        if (Object3DModel.defaultObject.receiveShadow === this.receiveShadow) {
            this.receiveShadow = source.receiveShadow;
        }

        if (Object3DModel.defaultObject.frustumCulled === this.frustumCulled) {
            this.frustumCulled = source.frustumCulled;
        }

        if (Object3DModel.defaultObject.renderOrder === this.renderOrder) {
            this.renderOrder = source.renderOrder;
        }

        if (Object3DModel.defaultObject.userData === this.userData) {
            this.userData = JSON.parse(JSON.stringify(source.userData));
        }

        if (new Collection(Object3DModel.defaultObject.children).areEquals(this.children)) {
            source.children.forEach(children => this.add(children.clone()));
        }

        return this;
    }
}
