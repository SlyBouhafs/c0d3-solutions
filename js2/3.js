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

const solution = (row, col, arr = [[]], ccol = col) => {
  // Not the best way but it does the job!
  if (row === 0) {
    arr.pop();
    return arr;
  }

  if (row > 0) {
    if (col > 0) {
      arr[arr.length - 1].push(0);
      return solution(row, col - 1, arr, ccol);
    }
    arr.push([]);
    return solution(row - 1, (col = ccol), arr, ccol);
  }
};

module.exports = {
  solution,
};

