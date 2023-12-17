import Renderer from '../../engine/renderer.js';
import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class GoldVein extends Tile {

    constructor(x, y, maxHP) {
        super(x, y, Images.veinGold1.width, Images.veinGold1.height, Images.veinGold1, 'Yellow', maxHP);

        this.renderer = this.getComponent(Renderer);

        // Randomly select variant for use. 
        this.variant = Math.random();

        if (this.variant <= 0.333) {

            this.renderer.image = Images.veinGold1;
        }

        else if (this.variant <= 0.666) {

            this.renderer.image = Images.veinGold2;
        }

        else {

            this.renderer.image = Images.veinGold3;
        }

        this.indestructable = false;
    }
}

export default GoldVein;