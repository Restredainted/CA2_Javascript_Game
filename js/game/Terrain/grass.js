import Renderer from '../../engine/renderer.js';
import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class Grass extends Tile {

    constructor(x, y) {
        super(x, y, Images.grass1.width, Images.grass1.height, Images.grass1, 'Green');

        this.renderer = this.getComponent(Renderer);

        // Randomly select variant for use. 
        this.variant = Math.random();

        if (this.variant <= 0.333) {

            this.renderer.image = Images.grass1;
        }

        else if (this.variant <= 0.666) {

            this.renderer.image = Images.grass2;
        }

        else {

            this.renderer.image = Images.grass3;
        }
    }
}

export default Grass;