/**
 * Convert csv format to json format,
 * data must be larger than 1 to make sense
 * @param {any[][]} data
 * @return {object[]}
 */
const CSVToJSON = (data) => {
  const headers = data[0];
  const content = data.slice(1);
  return content.map((row) => Object.fromEntries(row.map((_, i) => [headers[i], row[i]])));
};

/**
 * Convert json format to csv format,
 * data must be well-structured
 * @param {object[]} data
 * @return {any[][]}
 */
const JSONToCSV = (data) => {
  const headers = Object.keys(data[0]); // headers
  return [
    headers,
    ...data.map((row) => Object.values(row)),
  ];
};

export default {
  CSVToJSON,
  JSONToCSV,
};
