"use strict";

require("core-js/modules/es.date.to-string.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Try to parse word to number etc naively using JSONParse
 * @param {string} word
 * @return {any}
 */
var JSONParse = function JSONParse(word) {
  try {
    return JSON.parse(word);
  } catch (err) {
    return word.toString();
  }
};

var _default = {
  JSONParse: JSONParse
};
exports["default"] = _default;