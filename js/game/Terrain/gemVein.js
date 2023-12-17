import Health from '../../engine/health.js';
import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class GemVein extends Tile {

    constructor(x, y, maxHP) {
        super(x, y, Images.veinGem.width, Images.veinGem.height, Images.veinGem, 'Red', maxHP);

        this.indestructable = false;
    }
}

export default GemVein;