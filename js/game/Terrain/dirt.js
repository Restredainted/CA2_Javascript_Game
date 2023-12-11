import { Images } from '../../engine/resources.js';
import Tile from './tile.js';
import GameObject from "../../engine/gameobject.js";
import Component from "../../engine/component.js";
import Physics from "../../engine/physics.js";
import Renderer from "../../engine/renderer.js";

class Dirt extends Tile {

    constructor(x, y) {
        super(x, y, Images.dirt.width, Images.dirt.height, Images.dirt);
        
        
        //this.renderer = new Renderer('orange', );
        //this.addComponent(this.renderer);

        console.log(Images.dirt.width, Images.dirt.height);
    }
}

export default Dirt;