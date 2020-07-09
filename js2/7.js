/**
 * Replicate Array.prototype.forEach and call it cForEach
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_forEach.asp
 */

const solution = () => {
  Array.prototype.cForEach = function (cb, i = 0, result = []) {
    if (i >= this.length) return result;
    result = cb(this[i], i, this);
    return this.cForEach(cb, i + 1, result);
  };
};

module.exports = {
  solution,
};

