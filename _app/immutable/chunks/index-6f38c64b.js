function $(){}function I(t,e){for(const n in e)t[n]=e[n];return t}function P(t){return t()}function q(){return Object.create(null)}function p(t){t.forEach(P)}function T(t){return typeof t=="function"}function ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let g;function st(t,e){return g||(g=document.createElement("a")),g.href=e,t===g.href}function W(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(G(e,n))}function ft(t,e,n,r){if(t){const i=B(t,e,n,r);return t[0](i)}}function B(t,e,n,r){return t[1]&&r?I(n.ctx.slice(),t[1](r(e))):n.ctx}function dt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],c=Math.max(e.dirty.length,i.length);for(let o=0;o<c;o+=1)s[o]=e.dirty[o]|i[o];return s}return e.dirty|i}return e.dirty}function _t(t,e,n,r,i,s){if(i){const c=B(e,n,r,s);t.p(c,i)}}function ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function mt(t){return t==null?"":t}function pt(t){return t&&T(t.destroy)?t.destroy:$}let E=!1;function J(){E=!0}function K(){E=!1}function Q(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,f=(i>0&&e[n[i]].claim_order<=u?i+1:Q(1,i,y=>e[n[y]].claim_order,u))-1;r[l]=n[f]+1;const a=f+1;n[a]=l,i=Math.max(a,i)}const s=[],c=[];let o=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(s.push(e[l-1]);o>=l;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);s.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<s.length&&c[l].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(c[l],f)}}function U(t,e){if(E){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){E&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function bt(){return S(" ")}function xt(){return S("")}function vt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $t(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Et(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,e,n,r,i=!1){tt(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,i||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function O(t,e,n,r){return D(t,i=>i.nodeName===e,i=>{const s=[];for(let c=0;c<i.attributes.length;c++){const o=i.attributes[c];n[o.name]||s.push(o.name)}s.forEach(c=>i.removeAttribute(c))},()=>r(e))}function wt(t,e,n){return O(t,e,n,X)}function Nt(t,e,n){return O(t,e,n,Y)}function et(t,e){return D(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>S(e),!0)}function At(t){return et(t," ")}function St(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function kt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function jt(t,e,n){t.classList[n?"add":"remove"](e)}function nt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function Ct(t,e=document.body){return Array.from(e.querySelectorAll(t))}let m;function h(t){m=t}function k(){if(!m)throw new Error("Function called outside component initialization");return m}function qt(t){k().$$.on_mount.push(t)}function Mt(t){k().$$.after_update.push(t)}function Lt(){const t=k();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const s=nt(e,n,{cancelable:r});return i.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}function Pt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const _=[],M=[],x=[],L=[],z=Promise.resolve();let N=!1;function F(){N||(N=!0,z.then(H))}function Tt(){return F(),z}function A(t){x.push(t)}const w=new Set;let b=0;function H(){const t=m;do{for(;b<_.length;){const e=_[b];b++,h(e),rt(e.$$)}for(h(null),_.length=0,b=0;M.length;)M.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];w.has(n)||(w.add(n),n())}x.length=0}while(_.length);for(;L.length;)L.pop()();N=!1,w.clear(),h(t)}function rt(t){if(t.fragment!==null){t.update(),p(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const v=new Set;let d;function Bt(){d={r:0,c:[],p:d}}function Dt(){d.r||p(d.c),d=d.p}function it(t,e){t&&t.i&&(v.delete(t),t.i(e))}function Ot(t,e,n,r){if(t&&t.o){if(v.has(t))return;v.add(t),d.c.push(()=>{v.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function zt(t){t&&t.c()}function Ft(t,e){t&&t.l(e)}function ct(t,e,n,r){const{fragment:i,on_mount:s,on_destroy:c,after_update:o}=t.$$;i&&i.m(e,n),r||A(()=>{const l=s.map(P).filter(T);c?c.push(...l):p(l),t.$$.on_mount=[]}),o.forEach(A)}function lt(t,e){const n=t.$$;n.fragment!==null&&(p(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(_.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ht(t,e,n,r,i,s,c,o=[-1]){const l=m;h(t);const u=t.$$={fragment:null,ctx:null,props:s,update:$,not_equal:i,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:q(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};c&&c(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,y,...j)=>{const C=j.length?j[0]:y;return u.ctx&&i(u.ctx[a],u.ctx[a]=C)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](C),f&&ut(t,a)),y}):[],u.update(),f=!0,p(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){J();const a=Z(e.target);u.fragment&&u.fragment.l(a),a.forEach(V)}else u.fragment&&u.fragment.c();e.intro&&it(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),K(),H()}h(l)}class It{$destroy(){lt(this,1),this.$destroy=$}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!W(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{$ as A,U as B,st as C,jt as D,at as E,ft as F,_t as G,ht as H,dt as I,vt as J,pt as K,T as L,gt as M,p as N,Lt as O,mt as P,M as Q,Y as R,It as S,Nt as T,Ct as U,$t as V,Pt as W,bt as a,yt as b,At as c,Dt as d,xt as e,it as f,Bt as g,V as h,Ht as i,Mt as j,X as k,wt as l,Z as m,Et as n,qt as o,kt as p,S as q,et as r,ot as s,Ot as t,St as u,zt as v,Ft as w,ct as x,lt as y,Tt as z};
