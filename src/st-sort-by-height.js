import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight( arr ) {
  let result = arr.filter(item => item !== -1);
  let sorted = result.sort((a, b) => a - b);
  let index = -1;
  return arr.map(item => {
    if (item == -1) return -1;
    else {
      index++;
      return sorted[index];
    }
  });
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
