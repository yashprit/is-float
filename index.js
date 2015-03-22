'use strict';
/**
 * Check argument is float or not
 * @return {Boolean} true its float
 */

var isFloat = function isFloat(input) {
  if (isFinite(input)) {
    return input === input && !!(input % 1)
  }
  return false;
};

module.exports = isFloat;
