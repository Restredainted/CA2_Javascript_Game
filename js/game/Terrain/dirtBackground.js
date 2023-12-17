import { Images } from '../../engine/resources.js';
import TileBackground from './tileBackground.js';


class DirtBackground extends TileBackground {

    constructor(x, y) {
        super(x, y, Images.dirtBackground.width, Images.dirtBackground.height, Images.dirtBackground, 'Brown');

        
    }
}

export default DirtBackground;