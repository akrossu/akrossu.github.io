import{s as S,e as _,t as f,a as q,b as d,f as g,l as h,d as l,c as x,j as m,k as v,p as $,n as E,q as j}from"../chunks/scheduler.Dij4Ahah.js";import{S as k,i as y}from"../chunks/index.VSIFKkYz.js";import{s as C}from"../chunks/entry.BNFJ_UrV.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=_("h1"),o=f(r),n=q(),i=_("p"),u=f(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(l),n=x(e),i=d(e,"P",{});var p=g(i);u=h(p,c),p.forEach(l)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(u,c)},i:E,o:E,d(e){e&&(l(t),l(n),l(i))}}}function z(s,t,r){let o;return j(s,P,n=>r(0,o=n)),[o]}let F=class extends k{constructor(t){super(),y(this,t,z,w,S,{})}};export{F as component};
