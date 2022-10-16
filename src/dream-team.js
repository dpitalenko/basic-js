const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(Array.isArray(members)) {
    let filterMembers = members.filter(value => typeof value == 'string' ? value: '');
    return filterMembers.length == 0 ? false : filterMembers.map(val => val.trim().toUpperCase()[0]).sort().join('');
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
