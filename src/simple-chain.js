import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {

  arrValues: [],

  getLength() {
	  return this.arrValues.length;
  },

  addLink( value ) {
    this.arrValues.push(`( ${value} )`);
    return this; 
  },

  removeLink( position ) {
    if (typeof position === 'number' && position <= this.arrValues.length && (position ^ 0) === position && position > 0) {
      this.arrValues.splice(position - 1, 1);
    } else {
		  this.arrValues.length = 0;
      throw Error('You can\'t remove incorrect link!');
    }
    return this;
  },
  
  reverseChain() {
    this.arrValues.reverse();
    return this;
  },
  
  finishChain() {
    let str = this.arrValues.join('~~');
    this.arrValues.length = 0;
    return str;
  },

};