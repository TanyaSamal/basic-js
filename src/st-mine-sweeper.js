import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper ( matrix ) {
  let resultMatrix = [];
  matrix.map((el, i) =>
    resultMatrix[i] = el.slice());
  resultMatrix.map(item => item.fill(0));
  let width = matrix[0].length;
  let height = matrix.length;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
        if (matrix[row][col]) {
            if(row - 1 >= 0) resultMatrix[row - 1][col]++;
            if(row - 1 >= 0 && col - 1 >= 0) resultMatrix[row - 1][col - 1]++;
            if(row - 1 >= 0 && col + 1 < width) resultMatrix[row - 1][col + 1]++;
            if(col - 1 >= 0) resultMatrix[row][col - 1]++;
            if(col + 1 < width) resultMatrix[row][col + 1]++;
            if(row + 1 < height) resultMatrix[row + 1][col]++;
            if(row + 1 < height && col - 1 >= 0) resultMatrix[row + 1][col - 1]++;
            if(row + 1 < height && col + 1 < width) resultMatrix[row + 1][col + 1]++;
        }
    }
  }
  return resultMatrix;
}
