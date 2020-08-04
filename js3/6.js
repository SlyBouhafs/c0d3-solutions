/*
 * write a function that takes in an array of numbers, and returns a new array of all duplicate numbers
 * @param {array} arr
 * @returns {array}
 */

const solution = (arr) => {
  const obj = {};
  return arr.reduce((acc, el) => {
    if (obj[el] === 1) acc.push(el);
    obj[el] = (obj[el] || 0) + 1;
    return acc;
  }, []);
};

module.exports = {
  solution,
};
