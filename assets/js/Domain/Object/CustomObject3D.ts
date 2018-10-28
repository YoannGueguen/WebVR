import {Group, Object3D} from "three";
import {Inject} from "typescript-ioc";
import CollectionService from "@js/Service/CollectionService";
import ObjectLoader from "@js/Core/Loader/ObjectLoader";

export default abstract class CustomObject3D extends Group {
    private static readonly defaultObject = new Object3D();
    @Inject
    private collectionService: CollectionService;

    protected async create(): Promise<this> {
        const source = await new ObjectLoader().load(this.constructor.name);

        if (CustomObject3D.defaultObject.name === this.name) {
            this.name = source.name;
        }

        if (CustomObject3D.defaultObject.up === this.up) {
            this.up.copy(source.up);
        }

        if (CustomObject3D.defaultObject.position === this.position) {
            this.position.copy(source.position);
        }

        if (CustomObject3D.defaultObject.quaternion === this.quaternion) {
            this.quaternion.copy(source.quaternion);
        }

        if (CustomObject3D.defaultObject.scale === this.scale) {
            this.scale.copy(source.scale);
        }

        if (CustomObject3D.defaultObject.matrix === this.matrix) {
            this.matrix.copy(source.matrix);
        }

        if (CustomObject3D.defaultObject.matrixWorld === this.matrixWorld) {
            this.matrixWorld.copy(source.matrixWorld);
        }

        if (CustomObject3D.defaultObject.matrixAutoUpdate === this.matrixAutoUpdate) {
            this.matrixAutoUpdate = source.matrixAutoUpdate;
        }

        if (CustomObject3D.defaultObject.matrixWorldNeedsUpdate === this.matrixWorldNeedsUpdate) {
            this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;
        }

        if (CustomObject3D.defaultObject.layers.mask === this.layers.mask) {
            this.layers.mask = source.layers.mask;
        }

        if (CustomObject3D.defaultObject.visible === this.visible) {
            this.visible = source.visible;
        }

        if (CustomObject3D.defaultObject.castShadow === this.castShadow) {
            this.castShadow = source.castShadow;
        }

        if (CustomObject3D.defaultObject.receiveShadow === this.receiveShadow) {
            this.receiveShadow = source.receiveShadow;
        }

        if (CustomObject3D.defaultObject.frustumCulled === this.frustumCulled) {
            this.frustumCulled = source.frustumCulled;
        }

        if (CustomObject3D.defaultObject.renderOrder === this.renderOrder) {
            this.renderOrder = source.renderOrder;
        }

        if (CustomObject3D.defaultObject.userData === this.userData) {
            this.userData = JSON.parse(JSON.stringify(source.userData));
        }

        if (this.collectionService.areEquals(CustomObject3D.defaultObject.children, this.children)) {
            source.children.forEach(children => this.add(children.clone()));
        }

        return this;
    }
}