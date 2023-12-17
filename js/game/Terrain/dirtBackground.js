import Health from '../../engine/health.js';
import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class DirtBackground extends Tile {

    constructor(x, y) {
        super(x, y, Images.dirtBackground.width, Images.dirtBackground.height, Images.dirtBackground, 'Brown');

        
    }
}

export default DirtBackground;