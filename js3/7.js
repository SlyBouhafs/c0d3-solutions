/*
 * write a map function for objects
 * @param {callback} cb
 * @returns {number}
 */

const solution = () => {
  Object.prototype.map = function (
    cb,
    i = 0,
    array = Object.keys(this),
    result = []
  ) {
    if (i === array.length) return result;
    result.push(cb(array[i], this[array[i]], i, this));
    return this.map(cb, i + 1, array, result);
  };
};

module.exports = {
  solution,
};
