(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[9724],{6208:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});const r={dialogTitle:"Hint",dialogConfirmButtonText:"Confirm",dialogCancelButtonText:"Cancel",actionSheetTitle:"Select One",listLoadingText:"Loading",listFinishedText:"No more",listErrorText:"Load fail",pickerTitle:"Pick it",pickerConfirmButtonText:"Confirm",pickerCancelButtonText:"Cancel",monthDictionary:{"01":{name:"January",abbr:"JAN"},"02":{name:"February",abbr:"FEB"},"03":{name:"March",abbr:"MAR"},"04":{name:"April",abbr:"APR"},"05":{name:"May",abbr:"MAY"},"06":{name:"June",abbr:"JUN"},"07":{name:"July",abbr:"JUL"},"08":{name:"August",abbr:"AUG"},"09":{name:"September",abbr:"SEP"},10:{name:"October",abbr:"OCT"},11:{name:"November",abbr:"NOV"},12:{name:"December",abbr:"DEC"}},weekDictionary:{0:{name:"Sunday",abbr:"S"},1:{name:"Monday",abbr:"M"},2:{name:"Tuesday",abbr:"T"},3:{name:"Wednesday",abbr:"W"},4:{name:"Thursday",abbr:"T"},5:{name:"Friday",abbr:"F"},6:{name:"Saturday",abbr:"S"}},selected:" selected"}},926:(e,n,t)=>{"use strict";t.d(n,{bU:()=>u,P2:()=>s,IH:()=>d,D$:()=>f});var r=t(6156),a=t(641),i=t(7532);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(){var e={},n=(0,a.iH)({}),t=function(t){if(!e[t])return console.warn("The ".concat(t," does not exist. You can mount a language package using the add method")),{};n.value=e[t]};return{packs:e,pack:n,add:function(n,t){t.lang=n,e[n]=t},use:t,merge:function(n,r){e[n]?(e[n]=c(c({},e[n]),r),t(n)):console.warn("The ".concat(n," does not exist. You can mount a language package using the add method"))}}}var l=u(),s=(l.packs,l.pack),d=l.add,f=l.use;l.merge,d("zh-CN",i.Z),f("zh-CN")},7532:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});const r={dialogTitle:"提示",dialogConfirmButtonText:"确认",dialogCancelButtonText:"取消",actionSheetTitle:"请选择",listLoadingText:"加载中",listFinishedText:"没有更多了",listErrorText:"加载失败",pickerTitle:"请选择",pickerConfirmButtonText:"确认",pickerCancelButtonText:"取消",monthDictionary:{"01":{name:"一月",abbr:"一月"},"02":{name:"二月",abbr:"二月"},"03":{name:"三月",abbr:"三月"},"04":{name:"四月",abbr:"四月"},"05":{name:"五月",abbr:"五月"},"06":{name:"六月",abbr:"六月"},"07":{name:"七月",abbr:"七月"},"08":{name:"八月",abbr:"八月"},"09":{name:"九月",abbr:"九月"},10:{name:"十月",abbr:"十月"},11:{name:"十一月",abbr:"十一月"},12:{name:"十二月",abbr:"十二月"}},weekDictionary:{0:{name:"星期日",abbr:"日"},1:{name:"星期一",abbr:"一"},2:{name:"星期二",abbr:"二"},3:{name:"星期三",abbr:"三"},4:{name:"星期四",abbr:"四"},5:{name:"星期五",abbr:"五"},6:{name:"星期六",abbr:"六"}},selected:"个被选择"}},6530:(e,n,t)=>{"use strict";t.d(n,{Z:()=>p});var r=t(7875),a=t(641),i=t(4612),o=t(7276),c=t(8322);const u=(0,r.aZ)({name:"VarSticky",props:i.N,setup:function(e){var n,t=(0,a.iH)(null),i=(0,a.iH)(null),u=(0,a.iH)(!1),l=(0,a.iH)("0px"),s=(0,a.iH)("0px"),d=(0,a.iH)("auto"),f=(0,a.iH)("auto"),p=(0,a.iH)("auto"),b=(0,a.iH)("auto"),m=(0,r.Fl)((function(){return(0,o.uA)(e.offsetTop)})),v=window,h=function(){var r=0;v!==window&&(r=v.getBoundingClientRect().top);var a=i.value,o=t.value,c=o.getBoundingClientRect(),h=c.top,x=c.left,w=h-r,g=e.onScroll;w<=m.value?(n||(d.value="".concat(o.offsetWidth,"px"),f.value="".concat(o.offsetHeight,"px"),l.value="".concat(r+m.value,"px"),s.value="".concat(x,"px"),p.value="".concat(a.offsetWidth,"px"),b.value="".concat(a.offsetHeight,"px"),u.value=!0),null==g||g(m.value,!0)):(u.value=!1,null==g||g(w,!1))};return(0,r.dl)(h),(0,r.bv)((function(){var e=t.value;n=["sticky","-webkit-sticky"].includes(window.getComputedStyle(e).position),(v=(0,o.Ak)(e))!==window&&v.addEventListener("scroll",h),window.addEventListener("scroll",h),h()})),(0,r.Ah)((function(){window.removeEventListener("scroll",h),v!==window&&v.removeEventListener("scroll",h)})),{stickyEl:t,wrapperEl:i,isFixed:u,offsetTop:m,fixedTop:l,fixedLeft:s,fixedWidth:d,fixedHeight:f,fixedWrapperWidth:p,fixedWrapperHeight:b,toNumber:c.He}}});var l=t(6062),s=t.n(l),d=t(8035);s()(d.Z,{insert:"head",singleton:!1}),d.Z.locals,u.render=function(e,n,t,a,i,o){return(0,r.wg)(),(0,r.j4)("div",{class:"var-sticky",ref:"stickyEl",style:{zIndex:e.toNumber(e.zIndex),top:e.isFixed?null:"".concat(e.offsetTop,"px"),width:e.isFixed?e.fixedWidth:null,height:e.isFixed?e.fixedHeight:null}},[(0,r.Wm)("div",{class:"var-sticky__wrapper",ref:"wrapperEl",style:{zIndex:e.toNumber(e.zIndex),position:e.isFixed?"fixed":null,width:e.isFixed?e.fixedWrapperWidth:null,height:e.isFixed?e.fixedWrapperHeight:null,left:e.isFixed?e.fixedLeft:null,top:e.isFixed?e.fixedTop:null}},[(0,r.WI)(e.$slots,"default")],4)],4)};const f=u;f.install=function(e){e.component(f.name,f)};const p=f},4612:(e,n,t)=>{"use strict";t.d(n,{N:()=>r});var r={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},onScroll:{type:Function}}},7276:(e,n,t)=>{"use strict";t.d(n,{vF:()=>u,cx:()=>l,vj:()=>s,IS:()=>d,UD:()=>f,R6:()=>b,xj:()=>m,Ak:()=>v,I:()=>h,uA:()=>y,gI:()=>k,U7:()=>T,Wx:()=>S,xX:()=>W,X5:()=>H,ez:()=>Z});var r=t(4699),a=t(2137),i=t(7757),o=t.n(i),c=t(8322);function u(e){return e.getBoundingClientRect().top+(document.body.scrollTop||document.documentElement.scrollTop)}function l(e){var n="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(n,0)}function s(e){var n="scrollLeft"in e?e.scrollLeft:e.pageXOffset;return Math.max(n,0)}function d(e){return e.getBoundingClientRect().left+(document.body.scrollLeft||document.documentElement.scrollLeft)}function f(e){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)(o().mark((function e(n){var t,r,a,i,c,u,l,s,d,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return t=n.getBoundingClientRect(),r=t.top,a=t.bottom,i=t.left,c=t.right,u=window,l=u.innerWidth,s=u.innerHeight,d=i<=l&&c>=0,f=r<=s&&a>=0,e.abrupt("return",d&&f);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){var n=window.getComputedStyle(e).transform;return+n.slice(n.lastIndexOf(",")+2,n.length-1)}function m(e){var n=e.getBoundingClientRect(),t=n.width,r=n.height;return 0===t&&0===r}function v(e){for(var n=e;n&&n.parentNode&&(n=n.parentNode)!==document.body&&n!==document.documentElement;){var t=/(scroll|auto)/,r=window.getComputedStyle(n),a=r.overflowY,i=r.overflow;if(t.test(a)||t.test(i))return n}return window}function h(e){for(var n=[],t=e;t!==window;)t=v(t),n.push(t);return n}var x=function(e){return(0,c.HD)(e)&&e.endsWith("rem")},w=function(e){return(0,c.HD)(e)&&e.endsWith("vw")},g=function(e){return(0,c.HD)(e)&&e.endsWith("vh")},y=function(e){if((0,c.hj)(e))return e;if(function(e){return(0,c.HD)(e)&&e.endsWith("px")||(0,c.hj)(e)}(e))return+e.replace("px","");if(w(e))return+e.replace("vw","")*window.innerWidth/100;if(g(e))return+e.replace("vh","")*window.innerHeight/100;if(x(e)){var n=+e.replace("rem",""),t=window.getComputedStyle(document.documentElement).fontSize;return n*parseFloat(t)}return(0,c.HD)(e)?(0,c.He)(e):0},k=function(e){return null==e?null:function(e){return(0,c.HD)(e)&&e.endsWith("%")}(e)||w(e)||g(e)||x(e)?e:"".concat(y(e),"px")};function T(e){return window.requestAnimationFrame?window.requestAnimationFrame(e):window.setTimeout(e,16)}function S(e){window.cancelAnimationFrame?window.cancelAnimationFrame(e):window.clearTimeout(e)}function W(e){T((function(){T(e)}))}function C(){return new Promise((function(e){T((function(){T(e)}))}))}function H(e,n){var t=n.top,r=void 0===t?0:t,a=n.left,i=void 0===a?0:a,o=n.duration,c=void 0===o?300:o,u=n.animation,d=Date.now(),f=l(e),p=s(e);return new Promise((function(n){T((function t(){var a=(Date.now()-d)/c;if(a<1){var o=f+(r-f)*u(a),l=p+(i-p)*u(a);e.scrollTo(l,o),T(t)}else e.scrollTo(i,r),n()}))}))}function Z(e){return Object.entries(e).reduce((function(e,n){var t=(0,r.Z)(n,2),a=t[0],i=t[1];return e[a.startsWith("--")?a:"--".concat((0,c.GL)(a))]=i,e}),{})}},6209:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(2609),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,".app-type {\n  width: 100%;\n  padding: 15px 0;\n  color: #888;\n  font-size: 14px;\n}\n",""]);const i=a},8035:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(2609),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n.var-sticky {\n  position: sticky;\n  position: -webkit-sticky;\n}\n",""]);const i=a},4366:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(2609),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,".example[data-v-1d8bab44] {\n  min-height: 200vh;\n}\n.example .scroller[data-v-1d8bab44] {\n  height: 200px;\n  overflow: auto;\n  background: #3a7afe;\n}\n.example .scroller .block[data-v-1d8bab44] {\n  width: 100%;\n  height: 600px;\n  background: #00afef;\n  opacity: 0.5;\n}\n",""]);const i=a},9433:(e,n,t)=>{"use strict";t.d(n,{Z:()=>l});var r=t(7875),a={class:"app-type"};const i=(0,r.aZ)({name:"AppType"});var o=t(6062),c=t.n(o),u=t(6209);c()(u.Z,{insert:"head",singleton:!1}),u.Z.locals,i.render=function(e,n,t,i,o,c){return(0,r.wg)(),(0,r.j4)("div",a,[(0,r.WI)(e.$slots,"default")])};const l=i},9724:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>Z});var r=t(7875),a=t(349),i=(0,r.HX)("data-v-1d8bab44");(0,r.dD)("data-v-1d8bab44");var o={class:"example"},c={class:"scroller"},u=(0,r.Wm)("div",{class:"block"},null,-1);(0,r.Cn)();var l,s=i((function(e,n,t,l,s,d){var f=(0,r.up)("app-type"),p=(0,r.up)("var-button"),b=(0,r.up)("var-sticky");return(0,r.wg)(),(0,r.j4)("div",o,[(0,r.Wm)(f,null,{default:i((function(){return[(0,r.Uk)((0,a.zw)(l.pack.basicUsage),1)]})),_:1}),(0,r.Wm)(b,{"offset-top":50},{default:i((function(){return[(0,r.Wm)(p,{type:"primary"},{default:i((function(){return[(0,r.Uk)((0,a.zw)(l.pack.basicUsage),1)]})),_:1})]})),_:1}),(0,r.Wm)(f,null,{default:i((function(){return[(0,r.Uk)((0,a.zw)(l.pack.localSticky),1)]})),_:1}),(0,r.Wm)("div",c,[(0,r.Wm)(b,null,{default:i((function(){return[(0,r.Wm)(p,{type:"success"},{default:i((function(){return[(0,r.Uk)((0,a.zw)(l.pack.localSticky),1)]})),_:1})]})),_:1}),u])])})),d=t(6156),f=t(6530),p=t(5602),b=t(9433),m=t(3638),v=t(7532),h=t(6208),x=t(926),w=(0,x.bU)(),g=w.add,y=w.use,k=w.pack,T=(w.packs,w.merge,function(e){(0,x.D$)(e),y(e)});(0,x.IH)("zh-CN",v.Z),(0,x.IH)("en-US",h.Z),g("zh-CN",{basicUsage:"基本使用",localSticky:"局部吸顶"}),g("en-US",{basicUsage:"Basic Usage",localSticky:"Local Sticky"});const S={name:"StickyExample",components:(l={},(0,d.Z)(l,f.Z.name,f.Z),(0,d.Z)(l,p.Z.name,p.Z),(0,d.Z)(l,"AppType",b.Z),l),setup:function(){return(0,m.jS)(T),{pack:k}}};var W=t(6062),C=t.n(W),H=t(4366);C()(H.Z,{insert:"head",singleton:!1}),H.Z.locals,S.render=s,S.__scopeId="data-v-1d8bab44";const Z=S},4699:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var r=t(2961);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return t}}(e,n)||(0,r.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);