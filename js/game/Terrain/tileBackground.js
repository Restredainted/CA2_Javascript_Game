
import Renderer from "../../engine/renderer.js";
import Tile from "./tile.js";


/**
 * Base class for background tile pieces: dirt, well and cabin. 
 */
class TileBackground extends Tile {

    constructor(x, y, width, height, image, color = 'green') {
        super(x, y, width, height, image, color = 'green');
-
        // Add a Renderer component to this tile with the specified color, width, and height.
		// The Renderer component is responsible for rendering the tile on the canvas
		this.addComponent(new Renderer(color, width, height, image));
		
		// Sets the default block state to indestructable.
		// If indestructable will never check if block should be removed due to depleted HP. 
		this.indestructable = true;
		

		// Set the tag property to 'Ground'. This can be used to identify tiles later in the game logic
		this.tag = 'Background'; 

    }
}

export default TileBackground;