import GameObject from "../engine/gameobject.js";
import Physics from "../engine/physics.js";
import Renderer from "../engine/renderer.js";
import { Images } from "../engine/resources.js";
import Tile from './Terrain/tile.js';
import Health from "../engine/health.js";
import Dirt from "./Terrain/dirt.js";
import GemVein from "./Terrain/gemVein.js";
import GoldVein from "./Terrain/goldVein.js";

class Attack extends GameObject {

    constructor(x, y, damage) {
        super(x, y);

        this.renderer = new Renderer('white', Images.attack.width, Images.attack.height, Images.attack); // Add renderer
		this.addComponent(this.renderer);
        this.addComponent(new Physics({x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}));

        const lifeSpan = 0.1;
        this.timeOut = lifeSpan;
        this.doneDamage = false;
        //const damage = damage;
    }

    update(deltaTime) {
        
        const physics = this.getComponent(Physics);

        // Get array of tiles to check.
        const tiles = this.game.gameObjects.filter((obj) => obj instanceof Tile);

        // limited to do damage to the first and only tile it collides with a single time. 
        if (!this.doneDamage) {

            // cheack if each tile is overlapping with this object and if the other object has health, do damage. 
            for (const tile of tiles) {

                if (physics.isColliding(tile.getComponent(Physics))) {

                    //console.log("Attack sollision 1"); // Debug tracing output. 
                    if (tile instanceof Dirt || tile instanceof GemVein || tile instanceof GoldVein) {

                        //  console.log("damaged collision"); // Debug tracing output. 
                        tile.getComponent(Health).damage();
                        this.doneDamage = true;
                    }
                }
            }
        }

        this.timeOut -= deltaTime;


        // Moved to level for checking. 
        // Check if the attack has finished and remove object. 
        // if (this.timeOut <= 0) {
        //     // console.log("remove item");
        //     this.game.removeGameObject(this.GameObject); // This doesn't seem to remove the object.
        // }
    }

    getTimeOut() {

        return this.timeOut;
    }
}

export default Attack; 