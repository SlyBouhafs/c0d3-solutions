/*
 * write a function that takes in an array of numbers, and returns a new array of all duplicate numbers
 * @param {array} arr
 * @returns {array}
 */

const solution = (arr) => {
  const obj = arr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  console.log(obj);

  const filtered = Object.entries(obj).filter((el, i, arr) => {
    return el[1] > 1;
  });

  const map = filtered.map((el) => {
    return parseInt(el[0]);
  });
  console.log(map);

  return map;
};

module.exports = {
  solution,
};
