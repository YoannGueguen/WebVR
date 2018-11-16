import {Inject, Singleton} from "typescript-ioc";
import ObstacleCollection from "@js/Collection/ObstacleCollection";
import {Intersection, Mesh, Raycaster} from "three";
import DirectionService from "@js/Service/DirectionService";
import Character from "@js/Model/Character";
import MeshModel from "@js/Model/MeshModel";

@Singleton
export default class CollisionService {
    private obstacles: ObstacleCollection = new ObstacleCollection();
    @Inject
    private directionService: DirectionService;

    public addObstacle(object: Mesh): void {
        this.obstacles.push(object);
    }

    public placeOnTheFloor(object: MeshModel): void {
        // Initialisation du raycaster avec la position vertical de l'objet
        const raycaster = this.directionService.getRaycasterDown(object.mesh.position);
        const interactions = this.getIntesections(raycaster);

        if (interactions.length > 0) {
            const objectUnderfoot = interactions[0];
            console.log(object.getSize().y);
            object.mesh.position.y += (object.getSize().y / 2) - objectUnderfoot.distance;
        }
    }

    private getIntesections(raycaster: Raycaster): Intersection[] {
        // place dans la variable intersection (tableau) la liste des objet en contact avec notre objet present
        return raycaster.intersectObjects(this.obstacles, true);
    }

    public update(character: Character): void {
        this.placeOnTheFloor(character);
        character.walk();
        character.updateVelocity();

        for (let angle = -45; angle < 45; angle += 15) {
            const raycaster = this.directionService.getRaycasterByDirection(
                character.mesh.position,
                character.getScanFrontDirectionByAngle(angle)
            );

            const intersections = this.getIntesections(raycaster); // placement des objets en collision dans la variable intersection

            // collision avec les differents objets
            // TODO: Change 8 value to width of character
            if (intersections.length > 0 && intersections[0].distance < character.getSize().x) {
                // Envoie de la face de l'objet avec le quel il est en collision
                character.affectVelocityByFace(intersections[0].face.normal);
            }
        }
    }
}
