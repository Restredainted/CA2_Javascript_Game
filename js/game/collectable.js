// Import the GameObject class from the 'engine' directory
import GameObject from '../engine/gameobject.js';

// Import the Renderer class from the 'engine' directory
import Renderer from '../engine/renderer.js';

// Import the Physics class from the 'engine' directory
import Physics from '../engine/physics.js';

import Tile from './Terrain/tile.js';

// Define a new class, collectable, which extends (i.e., inherits from) GameObject
class Collectable extends GameObject {
	
	
	// Define the constructor for this class. The constructor takes five arguments:
	// - x and y coordinates
	// - width and height of the collectable
	// - color of the collectable, which defaults to 'gold' if not specified
	constructor(x, y, width, height, color = 'gold') {
		
		// Call the constructor of the superclass (GameObject) with the x and y coordinates
		super(x, y);

		this.renderer = new Renderer(color, width, height)
		// Add a new Renderer component to this collectable. The renderer is responsible for drawing the collectable.
		// It uses the provided color, width, and height.
		this.addComponent(this.renderer);

		// Add a new Physics component to this collectable. The physics component is responsible for handling the physics
		// (like movement, collision detection, etc.). In this case, the collectable doesn't move,
		// so the initial velocity, acceleration, and friction are all set to zero.
		this.addComponent(new Physics({ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 500 }));

		// Set the 'tag' property of this collectable. The tag is used to identify the type of GameObject
		// (useful when checking collisions, for example)
		this.tag = 'collectable';

		// Set the 'value' property of this collectable. This could be used to score points when the collectable is collected.
		this.value = 1;
	}

	update(deltaTime) {
		const physics = this.getComponent(Physics); // Get physics component

		// Taken and modified from player script. 
		//this.isOnGround = false;  // Reset this before checking collisions with tiles
		const tiles = this.game.gameObjects.filter(((obj) => obj instanceof Tile));
		//console.log(this.gameObject + "Collision");

		for (const tile of tiles) {

			//console.log(this.gameObject + "Collision");

			if (physics.isColliding(tile.getComponent(Physics))) {

				//console.log("Collectable collision");
				physics.velocity.y = 0;
				physics.acceleration.y = 0;
				this.y = tile.y - this.renderer.height;

			}
		}

		super.update(deltaTime);
	}
}

// Export the collectable class as the default export of this module
export default Collectable;
