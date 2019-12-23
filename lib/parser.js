"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.array.is-array.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.date.to-string.js");

require("core-js/modules/es.object.entries.js");

require("core-js/modules/es.object.from-entries.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.object.values.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeParser = _interopRequireDefault(require("./typeParser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Convert csv format to json format,
 * data must be larger than 1 to make sense
 * @param {any[][]} data
 * @return {object[]}
 */
var CSVToJSON = function CSVToJSON(data) {
  var headers = data[0];
  var content = data.slice(1);
  return content.map(function (row) {
    return Object.fromEntries(row.map(function (_, i) {
      return [headers[i], row[i]];
    }));
  });
};
/**
 * Convert json format to csv format,
 * data must be well-structured
 * @param {object[]} data
 * @return {any[][]}
 */


var JSONToCSV = function JSONToCSV(data) {
  var headers = Object.keys(data[0]); // headers

  return [headers].concat(_toConsumableArray(data.map(function (row) {
    return Object.values(row);
  })));
};
/**
 * Stringify data into string format for csv writing purpose
 * @param {any[][]} data
 * @return {string}
 */


var stringifyCSV = function stringifyCSV(data) {
  return data.map(function (row) {
    return row.join(',');
  }).join('\n');
};
/**
 * Convert string to formatted csv format any[][]
 * @param {string} data
 * @return {any[][]}
 */


var readCSV = function readCSV(data) {
  return data.split('\n').map(function (row) {
    return row.split(',').map(_typeParser["default"].JSONParse);
  });
};
/**
 * Rename object keys
 * @param {object[]} obj
 * @param {object} newValuePairs
 * @return {object[]}
 */


var renameJSONKeys = function renameJSONKeys(obj, newValuePairs) {
  return obj.map(function (o) {
    var newObject = {};
    Object.entries(o).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];

      var newKey = newValuePairs[k] || k;
      newObject[newKey] = v;
    });
    return newObject;
  });
};
/**
 * Return JSON object with specified keys
 * @param {object[]} obj
 * @param {string[]} keys
 * @return {object[]}
 */


var getJSONByKeys = function getJSONByKeys(obj, keys) {
  return obj.map(function (o) {
    var newObject = {};
    keys.forEach(function (k) {
      newObject[k] = o[k];
    });
    return newObject;
  });
};

var _default = {
  CSVToJSON: CSVToJSON,
  JSONToCSV: JSONToCSV,
  stringifyCSV: stringifyCSV,
  readCSV: readCSV,
  renameJSONKeys: renameJSONKeys,
  getJSONByKeys: getJSONByKeys
};
exports["default"] = _default;