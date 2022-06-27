/*!
 * artplayer-plugin-ads.js v1.0.4
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2022 Harvey Zack
 * Released under the MIT License.
 */
!function(e,n,l,t,i){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="function"==typeof a.parcelRequirea5da&&a.parcelRequirea5da,o=r.cache||{},d="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function p(n,l){if(!o[n]){if(!e[n]){var t="function"==typeof a.parcelRequirea5da&&a.parcelRequirea5da;if(!l&&t)return t(n,!0);if(r)return r(n,!0);if(d&&"string"==typeof n)return d(n);var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}u.resolve=function(l){var t=e[n][1][l];return null!=t?t:l},u.cache={};var s=o[n]=new p.Module(n);e[n][0].call(s.exports,u,s,s.exports,this)}return o[n].exports;function u(e){var n=u.resolve(e);return!1===n?{}:p(n)}}p.isParcelRequire=!0,p.Module=function(e){this.id=e,this.bundle=p,this.exports={}},p.modules=e,p.cache=o,p.parent=r,p.register=function(n,l){e[n]=[function(e,n){n.exports=l},{}]},Object.defineProperty(p,"root",{get:function(){return a.parcelRequirea5da}}),a.parcelRequirea5da=p;for(var s=0;s<n.length;s++)p(n[s]);var u=p(l);"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd&&define((function(){return u}))}({E13ST:[function(e,n,l){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(l);var i=e("bundle-text:./style.less"),a=t.interopDefault(i);function r(e){return n=>{const{template:{$player:l},icons:{volume:t,volumeClose:i,fullscreenOn:a,fullscreenOff:r,loading:o},constructor:{validator:d,utils:{query:p,append:s,setStyle:u}}}=n;e=d({html:"",video:"",url:"",playDuration:5,totalDuration:10,i18n:{close:"关闭广告",countdown:"%s秒",detail:"查看详情",canBeClosed:"%s秒后可关闭广告"},...e},{html:"?string",video:"?string",url:"?string",playDuration:"number",totalDuration:"number",i18n:{close:"string",countdown:"string",detail:"string",canBeClosed:"string"}});let c=null,y=null,f=null,g=null,m=null,v=null,x=0,h=null,b=!1,w=!1,D=!1;function j(e,n){return n.replace("%s",e)}function k(){b=!0,n.play(),e.video&&c.pause(),u(n.template.$ads,"display","none"),n.emit("artplayerPluginAds:skip",e)}function O(){b||(h=setTimeout((()=>{x+=1;const n=e.playDuration-x;n>=1?f.innerHTML=j(n,e.i18n.canBeClosed):(f.innerHTML=e.i18n.close,D||(D=!0)),g.innerHTML=j(e.totalDuration-x,e.i18n.countdown),x>=e.totalDuration?k():O()}),1e3))}function $(){b||clearTimeout(h)}function P(){w||(w=!0,function(){n.template.$ads=s(l,'<div class="artplayer-plugin-ads"></div>'),c=s(n.template.$ads,e.video?`<video class="artplayer-plugin-ads-video" src="${e.video}" loop playsInline></video>`:`<div class="artplayer-plugin-ads-html">${e.html}</div>`),v=s(n.template.$ads,'<div class="artplayer-plugin-ads-loading"></div>'),s(v,o),y=s(n.template.$ads,`<div class="artplayer-plugin-ads-timer"><div class="artplayer-plugin-ads-close">${e.playDuration<=0?e.i18n.close:j(e.playDuration,e.i18n.canBeClosed)}</div><div class="artplayer-plugin-ads-countdown">${j(e.totalDuration,e.i18n.countdown)}</div></div>`),f=p(".artplayer-plugin-ads-close",y),g=p(".artplayer-plugin-ads-countdown",y),e.playDuration>=e.totalDuration&&u(f,"display","none"),n.proxy(f,"click",(()=>{D&&k()})),m=s(n.template.$ads,`<div class="artplayer-plugin-ads-control"><div class="artplayer-plugin-ads-detail">${e.i18n.detail}</div><div class="artplayer-plugin-ads-muted"></div><div class="artplayer-plugin-ads-fullscreen"></div></div>`);const d=p(".artplayer-plugin-ads-detail",m),x=p(".artplayer-plugin-ads-muted",m),h=p(".artplayer-plugin-ads-fullscreen",m);if(e.url?n.proxy(d,"click",(()=>{window.open(e.url),n.emit("artplayerPluginAds:click",e)})):u(d,"display","none"),e.video){const e=s(x,t),l=s(x,i);u(l,"display","none"),n.proxy(x,"click",(()=>{c.muted=!c.muted,c.muted?(u(e,"display","none"),u(l,"display","inline-flex")):(u(e,"display","inline-flex"),u(l,"display","none"))}))}else u(x,"display","none");const b=s(h,a),w=s(h,r);u(w,"display","none"),n.proxy(h,"click",(()=>{n.fullscreen=!n.fullscreen,n.fullscreen?(u(b,"display","inline-flex"),u(w,"display","none")):(u(b,"display","none"),u(w,"display","inline-flex"))})),n.proxy(c,"click",(()=>{e.url&&window.open(e.url),n.emit("artplayerPluginAds:click",e)}))}(),n.pause(),e.video?(n.proxy(c,"error",k),n.proxy(c,"loadedmetadata",(()=>{O(),c.play(),u(y,"display","flex"),u(m,"display","flex"),u(v,"display","none")}))):(O(),u(y,"display","flex"),u(m,"display","flex"),u(v,"display","none")),n.proxy(document,"visibilitychange",(()=>{document.hidden?$():O()})))}return n.on("ready",(()=>{n.once("play",P),n.once("video:playing",P)})),{name:"artplayerPluginAds",skip:k,pause:$,play:O}}}if(l.default=r,r.env="production",r.version="1.0.4",r.build="1656294187607","undefined"!=typeof document&&!document.getElementById("artplayer-plugin-ads")){const e=document.createElement("style");e.id="artplayer-plugin-ads",e.textContent=a.default,document.head.appendChild(e)}"undefined"!=typeof window&&(window.artplayerPluginAds=r)},{"bundle-text:./style.less":"5j5O2","@parcel/transformer-js/src/esmodule-helpers.js":"9v6Cv"}],"5j5O2":[function(e,n,l){n.exports=".artplayer-plugin-ads{z-index:150;width:100%;height:100%;color:#fff;background-color:#000;font-size:13px;line-height:1;position:absolute;inset:0;overflow:hidden}.artplayer-plugin-ads .artplayer-plugin-ads-html{width:100%;height:100%;justify-content:center;align-items:center;display:flex}.artplayer-plugin-ads .artplayer-plugin-ads-video{width:100%;height:100%}.artplayer-plugin-ads .artplayer-plugin-ads-timer{display:none;position:absolute;top:10px;right:10px}.artplayer-plugin-ads .artplayer-plugin-ads-timer>div{cursor:pointer;background-color:#00000080;border-radius:15px;align-items:center;margin-left:5px;padding:5px 10px;display:flex}.artplayer-plugin-ads .artplayer-plugin-ads-control{display:none;position:absolute;bottom:10px;right:10px}.artplayer-plugin-ads .artplayer-plugin-ads-control>div{cursor:pointer;background-color:#00000080;border-radius:15px;align-items:center;margin-left:5px;padding:5px 10px;display:flex}.artplayer-plugin-ads .artplayer-plugin-ads-control .art-icon svg{width:20px;height:20px}.artplayer-plugin-ads .artplayer-plugin-ads-loading{width:100%;height:100%;justify-content:center;align-items:center;display:flex;position:absolute;inset:0}"},{}],"9v6Cv":[function(e,n,l){l.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},l.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.exportAll=function(e,n){return Object.keys(e).forEach((function(l){"default"===l||"__esModule"===l||n.hasOwnProperty(l)||Object.defineProperty(n,l,{enumerable:!0,get:function(){return e[l]}})})),n},l.export=function(e,n,l){Object.defineProperty(e,n,{enumerable:!0,get:l})}},{}]},["E13ST"],"E13ST");