/**
 * Try to parse word to number etc naively using JSONParse
 * @param {string} word
 * @return {any}
 */
const JSONParse = (word) => {

  if (typeof word != '')
  try {
    return JSON.parse(word);
  } catch (err) {
    return word;
  }
};

/**
 * doNothing()
 */
const doNothing = () => {};

export default {
  JSONParse,
};
