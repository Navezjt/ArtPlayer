/*!
 * artplayer-plugin-vtt-thumbnail.js v1.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2023 Harvey Zack
 * Released under the MIT License.
 */
!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(e,t,r,n,o){/* eslint-disable no-undef */var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i[n]&&i[n],c=u.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function f(t,r){if(!c[t]){if(!e[t]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var o="function"==typeof i[n]&&i[n];if(!r&&o)return o(t,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(u)return u(t,!0);// Try the node require function if it exists.
if(a&&"string"==typeof t)return a(t);var l=Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}p.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},p.cache={};var s=c[t]=new f.Module(t);e[t][0].call(s.exports,p,s,s.exports,this)}return c[t].exports;function p(e){var t=p.resolve(e);return!1===t?{}:f(t)}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=c,f.parent=u,f.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(f,"root",{get:function(){return i[n]}}),i[n]=f;for(var l=0;l<t.length;l++)f(t[l]);if(r){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var s=f(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=s:"function"==typeof define&&define.amd?define(function(){return s}):o&&(this[o]=s)}}({"2Oq25":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",function(){return a});var o=e("@swc/helpers/_/_async_to_generator"),i=e("@swc/helpers/_/_ts_generator"),u=e("./getVttArray"),c=n.interopDefault(u);function a(e){var t;return t=(0,o._)(function(t){var r,n,u,a,f,l;return(0,i._)(this,function(s){switch(s.label){case 0:return n=(r=t.constructor.utils).setStyle,u=r.clamp,a=t.template.$progress,f=t.events.proxy,[4,(0,c.default)(e.vtt)];case 1:return l=s.sent(),t.controls.add({name:"thumbnails",position:"top",index:20,style:e.style||{},mounted:function(e){var r;f(a,"mousemove",(r=(0,o._)(function(r){var o,c,f,s;return(0,i._)(this,function(i){var p,d,y,h;return(n(e,"display","block"),d=(p=t.template.$progress).getBoundingClientRect().left,h=(y=u(r.pageX-d,0,p.clientWidth))/p.clientWidth*t.duration,c=(o={width:y,second:h}).second,f=o.width,s=l.find(function(e){return c>=e.start&&c<=e.end}))?(n(e,"backgroundImage","url(".concat(s.url,")")),n(e,"height","".concat(s.h,"px")),n(e,"width","".concat(s.w,"px")),n(e,"backgroundPosition","-".concat(s.x,"px -").concat(s.y,"px")),f<=s.w/2?n(e,"left",0):f>a.clientWidth-s.w/2?n(e,"left","".concat(a.clientWidth-s.w,"px")):n(e,"left","".concat(f-s.w/2,"px")),[2]):[2,n(e,"display","none")]})}),function(e){return r.apply(this,arguments)})),f(a,"mouseleave",function(){n(e,"display","none")}),t.on("hover",function(t){t||n(e,"display","none")})}}),[2,{name:"artplayerPluginVttThumbnail"}]}})}),function(e){return t.apply(this,arguments)}}a.env="production",a.version="1.0.0",a.build="2023-08-26 13:29:23","undefined"!=typeof window&&(window.artplayerPluginVttThumbnail=a)},{"@swc/helpers/_/_async_to_generator":"eONSn","@swc/helpers/_/_ts_generator":"6Xyd0","./getVttArray":"iUpz3","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],eONSn:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,t,r,n,o,i,u){try{var c=e[i](u),a=c.value}catch(e){r(e);return}c.done?t(a):Promise.resolve(a).then(n,o)}function i(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var u=e.apply(t,r);function c(e){o(u,n,i,c,a,"next",e)}function a(e){o(u,n,i,c,a,"throw",e)}c(void 0)})}}n.defineInteropFlag(r),n.export(r,"_async_to_generator",function(){return i}),n.export(r,"_",function(){return i})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],iWrD0:[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||t.hasOwnProperty(r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],"6Xyd0":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"_",function(){return o.__generator}),n.export(r,"_ts_generator",function(){return o.__generator});var o=e("tslib")},{tslib:"c0d7h","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],c0d7h:[function(e,t,r){/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"__extends",function(){return u}),n.export(r,"__assign",function(){return c}),n.export(r,"__rest",function(){return a}),n.export(r,"__decorate",function(){return f}),n.export(r,"__param",function(){return l}),n.export(r,"__esDecorate",function(){return s}),n.export(r,"__runInitializers",function(){return p}),n.export(r,"__propKey",function(){return d}),n.export(r,"__setFunctionName",function(){return y}),n.export(r,"__metadata",function(){return h}),n.export(r,"__awaiter",function(){return _}),n.export(r,"__generator",function(){return v}),n.export(r,"__createBinding",function(){return m}),n.export(r,"__exportStar",function(){return b}),n.export(r,"__values",function(){return g}),n.export(r,"__read",function(){return w}),/** @deprecated */n.export(r,"__spread",function(){return x}),/** @deprecated */n.export(r,"__spreadArrays",function(){return j}),n.export(r,"__spreadArray",function(){return O}),n.export(r,"__await",function(){return P}),n.export(r,"__asyncGenerator",function(){return S}),n.export(r,"__asyncDelegator",function(){return T}),n.export(r,"__asyncValues",function(){return I}),n.export(r,"__makeTemplateObject",function(){return E}),n.export(r,"__importStar",function(){return F}),n.export(r,"__importDefault",function(){return M}),n.export(r,"__classPrivateFieldGet",function(){return W}),n.export(r,"__classPrivateFieldSet",function(){return k}),n.export(r,"__classPrivateFieldIn",function(){return N});var o=e("@swc/helpers/_/_type_of"),i=function(e,t){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function u(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}function f(e,t,r,n){var o,i=arguments.length,u=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(u=(i<3?o(u):i>3?o(t,r,u):o(t,r))||u);return i>3&&u&&Object.defineProperty(t,r,u),u}function l(e,t){return function(r,n){t(r,n,e)}}function s(e,t,r,n,o,i){function u(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var c,a=n.kind,f="getter"===a?"get":"setter"===a?"set":"value",l=!t&&e?n.static?e:e.prototype:null,s=t||(l?Object.getOwnPropertyDescriptor(l,n.name):{}),p=!1,d=r.length-1;d>=0;d--){var y={};for(var h in n)y[h]="access"===h?{}:n[h];for(var h in n.access)y.access[h]=n.access[h];y.addInitializer=function(e){if(p)throw TypeError("Cannot add initializers after decoration has completed");i.push(u(e||null))};var _=(0,r[d])("accessor"===a?{get:s.get,set:s.set}:s[f],y);if("accessor"===a){if(void 0===_)continue;if(null===_||"object"!=typeof _)throw TypeError("Object expected");(c=u(_.get))&&(s.get=c),(c=u(_.set))&&(s.set=c),(c=u(_.init))&&o.push(c)}else(c=u(_))&&("field"===a?o.push(c):s[f]=c)}l&&Object.defineProperty(l,n.name,s),p=!0}function p(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0}function d(e){return(void 0===e?"undefined":(0,o._)(e))==="symbol"?e:"".concat(e)}function y(e,t,r){return(void 0===t?"undefined":(0,o._)(t))==="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function h(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function _(e,t,r,n){return new(r||(r=Promise))(function(o,i){function u(e){try{a(n.next(e))}catch(e){i(e)}}function c(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(u,c)}a((n=n.apply(e,t||[])).next())})}function v(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(a){return function(c){if(r)throw TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(u=0)),u;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,n=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=t.call(e,u)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}var m=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function b(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||m(t,e,r)}function g(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function w(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function x(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(w(arguments[t]));return e}function j(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<r;t++)for(var i=arguments[t],u=0,c=i.length;u<c;u++,o++)n[o]=i[u];return n}function O(e,t,r){if(r||2==arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function P(e){return this instanceof P?(this.v=e,this):new P(e)}function S(e,t,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},u("next"),u("throw"),u("return"),n[Symbol.asyncIterator]=function(){return this},n;function u(e){o[e]&&(n[e]=function(t){return new Promise(function(r,n){i.push([e,t,r,n])>1||c(e,t)})})}function c(e,t){try{var r;(r=o[e](t)).value instanceof P?Promise.resolve(r.value.v).then(a,f):l(i[0][2],r)}catch(e){l(i[0][3],e)}}function a(e){c("next",e)}function f(e){c("throw",e)}function l(e,t){e(t),i.shift(),i.length&&c(i[0][0],i[0][1])}}function T(e){var t,r;return t={},n("next"),n("throw",function(e){throw e}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:P(e[n](t)),done:!1}:o?o(t):t}:o}}function I(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=g(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise(function(n,o){!function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)}(n,o,(t=e[r](t)).done,t.value)})}}}function E(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var D=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function F(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&m(t,e,r);return D(t,e),t}function M(e){return e&&e.__esModule?e:{default:e}}function W(e,t,r,n){if("a"===r&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function k(e,t,r,n,o){if("m"===n)throw TypeError("Private method is not writable");if("a"===n&&!o)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}function N(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}},{"@swc/helpers/_/_type_of":"felZi","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],felZi:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}n.defineInteropFlag(r),n.export(r,"_type_of",function(){return o}),n.export(r,"_",function(){return o})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],iUpz3:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",function(){return c});var o=e("@swc/helpers/_/_async_to_generator"),i=e("@swc/helpers/_/_ts_generator");function u(e){var t,r,n,o=e.split("."),i=o[0].split(":")||[],u=Number((t=o[1]||"0",r=3,n="0",t.length>r?String(t):((r-=t.length)>n.length&&(n+=n.repeat(r/n.length)),String(t)+n.slice(0,r))))/1e3;return 3600*Number(i[i.length-3]||0)+60*Number(i[i.length-2]||0)+Number(i[i.length-1]||0)+u}function c(){return a.apply(this,arguments)}function a(){return(a=(0,o._)(function(){var e,t,r,n,o,c,a,f,l,s,p,d,y,h,_,v,m,b=arguments;return(0,i._)(this,function(i){switch(i.label){case 0:return e=b.length>0&&void 0!==b[0]?b[0]:"",[4,fetch(e)];case 1:return[4,i.sent().text()];case 2:for(n=1,t=i.sent().split(/[\n\r]/gm).filter(function(e){return e.trim()}),r=[];n<t.length;n+=2)if(o=t[n],(c=t[n+1]).trim()){for(a=/((?:[0-9]{2}:)?(?:[0-9]{2}:)?[0-9]{2}(?:.[0-9]{3})?)(?: ?--> ?)((?:[0-9]{2}:)?(?:[0-9]{2}:)?[0-9]{2}(?:.[0-9]{3})?)/,f=o.match(a),l=/(.*)#(\w{4})=(.*)/i,s=c.match(l),p=Math.floor(u(f[1])),d=Math.floor(u(f[2])),(y=e.split("/")).pop(),y.push(s[1]),h={start:p,end:d,url:y.join("/")},_=s[2].split(""),v=s[3].split(","),m=0;m<_.length;m++)h[_[m]]=v[m];r.push(h)}return[2,r]}})})).apply(this,arguments)}},{"@swc/helpers/_/_async_to_generator":"eONSn","@swc/helpers/_/_ts_generator":"6Xyd0","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}]},["2Oq25"],"2Oq25","parcelRequire4dc0");