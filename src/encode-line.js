const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  let result = '';

  if(str == result) {
    return result;
  }

  for(let i = 1; i < str.length; i++) {
      if(str[i - 1] == str[i]) {
          counter++;
      } else {
          if(counter !== 1) {
              result = result + counter + str[i - 1];
          } else {
              result = result + str[i - 1];
          }
          counter = 1;
      }
  }

  if(counter !== 1) {
    result = result + counter + str[str.length - 1];
  } else {
    result = result + str[str.length - 1];
  }
  
  return result;
}

module.exports = {
  encodeLine
};
