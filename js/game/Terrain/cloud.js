import Physics from '../../engine/physics.js';
import Renderer from '../../engine/renderer.js';
import { Images } from '../../engine/resources.js';
import TileBackground from './tileBackground.js';


class Cloud extends TileBackground {

    constructor(x, y) {
        super(x, y, Images.cloud.width, Images.cloud.height, Images.cloud, 'white');

        this.addComponent(new Physics({ x: 5, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0}));        
    }

    update(deltaTime) {

        const physics = this.getComponent(Physics);

        physics.velocity.x = 10;
        physics.acceleration.x = 10;
        
        if (this.x > this.game.canvas.width) {

            this.x = - this.getComponent(Renderer).width;
        }

        super.update(deltaTime);
    }
}

export default Cloud;