/**
 * Compare a and b, return true if they are within epsilon of each other.
 * Used to avoid floating point errors.
 * @param a Operand.
 * @param b Operand.
 * @param epsilon The maximum difference between a and b.
 */
export const epsilonCompare = (a: number, b: number, epsilon = 0.0001) =>
  Math.abs(a - b) < epsilon

/**
 * Truncate (not round) a floating point number to a certain precision.
 * @param n The number to truncate.
 * @param digits The number of decimal places to keep.
 */
export const truncateFloat = (n: number, digits = 2) =>
  parseFloat(n.toFixed(digits))
