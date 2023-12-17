import Health from '../../engine/health.js'; // This was used in previous version, don't know whyt I deleted the code instead of commenting it out. 
import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class GemVein extends Tile {

    constructor(x, y, maxHP) {
        super(x, y, Images.veinGem.width, Images.veinGem.height, Images.veinGem, 'Red', maxHP);

        this.indestructable = false;
    }
}

export default GemVein;