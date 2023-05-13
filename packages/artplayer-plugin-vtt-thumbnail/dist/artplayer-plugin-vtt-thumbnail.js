/*!
 * artplayer-plugin-vtt-thumbnail.js v1.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2023 Harvey Zack
 * Released under the MIT License.
 */
!function(e,t,n,r,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l="function"==typeof i[r]&&i[r],u=l.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function f(t,n){if(!u[t]){if(!e[t]){var o="function"==typeof i[r]&&i[r];if(!n&&o)return o(t,!0);if(l)return l(t,!0);if(s&&"string"==typeof t)return s(t);var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}d.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},d.cache={};var c=u[t]=new f.Module(t);e[t][0].call(c.exports,d,c,c.exports,this)}return u[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:f(t)}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=u,f.parent=l,f.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(f,"root",{get:function(){return i[r]}}),i[r]=f;for(var a=0;a<t.length;a++)f(t[a]);if(n){var c=f(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define((function(){return c}))}}({YTqB2:[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n);var o=e("./getVttArray"),i=r.interopDefault(o);function l(e){return async t=>{const{constructor:{utils:{setStyle:n,clamp:r}},template:{$progress:o},events:{proxy:l}}=t,u=await(0,i.default)(e.vtt);return t.controls.add({name:"thumbnails",position:"top",index:20,style:e.style||{},mounted(e){l(o,"mousemove",(async i=>{n(e,"display","block");const{second:l,width:s}=function(e,t){const{$progress:n}=e.template,{left:o}=n.getBoundingClientRect(),i=r(t.pageX-o,0,n.clientWidth);return{width:i,second:i/n.clientWidth*e.duration}}(t,i),f=u.find((e=>l>=e.start&&l<=e.end));if(!f)return n(e,"display","none");n(e,"backgroundImage",`url(${f.url})`),n(e,"height",`${f.h}px`),n(e,"width",`${f.w}px`),n(e,"backgroundPosition",`-${f.x}px -${f.y}px`),s<=f.w/2?n(e,"left",0):s>o.clientWidth-f.w/2?n(e,"left",o.clientWidth-f.w+"px"):n(e,"left",s-f.w/2+"px")})),l(o,"mouseleave",(()=>{n(e,"display","none")})),t.on("hover",(t=>{t||n(e,"display","none")}))}}),{name:"artplayerPluginVttThumbnail"}}}n.default=l,l.env="production",l.version="1.0.0",l.build="2023-05-13 21:21:38","undefined"!=typeof window&&(window.artplayerPluginVttThumbnail=l)},{"./getVttArray":"4IFMi","@parcel/transformer-js/src/esmodule-helpers.js":"9pCYc"}],"4IFMi":[function(e,t,n){function r(e){var t,n,r,o=e.split("."),i=o[0].split(":")||[],l=(t=o[1]||"0",n=3,r="0",t.length>n?String(t):((n-=t.length)>r.length&&(r+=r.repeat(n/r.length)),String(t)+r.slice(0,n))),u=Number(l)/1e3;return 3600*Number(i[i.length-3]||0)+60*Number(i[i.length-2]||0)+Number(i[i.length-1]||0)+u}e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n),n.default=async function(e=""){const t=(await(await fetch(e)).text()).split(/[\n\r]/gm).filter((e=>e.trim())),n=[];for(let o=1;o<t.length;o+=2){const i=t[o],l=t[o+1];if(!l.trim())continue;const u=/((?:[0-9]{2}:)?(?:[0-9]{2}:)?[0-9]{2}(?:.[0-9]{3})?)(?: ?--> ?)((?:[0-9]{2}:)?(?:[0-9]{2}:)?[0-9]{2}(?:.[0-9]{3})?)/,s=i.match(u),f=/(.*)#(\w{4})=(.*)/i,a=l.match(f),c=Math.floor(r(s[1])),d=Math.floor(r(s[2])),p=e.split("/");p.pop(),p.push(a[1]);const h={start:c,end:d,url:p.join("/")},m=a[2].split(""),g=a[3].split(",");for(let e=0;e<m.length;e++)h[m[e]]=g[e];n.push(h)}return n}},{"@parcel/transformer-js/src/esmodule-helpers.js":"9pCYc"}],"9pCYc":[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach((function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["YTqB2"],"YTqB2","parcelRequire4dc0");