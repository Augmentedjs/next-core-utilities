!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("next-core-utilities",[],t):"object"==typeof exports?exports["next-core-utilities"]=t():e["next-core-utilities"]=t()}(this,(function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=e=>{const t=typeof e;return"function"===t||"object"===t&&!!e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=e=>"[object Function]"==Object.prototype.toString.call(e)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=arguments;const n=(e,t)=>{let r,n;if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);return n=Number.parseInt(e),()=>(--n>0&&(r=t.apply(void 0,o)),n<=1&&(t=void 0),r)};t.default=n},function(e,t,r){"use strict";(function(e){var o=B(r(5)),n=B(r(1)),u=B(r(6)),l=B(r(7)),i=B(r(8)),s=B(r(9)),c=B(r(0)),f=B(r(10)),a=B(r(11)),p=B(r(12)),d=B(r(13)),y=B(r(14)),b=B(r(15)),O=B(r(16)),_=B(r(17)),g=B(r(2)),h=B(r(18)),j=r(19),x=r(20),m=r(21),S=B(r(22)),M=r(23),v=B(r(24)),P=r(25),T=B(r(26));function B(e){return e&&e.__esModule?e:{default:e}}e.exports.shuffle=x.shuffle,e.exports.prettyPrint=x.prettyPrint,e.exports.binarySearch=x.binarySearch,e.exports.TransformerType=x.TransformerType,e.exports.Transformer=x.Transformer,e.exports.wrap=x.wrap,e.exports.filterObject=x.filterObject,e.exports.findByMatchingProperties=x.findByMatchingProperties,e.exports.sortObjects=m.sortObjects,e.exports.mergeSort=m.mergeSort,e.exports.quickSort=m.quickSort,e.exports.insertionSort=m.insertionSort,e.exports.bubbleSort=m.bubbleSort,e.exports.formatDate=S.default,e.exports.formatBinary=M.formatBinary,e.exports.binaryToHex=M.binaryToHex,e.exports.isString=o.default,e.exports.isFunction=n.default,e.exports.extend=u.default,e.exports.pad=l.default,e.exports.uniqueId=i.default,e.exports.has=s.default,e.exports.isObject=c.default,e.exports.allKeys=f.default,e.exports.create=a.default,e.exports.result=p.default,e.exports.arrayHas=d.default,e.exports.exec=y.default,e.exports.isDefined=b.default,e.exports.some=O.default,e.exports.splice=_.default,e.exports.before=g.default,e.exports.once=h.default,e.exports.filter=v.default,e.exports.fibonacci=j.fibonacci,e.exports.fibonacciSequence=j.fibonacciSequence,e.exports.sizeOf=P.sizeOf,e.exports.formatByteSize=P.formatByteSize,e.exports.memorySizeOf=P.memorySizeOf,t.hammingDistance=T.default}).call(this,r(4)(e))},function(e,t,r){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=e=>"string"==typeof e||!!e&&"object"==typeof e&&"[object String]"===Object.prototype.toString.call(e)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(...e)=>{let t=0;const r=e.length;for(t=1;t<r;t++){let r;for(r in e[t])e[t].hasOwnProperty(r)&&(e[0][r]=e[t][r])}return e[0]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t,r)=>void 0===t?e:r?`${e}${t}`:`${t}${e}`},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let o=0;t.default=e=>`${e}${++o}`},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t)=>null!==e&&hasOwnProperty.call(e,t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=r(0),u=(o=n)&&o.__esModule?o:{default:o};t.default=e=>(0,u.default)(e)?Object.getOwnPropertyNames(e):[]},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=r(0),u=(o=n)&&o.__esModule?o:{default:o};t.default=(e,t)=>{const r=(e=>(0,u.default)(e)?Object.create(e):{})(e);return t&&Object.assign(r,t),r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=r(1),u=(o=n)&&o.__esModule?o:{default:o};t.default=(e,t)=>{if(null===e)return;const r=e[t];return(0,u.default)(r)?r.call(e):r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t)=>-1!==e.indexOf(t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t,...r)=>{const o=e.split("."),n=o.pop(),u=o.length;let l=0;for(l=0;l<u;l++)t=t[o[l]];return t[n].apply(t,r)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=e=>void 0!==e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t)=>!!Array.isArray(e)&&e.some(t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t,r)=>{r=Math.min(Math.max(r,0),e.length);let o=Array(e.length-r);const n=t.length;let u;for(u=0;u<o.length;u++)o[u]=e[u+r];for(u=0;u<n;u++)e[u+r]=t[u];for(u=0;u<o.length;u++)e[u+n+r]=o[u]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=r(2),u=(o=n)&&o.__esModule?o:{default:o};t.default=e=>(0,u.default)(2,e)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=t.fibonacci=e=>{const t=(1+Math.sqrt(5))/2,r=Math.pow(t,e)/Math.sqrt(5);return Math.round(r)};t.fibonacciSequence=e=>{const t=[];let r=0;for(r=0;r<e;r++)t.push(o(r));return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=arguments;t.shuffle=e=>{const t=e.slice(0);let r,o,n=0;for(n=e.length-1;n>0;n--)o=Math.floor(Math.random()*(n+1)),r=t[n],t[n]=t[o],t[o]=r;return t},t.prettyPrint=(e,t,r)=>{let o="\t";return t&&(o=" ".repeat(r)),JSON.stringify(e,null,o)},t.binarySearch=(e,t,r)=>{let o,n,u=0,l=e.length-1;for(;u<=l;)if(o=Math.floor((u+l)/2),n=r(e[o],t),n<0)u=o+1;else{if(!(n>0))return o;l=o-1}return null};const n=t.TransformerType={};n.STRING=Symbol("String"),n.INTEGER=Symbol("Integer"),n.NUMBER=Symbol("Number"),n.BOOLEAN=Symbol("Boolean"),n.ARRAY=Symbol("Array"),n.OBJECT=Symbol("Object"),n.NULL=Symbol("Null");class u{constructor(){this.type=n}static transform(e,t){let r=null;switch(t){case n.STRING:r="object"==typeof e?JSON.stringify(e):String(e);break;case n.INTEGER:r=parseInt(e);break;case n.NUMBER:r=Number(e);break;case n.BOOLEAN:r=Boolean(e);break;case n.ARRAY:Array.isArray(e)?r=e:(r=[],r[0]=e);break;case n.OBJECT:"object"!=typeof e?(r={},r[e]=e):r=e}return r}static isType(e){return null===e?n.NULL:"string"==typeof e?n.STRING:"number"==typeof e?n.NUMBER:"boolean"==typeof e?n.BOOLEAN:Array.isArray(e)?n.ARRAY:"object"==typeof e?n.OBJECT:void 0}}t.Transformer=u;t.wrap=(e,t)=>()=>t.apply(void 0,[e].concat(Array.prototype.slice.call(o))),t.filterObject=(e,t)=>{const r={};if(e&&t){const o=t.length;let n=0;for(n=0;n<o;n++)r[t[n]]=e[t[n]]}return r},t.findByMatchingProperties=(e,t)=>e.filter(e=>Object.keys(t).every(r=>e[r]===t[r]))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.sortObjects=(e,t)=>e.sort((e,r)=>{const o=e[t],n=r[t];return o<n?-1:o>n?1:0});const o=t.mergeSort=e=>{if(1===e.length)return e;const t=Math.floor(e.length/2),r=e.slice(0,t),u=e.slice(t);return n(o(r),o(u))},n=(e,t)=>{let r=[],o=0,n=0;for(;o<e.length&&n<t.length;)e[o]<t[n]?(r.push(e[o]),o++):(r.push(t[n]),n++);return r.concat(e.slice(o)).concat(t.slice(n))},u=t.quickSort=e=>{if(0===e.length)return[];let t=1;const r=e.length,o=[],n=[],l=e[0];for(t=1;t<r;t++)e[t]<l?o.push(e[t]):n.push(e[t]);return u(o).concat(l,u(n))};t.insertionSort=e=>{let t=[];if(e){t=e.slice();const r=t.length;let o,n,u;for(o=1;o<r;o++){for(u=t[o],n=o-1;n>=0&&t[n]>u;n--)t[n+1]=t[n];t[n+1]=u}}return t},t.bubbleSort=e=>{let t=[];if(e){let r,o,n;t=e.slice();const u=t.length-1;do{for(r=!1,o=0;o<u;o++)t[o]>t[o+1]&&(n=t[o],t[o]=t[o+1],t[o+1]=n,r=!0)}while(r)}return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t)=>{const r=e.getFullYear(),o=e.getMonth()+1,n=e.getDate(),u=e.getHours(),l=e.getMinutes();e.getSeconds();return t?`${o}/${n}/${r}`:`${o}/${n}/${r} ${u%12||12}:${l<10?"0"+l:l}${u<12?"am":"pm"}`}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.formatBinary=(e,t)=>(e=>{let t=0,r=e,o="";for(t=0;t<32;t++,o+=String(r>>>31),r<<=1);return o})(e).split("").reverse().join("").substring(0,t),t.binaryToHex=(e,t)=>{const r=parseInt(e.split("").reverse().join(""),2);let o="";return r<16&&t&&(o="0"),`${o}${r.toString(16)}`}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t)=>e&&t?[].filter.call(e,e=>e!=t).join(""):null},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=e=>{let t=0;if(null!=e)switch(typeof e){case"number":t+=8;break;case"string":t+=2*e.length;break;case"boolean":t+=4;break;case"object":let r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r||"Array"===r){let r=null;for(r in e)e.hasOwnProperty(r)&&(t+=o(e[r]))}else t+=2*e.toString().length}return t},n=e=>e<1024?e+" bytes":e<1048576?(e/1024).toFixed(3)+" KB":e<1073741824?(e/1048576).toFixed(3)+" MB":(e/1073741824).toFixed(3)+" GB";t.sizeOf=o,t.formatByteSize=n,t.memorySizeOf=e=>n(o(e))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t)=>{let r=0,o=e.toString(2),n=t.toString(2),u=n.length-o.length;if(u>0){let e="";for(;u;)e+="0",u--;o=e+o}else if(u<0){let e="";for(;u;)e+="0",u++;n=e+n}return o.split("").forEach((e,t)=>{e!==n[t]&&r++}),r}}])}));
//# sourceMappingURL=next-core-utilities.js.map