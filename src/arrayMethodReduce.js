'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback = getSumm, initialValue) {
    let startIndex = 0;
    let prev = initialValue;

    if (arguments.length < 2) {
      startIndex = 1;
      prev = this[0];
    }

    for (let i = startIndex; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };

  const getSumm = (prev, item, index, arr) => {
    return item + prev;
  };
}

module.exports = applyCustomReduce;
