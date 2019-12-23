"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fileSaver = require("file-saver");

var _parser = _interopRequireDefault(require("./parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import xlsx from 'xlsx';

/**
 * Export data as CSV format
 * @param {any[][]} data
 * @param {string} [filename=data.csv] filename
 * @return {HTMLElement}
 */
var createCSVExporterElement = function createCSVExporterElement(data) {
  var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'data.csv';

  var content = _parser["default"].stringifyCSV(data);

  var hiddenElement = document.createElement('a');
  hiddenElement.setAttribute('href', "data:text/csv;charset=utf8,".concat(encodeURI(content)));
  hiddenElement.target = '_blank';
  hiddenElement.download = filename;
  return hiddenElement; // hiddenElement.click() to trigger save
};
/**
 * Export data as CSV format through blob
 * @param {any[][]} data
 * @param {string} [filename=data.csv] filename
 */


var exportCSV = function exportCSV(data) {
  var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'data.csv';
  (0, _fileSaver.saveAs)(new Blob([data], {
    type: 'data:text/csv;charset=utf8'
  }), filename);
};
/**
 * Export data as JSON format
 * @param {any[]} data
 * @param {string} [filename=data.json] filename
 * @return {HTMLElement}
 */


var createJSONExporterElement = function createJSONExporterElement(data) {
  var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'data.json';
  var content = JSON.stringify(data);
  var hiddenElement = document.createElement('a');
  hiddenElement.setAttribute('href', "data:text/csv;charset=utf8".concat(encodeURI(content)));
  hiddenElement.target = '_blank';
  hiddenElement.download = filename;
  return hiddenElement; // hiddenElement.click() to trigger save
};
/**
 * Export data as JSON format through blob
 * @param {any[][]} data
 * @param {string} filename
 */


var exportJSON = function exportJSON(data) {
  var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'data.jsosn';
  (0, _fileSaver.saveAs)(new Blob([data], {
    type: 'data:text/json;charset=utf8'
  }), filename);
};
/**
 * The easiest way to export as pdf -- window.print() to save as pdf
 */


var exportPagePDF = function exportPagePDF() {
  return window.print();
};

var _default = {
  createCSVExporterElement: createCSVExporterElement,
  exportCSV: exportCSV,
  createJSONExporterElement: createJSONExporterElement,
  exportJSON: exportJSON,
  exportPagePDF: exportPagePDF
};
exports["default"] = _default;