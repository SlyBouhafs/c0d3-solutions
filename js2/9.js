/**
 * Replicate Array.prototype.reduce and call it cReduce
 * Documentation:
 *     Replicate Array.prototype.reduce and call it cReduce
 */

const solution = () => {
  Array.prototype.cReduce = function (cb, init, i = 0) {
    if (i >= this.length) return init;
    if (!init) return this.cReduce(cb, this[0], 1);
    init = cb(init, this[i], i, this);
    return this.cReduce(cb, init, i + 1);
  };
};

module.exports = {
  solution,
};

