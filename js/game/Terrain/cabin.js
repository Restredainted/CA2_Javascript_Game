import { Images } from '../../engine/resources.js';
import CabinDoor from './cabinDoorCheck.js';
import TileBackground from './tileBackground.js';


class Cabin extends TileBackground {

    constructor(x, y) {
        super(x, y - Images.cabin.height, Images.cabin.width, Images.cabin.height, Images.cabin, 'Yellow');

        this.addComponent(new CabinDoor());
    }


}

export default Cabin;