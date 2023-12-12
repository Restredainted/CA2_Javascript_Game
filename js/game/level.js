// Import necessary classes and resources
import Game from '../engine/game.js';
import Player from './player.js';
import Enemy from './enemy.js';
import PlayerUI from './playerUI.js';
import Tile from './Terrain/tile.js';
import Dirt from './Terrain/dirt.js';
import Rock from './Terrain/rock.js';
import Grass from './Terrain/grass.js';
import GoldVein from './Terrain/goldVein.js';
import GemVein from './Terrain/gemVein.js';
import Collectable from './collectable.js';
import Gold from './gold.js';
import Gem from './gem.js';
import Health from '../engine/health.js';

// Define a class Level that extends the Game class from the engine
class Level extends Game {

	// Define the constructor for this class, which takes one argument for the canvas ID
	constructor(canvasId) {
		// Call the constructor of the superclass (Game) with the canvas ID
		super(canvasId);
		
		// Create a player object and add it to the game
		const player = new Player(this.canvas.width * 0.15, this.canvas.height * 0.4);
		this.addGameObject(player);
		
		// Add the player UI object to the game
		this.addGameObject(new PlayerUI(10, 10));

		// Set the game's camera target to the player
		this.camera.target = player;

		// Define the tile's width and the gap between tiles
		let rareGen = 0;
		const gemRate = 0.95;
		const goldRate = 0.8;
		const tileWidth = 200;
		const tileSize = 32;
		const gap = 100;
		const dirtTiles = [];

		// Create tiles and add them to the game
		let wellHole = 0; //For ease of changing tilesize. 

			for (let i = 0; i < (this.canvas.width / tileSize); i++) {

				for (let j = 0; j <= (this.canvas.height * 4) / tileSize ; j++) {

					let newX = tileSize * i;
					let newY = (tileSize * j) + (this.canvas.height / 2);
					
					rareGen = Math.random(0, 10);
					//console.log(rareGen);

					// Generate Borders along the 2 vertical edges and bottom of the level.
					if (i == 0 || i == (this.canvas.width / tileSize) - 1 || j == ((this.canvas.height * 4) / tileSize) - 1) {

						dirtTiles.push(new Rock(newX, newY));
					}

					// Part of surface layer generation with a gap with a dirt patch in the middle to traverse. 
					// Also creates the well matching the hole size. 
					else if (j == 0 && wellHole < 2 && i >= (this.canvas.width / tileSize) * 0.4) {
						//(i >= (this.canvas.width / tileSize) * 0.45 || i <= (this.canvas.width / tileSize) * 0.55 )
						dirtTiles.push(new Dirt(newX,newY));
						wellHole += 1;
					}

					// Grass for surface layer. 
					else if (j == 0) {
						 
						dirtTiles.push(new Grass(newX, newY));
					}

					// Generates gold veins for player to dig up. 
					else if (rareGen >= goldRate) {
						console.log("Gold Spawned");
						dirtTiles.push(new GoldVein(newX, newY));
					}

					// Generates Gemstone veins for the player to dig. may add additional conditions so they'll only spawn
					// below a certain depth. 
					else if (rareGen >= gemRate) {

						dirtTiles.push(new GemVein(newX, newY));
					}

					// if not generating anything else, fills the tileslot with dirt. 
					else {

						dirtTiles.push(new Dirt(newX, newY));
					}
				}
			}

			
		
		for (const dirt of dirtTiles) {
			//console.log(dirt.getComponent(Renderer));
			this.addGameObject(dirt);

			
		}

		

		// Create enemies and add them to the game
		this.addGameObject(new Enemy(50, this.canvas.height/2 - 90));
		this.addGameObject(new Enemy(tileWidth + gap + 50, this.canvas.height/2 - 90));
		this.addGameObject(new Enemy(2 * (tileWidth + gap) + 50, this.canvas.height/2 - 90));

		// Create collectables and add them to the game
		this.addGameObject(new Collectable(250, this.canvas.height/2 - 200, 20, 20));
		this.addGameObject(new Collectable(450, this.canvas.height/2 - 100, 20, 20));
		this.addGameObject(new Collectable(650, this.canvas.height/2 - 100, 20, 20));
		this.addGameObject(new Gold(300, this.canvas.height/2 - 110));
		this.addGameObject(new Gem(985, this.canvas.height/2 - 90));
	}

}

// Export the Level class as the default export of this module
export default Level;
