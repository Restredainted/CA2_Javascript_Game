import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class Dirt extends Tile {

    constructor(x, y) {
        super(x, y, Images.dirt.width, Images.dirt.height, Images.dirt, 'Brown');


    }

    
}

export default Dirt;