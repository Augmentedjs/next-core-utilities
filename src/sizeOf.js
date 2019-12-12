/**
 * Returns the size in bytes of an object
 * @function sizeOf
 * @returns {Number} size in bytes
 */
const sizeOf = (obj) => {
  let bytes = 0;
  if (obj !== null && obj !== undefined) {
    switch(typeof obj) {
      case "number":
      bytes += 8;
      break;
      case "string":
      bytes += obj.length * 2;
      break;
      case "boolean":
      bytes += 4;
      break;
      case "object":
      let objClass = Object.prototype.toString.call(obj).slice(8, -1);
      if (objClass === "Object" || objClass === "Array") {
        let key = null;
        for (key in obj) {
          if (!obj.hasOwnProperty(key)) continue;
          bytes += sizeOf(obj[key]);
        }
      } else bytes += obj.toString().length * 2;
      break;
    }
  }
  return bytes;
};

/**
 * Returns the number (in bytes) as a human readable string
 * @function formatByteSize
 * @returns {String} size in formated human readable string
 */
const formatByteSize = (bytes) => {
  if (bytes < 1024) return bytes + " bytes";
  else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";
  else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MB";
  else return (bytes / 1073741824).toFixed(3) + " GB";
};

/**
 * Returns the object size as a human readable string
 * @function memorySizeOf
 * @returns {String} size in formated human readable string
 */
const memorySizeOf = (obj) => {
  return formatByteSize(sizeOf(obj));
};

export { sizeOf, formatByteSize, memorySizeOf };
