!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.hansifyNumbers=r():t.hansifyNumbers=r()}(this,(function(){return(()=>{"use strict";var t={385:(t,r,e)=>{e.d(r,{default:()=>p});const n={trimZero:!1,onlyFirstNum:!1},o=["萬","億","兆","京","垓","秭","穰","溝","澗","正","載","極"];function i(t,r){return t[r]}const u=["十","百","千"];function c(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return f(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?f(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function s(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){l(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function l(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function p(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,e=s(s({},n),r),f=h(),a=t/j(f),l=a.toString().split(""),p=c(l),y=p[0],b=p.slice(1),m=v(f-1),d=g(b.length-1);if(!f)return e.onlyFirstNum?y+d:Math.floor(t).toString();if(e.onlyFirstNum,!e.withDecimal){var O=Math.floor(a);return O+m}return a.toFixed(e.withDecimal)+m;function j(t){return Math.pow(1e4,t)}function h(){for(var r=0;t>j(r+1);)r++;return r}function g(t){return i(u,t)}function v(t){return i(o,t)}}}},r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{}};return t[n](o,o.exports,e),o.exports}return e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e(385)})().default}));
//# sourceMappingURL=index.umd.js.map