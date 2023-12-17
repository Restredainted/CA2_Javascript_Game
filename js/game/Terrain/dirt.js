import Health from '../../engine/health.js';
import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class Dirt extends Tile {

    constructor(x, y, maxHP) {
        super(x, y, Images.dirt.width, Images.dirt.height, Images.dirt, 'Brown', maxHP);

        this.indestructable = false;
    }
}

export default Dirt;