import Collectable from "./collectable.js";
import { Images } from '../engine/resources.js';
import Renderer from "../engine/renderer.js";

class Gold extends Collectable {

	constructor (x, y, color = 'gold') {
		super(x, y, Images.coin.width, Images.coin.height, color);

		this.renderer = new Renderer(color, Images.coin.height, Images.coin.width, Images.coin); // Add renderer
		this.addComponent(this.renderer);

		this.value = 1;
	}
}

export default Gold;