const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let obj1 = {};
  let obj2 = {};
  let counter = 1;

  for(let i = 1; i < s1.length; i++) {
    if(s1[i - 1] == s1[i]) {
        counter++;
    } else {
        if(counter !== 1) obj1[s1[i - 1]] = [counter];
        else obj1[s1[i - 1]] = [1];
        counter = 1;
    }
  }
  
  if(counter !== 1) obj1[s1[s1.length - 1]] = [counter];
  else obj1[s1[s1.length - 1]] = [1];

  for(let i = 1; i < s2.length; i++) {
    if(s2[i - 1] == s2[i]) {
        counter++;
    } else {
        if(counter !== 1) obj2[s2[i - 1]] = [counter];
        else obj2[s2[i - 1]] = [1];
        counter = 1;
    }
  }

  if(counter !== 1) obj2[s2[s2.length - 1]] = [counter];
  else obj2[s2[s2.length - 1]] = [1];



  function symbolCounter(object1, object2) {
    const props1 = Object.getOwnPropertyNames(object1);
    const props2 = Object.getOwnPropertyNames(object2);
    let sum = 0;

    for (let i = 0; i < props1.length; i++) {
        for (let j = 0; j < props2.length; j++) {
            if(props1[i] == props2[j]) {
                sum = sum + Number(Number(object1[props1[i]]) > Number(object2[props2[j]]) ? object2[props2[j]] : object1[props1[i]]);
            }
        }
    }
    return sum;
  }
  
  return symbolCounter(obj1, obj2)
}

module.exports = {
  getCommonCharacterCount
};
