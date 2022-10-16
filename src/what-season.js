const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const SEASONS = ['winter', 'spring', 'summer', 'autumn'];
  const INVALID = 'Invalid date!';
  const ERROR = 'Unable to determine the time of year!';

  if (!date) {
    return ERROR;
  } 

  if (!(date instanceof Date) || date.toString !== new Date().toString) {
    throw new Error(INVALID);
  } 

  if(date.getMonth() >= 0) {
    if(date.getMonth() == 11 || date.getMonth() < 2) {
      return SEASONS[0];
    } 
    if(date.getMonth() < 5) {
      return SEASONS[1];
    } 
    if(date.getMonth() < 8) {
      return SEASONS[2];
    } 
    if(date.getMonth() < 11) {
      return SEASONS[3];
    } 
  }

  return ERROR;
}

module.exports = {
  getSeason
};
