import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum( matrix ) {
  let zeroIndex = [];
  let sum = 0;
  matrix.forEach(arr => {
    arr.forEach((item, idx) => {
      if (!zeroIndex.includes(idx)) {
        sum += item;
      }
    }); 
    zeroIndex = [];
    arr.forEach((item, idx) => {
      if (item == 0) zeroIndex.push(idx);
    });
  })
  return sum;
}
