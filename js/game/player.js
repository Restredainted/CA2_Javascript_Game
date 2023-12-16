// Importing necessary components and resources
import GameObject from '../engine/gameobject.js';
import Renderer from '../engine/renderer.js';
import Physics from '../engine/physics.js';
import Input from '../engine/input.js';
import { Images } from '../engine/resources.js';
import Enemy from './enemy.js';
import Tile from './Terrain/tile.js';
import Collectable from './collectable.js';
import ParticleSystem from '../engine/particleSystem.js';
import Health from '../engine/health.js';
import Raycast from '../engine/raycast.js';
import Attack from './attack.js';

// Defining a class Player that extends GameObject
class Player extends GameObject {
	// Constructor initializes the game object and add necessary components
	constructor(x, y) {
		super(x, y); // Call parent's constructor

		this.renderer = new Renderer('blue', Images.player.width, Images.player.height, Images.player); // Add renderer
		this.addComponent(this.renderer);
		this.addComponent(new Physics({ x: 0, y: 0 }, { x: 0, y: 0 })); // Add physics
		this.addComponent(new Input()); // Add input for handling user input
		this.health = new Health(10);
		this.addComponent(this.health);
		this.groundCheck = (new Raycast());
		this.addComponent(this.groundCheck);
		this.spawn = {x: this.x, y: this.y}; // sets a specific spawn point for out of bounds or death. 
		// const spawnX = this.x;
		// const spawnY = spawn.x;
		

		// Initialize all the player specific properties
		this.direction = 1;
		this.score = 0;
		this.isOnGround = false;
		this.isJumping = false;
		this.jumpForce = 500;
		this.jumpTime = 0.3;
		this.jumpTimer = 0;
		this.isInvulnerable = false;
		this.regenDelay = true;
		this.attackDelay = 1;
		this.isGamepadMovement = false;
		this.isGamepadJump = false;
	}

	// The update function runs every frame and contains game logic
	update(deltaTime) {
		const physics = this.getComponent(Physics); // Get physics component
		const input = this.getComponent(Input); // Get input component

		this.handleGamepadInput(input);
		

		// Passive health regeneration for the player. 
		if (this.health.HP < this.health.maxHP) {

			if(!this.isInvulnerable) {

				if (!this.regenDelay) {

					console.log("PassiveHeal")
					this.health.heal(1);
					// setInterval(this.health.heal(1), 10000); // setInterval is not working as expected and just runs every update.

					this.setRegenDelay();
				}
			}
		}

		// Handle player movement
		if (!this.isGamepadMovement && input.isKeyDown('KeyD')) {

			physics.velocity.x = 150;
			this.direction = -1;
		} 

		else if (!this.isGamepadMovement && input.isKeyDown('KeyA')) {

			physics.velocity.x = -150;
			this.direction = 1;
		} 

		else if (!this.isGamepadMovement) {

			physics.velocity.x = 0;
		}

		// Handle player attack
		if (this.attackDelay <= 0) {

			if (!this.gamepadMovement && input.isKeyDown('ArrowUp')) {

				this.spawnAttack(0);
			}

			else if (!this.gamepadMovement && input.isKeyDown('ArrowDown')) {

				this.spawnAttack(1);
			}

			else if (!this.gamepadMovement && input.isKeyDown('ArrowRight')) {

				this.spawnAttack(2);
			}

			else if (!this.gamepadMovement && input.isKeyDown('ArrowLeft')) {

				this.spawnAttack(3);
			}

			
		}

		else this.attackDelay -= deltaTime;


		// Handle player jumping
		if (!this.isGamepadJump && input.isKeyDown('Space') && this.isOnGround) {

			this.startJump();
		}

		if (this.isJumping) {

			this.updateJump(deltaTime);
		}

		// Handle collisions with collectables
		const collectables = this.game.gameObjects.filter((obj) => obj instanceof Collectable);

		for (const collectable of collectables) {

			if (physics.isColliding(collectable.getComponent(Physics))) {

				this.collect(collectable);
				this.game.removeGameObject(collectable);
			}
		}

		// Handle collisions with enemies
		const enemies = this.game.gameObjects.filter((obj) => obj instanceof Enemy);

		for (const enemy of enemies) {

			if (physics.isColliding(enemy.getComponent(Physics))) {

				this.collidedWithEnemy();
			}
		}
		// console.log(this.isOnGround);

		// Handle collisions with tiles
		this.isOnGround = false;  // Reset this before checking collisions with tiles

		//Was used trying to figure out a fix for the physics always puut on top issue. 
		if(!this.isOnGround) {

		 	physics.gravity.y = 750;
		 }

		const tiles = this.game.gameObjects.filter((obj) => obj instanceof Tile);

		for (const tile of tiles) {

			if (this.groundCheck.isColliding(tile.getComponent(Physics))) {

				if (!this.isJumping) {

					physics.velocity.y = 0;
					physics.acceleration.y = 0;
					physics.gravity.y = 0;
					this.y = tile.y - this.renderer.height;
					this.isOnGround = true;
				}
			}

			// Compares collisions for the top of the player to detect if a roof is touched. 
			if (physics.isCollidingTop(tile.getComponent(Physics))) {

				physics.velocity.y = 0;
				this.y = tile.y + tile.getComponent(Renderer).height;
			}

			// Compares collisions for the sides of the player to detect if a wall has been touched. 
			if (physics.isCollidingLeft(tile.getComponent(Physics))) {

				physics.velocity.x = 0;
				this.x = tile.x + tile.getComponent(Renderer).width * 1.01; // Multiplied by 1.01 to prevent getting stuck in the wall. 
			}

			if (physics.isCollidingRight(tile.getComponent(Physics))) {

				physics.velocity.x = 0;
				this.x = tile.x - this.renderer.width * 1.01;// Multiplied by 1.01 to prevent getting stuck in the wall. 
			}
		}



		// Check if player has fallen off the bottom of the screen
		// Or off the screen edges. 
		if (this.y > this.game.canvas.height * 4 || this.x <= - 32 || this.x >= this.game.canvas.width + 32) {

			this.resetPlayerState();
		}

		// Check if player has any health left
		if (this.health.HP <= 0) {

			console.log("Player died");
			location.reload();
		}

		// Check if player has collected all collectables
		if (this.score >= 9) {

			console.log('You win!');
			location.reload();
		}

		super.update(deltaTime);
	}

	handleGamepadInput(input){

		const gamepad = input.getGamepad(); // Get the gamepad input
		const physics = this.getComponent(Physics); // Get physics component

		if (gamepad) {

			// Reset the gamepad flags
			this.isGamepadMovement = false;
			this.isGamepadJump = false;

			// Handle movement
			const horizontalAxis = gamepad.axes[0];
			// Move right
			if (horizontalAxis > 0.1) {

				this.isGamepadMovement = true;
				physics.velocity.x = 100;
				this.direction = -1;
			} 

			// Move left
			else if (horizontalAxis < -0.1) {

				this.isGamepadMovement = true;
				physics.velocity.x = -100;
				this.direction = 1;
			} 

			// Stop
			else {

				physics.velocity.x = 0;
			}
			
			// Handle jump, using gamepad button 0 (typically the 'A' button on most gamepads)
			if (input.isGamepadButtonDown(0) && this.isOnGround) {

				this.isGamepadJump = true;
				this.startJump();
			}
		}
	}

	startJump() {
		// Initiate a jump if the player is on a tile
		if (this.isOnGround) { 

			this.isJumping = true;
			this.jumpTimer = this.jumpTime;
			this.getComponent(Physics).velocity.y = -this.jumpForce;
			this.isOnGround = false;
		}
	}

	updateJump(deltaTime) {

		// Updates the jump progress over time
		this.jumpTimer -= deltaTime;

		if (this.jumpTimer <= 0 || this.getComponent(Physics).velocity.y > 0) {

			this.isJumping = false;
		}
	}

	collidedWithEnemy() {

		// Checks collision with an enemy and reduce player's life if not invulnerable
		if (!this.isInvulnerable) {

			this.health.damage(3);
			this.isInvulnerable = true;

			// Make player vulnerable again after 2 seconds
			setTimeout(() => {
				this.isInvulnerable = false; 
			}, 1500);

			this.setRegenDelay(3000);
		}
	}

	// Create entity of player attack. 
	spawnAttack(direction = 0) {

		switch (direction) {

			case 0: {

				//console.log("Attack upwards"); // Debug Output
				this.game.addGameObject(new Attack(
					this.x + this.renderer.width / 2 - Images.attack.width / 2 ,
					this.y - Images.attack.height,
					1 ));
				break;
			}

			case 1: {

				//console.log("Attack downwards"); // Debug Output
				this.game.addGameObject(new Attack(
					this.x + this.renderer.width / 2 - Images.attack.width / 2 ,
					this.y + this.renderer.height,
					1 ));
				break;
			}

			case 2: {

				//console.log("Attack right"); // Debug Output
				this.game.addGameObject(new Attack(
					this.x + this.renderer.width,
					this.y + this.renderer.height / 2 - Images.attack.height / 2,
					1 ));
				break;
			}

			case 3: {

				//console.log("Attack left"); // Debug Output
				this.game.addGameObject(new Attack(
					this.x - Images.attack.height ,
					this.y + this.renderer.height / 2 - Images.attack.height / 2,
					1 ));
				break;
			}
		}

		this.attackDelay = 1;
	}


	// Delays regeneration to make combat more challenging. 
	// Could have generalized this to include the invincibilty time after damage, but decided against it. 
	setRegenDelay(x = 1000) {

		this.regenDelay = true;

		setTimeout(() => {
			this.regenDelay = false;
		}, x);
	}
	
	collect(collectable) {
		// Handle collectable pickup
		this.score += collectable.value;
		console.log(`Score: ${this.score}`);
		this.emitCollectParticles(collectable);
	}

	emitCollectParticles() {
		// Create a particle system at the player's position when a collectable is collected
		const particleSystem = new ParticleSystem(this.x, this.y, 'yellow', 20, 1, 0.5);
		this.game.addGameObject(particleSystem);
	}

	resetPlayerState() {
		// Reset the player's state, repositioning it and nullifying movement
		// this.x = this.game.canvas.width / 2;
		// this.y = this.game.canvas.height / 2;
		this.x = this.spawn.x;
		this.y = this.spawn.y;
		this.getComponent(Physics).velocity = { x: 0, y: 0 };
		this.getComponent(Physics).acceleration = { x: 0, y: 0 };
		this.direction = 1;
		this.isOnGround = false;
		this.isJumping = false;
		this.jumpTimer = 0;
	}

	resetGame() {
		// Reset the game state, which includes the player's state
		this.health.HP = this.health.maxHP;
		this.score = 0;
		this.resetPlayerState();
	}
}

export default Player;
