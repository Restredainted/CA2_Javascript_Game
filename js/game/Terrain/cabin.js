import { Images } from '../../engine/resources.js';
import TileBackground from './tileBackground.js';


class Cabin extends TileBackground {

    constructor(x, y) {
        super(x, y - Images.cabin.height, Images.cabin.width, Images.cabin.height, Images.cabin, 'Yellow');

    }
}

export default Cabin;