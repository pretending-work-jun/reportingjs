import parser from './parser';
// import xlsx from 'xlsx';

/**
 * Export data as CSV format
 * @param {any[][]} data
 * @param {string} [filename=data.csv] filename
 * @return {HTMLElement}
 */
const createCSVExporterElement = (data, filename='data.csv') => {
  const content = parser.stringifyCSV(data);
  const hiddenElement = document.createElement('a');
  hiddenElement.setAttribute('href', `data:text/csv;charset=utf8,${encodeURI(content)}`);
  hiddenElement.target = '_blank';
  hiddenElement.download = filename;
  return hiddenElement; // hiddenElement.click() to trigger save
};

/**
 * Export data as JSON format
 * @param {any[]} data
 * @param {string} [filename=data.json] filename
 * @return {HTMLElement}
 */
const createJSONExporterElement = (data, filename='data.json') => {
  const content = JSON.stringify(data);
  const hiddenElement = document.createElement('a');
  hiddenElement.setAttribute('href', `data:text/csv;charset=utf8${encodeURI(content)}`);
  hiddenElement.target = '_blank';
  hiddenElement.download = filename;
  return hiddenElement; // hiddenElement.click() to trigger save
};

/**
 * The easiest way to export as pdf -- window.print() to save as pdf
 */
const exportPagePDF = () => window.print();

export default {
  createCSVExporterElement,
  createJSONExporterElement,
  exportPagePDF,
};
