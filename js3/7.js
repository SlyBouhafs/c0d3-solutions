/*
 * write a map function for objects
 * @param {callback} cb
 * @returns {number}
 */

const solution = () => {
  Object.prototype.map = function (cb, array = Object.keys(this)) {
    return array.map((key, i) => {
      return cb(key, this[key], i);
    });
  };
};

module.exports = {
  solution,
};
