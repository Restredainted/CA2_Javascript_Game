import GameObject from "../../engine/gameobject.js";
import Component from "../../engine/component.js";
import Physics from "../../engine/physics.js";
import Renderer from "../../engine/renderer.js";


/**
 * Base class for tile pieces, dirt, rock and veins. 
 */
class Tile extends GameObject{

    constructor(x, y, height, width, color = 'brown') {
        super(x, y)

        // Add a Renderer component to this tile with the specified color, width, and height.
		// The Renderer component is responsible for rendering the tile on the canvas
		this.addComponent(new Renderer(color, width, height));
		
		// Add a Physics component to this tile, with initial velocity, acceleration, and forces set to zero.
		// Since tiles don't move, these values will remain zero throughout the game
		this.addComponent(new Physics({ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }));
		
		// Set the tag property to 'Ground'. This can be used to identify tiles later in the game logic
		this.tag = 'Ground'; 

    }

}

export default Tile;