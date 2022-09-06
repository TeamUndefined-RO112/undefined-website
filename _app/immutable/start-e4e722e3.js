var Ge=Object.defineProperty;var He=(r,e,t)=>e in r?Ge(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var he=(r,e,t)=>(He(r,typeof e!="symbol"?e+"":e,t),t);import{S as We,i as xe,s as Me,a as Xe,e as B,c as Ye,b as H,g as se,t as z,d as oe,f as J,h as K,j as Qe,o as ge,k as Ze,l as et,m as tt,n as me,p as N,q as rt,r as nt,u as at,v as x,w as ve,x as M,y as X,z as Ne}from"./chunks/index-6f38c64b.js";import{g as Ce,f as Ve,s as G,a as we,b as st,i as ot}from"./chunks/singletons-1b61e6a1.js";const it=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),lt=function(r,e){return new URL(r,e).href},qe={},q=function(e,t,c){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=lt(s,c),s in qe)return;qe[s]=!0;const u=s.endsWith(".css"),n=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":it,u||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),u)return new Promise((_,h)=>{l.addEventListener("load",_),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};class ne{constructor(e,t){he(this,"name","HttpError");he(this,"stack");this.status=e,this.message=t!=null?t:`Error: ${e}`}toString(){return this.message}}class Be{constructor(e,t){this.status=e,this.location=t}}function ct(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ft(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ut=["href","pathname","search","searchParams","toString","toJSON"];function dt(r,e){const t=new URL(r);for(const c of ut){let s=t[c];Object.defineProperty(t,c,{get(){return e(),s},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(c,s,u)=>u(r,s),pt(t),t}function pt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function ht(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const Ee=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const c=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ae.delete(c)}return Ee(r,e)};const ae=new Map;function mt(r,e,t){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;t&&typeof t.body=="string"&&(s+=`[data-hash="${ht(t.body)}"]`);const u=document.querySelector(s);if(u!=null&&u.textContent){const{body:n,...l}=JSON.parse(u.textContent),_=u.getAttribute("data-ttl");return _&&ae.set(e,{body:n,init:l,ttl:1e3*Number(_)}),Promise.resolve(new Response(n,l))}return Ee(r,t)}function _t(r,e){const t=ae.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);ae.delete(r)}return Ee(r,e)}const gt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function wt(r){const e=[],t=[];let c=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(yt).map((u,n,l)=>{const _=decodeURIComponent(u),h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(_);if(h)return e.push(h[1]),t.push(h[2]),"(?:/(.*))?";const v=n===l.length-1;return _&&"/"+_.split(/\[(.+?)\]/).map(($,S)=>{if(S%2){const F=gt.exec($);if(!F)throw new Error(`Invalid param: ${$}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,j,D,C]=F;return e.push(D),t.push(C),j?"(.*?)":"([^/]+?)"}return v&&$.includes(".")&&(c=!1),$.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${c?"/?":""}$`),names:e,types:t}}function yt(r){return!/^\([^)]+\)$/.test(r)}function bt(r,e,t,c){const s={};for(let u=0;u<e.length;u+=1){const n=e[u],l=t[u],_=r[u+1]||"";if(l){const h=c[l];if(!h)throw new Error(`Missing "${l}" param matcher`);if(!h(_))return}s[n]=_}return s}function vt(r,e,t,c){const s=new Set(e);return Object.entries(t).map(([l,[_,h,v]])=>{const{pattern:$,names:S,types:F}=wt(l),j={id:l,exec:D=>{const C=$.exec(D);if(C)return bt(C,S,F,c)},errors:[1,...v||[]].map(D=>r[D]),layouts:[0,...h||[]].map(n),leaf:u(_)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function u(l){const _=l<0;return _&&(l=~l),[_,r[l]]}function n(l){return l===void 0?l:[s.has(l),r[l]]}}function Et(r,e){return new ne(r,e)}function kt(r){let e,t,c;var s=r[0][0];function u(n){return{props:{data:n[1],errors:n[3]}}}return s&&(e=new s(u(r))),{c(){e&&x(e.$$.fragment),t=B()},l(n){e&&ve(e.$$.fragment,n),t=B()},m(n,l){e&&M(e,n,l),H(n,t,l),c=!0},p(n,l){const _={};if(l&2&&(_.data=n[1]),l&8&&(_.errors=n[3]),s!==(s=n[0][0])){if(e){se();const h=e;z(h.$$.fragment,1,0,()=>{X(h,1)}),oe()}s?(e=new s(u(n)),x(e.$$.fragment),J(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(n){c||(e&&J(e.$$.fragment,n),c=!0)},o(n){e&&z(e.$$.fragment,n),c=!1},d(n){n&&K(t),e&&X(e,n)}}}function Rt(r){let e,t,c;var s=r[0][0];function u(n){return{props:{data:n[1],errors:n[3],$$slots:{default:[St]},$$scope:{ctx:n}}}}return s&&(e=new s(u(r))),{c(){e&&x(e.$$.fragment),t=B()},l(n){e&&ve(e.$$.fragment,n),t=B()},m(n,l){e&&M(e,n,l),H(n,t,l),c=!0},p(n,l){const _={};if(l&2&&(_.data=n[1]),l&8&&(_.errors=n[3]),l&525&&(_.$$scope={dirty:l,ctx:n}),s!==(s=n[0][0])){if(e){se();const h=e;z(h.$$.fragment,1,0,()=>{X(h,1)}),oe()}s?(e=new s(u(n)),x(e.$$.fragment),J(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(n){c||(e&&J(e.$$.fragment,n),c=!0)},o(n){e&&z(e.$$.fragment,n),c=!1},d(n){n&&K(t),e&&X(e,n)}}}function St(r){let e,t,c;var s=r[0][1];function u(n){return{props:{data:n[2],errors:n[3]}}}return s&&(e=new s(u(r))),{c(){e&&x(e.$$.fragment),t=B()},l(n){e&&ve(e.$$.fragment,n),t=B()},m(n,l){e&&M(e,n,l),H(n,t,l),c=!0},p(n,l){const _={};if(l&4&&(_.data=n[2]),l&8&&(_.errors=n[3]),s!==(s=n[0][1])){if(e){se();const h=e;z(h.$$.fragment,1,0,()=>{X(h,1)}),oe()}s?(e=new s(u(n)),x(e.$$.fragment),J(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(n){c||(e&&J(e.$$.fragment,n),c=!0)},o(n){e&&z(e.$$.fragment,n),c=!1},d(n){n&&K(t),e&&X(e,n)}}}function ze(r){let e,t=r[5]&&Je(r);return{c(){e=Ze("div"),t&&t.c(),this.h()},l(c){e=et(c,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=tt(e);t&&t.l(s),s.forEach(K),this.h()},h(){me(e,"id","svelte-announcer"),me(e,"aria-live","assertive"),me(e,"aria-atomic","true"),N(e,"position","absolute"),N(e,"left","0"),N(e,"top","0"),N(e,"clip","rect(0 0 0 0)"),N(e,"clip-path","inset(50%)"),N(e,"overflow","hidden"),N(e,"white-space","nowrap"),N(e,"width","1px"),N(e,"height","1px")},m(c,s){H(c,e,s),t&&t.m(e,null)},p(c,s){c[5]?t?t.p(c,s):(t=Je(c),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(c){c&&K(e),t&&t.d()}}}function Je(r){let e;return{c(){e=rt(r[6])},l(t){e=nt(t,r[6])},m(t,c){H(t,e,c)},p(t,c){c&64&&at(e,t[6])},d(t){t&&K(e)}}}function Lt(r){let e,t,c,s,u;const n=[Rt,kt],l=[];function _(v,$){return v[0][1]?0:1}e=_(r),t=l[e]=n[e](r);let h=r[4]&&ze(r);return{c(){t.c(),c=Xe(),h&&h.c(),s=B()},l(v){t.l(v),c=Ye(v),h&&h.l(v),s=B()},m(v,$){l[e].m(v,$),H(v,c,$),h&&h.m(v,$),H(v,s,$),u=!0},p(v,[$]){let S=e;e=_(v),e===S?l[e].p(v,$):(se(),z(l[S],1,1,()=>{l[S]=null}),oe(),t=l[e],t?t.p(v,$):(t=l[e]=n[e](v),t.c()),J(t,1),t.m(c.parentNode,c)),v[4]?h?h.p(v,$):(h=ze(v),h.c(),h.m(s.parentNode,s)):h&&(h.d(1),h=null)},i(v){u||(J(t),u=!0)},o(v){z(t),u=!1},d(v){l[e].d(v),v&&K(c),h&&h.d(v),v&&K(s)}}}function $t(r,e,t){let{stores:c}=e,{page:s}=e,{components:u}=e,{data_0:n=null}=e,{data_1:l=null}=e,{errors:_}=e;Qe(c.page.notify);let h=!1,v=!1,$=null;return ge(()=>{const S=c.page.subscribe(()=>{h&&(t(5,v=!0),t(6,$=document.title||"untitled page"))});return t(4,h=!0),S}),r.$$set=S=>{"stores"in S&&t(7,c=S.stores),"page"in S&&t(8,s=S.page),"components"in S&&t(0,u=S.components),"data_0"in S&&t(1,n=S.data_0),"data_1"in S&&t(2,l=S.data_1),"errors"in S&&t(3,_=S.errors)},r.$$.update=()=>{r.$$.dirty&384&&c.page.set(s)},[u,n,l,_,h,v,$,c,s]}class Pt extends We{constructor(e){super(),xe(this,e,$t,Lt,Me,{stores:7,page:8,components:0,data_0:1,data_1:2,errors:3})}}const Ot={},ie=[()=>q(()=>import("./chunks/0-5aa5d81d.js"),["chunks\\0-5aa5d81d.js","chunks\\_layout-1daba58d.js","components\\pages\\_layout.svelte-4d6b3976.js","assets\\_layout-1a5aca8a.css","assets\\main-d4a7a420.css","chunks\\index-6f38c64b.js","chunks\\stores-62bf6d0e.js","chunks\\singletons-1b61e6a1.js"],import.meta.url),()=>q(()=>import("./chunks/1-51cc367e.js"),["chunks\\1-51cc367e.js","components\\error.svelte-c7d2f59a.js","chunks\\index-6f38c64b.js","chunks\\stores-62bf6d0e.js","chunks\\singletons-1b61e6a1.js"],import.meta.url),()=>q(()=>import("./chunks/2-da305ea3.js"),["chunks\\2-da305ea3.js","components\\pages\\_page.svelte-4923a8d6.js","assets\\_page-898d6be2.css","assets\\main-d4a7a420.css","chunks\\index-6f38c64b.js","chunks\\Button-f612bb8b.js","assets\\Button-ef7ffe39.css","chunks\\Title-2877d79c.js","assets\\Title-0a2c8688.css","chunks\\TextBox-3b0f62c6.js","assets\\TextBox-64bd01f8.css"],import.meta.url),()=>q(()=>import("./chunks/3-b5d1032c.js"),["chunks\\3-b5d1032c.js","components\\pages\\contact\\_page.svelte-b4c2370d.js","assets\\_page-f795ae60.css","assets\\TextBox-64bd01f8.css","chunks\\index-6f38c64b.js","chunks\\Title-2877d79c.js","assets\\Title-0a2c8688.css"],import.meta.url),()=>q(()=>import("./chunks/4-1c0d73a3.js"),["chunks\\4-1c0d73a3.js","components\\pages\\team\\_page.svelte-da605663.js","assets\\_page-e8a3febb.css","chunks\\index-6f38c64b.js","chunks\\Button-f612bb8b.js","assets\\Button-ef7ffe39.css","chunks\\Title-2877d79c.js","assets\\Title-0a2c8688.css"],import.meta.url),()=>q(()=>import("./chunks/5-8f273356.js"),["chunks\\5-8f273356.js","components\\pages\\team\\apply\\_page.svelte-2af876ee.js","assets\\_page-996723f7.css","chunks\\index-6f38c64b.js","chunks\\Title-2877d79c.js","assets\\Title-0a2c8688.css","chunks\\TextBox-3b0f62c6.js","assets\\TextBox-64bd01f8.css"],import.meta.url),()=>q(()=>import("./chunks/6-54cd637b.js"),["chunks\\6-54cd637b.js","components\\pages\\team\\sponsors\\_page.svelte-0f4bd848.js","assets\\_page-c5332412.css","assets\\TextBox-64bd01f8.css","chunks\\index-6f38c64b.js","chunks\\Title-2877d79c.js","assets\\Title-0a2c8688.css","chunks\\TextBox-3b0f62c6.js"],import.meta.url)],jt=[],At={"":[2],contact:[3],team:[4],"team/apply":[5],"team/sponsors":[6]},It="/__data.js",Fe="sveltekit:scroll",V="sveltekit:index",te=vt(ie,jt,At,Ot),ye=ie[0],be=ie[1];ye();be();let Q={};try{Q=JSON.parse(sessionStorage[Fe])}catch{}function _e(r){Q[r]=we()}function Ut({target:r,base:e,trailing_slash:t}){var Ie;const c=[],s={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},l=!1,_=!0,h=!1,v=1,$=null,S=!1,F,j=(Ie=history.state)==null?void 0:Ie[V];j||(j=Date.now(),history.replaceState({...history.state,[V]:j},"",location.href));const D=Q[j];D&&(history.scrollRestoration="manual",scrollTo(D.x,D.y));let C=!1,W,ke;function Re(){if(!$){const a=new URL(location.href);$=Promise.resolve().then(async()=>{const i=fe(a);await $e(i,a,[]),$=null,S=!1})}return $}async function Se(a,{noscroll:i=!1,replaceState:d=!1,keepfocus:o=!1,state:f={}},w){return typeof a=="string"&&(a=new URL(a,Ce(document))),ue({url:a,scroll:i?we():null,keepfocus:o,redirect_chain:w,details:{state:f,replaceState:d},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Le(a){const i=fe(a);if(!i)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s.promise=je(i),s.id=i.id,s.promise}async function $e(a,i,d,o,f){var R,E;const w=ke={};let g=a&&await je(a);if(!g&&i.origin===location.origin&&i.pathname===location.pathname&&(g=await ee({status:404,error:new Error(`Not found: ${i.pathname}`),url:i,routeId:null})),!g)return await Y(i),!1;if(i=(a==null?void 0:a.url)||i,ke!==w)return!1;if(c.length=0,g.type==="redirect")if(d.length>10||d.includes(i.pathname))g=await ee({status:500,error:new Error("Redirect loop"),url:i,routeId:null});else return Se(new URL(g.location,i).href,{},[...d,i.pathname]),!1;else((E=(R=g.props)==null?void 0:R.page)==null?void 0:E.status)>=400&&await G.updated.check()&&await Y(i);if(h=!0,o&&o.details){const{details:b}=o,y=b.replaceState?0:1;b.state[V]=j+=y,history[b.replaceState?"replaceState":"pushState"](b.state,"",i)}if(l?(n=g.state,g.props.page&&(g.props.page.url=i),F.$set(g.props)):Pe(g),o){const{scroll:b,keepfocus:y}=o;if(!y){const k=document.body,I=k.getAttribute("tabindex");k.tabIndex=-1,k.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),I!==null?k.setAttribute("tabindex",I):k.removeAttribute("tabindex")}if(await Ne(),_){const k=i.hash&&document.getElementById(i.hash.slice(1));b?scrollTo(b.x,b.y):k?k.scrollIntoView():scrollTo(0,0)}}else await Ne();s.promise=null,s.id=null,_=!0,g.props.page&&(W=g.props.page),f&&f(),h=!1}function Pe(a){var o,f;n=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),W=a.props.page,F=new Pt({target:r,props:{...a.props,stores:G},hydrate:!0});const d={from:null,to:re("to",{params:n.params,routeId:(f=(o=n.route)==null?void 0:o.id)!=null?f:null,url:new URL(location.href)}),type:"load"};u.after_navigate.forEach(w=>w(d)),l=!0}async function Z({url:a,params:i,branch:d,status:o,error:f,route:w,validation_errors:g}){var I;const R=d.filter(Boolean),E={type:"loaded",state:{url:a,params:i,branch:d,error:f,route:w,session_id:v},props:{components:R.map(L=>L.node.component),errors:g}};let b={},y=!W;for(let L=0;L<R.length;L+=1){const O=R[L];b={...b,...O.data},(y||!n.branch.some(p=>p===O))&&(E.props[`data_${L}`]=b,y=y||Object.keys((I=O.data)!=null?I:{}).length>0)}if(y||(y=Object.keys(W.data).length!==Object.keys(b).length),!n.url||a.href!==n.url.href||n.error!==f||y){E.props.page={error:f,params:i,routeId:w&&w.id,status:o,url:a,data:y?b:W.data};const L=(O,p)=>{Object.defineProperty(E.props.page,O,{get:()=>{throw new Error(`$page.${O} has been replaced by $page.url.${p}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return E}async function le({loader:a,parent:i,url:d,params:o,routeId:f,server_data_node:w}){var b,y,k,I,L;let g=null;const R={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if((b=E.shared)!=null&&b.load){let O=function(...m){for(const P of m){const{href:U}=new URL(P,d);R.dependencies.add(U)}};const p={};for(const m in o)Object.defineProperty(p,m,{get(){return R.params.add(m),o[m]},enumerable:!0});const A={routeId:f,params:p,data:(y=w==null?void 0:w.data)!=null?y:null,url:dt(d,()=>{R.url=!0}),async fetch(m,P){let U;typeof m=="string"?U=m:(U=m.url,P={body:m.method==="GET"||m.method==="HEAD"?void 0:await m.blob(),cache:m.cache,credentials:m.credentials,headers:m.headers,integrity:m.integrity,keepalive:m.keepalive,method:m.method,mode:m.mode,redirect:m.redirect,referrer:m.referrer,referrerPolicy:m.referrerPolicy,signal:m.signal,...P});const T=new URL(U,d).href;return O(T),l?_t(T,P):mt(U,T,P)},setHeaders:()=>{},depends:O,parent(){return R.parent=!0,i()}};Object.defineProperties(A,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=(k=await E.shared.load.call(null,A))!=null?k:null}return{node:E,loader:a,server:w,shared:(I=E.shared)!=null&&I.load?{type:"data",data:g,uses:R}:null,data:(L=g!=null?g:w==null?void 0:w.data)!=null?L:null}}function Oe(a,i,d){if(S)return!0;if(!d)return!1;if(d.parent&&i||a.url&&d.url)return!0;for(const o of a.params)if(d.params.has(o))return!0;for(const o of d.dependencies)if(c.some(f=>f(new URL(o))))return!0;return!1}function ce(a,i){var d,o;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((d=a.uses.dependencies)!=null?d:[]),params:new Set((o=a.uses.params)!=null?o:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&i!=null?i:null}async function je({id:a,url:i,params:d,route:o}){if(s.id===a&&s.promise)return s.promise;const{errors:f,layouts:w,leaf:g}=o,R=n.url&&{url:a!==n.url.pathname+n.url.search,params:Object.keys(d).filter(p=>n.params[p]!==d[p])},E=[...w,g];f.forEach(p=>p==null?void 0:p().catch(()=>{})),E.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let b=null;const y=E.reduce((p,A,m)=>{var T;const P=n.branch[m],U=!!(A!=null&&A[0])&&((P==null?void 0:P.loader)!==A[1]||Oe(R,p.some(Boolean),(T=P.server)==null?void 0:T.uses));return p.push(U),p},[]);if(y.some(Boolean)){try{b=await Ke(i,y)}catch(p){return ee({status:500,error:p,url:i,routeId:o.id})}if(b.type==="redirect")return b}const k=b==null?void 0:b.nodes;let I=!1;const L=E.map(async(p,A)=>{var de,Ue;if(!p)return;const m=n.branch[A],P=(de=k==null?void 0:k[A])!=null?de:null;if((!P||P.type==="skip")&&p[1]===(m==null?void 0:m.loader)&&!Oe(R,I,(Ue=m.shared)==null?void 0:Ue.uses))return m;if(I=!0,(P==null?void 0:P.type)==="error")throw P.httperror?Et(P.httperror.status,P.httperror.message):P.error;return le({loader:p[1],url:i,params:d,routeId:o.id,parent:async()=>{var De;const Te={};for(let pe=0;pe<A;pe+=1)Object.assign(Te,(De=await L[pe])==null?void 0:De.data);return Te},server_data_node:ce(P,m==null?void 0:m.server)})});for(const p of L)p.catch(()=>{});const O=[];for(let p=0;p<E.length;p+=1)if(E[p])try{O.push(await L[p])}catch(A){const m=A;if(m instanceof Be)return{type:"redirect",location:m.location};const P=A instanceof ne?A.status:500;for(;p--;)if(f[p]){let U,T=p;for(;!O[T];)T-=1;try{return U={node:await f[p](),loader:f[p],data:{},server:null,shared:null},await Z({url:i,params:d,branch:O.slice(0,T+1).concat(U),status:P,error:m,route:o})}catch{continue}}await Y(i);return}else O.push(void 0);return await Z({url:i,params:d,branch:O,status:200,error:null,route:o})}async function ee({status:a,error:i,url:d,routeId:o}){var b;const f={},w=await ye();let g=null;if(w.server)try{const y=await Ke(d,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;g=(b=y.nodes[0])!=null?b:null}catch{await Y(d);return}const R=await le({loader:ye,url:d,params:f,routeId:o,parent:()=>Promise.resolve({}),server_data_node:ce(g)}),E={node:await be(),loader:be,shared:null,server:null,data:null};return await Z({url:d,params:f,branch:[R,E],status:a,error:i,route:null})}function fe(a){if(Ae(a))return;const i=decodeURI(a.pathname.slice(e.length)||"/");for(const d of te){const o=d.exec(i);if(o){const f=new URL(a.origin+ct(a.pathname,t)+a.search+a.hash);return{id:f.pathname+f.search,route:d,params:ft(o),url:f}}}}function Ae(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function ue({url:a,scroll:i,keepfocus:d,redirect_chain:o,details:f,type:w,delta:g,accepted:R,blocked:E}){var L,O,p,A;let b=!1;const y=fe(a),k={from:re("from",{params:n.params,routeId:(O=(L=n.route)==null?void 0:L.id)!=null?O:null,url:n.url}),to:re("to",{params:(p=y==null?void 0:y.params)!=null?p:null,routeId:(A=y==null?void 0:y.route.id)!=null?A:null,url:a}),type:w};g!==void 0&&(k.delta=g);const I={...k,cancel:()=>{b=!0}};if(u.before_navigate.forEach(m=>m(I)),b){E();return}_e(j),R(),l&&G.navigating.set(k),await $e(y,a,o,{scroll:i,keepfocus:d,details:f},()=>{u.after_navigate.forEach(m=>m(k)),G.navigating.set(null)})}function Y(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{ge(()=>(u.after_navigate.push(a),()=>{const i=u.after_navigate.indexOf(a);u.after_navigate.splice(i,1)}))},before_navigate:a=>{ge(()=>(u.before_navigate.push(a),()=>{const i=u.before_navigate.indexOf(a);u.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(h||!l)&&(_=!1)},goto:(a,i={})=>Se(a,i,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")c.push(a);else{const{href:i}=new URL(a,location.href);c.push(d=>d.href===i)}return Re()},invalidateAll:()=>(S=!0,Re()),prefetch:async a=>{const i=new URL(a,Ce(document));await Le(i)},prefetch_routes:async a=>{const d=(a?te.filter(o=>a.some(f=>o.exec(f))):te).map(o=>Promise.all([...o.layouts,o.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(d)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var g,R;let f=!1;const w={from:re("from",{params:n.params,routeId:(R=(g=n.route)==null?void 0:g.id)!=null?R:null,url:n.url}),to:null,type:"unload",cancel:()=>f=!0};u.before_navigate.forEach(E=>E(w)),f?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){_e(j);try{sessionStorage[Fe]=JSON.stringify(Q)}catch{}}});const a=o=>{const{url:f,options:w}=Ve(o);if(f&&w.prefetch){if(Ae(f))return;Le(f)}};let i;const d=o=>{clearTimeout(i),i=setTimeout(()=>{var f;(f=o.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const{a:f,url:w,options:g}=Ve(o);if(!f||!w)return;const R=f instanceof SVGAElement;if(!R&&!(w.protocol==="https:"||w.protocol==="http:"))return;const E=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||E.includes("external")||g.reload||(R?f.target.baseVal:f.target))return;const[b,y]=w.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){C=!0,_e(j),G.page.set({...W,url:w}),G.page.notify();return}ue({url:w,scroll:g.noscroll?we():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:w.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),addEventListener("popstate",o=>{if(o.state){if(o.state[V]===j)return;const f=o.state[V]-j;ue({url:new URL(location.href),scroll:Q[o.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=o.state[V]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{C&&(C=!1,history.replaceState({...history.state,[V]:++j},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&G.navigating.set(null)})},_hydrate:async({status:a,error:i,node_ids:d,params:o,routeId:f,data:w,errors:g})=>{var b;const R=new URL(location.href);let E;try{const y=d.map(async(k,I)=>{const L=w[I];return le({loader:ie[k],url:R,params:o,routeId:f,parent:async()=>{const O={};for(let p=0;p<I;p+=1)Object.assign(O,(await y[p]).data);return O},server_data_node:ce(L)})});E=await Z({url:R,params:o,branch:await Promise.all(y),status:a,error:i!=null&&i.__is_http_error?new ne(i.status,i.message):i,validation_errors:g,route:(b=te.find(k=>k.id===f))!=null?b:null})}catch(y){const k=y;if(k instanceof Be){await Y(new URL(y.location,location.href));return}E=await ee({status:k instanceof ne?k.status:500,error:k,url:R,routeId:f})}Pe(E)}}}let Tt=1;async function Ke(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+It,t.searchParams.set("__invalid",e.map(s=>s?"y":"n").join("")),t.searchParams.set("__id",String(Tt++)),await q(()=>import(t.href),[],import.meta.url);const c=window.__sveltekit_data;return delete window.__sveltekit_data,c}const Dt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function re(r,e){for(const t of Dt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)}});return e}async function qt({env:r,hydrate:e,paths:t,target:c,trailing_slash:s}){st(t);const u=Ut({target:c,base:t.base,trailing_slash:s});ot({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{qt as start};
