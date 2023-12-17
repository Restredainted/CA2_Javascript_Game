import GameObject from "../../engine/gameobject.js";
import Component from "../../engine/component.js";
import Physics from "../../engine/physics.js";
import Renderer from "../../engine/renderer.js";
import Health from "../../engine/health.js";


/**
 * Base class for tile pieces, dirt, rock and veins. 
 */
class Tile extends GameObject{

    constructor(x, y, width, height, image, color = 'green', maxHP = -1) {
        super(x, y);
-
        // Add a Renderer component to this tile with the specified color, width, and height.
		// The Renderer component is responsible for rendering the tile on the canvas
		this.addComponent(new Renderer(color, width, height, image));
		
		// Add a Physics component to this tile, with initial velocity, acceleration, and forces set to zero.
		// Since tiles don't move, these values will remain zero throughout the game
		this.addComponent(new Physics({ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }));
		

		// Sets the default block state to indestructable.
		// If indestructable will never check if block should be removed due to depleted HP. 
		this.indestructable = true;
		this.addComponent(new Health(maxHP));

		// Set the tag property to 'Ground'. This can be used to identify tiles later in the game logic
		this.tag = 'Ground'; 

    }

	getHealth() {
        return this.health.HP;
    }

}

export default Tile;