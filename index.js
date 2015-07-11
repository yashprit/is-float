"use strict";

/**
 * Check argument is float or not
 * @param {number} n
 * @param {Boolean} shouldCoerce
 * @return {Boolean} true if it's a float
 */
function isFloat (n, shouldCoerce) {
  if (shouldCoerce) {
    if (typeof n === "string") {
      n = parseFloat(n);
    }
  }

  return n === +n && n !== (n|0);
}

module.exports = isFloat;
