import{S as Z,i as ee,s as te,k as P,l as I,C as V,n as c,b as v,A as G,h as m,F as ie,a as N,m as j,c as W,B as L,J as ne,K as fe,G as le,H as oe,I as ae,L as me,f as D,t as F,M as Se,N as Te,O as Pe,o as Ie,P as ge,Q as Ce,R as K,T as J,v as A,q,w as X,r as B,U as De,x as O,V as Fe,y as M}from"../../chunks/index-e8e1de34.js";/* empty css                        */import{B as ce}from"../../chunks/Button-3745682e.js";import{C as Q,T as re}from"../../chunks/Title-9a1715b3.js";import{T as ue}from"../../chunks/TextBox-2bbbc09f.js";import{b as U}from"../../chunks/paths-846459bd.js";function He(o){let e,t;return{c(){e=P("img"),this.h()},l(s){e=I(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){V(e.src,t=o[0])||c(e,"src",t),c(e,"alt",o[1]),c(e,"class","svelte-1x05kdn")},m(s,r){v(s,e,r)},p(s,[r]){r&1&&!V(e.src,t=s[0])&&c(e,"src",t),r&2&&c(e,"alt",s[1])},i:G,o:G,d(s){s&&m(e)}}}function je(o,e,t){let{src:s}=e,{alt:r="alt"}=e;return o.$$set=n=>{"src"in n&&t(0,s=n.src),"alt"in n&&t(1,r=n.alt)},[s,r]}class $e extends Z{constructor(e){super(),ee(this,e,je,He,te,{src:0,alt:1})}}var Ne=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function We(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var we={exports:{}};(function(o,e){(function(t,s){o.exports=s()})(typeof self<"u"?self:Ne,function(){return function(t){function s(n){if(r[n])return r[n].exports;var l=r[n]={i:n,l:!1,exports:{}};return t[n].call(l.exports,l,l.exports,s),l.l=!0,l.exports}var r={};return s.m=t,s.c=r,s.d=function(n,l,h){s.o(n,l)||Object.defineProperty(n,l,{configurable:!1,enumerable:!0,get:h})},s.n=function(n){var l=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(l,"a",l),l},s.o=function(n,l){return Object.prototype.hasOwnProperty.call(n,l)},s.p="",s(s.s=0)}([function(t,s,r){function n(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(s,"__esModule",{value:!0});var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},h=function(){function a(i,u){for(var g=0;g<u.length;g++){var d=u[g];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,d.key,d)}}return function(i,u,g){return u&&a(i.prototype,u),g&&a(i,g),i}}(),y=function(){function a(i){var u=this;if(n(this,a),this.config=a.mergeSettings(i),this.selector=typeof this.config.selector=="string"?document.querySelector(this.config.selector):this.config.selector,this.selector===null)throw new Error("Something wrong with your selector \u{1F62D}");this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.loop?this.config.startIndex%this.innerElements.length:Math.max(0,Math.min(this.config.startIndex,this.innerElements.length-this.perPage)),this.transformProperty=a.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler","clickHandler"].forEach(function(g){u[g]=u[g].bind(u)}),this.init()}return h(a,[{key:"attachEvents",value:function(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:!1},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler),this.selector.addEventListener("click",this.clickHandler))}},{key:"detachEvents",value:function(){window.removeEventListener("resize",this.resizeHandler),this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),this.selector.removeEventListener("click",this.clickHandler)}},{key:"init",value:function(){this.attachEvents(),this.selector.style.overflow="hidden",this.selector.style.direction=this.config.rtl?"rtl":"ltr",this.buildSliderFrame(),this.config.onInit.call(this)}},{key:"buildSliderFrame",value:function(){var i=this.selectorWidth/this.perPage,u=this.config.loop?this.innerElements.length+2*this.perPage:this.innerElements.length;this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=i*u+"px",this.enableTransition(),this.config.draggable&&(this.selector.style.cursor="-webkit-grab");var g=document.createDocumentFragment();if(this.config.loop)for(var d=this.innerElements.length-this.perPage;d<this.innerElements.length;d++){var b=this.buildSliderFrameItem(this.innerElements[d].cloneNode(!0));g.appendChild(b)}for(var E=0;E<this.innerElements.length;E++){var T=this.buildSliderFrameItem(this.innerElements[E]);g.appendChild(T)}if(this.config.loop)for(var S=0;S<this.perPage;S++){var p=this.buildSliderFrameItem(this.innerElements[S].cloneNode(!0));g.appendChild(p)}this.sliderFrame.appendChild(g),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"buildSliderFrameItem",value:function(i){var u=document.createElement("div");return u.style.cssFloat=this.config.rtl?"right":"left",u.style.float=this.config.rtl?"right":"left",u.style.width=(this.config.loop?100/(this.innerElements.length+2*this.perPage):100/this.innerElements.length)+"%",u.appendChild(i),u}},{key:"resolveSlidesNumber",value:function(){if(typeof this.config.perPage=="number")this.perPage=this.config.perPage;else if(l(this.config.perPage)==="object"){this.perPage=1;for(var i in this.config.perPage)window.innerWidth>=i&&(this.perPage=this.config.perPage[i])}}},{key:"prev",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,u=arguments[1];if(!(this.innerElements.length<=this.perPage)){var g=this.currentSlide;if(this.config.loop)if(this.currentSlide-i<0){this.disableTransition();var d=this.currentSlide+this.innerElements.length,b=this.perPage,E=d+b,T=(this.config.rtl?1:-1)*E*(this.selectorWidth/this.perPage),S=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(T+S)+"px, 0, 0)",this.currentSlide=d-i}else this.currentSlide=this.currentSlide-i;else this.currentSlide=Math.max(this.currentSlide-i,0);g!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),u&&u.call(this))}}},{key:"next",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,u=arguments[1];if(!(this.innerElements.length<=this.perPage)){var g=this.currentSlide;if(this.config.loop)if(this.currentSlide+i>this.innerElements.length-this.perPage){this.disableTransition();var d=this.currentSlide-this.innerElements.length,b=this.perPage,E=d+b,T=(this.config.rtl?1:-1)*E*(this.selectorWidth/this.perPage),S=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(T+S)+"px, 0, 0)",this.currentSlide=d+i}else this.currentSlide=this.currentSlide+i;else this.currentSlide=Math.min(this.currentSlide+i,this.innerElements.length-this.perPage);g!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),u&&u.call(this))}}},{key:"disableTransition",value:function(){this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing}},{key:"enableTransition",value:function(){this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing}},{key:"goTo",value:function(i,u){if(!(this.innerElements.length<=this.perPage)){var g=this.currentSlide;this.currentSlide=this.config.loop?i%this.innerElements.length:Math.min(Math.max(i,0),this.innerElements.length-this.perPage),g!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),u&&u.call(this))}}},{key:"slideToCurrent",value:function(i){var u=this,g=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,d=(this.config.rtl?1:-1)*g*(this.selectorWidth/this.perPage);i?requestAnimationFrame(function(){requestAnimationFrame(function(){u.enableTransition(),u.sliderFrame.style[u.transformProperty]="translate3d("+d+"px, 0, 0)"})}):this.sliderFrame.style[this.transformProperty]="translate3d("+d+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var i=(this.config.rtl?-1:1)*(this.drag.endX-this.drag.startX),u=Math.abs(i),g=this.config.multipleDrag?Math.ceil(u/(this.selectorWidth/this.perPage)):1,d=i>0&&this.currentSlide-g<0,b=i<0&&this.currentSlide+g>this.innerElements.length-this.perPage;i>0&&u>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(g):i<0&&u>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(g),this.slideToCurrent(d||b)}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.currentSlide+this.perPage>this.innerElements.length&&(this.currentSlide=this.innerElements.length<=this.perPage?0:this.innerElements.length-this.perPage),this.selectorWidth=this.selector.offsetWidth,this.buildSliderFrame()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:this.drag.preventClick}}},{key:"touchstartHandler",value:function(i){["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(i.target.nodeName)!==-1||(i.stopPropagation(),this.pointerDown=!0,this.drag.startX=i.touches[0].pageX,this.drag.startY=i.touches[0].pageY)}},{key:"touchendHandler",value:function(i){i.stopPropagation(),this.pointerDown=!1,this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(i){if(i.stopPropagation(),this.drag.letItGo===null&&(this.drag.letItGo=Math.abs(this.drag.startY-i.touches[0].pageY)<Math.abs(this.drag.startX-i.touches[0].pageX)),this.pointerDown&&this.drag.letItGo){i.preventDefault(),this.drag.endX=i.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var u=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,g=u*(this.selectorWidth/this.perPage),d=this.drag.endX-this.drag.startX,b=this.config.rtl?g+d:g-d;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*b+"px, 0, 0)"}}},{key:"mousedownHandler",value:function(i){["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(i.target.nodeName)!==-1||(i.preventDefault(),i.stopPropagation(),this.pointerDown=!0,this.drag.startX=i.pageX)}},{key:"mouseupHandler",value:function(i){i.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(i){if(i.preventDefault(),this.pointerDown){i.target.nodeName==="A"&&(this.drag.preventClick=!0),this.drag.endX=i.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var u=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,g=u*(this.selectorWidth/this.perPage),d=this.drag.endX-this.drag.startX,b=this.config.rtl?g+d:g-d;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*b+"px, 0, 0)"}}},{key:"mouseleaveHandler",value:function(i){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=i.pageX,this.drag.preventClick=!1,this.enableTransition(),this.updateAfterDrag(),this.clearDrag())}},{key:"clickHandler",value:function(i){this.drag.preventClick&&i.preventDefault(),this.drag.preventClick=!1}},{key:"remove",value:function(i,u){if(i<0||i>=this.innerElements.length)throw new Error("Item to remove doesn't exist \u{1F62D}");var g=i<this.currentSlide,d=this.currentSlide+this.perPage-1===i;(g||d)&&this.currentSlide--,this.innerElements.splice(i,1),this.buildSliderFrame(),u&&u.call(this)}},{key:"insert",value:function(i,u,g){if(u<0||u>this.innerElements.length+1)throw new Error("Unable to inset it at this index \u{1F62D}");if(this.innerElements.indexOf(i)!==-1)throw new Error("The same item in a carousel? Really? Nope \u{1F62D}");var d=u<=this.currentSlide>0&&this.innerElements.length;this.currentSlide=d?this.currentSlide+1:this.currentSlide,this.innerElements.splice(u,0,i),this.buildSliderFrame(),g&&g.call(this)}},{key:"prepend",value:function(i,u){this.insert(i,0),u&&u.call(this)}},{key:"append",value:function(i,u){this.insert(i,this.innerElements.length+1),u&&u.call(this)}},{key:"destroy",value:function(){var i=arguments.length>0&&arguments[0]!==void 0&&arguments[0],u=arguments[1];if(this.detachEvents(),this.selector.style.cursor="auto",i){for(var g=document.createDocumentFragment(),d=0;d<this.innerElements.length;d++)g.appendChild(this.innerElements[d]);this.selector.innerHTML="",this.selector.appendChild(g),this.selector.removeAttribute("style")}u&&u.call(this)}}],[{key:"mergeSettings",value:function(i){var u={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}},g=i;for(var d in g)u[d]=g[d];return u}},{key:"webkitOrNot",value:function(){return typeof document.documentElement.style.transform=="string"?"transform":"WebkitTransform"}}]),a}();s.default=y,t.exports=s.default}])})})(we);const Le=We(we.exports);function de(o,e,t){const s=o.slice();return s[30]=e[t],s[32]=t,s}const Ae=o=>({}),pe=o=>({}),Xe=o=>({}),ve=o=>({});function _e(o){let e,t,s,r;function n(){return o[25](o[32])}return{c(){e=P("li"),this.h()},l(l){e=I(l,"LI",{class:!0}),j(e).forEach(m),this.h()},h(){c(e,"class",t=ge(o[1](o[6],o[32])?"active":"")+" svelte-o48kw6")},m(l,h){v(l,e,h),s||(r=ne(e,"click",n),s=!0)},p(l,h){o=l,h[0]&64&&t!==(t=ge(o[1](o[6],o[32])?"active":"")+" svelte-o48kw6")&&c(e,"class",t)},d(l){l&&m(e),s=!1,r()}}}function Oe(o){let e,t,s,r,n,l,h,y,a,i,u,g,d;const b=o[23].default,E=ie(b,o,o[22],null),T=o[23]["left-control"],S=ie(T,o,o[22],ve),p=o[23]["right-control"],k=ie(p,o,o[22],pe);let C={length:o[8]},H=[];for(let _=0;_<C.length;_+=1)H[_]=_e(de(o,C,_));return{c(){e=P("div"),t=P("div"),E&&E.c(),s=N(),r=P("button"),S&&S.c(),l=N(),h=P("button"),k&&k.c(),a=N(),i=P("ul");for(let _=0;_<H.length;_+=1)H[_].c();this.h()},l(_){e=I(_,"DIV",{class:!0});var f=j(e);t=I(f,"DIV",{class:!0});var $=j(t);E&&E.l($),$.forEach(m),s=W(f),r=I(f,"BUTTON",{class:!0,"aria-label":!0});var z=j(r);S&&S.l(z),z.forEach(m),l=W(f),h=I(f,"BUTTON",{class:!0,"aria-label":!0});var R=j(h);k&&k.l(R),R.forEach(m),a=W(f),i=I(f,"UL",{class:!0});var x=j(i);for(let Y=0;Y<H.length;Y+=1)H[Y].l(x);x.forEach(m),f.forEach(m),this.h()},h(){c(t,"class","slides"),c(r,"class","left svelte-o48kw6"),c(r,"aria-label","left"),c(h,"class","right svelte-o48kw6"),c(h,"aria-label","right"),c(i,"class","svelte-o48kw6"),c(e,"class","carousel svelte-o48kw6")},m(_,f){v(_,e,f),L(e,t),E&&E.m(t,null),o[24](t),L(e,s),L(e,r),S&&S.m(r,null),L(e,l),L(e,h),k&&k.m(h,null),L(e,a),L(e,i);for(let $=0;$<H.length;$+=1)H[$].m(i,null);u=!0,g||(d=[ne(r,"click",o[2]),fe(n=o[9].call(null,r,o[0])),ne(h,"click",o[3]),fe(y=o[9].call(null,h,o[0]))],g=!0)},p(_,f){if(E&&E.p&&(!u||f[0]&4194304)&&le(E,b,_,_[22],u?ae(b,_[22],f,null):oe(_[22]),null),S&&S.p&&(!u||f[0]&4194304)&&le(S,T,_,_[22],u?ae(T,_[22],f,Xe):oe(_[22]),ve),n&&me(n.update)&&f[0]&1&&n.update.call(null,_[0]),k&&k.p&&(!u||f[0]&4194304)&&le(k,p,_,_[22],u?ae(p,_[22],f,Ae):oe(_[22]),pe),y&&me(y.update)&&f[0]&1&&y.update.call(null,_[0]),f[0]&370){C={length:_[8]};let $;for($=0;$<C.length;$+=1){const z=de(_,C,$);H[$]?H[$].p(z,f):(H[$]=_e(z),H[$].c(),H[$].m(i,null))}for(;$<H.length;$+=1)H[$].d(1);H.length=C.length}},i(_){u||(D(E,_),D(S,_),D(k,_),u=!0)},o(_){F(E,_),F(S,_),F(k,_),u=!1},d(_){_&&m(e),E&&E.d(_),o[24](null),S&&S.d(_),k&&k.d(_),Se(H,_),g=!1,Te(d)}}}function Me(o,e,t){let s,r,n,{$$slots:l={},$$scope:h}=e,{perPage:y=3}=e,{loop:a=!0}=e,{autoplay:i=0}=e,{duration:u=200}=e,{easing:g="ease-out"}=e,{startIndex:d=0}=e,{draggable:b=!0}=e,{multipleDrag:E=!0}=e,{threshold:T=20}=e,{rtl:S=!1}=e,p=d,k,C,H;const _=Pe();Ie(()=>(t(21,C=new Le({selector:k,perPage:typeof y=="object"?y:Number(y),loop:a,duration:u,easing:g,startIndex:d,draggable:b,multipleDrag:E,threshold:T,rtl:S,onChange:be})),i&&(H=setInterval(z,i)),()=>{i>0&&clearInterval(H)}));function f(w,se){return w<0&&(w=s.length+w),w>=se*r&&w<se*r+r}function $(){C.prev()}function z(){C.next(),console.log("right")}function R(w){C.goTo(w)}function x(){clearInterval(H)}function Y(){i&&(H=setInterval(z,i))}function be(w){t(6,p=C.currentSlide),_("change",{currentSlide:C.currentSlide,slideCount:C.innerElements.length})}function ye(w,se){function he($t){x(),Y()}return se&&w.addEventListener("click",he),{destroy(){w.removeEventListener("click",he)}}}function Ee(w){Ce[w?"unshift":"push"](()=>{k=w,t(7,k)})}const ke=w=>R(w*r);return o.$$set=w=>{"perPage"in w&&t(10,y=w.perPage),"loop"in w&&t(11,a=w.loop),"autoplay"in w&&t(0,i=w.autoplay),"duration"in w&&t(12,u=w.duration),"easing"in w&&t(13,g=w.easing),"startIndex"in w&&t(14,d=w.startIndex),"draggable"in w&&t(15,b=w.draggable),"multipleDrag"in w&&t(16,E=w.multipleDrag),"threshold"in w&&t(17,T=w.threshold),"rtl"in w&&t(18,S=w.rtl),"$$scope"in w&&t(22,h=w.$$scope)},o.$$.update=()=>{o.$$.dirty[0]&2097152&&(s=C?C.innerElements:[]),o.$$.dirty[0]&2098176&&t(5,r=C?C.perPage:y),o.$$.dirty[0]&2097184&&t(8,n=C?Math.ceil(C.innerElements.length/r):[])},[i,f,$,z,R,r,p,k,n,ye,y,a,u,g,d,b,E,T,S,x,Y,C,h,l,Ee,ke]}class ze extends Z{constructor(e){super(),ee(this,e,Me,Oe,te,{perPage:10,loop:11,autoplay:0,duration:12,easing:13,startIndex:14,draggable:15,multipleDrag:16,threshold:17,rtl:18,isDotActive:1,left:2,right:3,go:4,pause:19,resume:20},null,[-1,-1])}get isDotActive(){return this.$$.ctx[1]}get left(){return this.$$.ctx[2]}get right(){return this.$$.ctx[3]}get go(){return this.$$.ctx[4]}get pause(){return this.$$.ctx[19]}get resume(){return this.$$.ctx[20]}}function Ge(o){let e,t,s;return{c(){e=K("svg"),t=K("polyline"),this.h()},l(r){e=J(r,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var n=j(e);t=J(n,"polyline",{points:!0}),j(t).forEach(m),n.forEach(m),this.h()},h(){c(t,"points","15 18 9 12 15 6"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"width",o[0]),c(e,"height",o[0]),c(e,"fill","none"),c(e,"viewBox","0 0 24 24"),c(e,"stroke","currentColor"),c(e,"stroke-width",o[1]),c(e,"stroke-linecap","round"),c(e,"stroke-linejoin","round"),c(e,"class",s="feather feather-chevron-left "+o[2])},m(r,n){v(r,e,n),L(e,t)},p(r,[n]){n&1&&c(e,"width",r[0]),n&1&&c(e,"height",r[0]),n&2&&c(e,"stroke-width",r[1]),n&4&&s!==(s="feather feather-chevron-left "+r[2])&&c(e,"class",s)},i:G,o:G,d(r){r&&m(e)}}}function qe(o,e,t){let{size:s="24"}=e,{strokeWidth:r=2}=e,{class:n=""}=e;return s!=="100%"&&(s=s.slice(-1)==="x"?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),o.$$set=l=>{"size"in l&&t(0,s=l.size),"strokeWidth"in l&&t(1,r=l.strokeWidth),"class"in l&&t(2,n=l.class)},[s,r,n]}class Be extends Z{constructor(e){super(),ee(this,e,qe,Ge,te,{size:0,strokeWidth:1,class:2})}}function Re(o){let e,t,s;return{c(){e=K("svg"),t=K("polyline"),this.h()},l(r){e=J(r,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var n=j(e);t=J(n,"polyline",{points:!0}),j(t).forEach(m),n.forEach(m),this.h()},h(){c(t,"points","9 18 15 12 9 6"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"width",o[0]),c(e,"height",o[0]),c(e,"fill","none"),c(e,"viewBox","0 0 24 24"),c(e,"stroke","currentColor"),c(e,"stroke-width",o[1]),c(e,"stroke-linecap","round"),c(e,"stroke-linejoin","round"),c(e,"class",s="feather feather-chevron-right "+o[2])},m(r,n){v(r,e,n),L(e,t)},p(r,[n]){n&1&&c(e,"width",r[0]),n&1&&c(e,"height",r[0]),n&2&&c(e,"stroke-width",r[1]),n&4&&s!==(s="feather feather-chevron-right "+r[2])&&c(e,"class",s)},i:G,o:G,d(r){r&&m(e)}}}function xe(o,e,t){let{size:s="24"}=e,{strokeWidth:r=2}=e,{class:n=""}=e;return s!=="100%"&&(s=s.slice(-1)==="x"?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),o.$$set=l=>{"size"in l&&t(0,s=l.size),"strokeWidth"in l&&t(1,r=l.strokeWidth),"class"in l&&t(2,n=l.class)},[s,r,n]}class Ue extends Z{constructor(e){super(),ee(this,e,xe,Re,te,{size:0,strokeWidth:1,class:2})}}function Ye(o){let e,t,s,r;return{c(){e=K("svg"),t=K("polyline"),s=K("polyline"),this.h()},l(n){e=J(n,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var l=j(e);t=J(l,"polyline",{points:!0}),j(t).forEach(m),s=J(l,"polyline",{points:!0}),j(s).forEach(m),l.forEach(m),this.h()},h(){c(t,"points","7 13 12 18 17 13"),c(s,"points","7 6 12 11 17 6"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"width",o[0]),c(e,"height",o[0]),c(e,"fill","none"),c(e,"viewBox","0 0 24 24"),c(e,"stroke","currentColor"),c(e,"stroke-width",o[1]),c(e,"stroke-linecap","round"),c(e,"stroke-linejoin","round"),c(e,"class",r="feather feather-chevrons-down "+o[2])},m(n,l){v(n,e,l),L(e,t),L(e,s)},p(n,[l]){l&1&&c(e,"width",n[0]),l&1&&c(e,"height",n[0]),l&2&&c(e,"stroke-width",n[1]),l&4&&r!==(r="feather feather-chevrons-down "+n[2])&&c(e,"class",r)},i:G,o:G,d(n){n&&m(e)}}}function Ve(o,e,t){let{size:s="24"}=e,{strokeWidth:r=2}=e,{class:n=""}=e;return s!=="100%"&&(s=s.slice(-1)==="x"?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),o.$$set=l=>{"size"in l&&t(0,s=l.size),"strokeWidth"in l&&t(1,r=l.strokeWidth),"class"in l&&t(2,n=l.class)},[s,r,n]}class Ke extends Z{constructor(e){super(),ee(this,e,Ve,Ye,te,{size:0,strokeWidth:1,class:2})}}function Je(o){let e,t,s,r,n,l,h,y,a,i,u,g,d,b,E,T,S;return{c(){e=P("img"),s=N(),r=P("img"),l=N(),h=P("img"),a=N(),i=P("img"),g=N(),d=P("img"),E=N(),T=P("img"),this.h()},l(p){e=I(p,"IMG",{src:!0,class:!0,alt:!0}),s=W(p),r=I(p,"IMG",{src:!0,class:!0,alt:!0}),l=W(p),h=I(p,"IMG",{src:!0,class:!0,alt:!0}),a=W(p),i=I(p,"IMG",{src:!0,class:!0,alt:!0}),g=W(p),d=I(p,"IMG",{src:!0,class:!0,alt:!0}),E=W(p),T=I(p,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){V(e.src,t=U+"/img/home/grup.jpg")||c(e,"src",t),c(e,"class","slide-content svelte-1lcrjqj"),c(e,"alt","bg"),V(r.src,n=U+"/img/home/2.jpeg")||c(r,"src",n),c(r,"class","slide-content svelte-1lcrjqj"),c(r,"alt","bg"),V(h.src,y=U+"/img/home/piulitza.jpg")||c(h,"src",y),c(h,"class","slide-content svelte-1lcrjqj"),c(h,"alt","bg"),V(i.src,u=U+"/img/home/piulitza2.jpg")||c(i,"src",u),c(i,"class","slide-content svelte-1lcrjqj"),c(i,"alt","bg"),V(d.src,b=U+"/img/home/3.jpeg")||c(d,"src",b),c(d,"class","slide-content svelte-1lcrjqj"),c(d,"alt","bg"),V(T.src,S=U+"/img/home/robot.jpg")||c(T,"src",S),c(T,"class","slide-content svelte-1lcrjqj"),c(T,"alt","bg")},m(p,k){v(p,e,k),v(p,s,k),v(p,r,k),v(p,l,k),v(p,h,k),v(p,a,k),v(p,i,k),v(p,g,k),v(p,d,k),v(p,E,k),v(p,T,k)},p:G,d(p){p&&m(e),p&&m(s),p&&m(r),p&&m(l),p&&m(h),p&&m(a),p&&m(i),p&&m(g),p&&m(d),p&&m(E),p&&m(T)}}}function Qe(o){let e,t,s;return t=new Be({}),{c(){e=P("span"),A(t.$$.fragment),this.h()},l(r){e=I(r,"SPAN",{class:!0,slot:!0});var n=j(e);X(t.$$.fragment,n),n.forEach(m),this.h()},h(){c(e,"class","control svelte-1lcrjqj"),c(e,"slot","left-control")},m(r,n){v(r,e,n),O(t,e,null),s=!0},p:G,i(r){s||(D(t.$$.fragment,r),s=!0)},o(r){F(t.$$.fragment,r),s=!1},d(r){r&&m(e),M(t)}}}function Ze(o){let e,t,s;return t=new Ue({}),{c(){e=P("span"),A(t.$$.fragment),this.h()},l(r){e=I(r,"SPAN",{class:!0,slot:!0});var n=j(e);X(t.$$.fragment,n),n.forEach(m),this.h()},h(){c(e,"class","control svelte-1lcrjqj"),c(e,"slot","right-control")},m(r,n){v(r,e,n),O(t,e,null),s=!0},p:G,i(r){s||(D(t.$$.fragment,r),s=!0)},o(r){F(t.$$.fragment,r),s=!1},d(r){r&&m(e),M(t)}}}function et(o){let e;return{c(){e=q("Our Team")},l(t){e=B(t,"Our Team")},m(t,s){v(t,e,s)},d(t){t&&m(e)}}}function tt(o){let e;return{c(){e=q("What is Team UNDEFINED?")},l(t){e=B(t,"What is Team UNDEFINED?")},m(t,s){v(t,e,s)},d(t){t&&m(e)}}}function st(o){let e,t;return{c(){e=P("p"),t=q("UNDEFINED is a community FIRST Tech Challenge robotics team from C\xE2mpina, Prahova. Our team was founded in October 2018. Our team consists of 15 members, a co-mentor, a mentor and 3 volunteers who try their best to help the team. We were happy to find out that many people were interested. So many that we had to choose carefully the main 15 members while creating a large community of volunteers.")},l(s){e=I(s,"P",{});var r=j(e);t=B(r,"UNDEFINED is a community FIRST Tech Challenge robotics team from C\xE2mpina, Prahova. Our team was founded in October 2018. Our team consists of 15 members, a co-mentor, a mentor and 3 volunteers who try their best to help the team. We were happy to find out that many people were interested. So many that we had to choose carefully the main 15 members while creating a large community of volunteers."),r.forEach(m)},m(s,r){v(s,e,r),L(e,t)},p:G,d(s){s&&m(e)}}}function nt(o){let e;return{c(){e=q("Our Team \xBB")},l(t){e=B(t,"Our Team \xBB")},m(t,s){v(t,e,s)},d(t){t&&m(e)}}}function rt(o){let e,t,s;return t=new ce({props:{noclick:!0,$$slots:{default:[nt]},$$scope:{ctx:o}}}),{c(){e=P("a"),A(t.$$.fragment),this.h()},l(r){e=I(r,"A",{href:!0});var n=j(e);X(t.$$.fragment,n),n.forEach(m),this.h()},h(){c(e,"href",U+"/team")},m(r,n){v(r,e,n),O(t,e,null),s=!0},p(r,n){const l={};n&2&&(l.$$scope={dirty:n,ctx:r}),t.$set(l)},i(r){s||(D(t.$$.fragment,r),s=!0)},o(r){F(t.$$.fragment,r),s=!1},d(r){r&&m(e),M(t)}}}function it(o){let e,t,s,r,n,l,h,y;return e=new re({props:{$$slots:{default:[et]},$$scope:{ctx:o}}}),s=new re({props:{secondary:!0,$$slots:{default:[tt]},$$scope:{ctx:o}}}),n=new ue({props:{$$slots:{default:[st]},$$scope:{ctx:o}}}),h=new Q({props:{$$slots:{default:[rt]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=N(),A(s.$$.fragment),r=N(),A(n.$$.fragment),l=N(),A(h.$$.fragment)},l(a){X(e.$$.fragment,a),t=W(a),X(s.$$.fragment,a),r=W(a),X(n.$$.fragment,a),l=W(a),X(h.$$.fragment,a)},m(a,i){O(e,a,i),v(a,t,i),O(s,a,i),v(a,r,i),O(n,a,i),v(a,l,i),O(h,a,i),y=!0},p(a,i){const u={};i&2&&(u.$$scope={dirty:i,ctx:a}),e.$set(u);const g={};i&2&&(g.$$scope={dirty:i,ctx:a}),s.$set(g);const d={};i&2&&(d.$$scope={dirty:i,ctx:a}),n.$set(d);const b={};i&2&&(b.$$scope={dirty:i,ctx:a}),h.$set(b)},i(a){y||(D(e.$$.fragment,a),D(s.$$.fragment,a),D(n.$$.fragment,a),D(h.$$.fragment,a),y=!0)},o(a){F(e.$$.fragment,a),F(s.$$.fragment,a),F(n.$$.fragment,a),F(h.$$.fragment,a),y=!1},d(a){M(e,a),a&&m(t),M(s,a),a&&m(r),M(n,a),a&&m(l),M(h,a)}}}function lt(o){let e;return{c(){e=q("The First Tech Challenge")},l(t){e=B(t,"The First Tech Challenge")},m(t,s){v(t,e,s)},d(t){t&&m(e)}}}function ot(o){let e;return{c(){e=q("What is FTC?")},l(t){e=B(t,"What is FTC?")},m(t,s){v(t,e,s)},d(t){t&&m(e)}}}function at(o){let e,t,s,r,n;return{c(){e=P("p"),t=q("FIRST (For Inspiration Recognition of Science and Technology) is an international youth organization, founded in 1989 by Dean Kamen, to inspire young people\u2019s interest and participation in science and technology. "),s=P("br"),r=P("br"),n=q(" Guided by adult coaches and mentors, students develop STEM skills and practice engineering principles, while realizing the value of hard work, innovation, and working as a team.")},l(l){e=I(l,"P",{});var h=j(e);t=B(h,"FIRST (For Inspiration Recognition of Science and Technology) is an international youth organization, founded in 1989 by Dean Kamen, to inspire young people\u2019s interest and participation in science and technology. "),s=I(h,"BR",{}),r=I(h,"BR",{}),n=B(h," Guided by adult coaches and mentors, students develop STEM skills and practice engineering principles, while realizing the value of hard work, innovation, and working as a team."),h.forEach(m)},m(l,h){v(l,e,h),L(e,t),L(e,s),L(e,r),L(e,n)},p:G,d(l){l&&m(e)}}}function ct(o){let e;return{c(){e=q("FTC Website \xBB")},l(t){e=B(t,"FTC Website \xBB")},m(t,s){v(t,e,s)},d(t){t&&m(e)}}}function ut(o){let e,t,s;return t=new ce({props:{noclick:!0,$$slots:{default:[ct]},$$scope:{ctx:o}}}),{c(){e=P("a"),A(t.$$.fragment),this.h()},l(r){e=I(r,"A",{href:!0,target:!0});var n=j(e);X(t.$$.fragment,n),n.forEach(m),this.h()},h(){c(e,"href","https://www.firstinspires.org/robotics/ftc"),c(e,"target","_blank")},m(r,n){v(r,e,n),O(t,e,null),s=!0},p(r,n){const l={};n&2&&(l.$$scope={dirty:n,ctx:r}),t.$set(l)},i(r){s||(D(t.$$.fragment,r),s=!0)},o(r){F(t.$$.fragment,r),s=!1},d(r){r&&m(e),M(t)}}}function ht(o){let e,t,s,r,n,l,h,y;return e=new re({props:{$$slots:{default:[lt]},$$scope:{ctx:o}}}),s=new re({props:{secondary:!0,$$slots:{default:[ot]},$$scope:{ctx:o}}}),n=new ue({props:{$$slots:{default:[at]},$$scope:{ctx:o}}}),h=new Q({props:{$$slots:{default:[ut]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=N(),A(s.$$.fragment),r=N(),A(n.$$.fragment),l=N(),A(h.$$.fragment)},l(a){X(e.$$.fragment,a),t=W(a),X(s.$$.fragment,a),r=W(a),X(n.$$.fragment,a),l=W(a),X(h.$$.fragment,a)},m(a,i){O(e,a,i),v(a,t,i),O(s,a,i),v(a,r,i),O(n,a,i),v(a,l,i),O(h,a,i),y=!0},p(a,i){const u={};i&2&&(u.$$scope={dirty:i,ctx:a}),e.$set(u);const g={};i&2&&(g.$$scope={dirty:i,ctx:a}),s.$set(g);const d={};i&2&&(d.$$scope={dirty:i,ctx:a}),n.$set(d);const b={};i&2&&(b.$$scope={dirty:i,ctx:a}),h.$set(b)},i(a){y||(D(e.$$.fragment,a),D(s.$$.fragment,a),D(n.$$.fragment,a),D(h.$$.fragment,a),y=!0)},o(a){F(e.$$.fragment,a),F(s.$$.fragment,a),F(n.$$.fragment,a),F(h.$$.fragment,a),y=!1},d(a){M(e,a),a&&m(t),M(s,a),a&&m(r),M(n,a),a&&m(l),M(h,a)}}}function ft(o){let e,t,s,r;return e=new Q({props:{column:!0,uncentered:!0,$$slots:{default:[ht]},$$scope:{ctx:o}}}),s=new $e({props:{src:U+"/img/ftc-logo.png",alt:"team logo"}}),{c(){A(e.$$.fragment),t=N(),A(s.$$.fragment)},l(n){X(e.$$.fragment,n),t=W(n),X(s.$$.fragment,n)},m(n,l){O(e,n,l),v(n,t,l),O(s,n,l),r=!0},p(n,l){const h={};l&2&&(h.$$scope={dirty:l,ctx:n}),e.$set(h)},i(n){r||(D(e.$$.fragment,n),D(s.$$.fragment,n),r=!0)},o(n){F(e.$$.fragment,n),F(s.$$.fragment,n),r=!1},d(n){M(e,n),n&&m(t),M(s,n)}}}function mt(o){let e,t,s,r,n;return{c(){e=P("p"),t=q("Team UNDEFINED is looking to not only participate in the FIRST TECH CHALLENGE, but to also teach others and give insights into the industry, as well as connect people."),s=P("br"),r=P("br"),n=q("If you want to take part in our adventure, you can apply below! It takes 2 minutes to complete our form.")},l(l){e=I(l,"P",{});var h=j(e);t=B(h,"Team UNDEFINED is looking to not only participate in the FIRST TECH CHALLENGE, but to also teach others and give insights into the industry, as well as connect people."),s=I(h,"BR",{}),r=I(h,"BR",{}),n=B(h,"If you want to take part in our adventure, you can apply below! It takes 2 minutes to complete our form."),h.forEach(m)},m(l,h){v(l,e,h),L(e,t),L(e,s),L(e,r),L(e,n)},p:G,d(l){l&&m(e)}}}function gt(o){let e;return{c(){e=q("Apply Today! \xBB")},l(t){e=B(t,"Apply Today! \xBB")},m(t,s){v(t,e,s)},d(t){t&&m(e)}}}function dt(o){let e,t,s,r,n;return e=new ue({props:{centered:!0,$$slots:{default:[mt]},$$scope:{ctx:o}}}),r=new ce({props:{noclick:!0,$$slots:{default:[gt]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=N(),s=P("a"),A(r.$$.fragment),this.h()},l(l){X(e.$$.fragment,l),t=W(l),s=I(l,"A",{href:!0});var h=j(s);X(r.$$.fragment,h),h.forEach(m),this.h()},h(){c(s,"href",U+"/team/apply")},m(l,h){O(e,l,h),v(l,t,h),v(l,s,h),O(r,s,null),n=!0},p(l,h){const y={};h&2&&(y.$$scope={dirty:h,ctx:l}),e.$set(y);const a={};h&2&&(a.$$scope={dirty:h,ctx:l}),r.$set(a)},i(l){n||(D(e.$$.fragment,l),D(r.$$.fragment,l),n=!0)},o(l){F(e.$$.fragment,l),F(r.$$.fragment,l),n=!1},d(l){M(e,l),l&&m(t),l&&m(s),M(r)}}}function pt(o){let e,t,s,r;return e=new $e({props:{src:U+"/img/home/robot.jpg",alt:"team logo"}}),s=new Q({props:{column:!0,$$slots:{default:[dt]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=N(),A(s.$$.fragment)},l(n){X(e.$$.fragment,n),t=W(n),X(s.$$.fragment,n)},m(n,l){O(e,n,l),v(n,t,l),O(s,n,l),r=!0},p(n,l){const h={};l&2&&(h.$$scope={dirty:l,ctx:n}),s.$set(h)},i(n){r||(D(e.$$.fragment,n),D(s.$$.fragment,n),r=!0)},o(n){F(e.$$.fragment,n),F(s.$$.fragment,n),r=!1},d(n){M(e,n),n&&m(t),M(s,n)}}}function vt(o){let e,t,s,r,n,l,h,y,a,i,u,g,d,b,E,T,S,p,k,C,H,_;return t=new ze({props:{autoplay:5e3,perPage:1,duration:1e3,$$slots:{"right-control":[Ze],"left-control":[Qe],default:[Je]},$$scope:{ctx:o}}}),g=new Ke({props:{size:"0.7x"}}),b=new Q({props:{big:!0,column:!0,uncentered:!0,$$slots:{default:[it]},$$scope:{ctx:o}}}),T=new Q({props:{big:!0,$$slots:{default:[ft]},$$scope:{ctx:o}}}),p=new Q({props:{big:!0,$$slots:{default:[pt]},$$scope:{ctx:o}}}),{c(){e=P("span"),A(t.$$.fragment),s=N(),r=P("div"),n=P("img"),h=N(),y=P("div"),a=q("WE CAN BE ANYTHING"),i=N(),u=P("div"),A(g.$$.fragment),d=N(),A(b.$$.fragment),E=N(),A(T.$$.fragment),S=N(),A(p.$$.fragment),k=N(),this.h()},l(f){e=I(f,"SPAN",{});var $=j(e);X(t.$$.fragment,$),$.forEach(m),s=W(f),r=I(f,"DIV",{class:!0});var z=j(r);n=I(z,"IMG",{src:!0,class:!0,alt:!0}),h=W(z),y=I(z,"DIV",{class:!0});var R=j(y);a=B(R,"WE CAN BE ANYTHING"),R.forEach(m),z.forEach(m),i=W(f),u=I(f,"DIV",{class:!0});var x=j(u);X(g.$$.fragment,x),x.forEach(m),d=W(f),X(b.$$.fragment,f),E=W(f),X(T.$$.fragment,f),S=W(f),X(p.$$.fragment,f),k=W(f),De('[data-svelte="svelte-zely4e"]',document.head).forEach(m),this.h()},h(){V(n.src,l=U+"/img/long-logo.png")||c(n,"src",l),c(n,"class","image svelte-1lcrjqj"),c(n,"alt","bg"),c(y,"class","description svelte-1lcrjqj"),c(r,"class","hero svelte-1lcrjqj"),c(u,"class","down-arrow svelte-1lcrjqj"),document.title="Team Undefined"},m(f,$){v(f,e,$),O(t,e,null),v(f,s,$),v(f,r,$),L(r,n),L(r,h),L(r,y),L(y,a),v(f,i,$),v(f,u,$),O(g,u,null),v(f,d,$),O(b,f,$),v(f,E,$),O(T,f,$),v(f,S,$),O(p,f,$),v(f,k,$),C=!0,H||(_=ne(u,"click",Fe(o[0])),H=!0)},p(f,[$]){const z={};$&2&&(z.$$scope={dirty:$,ctx:f}),t.$set(z);const R={};$&2&&(R.$$scope={dirty:$,ctx:f}),b.$set(R);const x={};$&2&&(x.$$scope={dirty:$,ctx:f}),T.$set(x);const Y={};$&2&&(Y.$$scope={dirty:$,ctx:f}),p.$set(Y)},i(f){C||(D(t.$$.fragment,f),D(g.$$.fragment,f),D(b.$$.fragment,f),D(T.$$.fragment,f),D(p.$$.fragment,f),C=!0)},o(f){F(t.$$.fragment,f),F(g.$$.fragment,f),F(b.$$.fragment,f),F(T.$$.fragment,f),F(p.$$.fragment,f),C=!1},d(f){f&&m(e),M(t),f&&m(s),f&&m(r),f&&m(i),f&&m(u),M(g),f&&m(d),M(b,f),f&&m(E),M(T,f),f&&m(S),M(p,f),f&&m(k),H=!1,_()}}}function _t(o){return[()=>{window.scroll({top:window.innerHeight-57,left:0,behavior:"smooth"})}]}class Tt extends Z{constructor(e){super(),ee(this,e,_t,vt,te,{})}}export{Tt as default};
