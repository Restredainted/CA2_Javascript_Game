// Create an Images object to hold the Image instances for the player and the enemy.
const Images = {
	player: new Image(), // The Image instance for the player.
	attack: new Image(), // The Image instance for the player Attack.
	enemy: new Image(), // The Image instance for the enemy.
	coin: new Image(), // The Image instance for gold coins.
	gem: new Image(), // The Image instance for gems.
	dirt: new Image(), // The Image instance for dirt.
	grass: new Image(), // The Image instance for grass.
	rock: new Image(), // The Image instance for rock.
	veinGold: new Image(), // The Image instance for gold veins.
	veinGem: new Image(), // The Image instance for gem veins. 
};

// Create an AudioFiles object to hold the file paths of the audio resources.
const AudioFiles = {
	jump: './resources/audio/jump.mp3', // The file path of the jump sound.
	collect: './resources/audio/collect.mp3', // The file path of the collect sound.
	// Add more audio file paths as needed
};

// Set the source of the player image.
Images.player.src = './resources/images/player/SP_Player.png'; // Update the image path

// Set the source of the player attack image. 
Images.attack.src = './resources/images/player/SP_Attack.png';

// Set the source of the enemy image.
Images.enemy.src = './resources/images/enemy/enemy.png'; // Update the image path

// Set the source of the gold coin.
Images.coin.src = './resources/images/Collectables/SP_Coin.png';

// Set the source of the Gem Image.
Images.gem.src = './resources/images/Collectables/SP_Gem.png';

// Set the source of the dirt Image.
Images.dirt.src = './resources/images/Terrain/SP_Dirt.png';

// Set the source of the grass Image.
Images.grass.src = './resources/images/Terrain/SP_Grass.png';

// Set the source of the Rock Image.
Images.rock.src = './resources/images/Terrain/SP_Rock.png';

// set the source of the gold vein Image.
Images.veinGold.src = './resources/images/Terrain/SP_VeinGold.png';

// Set the source of the gem vein Image.
Images.veinGem.src = './resources/images/Terrain/SP_VeinGem.png';


// Export the Images and AudioFiles objects so they can be imported and used in other modules.
export { Images, AudioFiles };
