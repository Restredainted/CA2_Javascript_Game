import Collectable from "./collectable.js";
import { Images } from '../engine/resources.js';
import Renderer from "../engine/renderer.js";

class Gem extends Collectable {

	constructor (x, y, color = 'red') {
		super(x, y, Images.gem.width, Images.gem.height, color);

		this.renderer = new Renderer(color, Images.gem.width, Images.gem.height, Images.gem); // Add renderer
		this.addComponent(this.renderer);

		this.value = 5;
	}
}

export default Gem;