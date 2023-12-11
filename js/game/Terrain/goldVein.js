import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class GoldVein extends Tile {

    constructor(x, y) {
        super(x, y, Images.veinGold.width, Images.veinGold.height, Images.veinGold, 'Yellow');


    }

    
}

export default GoldVein;