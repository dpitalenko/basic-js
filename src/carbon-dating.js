const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  const LOG_2 = 0.693;
 
  if(typeof sampleActivity == 'string' && Number(sampleActivity) > 0 && Number(sampleActivity) < 15) {
    const K = LOG_2 / HALF_LIFE_PERIOD;
    const T = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / K);
    return T;
  } else {
    return false
  }
}

module.exports = {
  dateSample
};
