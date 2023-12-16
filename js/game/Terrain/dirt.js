import Health from '../../engine/health.js';
import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class Dirt extends Tile {

    constructor(x, y) {
        super(x, y, Images.dirt.width, Images.dirt.height, Images.dirt, 'Brown');

        this.health = new Health(3);
        this.addComponent(this.health);
        this.indestructable = false;
    }

    getHealth() {
        return this.health.HP;
    }
}

export default Dirt;