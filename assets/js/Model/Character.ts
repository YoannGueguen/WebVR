import {BoxGeometry, Clock, Mesh, MeshPhongMaterial, Vector3} from "three";
import MeshModel from "@js/Model/MeshModel";

export default class Character extends MeshModel {
    // Direction du mouvement
    private direction: Vector3 = new Vector3(1, 0, 0);
    // Vitesse du personnage sur les differents axe
    private velocity: Vector3 = new Vector3(0, 0, 0);
    // Vitesse du personnage
    private speed: number = 150;
    private clock: Clock = new Clock(true);

    constructor() {
        super();
        this._geometry = new BoxGeometry(150, 200, 150);
        this._material = new MeshPhongMaterial({
            color: 0xffff00
        });
        this._mesh = new Mesh(this.geometry, this.material);

        // TODO: Remove this
        this.move();

        // Initialisation de la vitesse du personnage
        this.updateVelocity();
    }

    private move(): void {
        const container = document.getElementById('app');
        const screenLeft = container.offsetLeft - container.scrollLeft + container.clientLeft;
        let startX = 0;
        let buttonDown = false;
        let angle = 0;

        container.addEventListener("mousedown", event => {
            buttonDown = true;
            startX = event.clientX - screenLeft;
        });

        container.addEventListener("mouseup", event => {
            buttonDown = false;
        });

        container.addEventListener("mousemove", event => {
            if (buttonDown) {
                angle = (event.clientX - screenLeft - startX) * Math.PI / 200.0;
                this.direction.x = Math.cos(angle);
                this.direction.z = Math.sin(angle);

                this.mesh.rotation.y = angle;
            }
        });
    }

    public getScanFrontDirectionByAngle(angle: number): Vector3 {
        // Test des collision a 45deg devant l'objet
        const cs = Math.cos(angle * Math.PI / 180);
        const ss = Math.sin(angle * Math.PI / 180);

        return new Vector3(
            cs * this.direction.x - ss * this.direction.z,
            0,
            ss * this.direction.x + cs * this.direction.z
        );
    }

    public affectVelocityByFace(face: Vector3): void {
        const ps = this.velocity.dot(face);
        this.velocity.x -= ps * face.x;
        this.velocity.z -= ps * face.z;
    }

    public updateVelocity(): void {
        this.velocity.x = this.direction.x * this.speed;
        this.velocity.z = this.direction.z * this.speed;
    }

    public walk(): void {
        const dt = this.clock.getDelta();
        this.mesh.position.x += dt * this.velocity.x;
        this.mesh.position.z += dt * this.velocity.z;
    }
}
