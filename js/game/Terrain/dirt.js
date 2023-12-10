import {Images} from '../resources.js';
import Tile from './tile.js';

class Dirt extends Tile {

    Constructor(x, y) {
        super (x, y, Images.dirt.width, Images.dirt.height, color, Images.dirt) 

        //this.renderer = new Renderer(color, 8, 8, Images.dirt);
        console.log(Images.dirt.width, Images.dirt.height);
    }
}

export default Dirt;