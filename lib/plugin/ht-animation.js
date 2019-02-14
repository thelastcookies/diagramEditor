!function(X){"use strict";var g="ht",s=X[g],U=s.Default,m="prototype",C=s.DataModel[m],d=s.Data[m],i=null,a=function(q){return"set"+q.charAt(0).toUpperCase()+q.slice(1)};U.getEasing=function(f){var Z=i;return f.indexOf(".")>=0?(f=f.split("."),Z=p[f[0]][f[1]]):Z=p[f],function(u){return Z(u,0,1,1)}},U.getCommonEasing=function(w){var k=i;return w.indexOf(".")>=0?(w=w.split("."),k=p[w[0]][w[1]]):k=p[w],k},d.setAnimation=function(Y){var t=this._animation;this._animation=Y,this.fp("animation",t,Y)},d.getAnimation=function(){return this._animation},d.pauseAnimation=function(){this._pauseAnimation=!0,this._pauseTime=Date.now()},d.resumeAnimation=function(){delete this._pauseAnimation},X.requestAnimFrame=function(){return X.requestAnimationFrame||X.webkitRequestAnimationFrame||X.mozRequestAnimationFrame||function(R){X.setTimeout(R,1e3/60)}}();var q=X.requestAnimFrame,e=X.setInterval;C.setAnimationInterval=function(k){var d=this;d.$2a=k,d.$1a!=i&&(clearInterval(d.$1a),delete d.$1a,d.enableAnimation(k))},C.getAnimationInterval=function(){return this.$2a||"animationFrame"},C.getDataAnimation=function(z){return z.getAnimation()},C.enableAnimation=function(B){var n=this,o=n.getDatas();if(n.$1a==i){B&&n.setAnimationInterval(B),B=n.getAnimationInterval();var m=function(){var T=n.getAnimationInterval();o.each(function(m){var W=n.getDataAnimation(m);if(m.setAnimation(W),W&&!m._pauseAnimation){var h=W.start;m._animationstatus=m._animationstatus||{},m._animationprocess=m._animationprocess||h.slice(0);for(var s=m._animationstatus,N=m._animationprocess,C=0;C<N.length;C++){var X;X=s[C]?s[C]:s[C]={$5a:0,$6a:0,$7a:0,$8a:0};var G=W[N[C]],g=G.property,t=G.accessType,b=G.from,D=G.to,F=G.easing||"Quad.easeOut",M=X.$5a,$=G.frames||60,x=G.repeat||0,P=G.duration,J=G.delay||0,Y=G.interval,B=X.$6a,K=G.onUpdate,o=G.onComplete,H=!1,E=function(){var C;C=P!=i?U.getCommonEasing(F)(Date.now()-X._startTime,b,D-b,P):U.getCommonEasing(F)(M,b,D-b,$),K?K.call(m,C):t?"style"===t?m.s(g,C):"attr"===t?m.a(g,C):"field"===t&&(m[g]=C):m[a(g)](C),H=!0},Q=function(){X._startTime==i&&(X._startTime=Date.now());var h=m._pauseTime;h!=i&&(X._startTime+=Date.now()-h),C==N.length-1&&delete m._pauseTime,Y!=i?X.$7a>=Y?(X.$7a=0,E()):X.$7a+=isNaN(T)?16.6666:T:E()};J?X.$8a>=J?Q():X.$8a+=isNaN(T)?16.6666:T:Q(),H&&(P!=i?Date.now()-X._startTime>P&&(x===!0?X._startTime=Date.now():(B=X.$6a=B+1,B>x&&(o&&o.call(m),G.next?(s[C]=i,N[C]=G.next):(m.setAnimation(i),m._animationstatus=i,m._animationprocess=i,m._pauseTime=i)))):(M=X.$5a=M+1,M>$&&(x===!0?M=X.$5a=0:(B=X.$6a=B+1,B>x&&(o&&o.call(m),G.next?(s[C]=i,N[C]=G.next):(m.setAnimation(i),m._animationstatus=i,m._animationprocess=i))))))}}}),"animationFrame"===T&&n.$1a!=i&&(n.$1a=q(m))};n.$1a="animationFrame"===B?q(m):e(m,B)}},C.disableAnimation=function(){var m=this,U=m.getAnimationInterval();"animationFrame"===U||clearInterval(m.$1a),delete m.$1a};var p={Linear:function(w,X,H,I){return H*w/I+X},Quad:{easeIn:function(e,H,d,r){return d*(e/=r)*e+H},easeOut:function(t,n,e,Z){return-e*(t/=Z)*(t-2)+n},easeInOut:function(f,Q,F,g){return(f/=g/2)<1?F/2*f*f+Q:-F/2*(--f*(f-2)-1)+Q}},Cubic:{easeIn:function(K,F,i,N){return i*(K/=N)*K*K+F},easeOut:function(C,l,e,L){return e*((C=C/L-1)*C*C+1)+l},easeInOut:function(L,w,o,B){return(L/=B/2)<1?o/2*L*L*L+w:o/2*((L-=2)*L*L+2)+w}},Quart:{easeIn:function($,t,s,N){return s*($/=N)*$*$*$+t},easeOut:function(M,p,U,J){return-U*((M=M/J-1)*M*M*M-1)+p},easeInOut:function(X,E,G,u){return(X/=u/2)<1?G/2*X*X*X*X+E:-G/2*((X-=2)*X*X*X-2)+E}},Quint:{easeIn:function(E,e,N,t){return N*(E/=t)*E*E*E*E+e},easeOut:function(b,L,$,G){return $*((b=b/G-1)*b*b*b*b+1)+L},easeInOut:function(J,R,f,b){return(J/=b/2)<1?f/2*J*J*J*J*J+R:f/2*((J-=2)*J*J*J*J+2)+R}},Sine:{easeIn:function(u,m,p,d){return-p*Math.cos(u/d*(Math.PI/2))+p+m},easeOut:function(B,d,z,k){return z*Math.sin(B/k*(Math.PI/2))+d},easeInOut:function(y,N,c,C){return-c/2*(Math.cos(Math.PI*y/C)-1)+N}},Expo:{easeIn:function(q,v,y,F){return 0==q?v:y*Math.pow(2,10*(q/F-1))+v},easeOut:function(U,Z,p,D){return U==D?Z+p:p*(-Math.pow(2,-10*U/D)+1)+Z},easeInOut:function(E,S,v,g){return 0==E?S:E==g?S+v:(E/=g/2)<1?v/2*Math.pow(2,10*(E-1))+S:v/2*(-Math.pow(2,-10*--E)+2)+S}},Circ:{easeIn:function(t,k,D,I){return-D*(Math.sqrt(1-(t/=I)*t)-1)+k},easeOut:function(C,r,e,X){return e*Math.sqrt(1-(C=C/X-1)*C)+r},easeInOut:function(B,i,P,l){return(B/=l/2)<1?-P/2*(Math.sqrt(1-B*B)-1)+i:P/2*(Math.sqrt(1-(B-=2)*B)+1)+i}},Elastic:{easeIn:function(Y,z,Q,m,M,q){var K;return 0==Y?z:1==(Y/=m)?z+Q:("undefined"==typeof q&&(q=.3*m),!M||M<Math.abs(Q)?(K=q/4,M=Q):K=q/(2*Math.PI)*Math.asin(Q/M),-(M*Math.pow(2,10*(Y-=1))*Math.sin((Y*m-K)*2*Math.PI/q))+z)},easeOut:function(k,s,Q,P,S,W){var d;return 0==k?s:1==(k/=P)?s+Q:("undefined"==typeof W&&(W=.3*P),!S||S<Math.abs(Q)?(S=Q,d=W/4):d=W/(2*Math.PI)*Math.asin(Q/S),S*Math.pow(2,-10*k)*Math.sin((k*P-d)*2*Math.PI/W)+Q+s)},easeInOut:function(m,l,Q,O,A,R){var I;return 0==m?l:2==(m/=O/2)?l+Q:("undefined"==typeof R&&(R=O*.3*1.5),!A||A<Math.abs(Q)?(A=Q,I=R/4):I=R/(2*Math.PI)*Math.asin(Q/A),1>m?-.5*A*Math.pow(2,10*(m-=1))*Math.sin((m*O-I)*2*Math.PI/R)+l:.5*A*Math.pow(2,-10*(m-=1))*Math.sin((m*O-I)*2*Math.PI/R)+Q+l)}},Back:{easeIn:function(v,$,e,S,i){return"undefined"==typeof i&&(i=1.70158),e*(v/=S)*v*((i+1)*v-i)+$},easeOut:function(l,b,T,D,F){return"undefined"==typeof F&&(F=1.70158),T*((l=l/D-1)*l*((F+1)*l+F)+1)+b},easeInOut:function(S,v,z,f,O){return"undefined"==typeof O&&(O=1.70158),(S/=f/2)<1?z/2*S*S*(((O*=1.525)+1)*S-O)+v:z/2*((S-=2)*S*(((O*=1.525)+1)*S+O)+2)+v}},Bounce:{easeIn:function(X,b,m,B){return m-p.Bounce.easeOut(B-X,0,m,B)+b},easeOut:function(o,q,b,w){return(o/=w)<1/2.75?b*7.5625*o*o+q:2/2.75>o?b*(7.5625*(o-=1.5/2.75)*o+.75)+q:2.5/2.75>o?b*(7.5625*(o-=2.25/2.75)*o+.9375)+q:b*(7.5625*(o-=2.625/2.75)*o+.984375)+q},easeInOut:function(x,V,o,Y){return Y/2>x?.5*p.Bounce.easeIn(2*x,0,o,Y)+V:.5*p.Bounce.easeOut(2*x-Y,0,o,Y)+.5*o+V}}}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);