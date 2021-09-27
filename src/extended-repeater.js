import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater( str, options ) {
  let resultStr = str;
  let addition = '';
  let optionsAddition = String(options.addition);
  if (optionsAddition && optionsAddition !== '' && optionsAddition !== 'undefined')
    addition = `${optionsAddition}${options.additionSeparator || '|'}`.repeat(options.additionRepeatTimes || 1);
  let additionSeparatorLength = 1;
  if (options.additionSeparator) additionSeparatorLength = options.additionSeparator.length;
  resultStr = `${String(str)}${addition.slice(0, addition.length - additionSeparatorLength)}${options.separator || '+'}`.repeat(options.repeatTimes || 1);
  let optionsSeparatorLength = 1;
  if (options.separator) optionsSeparatorLength = options.separator.length;
  return resultStr.slice(0, resultStr.length - optionsSeparatorLength);
}
