import { NotImplementedError } from '../extensions/index.js';

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

 function isFloat(n) {
  return n === +n && n !== (n|0);
}

function isInteger(n) {
  return n === +n && n === (n|0);
}

export default function dateSample( sampleActivity ) {
  if (arguments.length == 0 || typeof sampleActivity !== 'string' || sampleActivity.trim() == '') {
    return false;
  } else {
    let num = Number(sampleActivity);
    if ((Number.isInteger(num) || (!Number.isInteger(num) && isFloat(num))) && (num < 15 && num > 0)) {
      return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
    } else 
    {
      return false;
    }
  }
}
