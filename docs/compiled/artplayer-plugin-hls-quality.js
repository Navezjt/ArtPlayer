/*!
 * artplayer-plugin-hls-quality.js v2.0.0
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
function(e,t,n,o,r){/* eslint-disable no-undef */var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof l[o]&&l[o],u=i.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function f(t,n){if(!u[t]){if(!e[t]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var r="function"==typeof l[o]&&l[o];if(!n&&r)return r(t,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(i)return i(t,!0);// Try the node require function if it exists.
if(s&&"string"==typeof t)return s(t);var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}d.resolve=function(n){var o=e[t][1][n];return null!=o?o:n},d.cache={};var c=u[t]=new f.Module(t);e[t][0].call(c.exports,d,c,c.exports,this)}return u[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:f(t)}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=u,f.parent=i,f.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(f,"root",{get:function(){return l[o]}}),l[o]=f;for(var a=0;a<t.length;a++)f(t[a]);if(n){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var c=f(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):r&&(this[r]=c)}}({eEHR6:[function(e,t,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(n),o.export(n,"default",()=>i);var r=e("bundle-text:./image.svg"),l=o.interopDefault(r);function i(e){return t=>{!function(e){let{version:t,utils:{errorHandle:n}}=e.constructor,o=t.split(".").map(Number),r=o[0],l=o[1]/100;n(r+l>=5,`Artplayer.js@${t} is not compatible the artplayerPluginHlsQuality@${i.version}. Please update it to version Artplayer.js@5.x.x`)}(t);let{$video:n}=t.template,{errorHandle:o}=t.constructor.utils;function r(){let r=t.hls||window.hls;o(r&&r.media===n,'Cannot find instance of HLS from "art.hls" or "window.hls"');let i=e.auto||"Auto",u=e.title||"Quality",s=e.getResolution||(e=>(e.height||"Unknown ")+"P"),f=r.levels[r.currentLevel],a=f?s(f):i;e.control&&t.controls.update({name:"hls-quality",position:"right",html:a,style:{padding:"0 10px"},selector:r.levels.map((e,t)=>({html:s(e),level:e.level||t,default:f===e})),onSelect:e=>(r.currentLevel=e.level,t.loading.show=!0,e.html)}),e.setting&&t.setting.update({name:"hls-quality",tooltip:a,html:u,icon:l.default,width:200,selector:r.levels.map((e,t)=>({html:s(e),level:e.level||t,default:f===e})),onSelect:function(e){return r.currentLevel=e.level,t.loading.show=!0,e.html}})}return t.on("ready",r),t.on("restart",r),{name:"artplayerPluginHlsQuality"}}}i.env="production",i.version="2.0.0",i.build="2023-08-26 13:29:24","undefined"!=typeof window&&(window.artplayerPluginHlsQuality=i)},{"bundle-text:./image.svg":"5VXix","@parcel/transformer-js/src/esmodule-helpers.js":"9pCYc"}],"5VXix":[function(e,t,n){t.exports='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M870.4 176H153.6c-49.472 0-89.6 40.128-89.6 89.6v492.736c0 49.472 40.128 89.6 89.6 89.6h716.8c49.472 0 89.6-40.128 89.6-89.6V265.6c0-49.472-40.128-89.6-89.6-89.6zm0 492.8h-44.8s-29.696-65.792-89.6-89.6-134.4 89.6-134.4 89.6-66.56-71.808-134.4-224S153.6 624 153.6 624V265.6h716.8v403.2zM668.8 489.6c37.056 0 67.2-30.144 67.2-67.264 0-37.056-30.144-67.2-67.2-67.2-37.12.064-67.2 30.208-67.2 67.264 0 37.12 30.08 67.2 67.2 67.2z" fill="#fff"/></svg>'},{}],"9pCYc":[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach(function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["eEHR6"],"eEHR6","parcelRequire4dc0");