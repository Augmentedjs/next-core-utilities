/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.  This is a simular function to lodash isEquals. <br/>
 *
 * <strong>Note:</strong> This method supports comparing arrays, array buffers,
 * booleans, dates, error objects, maps, numbers, objects, regexes, sets,
 * strings, symbols, and typed arrays.
 * Objects are compared by their own, not inherited, enumerable properties.</br>
 * <em>Functions are compared by strict equality, i.e. ===.</em><br/>
 * <em>DOM nodes are considered objects and treaked as such as this library does
 * not assume browsers.</em>
 * @param {any} first The first item
 * @param {any} second The second item
 * @returns {boolean} Returns true if equal
 */
const isEqual = (first, second) => {

  // console.debug("isEqual", first, second);

  // get some basics out of the way
  if (!first || !second) {
    return false;
  }

  const firstType = typeof first;
  const secondType = typeof second;

  console.debug("types", firstType, secondType);

  if (firstType !== secondType) {
    return false;
  }

  if ((firstType === "string" && secondType === "string") ||
      (firstType === "number" && secondType === "number") ||
      (firstType === "boolean" && secondType === "boolean") ||
      (firstType === "symbol" && secondType === "symbol")) {
    return (first === second);
  } else if (firstType === "function" && secondType === "function" ||
      (first instanceof RegExp && second instanceof RegExp)) {
    return (first.toString() === second.toString());
  } else if (first instanceof Date && second instanceof Date) {
    return (first.getTime() === second.getTime());
  } else if (first instanceof Error && second instanceof Error) {
    return (first.message === second.message);
  } else if (first instanceof Map && second instanceof Map) {
    first = Object.fromEntries(first);
    second = Object.fromEntries(second);
  } else if (first instanceof Set && second instanceof Set) {
    first = Array.from(first);
    second = Array.from(second);
  } else if (first instanceof ArrayBuffer && second instanceof ArrayBuffer) {
    return (first.byteLength === second.byteLength);
  }

  if (Array.isArray(first) && Array.isArray(second)) {
    if (first.length !== second.length) {
      return false;
    }

    // dive into the array
    let i = 0;
    const sortedFirst = first.sort(),
          sortedSecond = second.sort(),
          l = first.length;

    for(i; i < l; i++) {
      const a = sortedFirst[i],
            b = sortedSecond[i];

      if (typeof a === "object" && typeof b === "object") {
        const ret = isEqual(a, b);
        if (ret === false) {
          return false;
        }
      } else if (Array.isArray(a) && Array.isArray(b)) {
        const ret = isEqual(a, b);
        if (ret === false) {
          return false;
        }
      } else {
        if (a !== b) {
          return false;
        }
      }
    }
  }

  if (typeof first === "object" && typeof second === "object") {
    const firstKeys = Object.keys(first).sort(),
          secondKeys = Object.keys(second).sort();

    // console.debug("compare objects");

    if (firstKeys.length !== secondKeys.length) {
      // console.debug("different key lengths");
      return false;
    }

    let i = 0;
    const l = firstKeys.length;

    for(i; i < l; i++) {
      const a = firstKeys[i],
            b = secondKeys[i];
      if (a !== b) {
        // console.debug("keys don't match", a, b);
        return false;
      }

      if (typeof first[a] === "object" && typeof second[b] === "object") {
        const ret = isEqual(first[a], second[b]);
        if (ret === false) {
          return false;
        }
      } else if (Array.isArray(first[a]) && Array.isArray(second[b])) {
        const ret = isEqual(a, b);
        if (ret === false) {
          return false;
        }
      } else {
        if (first[a] !== second[b]) {
          return false;
        }
      }
    }
  }
  return true;
};

export default isEqual;
