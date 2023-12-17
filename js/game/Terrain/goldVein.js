import Health from '../../engine/health.js';
import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class GoldVein extends Tile {

    constructor(x, y, maxHP) {
        super(x, y, Images.veinGold.width, Images.veinGold.height, Images.veinGold, 'Yellow', maxHP);

        this.indestructable = false;
    }
}

export default GoldVein;