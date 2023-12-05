import {Images} from '../resources.js';
import Tile from './tile.js';

class Dirt extends Tile {

    Constructor(x, y, color = 'brown') {
        super (x, y, Images.dirt.width, Images.dirt.height) 

        this.renderer = new Renderer(color, Images.dirt.width, Images.dirt.height, Images.dirt);
    }
}

export default Dirt;