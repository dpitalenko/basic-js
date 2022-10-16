const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = n.toString().split('');
  let index = [];

  for(let i = 1; i < array.length; i++) {
      if(array[i - 1] < array[i]) {
          index.push(i - 1);
      }
  }

  if(index.length == 0) {
    array.pop()
    return Number(array.join(''));
  }

  return Number(array.filter((value, i) => i == index[0] ? '' : value ).join(''));
}

module.exports = {
  deleteDigit
};
