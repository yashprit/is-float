'use strict';
/**
 * Check argument is float or not
 * @return {Boolean} true its float
 */

var isFloat = function isFloat(input) {
  if (typeof input === "number") {
    if ((/[.]/).test() && input !== +input) {
      return true;
    }
    var inputStr = " " + input + " "
    console.log(inputStr)
    return (/[.]/).test(inputStr);
  }

  return false;
};

module.exports = isFloat;
