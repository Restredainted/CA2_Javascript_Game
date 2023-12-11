import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class Grass extends Tile {

    constructor(x, y) {
        super(x, y, Images.grass.width, Images.grass.height, Images.grass, 'Green');

    }

}

export default Grass;