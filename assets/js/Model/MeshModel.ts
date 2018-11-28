import {Box3, Geometry, Material, Mesh, Vector3} from "three";

export default abstract class MeshModel {
    protected _geometry: Geometry;
    protected _material: Material;
    protected _mesh: Mesh;

    protected constructor(geometry: Geometry, material: Material, meshType: typeof Mesh = Mesh) {
        this._geometry = geometry;
        this._material = material;
        this._mesh = new meshType(this.geometry, this.material);
    }

    get geometry(): Geometry {
        return this._geometry;
    }

    get material(): Material {
        return this._material;
    }

    get mesh(): Mesh {
        return this._mesh;
    }

    public getSize(): Vector3 {
        const box = new Box3().setFromObject(this.mesh);

        return box.getSize(new Vector3(0, 0, 0));
    }

    public changeOriginAtBottomLeft(): void {
        const size = this.getSize();
        this.mesh.position.set(
            size.x / 2,
            0,
            -size.z / 2
        );
    }
}
