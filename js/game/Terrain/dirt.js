import Renderer from '../../engine/renderer.js';
import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class Dirt extends Tile {

    constructor(x, y, maxHP) {
        super(x, y, Images.dirt1.width, Images.dirt1.height, Images.dirt1, 'Brown', maxHP);

        this.renderer = this.getComponent(Renderer);

        // Randomly select variant for use. 
        this.variant = Math.random();
        
        if (this.variant <= 0.333) {

            this.renderer.image = Images.dirt1;
        }

        else if (this.variant <= 0.666) {

            this.renderer.image = Images.dirt2;
        }

        else {

            this.renderer.image = Images.dirt3;
        }

        this.indestructable = false;
    }
}

export default Dirt;