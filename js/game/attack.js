import GameObject from "../engine/gameobject.js";
import Physics from "../engine/physics.js";
import Renderer from "../engine/renderer.js";
import { Images } from "../engine/resources.js";
import Tile from './Terrain/tile.js';
import Health from "../engine/health.js";

class Attack extends GameObject {

    constructor(x, y, damage) {
        super(x, y);

        this.renderer = new Renderer('white', Images.attack.width, Images.attack.height, Images.attack); // Add renderer
		this.addComponent(this.renderer);
        this.addComponent(new Physics({x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}));

        const lifeSpan = 0.25;
        this.timeOut = lifeSpan;
        //const damage = damage;
    }

    update(deltaTime) {
        const physics = this.getComponent(Physics);

        // Get array of tiles to check.
        const tiles = this.game.gameObjects.filter((obj) => obj instanceof Tile);

        // cheack if each tile is overlapping with this object and if the other object has health, do damage. 
        for (const tile of tiles) {

            if (physics.isColliding(tile.getComponent(Physics))) {

                if (!tile.indestructable) {

                    tile.getComponent(Health).damage();
                }
            }
        }

        this.timeOut -= deltaTime;

        // Check if the attack has finished and remove object. 
        if (this.timeOut <= 0) {
            console.log("remove item");
            this.game.removeGameObject(this.GameObject); // This doesn't seem to remove the object.
        }
    }

    getTimeOut() {
        return this.timeOut;
    }
}

export default Attack; 