const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let array = [];
  for(let i = 0; i < domains.length; i++) {
      let domainsParst = domains[i].split('.').map(val => '.' + val);
      for(let j = domainsParst.length - 1; j > 0; j--) {
          if(j == domainsParst.length - 1) {
              array.push(domainsParst[j]);
          }
          domainsParst[j - 1] = domainsParst[j] + domainsParst[j - 1];
          array.push(domainsParst[j - 1]);
      }
  }

  array.sort((a, b) => a.length - b.length);

  let n = 1

  if(array.length == 2) {
    obj[array[0]] = n;
  }

  for(let i = 1; i < array.length; i++) {
      if(array[i - 1] == array[i]) {
          n++;
          obj[array[i - 1]] = n;
      } else {
          n = 1;
          obj[array[i]] = n;
      }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
