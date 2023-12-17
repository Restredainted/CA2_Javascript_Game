import Renderer from '../../engine/renderer.js';
import { Images } from '../../engine/resources.js';
import TileBackground from './tileBackground.js';


class DirtBackground extends TileBackground {

    constructor(x, y) {
        super(x, y, Images.dirtBackground1.width, Images.dirtBackground1.height, Images.dirtBackground1, 'Brown');

        this.renderer = this.getComponent(Renderer);

        // Randomly select variant for use. 
        this.variant = Math.random();

        if (this.variant <= 0.333) {

            this.renderer.image = Images.dirtBackground1;
        }

        else if (this.variant <= 0.666) {

            this.renderer.image = Images.dirtBackground2;
        }

        else {

            this.renderer.image = Images.dirtBackground3;
        }
    }
}

export default DirtBackground;