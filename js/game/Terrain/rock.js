import Renderer from '../../engine/renderer.js';
import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class Rock extends Tile {

    constructor(x, y) {
        super(x, y, Images.rock1.width, Images.rock1.height, Images.rock1, 'Grey');

        this.renderer = this.getComponent(Renderer);

        // Randomly select variant for use. 
        this.variant = Math.random();
        
        if (this.variant <= 0.5) {

            this.renderer.image = Images.rock1;
        }

        else {

            this.renderer.image = Images.rock2;
        }
    }
}

export default Rock;