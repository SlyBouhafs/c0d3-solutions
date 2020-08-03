/*
 * 2sum: write a function that takes in an array of numbers and a number, and returns true if any pairs add up to the number. (No duplicates)
 * @param {array} arr
 * @param {number} num
 * @returns {boolean}
 */

const solution = (arr, num) => {
  const obj = {};
  return (
    arr.find((el) => {
      if (obj[num - el]) return obj[num - el];
      obj[el] = true;
    }) !== undefined
  );
};

module.exports = {
  solution,
};
