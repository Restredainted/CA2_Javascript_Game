/**
 * Clamps a number between the input minimum and maximum values. 
 * @param {number} num The number to check.
 * @param {number} min The minimum permitted.
 * @param {number} max The maximum allowed value. 
 * 
 * Code available from: 
 * https://stackoverflow.com/questions/11409895/whats-the-most-elegant-way-to-cap-a-number-to-a-segment
 */
export function clamp(num, min, max) {

	return Math.min(Math.max(num, min), max);
}