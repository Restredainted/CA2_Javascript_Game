import Health from '../../engine/health.js';
import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class GoldVein extends Tile {

    constructor(x, y) {
        super(x, y, Images.veinGold.width, Images.veinGold.height, Images.veinGold, 'Yellow');

        this.health = new Health(5);
    }

    update(deltaTime) {
        
        if (this.health.HP <= 0) {

            this.GameObject.removeGameObject(this.GameObject);
        }
    }
}

export default GoldVein;