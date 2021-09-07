"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardNumberFormatter = cardNumberFormatter;
exports.expirationDateFormatter = expirationDateFormatter;

function cardNumberFormatter(oldValue, newValue) {
  // user is deleting so return without formatting
  if (oldValue.length > newValue.length) {
    return newValue;
  }

  return newValue.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').substring(0, 19);
}

function expirationDateFormatter(oldValue, newValue) {
  // user is deleting so return without formatting
  if (oldValue.length > newValue.length) {
    return newValue;
  }

  return newValue.replace(/\W/gi, '').replace(/(.{2})/g, '$1/').substring(0, 5);
}
//# sourceMappingURL=formatters.js.map