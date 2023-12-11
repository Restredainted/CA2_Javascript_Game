import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class Rock extends Tile {

    constructor(x, y) {
        super(x, y, Images.rock.width, Images.rock.height, Images.rock, 'Grey');


    }

    
}

export default Rock;