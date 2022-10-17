const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  let symbols;
    let repeatSymbols;
    let separator;
    let addition;
    let repeatAddition;
    let additionSeparator;

    let result = '';
    
    let keys = Object.keys(options);

    let repeatTimesKey =  keys.filter(val => val == 'repeatTimes');
    let separatorKey =  keys.filter(val => val == 'separator');
    let additionKey =  keys.filter(val => val == 'addition');
    let additionRepeatTimesKey =  keys.filter(val => val == 'additionRepeatTimes');
    let additionSeparatorKey = keys.filter(val => val == 'additionSeparator');

    if(typeof str !== 'string') symbols = String(str);
    else symbols = str;

    if(repeatTimesKey.length === 0) repeatSymbols = 1;
    else repeatSymbols = options.repeatTimes;

    if(separatorKey.length === 0) separator = '+';
    else separator = options.separator;

    if(additionKey.length === 0) addition = '';
    else if(typeof options.addition !== 'string') addition = String(options.addition);
    else addition = options.addition;

    if(additionRepeatTimesKey.length === 0) repeatAddition = 1;
    else repeatAddition = options.additionRepeatTimes;

    if(additionSeparatorKey.length === 0) additionSeparator = '|';
    else additionSeparator = options.additionSeparator;

    for(let i = 0; i < repeatSymbols; i++) {
        result = result + symbols + (repeatAddition === 1 ? addition : (addition + additionSeparator).repeat(repeatAddition - 1) + addition) + (i === repeatSymbols - 1 ? '' : separator);
    }

    return result;
}

module.exports = {
  repeater
};
