import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats( domains ) {
  let resultObj = {};
  domains.forEach(item => {
    let arrDomains = [];
    let posDot = item.length;
    let foundPos = 0;
    while(foundPos !== -1) {
      foundPos = item.lastIndexOf('.', posDot);
      let domainName = item.slice(foundPos + 1, posDot + 1);
      posDot = foundPos - 1;
      arrDomains.push(domainName);
      let flag = false;
      for (let key of Object.keys(resultObj)) {
        if (key == `.${arrDomains.join('.')}`){
          flag = true;
          resultObj[key]++;
        }
      }
	  if (!flag) resultObj[`.${arrDomains.join('.')}`] = 1;
    }

  });
  
return resultObj;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
