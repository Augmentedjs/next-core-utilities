/**
 * Filter a string by removing a char
 * @param {string} str The string
 * @param {string} char The char
 * @returns {string} The filtered string
 */
const filter = (str, char) => {
  if (str && char) {
    return [].filter.call(str, c => c != char).join("");
  }
  return null;
};

export default filter;
