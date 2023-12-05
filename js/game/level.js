// Import necessary classes and resources
import Game from '../engine/game.js';
import Player from './player.js';
import Enemy from './enemy.js';
import PlayerUI from './playerUI.js';
import Tile from './Terrain/tile.js';
import Collectable from './collectable.js';
import Gold from './gold.js';
import Gem from './gem.js';

// Define a class Level that extends the Game class from the engine
class Level extends Game {

	// Define the constructor for this class, which takes one argument for the canvas ID
	constructor(canvasId) {
		// Call the constructor of the superclass (Game) with the canvas ID
		super(canvasId);
		
		// Create a player object and add it to the game
		const player = new Player(this.canvas.width / 2 - 25, this.canvas.height / 2 - 25);
		this.addGameObject(player);
		
		// Add the player UI object to the game
		this.addGameObject(new PlayerUI(10, 10));

		// Set the game's camera target to the player
		this.camera.target = player;

		// Define the tile's width and the gap between tiles
		const tileWidth = 200;
		const gap = 100;

		// Create tiles and add them to the game
		const tiles = [
			new Tile(0, this.canvas.height - 20, tileWidth, 20),
			new Tile(tileWidth + gap, this.canvas.height - 20, tileWidth, 20),
			new Tile(2 * (tileWidth + gap), this.canvas.height - 20, tileWidth, 20),
			new Tile(3 * (tileWidth + gap), this.canvas.height - 30, tileWidth, 20),
			new Tile(4 * (tileWidth + gap), this.canvas.height - 40, tileWidth, 20),
		];
		for (const tile of tiles) {
			this.addGameObject(tile);
		}

		// Create enemies and add them to the game
		this.addGameObject(new Enemy(50, this.canvas.height - 90));
		this.addGameObject(new Enemy(tileWidth + gap + 50, this.canvas.height - 90));
		this.addGameObject(new Enemy(2 * (tileWidth + gap) + 50, this.canvas.height - 90));

		// Create collectables and add them to the game
		this.addGameObject(new Collectable(250, this.canvas.height - 100, 20, 20));
		this.addGameObject(new Collectable(450, this.canvas.height - 100, 20, 20));
		this.addGameObject(new Collectable(650, this.canvas.height - 100, 20, 20));
		this.addGameObject(new Gold(300, this.canvas.height - 110));
		this.addGameObject(new Gem(985, this.canvas.height - 90));
	}

}

// Export the Level class as the default export of this module
export default Level;
