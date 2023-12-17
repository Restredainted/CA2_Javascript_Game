// Import necessary classes and resources
import Game from '../engine/game.js';
import Health from '../engine/health.js';
import Renderer from '../engine/renderer.js';
import WellBackground from './Terrain/WellBackground.js';
import Cabin from './Terrain/cabin.js';
import Cloud from './Terrain/cloud.js';
import Dirt from './Terrain/dirt.js';
import DirtBackground from './Terrain/dirtBackground.js';
import GemVein from './Terrain/gemVein.js';
import GoldVein from './Terrain/goldVein.js';
import Grass from './Terrain/grass.js';
import Rock from './Terrain/rock.js';
import Tile from './Terrain/tile.js';
import Well from './Terrain/well.js';
import Attack from './attack.js';
// import Enemy from './enemy.js'; // Remnant Code
import Gem from './gem.js';
import Gold from './gold.js';
import Player from './player.js';
import PlayerUI from './playerUI.js';

// Define a class Level that extends the Game class from the engine
class Level extends Game {

	// Define the constructor for this class, which takes one argument for the canvas ID
	constructor(canvasId) {
		// Call the constructor of the superclass (Game) with the canvas ID
		super(canvasId);
		
		

		// Define the tile's width and the gap between tiles
		let rareGen = 0;
		const gemRate = 0.98;
		const goldRate = 0.9;
		// const tileWidth = 200; // Remnant Code
		const tileSize = 32;
		// const gap = 100; // Remnant Code
		this.dirtTiles = [];

		// Create tiles and add them to the game
		let wellHole = 0; //For ease of changing tilesize. 

		for (let i = 0; i < (this.canvas.width / tileSize); i++) {

			/**
			 * Generate clouds. 
			 */
			for (let j = 0; j < (this.canvas.width / (tileSize * 8)); j++) {

				if ( j % 2 == 0) {

					this.dirtTiles.push(new Cloud(j * tileSize * 8.5, this.canvas.height * 0.07 ));
				}
				else {
					
					this.dirtTiles.push(new Cloud(j * tileSize * 8.5, this.canvas.height * 0.03 ));
				}
			}

			/** 
			 * Primary generation loop. 
			*/
			for (let j = 0; j <= (this.canvas.height * 4) / tileSize ; j++) {

				let newX = tileSize * i;
				let newY = (tileSize * j) + (this.canvas.height / 2);
				
				rareGen = Math.random(0, 10);
				//console.log(rareGen);

				// Generate Borders along the 2 vertical edges and bottom of the level.
				if (i == 0 || i == (this.canvas.width / tileSize) - 1 || j >= ((this.canvas.height * 4) / tileSize) - 2) {

					this.dirtTiles.push(new Rock(newX, newY));
				}

				// Part of surface layer generation with a gap with a dirt patch in the middle to traverse. 
				// Also creates the well matching the hole size. 
				else if (j == 0 && wellHole < 2 && i >= (this.canvas.width / tileSize) * 0.4) {

					if (wellHole == 0) {

						this.dirtTiles.push(new Well(newX - tileSize / 2, newY - tileSize));
						this.dirtTiles.push(new Well(newX + tileSize * 2, newY - tileSize));
						this.dirtTiles.unshift(new WellBackground(newX, newY - tileSize));
						this.dirtTiles.unshift(new WellBackground(newX + tileSize, newY - tileSize));
						this.dirtTiles.unshift(new Cabin(((this.canvas.width * 0.6) - (this.canvas.width % 32) + 8), newY));
					}

					//(i >= (this.canvas.width / tileSize) * 0.45 || i <= (this.canvas.width / tileSize) * 0.55 )
					this.dirtTiles.push(new Dirt(newX,newY, 1));
					wellHole += 1;
				}

				// Grass for surface layer. 
				else if (j == 0) {
						
					this.dirtTiles.push(new Grass(newX, newY));
				}

				// Generates gold veins for player to dig up. 
				else if (rareGen >= goldRate && (rareGen <= gemRate)) {
					// console.log("Gold Spawned");
					this.dirtTiles.push(new GoldVein(newX, newY, 3));
				}

				// Generates Gemstone veins for the player to dig. 
				// may add additional conditions so they'll only spawn
				// below a certain depth. 
				else if (rareGen >= gemRate) {

					this.dirtTiles.push(new GemVein(newX, newY, 5));
				}

				// if not generating anything else, fills the tileslot with dirt. 
				else {

					this.dirtTiles.push(new Dirt(newX, newY, 1));
				}
			}
		}


		for (const dirt of this.dirtTiles) {

			//console.log(dirt.getComponent(Renderer));
			this.addGameObject(dirt);
		}

		
		// Remnants of given code. 

		// // Create enemies and add them to the game
		// this.addGameObject(new Enemy(50, this.canvas.height/2 - 90));
		// this.addGameObject(new Enemy(tileWidth + gap + 50, this.canvas.height/2 - 90));
		// this.addGameObject(new Enemy(2 * (tileWidth + gap) + 50, this.canvas.height/2 - 90));

		// // Create collectables and add them to the game
		// this.addGameObject(new Gem(250, this.canvas.height/2 - 200));
		// this.addGameObject(new Gold(450, this.canvas.height/2 - 100));
		// this.addGameObject(new Gold(650, this.canvas.height/2 - 100));
		// this.addGameObject(new Gold(300, this.canvas.height/2 - 110));
		// this.addGameObject(new Gem(985, this.canvas.height/2 - 90));


		// Create a player object and add it to the game
		const player = new Player(this.canvas.width * 0.15, this.canvas.height * 0.4);
		this.addGameObject(player);
		
		// Add the player UI object to the game
		this.addGameObject(new PlayerUI(10, 10));
		

		// Set the game's camera target to the player
		this.camera.target = player;
		
	}

	update() {

		// Segment duplicated from parent class, without it game would freeze on load. 
		// Call each game object's update method with the delta time.
		for (const gameObject of this.gameObjects) {
			gameObject.update(this.deltaTime);
		}
		// Filter out game objects that are marked for removal.
		this.gameObjects = this.gameObjects.filter(obj => !this.gameObjectsToRemove.includes(obj));
		// Clear the list of game objects to remove.
		this.gameObjectsToRemove = [];

		// Gets array of tiles to check if need to be removed. 
		const tiles = this.gameObjects.filter((obj) => obj instanceof Tile);

		for (const tile of tiles) {

			if (!tile.indestructable) {

				if (tile.getComponent(Health).HP <= 0) {

					
					
					this.removeGameObject(tile);

					if (tile instanceof GoldVein) {

						this.addGameObject(new Gold(
							tile.x + (tile.getComponent(Renderer).width / 2), 
							tile.y + (tile.getComponent(Renderer).height / 2)
						));

						// See collectable constructor for details.
						// console.log(//tile.x, tile.x + (tile.getComponent(Renderer).width / 2), 
						// tile.y, tile.y + (tile.getComponent(Renderer).height / 2))
					}

					if (tile instanceof GemVein) {

						this.addGameObject(new Gem(
							tile.x + (tile.getComponent(Renderer).width / 2), 
							tile.y + (tile.getComponent(Renderer).height / 2)
						));
					}

					this.gameObjects.unshift(new DirtBackground(tile.x, tile.y)) // Add background tile in place of dead tile. uses unshift to add it to the front. 

					

				}
			}
		}

		// Gets Array of attacks tp check for removal. 
		const attacks = this.gameObjects.filter((obj) => obj instanceof Attack);

		for (const attack of attacks) {

			if (attack.timeOut <= 0) {

				this.removeGameObject(attack);
			}
		}

		
		/**
		 * Replace player elements to top of stack to keep infront of level entities. 
		 * Solved by moving player creation to end of level creation. 
		 */

		//this.gameObjects.splice(this.gameObjects.indexOf((obj) => obj instanceof Player), 1, this.player);

	}
}

// Export the Level class as the default export of this module
export default Level;
 