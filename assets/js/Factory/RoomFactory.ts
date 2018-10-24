import Room from "@js/Domain/Object/Room";

export default class RoomFactory  {
    fromObjectFile(): Room {

        return new Room();
    }
}