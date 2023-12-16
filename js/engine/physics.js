// Import the required modules and classes.
import Component from './component.js';
import Renderer from './renderer.js';
//import { collisionDirection } from './direction.js'; //Tried to create an overloaded icColliding method using an enum for which direction, but JS enums are very odd. 



// The Physics class extends Component and handles the physics behavior of a game object.
class Physics extends Component {
	
	// The constructor initializes the physics component with optional initial velocity, acceleration, and gravity.
	constructor(velocity = { x: 0, y: 0 }, acceleration = { x: 0, y: 0 }, gravity = { x: 0, y: 750 }) {
		super(); // Call the parent constructor.
		this.velocity = velocity; // Initialize the velocity.
		this.acceleration = acceleration; // Initialize the acceleration.
		this.gravity = gravity; // Initialize the gravity.
	}

	// The update method handles how the component's state changes over time.
	update(deltaTime) {
		// Update velocity based on acceleration and gravity.
		this.velocity.x += this.acceleration.x * deltaTime;
		this.velocity.y += (this.acceleration.y + this.gravity.y) * deltaTime;
		// Move the game object based on the velocity.
		this.gameObject.x += this.velocity.x * deltaTime;
		this.gameObject.y += this.velocity.y * deltaTime;
	}

	/**
	 * The isColliding method checks for the collisions of the game objects.
	 * Overload includes direction as enum TOP, LEFT or RIGHT to check specific directional collisions without conflicting with normal body collisions.
	 * @param otherPhysics an other physics object to compare against.
	 * @param direction enum to indicate which side of the game object to check for collisions. 
	 */
	isColliding(otherPhysics) {
		// Get the bounding boxes of both game objects.
		const [left, right, top, bottom] = this.getBoundingBox();
		const [otherLeft, otherRight, otherTop, otherBottom] = otherPhysics.getBoundingBox();

		// Check if the bounding boxes overlap. If they do, return true. If not, return false.
		return left < otherRight && right > otherLeft && top < otherBottom && bottom > otherTop;
	}


	// The getBoundingBox method returns the bounding box of the game object in terms of its left, right, top, and bottom edges.
	getBoundingBox() {
		// Get the Renderer component of the game object to get its width and height.
		const renderer = this.gameObject.getComponent(Renderer);
		// Calculate the left, right, top, and bottom edges of the bounding box.
		const left = this.gameObject.x;
		const right = this.gameObject.x + renderer.width;
		const top = this.gameObject.y;
		const bottom = this.gameObject.y + renderer.height;

		// Return the bounding box.
		return [left, right, top, bottom];
	}


	
	
	isCollidingTop(otherPhysics) {

		// Get the bounding boxes of both game objects.
		const [left, right, top, bottom] = this.getBoundingBoxTop();
		const [otherLeft, otherRight, otherTop, otherBottom] = otherPhysics.getBoundingBox();

		// Check if the bounding boxes overlap. If they do, return true. If not, return false.
		return left < otherRight && right > otherLeft && top < otherBottom && bottom > otherTop;
	}

	/**
	 * The getBoundingBoxTop method returns the top side as a bounding box of the game object in terms of its left, right, top, and bottom edges.
	 */
	getBoundingBoxTop() {
		// Get the Renderer component of the game object to get its width and height.
		const renderer = this.gameObject.getComponent(Renderer);
		// Calculate the left, right, top, and bottom edges of the bounding box.

        /* The calculations here, create a small box 10% of the size of the object it is attached to, which is created then at the objects feet. 
        * this provided me more accurate ground check collision and using this method with how I changed the ]]
        * groundCheck removed the jittering due to gravity while on the ground. which resulted in lines appearing horizontally between tiles. 
        * */
		const left = this.gameObject.x + renderer.width * 0.1;
		const right = this.gameObject.x + renderer.width * 0.9;
		const top = this.gameObject.y;
		const bottom = this.gameObject.y + renderer.height * 0.1;

		// Return the bounding box.
		return [left, right, top, bottom];
	}

	/**
	 * The isCollidingLeft method checks for the collisions at the left of the game object.
	 */
	isCollidingLeft(otherPhysics) {
		// Get the bounding boxes of both game objects.
		const [left, right, top, bottom] = this.getBoundingBoxLeft();
		const [otherLeft, otherRight, otherTop, otherBottom] = otherPhysics.getBoundingBox();

		// Check if the bounding boxes overlap. If they do, return true. If not, return false.
		return left < otherRight && right > otherLeft && top < otherBottom && bottom > otherTop;
	}

	/**
	 * The getBoundingBoxLeft method returns the left side as a bounding box of the game object in terms of its left, right, top, and bottom edges.
	 */
	getBoundingBoxLeft() {
		// Get the Renderer component of the game object to get its width and height.
		const renderer = this.gameObject.getComponent(Renderer);
		// Calculate the left, right, top, and bottom edges of the bounding box.

        /* The calculations here, create a small box 10% of the size of the object it is attached to, which is created then at the objects feet. 
        * this provided me more accurate ground check collision and using this method with how I changed the ]]
        * groundCheck removed the jittering due to gravity while on the ground. which resulted in lines appearing horizontally between tiles. 
        * */
		const left = this.gameObject.x;
		const right = this.gameObject.x + renderer.width * 0.1;
		const top = this.gameObject.y + renderer.height * 0.1;
		const bottom = this.gameObject.y + renderer.height * 0.9;

		// Return the bounding box.
		return [left, right, top, bottom];
	}

	/**
	 * The isCollidingRight method checks for the collisions at the left of the game object.
	 */
	isCollidingRight(otherPhysics) {
		// Get the bounding boxes of both game objects.
		const [left, right, top, bottom] = this.getBoundingBoxRight();
		const [otherLeft, otherRight, otherTop, otherBottom] = otherPhysics.getBoundingBox();

		// Check if the bounding boxes overlap. If they do, return true. If not, return false.
		return left < otherRight && right > otherLeft && top < otherBottom && bottom > otherTop;
	}

	/**
	 * The getBoundingBoxRight method returns the Right side as a bounding box of the game object in terms of its left, right, top, and bottom edges.
	 */
	getBoundingBoxRight() {
		// Get the Renderer component of the game object to get its width and height.
		const renderer = this.gameObject.getComponent(Renderer);
		// Calculate the left, right, top, and bottom edges of the bounding box.

        /* The calculations here, create a small box 10% of the size of the object it is attached to, which is created then at the objects feet. 
        * this provided me more accurate ground check collision and using this method with how I changed the ]]
        * groundCheck removed the jittering due to gravity while on the ground. which resulted in lines appearing horizontally between tiles. 
        * */
		const left = this.gameObject.x + renderer.width * 0.9;
		const right = this.gameObject.x + renderer.width;
		const top = this.gameObject.y + renderer.height * 0.1;
		const bottom = this.gameObject.y + renderer.height * 0.9;

		// Return the bounding box.
		return [left, right, top, bottom];
	}
}

// The Physics class is then exported as the default export of this module.
export default Physics;
