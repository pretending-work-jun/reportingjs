"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parser = _interopRequireDefault(require("./parser"));

var _xlsx = _interopRequireDefault(require("xlsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Export data as CSV format
 * @param {any[][]} data
 * @param {string} [filename=data.csv] filename
 * @return {HTMLElement}
 */
var createCSVExporterElement = function createCSVExporterElement(data, filename) {
  var content = _parser["default"].stringifyCSV(data);

  var hiddenElement = document.createElement('a');
  hiddenElement.setAttribute('href', "data:text/csv;charset=utf8,".concat(encodeURI(content)));
  hiddenElement.target = '_blank';
  hiddenElement.download = filename || 'data.csv';
  return hiddenElement; // hiddenElement.click() to trigger save
};
/**
 * Export data as JSON format
 * @param {any[]} data
 * @param {string} [filename=data.json] filename
 * @return {HTMLElement}
 */


var createJSONExporterElement = function createJSONExporterElement(data, filename) {
  var content = JSON.stringify(data);
  var hiddenElement = document.createElement('a');
  hiddenElement.setAttribute('href', "data:text/csv;charset=utf8".concat(encodeURI(content)));
  hiddenElement.target = '_blank';
  hiddenElement.download = filename || 'data.json';
  return hiddenElement; // hiddenElement.click() to trigger save
};
/**
 * The easiest way to export as pdf -- window.print() to save as pdf
 */


var exportPagePDF = function exportPagePDF() {
  return window.print();
};

var _default = {
  createCSVExporterElement: createCSVExporterElement,
  createJSONExporterElement: createJSONExporterElement,
  exportPagePDF: exportPagePDF
};
exports["default"] = _default;