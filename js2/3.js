/**
 * Write a function called solution that
 *   Takes in 2 numbers and
 *   returns an array with the length equal to the first input number.
 *     Every element in the returned array is an array,
 *        with length equal to  the second input number.
 *     All values in the array is 0.
 * @param {number} row
 * @param {number} col
 * @returns {array}
 */

const zeroArray = (col, arr = []) => {
  if (col > 0) {
    arr.push(0);
    return zeroArray(col - 1, arr);
  }
  return arr;
};

const solution = (row, col, arr = []) => {
  // Not the best way but it does the job!
  if (row <= 0) {
    return arr;
  }
  arr[arr.length] = zeroArray(col);

  return solution(row - 1, col, arr);
};

module.exports = {
  solution,
};

