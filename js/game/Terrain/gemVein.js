import Health from '../../engine/health.js';
import { Images } from '../../engine/resources.js';
import Tile from './tile.js';


class GemVein extends Tile {

    constructor(x, y) {
        super(x, y, Images.veinGem.width, Images.veinGem.height, Images.veinGem, 'Yellow');

        this.health = new Health(10);
    }
    
    update(deltaTime) {
        
        if (this.health.HP <= 0) {

            this.GameObject.removeGameObject(this.GameObject);
        }
    }
}

export default GemVein;