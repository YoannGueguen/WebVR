import {Singleton} from "typescript-ioc";
import {Raycaster, Vector3} from "three";
import Direction from "@js/Core/Direction/Direction";

@Singleton
export default class DirectionService {
    public getRaycasterDown(position: Vector3): Raycaster {
        return this.getRaycasterByDirection(position, Direction.down);
    }

    public getRaycasterUp(position: Vector3): Raycaster {
        return this.getRaycasterByDirection(position, Direction.up);
    }

    public getRaycasterByDirection(position: Vector3, direction: Vector3): Raycaster {
        const raycaster = new Raycaster();
        raycaster.set(position, direction);

        return raycaster;
    }
}
