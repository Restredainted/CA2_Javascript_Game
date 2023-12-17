import Renderer from '../../engine/renderer.js';
import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class GemVein extends Tile {

    constructor(x, y, maxHP) {
        super(x, y, Images.veinGem1.width, Images.veinGem1.height, Images.veinGem1, 'Red', maxHP);

        this.renderer = this.getComponent(Renderer);

        // Randomly select variant for use. 
        this.variant = Math.random();

        if (this.variant <= 0.333) {

            this.renderer.image = Images.veinGem1;
        }
        
        else if (this.variant <= 0.666) {

            this.renderer.image = Images.veinGem2;
        }

        else {

            this.renderer.image = Images.veinGem3;
        }

        this.indestructable = false;
    }
}

export default GemVein;