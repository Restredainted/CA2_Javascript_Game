import GameObject from '../engine/gameobject.js';
import UI from '../engine/ui.js';
import Player from './player.js';

// The PlayerUI class extends GameObject.
class PlayerUI extends GameObject {
	constructor(x, y) {
		super(x, y); // Call the constructor of the GameObject class.

		// Create a new UI component with initial text and add it to this object's components.
		this.uiHP = new UI('HP: 0', x, y);
		this.uiPocket = new UI('Pocket: 0', x, y + 20);
		this.uiScore = new UI('Score: 0', x, y + 40);
		this.addComponent(this.uiHP);
		this.addComponent(this.uiPocket);
		this.addComponent(this.uiScore);
	}

	// The update method is called every frame.
	update(deltaTime) {
		// Find the player object in the game's gameObjects array.
		const player = this.game.gameObjects.find((obj) => obj instanceof Player);

		// Update the text of the UI component to reflect the player's current lives and score.
		this.uiHP.setText(`HP: ${player.health.HP}`);
		this.uiPocket.setText(`Pocket: ${player.pocket}`);
		this.uiScore.setText(`Score: ${player.score}`);
	}
}

export default PlayerUI; // Export the PlayerUI class for use in other modules.
