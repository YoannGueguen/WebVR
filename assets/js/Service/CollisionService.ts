import {Inject, Singleton} from "typescript-ioc";
import ObstacleCollection from "@js/Collection/ObstacleCollection";
import {Mesh, Raycaster} from "three";
import DirectionService from "@js/Service/DirectionService";
import Character from "@js/Model/Character";
import MeshModel from "@js/Model/MeshModel";
import IntersectionCollection from "@js/Collection/IntersectionCollection";

@Singleton
export default class CollisionService {
    private obstacles: ObstacleCollection = new ObstacleCollection();
    @Inject
    private directionService: DirectionService;

    /**
     * Add the object as obstacle
     * @param object
     */
    public addObstacle(object: Mesh): void {
        this.obstacles.push(object);
    }

    /**
     * Place the object to the floor
     * @param object
     */
    public placeOnTheFloor(object: MeshModel): void {
        // Initialisation du raycaster avec la position vertical de l'objet
        const raycaster = this.directionService.getRaycasterDown(object.mesh.position);
        const intersections = this.getIntersections(raycaster);

        if (intersections.length > 0) {
            const objectUnderfoot = intersections.first();
            object.mesh.position.y += (object.getSize().y / 2) - objectUnderfoot.distance;
        }
    }

    /**
     * Get proximity objects by raycaster
     * @param raycaster
     */
    private getIntersections(raycaster: Raycaster): IntersectionCollection {
        return new IntersectionCollection(raycaster.intersectObjects(this.obstacles, true));
    }

    /**
     * Update character position with collisions
     * @param character
     */
    public update(character: Character): void {
        this.placeOnTheFloor(character);
        character.walk();
        character.updateVelocity();

        for (let angle = -45; angle < 45; angle += 15) {
            const raycaster = this.directionService.getRaycasterByDirection(
                character.mesh.position,
                character.getScanFrontDirectionByAngle(angle)
            );

            const intersections = this.getIntersections(raycaster);
            if (intersections.length > 0 && intersections.first().distance < character.getSize().x) {
                // Envoie de la face de l'objet avec le quel il est en collision
                character.affectVelocityByFace(intersections.first().face.normal);
            }
        }
    }
}
