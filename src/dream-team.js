import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam( members ) {
  let teamName = '';
  let sorted = [];
  let copy = [];
  if (Array.isArray(members)) {
    members.map(item => {
      if (item && typeof item === 'string') {
        item = item.trim();
        copy.push(item.toUpperCase());
      } 
    })
  } else return false;
  sorted = copy.sort();
  sorted.forEach(item => {
    if (item && typeof item === 'string') {
      teamName += item[0].toUpperCase();
    } 
  });
  return teamName;
  //throw new NotImplementedError('Not implemented');
}
