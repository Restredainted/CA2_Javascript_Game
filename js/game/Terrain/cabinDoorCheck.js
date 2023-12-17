import Physics from "../../engine/physics.js";
import Renderer from "../../engine/renderer.js";
/**
 * This class is for the cabin door where the player must get to to bank their picked up treasures
 * on doing so their pocket is emptied and their treasure is added to the score. 
 */
class CabinDoor extends Physics {

    constructor() {
        super();
        this.gravity.y = 0;
    }

    getBoundingBox() {
        
        const renderer = this.gameObject.getComponent(Renderer);

        const left = this.gameObject.x + renderer.width * 0.2368421053;
		const right = this.gameObject.x + renderer.width * 0.4473684211;
		const top = this.gameObject.y + renderer.height * 0.5555555556;
		const bottom = this.gameObject.y + renderer.height;

		// Return the bounding box.
		return [left, right, top, bottom];
    }
}

export default CabinDoor;