/*!
 * artplayer-plugin-ads.js v1.0.6
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2022 Harvey Zack
 * Released under the MIT License.
 */
!function(e,n,t,l,r){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof a.parcelRequirea5da&&a.parcelRequirea5da,o=i.cache||{},d="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(n,t){if(!o[n]){if(!e[n]){var l="function"==typeof a.parcelRequirea5da&&a.parcelRequirea5da;if(!t&&l)return l(n,!0);if(i)return i(n,!0);if(d&&"string"==typeof n)return d(n);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}p.resolve=function(t){var l=e[n][1][t];return null!=l?l:t},p.cache={};var u=o[n]=new s.Module(n);e[n][0].call(u.exports,p,u,u.exports,this)}return o[n].exports;function p(e){var n=p.resolve(e);return!1===n?{}:s(n)}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=e,s.cache=o,s.parent=i,s.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(s,"root",{get:function(){return a.parcelRequirea5da}}),a.parcelRequirea5da=s;for(var u=0;u<n.length;u++)s(n[u]);var p=s(t);"object"==typeof exports&&"undefined"!=typeof module?module.exports=p:"function"==typeof define&&define.amd&&define((function(){return p}))}({bqk8e:[function(e,n,t){var l=e("@parcel/transformer-js/src/esmodule-helpers.js");l.defineInteropFlag(t);var r=e("@swc/helpers/src/_object_spread.mjs"),a=l.interopDefault(r),i=e("bundle-text:./style.less"),o=l.interopDefault(i);function d(e){return function(n){var t=n.template.$player,l=n.icons,r=l.volume,i=l.volumeClose,o=l.fullscreenOn,d=l.fullscreenOff,s=l.loading,u=n.constructor,p=u.validator,c=u.utils,f=c.query,y=c.append,g=c.setStyle;e=p((0,a.default)({html:"",video:"",url:"",playDuration:5,totalDuration:10,muted:!1,i18n:{close:"关闭广告",countdown:"%s秒",detail:"查看详情",canBeClosed:"%s秒后可关闭广告"}},e),{html:"?string",video:"?string",url:"?string",playDuration:"number",totalDuration:"number",muted:"?boolean",i18n:{close:"string",countdown:"string",detail:"string",canBeClosed:"string"}});var m=null,v=null,h=null,b=null,x=null,w=null,j=0,k=null,D=!1,O=!1,q=!1;function _(e,n){return n.replace("%s",e)}function P(){D=!0,n.play(),e.video&&m.pause(),g(n.template.$ads,"display","none"),n.emit("artplayerPluginAds:skip",e)}function M(){D||(k=setTimeout((function(){j+=1;var n=e.playDuration-j;n>=1?h.innerHTML=_(n,e.i18n.canBeClosed):(h.innerHTML=e.i18n.close,q||(q=!0)),b.innerHTML=_(e.totalDuration-j,e.i18n.countdown),j>=e.totalDuration?P():M()}),1e3))}function A(){D||clearTimeout(k)}function C(){O||(O=!0,function(){n.template.$ads=y(t,'<div class="artplayer-plugin-ads"></div>'),m=y(n.template.$ads,e.video?'<video class="artplayer-plugin-ads-video" src="'.concat(e.video,'" loop playsInline></video>'):'<div class="artplayer-plugin-ads-html">'.concat(e.html,"</div>")),w=y(n.template.$ads,'<div class="artplayer-plugin-ads-loading"></div>'),y(w,s),v=y(n.template.$ads,'<div class="artplayer-plugin-ads-timer"><div class="artplayer-plugin-ads-close">'.concat(e.playDuration<=0?e.i18n.close:_(e.playDuration,e.i18n.canBeClosed),'</div><div class="artplayer-plugin-ads-countdown">').concat(_(e.totalDuration,e.i18n.countdown),"</div></div>")),h=f(".artplayer-plugin-ads-close",v),b=f(".artplayer-plugin-ads-countdown",v),e.playDuration>=e.totalDuration&&g(h,"display","none"),n.proxy(h,"click",(function(){q&&P()})),x=y(n.template.$ads,'<div class="artplayer-plugin-ads-control"><div class="artplayer-plugin-ads-detail">'.concat(e.i18n.detail,'</div><div class="artplayer-plugin-ads-muted"></div><div class="artplayer-plugin-ads-fullscreen"></div></div>'));var l=f(".artplayer-plugin-ads-detail",x),a=f(".artplayer-plugin-ads-muted",x),u=f(".artplayer-plugin-ads-fullscreen",x);if(e.url?n.proxy(l,"click",(function(){window.open(e.url),n.emit("artplayerPluginAds:click",e)})):g(l,"display","none"),e.video){var p=y(a,r),c=y(a,i);g(c,"display","none"),e.muted&&(m.muted=!0,g(p,"display","none"),g(c,"display","inline-flex")),n.proxy(a,"click",(function(){m.muted=!m.muted,m.muted?(g(p,"display","none"),g(c,"display","inline-flex")):(g(p,"display","inline-flex"),g(c,"display","none"))}))}else g(a,"display","none");var j=y(u,o),k=y(u,d);g(k,"display","none"),n.proxy(u,"click",(function(){n.fullscreen=!n.fullscreen,n.fullscreen?(g(j,"display","inline-flex"),g(k,"display","none")):(g(j,"display","none"),g(k,"display","inline-flex"))})),n.proxy(m,"click",(function(){e.url&&window.open(e.url),n.emit("artplayerPluginAds:click",e)}))}(),n.pause(),e.video?(n.proxy(m,"error",P),n.proxy(m,"loadedmetadata",(function(){M(),m.play(),g(v,"display","flex"),g(x,"display","flex"),g(w,"display","none")}))):(M(),g(v,"display","flex"),g(x,"display","flex"),g(w,"display","none")),n.proxy(document,"visibilitychange",(function(){document.hidden?A():M()})))}return n.on("ready",(function(){n.once("play",C),n.once("video:playing",C)})),{name:"artplayerPluginAds",skip:P,pause:A,play:M}}}if(t.default=d,d.env="production",d.version="1.0.6",d.build="2022-10-27 17:13:55","undefined"!=typeof document&&!document.getElementById("artplayer-plugin-ads")){var s=document.createElement("style");s.id="artplayer-plugin-ads",s.textContent=o.default,document.head.appendChild(s)}"undefined"!=typeof window&&(window.artplayerPluginAds=d)},{"@swc/helpers/src/_object_spread.mjs":"cLk6W","bundle-text:./style.less":"4JQfE","@parcel/transformer-js/src/esmodule-helpers.js":"fN1qf"}],cLk6W:[function(e,n,t){var l=e("@parcel/transformer-js/src/esmodule-helpers.js");l.defineInteropFlag(t);var r=e("./_define_property.mjs"),a=l.interopDefault(r);t.default=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},l=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),l.forEach((function(n){(0,a.default)(e,n,t[n])}))}return e}},{"./_define_property.mjs":"hlAGf","@parcel/transformer-js/src/esmodule-helpers.js":"fN1qf"}],hlAGf:[function(e,n,t){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(t),t.default=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},{"@parcel/transformer-js/src/esmodule-helpers.js":"fN1qf"}],fN1qf:[function(e,n,t){t.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},t.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.exportAll=function(e,n){return Object.keys(e).forEach((function(t){"default"===t||"__esModule"===t||n.hasOwnProperty(t)||Object.defineProperty(n,t,{enumerable:!0,get:function(){return e[t]}})})),n},t.export=function(e,n,t){Object.defineProperty(e,n,{enumerable:!0,get:t})}},{}],"4JQfE":[function(e,n,t){n.exports=".artplayer-plugin-ads{z-index:150;width:100%;height:100%;color:#fff;background-color:#000;font-size:13px;line-height:1;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden}.artplayer-plugin-ads .artplayer-plugin-ads-html{width:100%;height:100%;justify-content:center;align-items:center;display:flex}.artplayer-plugin-ads .artplayer-plugin-ads-video{width:100%;height:100%}.artplayer-plugin-ads .artplayer-plugin-ads-timer{display:none;position:absolute;top:10px;right:10px}.artplayer-plugin-ads .artplayer-plugin-ads-timer>div{cursor:pointer;background-color:rgba(0,0,0,.5);border-radius:15px;align-items:center;margin-left:5px;padding:5px 10px;display:flex}.artplayer-plugin-ads .artplayer-plugin-ads-control{display:none;position:absolute;bottom:10px;right:10px}.artplayer-plugin-ads .artplayer-plugin-ads-control>div{cursor:pointer;background-color:rgba(0,0,0,.5);border-radius:15px;align-items:center;margin-left:5px;padding:5px 10px;display:flex}.artplayer-plugin-ads .artplayer-plugin-ads-control .art-icon svg{width:20px;height:20px}.artplayer-plugin-ads .artplayer-plugin-ads-loading{width:100%;height:100%;justify-content:center;align-items:center;display:flex;position:absolute;top:0;bottom:0;left:0;right:0}"},{}]},["bqk8e"],"bqk8e");