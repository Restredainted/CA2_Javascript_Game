import { Images } from '../../engine/resources.js';
import TileBackground from './tileBackground.js';


class WellBackground extends TileBackground {

    constructor(x, y) {
        super(x, y, Images.wellBackground.width, Images.wellBackground.height, Images.wellBackground, 'Grey');

    }
}

export default WellBackground;