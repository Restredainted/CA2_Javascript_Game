import Physics from "./physics.js";
import Renderer from "./renderer.js";

class Raycast extends Physics{

    constructor() {
        super();
        this.gravity.y = 0;

    }

	// The getBoundingBox method returns the bounding box of the game object in terms of its left, right, top, and bottom edges.
	getBoundingBox() {
		// Get the Renderer component of the game object to get its width and height.
		const renderer = this.gameObject.getComponent(Renderer);
		// Calculate the left, right, top, and bottom edges of the bounding box.

        /* The calculations here, create a small box 10% of the size of the object it is attached to, which is created then at the objects feet. 
        * this provided me more accurate ground check collision and using this method with how I changed the ]]
        * groundCheck removed the jittering due to gravity while on the ground. which resulted in lines appearing horizontally between tiles. 
        * */
		const left = this.gameObject.x + renderer.width * 0.15;
		const right = this.gameObject.x + renderer.width * 0.85;
		const top = this.gameObject.y + renderer.height * 0.95;
		const bottom = this.gameObject.y + renderer.height * 1.1;

		// Return the bounding box.
		return [left, right, top, bottom];
	}
}

export default Raycast;