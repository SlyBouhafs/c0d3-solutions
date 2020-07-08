/**
 * Write a function called solution that
 *   Takes in a number
 *   returns an array with the length equal to the input number
 *
 * Every element in the array must numbered with the correct index:
 *   0,1,2,3,4...
 * @param {number} num
 * @returns {array}
 */

const solution = (num, arr = []) => {
  if (num <= 0) return arr;
  arr.push(arr.length);
  return solution(num - 1, arr);
};

module.exports = {
  solution,
};
