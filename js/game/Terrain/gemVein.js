import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class GemVein extends Tile {

    constructor(x, y) {
        super(x, y, Images.veinGem.width, Images.veinGem.height, Images.veinGem, 'Yellow');


    }

    
}

export default GemVein;