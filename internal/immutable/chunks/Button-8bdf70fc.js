import{S as E,i as O,s as S,e as h,b as d,g as U,t as c,d as q,f as _,h as r,W as C,F as k,k as p,l as v,m as g,n as B,D as m,J as D,V as F,G as T,H as y,I as N}from"./index-27b06b50.js";function G(i){let l,s,u,a;const n=i[3].default,e=k(n,i,i[2],null);return{c(){l=p("button"),e&&e.c(),this.h()},l(o){l=v(o,"BUTTON",{class:!0});var t=g(l);e&&e.l(t),t.forEach(r),this.h()},h(){B(l,"class","svelte-11vv3is"),m(l,"small",i[0])},m(o,t){d(o,l,t),e&&e.m(l,null),s=!0,u||(a=D(l,"click",F(i[4])),u=!0)},p(o,t){e&&e.p&&(!s||t&4)&&T(e,n,o,o[2],s?N(n,o[2],t,null):y(o[2]),null),(!s||t&1)&&m(l,"small",o[0])},i(o){s||(_(e,o),s=!0)},o(o){c(e,o),s=!1},d(o){o&&r(l),e&&e.d(o),u=!1,a()}}}function H(i){let l,s;const u=i[3].default,a=k(u,i,i[2],null);return{c(){l=p("button"),a&&a.c(),this.h()},l(n){l=v(n,"BUTTON",{class:!0});var e=g(l);a&&a.l(e),e.forEach(r),this.h()},h(){B(l,"class","svelte-11vv3is"),m(l,"small",i[0])},m(n,e){d(n,l,e),a&&a.m(l,null),s=!0},p(n,e){a&&a.p&&(!s||e&4)&&T(a,u,n,n[2],s?N(u,n[2],e,null):y(n[2]),null),(!s||e&1)&&m(l,"small",n[0])},i(n){s||(_(a,n),s=!0)},o(n){c(a,n),s=!1},d(n){n&&r(l),a&&a.d(n)}}}function I(i){let l,s,u,a;const n=[H,G],e=[];function o(t,f){return t[1]?0:1}return l=o(i),s=e[l]=n[l](i),{c(){s.c(),u=h()},l(t){s.l(t),u=h()},m(t,f){e[l].m(t,f),d(t,u,f),a=!0},p(t,[f]){let b=l;l=o(t),l===b?e[l].p(t,f):(U(),c(e[b],1,1,()=>{e[b]=null}),q(),s=e[l],s?s.p(t,f):(s=e[l]=n[l](t),s.c()),_(s,1),s.m(u.parentNode,u))},i(t){a||(_(s),a=!0)},o(t){c(s),a=!1},d(t){e[l].d(t),t&&r(u)}}}function J(i,l,s){let{$$slots:u={},$$scope:a}=l,{small:n=!1}=l,{noclick:e=!1}=l;function o(t){C.call(this,i,t)}return i.$$set=t=>{"small"in t&&s(0,n=t.small),"noclick"in t&&s(1,e=t.noclick),"$$scope"in t&&s(2,a=t.$$scope)},[n,e,a,u,o]}class W extends E{constructor(l){super(),O(this,l,J,I,S,{small:0,noclick:1})}}export{W as B};