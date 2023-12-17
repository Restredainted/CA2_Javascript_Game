import Health from '../../engine/health.js'; // This was used in previous version, don't know whyt I deleted the code instead of commenting it out. 
import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class Dirt extends Tile {

    constructor(x, y, maxHP) {
        super(x, y, Images.dirt.width, Images.dirt.height, Images.dirt, 'Brown', maxHP);

        this.indestructable = false;
    }
}

export default Dirt;