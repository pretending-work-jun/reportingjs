/**
 * Try to parse word to number etc naively using JSONParse
 * @param {string} word
 * @return {any}
 */
const JSONParse = (word) => {
  try {
    return JSON.parse(word);
  } catch (err) {
    return JSON.stringify(word);
  }
};

export default {
  JSONParse,
};
