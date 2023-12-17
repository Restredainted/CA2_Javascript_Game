import Health from '../../engine/health.js'; // This was used in previous version, don't know whyt I deleted the code instead of commenting it out. 
import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class Well extends Tile {

    constructor(x, y) {
        super(x, y, Images.well.width, Images.well.height, Images.well, 'Brown');


    }
}

export default Well;