import{s as tl,e as s,a as u,t as c,b as i,f as m,g as _,c as h,m as d,d as o,i as r,j as Ze,k as R,l as e,p as Ge,n as zt,v as sl,w as il}from"./scheduler.BbUu9f6s.js";import{S as el,i as ll}from"./index.BDzffrVG.js";function nl(n){let t,a,l='<img class="border-border border-solid border-2 absolute w-full h-full" src="/assets/earth.gif" alt=""/>',f,C,E,I,L,z,ct,U,v,p,b,Z,bt="../home",dt,F,Y="current status:",Ct,W,k,K,tt,et,J,w,kt='<ul class="underline-links flex flex-1 justify-evenly py-2 text-lg font-bold border-border border-solid border-2 md:border-l-0"><li class="hidden md:inline"><a href="/">home</a></li> <div class="hidden md:inline border-border border-solid border-l-2"></div> <li><a href="/creative">creative</a></li> <div class="border-border border-solid border-l-2"></div> <li><a href="/garden">garden</a></li> <div class="border-border border-solid border-l-2"></div> <li><a href="/information">information</a></li> <div class="border-border border-solid border-l-2"></div> <li><a href="/community">community</a></li></ul>';return{c(){t=s("div"),a=s("div"),a.innerHTML=l,f=u(),C=s("div"),E=s("div"),I=s("h1"),L=c("[ Home@akross:/"),z=c(n[0]),ct=c(" ] "),U=s("span"),v=c("ᨐ"),p=u(),b=s("div"),Z=s("a"),Z.textContent=bt,dt=u(),F=s("span"),F.textContent=Y,Ct=u(),W=s("img"),K=u(),tt=s("span"),et=c(n[2]),J=u(),w=s("nav"),w.innerHTML=kt,this.h()},l(X){t=i(X,"DIV",{class:!0});var A=m(t);a=i(A,"DIV",{class:!0,"data-svelte-h":!0}),_(a)!=="svelte-1dn0vhs"&&(a.innerHTML=l),f=h(A),C=i(A,"DIV",{class:!0});var lt=m(C);E=i(lt,"DIV",{class:!0});var st=m(E);I=i(st,"H1",{class:!0});var G=m(I);L=d(G,"[ Home@akross:/"),z=d(G,n[0]),ct=d(G," ] "),U=i(G,"SPAN",{style:!0});var Mt=m(U);v=d(Mt,"ᨐ"),Mt.forEach(o),G.forEach(o),p=h(st),b=i(st,"DIV",{class:!0});var B=m(b);Z=i(B,"A",{class:!0,href:!0,"data-svelte-h":!0}),_(Z)!=="svelte-1xx4uvm"&&(Z.textContent=bt),dt=h(B),F=i(B,"SPAN",{class:!0,"data-svelte-h":!0}),_(F)!=="svelte-7myhrb"&&(F.textContent=Y),Ct=h(B),W=i(B,"IMG",{class:!0,src:!0,alt:!0}),K=h(B),tt=i(B,"SPAN",{class:!0});var O=m(tt);et=d(O,n[2]),O.forEach(o),B.forEach(o),st.forEach(o),J=h(lt),w=i(lt,"NAV",{class:!0,"data-svelte-h":!0}),_(w)!=="svelte-1doqcuk"&&(w.innerHTML=kt),lt.forEach(o),A.forEach(o),this.h()},h(){r(a,"class","hidden md:block w-[100px] relative"),r(U,"style",n[4]),r(I,"class","text-2xl md:text-3xl"),r(Z,"class","inline-block md:hidden"),r(Z,"href","/"),r(F,"class","pl-4"),r(W,"class","inline w-8 h-auto"),Ze(W.src,k=n[3])||r(W,"src",k),r(W,"alt",""),r(tt,"class","font-sans normal-case"),r(b,"class","h-[26px]"),r(E,"class","ps-4 h-[60px]"),r(w,"class","block"),r(C,"class","flex-1"),r(t,"class","flex relative mb-8")},m(X,A){R(X,t,A),e(t,a),e(t,f),e(t,C),e(C,E),e(E,I),e(I,L),e(I,z),e(I,ct),e(I,U),e(U,v),n[5](I),e(E,p),e(E,b),e(b,Z),e(b,dt),e(b,F),e(b,Ct),e(b,W),e(b,K),e(b,tt),e(tt,et),e(C,J),e(C,w)},p(X,[A]){A&1&&Ge(z,X[0]),A&16&&r(U,"style",X[4]),A&8&&!Ze(W.src,k=X[3])&&r(W,"src",k),A&4&&Ge(et,X[2])},i:zt,o:zt,d(X){X&&o(t),n[5](null)}}}function al(n,t,a){let{title:l=""}=t,f="",C="",E="",I="";sl(async()=>{fetch("https://api.lanyard.rest/v1/users/282593436803268618").then(v=>v.json()).then(v=>{const p=v.data.activities;for(let b=0;b<p.length;b++)if(p[b].name=="Custom Status"&&(p[b].emoji.animated?a(3,E=`https://cdn.discordapp.com/emojis/${v.data.activities[b].emoji.id}.gif`):a(3,E=`https://cdn.discordapp.com/emojis/${v.data.activities[b].emoji.id}.png`),a(2,C=v.data.activities[0].state),C==null&&a(2,C="")),p[b].name=="Spotify")try{I=`${p[b].state} - ${p[b].details}`}catch{}}).catch(v=>(console.log(v),[]))});let L="";const z=v=>new Promise(p=>setTimeout(p,v));(async()=>{for(;;)await z(1e3),a(4,L=`color: #${Math.floor(Math.random()*16777215).toString(16)}`)})();function U(v){il[v?"unshift":"push"](()=>{f=v,a(1,f)})}return n.$$set=v=>{"title"in v&&a(0,l=v.title)},[l,f,C,E,L,U]}class dl extends el{constructor(t){super(),ll(this,t,al,nl,tl,{title:0})}}function Be(n){let t,a=" <---";return{c(){t=s("span"),t.textContent=a,this.h()},l(l){t=i(l,"SPAN",{class:!0,"data-svelte-h":!0}),_(t)!=="svelte-1mfu06a"&&(t.textContent=a),this.h()},h(){r(t,"class","inline-block")},m(l,f){R(l,t,f)},d(l){l&&o(t)}}}function Fe(n){let t,a=" <---";return{c(){t=s("span"),t.textContent=a,this.h()},l(l){t=i(l,"SPAN",{class:!0,"data-svelte-h":!0}),_(t)!=="svelte-1mfu06a"&&(t.textContent=a),this.h()},h(){r(t,"class","inline-block")},m(l,f){R(l,t,f)},d(l){l&&o(t)}}}function Je(n){let t,a=" <---";return{c(){t=s("span"),t.textContent=a,this.h()},l(l){t=i(l,"SPAN",{class:!0,"data-svelte-h":!0}),_(t)!=="svelte-1mfu06a"&&(t.textContent=a),this.h()},h(){r(t,"class","inline-block")},m(l,f){R(l,t,f)},d(l){l&&o(t)}}}function Ke(n){let t,a=" <---";return{c(){t=s("span"),t.textContent=a,this.h()},l(l){t=i(l,"SPAN",{class:!0,"data-svelte-h":!0}),_(t)!=="svelte-1mfu06a"&&(t.textContent=a),this.h()},h(){r(t,"class","inline-block")},m(l,f){R(l,t,f)},d(l){l&&o(t)}}}function Oe(n){let t,a=" <---";return{c(){t=s("span"),t.textContent=a,this.h()},l(l){t=i(l,"SPAN",{class:!0,"data-svelte-h":!0}),_(t)!=="svelte-1mfu06a"&&(t.textContent=a),this.h()},h(){r(t,"class","inline-block")},m(l,f){R(l,t,f)},d(l){l&&o(t)}}}function Qe(n){let t,a=" <---";return{c(){t=s("span"),t.textContent=a,this.h()},l(l){t=i(l,"SPAN",{class:!0,"data-svelte-h":!0}),_(t)!=="svelte-1mfu06a"&&(t.textContent=a),this.h()},h(){r(t,"class","inline-block")},m(l,f){R(l,t,f)},d(l){l&&o(t)}}}function Re(n){let t,a=" <---";return{c(){t=s("span"),t.textContent=a,this.h()},l(l){t=i(l,"SPAN",{class:!0,"data-svelte-h":!0}),_(t)!=="svelte-1mfu06a"&&(t.textContent=a),this.h()},h(){r(t,"class","inline-block")},m(l,f){R(l,t,f)},d(l){l&&o(t)}}}function Ye(n){let t,a=" <---";return{c(){t=s("span"),t.textContent=a,this.h()},l(l){t=i(l,"SPAN",{class:!0,"data-svelte-h":!0}),_(t)!=="svelte-1mfu06a"&&(t.textContent=a),this.h()},h(){r(t,"class","inline-block")},m(l,f){R(l,t,f)},d(l){l&&o(t)}}}function rl(n){let t,a,l='<img class="w-24" src="/assets/iconcat.gif" alt=""/>',f,C,E="website directory:",I,L,z,ct="<h3>\\\\\\ ᨐ creative corner ///</h3>",U,v,p,b,Z=n[1].code+"",bt,dt,F,Y,Ct="> akross' coding projects",W,k,K,tt="<h3>\\\\\\ ᨐ digital garden ///</h3>",et,J,w,kt,X=n[1].blog+"",A,lt,st,G,Mt="> akross' random blogs",B,O,it,Ut,ye=n[1].gamelist+"",Wt,Xt,Zt,gt,He="> games akross' is playing",Gt,ut,nt,Bt,Se=n[1].musiclist+"",Ft,Jt,Kt,pt,Me="> akross' favorite songs",Ot,x,xt,Te="<h3>\\\\\\ ᨐ information ///</h3>",Qt,ht,at,Rt,Ne=n[1].external+"",Yt,te,ee,Lt,Pe="> akross' favorite websites",le,vt,rt,se,je=n[1].about+"",ie,ne,ae,It,De="> about akross' website",re,mt,ot,oe,$e=n[1].lore+"",fe,ce,de,wt,Ve="> about this website",ue,$,Et,qe="<h3>\\\\\\ ᨐ community ///</h3>",he,_t,ft,ve,ze=n[1].webring+"",me,_e,be,At,Ue="> akross' web friends!",Ce,yt,We='<a class="normal-case" href="https://www.discord.gg/sczXWkDsZ6" target="_blank">[ discord.gg/sczXWkDsZ6 ]</a>',ke,Ht,Xe="> akross & community discord",y=n[0]==`${n[1].code}`&&Be(),H=n[0]==`${n[1].blog}`&&Fe(),S=n[0]==`${n[1].gamelist}`&&Je(),M=n[0]==`${n[1].musiclist}`&&Ke(),T=n[0]==`${n[1].external}`&&Oe(),N=n[0]==`${n[1].about}`&&Qe(),P=n[0]==`${n[1].lore}`&&Re(),j=n[0]==`${n[1].webring}`&&Ye();return{c(){t=s("div"),a=s("div"),a.innerHTML=l,f=u(),C=s("h2"),C.textContent=E,I=u(),L=s("ul"),z=s("li"),z.innerHTML=ct,U=u(),v=s("li"),p=s("a"),b=c("[ akross:/"),bt=c(Z),dt=c(" ]"),y&&y.c(),F=u(),Y=s("li"),Y.textContent=Ct,W=u(),k=s("ul"),K=s("li"),K.innerHTML=tt,et=u(),J=s("li"),w=s("a"),kt=c("[ akross:/"),A=c(X),lt=c(" ]"),H&&H.c(),st=u(),G=s("li"),G.textContent=Mt,B=u(),O=s("li"),it=s("a"),Ut=c("[ akross:/"),Wt=c(ye),Xt=c(" ]"),S&&S.c(),Zt=u(),gt=s("li"),gt.textContent=He,Gt=u(),ut=s("li"),nt=s("a"),Bt=c("[ akross:/"),Ft=c(Se),Jt=c(" ]"),M&&M.c(),Kt=u(),pt=s("li"),pt.textContent=Me,Ot=u(),x=s("ul"),xt=s("li"),xt.innerHTML=Te,Qt=u(),ht=s("li"),at=s("a"),Rt=c("[ akross:/"),Yt=c(Ne),te=c(" ]"),T&&T.c(),ee=u(),Lt=s("li"),Lt.textContent=Pe,le=u(),vt=s("li"),rt=s("a"),se=c("[ Akross:/"),ie=c(je),ne=c(" ]"),N&&N.c(),ae=u(),It=s("li"),It.textContent=De,re=u(),mt=s("li"),ot=s("a"),oe=c("[ Akross:/"),fe=c($e),ce=c(" ]"),P&&P.c(),de=u(),wt=s("li"),wt.textContent=Ve,ue=u(),$=s("ul"),Et=s("li"),Et.innerHTML=qe,he=u(),_t=s("li"),ft=s("a"),ve=c("[ Akross:/"),me=c(ze),_e=c(" ]"),j&&j.c(),be=u(),At=s("li"),At.textContent=Ue,Ce=u(),yt=s("li"),yt.innerHTML=We,ke=u(),Ht=s("li"),Ht.textContent=Xe,this.h()},l(g){t=i(g,"DIV",{class:!0});var D=m(t);a=i(D,"DIV",{class:!0,"data-svelte-h":!0}),_(a)!=="svelte-14svc53"&&(a.innerHTML=l),f=h(D),C=i(D,"H2",{class:!0,"data-svelte-h":!0}),_(C)!=="svelte-23ru1v"&&(C.textContent=E),I=h(D),L=i(D,"UL",{class:!0});var St=m(L);z=i(St,"LI",{"data-svelte-h":!0}),_(z)!=="svelte-1k9nzto"&&(z.innerHTML=ct),U=h(St),v=i(St,"LI",{});var ge=m(v);p=i(ge,"A",{href:!0});var Tt=m(p);b=d(Tt,"[ akross:/"),bt=d(Tt,Z),dt=d(Tt," ]"),Tt.forEach(o),y&&y.l(ge),ge.forEach(o),F=h(St),Y=i(St,"LI",{"data-svelte-h":!0}),_(Y)!=="svelte-10hga1n"&&(Y.textContent=Ct),St.forEach(o),W=h(D),k=i(D,"UL",{class:!0});var V=m(k);K=i(V,"LI",{"data-svelte-h":!0}),_(K)!=="svelte-syc3qz"&&(K.innerHTML=tt),et=h(V),J=i(V,"LI",{});var pe=m(J);w=i(pe,"A",{href:!0});var Nt=m(w);kt=d(Nt,"[ akross:/"),A=d(Nt,X),lt=d(Nt," ]"),Nt.forEach(o),H&&H.l(pe),pe.forEach(o),st=h(V),G=i(V,"LI",{"data-svelte-h":!0}),_(G)!=="svelte-wuxbwb"&&(G.textContent=Mt),B=h(V),O=i(V,"LI",{});var xe=m(O);it=i(xe,"A",{href:!0});var Pt=m(it);Ut=d(Pt,"[ akross:/"),Wt=d(Pt,ye),Xt=d(Pt," ]"),Pt.forEach(o),S&&S.l(xe),xe.forEach(o),Zt=h(V),gt=i(V,"LI",{"data-svelte-h":!0}),_(gt)!=="svelte-1e3daq2"&&(gt.textContent=He),Gt=h(V),ut=i(V,"LI",{});var Le=m(ut);nt=i(Le,"A",{href:!0});var jt=m(nt);Bt=d(jt,"[ akross:/"),Ft=d(jt,Se),Jt=d(jt," ]"),jt.forEach(o),M&&M.l(Le),Le.forEach(o),Kt=h(V),pt=i(V,"LI",{"data-svelte-h":!0}),_(pt)!=="svelte-1s8nt1v"&&(pt.textContent=Me),V.forEach(o),Ot=h(D),x=i(D,"UL",{class:!0});var q=m(x);xt=i(q,"LI",{"data-svelte-h":!0}),_(xt)!=="svelte-1x0uxyk"&&(xt.innerHTML=Te),Qt=h(q),ht=i(q,"LI",{});var Ie=m(ht);at=i(Ie,"A",{href:!0});var Dt=m(at);Rt=d(Dt,"[ akross:/"),Yt=d(Dt,Ne),te=d(Dt," ]"),Dt.forEach(o),T&&T.l(Ie),Ie.forEach(o),ee=h(q),Lt=i(q,"LI",{"data-svelte-h":!0}),_(Lt)!=="svelte-8ab3cd"&&(Lt.textContent=Pe),le=h(q),vt=i(q,"LI",{});var we=m(vt);rt=i(we,"A",{href:!0});var $t=m(rt);se=d($t,"[ Akross:/"),ie=d($t,je),ne=d($t," ]"),$t.forEach(o),N&&N.l(we),we.forEach(o),ae=h(q),It=i(q,"LI",{"data-svelte-h":!0}),_(It)!=="svelte-gey46r"&&(It.textContent=De),re=h(q),mt=i(q,"LI",{});var Ee=m(mt);ot=i(Ee,"A",{href:!0});var Vt=m(ot);oe=d(Vt,"[ Akross:/"),fe=d(Vt,$e),ce=d(Vt," ]"),Vt.forEach(o),P&&P.l(Ee),Ee.forEach(o),de=h(q),wt=i(q,"LI",{"data-svelte-h":!0}),_(wt)!=="svelte-1321jhd"&&(wt.textContent=Ve),q.forEach(o),ue=h(D),$=i(D,"UL",{class:!0});var Q=m($);Et=i(Q,"LI",{"data-svelte-h":!0}),_(Et)!=="svelte-5117l5"&&(Et.innerHTML=qe),he=h(Q),_t=i(Q,"LI",{});var Ae=m(_t);ft=i(Ae,"A",{href:!0});var qt=m(ft);ve=d(qt,"[ Akross:/"),me=d(qt,ze),_e=d(qt," ]"),qt.forEach(o),j&&j.l(Ae),Ae.forEach(o),be=h(Q),At=i(Q,"LI",{"data-svelte-h":!0}),_(At)!=="svelte-1h1glkv"&&(At.textContent=Ue),Ce=h(Q),yt=i(Q,"LI",{"data-svelte-h":!0}),_(yt)!=="svelte-wg71c9"&&(yt.innerHTML=We),ke=h(Q),Ht=i(Q,"LI",{"data-svelte-h":!0}),_(Ht)!=="svelte-1dihl8h"&&(Ht.textContent=Xe),Q.forEach(o),D.forEach(o),this.h()},h(){r(a,"class","flex justify-center items-center mb-4"),r(C,"class","mb-8 text-lg font-bold"),r(p,"href","/"+n[1].code),r(L,"class","mb-4 list-none"),r(w,"href","/"+n[1].blog),r(it,"href","/"+n[1].gamelist),r(nt,"href","/"+n[1].musiclist),r(k,"class","mb-4 list-none"),r(at,"href","/"+n[1].external),r(rt,"href","/"+n[1].about),r(ot,"href","/"+n[1].lore),r(x,"class","mb-4 list-none"),r(ft,"href","/"+n[1].webring),r($,"class","mb-4 list-none"),r(t,"class","text-center w-72 mr-16 hidden md:block min-w-fit")},m(g,D){R(g,t,D),e(t,a),e(t,f),e(t,C),e(t,I),e(t,L),e(L,z),e(L,U),e(L,v),e(v,p),e(p,b),e(p,bt),e(p,dt),y&&y.m(v,null),e(L,F),e(L,Y),e(t,W),e(t,k),e(k,K),e(k,et),e(k,J),e(J,w),e(w,kt),e(w,A),e(w,lt),H&&H.m(J,null),e(k,st),e(k,G),e(k,B),e(k,O),e(O,it),e(it,Ut),e(it,Wt),e(it,Xt),S&&S.m(O,null),e(k,Zt),e(k,gt),e(k,Gt),e(k,ut),e(ut,nt),e(nt,Bt),e(nt,Ft),e(nt,Jt),M&&M.m(ut,null),e(k,Kt),e(k,pt),e(t,Ot),e(t,x),e(x,xt),e(x,Qt),e(x,ht),e(ht,at),e(at,Rt),e(at,Yt),e(at,te),T&&T.m(ht,null),e(x,ee),e(x,Lt),e(x,le),e(x,vt),e(vt,rt),e(rt,se),e(rt,ie),e(rt,ne),N&&N.m(vt,null),e(x,ae),e(x,It),e(x,re),e(x,mt),e(mt,ot),e(ot,oe),e(ot,fe),e(ot,ce),P&&P.m(mt,null),e(x,de),e(x,wt),e(t,ue),e(t,$),e($,Et),e($,he),e($,_t),e(_t,ft),e(ft,ve),e(ft,me),e(ft,_e),j&&j.m(_t,null),e($,be),e($,At),e($,Ce),e($,yt),e($,ke),e($,Ht)},p(g,[D]){g[0]==`${g[1].code}`?y||(y=Be(),y.c(),y.m(v,null)):y&&(y.d(1),y=null),g[0]==`${g[1].blog}`?H||(H=Fe(),H.c(),H.m(J,null)):H&&(H.d(1),H=null),g[0]==`${g[1].gamelist}`?S||(S=Je(),S.c(),S.m(O,null)):S&&(S.d(1),S=null),g[0]==`${g[1].musiclist}`?M||(M=Ke(),M.c(),M.m(ut,null)):M&&(M.d(1),M=null),g[0]==`${g[1].external}`?T||(T=Oe(),T.c(),T.m(ht,null)):T&&(T.d(1),T=null),g[0]==`${g[1].about}`?N||(N=Qe(),N.c(),N.m(vt,null)):N&&(N.d(1),N=null),g[0]==`${g[1].lore}`?P||(P=Re(),P.c(),P.m(mt,null)):P&&(P.d(1),P=null),g[0]==`${g[1].webring}`?j||(j=Ye(),j.c(),j.m(_t,null)):j&&(j.d(1),j=null)},i:zt,o:zt,d(g){g&&o(t),y&&y.d(),H&&H.d(),S&&S.d(),M&&M.d(),T&&T.d(),N&&N.d(),P&&P.d(),j&&j.d()}}}function ol(n,t,a){let{title:l=""}=t;const f={home:"home",creative:"creative",information:"information",community:"community",code:"code",blog:"blog",gamelist:"game-list",musiclist:"music-list",external:"external",about:"about",lore:"lore",webring:"webring"};return n.$$set=C=>{"title"in C&&a(0,l=C.title)},[l,f]}class ul extends el{constructor(t){super(),ll(this,t,ol,rl,tl,{title:0})}}export{dl as H,ul as S};
