/**
 * isFunction -
 * returns true if called name is a function
 * simular to jQuery .isFunction method
 * @param {function} name The name of the function to test
 * @returns true if called name is a function
 */
const isFunction = (name) => {
  return Object.prototype.toString.call(name) == "[object Function]";
};

export default isFunction;
