import Vector3 from "../core/Vector3";
import Light from "./Light";

export default class DirectionalLight extends Light {

    constructor(color, direction) {
        super(color)

        this.direction = direction || new Vector3(1, 1, 1);
  
        this.direction.normalize();
    }
}