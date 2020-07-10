/**
 * Write a function called solution that
 *   that takes in an array of functions and a number,
 *     and calls each function input milliseconds after another
 * @param {array} arr
 * @param {number} time
 */

const solution = (arr, time, i = 0, n = 1) => {
  if (i >= arr.length) return;
  setTimeout(() => {
    arr[i]();
  }, time * n);
  return solution(arr, time, i + 1, n + 1);
};

module.exports = {
  solution,
};

