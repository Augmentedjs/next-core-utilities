const createBinaryString = (nMask) => {
  // nMask must be between -2147483648 and 2147483647
  let nFlag = 0, nShifted = nMask, sMask = '';
  for (nFlag = 0; nFlag < 32;
       nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
  return sMask;
};

/**
 * Format a number into binary string at a set precision
 * @function formatBinary
 * @memberof Utility
 * @param {num} num The number to format
 * @param {pres} pres The bit precision
 * @returns {string} The formatted binary string
 */
export const formatBinary = (num, pres) => {
  return createBinaryString(num).split("").reverse().join("").substring(0, pres);
};

/**
 * Format a binary string into a hex value (two characters)
 * @function binaryToHex
 * @memberof Utility
 * @param {binary} binary The 8-bit binary string to return as hex characters
 * @param {pad} pad Add a zero if under '10'
 * @returns {string} The hex value
 */
export const binaryToHex = (binary, pad) => {
  const num = parseInt(binary.split("").reverse().join(""), 2);
  let zero = "";
  if (num < 16 && pad) {
    zero = "0";
  }
  return `${zero}${num.toString(16)}`;
};
