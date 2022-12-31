/*!
 * artplayer-tool-thumbnail.js v4.3.12
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2022 Harvey Zack
 * Released under the MIT License.
 */
!function(e,t,r,n,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof i.parcelRequire7b4c&&i.parcelRequire7b4c,l=s.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,r){if(!l[t]){if(!e[t]){var n="function"==typeof i.parcelRequire7b4c&&i.parcelRequire7b4c;if(!r&&n)return n(t,!0);if(s)return s(t,!0);if(a&&"string"==typeof t)return a(t);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}f.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},f.cache={};var c=l[t]=new u.Module(t);e[t][0].call(c.exports,f,c,c.exports,this)}return l[t].exports;function f(e){var t=f.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=l,u.parent=s,u.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(u,"root",{get:function(){return i.parcelRequire7b4c}}),i.parcelRequire7b4c=u;for(var c=0;c<t.length;c++)u(t[c]);var f=u(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=f:"function"==typeof define&&define.amd&&define((function(){return f}))}({bqk8e:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",(function(){return v}));var o=e("@swc/helpers/src/_assert_this_initialized.mjs"),i=n.interopDefault(o),s=e("@swc/helpers/src/_class_call_check.mjs"),l=n.interopDefault(s),a=e("@swc/helpers/src/_create_class.mjs"),u=n.interopDefault(a),c=e("@swc/helpers/src/_inherits.mjs"),f=n.interopDefault(c),p=e("@swc/helpers/src/_create_super.mjs"),d=n.interopDefault(p),h=e("./emitter"),m=n.interopDefault(h),y=e("./utils"),v=function(e){"use strict";(0,f.default)(r,e);var t=(0,d.default)(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.default)(this,r),(e=t.call(this)).processing=!1,e.option={},e.setup(Object.assign({},r.DEFAULTS,n)),e.video=r.creatVideo(),e.duration=0,e.inputChange=e.inputChange.bind((0,i.default)(e)),e.ondrop=e.ondrop.bind((0,i.default)(e)),e.option.fileInput.addEventListener("change",e.inputChange),e.option.fileInput.addEventListener("dragover",r.ondragover),e.option.fileInput.addEventListener("drop",r.ondrop),e}return(0,u.default)(r,[{key:"ondrop",value:function(e){e.preventDefault();var t=e.dataTransfer.files[0];this.loadVideo(t)}},{key:"setup",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this;this.option=Object.assign({},this.option,e);var r=this.option,n=r.fileInput,o=r.number,i=r.width,s=r.column;if(this.errorHandle(n instanceof Element,"The 'fileInput' is not a Element"),"INPUT"!==n.tagName||"file"!==n.type){n.style.position="relative";var l=document.createElement("input");l.type="file",l.style.position="absolute",l.style.width="100%",l.style.height="100%",l.style.left="0",l.style.top="0",l.style.right="0",l.style.bottom="0",l.style.opacity="0",n.appendChild(l),this.option.fileInput=l}return["number","width","column","begin","end"].forEach((function(e){t.errorHandle("number"==typeof t.option[e],"The '".concat(e,"' is not a number"))})),this.option.number=(0,y.clamp)(o,10,1e3),this.option.width=(0,y.clamp)(i,10,1e3),this.option.column=(0,y.clamp)(s,1,1e3),this}},{key:"inputChange",value:function(e){var t=this.option.fileInput.files[0];this.loadVideo(t),e.target.value=""}},{key:"loadVideo",value:function(e){if(e){var t=this.video.canPlayType(e.type);this.errorHandle("maybe"===t||"probably"===t,"Playback of this file format is not supported: ".concat(e.type));var r=URL.createObjectURL(e);this.videoUrl=r,this.file=e,this.emit("file",this.file),this.video.src=r,this.emit("video",this.video)}}},{key:"start",value:function(){var e=this;if(!this.video.duration)return(0,y.sleep)(1e3).then((function(){return e.start()}));var t=this.option,r=t.width,n=t.number,o=t.begin,i=t.end,s=this.video.videoHeight/this.video.videoWidth*r;this.option.height=s,this.option.begin=(0,y.clamp)(o,0,this.video.duration),this.option.end=(0,y.clamp)(i||this.video.duration,o,this.video.duration),this.errorHandle(this.option.end>this.option.begin,"End time must be greater than the start time"),this.duration=this.option.end-this.option.begin,this.density=n/this.duration,this.errorHandle(this.file&&this.video,"Please select the video file first"),this.errorHandle(!this.processing,"There is currently a task in progress, please wait a moment..."),this.errorHandle(this.density<=1,"The preview density cannot be greater than 1, but got ".concat(this.density));var l=this.creatScreenshotDate(),a=this.creatCanvas(),u=a.getContext("2d");this.emit("canvas",a);var c=l.map((function(t,o){return function(){return new Promise((function(i){e.video.oncanplay=function(){u.drawImage(e.video,t.x,t.y,r,s),a.toBlob((function(t){e.thumbnailUrl&&URL.revokeObjectURL(e.thumbnailUrl),e.thumbnailUrl=URL.createObjectURL(t),e.emit("update",e.thumbnailUrl,(o+1)/n),e.video.oncanplay=null,i()}))},e.video.currentTime=t.time}))}}));return this.processing=!0,(0,y.runPromisesInSeries)(c).then((function(){e.processing=!1,e.emit("done")})).catch((function(t){throw e.processing=!1,e.emit("error",t.message),t}))}},{key:"creatScreenshotDate",value:function(){for(var e=this.option,t=e.number,r=e.width,n=e.height,o=e.column,i=e.begin,s=this.duration/t,l=[i+s];l.length<t;){var a=l[l.length-1];l.push(a+s)}return l.map((function(e,t){return{time:e-s/2,x:t%o*r,y:Math.floor(t/o)*n}}))}},{key:"creatCanvas",value:function(){var e=this.option,t=e.number,r=e.width,n=e.height,o=e.column,i=document.createElement("canvas"),s=i.getContext("2d");return i.width=r*o,i.height=Math.ceil(t/o)*n+30,s.fillStyle="black",s.fillRect(0,0,i.width,i.height),s.font="14px Georgia",s.fillStyle="#fff",s.fillText("From: https://artplayer.org/, Number: ".concat(t,", Width: ").concat(r,", Height: ").concat(n,", Column: ").concat(o),10,i.height-11),i}},{key:"download",value:function(){this.errorHandle(this.file&&this.thumbnailUrl,"Download does not seem to be ready, please create preview first"),this.errorHandle(!this.processing,"There is currently a task in progress, please wait a moment...");var e=document.createElement("a"),t="".concat((0,y.getFileName)(this.file.name),".png");return e.download=t,e.href=this.thumbnailUrl,document.body.appendChild(e),e.click(),document.body.removeChild(e),this.emit("download",t),this}},{key:"errorHandle",value:function(e,t){if(!e)throw this.emit("error",t),new Error(t)}},{key:"destroy",value:function(){this.option.fileInput.removeEventListener("change",this.inputChange),this.option.fileInput.removeEventListener("dragover",r.ondragover),this.option.fileInput.removeEventListener("drop",r.ondrop),document.body.removeChild(this.video),this.videoUrl&&URL.revokeObjectURL(this.videoUrl),this.thumbnailUrl&&URL.revokeObjectURL(this.thumbnailUrl),this.emit("destroy")}}],[{key:"DEFAULTS",get:function(){return{number:60,width:160,height:90,column:10,begin:0,end:NaN}}},{key:"ondragover",value:function(e){e.preventDefault()}},{key:"creatVideo",value:function(){var e=document.createElement("video");return e.style.position="absolute",e.style.top="-9999px",e.style.left="-9999px",e.muted=!0,e.controls=!0,document.body.appendChild(e),e}}]),r}(m.default);window.ArtplayerToolThumbnail=v},{"@swc/helpers/src/_assert_this_initialized.mjs":"dqciq","@swc/helpers/src/_class_call_check.mjs":"i4jGl","@swc/helpers/src/_create_class.mjs":"2A1Ap","@swc/helpers/src/_inherits.mjs":"a3fYc","@swc/helpers/src/_create_super.mjs":"4w9ZX","./emitter":"eQX3k","./utils":"50e2b","@parcel/transformer-js/src/esmodule-helpers.js":"6uDyy"}],dqciq:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},{"@parcel/transformer-js/src/esmodule-helpers.js":"6uDyy"}],"6uDyy":[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach((function(r){"default"===r||"__esModule"===r||t.hasOwnProperty(r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})})),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],i4jGl:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{"@parcel/transformer-js/src/esmodule-helpers.js":"6uDyy"}],"2A1Ap":[function(e,t,r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},{"@parcel/transformer-js/src/esmodule-helpers.js":"6uDyy"}],a3fYc:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var o=e("./_set_prototype_of.mjs"),i=n.interopDefault(o);r.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,i.default)(e,t)}},{"./_set_prototype_of.mjs":"7anKF","@parcel/transformer-js/src/esmodule-helpers.js":"6uDyy"}],"7anKF":[function(e,t,r){function n(e,t){return n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(e,t)}e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e,t){return n(e,t)}},{"@parcel/transformer-js/src/esmodule-helpers.js":"6uDyy"}],"4w9ZX":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var o=e("./_is_native_reflect_construct.mjs"),i=n.interopDefault(o),s=e("./_get_prototype_of.mjs"),l=n.interopDefault(s),a=e("./_possible_constructor_return.mjs"),u=n.interopDefault(a);r.default=function(e){var t=(0,i.default)();return function(){var r,n=(0,l.default)(e);if(t){var o=(0,l.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,u.default)(this,r)}}},{"./_is_native_reflect_construct.mjs":"csX4C","./_get_prototype_of.mjs":"kMSBZ","./_possible_constructor_return.mjs":"l7FWY","@parcel/transformer-js/src/esmodule-helpers.js":"6uDyy"}],csX4C:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"6uDyy"}],kMSBZ:[function(e,t,r){function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e){return n(e)}},{"@parcel/transformer-js/src/esmodule-helpers.js":"6uDyy"}],l7FWY:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var o=e("./_assert_this_initialized.mjs"),i=n.interopDefault(o),s=e("./_type_of.mjs"),l=n.interopDefault(s);r.default=function(e,t){return!t||"object"!==(0,l.default)(t)&&"function"!=typeof t?(0,i.default)(e):t}},{"./_assert_this_initialized.mjs":"dqciq","./_type_of.mjs":"h50Cl","@parcel/transformer-js/src/esmodule-helpers.js":"6uDyy"}],h50Cl:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}},{"@parcel/transformer-js/src/esmodule-helpers.js":"6uDyy"}],eQX3k:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",(function(){return a}));var o=e("@swc/helpers/src/_class_call_check.mjs"),i=n.interopDefault(o),s=e("@swc/helpers/src/_create_class.mjs"),l=n.interopDefault(s),a=function(){"use strict";function e(){(0,i.default)(this,e)}return(0,l.default)(e,[{key:"on",value:function(e,t,r){var n=this.e||(this.e={});return(n[e]||(n[e]=[])).push({fn:t,ctx:r}),this}},{key:"once",value:function(e,t,r){var n=this;function o(){for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];n.off(e,o),t.apply(r,s)}return o._=t,this.on(e,o,r)}},{key:"emit",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var o=((this.e||(this.e={}))[e]||[]).slice(),i=0;i<o.length;i+=1)o[i].fn.apply(o[i].ctx,r);return this}},{key:"off",value:function(e,t){var r=this.e||(this.e={}),n=r[e],o=[];if(n&&t)for(var i=0,s=n.length;i<s;i+=1)n[i].fn!==t&&n[i].fn._!==t&&o.push(n[i]);return o.length?r[e]=o:delete r[e],this}}]),e}()},{"@swc/helpers/src/_class_call_check.mjs":"i4jGl","@swc/helpers/src/_create_class.mjs":"2A1Ap","@parcel/transformer-js/src/esmodule-helpers.js":"6uDyy"}],"50e2b":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return new Promise((function(t){return setTimeout(t,e)}))}function i(e){return e.reduce((function(e,t){return e.then(t)}),Promise.resolve())}function s(e){var t=e.split(".");return t.pop(),t.join(".")}function l(e,t,r){return Math.max(Math.min(e,Math.max(t,r)),Math.min(t,r))}n.defineInteropFlag(r),n.export(r,"sleep",(function(){return o})),n.export(r,"runPromisesInSeries",(function(){return i})),n.export(r,"getFileName",(function(){return s})),n.export(r,"clamp",(function(){return l}))},{"@parcel/transformer-js/src/esmodule-helpers.js":"6uDyy"}]},["bqk8e"],"bqk8e");