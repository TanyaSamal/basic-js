import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason( inputDate ) {
  if (inputDate === '' || arguments.length == 0) return 'Unable to determine the time of year!';
  try{
    if (inputDate.toUTCString() !== '' ) {
      let month = inputDate.toDateString().split(' ')[1];
      switch(month) {
        case 'Dec':
        case 'Jan':
        case 'Feb':
            return 'winter';
        break;
        case 'Mar':
        case 'Apr':
        case 'May':
            return 'spring';
        break;
        case 'Jun':
        case 'Jul':
        case 'Aug':
            return 'summer';
        break;
        case 'Sep':
        case 'Oct': 
        case 'Nov':
            return 'fall';
        break;
      }
    } else {
      throw new Error('Invalid date!'); 
    }
  }
  catch {
    throw new Error('Invalid date!'); 
  }
}
