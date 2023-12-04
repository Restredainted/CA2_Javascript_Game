// Create an Images object to hold the Image instances for the player and the enemy.
const Images = {
	player: new Image(), // The Image instance for the player.
	enemy: new Image(), // The Image instance for the enemy.
	coin: new Image(), // The Image instance for Gold Coins.
	gem: new Image(), // The Image instance for Gems.
};

// Create an AudioFiles object to hold the file paths of the audio resources.
const AudioFiles = {
	jump: './resources/audio/jump.mp3', // The file path of the jump sound.
	collect: './resources/audio/collect.mp3', // The file path of the collect sound.
	// Add more audio file paths as needed
};

// Set the source of the player image.
Images.player.src = './resources/images/player/player.png'; // Update the image path

// Set the source of the enemy image.
Images.enemy.src = './resources/images/enemy/enemy.png'; // Update the image path

// Set the source of the gold coin.
Images.coin.src = './resources/images/Collectables/SP_Coin.png'

// Set the source of the Gem Image.
Images.gem.src = './resources/images/Collectables/SP_Gem.png'


// Export the Images and AudioFiles objects so they can be imported and used in other modules.
export { Images, AudioFiles };
