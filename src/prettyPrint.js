// List of HTML entities for escaping.
const htmlEscapes = {
  '&': '<span class="char">&amp;</span>',
  '<': '<span class="char">&lt;</span>',
  '>': '<span class="char">&gt;</span>',
  '"': '<span class="char">&quot;</span>',
  "'": '<span class="char">&#x27;</span>',
  '/': '<span class="char">&#x2F;</span>'
};

// Regex containing the keys listed immediately above.
const htmlEscaper = /[&<>"'\/]/g;

// Escape a string for HTML interpolation.
export const escapeForHTML = (string) => {
  return ("" + string).replace(htmlEscaper, (match) => {
    return htmlEscapes[match];
  });
};


/**
 * Prints an object nicely
 *
 * @param {object} obj The object to print
 * @param {boolean} spaces Use spaces instead of tabs
 * @param {number} number Number spaces to use (if spaces is true)
 * @returns {string} formatted JSON string
 */
export const prettyPrint = (obj, spaces = false, number = 2) => {
  let ret = "";
  if (obj && typeof obj === "object") {
    let x = "\t";
    if (spaces) {
      x = " ".repeat(number);
    }
    ret = JSON.stringify(obj, null, x);
  }
  return ret;
};

const indentHTMLSpaces = (num = 1) => {
  let i = 0, html = /*html*/`<span class="indent">`;
  for (i; i < num; i++) {
    html += /*html*/`&nbsp;`;
  }
  html += /*html*/`</span>`;
  return html;
};

/**
 * Prints an object nicely in HTML
 *
 * @param {object} obj The object to print
 * @returns {string} formatted JSON string in HTML
 */
export const prettyPrintHTML = (obj, indent = 0, array = false, last = true) => {
  const BASE_INDENT = (indent > 0) ? indentHTMLSpaces(indent) : "";
  const OBJECT_INDENT = indentHTMLSpaces(indent + 2);
  let html = /*html*/`<div>${BASE_INDENT}<span class="brace">${(array) ? "[" : "{"}</span></div>`;
  if (obj && typeof obj === "object") {
    const keys = Object.keys(obj), l = keys.length;
    let i = 0, key, value;
    for (i; i < l; i++) {
      key = keys[i];
      value = obj[key];
      
      if (typeof value === "string") {
        if (array) {
          html += /*html*/`<div>${OBJECT_INDENT}<span class="string">"${escapeForHTML(value)}"</span>`;
        } else {
          html += /*html*/`<div>${OBJECT_INDENT}<span class="key">"${key}"</span><span class="operator">:</span>&nbsp;<span class="string">"${escapeForHTML(value)}"</span>`;
        }
        if (i < l - 1) {
        html += /*html*/`<span class="operator">,</span>`;
        }
        html += /*html*/`</div>`;
      } else if (typeof value === "number") {
        if (array) {
          html += /*html*/`<div>${OBJECT_INDENT}<span class="number">${value}</span>`;
        } else {
          html += /*html*/`<div>${OBJECT_INDENT}<span class="key">"${key}"</span><span class="operator">:</span>&nbsp;<span class="number">${value}</span>`;
        }
        if (i < l - 1) {
        html += /*html*/`<span class="operator">,</span>`;
        }
        html += /*html*/`</div>`;
      } else if (Array.isArray(value) === true) {
        if (!array) {
          html += /*html*/`<div>${OBJECT_INDENT}<span class="key">"${key}"</span><span class="operator">:</span>&nbsp;`;
        }
        html += prettyPrintHTML(value, indent + 2, true, !(i < l - 1));
      } else if (typeof value === "object") {
        if (!array) {
          html += /*html*/`<div>${OBJECT_INDENT}<span class="key">"${key}"</span><span class="operator">:</span>&nbsp;`;
        }
        
        html += prettyPrintHTML(value, indent + 2, false, !(i < l - 1));
      } else {
        if (array) {
          html += /*html*/`<div>${OBJECT_INDENT}<span class="string">"${escapeForHTML(value)}"</span>`;
        } else {
          html += /*html*/`<div>${OBJECT_INDENT}<span class="key">"${key}"</span><span class="operator">:</span>&nbsp;<span class="string">"${escapeForHTML(value)}"</span>`;
        }
        if (i < l - 1) {
        html += /*html*/`<span class="operator">,</span>`;
        }
        html += /*html*/`</div>`;
      }
    }
    html += /*html*/`<div>${BASE_INDENT}<span class="brace">${(array) ? "]" : "}"}</span>`;
    if (!last) {
      html += /*html*/`<span class="operator">,</span>`;
     }
     html += /*html*/`</div>`;
  }
  return html;
};