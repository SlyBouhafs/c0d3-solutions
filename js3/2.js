/**
 * takes in 2 integers, create 2d array of objects. First integer represents how many nested arrays within the array. Second integer represents how many objects within each array.
 * solution(4,2)
 * returns:
 * [
    [{x: 0, y: 0}, {x: 1, y: 0}],
    [{x: 0, y: 1}, {x: 1, y: 1}],
    [{x: 0, y: 2}, {x: 1, y: 2}],
    [{x: 0, y: 3}, {x: 1, y: 3}],
  ]
 * @param {integer} num1 {integer} num2
 * @return {array} arr
 */

const make1dObj = (rows, y, x = 0, arr = []) => {
  if (rows > 0) {
    arr.push({ x: x, y: y });
    return make1dObj(rows - 1, y, x + 1, arr);
  }
  return arr;
};

const solution = (cols, rows, y = 0, arr = []) => {
  if (cols > 0) {
    arr[arr.length] = make1dObj(rows, y);
    solution(cols - 1, rows, y + 1, arr);
    y = 0;
  }
  return arr;
};

module.exports = {
  solution,
};
