/*
 * Write a function that takes in an object and a number (millieseconds).
 * - You must call each function value of the object {"nVal": (k) => {...}}
 * - {"nVal": (k) => {...When this function runs, k is "nVal"...}}
 * @param {object} obj
 * @param {number} num (millieseconds)
 * @call each function value of the object, millieseconds after each other
 */

const solution = (obj, num, arr = Object.keys(obj), i = 0) => {
  if (i === arr.length) return;
  obj[arr[i]](arr[i]);
  setTimeout(() => {
    solution(obj, num, arr, i + 1);
  }, num);
};

module.exports = {
  solution,
};
