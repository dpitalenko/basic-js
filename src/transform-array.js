const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let check = 0;
  let copyArr = arr;
  let copyArrResult = arr;
  if(Array.isArray(arr)) {
    
  for(let i = 0; i < copyArr.length; i++) {
      if(copyArr[i - check] === '--double-next') {
          if(check > 0) {
              copyArrResult.splice(i - check, 1);
          } else {
              if(i != copyArr.length - 1) {
                  copyArrResult[i] = copyArr[i + 1];
              } 
              else copyArrResult.pop();   
          }
      }
      if(copyArr[i - check] === '--double-prev') {
          if(check > 0) {
              copyArrResult.splice(i - check, 1);
              check = 1;
          } else {
              if(i > 0) {
                  console.log(i)
                  copyArrResult[i] = copyArr[i - 1];
              }
              else copyArrResult.shift();   
          }
          
      }
      if(copyArr[i - check] === '--discard-next') {
          if(check > 0){
              copyArrResult.splice(i - check, 1);
          } else {
              if(i != copyArr.length - 1) {
                  copyArrResult.splice(i, 2);
                  check = 2;
              }
              else copyArrResult.pop();   
          }    
      }
      if(copyArr[i - check] === '--discard-prev') {
          if(check > 0){
              copyArrResult.splice(i - check, 1);
          } else {
              if(i > 0) {
                  copyArrResult.splice(i - 1, 2);
                  check = 2;
              } 
              else copyArrResult.shift();   
          }    
      } 
  }
  return copyArrResult;
} else {
  throw new Error("'arr' parameter must be an instance of the Array!");
}
}

module.exports = {
  transform
};
