// Create an Images object to hold the Image instances for the player and the enemy.
const Images = {
	player: new Image(), // The Image instance for the player.
	attack: new Image(), // The Image instance for the player Attack.
	enemy: new Image(), // The Image instance for the enemy.
	coin: new Image(), // The Image instance for gold coins.
	gem: new Image(), // The Image instance for gems.
	dirt1: new Image(), // The Image instance for a dirt variant.
	dirt2: new Image(), // The Image instance for a dirt variant.
	dirt3: new Image(), // The Image instance for a dirt variant.
	grass1: new Image(), // The Image instance for a grass variant.
	grass2: new Image(), // The Image instance for a grass variant.
	grass3: new Image(), // The Image instance for a grass variant.
	rock1: new Image(), // The Image instance for a rock variant.
	rock2: new Image(), // The Image instance for a rock variant.
	veinGold1: new Image(), // The Image instance for a gold vein variant.
	veinGold2: new Image(), // The Image instance for a gold vein variant.
	veinGold3: new Image(), // The Image instance for a gold vein variant.
	veinGem1: new Image(), // The Image instance for a gem vein variant. 
	veinGem2: new Image(), // The Image instance for a gem vein variant. 
	veinGem3: new Image(), // The Image instance for a gem vein variant. 
	dirtBackground1: new Image(), // image for a dug tile background fill variant. 
	dirtBackground2: new Image(), // image for a dug tile background fill variant. 
	dirtBackground3: new Image(), // image for a dug tile background fill variant. 
	well: new Image(), // The Image for the well side walls.
	wellBackground: new Image(), // The Image for the well back wall. 
	cabin: new Image(), // The Image instance for the cabin.
	cloud: new Image(), // The Image instance for clouds. 
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

// Set the source of the dirt Image variants.
Images.dirt1.src = './resources/images/Terrain/SP_Dirt_1.png';
Images.dirt2.src = './resources/images/Terrain/SP_Dirt_2.png';
Images.dirt3.src = './resources/images/Terrain/SP_Dirt_3.png';

// Set the source of the grass Image variants.
Images.grass1.src = './resources/images/Terrain/SP_Grass_1.png';
Images.grass2.src = './resources/images/Terrain/SP_Grass_2.png';
Images.grass3.src = './resources/images/Terrain/SP_Grass_3.png';

// Set the source of the Rock Image variants.
Images.rock1.src = './resources/images/Terrain/SP_Rock_1.png';
Images.rock2.src = './resources/images/Terrain/SP_Rock_2.png';

// set the source of the gold vein Image variants.
Images.veinGold1.src = './resources/images/Terrain/SP_Vein_Gold_1.png';
Images.veinGold2.src = './resources/images/Terrain/SP_Vein_Gold_2.png';
Images.veinGold3.src = './resources/images/Terrain/SP_Vein_Gold_3.png';

// Set the source of the gem vein Image variants.
Images.veinGem1.src = './resources/images/Terrain/SP_Vein_Gem_1.png';
Images.veinGem2.src = './resources/images/Terrain/SP_Vein_Gem_2.png';
Images.veinGem3.src = './resources/images/Terrain/SP_Vein_Gem_3.png';

// Set the srouce of the dirt background Image variants. 
Images.dirtBackground1.src = './resources/images/Terrain/SP_Dirt_Background_1.png';
Images.dirtBackground2.src = './resources/images/Terrain/SP_Dirt_Background_2.png';
Images.dirtBackground3.src = './resources/images/Terrain/SP_Dirt_Background_3.png';

// Set the srouce of the well wall Image. 
Images.well.src = './resources/images/Terrain/SP_Well_Wall.png';

// Set the source of the well background Image. 
Images.wellBackground.src = './resources/images/Terrain/SP_Well_Background.png';

// Set the source of the cabin Image. 
Images.cabin.src = './resources/images/terrain/SP_Cabin.png';

// Set the source image of the cloud Image.
Images.cloud.src = './resources/images/Terrain/SP_Clouds.png';

// Export the Images and AudioFiles objects so they can be imported and used in other modules.
export { Images, AudioFiles };
