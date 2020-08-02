/**
 * given arr of strings (keys) and an object, return an array of values.
 * @param {array} arr {object} obj
 * @returns {array} arr
 */

const solution = (arr, obj, result = []) => {
  arr.forEach((el, i) => {
    if (obj[el]) return result.push(obj[el]);
  });
  return result;
};

module.exports = {
  solution,
};
