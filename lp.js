/* distortion-waves 0.1.0 (MIT), libraries.dev/waves */
(()=>{var Ge=Object.create;var Vt=Object.defineProperty;var He=Object.getOwnPropertyDescriptor;var Xe=Object.getOwnPropertyNames;var Ve=Object.getPrototypeOf,Ye=Object.prototype.hasOwnProperty;var ht=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(i){throw t=0,i}};var Ke=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Xe(t))!Ye.call(e,n)&&n!==i&&Vt(e,n,{get:()=>t[n],enumerable:!(r=He(t,n))||r.enumerable});return e};var Yt=(e,t,i)=>(i=e!=null?Ge(Ve(e)):{},Ke(t||!e||!e.__esModule?Vt(i,"default",{value:e,enumerable:!0}):i,e));var ae=ht(E=>{"use strict";var rt=Symbol.for("react.element"),Ze=Symbol.for("react.portal"),Qe=Symbol.for("react.fragment"),Je=Symbol.for("react.strict_mode"),ti=Symbol.for("react.profiler"),ei=Symbol.for("react.provider"),ii=Symbol.for("react.context"),ri=Symbol.for("react.forward_ref"),ni=Symbol.for("react.suspense"),si=Symbol.for("react.memo"),oi=Symbol.for("react.lazy"),Kt=Symbol.iterator;function ai(e){return e===null||typeof e!="object"?null:(e=Kt&&e[Kt]||e["@@iterator"],typeof e=="function"?e:null)}var Jt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},te=Object.assign,ee={};function J(e,t,i){this.props=e,this.context=t,this.refs=ee,this.updater=i||Jt}J.prototype.isReactComponent={};J.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};J.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ie(){}ie.prototype=J.prototype;function St(e,t,i){this.props=e,this.context=t,this.refs=ee,this.updater=i||Jt}var kt=St.prototype=new ie;kt.constructor=St;te(kt,J.prototype);kt.isPureReactComponent=!0;var Zt=Array.isArray,re=Object.prototype.hasOwnProperty,At={current:null},ne={key:!0,ref:!0,__self:!0,__source:!0};function se(e,t,i){var r,n={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)re.call(t,r)&&!ne.hasOwnProperty(r)&&(n[r]=t[r]);var l=arguments.length-2;if(l===1)n.children=i;else if(1<l){for(var o=Array(l),h=0;h<l;h++)o[h]=arguments[h+2];n.children=o}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)n[r]===void 0&&(n[r]=l[r]);return{$$typeof:rt,type:e,key:s,ref:a,props:n,_owner:At.current}}function li(e,t){return{$$typeof:rt,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Tt(e){return typeof e=="object"&&e!==null&&e.$$typeof===rt}function hi(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return t[i]})}var Qt=/\/+/g;function Et(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hi(""+e.key):t.toString(36)}function ct(e,t,i,r,n){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case rt:case Ze:a=!0}}if(a)return a=e,n=n(a),e=r===""?"."+Et(a,0):r,Zt(n)?(i="",e!=null&&(i=e.replace(Qt,"$&/")+"/"),ct(n,t,i,"",function(h){return h})):n!=null&&(Tt(n)&&(n=li(n,i+(!n.key||a&&a.key===n.key?"":(""+n.key).replace(Qt,"$&/")+"/")+e)),t.push(n)),1;if(a=0,r=r===""?".":r+":",Zt(e))for(var l=0;l<e.length;l++){s=e[l];var o=r+Et(s,l);a+=ct(s,t,i,o,n)}else if(o=ai(e),typeof o=="function")for(e=o.call(e),l=0;!(s=e.next()).done;)s=s.value,o=r+Et(s,l++),a+=ct(s,t,i,o,n);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ut(e,t,i){if(e==null)return e;var r=[],n=0;return ct(e,r,"","",function(s){return t.call(i,s,n++)}),r}function ui(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O={current:null},dt={transition:null},ci={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:dt,ReactCurrentOwner:At};function oe(){throw Error("act(...) is not supported in production builds of React.")}E.Children={map:ut,forEach:function(e,t,i){ut(e,function(){t.apply(this,arguments)},i)},count:function(e){var t=0;return ut(e,function(){t++}),t},toArray:function(e){return ut(e,function(t){return t})||[]},only:function(e){if(!Tt(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};E.Component=J;E.Fragment=Qe;E.Profiler=ti;E.PureComponent=St;E.StrictMode=Je;E.Suspense=ni;E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ci;E.act=oe;E.cloneElement=function(e,t,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=te({},e.props),n=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=At.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(o in t)re.call(t,o)&&!ne.hasOwnProperty(o)&&(r[o]=t[o]===void 0&&l!==void 0?l[o]:t[o])}var o=arguments.length-2;if(o===1)r.children=i;else if(1<o){l=Array(o);for(var h=0;h<o;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:rt,type:e.type,key:n,ref:s,props:r,_owner:a}};E.createContext=function(e){return e={$$typeof:ii,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ei,_context:e},e.Consumer=e};E.createElement=se;E.createFactory=function(e){var t=se.bind(null,e);return t.type=e,t};E.createRef=function(){return{current:null}};E.forwardRef=function(e){return{$$typeof:ri,render:e}};E.isValidElement=Tt;E.lazy=function(e){return{$$typeof:oi,_payload:{_status:-1,_result:e},_init:ui}};E.memo=function(e,t){return{$$typeof:si,type:e,compare:t===void 0?null:t}};E.startTransition=function(e){var t=dt.transition;dt.transition={};try{e()}finally{dt.transition=t}};E.unstable_act=oe;E.useCallback=function(e,t){return O.current.useCallback(e,t)};E.useContext=function(e){return O.current.useContext(e)};E.useDebugValue=function(){};E.useDeferredValue=function(e){return O.current.useDeferredValue(e)};E.useEffect=function(e,t){return O.current.useEffect(e,t)};E.useId=function(){return O.current.useId()};E.useImperativeHandle=function(e,t,i){return O.current.useImperativeHandle(e,t,i)};E.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)};E.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)};E.useMemo=function(e,t){return O.current.useMemo(e,t)};E.useReducer=function(e,t,i){return O.current.useReducer(e,t,i)};E.useRef=function(e){return O.current.useRef(e)};E.useState=function(e){return O.current.useState(e)};E.useSyncExternalStore=function(e,t,i){return O.current.useSyncExternalStore(e,t,i)};E.useTransition=function(){return O.current.useTransition()};E.version="18.3.1"});var Mt=ht((zr,le)=>{"use strict";le.exports=ae()});var ue=ht(ft=>{"use strict";var di=Mt(),fi=Symbol.for("react.element"),pi=Symbol.for("react.fragment"),mi=Object.prototype.hasOwnProperty,gi=di.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vi={key:!0,ref:!0,__self:!0,__source:!0};function he(e,t,i){var r,n={},s=null,a=null;i!==void 0&&(s=""+i),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)mi.call(t,r)&&!vi.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:fi,type:e,key:s,ref:a,props:n,_owner:gi.current}}ft.Fragment=pi;ft.jsx=he;ft.jsxs=he});var de=ht((Br,ce)=>{"use strict";ce.exports=ue()});var K=Yt(de(),1),W=Yt(Mt(),1),wt={colorful:{colors:[[255,201,21],[126,196,255],[180,40,230],[235,100,160],[255,176,122],[154,160,255],[127,217,238]],ahead:[255,122,182],behind:[90,190,255]},green:{colors:[[53,186,0],[140,235,90],[0,196,110],[190,250,130],[40,160,60],[110,225,160],[90,210,40]],ahead:[196,255,120],behind:[0,150,70]},ocean:{colors:[[40,120,255],[90,200,255],[20,80,200],[120,230,240],[60,150,255],[150,180,255],[0,180,220]],ahead:[150,230,255],behind:[30,70,220]},sunset:{colors:[[255,140,60],[255,90,120],[255,200,80],[240,70,90],[255,170,120],[220,90,200],[255,120,80]],ahead:[255,220,120],behind:[200,60,160]},mono:{colors:[[240,240,245],[200,205,215],[255,255,255],[170,175,190],[225,228,235],[190,195,205],[245,245,250]],ahead:[255,255,255],behind:[160,165,180]}},pt=(e,t,i)=>[e[0]+(t[0]-e[0])*i,e[1]+(t[1]-e[1])*i,e[2]+(t[2]-e[2])*i];function yi(e){return{colors:[e,pt(e,[255,255,255],.25),e,pt(e,[0,0,0],.15)],ahead:pt(e,[255,255,255],.45),behind:pt(e,[0,0,0],.3)}}function wi(e){let t=parseInt(e.replace("#",""),16);return[t>>16&255,t>>8&255,t&255]}function fe(e){let t={type:e,anticipation:.5,travel:2.28,launchGap:0,linger:-.35,rimFade:3.03,returnSpeed:1.45,pull:24,inhale:56,gatherGlow:.33,gatherDots:1,amplitude:34,lensWidth:150,aberration:.78,swell:22,blur:18,blurAhead:90,blurBehind:240,lead:130,tail:300,strength:.92,rimWidth:14,rimUnevenness:1,rimStrength:.82,rimSoftness:343,cornerRadius:62,rimPulse:.6,hairlineWidth:1.5,hairlineOpacity:.9,hairlineWhite:.95,hairlineLinger:.47,hairlineFade:3,orientation:.5,particleCount:64,particleSize:1.8,particleReach:150,particleFlight:30,particleGap:24,particleLife:2.19,particleSpread:1,palette:wt.colorful};return e!=="center"?t:{...t,anticipation:.25,travel:3.43,rimFade:2.51,hairlineLinger:.96,strength:.6,rimStrength:.6,aberration:0,gatherGlow:0,gatherDots:0,particleCount:89,particleLife:3.93,particleSpread:.64,palette:wt.green,cornerRadius:48,pull:14.4,inhale:33.6,amplitude:20.4,lensWidth:90,swell:13.2,blur:10.8,blurAhead:54,blurBehind:144,lead:78,tail:180,rimSoftness:205.8,particleReach:90,particleFlight:18,particleGap:11}}function st(e){return e.anticipation+Math.max(e.travel*.6,e.linger+e.rimFade,e.linger+e.hairlineLinger+e.hairlineFade,e.particleLife)}function Rt(e,t,i,r){let n=(s,a,l)=>{let o=1-s;return 3*o*o*s*a+3*o*s*s*l+s*s*s};return s=>{if(s<=0)return 0;if(s>=1)return 1;let a=0,l=1;for(let o=0;o<24;o++){let h=(a+l)/2;n(h,e,i)<s?a=h:l=h}return n((a+l)/2,t,r)}}var _e=Rt(.22,1,.36,1),nt=[.22,1,.36,1],pe=_e;function bi(e){let t=e.easeX1??.22,i=e.easeY1??1,r=e.easeX2??.36,n=e.easeY2??1;return t===.22&&i===1&&r===.36&&n===1?_e:((t!==nt[0]||i!==nt[1]||r!==nt[2]||n!==nt[3])&&(nt=[t,i,r,n],pe=Rt(Math.min(Math.max(t,0),1),i,Math.min(Math.max(r,0),1),n)),pe)}var me=Rt(.42,0,.58,1),z=(e,t,i)=>{let r=Math.min(Math.max((i-e)/(t-e),0),1);return r*r*(3-2*r)};function Dt(){return{ox:0,oy:0,tilt:0,spine:0,radius:0,moved:0,squash:1,time:0,energy:0,swell:0,width:0,height:0,gravity:0,glow:0,clearRadius:0,hairClearRadius:0,rim:0,sparkle:0,flying:0,launched:!1,hasCleared:!1,ring:!1,sideways:!1,hold:0}}var Pe=60,xi=1.4,Ri=.22,Ei=.5,Si=100,ki=.45,Ai=.2,Ti=.55;function Ft(e,t,i,r,n,s,a){let l=st(n),o=Math.min(Math.max(e,0),1)*l,h=o-n.anticipation,c=z(0,Math.max(n.anticipation,.001),o),u=Math.min(Math.max(h/n.travel,0),1),d=bi(n)(u),v=n.type==="center",w=n.type==="horizontal",f=v?1:xi,b=t.x+t.w/2,g=t.y+t.h/2,R=Math.min(t.w,t.h)/2,y=w?t.h:t.w,m=v?0:Math.max(0,y/2-R),S=w?Math.PI/2:0,_=Math.cos(S),L=Math.sin(S),C=0;if(!v&&s){let Q=w?s.y-g:s.x-b;C=Math.min(Math.max(Q/Math.max(y/2,1),-1),1)}let M=C*y/2*n.orientation,D=C*n.orientation*ki,N=S+D,T=z(0,.45,d),B=Math.cos(N),q=Math.sin(N),I=0;for(let Q=0;Q<4;Q++){let Ht=(Q&1?i:0)-b-M*_,Xt=(Q&2?r:0)-g-M*L;I=Math.max(I,Math.hypot((B*Ht+q*Xt)*f,-q*Ht+B*Xt))}let p=I+(n.swell+Pe)*f,x=1-z(Ai,Ti,u),A=R+Math.max(n.launchGap,0),P=h<0?A+n.inhale*(1-c):A+(p+Si-A)*d,F=Math.min(Ei*Math.max(n.gatherGlow,0),1),$=R-n.rimSoftness,U=I+(n.rimSoftness+n.swell)*f,k=a??Dt(),Z=z(0,.1,d);return k.ox=b+M*Z*_,k.oy=g+M*Z*L,k.tilt=S+D*Z,k.spine=m*(1-T),k.radius=P,k.moved=d,k.squash=1+(f-1)*z(0,.5,d),k.time=o,k.energy=z(0,.05,u)*x,k.swell=n.swell*z(0,.3,d),k.width=i,k.height=r,k.gravity=n.pull*c*(1-z(0,Ri,h)),k.glow=h<0?F*c:(F+(1-F)*z(0,.07,u))*x,k.clearRadius=$+(U-$)*me((h-n.linger)/Math.max(n.rimFade,.01)),k.hairClearRadius=$+(U-$)*me((h-n.linger-n.hairlineLinger)/Math.max(n.hairlineFade,.01)),k.rim=n.rimStrength*z(0,.1,u)*(1-z(.9,1,o/l)),k.sparkle=z(0,Math.max(n.anticipation,.001)*.35,o),k.flying=Math.max(h,0),k.launched=h>0,k.hasCleared=P>p,k.ring=v,k.sideways=w,k.hold=v?R:0,k}var tt=7,Mi=new Float32Array(tt*3),Ct=(e,t,i)=>{let r=Math.sin(e*t+i)*43758.5453;return r-Math.floor(r)};function ge(e,t,i,r,n){let s=Math.max(t/2-r,0),a=Math.max(i/2-r,0),l=4*(s+a+.5*Math.PI*r),o=Mi;for(let h=0;h<tt;h++){let c=Ct(h,12.9898,1.3),u=Ct(h,78.233,4.1),d=Ct(h,39.425,2.7),v=l*(h+.35*c)/tt+e*(-22+44*u)*(1+2*n),w=l/tt*(.2+.25*d),f=(.25+.3*n)*Math.sin(e*(1.1+1.2*c)*(1+n)+h*2.4);o[h*3]=v,o[h*3+1]=w,o[h*3+2]=(.2+2.6*u)*(1+f)}return o}var Fi=.22,Ci=.3,mt=(e,t,i)=>{let r=Math.sin(e*12.9898+t*78.233+i*37.719)*43758.5453;return r-Math.floor(r)};function _i(e){let t=[];for(let i=0;i<Math.round(e.particleCount);i++){let r=i+1,n=a=>r*a%1,s=n(.5497004779);t.push({index:r,column:(n(.7548776662)*2-1)*.92,heading:n(.7548776662)*2*Math.PI,pace:.35+.72*Math.sqrt(n(.8191725134)),drift:15+50*n(.6710436067),sway:3+11*n(.4142135624),swayRate:2.5+3.5*n(.7320508076),twinkleRate:8+12*n(.2360679775),phase:n(.6180339887)*2*Math.PI,life:e.particleLife*(.4+.6*n(.6457513111)),size:e.particleSize*(.55+.45*s*s),brightness:.3+.7*n(.6055512755),hop:.16+.14*n(.1231056256),hopOffset:n(.472135955)})}return t}function Pi(e,t,i,r,n={x:0,y:0,a:0}){let s=.5+.5*Math.sin(t.time*e.twinkleRate+e.phase),a=e.brightness*(.7+.3*s),l=Math.min(Math.max(r.particleSpread,0),1),o=i.x+i.w/2,h=i.y+i.h/2;if(!t.launched){let R=t.time/e.hop+e.hopOffset,y=Math.floor(R),m=R-y,S=z(0,.25,m)*(1-z(.55,1,m)),_=1-z(r.anticipation*.75,r.anticipation,t.time),L=t.sparkle*S*_*a*r.gatherDots;if(t.ring){let U=mt(e.index,y,1)*2*Math.PI,k=Math.min(i.w,i.h)/2+r.particleGap+r.particleFlight,Z=k+Math.max(r.particleReach-k,0)*mt(e.index,y,2)-r.particleFlight*m*m;return n.x=o+Math.cos(U)*Z,n.y=h+Math.sin(U)*Z,n.a=L,n}let C=(t.sideways?i.h:i.w)/2,M=(t.sideways?i.w:i.h)/2,D=(mt(e.index,y,1)*2-1)*(C+24),N=r.particleGap+r.particleFlight,T=N+Math.max(r.particleReach-N,0)*mt(e.index,y,2),B=Math.min(i.w,i.h)/2,q=M+T,I=Math.min(Math.max(D,-C+B),C-B),p=t.sideways?o+q:o+D,x=t.sideways?h+D:h-q,A=(t.sideways?o+M:o+I)-p,P=(t.sideways?h+I:h-M)-x,F=Math.max(Math.hypot(A,P),1),$=r.particleFlight*m*m;return n.x=p+A/F*$,n.y=x+P/F*$,n.a=L,n}let c=(1-z(e.life*.55,e.life,t.flying))*a,u=e.sway*Math.sin(e.swayRate*t.flying+e.phase)*Math.min(t.flying/.25,1);if(t.ring){let R=Math.min(i.w,i.h)/2,y=R+((t.radius-R)*e.pace+e.drift*t.flying)*l,m=Math.cos(e.heading),S=Math.sin(e.heading);return n.x=t.ox+m*y-S*u,n.y=t.oy+S*y+m*u,n.a=c,n}let d=Math.min(i.w,i.h)/2,v=1+Fi*t.moved*e.pace*l,w=e.column*(t.sideways?i.h:i.w)/2*v+u,f=(d+(t.radius-d)*e.pace*l)*(1-Ci*e.column*e.column)+e.drift*t.flying*l,b=Math.cos(t.tilt),g=Math.sin(t.tilt);return n.x=t.ox+b*w+g*f,n.y=t.oy+g*w-b*f,n.a=c,n}function _t(e){let t=o=>{let h=o/255;return h<=.04045?h/12.92:Math.pow((h+.055)/1.055,2.4)},[i,r,n]=[t(e[0]),t(e[1]),t(e[2])],s=Math.cbrt(.4122214708*i+.5363325363*r+.0514459929*n),a=Math.cbrt(.2119034982*i+.6806995451*r+.1073969566*n),l=Math.cbrt(.0883024619*i+.2817188376*r+.6299787005*n);return[.2104542553*s+.793617785*a-.0040720468*l,1.9779984951*s-2.428592205*a+.4505937099*l,.0259040371*s+.7827717662*a-.808675766*l]}var Pt=`#version 300 es
in vec2 aPos;
out vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`,$i=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uTex;
uniform vec2 uStep;
uniform float uSigma;
out vec4 outColor;
void main() {
  float r = ceil(uSigma * 3.0);
  vec4 acc = vec4(0.0);
  float wsum = 0.0;
  for (float i = -48.0; i <= 48.0; i += 1.0) {
    if (abs(i) > r) continue;
    float w = exp(-0.5 * i * i / (uSigma * uSigma));
    acc += texture(uTex, vUv + uStep * i) * w;
    wsum += w;
  }
  outColor = acc / wsum;
}`,Li=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uTex;
uniform float uLod;
out vec4 outColor;
void main() { outColor = textureLod(uTex, vUv, uLod); }`,zi=`#version 300 es
precision highp float;
uniform vec2 uSize;
uniform vec2 uPx;
uniform float uF[19];
uniform sampler2D uC0;
uniform sampler2D uC1;
uniform sampler2D uC2;
uniform sampler2D uR0;
uniform sampler2D uR1;
uniform sampler2D uR2;
uniform int uContent;
uniform int uRevealed;
uniform int uLens;
uniform int uLive;
uniform int uSame;
uniform int uRound;
uniform float uFloor;
uniform float uAmplitude;
uniform float uLensWidth;
uniform float uAberration;
uniform float uBlur;
uniform float uBlurAhead;
uniform float uBlurBehind;
uniform float uNear;
uniform vec3 uPal[9];
uniform int uPalCount;
uniform vec3 uAhead;
uniform vec3 uBehind;
uniform float uLead;
uniform float uTail;
uniform float uStrength;
uniform float uRimWidth;
uniform float uRimSoftness;
uniform float uCorner;
uniform float uUneven;
uniform float uPulse;
uniform float uHairW;
uniform float uHairO;
uniform float uHairWhite;
uniform vec3 uLumps[${tt}];
out vec4 outColor;

const float coverZone = ${Pe.toFixed(1)};
const float PI = 3.14159265;

struct Field { float d; vec2 n; vec2 q; vec2 raw; float g; };

float heldAt(vec2 p) {
  if (uF[16] <= 0.0) return 1.0;
  return smoothstep(uF[16] * 0.9, uF[16] * 1.8, length(p - vec2(uF[0], uF[1])));
}

Field fieldAt(vec2 p) {
  vec2 raw = p - vec2(uF[0], uF[1]);
  float cs = cos(uF[14]), sn = sin(uF[14]);
  vec2 q = vec2(cs * raw.x + sn * raw.y, -sn * raw.x + cs * raw.y);
  float spine = uF[2], radius = uF[3], squash = uF[4], time = uF[5], swell = uF[7];
  float mx = q.x * squash;
  vec2 v = vec2(max(abs(mx) - spine, 0.0), q.y);
  float l = max(length(v), 1e-3);
  vec2 grad = vec2(v.x * sign(q.x) * squash, v.y) / l;
  float g = max(length(grad), 1e-3);
  float bend;
  if (uF[15] > 0.5) {
    float a = atan(q.y, q.x);
    bend = 0.62 * sin(2.0 * a + time * 1.1) + 0.38 * sin(3.0 * a - time * 1.5 + 1.7);
  } else {
    float s = mx * 0.0058;
    bend = 0.62 * sin(s + time * 1.1) + 0.38 * sin(s * 2.1 - time * 1.5 + 1.7);
  }
  vec2 n = grad / g;
  Field o;
  o.d = (l - radius) / g + swell * bend;
  o.n = vec2(cs * n.x - sn * n.y, sn * n.x + cs * n.y);
  o.q = q;
  o.raw = raw;
  o.g = g;
  return o;
}

/* The progressive blur, as the stacked blurred copies: near over sharp, far
   over that, each taking over where the last ends.

   Every read names its level. These calls sit inside branches that differ
   from one pixel to the next, where the derivatives a plain texture() picks
   its mip level from are undefined: along each branch's boundary it would
   read a far smaller level, and draw the boundary as a thin dotted line. */
vec3 side(sampler2D a, sampler2D b, sampler2D c, vec2 s, float tn, float tf) {
  vec2 uv = clamp(s, vec2(0.5), uSize - 0.5) / uSize;
  vec3 col = textureLod(a, uv, 0.0).rgb;
  if (tn > 0.0) col = mix(col, textureLod(b, uv, 0.0).rgb, tn);
  if (tf > 0.0) col = mix(col, textureLod(c, uv, 0.0).rgb, tf);
  return col;
}

const vec3 spectrum[5] = vec3[5](
  vec3(0.571, 0.0, 0.0), vec3(0.343, 0.206, 0.0), vec3(0.086, 0.588, 0.086), vec3(0.0, 0.206, 0.343), vec3(0.0, 0.0, 0.571)
);

vec3 lensed(int which, vec2 s, vec2 split, float tn, float tf) {
  if (dot(split, split) < 0.0625) {
    return which == 0 ? side(uC0, uC1, uC2, s, tn, tf) : side(uR0, uR1, uR2, s, tn, tf);
  }
  vec3 o = vec3(0.0);
  for (int i = 0; i < 5; i++) {
    float along = float(i) / 4.0 * 2.0 - 1.0;
    vec3 c = which == 0 ? side(uC0, uC1, uC2, s + split * along, tn, tf) : side(uR0, uR1, uR2, s + split * along, tn, tf);
    o += c * spectrum[i];
  }
  return o;
}

float continuousRectSDF(vec2 p, vec2 halfSize, float radius) {
  float a = min(radius * 1.528665, min(halfSize.x, halfSize.y));
  vec2 q = abs(p) - (halfSize - a);
  if (q.x <= 0.0 || q.y <= 0.0) return max(abs(p.x) - halfSize.x, abs(p.y) - halfSize.y);
  const float n = 3.26;
  vec2 u = q / a;
  float norm = pow(pow(u.x, n) + pow(u.y, n), 1.0 / n);
  vec2 gg = pow(u / max(norm, 1e-4), vec2(n - 1.0));
  return (norm - 1.0) * a / max(length(gg), 1e-3);
}

/* The area's edge: the continuous corners of an iOS screen, or the circular
   ones CSS draws. */
float edgeSDF(vec2 p, vec2 halfSize, float radius) {
  if (uRound == 0) return continuousRectSDF(p, halfSize, radius);
  float r = min(radius, min(halfSize.x, halfSize.y));
  vec2 q = abs(p) - (halfSize - r);
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

vec2 perimeterAt(vec2 p, vec2 halfSize, float r) {
  float ex = max(halfSize.x - r, 0.0);
  float ey = max(halfSize.y - r, 0.0);
  float arc = 0.5 * PI * r;
  float P = 4.0 * (ex + ey + arc);
  float ax = abs(p.x), ay = abs(p.y);
  if (ax > ex && ay > ey) {
    vec2 v = p - vec2(sign(p.x) * ex, sign(p.y) * ey);
    float a, base;
    if (p.x >= 0.0 && p.y < 0.0) { a = atan(v.x, -v.y); base = ex; }
    else if (p.x >= 0.0) { a = atan(v.y, v.x); base = ex + arc + 2.0 * ey; }
    else if (p.y >= 0.0) { a = atan(-v.x, v.y); base = 3.0 * ex + 2.0 * arc + 2.0 * ey; }
    else { a = atan(-v.y, -v.x); base = 3.0 * ex + 3.0 * arc + 4.0 * ey; }
    return vec2(base + r * clamp(a, 0.0, 0.5 * PI), P);
  }
  bool sideHit = ax > ex ? true : (ay > ey ? false : (halfSize.x - ax) < (halfSize.y - ay));
  if (sideHit) return vec2(p.x >= 0.0 ? ex + arc + (p.y + ey) : 3.0 * ex + 3.0 * arc + 2.0 * ey + (ey - p.y), P);
  return vec2(p.y < 0.0 ? (p.x >= 0.0 ? p.x : P + p.x) : ex + 2.0 * arc + 2.0 * ey + (ex - p.x), P);
}

float rimThickness(float s, float P) {
  float t = 0.08;
  for (int i = 0; i < ${tt}; i++) {
    float ds = s - uLumps[i].x;
    ds -= P * floor(ds / P + 0.5);
    float k = ds / uLumps[i].y;
    t += uLumps[i].z * exp(-k * k);
  }
  return t / 1.0498;
}

float dither(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))) - 0.5; }

vec3 paletteAt(float u) {
  float x = fract(u) * float(uPalCount);
  int i = min(int(x), uPalCount - 1);
  int j = i + 1 == uPalCount ? 0 : i + 1;
  float m = fract(x);
  m = m * m * (3.0 - 2.0 * m);
  return mix(uPal[i], uPal[j], m);
}

vec3 oklabToSRGB(vec3 c) {
  float l = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
  float m = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
  float s = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;
  l = l * l * l; m = m * m * m; s = s * s * s;
  vec3 lin = clamp(vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  ), 0.0, 1.0);
  return mix(12.92 * lin, 1.055 * pow(lin, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), lin));
}

void main() {
  vec2 p = vec2(gl_FragCoord.x, uPx.y - gl_FragCoord.y) * (uSize.x / uPx.x);

  if (uLive == 0) {
    outColor = vec4(uRevealed == 1 ? textureLod(uR0, p / uSize, 0.0).rgb : textureLod(uC0, p / uSize, 0.0).rgb, 1.0);
    return;
  }

  Field w = fieldAt(p);
  float energy = uF[6], gravity = uF[10];
  float held = heldAt(p);

  // \u2500\u2500\u2500 The two screens, through the swell (waveLens) \u2500\u2500\u2500
  vec2 s = p;
  vec2 split = vec2(0.0);
  if (uLens == 1) {
    float u = w.d / (uLensWidth * (w.d > 0.0 ? 0.85 : 1.5));
    float lift = exp(-u * u);
    float r = max(length(w.raw), 1.0);
    vec2 swollen = w.n * energy * uAmplitude * lift * held;
    vec2 inward = w.raw / r;
    s = p - swollen + inward * gravity * exp(-r / 900.0) * held;
    split = (swollen - inward * gravity * exp(-r / 240.0) * held) * uAberration;
  }
  // The progressive blur, read where the pixel is (waveBlurMask).
  float bu = w.d / (w.d > 0.0 ? uBlurAhead : uBlurBehind);
  float radius = energy * uBlur * exp(-bu * bu) * held;
  float tn = clamp(radius / max(uNear, 1e-3), 0.0, 1.0);
  tn = tn * tn * (3.0 - 2.0 * tn);
  float tf = clamp((radius - uNear) / max(uBlur - uNear, 1e-3), 0.0, 1.0);
  tf = tf * tf * (3.0 - 2.0 * tf);

  float cover = 1.0;
  if (uContent == 1 && uF[17] > 0.5) cover = smoothstep(-coverZone, coverZone, w.d);
  if (uContent == 0) cover = 0.0;

  // How much of this pixel the canvas owns. All of it when opaque; over a
  // page, only what the wave changes: where the lens moves, splits or blurs
  // the screen, and where the revealed screen has taken over from the
  // content the page is still showing. Each reaches 1 well before its
  // effect can be seen, so the hand-over to the page has no seam.
  float own = uFloor;
  if (own < 1.0) {
    float moved = max(smoothstep(0.03, 0.4, length(s - p)), smoothstep(0.03, 0.4, length(split)));
    own = max(own, max(moved, smoothstep(0.0, 0.6, radius)));
    if (uSame == 0 && uContent == 1) own = max(own, 1.0 - smoothstep(0.9, 1.0, cover));
  }

  vec3 col = vec3(0.0);
  if (own > 0.0) {
    if (uSame == 1) {
      col = lensed(0, s, split, tn, tf);
    } else {
      bool showRevealed = uRevealed == 1 && w.d <= coverZone + 6.0 && cover < 1.0;
      if (showRevealed) col = lensed(1, s, split, tn, tf);
      if (cover > 0.0) col = mix(col, lensed(0, s, split, tn, tf), cover);
    }
  }

  // \u2500\u2500\u2500 The colour (waveBand) \u2500\u2500\u2500
  float d = w.d, time = uF[5], glow = uF[11], rim = uF[13];
  vec2 c = p - uSize * 0.5;
  float inset = max(-edgeSDF(c, uSize * 0.5, uCorner), 0.0);
  bool nearEdge = rim > 0.0 && inset < max(uRimWidth * 2.2 * (1.0 + 1.9 * uUneven), uHairW * 0.5 + 0.75);
  if (glow <= 0.0 && !nearEdge) {
    outColor = vec4((col + dither(gl_FragCoord.xy) / 255.0) * own, own);
    return;
  }
  bool ring = uF[15] > 0.5;
  float turn = atan(w.q.y, w.q.x);
  float along = w.q.x * 0.0068;
  float lobes = ring
    ? 0.5 + 0.5 * sin(2.0 * turn + time * 1.4) * cos(turn - time * 0.7 + 1.2)
    : 0.5 + 0.5 * sin(along * 1.3 + time * 1.4) * cos(along * 0.6 - time * 0.7 + 1.2);
  float bandA = 0.0;
  if (glow > 0.0 && d < uLead) {
    if (d >= 0.0) {
      float k = 1.0 - d / uLead;
      bandA = k * k * k * (k * (k * 6.0 - 15.0) + 10.0);
    } else {
      bandA = pow(1.0 - clamp(-d / (uTail * mix(0.6, 1.3, lobes)), 0.0, 1.0), 2.3);
    }
    bandA *= glow * uStrength * mix(0.6, 1.0, exp(-inset / 140.0)) * held;
  }
  float aroundA = atan(c.y / uSize.y, c.x / uSize.x);
  float rimA = 0.0;
  float hairA = 0.0;
  float shimmer = 0.5;
  if (nearEdge) {
    vec2 edge = perimeterAt(c, uSize * 0.5, uCorner);
    float thickness = 1.0;
    if (uUneven > 0.0) thickness = max(1.0 + (rimThickness(edge.x, edge.y) - 1.0) * uUneven, 0.04);
    float hk = inset / (uRimWidth * thickness);
    float hug = exp(-hk * hk);
    float reached = 1.0 - smoothstep(-uLead * 0.7, uLead * 0.5, d);
    float kept = smoothstep(-uRimSoftness, uRimSoftness, d + (uF[3] - uF[12]) / w.g);
    shimmer = 0.5 + 0.5 * sin(time * 3.4 - edge.x / edge.y * 4.0 * PI);
    rimA = hug * reached * kept * rim * mix(1.0, 0.7 + 0.3 * shimmer, uPulse);
    if (uHairW > 0.0) {
      float line = 1.0 - smoothstep(uHairW * 0.5, uHairW * 0.5 + 0.75, inset);
      float hairKept = smoothstep(-uRimSoftness, uRimSoftness, d + (uF[3] - uF[18]) / w.g);
      hairA = line * reached * hairKept * rim * uHairO
        * mix(0.5, 1.0, smoothstep(0.1, 1.5, thickness))
        * mix(1.0, 0.55 + 0.45 * shimmer, uPulse);
    }
  }
  float a = 1.0 - (1.0 - bandA) * (1.0 - rimA);
  float total = 1.0 - (1.0 - a) * (1.0 - hairA);
  if (total <= 0.0005) {
    outColor = vec4((col + dither(gl_FragCoord.xy) / 255.0) * own, own);
    return;
  }
  float flow = 0.62 + (ring ? turn / (2.0 * PI) : along * 0.2) + time * 0.13 + d * 0.0015 + (ring ? 0.0 : 0.05 * sin(w.q.y * 0.009 + time));
  vec3 lab = paletteAt(flow);
  lab = mix(lab, uAhead, 0.5 * exp(-pow((d - 30.0) / 50.0, 2.0)));
  lab = mix(lab, uBehind, 0.5 * exp(-pow((d + 84.0) / 72.0, 2.0)));
  lab.yz *= 1.22;
  lab = mix(lab, vec3(0.99, 0.0, 0.0), 0.7 * exp(-pow((d + 8.0) / 26.0, 2.0)));
  vec3 rimLab = paletteAt(aroundA / (2.0 * PI) + time * (0.12 + 0.25 * uPulse) + inset * 0.0012);
  rimLab.yz *= 1.1;
  lab = mix(lab, rimLab, rimA / (rimA + bandA + 1e-4));
  vec3 rgb = oklabToSRGB(lab);
  if (hairA > 0.0) {
    vec3 hair = mix(oklabToSRGB(rimLab), vec3(1.0), uHairWhite * (0.5 + 0.5 * shimmer));
    rgb = (rgb * a * (1.0 - hairA) + hair * hairA) / total;
  }
  float noise = dither(gl_FragCoord.xy) * 2.0 / 255.0;
  // The colour over the screens, as the band view over the transition \u2014
  // premultiplied, so it lies as well over the page where the canvas is clear.
  float over = clamp(total + noise, 0.0, 1.0);
  outColor = vec4(col * own * (1.0 - over) + clamp(rgb + noise, 0.0, 1.0) * over, 1.0 - (1.0 - own) * (1.0 - over));
}`,Di=`#version 300 es
in vec3 aDot;
uniform vec2 uSize;
uniform float uPoint;
out float vA;
void main() {
  vec2 clip = vec2(aDot.x / uSize.x * 2.0 - 1.0, 1.0 - aDot.y / uSize.y * 2.0);
  gl_Position = vec4(clip, 0.0, 1.0);
  gl_PointSize = uPoint;
  vA = aDot.z;
}`,Bi=`#version 300 es
precision highp float;
in float vA;
uniform float uScale;
uniform float uPoint;
out vec4 outColor;
void main() {
  float a = fract(vA);
  float size = floor(vA) / 10.0;
  float r = length(gl_PointCoord - 0.5) * uPoint;
  float edge = size * uScale * 0.5;
  float cov = clamp(edge - r + 0.5, 0.0, 1.0);
  outColor = vec4(vec3(1.0) * a * cov, a * cov);
}`;function ve(e,t,i){let r=e.createShader(t);if(e.shaderSource(r,i),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw new Error(`${t===e.VERTEX_SHADER?"vertex":"fragment"} shader: ${e.isContextLost()?"context lost":e.getShaderInfoLog(r)}`);return r}function gt(e,t,i){let r=e.createProgram();if(e.attachShader(r,ve(e,e.VERTEX_SHADER,t)),e.attachShader(r,ve(e,e.FRAGMENT_SHADER,i)),e.bindAttribLocation(r,0,"aPos"),e.bindAttribLocation(r,0,"aDot"),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw new Error(e.getProgramInfoLog(r)||"link");let n=new Map;return{p:r,loc:s=>(n.has(s)||n.set(s,e.getUniformLocation(r,s)),n.get(s))}}var Ui=["uC0","uC1","uC2","uR0","uR1","uR2"],X=7;function ye(e){let t=e;return{w:t.naturalWidth||t.videoWidth||t.displayWidth||t.width||1,h:t.naturalHeight||t.videoHeight||t.displayHeight||t.height||1}}var bt=class{constructor(t,i={}){this.canvas=t,this.screens={content:null,revealed:null},this.blank=null,this.sizePt={w:1,h:1},this.farBlur=-1,this.field=new Float32Array(19),this.dotsSize=0,this.pal=new Float32Array(27),this.palKey=null,this.ahead=new Float32Array(3),this.behind=new Float32Array(3),this.scratches=new Map,this.alpha=!!i.alpha;let r=t.getContext("webgl2",{antialias:!1,premultipliedAlpha:!0,alpha:this.alpha,depth:!1,stencil:!1,preserveDrawingBuffer:!1});if(this.ok=!!r,this.gl=r,!r){this.quad=this.dots=null,this.main=this.blur=this.copy=this.dot=null;return}this.main=gt(r,Pt,zi),this.blur=gt(r,Pt,$i),this.copy=gt(r,Pt,Li),this.dot=gt(r,Di,Bi),this.quad=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.quad),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),r.STATIC_DRAW),this.dots=r.createBuffer()}get lost(){return!this.ok||this.gl.isContextLost()}get maxTextureSize(){return this.ok?this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE):0}has(t){return!!this.screens[t]}texture(t,i,r,n=!1){let s=this.gl,a=s.createTexture();return s.bindTexture(s.TEXTURE_2D,a),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r?s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,r):s.texImage2D(s.TEXTURE_2D,0,s.RGBA,t,i,0,s.RGBA,s.UNSIGNED_BYTE,null),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,n?s.LINEAR_MIPMAP_LINEAR:s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),n&&s.generateMipmap(s.TEXTURE_2D),a}target(t,i){let r=this.gl,n=this.texture(t,i),s=r.createFramebuffer();return r.bindFramebuffer(r.FRAMEBUFFER,s),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,n,0),{tex:n,fb:s,w:t,h:i}}drop(t){t&&(this.gl.deleteTexture(t.tex),this.gl.deleteFramebuffer(t.fb))}quadDraw(t){let i=this.gl;i.useProgram(t.p),i.bindBuffer(i.ARRAY_BUFFER,this.quad),i.enableVertexAttribArray(0),i.vertexAttribPointer(0,2,i.FLOAT,!1,0,0),i.drawArrays(i.TRIANGLE_STRIP,0,4)}blurred(t,i,r,n,s){let a=this.gl,l=i/this.sizePt.w,o=n*l,h=Math.max(1,Math.round(o/5)),c=Math.max(1,Math.round(i/h)),u=Math.max(1,Math.round(r/h)),d=s;(!d||d.w!==c||d.h!==u)&&(this.drop(d),d=this.target(c,u));let v=this.scratch(c,u);a.viewport(0,0,c,u),a.bindFramebuffer(a.FRAMEBUFFER,d.fb),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,t),a.useProgram(this.copy.p),a.uniform1i(this.copy.loc("uTex"),0),a.uniform1f(this.copy.loc("uLod"),Math.log2(h)),this.quadDraw(this.copy);let w=o/h;return a.useProgram(this.blur.p),a.uniform1i(this.blur.loc("uTex"),0),a.uniform1f(this.blur.loc("uSigma"),Math.max(w,.01)),a.bindFramebuffer(a.FRAMEBUFFER,v.fb),a.bindTexture(a.TEXTURE_2D,d.tex),a.uniform2f(this.blur.loc("uStep"),1/c,0),this.quadDraw(this.blur),a.bindFramebuffer(a.FRAMEBUFFER,d.fb),a.bindTexture(a.TEXTURE_2D,v.tex),a.uniform2f(this.blur.loc("uStep"),0,1/u),this.quadDraw(this.blur),a.bindFramebuffer(a.FRAMEBUFFER,null),d}scratch(t,i){let r=`${t}x${i}`,n=this.scratches.get(r);return n||(n=this.target(t,i),this.scratches.set(r,n)),n}setScreen(t,i,r,n,s="content"){if(!this.ok)return;let a=this.gl,{w:l,h:o}=ye(t);this.sizePt.w=i,this.sizePt.h=r;let h=this.screens[s];h&&(h.w!==l||h.h!==o)&&(this.dropScreen(h),h=null),h?(a.bindTexture(a.TEXTURE_2D,h.sharp),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,t),a.generateMipmap(a.TEXTURE_2D)):h={sharp:this.texture(l,o,t,!0),near:null,far:null,w:l,h:o},h.near=this.blurred(h.sharp,h.w,h.h,X,h.near),h.far=this.blurred(h.sharp,h.w,h.h,Math.max(n,X),h.far),this.screens[s]=h,this.farBlur=n}setSize(t,i){this.sizePt.w=Math.max(t,1),this.sizePt.h=Math.max(i,1)}clearScreen(t){this.ok&&(this.dropScreen(this.screens[t]),this.screens[t]=null)}dropScreen(t){t&&(this.gl.deleteTexture(t.sharp),this.drop(t.near),this.drop(t.far))}patchScreen(t,i,r,n){if(!this.ok)return;let s=this.screens[t];if(!s)return;let{w:a,h:l}=ye(i);if(r<0||n<0||r+a>s.w||n+l>s.h)return;let o=this.gl;o.bindTexture(o.TEXTURE_2D,s.sharp),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.texSubImage2D(o.TEXTURE_2D,0,r,n,o.RGBA,o.UNSIGNED_BYTE,i),o.generateMipmap(o.TEXTURE_2D)}reblur(t){if(!this.ok)return;let i=this.screens[t];i&&(i.near=this.blurred(i.sharp,i.w,i.h,X,i.near),i.far=this.blurred(i.sharp,i.w,i.h,Math.max(this.farBlur,X),i.far))}setBlur(t){if(!(!this.ok||t===this.farBlur)){this.farBlur=t;for(let i of[this.screens.content,this.screens.revealed])i&&(i.far=this.blurred(i.sharp,i.w,i.h,Math.max(t,X),i.far))}}clear(){if(!this.ok)return;let t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,this.canvas.width,this.canvas.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT)}blankTexture(){if(!this.blank){let t=this.gl;this.blank=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.blank),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array(4)),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST)}return this.blank}render(t,i,r,n,s={}){if(!this.ok)return;let a=this.screens.content;if(!a&&!this.alpha)return;if(!t&&this.alpha){this.clear();return}let l=s.same?a:this.screens.revealed??a,o=this.gl,h=this.canvas.width,c=this.canvas.height;o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,h,c),o.disable(o.BLEND);let u=this.main;o.useProgram(u.p);let d=a?null:this.blankTexture();for(let m=0;m<6;m++){let S=m<3?a:l,_=S?m%3===0?S.sharp:m%3===1?S.near.tex:S.far.tex:d;o.activeTexture(o.TEXTURE0+m),o.bindTexture(o.TEXTURE_2D,_),o.uniform1i(u.loc(Ui[m]),m)}o.uniform2f(u.loc("uSize"),this.sizePt.w,this.sizePt.h),o.uniform2f(u.loc("uPx"),h,c);let v=!!t;if(o.uniform1i(u.loc("uLive"),v?1:0),!t){o.uniform1i(u.loc("uRevealed"),0),this.quadDraw(u);return}let w=a?Math.min(Math.max(s.gain??1,0),1):0,f=t.energy*w,b=t.gravity*w,g=this.field;g[0]=t.ox,g[1]=t.oy,g[2]=t.spine,g[3]=t.radius,g[4]=t.squash,g[5]=t.time,g[6]=f,g[7]=t.swell,g[8]=t.width,g[9]=t.height,g[10]=b,g[11]=t.glow,g[12]=t.clearRadius,g[13]=t.rim,g[14]=t.tilt,g[15]=t.ring?1:0,g[16]=t.hold,g[17]=t.launched?1:0,g[18]=t.hairClearRadius,o.uniform1fv(u.loc("uF"),g);let R=f>0;o.uniform1i(u.loc("uContent"),t.hasCleared?0:1),o.uniform1i(u.loc("uRevealed"),t.launched?1:0),o.uniform1i(u.loc("uLens"),R||b>0?1:0),o.uniform1i(u.loc("uSame"),s.same||l===a?1:0),o.uniform1i(u.loc("uRound"),s.round?1:0),o.uniform1f(u.loc("uFloor"),Math.min(Math.max(s.floor??(this.alpha?0:1),0),1)),o.uniform1f(u.loc("uAmplitude"),i.amplitude),o.uniform1f(u.loc("uLensWidth"),i.lensWidth),o.uniform1f(u.loc("uAberration"),i.aberration),o.uniform1f(u.loc("uBlur"),R?Math.max(i.blur,X):0),o.uniform1f(u.loc("uBlurAhead"),i.blurAhead),o.uniform1f(u.loc("uBlurBehind"),i.blurBehind),o.uniform1f(u.loc("uNear"),X);let y=Math.min(i.palette.colors.length,9);if(this.palKey!==i.palette){this.palKey=i.palette;for(let m=0;m<y;m++)this.pal.set(_t(i.palette.colors[m]),m*3);this.ahead.set(_t(i.palette.ahead)),this.behind.set(_t(i.palette.behind))}if(o.uniform3fv(u.loc("uPal"),this.pal),o.uniform1i(u.loc("uPalCount"),Math.max(y,1)),o.uniform3fv(u.loc("uAhead"),this.ahead),o.uniform3fv(u.loc("uBehind"),this.behind),o.uniform1f(u.loc("uLead"),i.lead),o.uniform1f(u.loc("uTail"),i.tail),o.uniform1f(u.loc("uStrength"),i.strength),o.uniform1f(u.loc("uRimWidth"),i.rimWidth),o.uniform1f(u.loc("uRimSoftness"),i.rimSoftness),o.uniform1f(u.loc("uCorner"),i.cornerRadius),o.uniform1f(u.loc("uUneven"),i.rimUnevenness),o.uniform1f(u.loc("uPulse"),i.rimPulse),o.uniform1f(u.loc("uHairW"),i.hairlineWidth),o.uniform1f(u.loc("uHairO"),i.hairlineOpacity),o.uniform1f(u.loc("uHairWhite"),i.hairlineWhite),o.uniform3fv(u.loc("uLumps"),r),this.quadDraw(u),n&&n.count>0){let m=this.dot;o.enable(o.BLEND),o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),o.useProgram(m.p),o.uniform2f(m.loc("uSize"),this.sizePt.w,this.sizePt.h);let S=h/this.sizePt.w;o.uniform1f(m.loc("uScale"),S),o.uniform1f(m.loc("uPoint"),Math.ceil((i.particleSize+1)*S)+2),o.bindBuffer(o.ARRAY_BUFFER,this.dots),this.dotsSize<n.data.length&&(o.bufferData(o.ARRAY_BUFFER,n.data.byteLength,o.DYNAMIC_DRAW),this.dotsSize=n.data.length),o.bufferSubData(o.ARRAY_BUFFER,0,n.data,0,n.count*3),o.enableVertexAttribArray(0),o.vertexAttribPointer(0,3,o.FLOAT,!1,0,0),o.drawArrays(o.POINTS,0,n.count),o.disable(o.BLEND)}}prime(t,i,r,n,s={}){if(!this.ok)return;let a=this.gl;a.enable(a.SCISSOR_TEST),a.scissor(0,0,1,1),this.render(t,i,r,n,s),a.disable(a.SCISSOR_TEST),this.clear()}dispose(){if(!this.ok)return;let t=this.gl;this.dropScreen(this.screens.content),this.dropScreen(this.screens.revealed),this.screens={content:null,revealed:null},this.blank&&t.deleteTexture(this.blank),this.blank=null;for(let i of this.scratches.values())this.drop(i);this.scratches.clear();for(let i of[this.main,this.blur,this.copy,this.dot])t.deleteProgram(i.p);t.deleteBuffer(this.quad),t.deleteBuffer(this.dots)}},at="http://www.w3.org/1999/xhtml",et="http://www.w3.org/2000/svg",Ii=new RegExp("^(?:"+["animation","transition","view-timeline","scroll-timeline","timeline-scope","view-transition","scroll-behavior","scroll-snap","scroll-margin","scroll-padding","scroll-marker","scroll-target","overscroll-behavior","anchor-","position-anchor","position-area","position-try","position-visibility","cursor$","pointer-events$","user-select$","-webkit-user-","-moz-user-","touch-action$","will-change$","resize$","caret-","interactivity$","app-region$","-webkit-app-region$","-webkit-tap-highlight","orphans$","widows$","page","break-","speak","interpolate-size$","field-sizing$","reading-flow$","reading-order$","-moz-window","-moz-force-broken","-moz-context-properties$","-moz-orient$","-webkit-line-grid","-webkit-nbsp-mode","-webkit-cursor","-webkit-touch-callout"].join("|")+")"),Oi=/(?:^|-)(?:block|inline)(?:-|$)|^border-(?:start|end)-(?:start|end)-radius$/,Wi=new Set("border-collapse border-spacing caption-side color color-scheme direction empty-cells font-family font-feature-settings font-kerning font-language-override font-optical-sizing font-palette font-size font-size-adjust font-stretch font-width font-style font-synthesis-weight font-synthesis-style font-synthesis-small-caps font-synthesis-position font-variant-alternates font-variant-caps font-variant-east-asian font-variant-emoji font-variant-ligatures font-variant-numeric font-variant-position font-variation-settings font-weight forced-color-adjust hanging-punctuation hyphenate-character hyphenate-limit-chars hyphens image-orientation image-rendering letter-spacing line-break line-height line-height-step list-style-image list-style-position list-style-type math-depth math-shift math-style overflow-wrap paint-order print-color-adjust quotes ruby-align ruby-position tab-size text-align text-align-last text-anchor text-autospace text-combine-upright text-decoration-skip-ink text-emphasis-color text-emphasis-position text-emphasis-style text-indent text-justify text-orientation text-rendering text-shadow text-size-adjust text-spacing-trim text-transform text-underline-offset text-underline-position text-wrap-mode text-wrap-style text-wrap white-space-collapse white-space visibility word-break word-spacing writing-mode fill fill-opacity fill-rule stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width clip-rule color-interpolation color-interpolation-filters color-rendering shape-rendering marker-start marker-mid marker-end -webkit-font-smoothing -moz-osx-font-smoothing -webkit-text-fill-color -webkit-text-stroke-color -webkit-text-stroke-width -webkit-text-security -webkit-locale -webkit-rtl-ordering -webkit-text-orientation -webkit-writing-mode -webkit-line-break -webkit-border-horizontal-spacing -webkit-border-vertical-spacing -webkit-print-color-adjust -webkit-text-decorations-in-effect -webkit-text-size-adjust -webkit-hyphenate-character -webkit-text-emphasis-color -webkit-text-emphasis-position -webkit-text-emphasis-style -webkit-text-combine -webkit-ruby-position -webkit-text-zoom -webkit-box-direction -webkit-user-modify -moz-text-size-adjust -moz-tab-size -moz-box-direction -webkit-hyphens -webkit-text-underline-position -webkit-font-kerning -webkit-font-feature-settings".split(" ")),Ni=new Set(["border-top-color","border-right-color","border-bottom-color","border-left-color","outline-color","text-decoration-color","column-rule-color","-webkit-text-decoration-color"]),qi=new Set(["script","style","noscript","template","link","meta","title","head","base","source","track","param","datalist"]),ji=new Set(["area","br","col","embed","hr","img","input","wbr"]),Gi=/^[A-Za-z_][\w.-]*$/,Hi=/^(?:(?:xlink|xml):)?[A-Za-z_][\w.-]*$/,we={"*":["dir","lang"],input:["type","placeholder","disabled","min","max","step","size","multiple","readonly"],textarea:["placeholder","rows","cols","disabled","readonly"],select:["multiple","size","disabled"],button:["disabled","type"],option:["disabled","label"],optgroup:["disabled","label"],progress:["value","max"],meter:["value","min","max","low","high","optimum"],td:["colspan","rowspan"],th:["colspan","rowspan"],col:["span"],colgroup:["span"],ol:["start","reversed","type"],li:["value"],details:["open"],dialog:["open"]},j=null,G=[],H=[],Nt=[],qt=0,yt=0,$e=-1,Le=-1,ze=-1,ot=-1,Bt=[],De=[],jt={inh:[],non:[]},Ut=new Map;function Xi(){if(j&&j.frame.isConnected&&j.frame.contentDocument===j.doc&&j.hidden.isConnected)return!0;if(typeof document>"u")return!1;j?.frame.remove(),j=null,Ut.clear();let e=document.createElement("iframe");e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex","-1"),e.setAttribute("data-dw-skip",""),e.style.cssText="position:fixed;left:0;top:0;width:0;height:0;border:0;margin:0;padding:0;visibility:hidden;pointer-events:none;",(document.body??document.documentElement).appendChild(e);let t=e.contentDocument,i=e.contentWindow;if(!t||!i)return e.remove(),!1;t.open(),t.write(`<!doctype html><html><head></head><body><div id="h" style="display:none"><svg xmlns="${et}"></svg></div></body></html>`),t.close();let r=t.getElementById("h");if(!r)return e.remove(),!1;if(j={frame:e,win:i,doc:t,hidden:r,svg:r.firstElementChild},!G.length){let n=t.createElement("div");r.appendChild(n);let s=i.getComputedStyle(n),a=[],l=[];for(let u=0;u<s.length;u++){let d=s[u];d.startsWith("--")||Ii.test(d)||Oi.test(d)||(Wi.has(d)?a:l).push(d)}n.remove(),G=a,H=l,Nt=l.map(u=>Ni.has(u)),qt=a.indexOf("color"),yt=a.indexOf("font-family"),$e=l.indexOf("transform"),Le=l.indexOf("transform-origin"),ze=l.indexOf("perspective-origin"),ot=l.indexOf("appearance"),ot<0&&(ot=l.indexOf("-webkit-appearance"));let o=/^border-(?:top|right|bottom|left)-(?:width|style|color)$/,h=/^background-(?:color|image)$/,c=/^padding-(?:top|right|bottom|left)$/;De=l.map(u=>o.test(u)||h.test(u)||c.test(u)),Bt=l.map((u,d)=>o.test(u)||h.test(u)?d:-1).filter(u=>u>=0)}return jt=Be("div",at,""),!0}function Be(e,t,i){let r=t===et,n=r?"svg:"+e:i?e+":"+i:e,s=Ut.get(n);if(s)return s;let a=j,l;try{l=r?a.doc.createElementNS(et,e):a.doc.createElement(e)}catch{l=a.doc.createElement("span")}i&&l.setAttribute("type",i),(r&&e!=="svg"?a.svg:a.hidden).appendChild(l);let o=a.win.getComputedStyle(l),h={inh:G.map(c=>o.getPropertyValue(c)),non:H.map(c=>o.getPropertyValue(c))};return l.remove(),Ut.set(n,h),h}var Y=new Map,$t=new Map,Vi=400;function Yi(e,t){if(Y.size>=Vi){let i=Y.keys().next().value;i!==void 0&&Y.delete(i)}Y.set(e,t)}function Ue(e){return new Promise(t=>{let i=new FileReader;i.onload=()=>t(typeof i.result=="string"?i.result:null),i.onerror=()=>t(null),i.readAsDataURL(e)})}async function Ki(e){try{let t=new AbortController,i=setTimeout(()=>t.abort(),4e3),r=await fetch(e,{signal:t.signal});return clearTimeout(i),r.ok?await r.text():null}catch{return null}}async function it(e){try{let t=new AbortController,i=setTimeout(()=>t.abort(),4e3),r=await fetch(e,{signal:t.signal});return clearTimeout(i),r.ok?await Ue(await r.blob()):null}catch{return null}}async function Zi(e,t,i,r){try{let n=document.createElement("canvas");n.width=i,n.height=r;let s=n.getContext("2d");if(!s)return it(t);s.imageSmoothingQuality="high",s.drawImage(e,0,0,i,r);let a=await new Promise(l=>n.toBlob(l,"image/webp",.96));if(a)return await Ue(a)}catch{}return it(t)}function Ie(e,t){let i=$t.get(e);return i||(i=t().catch(()=>null).then(r=>{Yi(e,r),$t.delete(e)}),$t.set(e,i)),i}var be=[],It="",xe=new Map,Oe=e=>e.trim().replace(/^(["'])(.*)\1$/,"$2"),Gt=e=>Oe(e).toLowerCase(),Qi=e=>e.trim().toLowerCase().replace(/\bnormal\b/g,"400").replace(/\bbold\b/g,"700")||"400",Ji=e=>e.toLowerCase().split(",").map(t=>t.trim().replace(/^u\+/,"").split("-").map(i=>i.replace(/^0+(?=.)/,"")).join("-")).filter(Boolean).join(",")||"0-10ffff",We=(e,t,i,r)=>`${Gt(e)}|${t.trim().toLowerCase()||"normal"}|${Qi(i)}|${Ji(r)}`;function tr(e){let t={},i=0,r="",n=0,s=a=>{let l=e.slice(n,a),o=l.indexOf(":");o>0&&(t[l.slice(0,o).trim().toLowerCase()]=l.slice(o+1).trim())};for(let a=0;a<e.length;a++){let l=e[a];r?l==="\\"?a++:l===r&&(r=""):l==='"'||l==="'"?r=l:l==="("?i++:l===")"?i=Math.max(0,i-1):l===";"&&i===0&&(s(a),n=a+1)}return s(e.length),t}var er=["font-style","font-weight","font-stretch","font-width","unicode-range","font-feature-settings","font-variation-settings","ascent-override","descent-override","line-gap-override","size-adjust"];function Re(e,t,i){let r=/@font-face\s*\{([^}]*)\}/gi,n;for(;n=r.exec(e);){let s=tr(n[1]),a=s["font-family"],l=s.src;if(!a||!l)continue;let o=`font-family:"${Oe(a).replace(/["\\]/g,"\\$&")}";`;for(let h of er)s[h]&&(o+=`${h}:${s[h]};`);i.push({family:Gt(a),key:We(a,s["font-style"]??"",s["font-weight"]??"",s["unicode-range"]??""),descriptors:o,src:l,base:t})}}async function ir(){let e=Array.from(document.styleSheets),t=e.length+"|"+e.map(s=>{var a,l;return s.href??((l=(a=s.ownerNode)==null?void 0:a.textContent)==null?void 0:l.length)??0}).join(",");if(t===It)return be;let i=[],r=[],n=(s,a)=>{let l=s.href??document.baseURI,o;try{o=s.cssRules}catch{if(s.href){let c=s.href,u=xe.get(c);u||xe.set(c,u=Ki(c)),r.push(u.then(d=>{d&&Re(d,c,i)}))}return}let h=c=>{for(let u=0;u<c.length;u++){let d=c[u];if(d.constructor.name==="CSSFontFaceRule"||d.cssText.startsWith("@font-face"))Re(d.cssText,l,i);else if(d.styleSheet&&a<4)n(d.styleSheet,a+1);else if(d.cssRules&&!d.cssText.startsWith("@keyframes"))try{h(d.cssRules)}catch{}}};h(o)};for(let s of e)n(s,0);if(document.adoptedStyleSheets)for(let s of document.adoptedStyleSheets)n(s,0);return await Promise.all(r),be=i,It=t,i}function rr(e,t){let i=/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*?))\s*\)(?:\s*format\(\s*["']?([\w-]+)["']?\s*\))?/g,r=null,n;for(;n=i.exec(e);){let s=n[1]??n[2]??n[3]??"",a=s;if(!s.startsWith("data:"))try{a=new URL(s,t).href}catch{continue}let l=(n[4]??"").toLowerCase();if(l==="woff2"||/\.woff2(?:[?#]|$)/i.test(a))return{url:a,format:"woff2"};r??(r={url:a,format:l})}return r}async function nr(e){if(!e.size||!document.fonts)return"";let t=await ir();if(!t.length)return"";let i=new Set;document.fonts.forEach(l=>{l.status==="loaded"&&i.add(We(l.family,l.style,l.weight,l.unicodeRange))});let r=t.filter(l=>e.has(l.family)&&(i.has(l.key)||!/url\(/i.test(l.src))),n=[],s=r.map(l=>{if(!/url\(/i.test(l.src))return{f:l,source:null};let o=rr(l.src,l.base);return o&&!o.url.startsWith("data:")&&Y.get("u:"+o.url)===void 0&&n.push(Ie("u:"+o.url,()=>it(o.url))),{f:l,source:o}});n.length&&await Promise.all(n);let a="";for(let{f:l,source:o}of s){if(!o){a+=`@font-face{${l.descriptors}src:${l.src};}`;continue}let h=o.url.startsWith("data:")?o.url:Y.get("u:"+o.url);h&&(a+=`@font-face{${l.descriptors}src:url("${h}")${o.format?` format("${o.format}")`:""};}`)}return a}var Ne=/[\u0000-\u0008\u000B\u000C\u000E-\u001F\uFFFE\uFFFF]/g,Ot=e=>/[&<>\u0000-\u0008\u000B\u000C\u000E-\u001F\uFFFE\uFFFF]/.test(e)?e.replace(Ne,"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):e,V=e=>/[&<"\u0000-\u0008\u000B\u000C\u000E-\u001F\uFFFE\uFFFF]/.test(e)?e.replace(Ne,"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"):e;function xt(e,t,i){let r=Y.get(t);return r!==void 0?r:(e.missing.has(t)||e.missing.set(t,i),null)}var sr=/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*?))\s*\)/g;function qe(e,t){return e.replace(sr,(i,r,n,s)=>{let a=r??n??s??"";if(!a||a.startsWith("data:")||a.startsWith("#"))return i;let l;try{l=new URL(a,document.baseURI).href}catch{return i}let o=l.indexOf("#");if(o>=0&&l.slice(0,o)===location.href.split("#")[0])return`url("${l.slice(o)}")`;let h=xt(t,"u:"+l,()=>it(l));return h?`url("${h}")`:"none"})}function or(e,t){for(let i of e.split(","))t.families.add(Gt(i))}function ar(e,t){let i=e.currentSrc||e.src;if(!i)return null;if(i.startsWith("data:"))return i;if(!e.complete||!e.naturalWidth)return null;let r=e.naturalWidth,n=e.naturalHeight,s=Math.max(e.clientWidth,1)*t.o.scale,a=Math.max(e.clientHeight,1)*t.o.scale,l=Math.min(1,Math.max(s/r,a/n));if(l>.62||r*n<4e5||/\.svg(?:[?#]|$)/i.test(i))return xt(t,"u:"+i,()=>it(i));let o=Math.max(1,Math.ceil(r*l/16)*16),h=Math.max(1,Math.round(o*n/r));return xt(t,`i:${i}|${o}`,()=>Zi(e,i,o,h))}function lr(e){try{if(e instanceof HTMLCanvasElement)return e.width&&e.height?e.toDataURL():null;if(!e.videoWidth||e.readyState<2)return null;let t=document.createElement("canvas");return t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toDataURL("image/jpeg",.92)}catch{return null}}function hr(e){if(!e)return"";let t="";for(let i in e)t+=`${i}:${e[i]};`;return t}function Ee(e,t,i,r){let n=getComputedStyle(e,t),s=n.getPropertyValue("content");if(!s||s==="none"||s==="normal"||s==="-moz-alt-content"||n.getPropertyValue("display")==="none")return"";let a="",l="";for(let c=0;c<G.length;c++){let u=n.getPropertyValue(G[c]);c===qt&&(l=u),u!==i[c]&&(a+=`${G[c]}:${u};`)}let o=jt.non;for(let c=0;c<H.length;c++){let u=n.getPropertyValue(H[c]);u!==o[c]&&(Nt[c]&&u===l||(u.indexOf("url(")>=0&&(u=qe(u,r)),a+=`${H[c]}:${u};`))}let h="dw"+r.classes++;return r.rules.push(`.${h}${t}{${a}}`),h}function je(e,t,i,r,n){var s,a,l,o;if(e!==n.root&&(a=(s=n.o).skip)!=null&&a.call(s,e))return;let h=e.namespaceURI,c=h===et;if(!c&&h!==at)return;let u=e.localName;if(!c&&qi.has(u)||!Gi.test(u))return;let d=getComputedStyle(e);if(d.getPropertyValue("display")==="none")return;n.nodes++;let v="",w=null,f=!1;if(!c)if(u==="img"){let p=ar(e,n);p&&(v+=` src="${V(p)}"`)}else if(u==="canvas"||u==="video"){let p=lr(e);u="img",p&&(v+=` src="${V(p)}"`)}else if(u==="iframe"||u==="object"||u==="embed"||u==="audio")u="div",f=!0;else if(u==="textarea")w=e.value;else if(u==="input"){let p=e;p.type!=="file"&&(v+=` value="${V(p.value)}"`),p.checked&&(v+=' checked=""')}else u==="option"&&e.selected&&(v+=' selected=""');let b=!c&&(u==="input"||u==="button")?(e.getAttribute("type")??"").toLowerCase():"",g=Be(u,h,b),R=c?g:jt,y=new Array(G.length),m="",S=g.inh,_=R.inh;for(let p=0;p<G.length;p++){let x=d.getPropertyValue(G[p]);y[p]=x,(t===null||S[p]!==_[p]||x!==t[p])&&(m+=`${G[p]}:${x};`)}let L=y[qt];(t===null||y[yt]!==t[yt])&&or(y[yt],n);let C=g.non,M=R.non,D=!r&&d.getPropertyValue("transform")==="none"&&(d.getPropertyValue("translate")||"none")==="none"&&(d.getPropertyValue("rotate")||"none")==="none"&&(d.getPropertyValue("scale")||"none")==="none"&&(d.getPropertyValue("offset-path")||"none")==="none",N=!1;if(!c&&ot>=0&&C[ot]!=="none")for(let p=0;p<Bt.length;p++){let x=Bt[p];if(d.getPropertyValue(H[x])!==C[x]){N=!0;break}}for(let p=0;p<H.length;p++){let x=d.getPropertyValue(H[p]),A=M[p],P=C[p]===A&&!(N&&De[p]);if(p===$e&&r)x=x==="none"?r:`${r} ${x}`;else if(P&&(x===A||Nt[p]&&x===L||p===Le&&D||p===ze&&d.getPropertyValue("perspective")==="none"))continue;x.indexOf("url(")>=0&&(x=qe(x,n)),m+=`${H[p]}:${x};`}m+=hr((o=(l=n.o).force)==null?void 0:o.call(l,e));let T=Ee(e,"::before",y,n),B=Ee(e,"::after",y,n);if(c){let p=e.attributes;for(let x=0;x<p.length;x++){let{name:A,value:P}=p[x];if(A==="style"||A==="class"||A==="xmlns"||A.startsWith("on")||A.startsWith("xmlns:")||!Hi.test(A))continue;let F=P;if((A==="href"||A==="xlink:href")&&F&&!F.startsWith("#")&&!F.startsWith("data:")){let $=F;try{$=new URL(F,document.baseURI).href}catch{continue}let U=xt(n,"u:"+$,()=>it($));if(!U)continue;F=U}v+=` ${A}="${V(F)}"`}}else{for(let x of we["*"]){let A=e.getAttribute(x);A!==null&&(v+=` ${x}="${V(A)}"`)}let p=we[u];if(p)for(let x of p){let A=e.getAttribute(x);A!==null&&(v+=` ${x}="${V(A)}"`)}}let q=T&&B?`${T} ${B}`:T||B,I=`<${u}${h!==i?` xmlns="${h}"`:""}${q?` class="${q}"`:""} style="${V(m)}"${v}`;if(!c&&ji.has(u)){n.out.push(I+"/>");return}if(n.out.push(I+">"),w!==null)n.out.push(Ot(w));else if(!f){let p=e.scrollLeft,x=e.scrollTop,A=p||x?`translate(${-p}px,${-x}px)`:"",P=e.shadowRoot,F=P?P.childNodes:e.childNodes;if(!c&&u==="slot"){let $=e.assignedNodes({flatten:!0});$.length&&(F=$)}for(let $=0;$<F.length;$++){let U=F[$];U.nodeType===1?je(U,y,h,A,n):U.nodeType===3&&n.out.push(Ot(U.data))}}n.out.push(`</${u}>`)}function Se(e,t){let i={o:t,root:e,out:[],rules:[],classes:0,nodes:0,missing:new Map,families:new Set};return je(e,null,at,"",i),i}var ur={"%":"%25","#":"%23","\n":"%0A","\r":"%0D","	":"%09"};function cr(e){return new Promise((t,i)=>{let r=new Image;r.onload=()=>t(r),r.onerror=()=>i(new Error("distortion-waves: the snapshot would not load")),r.src="data:image/svg+xml;charset=utf-8,"+e.replace(/[%#\n\r\t]/g,n=>ur[n])})}function dr(e){return!e||e==="transparent"||/(?:,|\/)\s*0(?:\.0+)?%?\s*\)$/.test(e)}function fr(e){for(let t=e.parentElement;t;t=t.parentElement){let i=getComputedStyle(t).backgroundColor;if(!dr(i))return i}return"#fff"}var pr=typeof navigator<"u"&&/AppleWebKit/.test(navigator.userAgent)&&!/Chrome|Chromium|Edg\//.test(navigator.userAgent),mr=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("zoom","2")&&!(typeof navigator<"u"&&/Firefox\//.test(navigator.userAgent));async function gr(e,t){if(!Xi())throw new Error("distortion-waves: no document to read styles in");let i=performance.now(),r=Se(e,t),n=performance.now()-i;if(r.missing.size){await Promise.all(Array.from(r.missing,([R,y])=>Ie(R,y)));let g=performance.now();r=Se(e,t),n+=performance.now()-g}let s=await nr(r.families),a=performance.now(),l=+t.width.toFixed(3),o=+t.height.toFixed(3),h=Math.max(1,Math.round(t.width*t.scale)),c=Math.max(1,Math.round(t.height*t.scale)),u=s.length>0||r.out.some(g=>g.indexOf("data:")>=0),d=`<style>${Ot(s+r.rules.join(""))}</style>`+r.out.join(""),v=mr&&t.scale!==1?`<svg xmlns="${et}" xmlns:xlink="http://www.w3.org/1999/xlink" width="${h}" height="${c}" viewBox="0 0 ${h} ${c}"><foreignObject x="0" y="0" width="${h}" height="${c}"><div xmlns="${at}" style="position:relative;width:${h}px;height:${c}px;overflow:hidden;"><div style="position:relative;width:${l}px;height:${o}px;overflow:hidden;zoom:${+t.scale.toFixed(4)};">`+d+"</div></div></foreignObject></svg>":`<svg xmlns="${et}" xmlns:xlink="http://www.w3.org/1999/xlink" width="${l}" height="${o}" viewBox="0 0 ${l} ${o}"><foreignObject x="0" y="0" width="${l}" height="${o}"><div xmlns="${at}" style="position:relative;width:${l}px;height:${o}px;overflow:hidden;">`+d+"</div></foreignObject></svg>",w=await cr(v);try{await w.decode()}catch{}pr&&u&&await new Promise(g=>setTimeout(g,60));let f=t.into??document.createElement("canvas");(f.width!==h||f.height!==c)&&(f.width=h,f.height=c);let b=f.getContext("2d",{alpha:!1});if(!b)throw new Error("distortion-waves: no 2D canvas");return b.setTransform(1,0,0,1,0,0),b.fillStyle="#fff",b.fillRect(0,0,h,c),b.fillStyle=t.background,b.fillRect(0,0,h,c),b.drawImage(w,0,0,h,c),{canvas:f,walk:n,raster:performance.now()-a,nodes:r.nodes,size:v.length}}function vr(){It=""}var yr=393*852,wr=Rt(.22,1,.36,1),ke=e=>e,br=.12,xr=150,Rr=300,Er=9e6,Sr=3e4,kr=2e3,Ar="button, a[href], [role=button], input, select, textarea, summary, label, [data-wave-source]",Ae=(e,t,i)=>Math.min(Math.max(e,t),i),vt=e=>parseFloat(e)||0,Te=e=>{let t=window;typeof t.requestIdleCallback=="function"?t.requestIdleCallback(e,{timeout:600}):window.setTimeout(e,1)},Me=new Map;function Tr(e,t){if(!e)return t;if(typeof e!="string")return e;if(e in wt)return wt[e];if(!/^#?[0-9a-f]{6}$/i.test(e))return t;let i=e.replace("#","").toLowerCase(),r=Me.get(i);return r||(r=yi(wi(i)),Me.set(i,r)),r}function Mr(e,t){if(e===t)return!0;if(!e||!t)return!1;let i=Object.keys(e);if(i.length!==Object.keys(t).length)return!1;let r=e,n=t;for(let s of i)if(r[s]!==n[s])return!1;return!0}var Fr=["content"],Cr=["content","revealed"],Lt=()=>({canvas:null,ready:!1,stale:!0,busy:!1,dirty:0,cost:0,last:0,began:0,broken:!1,nodes:0,size:0,walk:0,raster:0,count:0});function zt(e,t,i){e.style.opacity=t>=1?"":String(Math.max(t,0)),e.style.pointerEvents=i?"":"none",e.toggleAttribute("inert",!i),i?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden","true")}var lt=class{constructor(t,i,r=null){this.opts={},this.first=!0,this.destroyed=!1,this.canvas=null,this.renderer=null,this.failed=!1,this.positioned=!1,this.geom=null,this.geomDirty=!0,this.epoch=0,this.style=fe("vertical"),this.styleDirty=!0,this.total=st(this.style),this.particles=[],this.particlesKey="",this.dots={data:new Float32Array(0),count:0},this.front=Dt(),this.probe=Dt(),this.spot={x:0,y:0,a:0},this.frame={floor:0,gain:0,round:!0,same:!0},this.patch=null,this.primed=!1,this.slots={content:Lt(),revealed:Lt()},this.waiting={content:!1,revealed:!1},this.p=0,this.run=null,this.runAt=0,this.raf=0,this.scrubbing=!1,this.fading=!1,this.mode=null,this.lensAt=null,this.lastProp=void 0,this.shown=NaN,this.srcEl=null,this.srcCss={x:0,y:0,w:1,h:1},this.focusCss=null,this.src={x:0,y:0,w:1,h:1},this.focus=null,this.held=!1,this.playOpts=null,this.launchAt=0,this.clearAt=1,this.press=null,this.pointerInside=!1,this.focusInside=!1,this.refreshTimer=0,this.releaseTimer=0,this.abort=new AbortController,this.still=null,this.lastGain=0,this.lastFloor=0,this.lastDraw=0,this.tick=n=>{this.raf=0;let s=this.run;if(!s){this.scrubbing&&this.paint(n);return}s.t0<0&&(s.t0=n);let a=s.dur>0?(n-s.t0)/s.dur:1;if(a>=1){this.finish();return}this.p=s.from+(s.to-s.from)*s.ease(a),this.paint(n),this.raf=requestAnimationFrame(this.tick)},this.root=t,this.a=i,this.b=r,getComputedStyle(t).position==="static"&&(t.style.position="relative",this.positioned=!0),this.still=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):null,this.observer=new MutationObserver(n=>this.onMutations(n)),this.observer.observe(t,{subtree:!0,childList:!0,attributes:!0,characterData:!0}),this.resizer=new ResizeObserver(()=>this.onResize()),this.resizer.observe(t),this.listen()}update(t){if(this.destroyed)return;let i=this.opts;this.opts=t;let r=this.first;this.first=!1,(r||i.type!==t.type||i.palette!==t.palette||!Mr(i.waveStyle,t.waveStyle))&&(this.styleDirty=!0),(r||i.scale!==t.scale||i.resolution!==t.resolution||i.cornerRadius!==t.cornerRadius)&&(this.geomDirty=!0);let n=t.revealed,s=n!==void 0&&n!==this.lastProp;if(n!==void 0&&(this.lastProp=n),t.scrub!=null){this.scrubTo(t.scrub);return}if(this.scrubbing){this.scrubbing=!1,this.go(n??this.p>=.5?1:0);return}if(r){this.p=n?1:0,this.held=!1,this.show(this.p),t.prewarm!==!1&&this.warm();return}if(s){this.go(n?1:0);return}(this.styleDirty||this.geomDirty)&&!this.run&&this.p>0&&this.p<1&&this.invalidate()}setRevealedLayer(t){var i;t!==this.b&&(this.b=t,this.slots.revealed=Lt(),(i=this.renderer)==null||i.clearScreen("revealed"),this.shown=NaN,!this.run&&!this.scrubbing&&this.show(this.p>=1?1:0))}play(t){this.destroyed||(this.halt(),this.scrubbing=!1,this.p=0,this.held=!1,this.show(0),this.playOpts=t??null,this.go(1))}reverse(){this.destroyed||(this.scrubbing=!1,this.go(0))}reset(){var t;this.destroyed||(this.halt(),this.scrubbing=!1,this.p=0,this.held=!1,this.mode=null,(t=this.renderer)==null||t.clear(),this.canvas&&(this.canvas.style.display="none"),this.show(0),this.rest())}async prepare(){this.destroyed||this.opts.capture===!1||this.motionless()||!this.ensureRenderer()||(this.flush(),await Promise.all(this.needed().map(t=>this.fresh(t)?void 0:this.capture(t))))}get debug(){let t=i=>({ready:i.ready,stale:i.stale,busy:i.busy,cost:i.cost,walk:i.walk,raster:i.raster,nodes:i.nodes,size:i.size,count:i.count});return{progress:this.p,running:!!this.run,mode:this.fading?"fade":this.mode,gain:this.lastGain,floor:this.lastFloor,draw:this.lastDraw,clearAt:this.clearAt,duration:this.total,geometry:this.geom,source:this.src,webgl:!!this.renderer&&!this.renderer.lost,content:t(this.slots.content),revealed:t(this.slots.revealed)}}destroy(){this.destroyed||(this.destroyed=!0,this.halt(),clearTimeout(this.refreshTimer),clearTimeout(this.releaseTimer),this.abort.abort(),this.observer.disconnect(),this.resizer.disconnect(),this.dropRenderer(),this.positioned&&(this.root.style.position=""))}measure(){var t,i;this.geomDirty=!1;let r=this.root,n=r.getBoundingClientRect(),s=getComputedStyle(r),a=r.offsetWidth,l=a>0&&n.width>0?n.width/a:1;(!(l>0)||Math.abs(l-1)<.01)&&(l=1);let o=vt(s.borderLeftWidth),h=vt(s.borderTopWidth),c=vt(s.borderRightWidth),u=vt(s.borderBottomWidth),d=n.width/l,v=n.height/l,w=Math.max(d-o-c,1),f=Math.max(v-h-u,1),b=Math.min(d,v)/2,g=(F,$)=>{let U=F.split(" ")[0],k=parseFloat(U)||0;return Math.max(Math.min(U.endsWith("%")?k/100*d:k,b)-$,0)},R=g(s.borderTopLeftRadius,o),y=g(s.borderTopRightRadius,c),m=g(s.borderBottomRightRadius,c),S=g(s.borderBottomLeftRadius,o),_=this.opts.cornerRadius,L=_!=null&&_>=0?_:Math.max(R,y,m,S),C=_!=null&&_>=0&&R+y+m+S===0?`${_}px`:`${R}px ${y}px ${m}px ${S}px`,M=this.opts.scale??"auto",D=typeof M=="number"&&M>0?M:Ae(Math.sqrt(w*f/yr),.6,2.2),N=((t=this.renderer)==null?void 0:t.maxTextureSize)||4096,T=this.opts.resolution&&this.opts.resolution>0?this.opts.resolution:(window.devicePixelRatio||1)*l,B=Math.min(T,Math.sqrt(Er/(w*f)),N/w,N/f),q=Math.max(1,Math.round(w*B)),I=Math.max(1,Math.round(f*B)),p=this.geom,x=!p||p.W!==q||p.H!==I||p.w!==w||p.h!==f||p.bl!==o||p.bt!==h,A=!p||p.k!==D||p.radius!==L;this.geom={w,h:f,bw:d,bh:v,bl:o,bt:h,anc:l,k:D,vw:w/D,vh:f/D,bs:B,W:q,H:I,radius:L,radii:C};let P=this.canvas;if(P&&((P.width!==q||P.height!==I)&&(P.width=q,P.height=I),P.style.borderRadius!==C&&(P.style.borderRadius=C)),x&&(this.epoch++,this.slots.content.stale=!0,this.slots.revealed.stale=!0),(x||A||this.styleDirty)&&(this.restyle(),this.run||this.scrubbing)){if((i=this.srcEl)!=null&&i.isConnected){let F=this.srcEl.getBoundingClientRect();F.width>0&&F.height>0&&(this.srcCss=this.local(F))}this.retime()}}local(t){let i=this.geom,r=this.root.getBoundingClientRect();return{x:(t.left-r.left)/i.anc-i.bl,y:(t.top-r.top)/i.anc-i.bt,w:t.width/i.anc,h:t.height/i.anc}}restyle(){let t=this.geom;if(!t)return;this.styleDirty=!1;let i=this.opts,r=fe(i.type??"vertical"),n=i.waveStyle;if(n){let l=r,o=n;for(let h in o){let c=o[h];h!=="palette"&&h!=="type"&&h!=="cornerRadius"&&typeof c=="number"&&isFinite(c)&&(l[h]=c)}}r.palette=Tr(i.palette??n?.palette,r.palette),r.cornerRadius=t.radius/t.k;let s=Math.sqrt(t.k);r.hairlineWidth/=s,r.particleSize/=s,this.style=r,this.total=st(r);let a=`${Math.round(r.particleCount)}|${r.particleSize}|${r.particleLife}`;a!==this.particlesKey&&(this.particlesKey=a,this.particles=_i(r),this.dots.data.length<this.particles.length*3&&(this.dots={data:new Float32Array(this.particles.length*3),count:0}))}aim(t){var i,r;let n=this.opts,s=((i=this.playOpts)==null?void 0:i.source)??n.source;if(t===0&&this.held&&s==null)return;let a=this.geom,l=performance.now(),o=this.press&&l-this.press.t<kr?this.press:null,h=null,c=null;if(s&&typeof s.getBoundingClientRect=="function"?h=s:s&&"current"in s?h=s.current:s&&(c=s),!h&&!c){if((r=o?.el)!=null&&r.isConnected)h=o.el;else if(!o){let f=document.activeElement;f&&f!==this.root&&this.root.contains(f)&&(h=f)}}if(h){let f=h.getBoundingClientRect();f.width>0&&f.height>0?c=this.local(f):h=null}let u=n.type??"vertical",d=o?this.local({left:o.x,top:o.y,width:0,height:0}):null,v=null,w=this.playOpts&&"focus"in this.playOpts?this.playOpts.focus:n.focus;if(w!==void 0?v=w:d&&(!h||h===o.el)&&(v={x:d.x,y:d.y}),!c){let f=a.k;if(u==="center"){let b=d??{x:a.w/2,y:a.h/2};c={x:b.x-29*f,y:b.y-29*f,w:58*f,h:58*f}}else if(u==="horizontal"){let b=Math.min(a.h*.5,240*f);c={x:-20*f,y:(a.h-b)/2,w:40*f,h:b}}else{let b=Math.min(a.w-48*f,345*f);c={x:(a.w-b)/2,y:a.h-82*f,w:b,h:58*f}}}this.srcEl=h,this.srcCss=c,this.focusCss=v}retime(){let t=this.geom,i=this.style,r=t.k,n=this.srcCss;this.src={x:n.x/r,y:n.y/r,w:n.w/r,h:n.h/r},this.focus=this.focusCss?{x:this.focusCss.x/r,y:this.focusCss.y/r}:null,this.total=st(i),this.launchAt=i.anticipation/this.total;let s=o=>Ft(o,this.src,t.vw,t.vh,i,this.focus,this.probe).hasCleared;if(!s(1)){this.clearAt=1;return}let a=this.launchAt,l=1;for(let o=0;o<22;o++){let h=(a+l)/2;s(h)?l=h:a=h}this.clearAt=l}motionless(){var t;let i=this.opts.reducedMotion??"system";return i==="always"||i==="system"&&!!((t=this.still)!=null&&t.matches)}needed(){return this.b?Cr:Fr}fresh(t){let i=this.slots[t];return i.ready&&!i.stale}halt(){cancelAnimationFrame(this.raf),this.raf=0,this.run=null,this.fading=!1,this.playOpts=this.playOpts&&null}go(t){var i;if(this.destroyed)return;clearTimeout(this.refreshTimer),clearTimeout(this.releaseTimer),this.flush();let r=!this.run&&(this.p<=0||this.p>=1);if(r&&this.p===t){this.playOpts=null;return}if(cancelAnimationFrame(this.raf),this.raf=0,this.motionless()||!this.ensureRenderer()){(i=this.renderer)==null||i.clear(),this.canvas&&(this.canvas.style.display="none"),this.fading=!0,this.mode=null,this.run={from:this.p,to:t,t0:-1,dur:Rr*Math.abs(t-this.p),ease:ke},this.raf=requestAnimationFrame(this.tick);return}this.fading=!1,this.measure(),(r||this.geomDirty)&&(this.aim(t),this.mode=null),this.retime(),this.playOpts=null;let n=this.total;if(this.run={from:this.p,to:t,t0:-1,dur:(t===1?n:n/Math.max(this.style.returnSpeed,.05))*1e3,ease:t===1?ke:wr},r){let s=this.opts.capture!==!1;this.runAt=performance.now();let a=s;for(let l of this.needed()){let o=this.fresh(l);this.waiting[l]=s&&!o,o||(a=!1,s&&!this.slots[l].busy&&this.capture(l))}this.lensAt=a?-1/0:null}this.canvas.style.display="block",this.raf=requestAnimationFrame(this.tick)}paint(t){if(this.fading||!this.renderer||this.renderer.lost){this.show(this.p);return}let i=performance.now();this.draw(t),this.lastDraw=performance.now()-i}invalidate(){!this.raf&&!this.destroyed&&(this.raf=requestAnimationFrame(this.tick))}finish(){var t,i;let r=this.run.to;this.run=null,this.p=r,this.fading=!1,this.mode=null,this.lensAt=null,this.waiting.content=this.waiting.revealed=!1,this.lastGain=this.lastFloor=0,this.held=r===1,this.renderer&&!this.renderer.lost&&this.renderer.clear(),this.canvas&&(this.canvas.style.display="none"),this.show(r),this.rest(),(i=(t=this.opts).onFinish)==null||i.call(t,r===1)}scrubTo(t){let i=Ae(t,0,1);if(!this.scrubbing){let r=!this.run&&(this.p<=0||this.p>=1);if(this.halt(),this.scrubbing=!0,clearTimeout(this.refreshTimer),clearTimeout(this.releaseTimer),this.flush(),this.motionless()||!this.ensureRenderer())this.fading=!0;else{if(this.measure(),r&&(this.aim(1),this.mode=null),this.retime(),this.waiting.content=this.waiting.revealed=!1,this.lensAt=-1/0,this.opts.capture!==!1)for(let n of this.needed())!this.fresh(n)&&!this.slots[n].busy&&this.capture(n);this.canvas.style.display="block"}}i===this.p&&this.shown===this.shown&&!this.styleDirty&&!this.geomDirty||(this.p=i,this.invalidate())}draw(t){let i=this.renderer;this.geomDirty?this.measure():this.styleDirty&&(this.restyle(),this.retime());let r=this.geom,n=this.style,s=this.p;if(s<=0||s>=1){i.clear(),this.lastGain=this.lastFloor=0,this.show(s>=1?1:0);return}let a=!!this.b,l=Ft(s,this.src,r.vw,r.vh,n,this.focus,this.front),o=this.slots.content,h=this.slots.revealed,c=this.opts.capture!==!1,u=c&&o.ready&&!this.waiting.content&&(!a||h.ready&&!this.waiting.revealed),d=0;u&&(this.lensAt===null&&(this.lensAt=t),d=this.scrubbing||this.lensAt===-1/0?1:z(0,xr,t-this.lensAt));let v=0,w=!0,f=u,b=br/this.total;a&&(!this.scrubbing&&this.mode===null&&s>this.launchAt&&s<this.clearAt+b&&(this.mode=u?"lens":"plain"),!this.scrubbing&&this.mode!==null&&(f=this.mode==="lens"),f?(w=!1,s>=this.clearAt?(this.show(1),v=1-z(this.clearAt,this.clearAt+b,s)):this.show(0)):(d=0,this.show(l.hasCleared?1:l.launched?z(.08,.7,l.moved):0))),this.lastGain=d,this.lastFloor=v,i.setSize(r.vw,r.vh),i.setBlur(n.blur);let g=ge(s*this.total,r.vw,r.vh,n.cornerRadius,n.rimPulse),R=this.dots,y=0;if(l.time>0){let S=this.src,_=this.particles,L=this.spot;for(let C=0;C<_.length;C++){let M=_[C];Pi(M,l,S,n,L),!(L.a<=.002)&&(R.data[y*3]=L.x,R.data[y*3+1]=L.y,R.data[y*3+2]=Math.floor(M.size*10)+Math.min(L.a,.999),y++)}}R.count=y;let m=this.frame;m.floor=v,m.gain=d,m.same=w,u&&this.patchLive(),i.render(l,n,g,R,m),c&&this.chase(t,l,d>0&&(l.energy>0||l.gravity>0)||v>0||a&&f&&l.launched&&s<this.clearAt+b)}patchLive(){let t=this.renderer,i=this.geom;if(!t||!i)return;let r=this.root.querySelectorAll("canvas[data-dw-live]");if(!r.length)return;let n=!1,s=!1;for(let a=0;a<r.length;a++){let l=r[a],o=this.a.contains(l)?"content":this.b&&this.b.contains(l)?"revealed":null;if(!o||!l.width||!l.height)continue;let h=this.slots[o].canvas;if(!h||!t.has(o))continue;let c=this.local(l.getBoundingClientRect()),u=i.bs,d=c.x*u,v=c.y*u,w=Math.max(0,Math.floor(d)),f=Math.max(0,Math.floor(v)),b=Math.min(h.width,Math.ceil(d+c.w*u)),g=Math.min(h.height,Math.ceil(v+c.h*u));if(b<=w||g<=f)continue;let R=b-w,y=g-f,m=this.patch;m||(m=this.patch=document.createElement("canvas")),(m.width!==R||m.height!==y)&&(m.width=R,m.height=y);let S=m.getContext("2d");if(!S)return;S.setTransform(1,0,0,1,0,0),S.globalCompositeOperation="copy",S.drawImage(h,w,f,R,y,0,0,R,y),S.globalCompositeOperation="source-over",S.drawImage(l,0,0,l.width,l.height,d-w,v-f,c.w*u,c.h*u),t.patchScreen(o,m,w,f),o==="content"?n=!0:s=!0}n&&t.reblur("content"),s&&t.reblur("revealed")}chase(t,i,r){let n=this.opts.live??!0,s=this.needed();for(let a=0;a<s.length;a++){let l=s[a],o=this.slots[l];if(!(o.busy||o.broken)){if(this.waiting[l]||!o.ready){this.capture(l);continue}if(n===!1||!r||this.scrubbing){this.scrubbing&&o.stale&&this.capture(l);continue}t-o.last<Math.max(90,o.cost*6)||(!o.stale&&n==="animations"&&this.animating(l)&&(o.stale=!0),o.stale&&this.capture(l))}}}animating(t){let i=t==="content"?this.a:this.b;return!i||typeof i.getAnimations!="function"?!1:i.getAnimations({subtree:!0}).some(r=>r.playState==="running")}show(t){if(t===this.shown)return;this.shown=t;let i=this.b;if(!i)zt(this.a,1,!0);else{let r=t>.5;zt(this.a,t>=1?0:1,!r),zt(i,t,r)}this.flush()}ensureRenderer(){if(this.renderer)return this.renderer.lost?null:this.renderer;if(this.failed||this.destroyed)return null;let t=document.createElement("canvas");t.setAttribute("data-dw-skip",""),t.setAttribute("aria-hidden","true");let i=t.style;i.position="absolute",i.left=i.top="0",i.width=i.height="100%",i.pointerEvents="none",i.zIndex="1",i.display="none";let r=new bt(t,{alpha:!0});if(!r.ok)return this.failed=!0,null;let n={signal:this.abort.signal};return t.addEventListener("webglcontextlost",s=>{s.preventDefault(),this.slots.content.ready=this.slots.revealed.ready=!1,this.run&&this.finish()},n),t.addEventListener("webglcontextrestored",()=>{this.destroyed||this.canvas!==t||(this.renderer=new bt(t,{alpha:!0}),this.primed=!1,this.slots.content.stale=this.slots.revealed.stale=!0,this.scheduleRefresh(!0))},n),this.root.appendChild(t),this.canvas=t,this.renderer=r,this.primed=!1,this.slots.content.ready=this.slots.revealed.ready=!1,this.geomDirty=!0,this.flush(),r}dropRenderer(){var t,i;let r=this.renderer,n=this.canvas;this.renderer=null,this.canvas=null;for(let s of["content","revealed"]){let a=this.slots[s];a.ready=!1,a.stale=!0,a.canvas=null}r!=null&&r.ok&&(r.dispose(),(i=(t=n?.getContext("webgl2"))==null?void 0:t.getExtension("WEBGL_lose_context"))==null||i.loseContext()),n?.remove(),this.destroyed||this.flush()}async capture(t){let i=this.slots[t],r=t==="content"?this.a:this.b,n=this.renderer;if(i.busy||this.destroyed||!r||!n||n.lost)return;this.flush(),(this.geomDirty||!this.geom)&&this.measure();let s=this.geom,a=this.root,l=this.canvas,o=t==="content"?this.b:this.a,h=i.dirty,c=this.epoch,u=performance.now();i.busy=!0,i.began=u;let d=!1;try{let v=g=>g===l||g===o||g.hasAttribute("data-dw-skip")||g.hasAttribute("data-dw-live"),w=fr(a),f,b=this.opts.capture;if(typeof b=="function")f=await b({element:a,slot:t,width:s.w,height:s.h,scale:s.bs,background:w,ignore:v});else{let g={"border-radius":"0",position:"absolute",left:`${-s.bl}px`,top:`${-s.bt}px`,right:"auto",bottom:"auto",margin:"0",transform:"none",translate:"none",rotate:"none",scale:"none",opacity:"1",visibility:"visible",width:`${s.bw}px`,height:`${s.bh}px`,"box-sizing":"border-box","min-width":"0","min-height":"0","max-width":"none","max-height":"none"},R={opacity:"1",visibility:"visible"},y=await gr(a,{width:s.w,height:s.h,scale:s.bs,background:w,skip:v,force:m=>m===a?g:m===r?R:void 0,into:i.canvas??void 0});i.canvas=y.canvas,i.walk=y.walk,i.raster=y.raster,i.nodes=y.nodes,i.size=y.size,f=y.canvas}if(this.destroyed||this.renderer!==n||n.lost||c!==this.epoch)return;n.setScreen(f,s.vw,s.vh,this.style.blur,t),i.ready=!0,i.stale=i.dirty!==h,i.broken=!1,i.count++,d=!0}catch(v){i.broken=!0,typeof console<"u"&&console.warn("distortion-waves: could not picture the element; the wave runs without its lens.",v)}finally{i.busy=!1,i.last=performance.now(),i.cost=i.last-u}this.destroyed||(d&&(u>=this.runAt||!i.stale)&&(this.waiting[t]=!1),i.broken&&(this.waiting[t]=!1),this.scrubbing?this.invalidate():this.run||(d&&this.prime(),this.scheduleRefresh()))}prime(){let t=this.renderer,i=this.geom;if(this.primed||!t||t.lost||!i)return;let r=this.needed();for(let h=0;h<r.length;h++)if(!this.slots[r[h]].ready)return;this.primed=!0;let n=this.style,s=Math.min(i.vw,i.vh)/4,a={x:(i.vw-s)/2,y:(i.vh-s)/2,w:s,h:s},l=Ft((n.anticipation+n.travel*.1)/st(n),a,i.vw,i.vh,n,null,this.probe),o=this.dots.data.length>=3?this.dots:null;o&&(o.data[0]=i.vw/2,o.data[1]=i.vh/2,o.data[2]=10.5,o.count=1),t.setSize(i.vw,i.vh),t.setBlur(n.blur),t.prime(l,n,ge(0,i.vw,i.vh,n.cornerRadius,n.rimPulse),o,{floor:0,gain:1,round:!0,same:!this.b}),o&&(o.count=0)}warm(){this.opts.capture!==!1&&Te(()=>{this.destroyed||this.run||this.scrubbing||this.motionless()||!this.ensureRenderer()||(this.refresh(),this.rest())})}refresh(){if(!(this.destroyed||this.run||this.scrubbing||this.opts.capture===!1||!this.renderer||this.renderer.lost)){this.flush();for(let t of this.needed()){let i=this.slots[t];!this.fresh(t)&&!i.busy&&!i.broken&&this.capture(t)}}}scheduleRefresh(t=!1){if(this.destroyed||this.run||this.scrubbing||this.opts.capture===!1||!this.renderer||this.renderer.lost||!t&&!this.pointerInside&&!this.focusInside||this.fresh("content")&&(!this.b||this.fresh("revealed")))return;clearTimeout(this.refreshTimer);let i=Math.max(this.slots.content.cost,this.slots.revealed.cost);this.refreshTimer=window.setTimeout(()=>Te(()=>this.refresh()),Math.max(140,i*8))}rest(){this.destroyed||(this.scheduleRefresh(),clearTimeout(this.releaseTimer),!(this.pointerInside||this.focusInside||!this.renderer)&&(this.releaseTimer=window.setTimeout(()=>{this.destroyed||this.run||this.scrubbing||this.pointerInside||this.focusInside||this.dropRenderer()},Sr)))}mark(t){if(t&&t!==this.root){let s=t.nodeType===1?t:t.parentElement,a=s&&typeof s.closest=="function"?s.closest("[data-dw-skip],canvas[data-dw-live]"):null;if(a&&this.root.contains(a))return!1}let i=this.slots.content,r=this.slots.revealed,n=!!t&&this.a.contains(t);return!n&&t&&this.b&&this.b.contains(t)||(i.dirty++,i.stale=!0,i.broken=!1),n||(r.dirty++,r.stale=!0,r.broken=!1),!0}onMutations(t){let i=!1;for(let r of t){let n=r.target;if(n!==this.canvas){if(r.type==="attributes"){if((n===this.a||n===this.b)&&(r.attributeName==="style"||r.attributeName==="inert"||r.attributeName==="aria-hidden"))continue}else if(r.type==="childList"&&n===this.root){let s=!0;for(let a of[r.addedNodes,r.removedNodes])for(let l=0;l<a.length;l++){let o=a[l];o.nodeType===1&&o.hasAttribute("data-dw-skip")||(s=!1)}if(s)continue}this.mark(n)&&(i=!0)}}i&&this.scheduleRefresh()}flush(){let t=this.observer.takeRecords();t.length&&this.onMutations(t)}onResize(){let t=this.geom;this.geomDirty=!0,t&&(this.scrubbing?this.invalidate():this.run||this.scheduleRefresh(!0))}listen(){var t;let i=this.root,r={signal:this.abort.signal,passive:!0},n={...r,capture:!0},s=l=>{this.mark(l.target)&&this.scheduleRefresh()};i.addEventListener("pointerdown",l=>{let o=l.target,h=o&&typeof o.closest=="function"?o.closest(Ar):null;this.press={el:h&&i.contains(h)?h:null,x:l.clientX,y:l.clientY,t:performance.now()}},n),i.addEventListener("pointerenter",()=>{this.pointerInside=!0,clearTimeout(this.releaseTimer),!this.renderer&&!this.run&&this.opts.capture!==!1?this.warm():this.scheduleRefresh()},r),i.addEventListener("pointerleave",()=>{this.pointerInside=!1,!this.run&&!this.scrubbing&&this.rest()},r),i.addEventListener("pointerover",s,r),i.addEventListener("pointerout",s,r),i.addEventListener("focusin",l=>{this.focusInside=!0,clearTimeout(this.releaseTimer),s(l)},r),i.addEventListener("focusout",l=>{let o=l.relatedTarget;this.focusInside=!!o&&i.contains(o),s(l),!this.focusInside&&!this.run&&!this.scrubbing&&this.rest()},r);for(let l of["input","change","transitionend","animationend"])i.addEventListener(l,s,r);i.addEventListener("scroll",s,n),i.addEventListener("load",l=>{this.mark(l.target),this.scheduleRefresh(!0)},n);let a=document.fonts;(t=a?.addEventListener)==null||t.call(a,"loadingdone",()=>{vr(),this.mark(null),this.scheduleRefresh(!0)},r)}},Fe=typeof window<"u"?W.useLayoutEffect:W.useEffect,Wt={gridArea:"1 / 1",minWidth:0,minHeight:0,isolation:"isolate"},Ce={...Wt,opacity:0,pointerEvents:"none"},_r={gridArea:"1 / 1",minWidth:0,minHeight:0,position:"relative",zIndex:2,pointerEvents:"none"},Pr=':where([data-dw-layer="overlay"])>*{pointer-events:auto}',Ur=(0,W.forwardRef)(function(e,t){let{children:i,revealedContent:r,overlay:n,revealed:s,type:a,source:l,focus:o,waveStyle:h,palette:c,scale:u,cornerRadius:d,scrub:v,capture:w,live:f,prewarm:b,resolution:g,reducedMotion:R,onFinish:y,style:m,...S}=e,_=(0,W.useRef)(null),L=(0,W.useRef)(null),C=(0,W.useRef)(null),M=(0,W.useRef)(null),[D]=(0,W.useState)(()=>!!s),N=r!=null&&r!==!1;return Fe(()=>{let T=new lt(_.current,L.current,C.current);return M.current=T,()=>{T.destroy(),M.current=null}},[]),Fe(()=>{let T=M.current;T&&(T.setRevealedLayer(C.current),T.update({revealed:s,type:a,source:l,focus:o,waveStyle:h,palette:c,scale:u,cornerRadius:d,scrub:v,capture:w,live:f,prewarm:b,resolution:g,reducedMotion:R,onFinish:y}))}),(0,W.useImperativeHandle)(t,()=>({play:T=>{var B;return(B=M.current)==null?void 0:B.play(T)},reverse:()=>{var T;return(T=M.current)==null?void 0:T.reverse()},reset:()=>{var T;return(T=M.current)==null?void 0:T.reset()},prepare:()=>{var T;return((T=M.current)==null?void 0:T.prepare())??Promise.resolve()},get element(){return _.current},get controller(){return M.current}}),[]),(0,K.jsxs)("div",{ref:_,"data-distortion-wave":"",...S,style:{display:"grid",isolation:"isolate",...m},children:[(0,K.jsx)("div",{ref:L,"data-dw-layer":"content",style:N&&D?Ce:Wt,children:i}),N?(0,K.jsx)("div",{ref:C,"data-dw-layer":"revealed",style:D?Wt:Ce,children:r}):null,n!=null&&n!==!1?(0,K.jsxs)("div",{"data-dw-layer":"overlay","data-dw-skip":"",style:_r,children:[(0,K.jsx)("style",{"data-dw-skip":"",children:Pr}),n]}):null]})});window.DWave=lt;})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/

;

/* výkon: těžké moduly (WebGL/canvas) se inicializují až když se k nim uživatel blíží */
(function(){
  var oa=window.addEventListener;
  window.addEventListener=function(t,f,o){ if(t==='load'&&document.readyState==='complete'){ setTimeout(function(){ var e=new Event('load'); if(typeof f==='function') f.call(window,e); else if(f&&f.handleEvent) f.handleEvent(e); },0); return; } return oa.apply(this,arguments); };
  window.aidLazy=function(q,fn){ var el=document.querySelector(q); if(!el) return; var run=function(){ try{ fn(); }catch(e){ console.error(e); } };
    if(!('IntersectionObserver' in window)) return run();
    var io=new IntersectionObserver(function(es){ if(es.some(function(e){ return e.isIntersecting; })){ io.disconnect(); run(); } },{rootMargin:'150% 0px 150% 0px'}); io.observe(el); };
  window.aidLater=function(fn){ var done=false; function go(){ if(done) return; done=true; try{ fn(); }catch(e){ console.error(e); } }
    document.addEventListener('click',function(e){ if(e.target&&e.target.closest&&e.target.closest('[data-open]')) go(); },true);
    if(window.requestIdleCallback) requestIdleCallback(go,{timeout:4000}); else setTimeout(go,2500); };
})();

;

(function(){
  var page=document.getElementById('page'), dlg=document.getElementById('reg'), form=document.getElementById('regForm'), err=document.getElementById('fErr');
  var REDIRECT_URL='vip';
  var wave=null, waveEl=document.getElementById('wave'), layers=waveEl.querySelectorAll('.wl'), sub=document.getElementById('regSubmit');
  function showStep(two){ layers[0].style.opacity=two?0:1; layers[0].style.pointerEvents=two?'none':''; layers[1].style.opacity=two?1:0; layers[1].style.pointerEvents=two?'':'none'; }
  // po vyplnění: vlna odhalí potvrzení, chvíli ho necháme přečíst a pak přesměrujeme na VIP stránku
  var goT=0, gone=false; function go(){ if(gone||!REDIRECT_URL) return; gone=true; window.location.href=REDIRECT_URL; }
  function done(two){ if(two) go(); }
  try{ if(window.DWave){ wave=new window.DWave(waveEl,layers[0],layers[1]); wave.update({type:'vertical',palette:'colorful',onFinish:done}); } }catch(e){ wave=null; }
  window.__wave=wave;
  var pf=false; function openModal(){ if(!pf&&REDIRECT_URL){ pf=true; var l=document.createElement('link'); l.rel='prefetch'; l.href=REDIRECT_URL; document.head.appendChild(l); } err.hidden=true; dlg.classList.remove('in','rg-go'); void dlg.offsetWidth; requestAnimationFrame(function(){ dlg.classList.add('in'); });
    if(typeof dlg.showModal==='function'){ if(!dlg.open) dlg.showModal(); } else { dlg.setAttribute('open',''); }
    if(wave){ wave.update({revealed:false}); wave.reset(); setTimeout(function(){ wave.prepare(); },2000); } else showStep(false);
    document.getElementById('fName').focus(); }
  function closeModal(){ if(typeof dlg.close==='function') dlg.close(); else dlg.removeAttribute('open'); }
  document.querySelectorAll('[data-open]').forEach(function(b){ b.addEventListener('click',openModal); });
  document.querySelectorAll('[data-close]').forEach(function(b){ b.addEventListener('click',closeModal); });
  dlg.addEventListener('click',function(e){ if(e.target===dlg) closeModal(); });
  function fail(t){ err.textContent=t; err.hidden=false; }
  // tlačítko vypadá neaktivně, dokud není vše vyplněné a potvrzené; kliknout jde dál a ukáže, co chybí
  function regOk(){ var t=form.elements.tel.value.replace(/[^0-9]/g,''); return !!form.elements.name.value.trim()&&t.length>=9&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.elements.email.value.trim())&&form.elements.ok.checked; }
  function regBtn(){ var ok=regOk(); sub.classList.toggle('is-off',!ok); sub.setAttribute('aria-disabled',ok?'false':'true'); if(ok) err.hidden=true; }
  form.addEventListener('input',regBtn); form.addEventListener('change',regBtn); regBtn();
  form.addEventListener('submit',function(e){ e.preventDefault();
    var n=form.elements.name.value.trim(), t=form.elements.tel.value.replace(/[^0-9]/g,''), m=form.elements.email.value.trim();
    if(!n) return fail('Doplň jméno.');
    if(t.length<9) return fail('Doplň telefon včetně všech číslic.');
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) return fail('Doplň platný e-mail.');
    if(!form.elements.ok.checked) return fail('Bez souhlasu s podmínkami tě nemůžu zaregistrovat.');
    err.hidden=true;
    gone=false; clearTimeout(goT); goT=setTimeout(go,900);
    if(wave) wave.update({revealed:true,source:sub}); else { showStep(true); done(true); } });
  var againB=document.getElementById('again'); if(againB) againB.addEventListener('click',function(){ clearTimeout(goT); gone=true; if(wave) wave.update({revealed:false}); else showStep(false); });
  var gBtns=[['gAuto','auto'],['gLens','lens'],['gEdge','edge']].map(function(x){ return [document.getElementById(x[0]),x[1]]; });
  gBtns.forEach(function(b){ if(!b[0]) return; b[0].addEventListener('click',function(){ gBtns.forEach(function(o){ o[0].setAttribute('aria-pressed',o===b?'true':'false'); }); window.__cfMode&&window.__cfMode(b[1]); }); });
  var vd=document.getElementById('vDesktop'), vm=document.getElementById('vMobile');
  function vRs(){ [30,250,700].forEach(function(t){ setTimeout(function(){ window.dispatchEvent(new Event('resize')); },t); }); }
  if(vd){ vd.addEventListener('click',function(){ vd.setAttribute('aria-pressed','true'); vm.setAttribute('aria-pressed','false'); page.classList.remove('is-mobile'); vRs(); });
    vm.addEventListener('click',function(){ vm.setAttribute('aria-pressed','true'); vd.setAttribute('aria-pressed','false'); page.classList.add('is-mobile'); vRs(); }); }


  // POHYB
  (function(){
    function splitWords(el){ var walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT), nodes=[], n; while((n=walker.nextNode())) nodes.push(n); var i=0;
      nodes.forEach(function(t){ if(t.parentNode.closest('.ic')) return; var parts=t.textContent.split(/(\s+)/), f=document.createDocumentFragment();
        parts.forEach(function(p){ if(!p) return; if(/^\s+$/.test(p)){ f.appendChild(document.createTextNode(p)); return; } var w=document.createElement('span'); w.className='w'; w.style.setProperty('--i',i++); w.textContent=p; f.appendChild(w); });
        t.parentNode.replaceChild(f,t); });
      el.querySelectorAll('.ic').forEach(function(ic){ var nx=ic.nextElementSibling; ic.style.setProperty('--i',nx?nx.style.getPropertyValue('--i'):0); }); }

    /* ABOUT flick karty */
    (function(){ var fk=document.getElementById('fk'); if(!fk) return; var cs=[].slice.call(fk.querySelectorAll('.fk-c')), n=cs.length, cur=0, drag=null, timer=null, inView=false, hover=false, nav=document.getElementById('fkNav');
      var T=[[0,0,0,1,1],[.25,.01,10,.9,1],[.45,.05,15,.8,1],[.55,.05,20,.6,0]];
      function tf(o){ var a=Math.abs(o), sg=o<0?-1:1, i=Math.min(Math.floor(a),3), f=Math.min(a-i,1), A=T[i], B=T[Math.min(i+1,3)]; if(a>=3){A=B=T[3];f=0;} function L(k){return A[k]+(B[k]-A[k])*f;} return {x:sg*L(0),y:L(1),r:sg*L(2),s:L(3),o:L(4)}; }
      function rel(i,c){ var d=((i-c)%n+n)%n; if(d>n/2) d-=n; return d; }
      cs.forEach(function(c,i){ var b=document.createElement('button'); b.type='button'; b.setAttribute('aria-label','Karta '+(i+1)); b.addEventListener('click',function(){ go(i); }); nav.appendChild(b); });
      var dots=[].slice.call(nav.children);
      function render(off){ var w=fk.offsetWidth, h=fk.offsetHeight; cs.forEach(function(c,i){ var o=rel(i,cur)-(off||0); if(o>n/2) o-=n; if(o<-n/2) o+=n; var t=tf(o); c.style.transform='translate('+(t.x*w).toFixed(1)+'px,'+(t.y*h).toFixed(1)+'px) rotate('+t.r.toFixed(2)+'deg) scale('+t.s.toFixed(3)+')'; c.style.opacity=t.o; c.style.zIndex=10-Math.round(Math.abs(o)*2); c.setAttribute('aria-hidden',Math.abs(o)<.5?'false':'true'); }); dots.forEach(function(d,i){ d.setAttribute('aria-current',i===cur?'true':'false'); }); }
      function go(i){ cur=((i%n)+n)%n; render(0); }
      fk.addEventListener('pointerdown',function(e){ if(e.button) return; drag={x:e.clientX,id:e.pointerId,moved:false}; fk.classList.add('drag'); fk.setPointerCapture(e.pointerId); stop(); });
      fk.addEventListener('pointermove',function(e){ if(!drag) return; var dx=e.clientX-drag.x; if(Math.abs(dx)>4) drag.moved=true; var pr=Math.max(-1,Math.min(1,-dx/(fk.offsetWidth*2))); render(pr); });
      function end(e){ if(!drag) return; var dx=e.clientX-drag.x, moved=drag.moved; drag=null; fk.classList.remove('drag'); if(moved){ var pr=-dx/(fk.offsetWidth*2); go(cur+(Math.abs(pr)>.1?(pr>0?1:-1):0)); } else { var el=document.elementFromPoint(e.clientX,e.clientY), c=el&&el.closest('.fk-c'); if(c){ var i=+c.dataset.i; go(i===cur?cur+1:i); } } start(); }
      fk.addEventListener('pointerup',end); fk.addEventListener('pointercancel',end);
      fk.addEventListener('keydown',function(e){ if(e.key==='ArrowRight'){go(cur+1);e.preventDefault();} if(e.key==='ArrowLeft'){go(cur-1);e.preventDefault();} });
      var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      function start(){ stop(); if(reduce||!inView||hover) return; timer=setInterval(function(){ go(cur+1); },3200); }
      function stop(){ if(timer){ clearInterval(timer); timer=null; } }
      fk.addEventListener('pointerenter',function(){ hover=true; stop(); }); fk.addEventListener('pointerleave',function(){ hover=false; start(); });
      fk.addEventListener('focusin',function(){ hover=true; stop(); }); fk.addEventListener('focusout',function(){ hover=false; start(); });
      if('IntersectionObserver' in window){ new IntersectionObserver(function(es){ inView=es[0].isIntersecting; inView?start():stop(); },{threshold:.4}).observe(fk); }
      window.addEventListener('resize',function(){ render(0); });
      render(0); })();
    document.querySelectorAll('[data-words]').forEach(splitWords);
    document.querySelectorAll('[data-roll]').forEach(function(el){ var t=el.textContent; el.textContent=''; el.classList.add('roll'); el.setAttribute('aria-label',t);
      Array.from(t).forEach(function(ch,i){ var r=document.createElement('span'); r.className='r'; r.setAttribute('aria-hidden','true'); var ri=document.createElement('span'); ri.className='ri'; ri.style.setProperty('--i',i); ri.textContent=ch===' '?'\u00a0':ch; r.appendChild(ri); el.appendChild(r); }); });
    var io='IntersectionObserver' in window? new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); },{threshold:.18}):null;
    document.querySelectorAll('[data-reveal]').forEach(function(el){ if(io) io.observe(el); else el.classList.add('in'); });
    requestAnimationFrame(function(){ document.getElementById('hero').classList.add('in'); });
    var lock=document.getElementById('lock'), heroEl=document.getElementById('hero');
    function lk(){ var hs=document.getElementById('hs'), r=hs.getBoundingClientRect(), span=Math.max(1,hs.offsetHeight-innerHeight); lock.classList.toggle('show', hs.classList.contains('static')? heroEl.getBoundingClientRect().bottom<0 : (-r.top/span)>0.1); }
    window.addEventListener('scroll',lk,{passive:true}); lk();
    document.querySelectorAll('[data-count]').forEach(function(el){ var to=Number(el.getAttribute('data-count')), dur=1800, delay=1200, t0=0;
      if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; el.textContent='0';
      function f(now){ if(!t0) t0=now; var t=Math.min(1,(now-t0-delay)/dur); if(t<0){ requestAnimationFrame(f); return; } var e=1-Math.pow(1-t,4); el.textContent=String(Math.round(to*e)); if(t<1) requestAnimationFrame(f); }
      requestAnimationFrame(f); });
  })();


  // HERO SCROLL: snímky videa na scroll, pak displej notebooku vyroste do sekce s recenzemi
  (function(){ var hs=document.getElementById('hs'); if(!hs) return;
    var stage=document.getElementById('hsStage'), hero=document.getElementById('hero'), cv=document.getElementById('heroSeq'), ui=document.getElementById('heroUi'), shade=document.getElementById('heroShade'), scr=document.getElementById('recenze'), inn=document.getElementById('hsIn');
    var N=121, VW=1224, VH=752, SR={x:239,y:94,w:763.3,h:491.3}; /* displej v posledním snímku */
    var TR=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[523.0,244.0,134.0,92.7],[524.2,243.2,135.5,93.2],[525.4,242.8,136.6,93.4],[527.6,242.0,139.0,93.8],[529.2,241.2,141.2,94.2],[529.8,240.4,143.4,95.0],[529.6,239.6,145.6,96.2],[528.2,238.4,148.6,98.4],[526.0,237.0,152.0,101.0],[523.0,235.6,155.6,104.0],[519.6,234.2,159.2,107.0],[515.6,233.2,163.2,109.6],[511.6,232.4,166.8,112.0],[507.4,231.8,170.4,114.4],[503.0,231.4,174.6,116.8],[498.6,231.0,179.2,119.6],[494.6,230.4,183.8,122.6],[490.8,229.8,188.8,125.6],[487.2,229.0,194.0,128.8],[484.2,227.8,199.0,132.2],[481.4,226.6,204.4,135.4],[478.6,225.2,210.2,139.0],[476.0,223.8,216.2,142.6],[473.4,222.2,222.8,146.6],[470.6,220.6,230.0,151.0],[467.6,219.0,237.6,155.6],[464.6,217.6,245.6,160.4],[461.2,216.0,254.4,165.8],[457.4,214.4,263.8,171.6],[453.4,212.8,273.6,177.6],[449.2,211.0,284.2,184.2],[444.6,209.0,295.4,191.0],[439.6,206.8,307.2,198.6],[434.4,204.4,319.6,206.6],[428.8,201.8,333.2,215.0],[422.8,198.8,347.4,224.0],[416.2,195.4,362.6,234.0],[409.2,191.8,378.8,244.2],[401.8,188.0,395.8,255.0],[394.0,184.0,413.2,266.4],[385.8,179.6,431.8,278.8],[377.2,175.2,451.2,291.2],[368.6,170.6,471.2,304.0],[359.6,165.6,491.8,317.2],[350.2,160.4,513.2,330.8],[340.8,155.0,534.2,344.6],[331.6,149.4,555.2,358.6],[322.0,143.8,576.2,372.6],[312.6,138.4,597.2,386.4],[303.6,133.2,617.4,399.6],[295.0,128.4,637.2,412.0],[286.8,123.8,656.0,423.6],[279.4,119.4,673.4,434.6],[272.8,115.4,689.0,444.6],[266.8,111.6,703.2,453.6],[261.6,108.2,715.4,461.4],[257.2,105.2,726.0,468.4],[253.6,102.8,734.8,474.0],[250.4,100.6,742.4,478.6],[248.0,98.6,748.4,482.6],[246.0,97.2,753.2,485.6],[244.4,96.0,756.6,487.8],[243.0,95.0,759.4,489.6],[242.0,94.4,761.2,490.8],[241.2,94.2,762.4,491.4],[240.4,94.0,763.2,491.8],[239.8,94.0,763.8,492.0],[239.4,94.0,764.0,492.0],[239.2,94.0,763.8,491.8],[239.0,94.0,763.6,491.6],[239.0,94.0,763.5,491.5],[239.0,94.0,763.3,491.3]]; /* obdélník displeje v každém snímku (od 50. snímku dál) */
    var A_END=0.6, B_END=0.8, Z_START=0.52; /* 0–0.6 video, 0.6–0.88 rozšíření displeje, pak chvíli drží */
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){ hs.classList.add('static'); return; }
    var ctx=cv.getContext('2d'), imgs=new Array(N), ok=new Array(N), W=0,H=0,DPR=1, cur=0, tgt=0, raf=0, counted=false;
    function src(i){ return 'https://jblazek-design.github.io/ai-designer-webinar/assets/seq/f'+String(i+1).padStart(3,'0')+'.webp'; }
    function load(i){ if(imgs[i]) return; var im=new Image(); im.crossOrigin='anonymous'; im.decoding='async'; im.onload=function(){ ok[i]=true; if(i===0) hs.classList.add('gl'); kick(); }; im.src=src(i); imgs[i]=im; }
    load(0); load(N-1);
    function loadAll(){ [32,16,8,4,2,1].forEach(function(st){ for(var i=0;i<N;i+=st) load(i); }); }
    if(document.readyState==='complete') loadAll(); else window.addEventListener('load',loadAll);
    function near(i){ for(var d=0;d<N;d++){ if(i-d>=0&&ok[i-d]) return imgs[i-d]; if(i+d<N&&ok[i+d]) return imgs[i+d]; } return null; }
    var tools=document.querySelector('.tools');
    function size(){ document.documentElement.style.setProperty('--th',(0)+'px'); W=hero.clientWidth; H=hero.clientHeight; DPR=Math.min(2,window.devicePixelRatio||1); cv.width=Math.round(W*DPR); cv.height=Math.round(H*DPR); }
    function prog(){ var r=hs.getBoundingClientRect(), th=0, span=hs.offsetHeight-stage.offsetHeight; return Math.max(0,Math.min(1,(th-r.top)/Math.max(1,span))); }
    function cl(x){ return x<0?0:x>1?1:x; }
    function eio(t){ return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2; }
    function count(){ if(counted) return; counted=true; [].forEach.call(scr.querySelectorAll('[data-to]'),function(el){ var to=+el.getAttribute('data-to'), t0=0;
      function f(now){ if(!t0) t0=now; var t=Math.min(1,(now-t0)/1400), v=Math.round(to*(1-Math.pow(1-t,4))); el.textContent=v>=1000?String(v).replace(/\B(?=(\d{3})+(?!\d))/g,' '):String(v); if(t<1) requestAnimationFrame(f); } requestAnimationFrame(f); }); }
    var hbn=document.querySelector('.hero-bonus'), hbh=hbn&&hbn.querySelector('.hb-hd'), hbl=hbn&&hbn.querySelector('.hb-line'), hts=hbn?[].slice.call(hbn.querySelectorAll('.hb-t')):[], BP=0, DY=0, TX=[], TY=[];
    function bpSize(){ if(!hbn) return; hbn.classList.remove('stk'); hts.forEach(function(t){ t.style.transform=''; }); var bt=parseFloat(getComputedStyle(hbn).bottom)||0, t=hts[0]; BP=Math.round(hbn.offsetHeight+bt-((t?t.offsetTop+t.offsetHeight*0.42:60))); var SH=hero.clientHeight||innerHeight; DY=Math.round(SH/2-(SH-bt-hbn.offsetHeight/2));
      var cw=hbn.clientWidth/2, row=hbn.querySelector('.hb-row'), rs=row?row.scrollLeft:0; TX=hts.map(function(t){ return cw-(t.offsetLeft-rs+t.offsetWidth/2); }); TY=hts.map(function(t,i){ return (i-(hts.length-1)/2)*(t.offsetHeight+8); }); }
    bpSize(); window.addEventListener('resize',bpSize); if(window.ResizeObserver&&hbn) new ResizeObserver(function(){ bpSize(); }).observe(hbn); if(document.fonts&&document.fonts.ready) document.fonts.ready.then(bpSize);
    // video jde vizuálně rovnoměrně: klidné úseky se projedou rychleji, akční pomaleji → scroll nikde „nestojí“
    var FM=[0.0000,0.0064,0.0124,0.0183,0.0243,0.0302,0.0361,0.0420,0.0479,0.0538,0.0597,0.0655,0.0714,0.0772,0.0831,0.0889,0.0948,0.1007,0.1065,0.1124,0.1183,0.1241,0.1300,0.1358,0.1417,0.1476,0.1535,0.1594,0.1654,0.1714,0.1775,0.1836,0.1898,0.1963,0.2028,0.2094,0.2160,0.2230,0.2300,0.2372,0.2445,0.2522,0.2599,0.2678,0.2758,0.2841,0.2923,0.3006,0.3088,0.3172,0.3253,0.3332,0.3408,0.3485,0.3559,0.3634,0.3707,0.3785,0.3860,0.3935,0.4010,0.4088,0.4164,0.4240,0.4316,0.4397,0.4473,0.4549,0.4624,0.4704,0.4780,0.4857,0.4934,0.5017,0.5097,0.5178,0.5260,0.5347,0.5431,0.5519,0.5608,0.5705,0.5799,0.5899,0.6001,0.6109,0.6218,0.6334,0.6453,0.6579,0.6705,0.6837,0.6974,0.7117,0.7260,0.7416,0.7577,0.7739,0.7905,0.8074,0.8233,0.8376,0.8510,0.8641,0.8765,0.8887,0.8997,0.9098,0.9190,0.9278,0.9353,0.9423,0.9490,0.9557,0.9621,0.9683,0.9747,0.9814,0.9877,0.9939,1.0000];
    function fidx(t){ var lo=0, hi=N-1; while(hi-lo>1){ var md=(lo+hi)>>1; if(FM[md]<=t) lo=md; else hi=md; } return Math.round(lo+(t-FM[lo])/Math.max(1e-6,FM[hi]-FM[lo])); }
    function draw(p){
      var c=Math.max(W/VW,H/VH), ox=(W-VW*c)/2, oy=(H-VH*c)/2;
      var e=eio(cl((p-Z_START)/(B_END-Z_START)));
      var S={x:ox+SR.x*c, y:oy+SR.y*c, w:SR.w*c, h:SR.h*c}, Ox=S.x+S.w/2, Oy=S.y+S.h/2;
      var SW=W+8, SH=H+8, Zt=Math.max(SW/S.w, SH/S.h)*1.002, z=Math.pow(Zt,e), u=(z-1)/(Zt-1||1), tx=(W/2-Ox)*u, ty=(H/2-Oy)*u;
      var fi=fidx(cl((p-0.15)/(A_END-0.15))), im=near(fi);
      if(im){ ctx.setTransform(DPR*z*c,0,0,DPR*z*c,DPR*(z*ox+(1-z)*Ox+tx),DPR*(z*oy+(1-z)*Oy+ty)); ctx.drawImage(im,0,0); }
      // UI hero mizí se začátkem scrollu
      // bonusy nejdřív vykukují zespodu a se začátkem scrollu se vysunou celé; teprve pak hero mizí
      // bonusy: vykukují → vysunou se → logo a texty odjedou nahoru, bonusy dojedou doprostřed obrazovky, chvíli drží a pak zmizí (překlenou dlouhou část videa)
      // hero zůstává na místě a postupně mizí; bonusy přes něj vyjedou, zabrzdí uprostřed obrazovky a hned se začnou rozplývat → pak už laptop
      // bonusy dojedou doprostřed (do 0,16), chvíli tam drží, aby šly přečíst (do 0,24), pak se rozplynou; video se rozjede až od 0,15
      var kr=cl(p/0.16), er=1-Math.pow(1-kr,3), kf=cl((p-0.24)/0.08), ef=kf*kf*(3-2*kf);
      if(hbh){ var hk=cl((kr-.12)/.55); hbh.style.opacity=(hk*hk*(3-2*hk)).toFixed(3); }
      if(hbn){ hbn.style.setProperty('--bp',(BP+(DY-BP)*er-24*ef).toFixed(1)+'px'); hbn.style.opacity=(1-ef).toFixed(3); hbn.style.filter=ef>0?'blur('+(12*ef).toFixed(1)+'px)':'none'; hbn.style.visibility=kf>=1?'hidden':'visible';
        if(hbl) hbl.style.opacity=W>=768?(1-cl(kr*5)).toFixed(3):'1'; }
      var k=cl(p/0.12), ek=k*k*(3-2*k); ui.style.opacity=(1-ek).toFixed(3); ui.style.filter=ek>0.01?'blur('+(6*ek).toFixed(1)+'px)':'none'; ui.style.transform='none'; ui.style.visibility=k>=1?'hidden':'visible'; shade.style.opacity=(1-cl(p/0.2)).toFixed(3);
      // displej -> sekce
      var tr=TR[fi], vis=e>0?1:(tr?cl((fi-49)/8):0);
      if(vis<=0){ scr.style.visibility='hidden'; hs.classList.remove('full','live'); return; }
      scr.style.visibility='visible';
      var cx,cy,w,h; if(e>0){ cx=4+Ox+tx; cy=4+Oy+ty; w=S.w*z; h=S.h*z; } else { w=tr[2]*c; h=tr[3]*c; cx=4+ox+tr[0]*c+w/2; cy=4+oy+tr[1]*c+h/2; }
      var L=Math.max(0,cx-w/2), T=Math.max(0,cy-h/2), Rr=Math.max(0,SW-(cx+w/2)), B=Math.max(0,SH-(cy+h/2)), rad=(Math.min(6,w*0.012)*(1-e)).toFixed(1);
      scr.style.clipPath='inset('+T.toFixed(1)+'px '+Rr.toFixed(1)+'px '+B.toFixed(1)+'px '+L.toFixed(1)+'px round '+rad+'px)';
      var sp=Math.min(w/SW,h/SH); inn.style.transform='translate3d('+(cx-sp*SW/2).toFixed(2)+'px,'+(cy-sp*SH/2).toFixed(2)+'px,0) scale('+sp.toFixed(4)+')';
      scr.style.setProperty('--scr','#f8f8f8');
      scr.style.opacity=vis.toFixed(3); inn.style.opacity='1';
      hs.classList.toggle('live',vis>0); hs.classList.toggle('full',e>=0.999); if(e>0.8) count(); }
    function frame(){ raf=0; cur+=(tgt-cur)*0.2; if(Math.abs(tgt-cur)<0.0004) cur=tgt; draw(cur); if(cur!==tgt) raf=requestAnimationFrame(frame); }
    function kick(){ tgt=prog(); if(!raf) raf=requestAnimationFrame(frame); }
    window.addEventListener('scroll',kick,{passive:true});
    var sc=document.getElementById('showcase'), stt=scr.querySelector('.stats');
    var hn=scr.querySelector('.hs-next'), cfl=document.getElementById('cflow');
    function gap(){ if(!sc||!hn||!cfl) return; var SH=stage.clientHeight, b=hn.offsetTop+hn.offsetHeight, bs=SH-b, cs=cfl.querySelector('.cf-stage'), CWs=cs.clientWidth, cw=CWs<560?CWs*0.86:Math.min(700,CWs*0.46), ch=cw*(CWs<560?1.25:0.68), ct=cs.clientHeight*0.5-ch/2; sc.style.paddingTop='0px'; cfl.style.marginTop=Math.round((CWs<560?88:48)-bs-ct)+'px'; }
    function rs(){ size(); gap(); cur=tgt=prog(); draw(cur); }
    window.addEventListener('resize',rs); if(window.ResizeObserver) new ResizeObserver(rs).observe(stage); rs(); })();


  // PROGRAM: karta aktivního večera uprostřed, ostatní jako pilulky nad a pod ní; řídí se scrollem
  (function(){ var sec=document.getElementById('program'); if(!sec) return;
    var stage=document.getElementById('pgStage'), its=[].slice.call(stage.querySelectorAll('.pg-it')), n=its.length, act=-1, tools=document.querySelector('.tools');
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){ sec.classList.add('static'); return; }
    function full(it){ return it.querySelector('.pg-full'); }
    var pv=document.getElementById('pgVis'), pims=pv?[].slice.call(pv.querySelectorAll('.pg-im')):[], psteps=pv?[].slice.call(pv.querySelectorAll('.pg-steps i')):[], pbig=pv?pv.querySelector('.pg-big'):null, pbt=0;
    var PD=[['06.','prosince · neděle · 19:00'],['07.','prosince · pondělí · 19:00'],['08.','prosince · úterý · 19:00']];
    function vis(a){ if(!pv) return; pims.forEach(function(im,i){ im.classList.toggle('on',i===a); }); psteps.forEach(function(st,i){ st.classList.toggle('on',i<=a); });
      if(pbig&&pbig.getAttribute('data-a')!==String(a)){ pbig.setAttribute('data-a',a); pbig.classList.add('sw'); clearTimeout(pbt); pbt=setTimeout(function(){ pbig.querySelector('.pg-bk').textContent='Večer '+(a+1)+' ze 3'; pbig.querySelector('strong').textContent=PD[a][0]; pbig.querySelector('.pg-bd').textContent=PD[a][1]; pbig.classList.remove('sw'); },260); } }
    function layout(a){ var SWd=stage.clientWidth; var cwp=Math.min(1040,SWd-(SWd<500?16:0)); stage.style.setProperty('--cwp',cwp+'px'); stage.classList.toggle('wide',cwp>=760); vis(a); its.forEach(function(it){ var pl=it.querySelector('.pg-pl'); if(pl) it.style.setProperty('--pw',Math.min(cwp,Math.ceil(8+40+16+pl.offsetWidth+28))+'px'); }); rot(a); var mh=0; its.forEach(function(it){ mh=Math.max(mh,full(it).offsetHeight); }); stage.style.height=(mh+2*(56+10))+'px'; var H=stage.clientHeight, PH=56, G=10, ch=full(its[a]).offsetHeight, cy=H/2;
      its.forEach(function(it,i){ var r=i-a, h, y, o=1, s=1, bl=0;
        if(r===0){ h=ch; y=cy-ch/2; }
        else { h=PH; var d=Math.abs(r), sg=r>0?1:-1, edge=cy+sg*(ch/2+G+PH/2), y0=edge+sg*(d-1)*(PH+G)*0.55; y=y0-PH/2; o=r<0?.5:(d===1?1:.55); s=d===1?1:.94; bl=d===1?0:1.5; }
        it.classList.toggle('is-pill',r!==0); it.classList.toggle('is-past',r<0); it.style.setProperty('--h',h+'px'); it.style.setProperty('--y',y.toFixed(1)+'px'); it.style.setProperty('--o',o); it.style.setProperty('--s',s); it.style.setProperty('--bl',bl+'px'); it.style.setProperty('--r','8px');
        it.setAttribute('aria-current',r===0?'step':'false'); it.style.zIndex=10-Math.abs(r); }); }
    // večer 2: obrázek vpravo se střídá (web → ilustrace → animace) a s ním slovo v popisku
    var rt=0, ra=-1; function rot(a){ if(a===ra) return; ra=a; clearInterval(rt); var it=its[a], m=it&&it.querySelector('.m-rot'); if(!m) return; var sl=[].slice.call(m.querySelectorAll('.pg-sl')), w=m.querySelector('.pg-w'), k=0; sl.forEach(function(x,i){ x.classList.toggle('on',i===0); }); w.textContent=sl[0].getAttribute('data-w'); m.classList.toggle('lt',sl[0].hasAttribute('data-lt'));
      rt=setInterval(function(){ sl[k].classList.remove('on'); k=(k+1)%sl.length; sl[k].classList.add('on'); wroll(w,sl[k].getAttribute('data-w')); m.classList.toggle('lt',sl[k].hasAttribute('data-lt')); },2800); }
    // slovo v popisku se mění stejným „roll“ efektem jako text tlačítek při hoveru
    function wroll(el,nw){ var ow=el.textContent; if(ow===nw) return; var w0=el.getBoundingClientRect().width;
      function lay(t,cls){ var l=document.createElement('span'); l.className=cls; Array.from(t).forEach(function(ch,i){ var r=document.createElement('span'); r.className='r'; var ri=document.createElement('span'); ri.className='ri'; ri.style.setProperty('--i',i); ri.textContent=ch===' '?' ':ch; r.appendChild(ri); l.appendChild(r); }); return l; }
      var la=lay(ow,'wa'), lb=lay(nw,'wb'); el.textContent=''; el.classList.add('wr'); el.appendChild(la); el.appendChild(lb); var w1=lb.getBoundingClientRect().width; el.style.width=w0+'px';
      el.offsetWidth; el.classList.add('go'); el.style.width=w1+'px';
      setTimeout(function(){ el.classList.remove('wr','go'); el.style.width=''; el.textContent=nw; },700+Math.max(ow.length,nw.length)*22); }
    var PGH=0; function pgh(){ var h2=sec.querySelector('.pg-pin>h2'), m=sec.clientWidth<=760; PGH=m&&h2?Math.round(h2.offsetHeight+(parseFloat(getComputedStyle(h2.parentNode).paddingTop)||24)):0; sec.style.setProperty('--pgh',PGH+'px'); }
    function prog(){ var r=sec.getBoundingClientRect(), th=-PGH, span=sec.offsetHeight-(innerHeight-th); return Math.max(0,Math.min(1,(th-r.top)/Math.max(1,span))); }
    function upd(){ var a=Math.min(n-1,Math.floor(prog()*n*0.999)); if(a!==act){ act=a; layout(a); } }
    its.forEach(function(it,i){ it.querySelector('.pg-pill').addEventListener('click',function(){ var th=-PGH, span=sec.offsetHeight-(innerHeight-th), top=sec.getBoundingClientRect().top+scrollY-th; window.scrollTo({top:top+span*((i+0.5)/n),behavior:'smooth'}); }); });
    if('IntersectionObserver' in window) new IntersectionObserver(function(es){ sec.classList.toggle('pg-on',es[0].isIntersecting); }).observe(sec); else sec.classList.add('pg-on');
    var tk=false; window.addEventListener('scroll',function(){ if(tk) return; tk=true; requestAnimationFrame(function(){ tk=false; upd(); }); },{passive:true});
    function fitPl(){ [].forEach.call(sec.querySelectorAll('.pl-card'),function(c){ var m=c.closest('.pg-media'); if(!m||!m.clientHeight) return; c.style.scale=Math.min(1,(m.clientHeight-56)/274,(m.clientWidth-32)/315).toFixed(3); }); }
    function fitTl(){ [].forEach.call(sec.querySelectorAll('.pg-tile'),function(t){ var m=t.closest('.pg-media'); if(!m||!m.clientHeight) return; t.style.scale=Math.max(m.clientWidth/456,m.clientHeight/544).toFixed(3); }); }
    function rs(){ pgh(); fitPl(); fitTl(); act=-1; upd(); } window.addEventListener('resize',rs); if(window.ResizeObserver) new ResizeObserver(rs).observe(stage);
    if(document.fonts&&document.fonts.ready) document.fonts.ready.then(rs); rs(); })();


  // VIDEA: přehrávat jen když jsou vidět
  (function(){ var vs=[].slice.call(document.querySelectorAll('video[data-auto]')); if(!vs.length) return;
    var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!('IntersectionObserver' in window)){ vs.forEach(function(v){ v.preload='auto'; if(!rm) v.play().catch(function(){}); }); return; }
    var io=new IntersectionObserver(function(es){ es.forEach(function(e){ var v=e.target; if(e.isIntersecting){ if(v.preload==='none') v.preload='auto'; if(!rm) v.play().catch(function(){}); } else v.pause(); }); },{rootMargin:'200px 0px'});
    vs.forEach(function(v){ io.observe(v); }); })();

  // ODPOČET do 6. 12. 2026 19:00 (Praha, SEČ)
  (function(){ var el=document.getElementById('ofCd'); if(!el) return; var T=Date.UTC(2026,11,6,18,0,0), bs=el.querySelectorAll('b');
    function p2(n){ return (n<10?'0':'')+n; }
    function t(){ var d=Math.max(0,T-Date.now()), s=Math.floor(d/1000); bs[0].textContent=Math.floor(s/86400); bs[1].textContent=p2(Math.floor(s%86400/3600)); bs[2].textContent=p2(Math.floor(s%3600/60)); bs[3].textContent=p2(s%60); }
    t(); setInterval(t,1000); })();

  // NAČÍTÁNÍ DLAŽDIC jako fotky na portfoliu: snový blur do ostrého, postupně
  (function(){ var tiles=[].slice.call(document.querySelectorAll('.pn-grid .pn, .ft-grid .ft')); if(!tiles.length) return;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)) return;
    window.__genOn=true;
    tiles.forEach(function(t){ t.classList.add('dream'); });
    [].slice.call(document.querySelectorAll('.pn-grid, .ft-grid')).forEach(function(g){ var ts=[].slice.call(g.children);
      var io=new IntersectionObserver(function(es){ if(!es[0].isIntersecting) return; io.disconnect();
        ts.forEach(function(t,i){ setTimeout(function(){ t.classList.add('sharp'); setTimeout(function(){ t.dispatchEvent(new CustomEvent('gen:done')); },900); },i*160); }); },{threshold:.3});
      io.observe(g); }); })();


  // RECENZE: stejné sklo na okrajích jako u slideru, jen užší a jemnější (WebGL nad obrázky karet)
  (function(){ var row=document.querySelector('.rv-row'), hs=document.getElementById('hs'), scr=document.getElementById('recenze'); if(!row||!hs) return;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||hs.classList.contains('static')) return;
    var cv=document.createElement('canvas'); cv.className='rv-gl'; cv.setAttribute('aria-hidden','true');
    var gl=cv.getContext('webgl',{antialias:false,premultipliedAlpha:true,alpha:true}); if(!gl) return;
    var VS='attribute vec2 p;varying vec2 vUv;void main(){vUv=p*.5+.5;gl_Position=vec4(p,0.,1.);}';
    var FS=['precision highp float;varying vec2 vUv;uniform sampler2D uTex;uniform vec2 uRes;uniform float uMode,uAspect,uSizeX,uSizeY,uRot,uZoom,uDisp,uRimStart,uRimTan,uTime,uX0,uA,uVy,uBl,uCa;',
      'float ss(float e0,float e1,float x){float k=clamp((x-e0)/(e1-e0),0.,1.);return k*k*(3.-2.*k);}',
      'vec4 tp(vec2 q){if(q.x<0.||q.x>1.||q.y<0.||q.y>1.)return vec4(0.);return texture2D(uTex,q);}',
      'vec4 lens(){vec2 c=vec2(.5);vec2 p=vUv-c;p.x*=uAspect;float ca=cos(uRot),sa=sin(uRot);p=mat2(ca,-sa,sa,ca)*p;',
      'float d=length(p/vec2(uSizeX,uSizeY));vec4 base=tp(vUv);if(d>1.)return base;float nd=clamp(d,0.,1.);',
      'vec2 off=vUv-c;vec2 rd=normalize(off+1e-6);vec2 td=vec2(-rd.y,rd.x);float ang=atan(p.y,p.x);float pull=uZoom*.30*nd*nd;',
      'float rimS=smoothstep(uRimStart,1.,nd);float wave=sin(ang*2.)*.55+sin(ang)*.25;float rs=(uSizeX+uSizeY)*.5;',
      'vec2 b=c+off*(1.-pull)+td*wave*rimS*rs*uRimTan;float rm=smoothstep(.55,1.,nd);vec2 dd=off*uDisp*.004*rm;',
      'vec3 col=vec3(0.),w=vec3(0.);float al=0.,wa=0.;for(int i=0;i<16;i++){float t=float(i)/15.;vec4 s=tp(b+dd*(t-.5));',
      'vec3 ww=vec3(exp(-pow(t/.38,2.)),exp(-pow((t-.5)/.38,2.)),exp(-pow((t-1.)/.38,2.)));col+=s.rgb*ww;w+=ww;al+=s.a*ww.g;wa+=ww.g;}col/=max(w,vec3(.001));al/=max(wa,.001);',
      'float l=dot(col,vec3(.299,.587,.114));col=mix(vec3(l),col,1.+.8*rm);return mix(base,vec4(col,al),smoothstep(1.,.93,d));}',
      'vec4 edge(){vec2 c=vUv*2.-1.;float k=ss(uX0,1.,abs(c.x));float sx=c.x*(1.-uA*k*k);float sy=c.y/(1.+uVy*k);vec2 b=vec2(sx*.5+.5,sy*.5+.5);',
      'float r=uBl*k/uRes.x;float co=uCa*k/uRes.x*sign(c.x);vec4 col=vec4(0.);float ws=0.;float jt=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)-.5;',
      'for(int i=-12;i<=12;i++){float f=(float(i)+jt)/12.;float w=1.-abs(f)*.55;vec2 q=b+vec2(f*r,f*r*.25*uRes.x/uRes.y);vec4 m=tp(q);',
      'col.r+=tp(q+vec2(co,0.)).r*w;col.g+=m.g*w;col.b+=tp(q-vec2(co,0.)).b*w;col.a+=m.a*w;ws+=w;}col/=ws;float l=dot(col.rgb,vec3(.299,.587,.114));return vec4(mix(vec3(l),col.rgb,1.+1.1*k),col.a);}',
      'void main(){vec4 o=uMode<.5?lens():edge();o=clamp(o,0.,1.);o.rgb=min(o.rgb,vec3(o.a));gl_FragColor=o;}'].join('');
    try{ function sh(t,src){ var o=gl.createShader(t); gl.shaderSource(o,src); gl.compileShader(o); if(!gl.getShaderParameter(o,gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(o); return o; }
      var pr=gl.createProgram(); gl.attachShader(pr,sh(gl.VERTEX_SHADER,VS)); gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,FS)); gl.linkProgram(pr); gl.useProgram(pr);
      var bf=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,bf); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
      var lc=gl.getAttribLocation(pr,'p'); gl.enableVertexAttribArray(lc); gl.vertexAttribPointer(lc,2,gl.FLOAT,false,0,0);
      var U={}; 'uRes uMode uAspect uSizeX uSizeY uRot uZoom uDisp uRimStart uRimTan uX0 uA uVy uBl uCa uBg'.split(' ').forEach(function(k){ U[k]=gl.getUniformLocation(pr,k); });
      var tex=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,tex); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
      [gl.TEXTURE_MIN_FILTER,gl.TEXTURE_MAG_FILTER].forEach(function(k){ gl.texParameteri(gl.TEXTURE_2D,k,gl.LINEAR); });
      [gl.TEXTURE_WRAP_S,gl.TEXTURE_WRAP_T].forEach(function(k){ gl.texParameteri(gl.TEXTURE_2D,k,gl.CLAMP_TO_EDGE); });
    }catch(e){ if(window.console) console.warn('rv gl',e); return; }
    var c2=document.createElement('canvas'), x2=c2.getContext('2d'), N=11, imgs=[], ok=0;
    for(var i=0;i<N;i++){ var im=new Image(); im.crossOrigin='anonymous'; im.decoding='async'; im.onload=function(){ ok++; }; im.src='https://jblazek-design.github.io/ai-designer-webinar/assets/revc/c'+String(i+1).padStart(2,'0')+'.webp'; imgs.push(im); }
    row.appendChild(cv); row.classList.add('gl-on');
    var off=0, last=0, raf=0, hover=false, drag=null, SPEED=40, PAD=28;
    function rr(c,x,y,w,h,r){ c.beginPath(); c.moveTo(x+r,y); c.arcTo(x+w,y,x+w,y+h,r); c.arcTo(x+w,y+h,x,y+h,r); c.arcTo(x,y+h,x,y,r); c.arcTo(x,y,x+w,y,r); c.closePath(); }
    function frame(now){ raf=0; var live=hs.classList.contains('live')||hs.classList.contains('full'); if(!live){ last=0; return; }
      var dt=last?Math.min(.05,(now-last)/1000):0; last=now; if(!hover&&!drag) off+=SPEED*dt;
      var card=row.querySelector('.rvc'), CW=card.offsetWidth, CH=card.offsetHeight, G=8, st=CW+G, tot=N*st, W=row.clientWidth, narrowL=row.clientWidth<768; PAD=Math.round(CH*(narrowL?.3:.24))+24; cv.style.top=cv.style.bottom=(-PAD)+'px'; cv.style.height='calc(100% + '+(2*PAD)+'px)'; var H=CH+PAD*2, DPR=Math.min(2,window.devicePixelRatio||1), w=Math.round(W*DPR), h=Math.round(H*DPR);
      if(c2.width!==w||c2.height!==h){ c2.width=w; c2.height=h; cv.width=w; cv.height=h; }
      var bg=getComputedStyle(scr).backgroundColor.match(/\d+/g)||[255,255,255];
      x2.setTransform(DPR,0,0,DPR,0,0); x2.clearRect(0,0,W,H);
      var o=((off%tot)+tot)%tot;
      for(var k=0;k<N;k++){ var x=k*st-o; for(var r=-1;r<=1;r++){ var xx=x+r*tot; if(xx+CW<-20||xx>W+20) continue; var im=imgs[k];
          x2.save(); rr(x2,xx,PAD,CW,CH,8); x2.clip(); x2.fillStyle='#fff'; x2.fillRect(xx,PAD,CW,CH); if(im.complete&&im.naturalWidth) x2.drawImage(im,xx,PAD,CW,CH); x2.restore(); } }
      gl.viewport(0,0,w,h); gl.bindTexture(gl.TEXTURE_2D,tex); gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true); gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,c2);
      var narrow=W<560; gl.uniform2f(U.uRes,w,h); gl.uniform1f(U.uMode,narrowL?0:1); gl.uniform1f(U.uAspect,W/H); gl.uniform1f(U.uSizeX,1.24*CH/H); gl.uniform1f(U.uSizeY,0.82*CW/H); gl.uniform1f(U.uRot,Math.PI/2); gl.uniform1f(U.uZoom,0.4); gl.uniform1f(U.uDisp,26); gl.uniform1f(U.uRimStart,0.578); gl.uniform1f(U.uRimTan,0.3);
      gl.uniform1f(U.uX0,Math.min(0.9,Math.max(0.5,(1.5*CW/2)/(W/2)+0.12))); gl.uniform1f(U.uA,0.24); gl.uniform1f(U.uVy,0.36); gl.uniform1f(U.uBl,58*DPR); gl.uniform1f(U.uCa,30*DPR); gl.uniform3f(U.uBg,bg[0]/255,bg[1]/255,bg[2]/255);
      cv.classList.toggle('lens',narrowL);
      gl.drawArrays(gl.TRIANGLE_STRIP,0,4); raf=requestAnimationFrame(frame); }
    function kick(){ if(!raf) raf=requestAnimationFrame(frame); }
    new MutationObserver(kick).observe(hs,{attributes:true,attributeFilter:['class']});
    row.addEventListener('pointerenter',function(e){ if(e.pointerType==='mouse') hover=true; }); row.addEventListener('pointerleave',function(){ hover=false; });
    row.addEventListener('pointerdown',function(e){ drag={x:e.clientX,o:off}; try{ row.setPointerCapture(e.pointerId); }catch(_){} });
    row.addEventListener('pointermove',function(e){ if(drag){ var sc=row.getBoundingClientRect().width/row.offsetWidth||1; off=drag.o-(e.clientX-drag.x)/sc; } });
    function up(){ drag=null; } row.addEventListener('pointerup',up); row.addEventListener('pointercancel',up);
    kick(); })();



  // STUDENTI: video karty vykreslené do canvasu, skleněné okraje (desktop) / čočka (mobil) jako u recenzí
  aidLazy('#studenti',function(){ var row=document.querySelector('.st-row'), sec=document.getElementById('studenti'), dlg=document.getElementById('stDlg'), vid=document.getElementById('stVid'); if(!row) return;
    var cards=[].slice.call(row.querySelectorAll('.stc'));
    function openV(i){ var c=cards[i]; if(!c||!dlg) return; vid.src=c.dataset.v; vid.poster=c.querySelector('img').src; dlg.showModal(); var pp=vid.play(); if(pp&&pp.catch) pp.catch(function(){}); }
    function closeV(){ vid.pause(); vid.removeAttribute('src'); vid.load(); dlg.close(); }
    cards.forEach(function(c,i){ c.querySelector('.stc-play').addEventListener('click',function(e){ e.stopPropagation(); openV(i); }); });
    dlg.addEventListener('click',function(e){ if(e.target===dlg||e.target.hasAttribute('data-stclose')) closeV(); }); dlg.addEventListener('cancel',function(e){ e.preventDefault(); closeV(); });
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var cv=document.createElement('canvas'); cv.className='st-gl'; cv.setAttribute('aria-hidden','true');
    var gl=cv.getContext('webgl',{antialias:false,premultipliedAlpha:true,alpha:true}); if(!gl) return;
    var VS='attribute vec2 p;varying vec2 vUv;void main(){vUv=p*.5+.5;gl_Position=vec4(p,0.,1.);}';
    var FS=['precision highp float;varying vec2 vUv;uniform sampler2D uTex;uniform vec2 uRes;uniform float uMode,uAspect,uSizeX,uSizeY,uRot,uZoom,uDisp,uRimStart,uRimTan,uTime,uX0,uA,uVy,uBl,uCa;',
      'float ss(float e0,float e1,float x){float k=clamp((x-e0)/(e1-e0),0.,1.);return k*k*(3.-2.*k);}',
      'vec4 tp(vec2 q){if(q.x<0.||q.x>1.||q.y<0.||q.y>1.)return vec4(0.);return texture2D(uTex,q);}',
      'vec4 lens(){vec2 c=vec2(.5);vec2 p=vUv-c;p.x*=uAspect;float ca=cos(uRot),sa=sin(uRot);p=mat2(ca,-sa,sa,ca)*p;',
      'float d=length(p/vec2(uSizeX,uSizeY));vec4 base=tp(vUv);if(d>1.)return base;float nd=clamp(d,0.,1.);',
      'vec2 off=vUv-c;vec2 rd=normalize(off+1e-6);vec2 td=vec2(-rd.y,rd.x);float ang=atan(p.y,p.x);float pull=uZoom*.30*nd*nd;',
      'float rimS=smoothstep(uRimStart,1.,nd);float wave=sin(ang*2.)*.55+sin(ang)*.25;float rs=(uSizeX+uSizeY)*.5;',
      'vec2 b=c+off*(1.-pull)+td*wave*rimS*rs*uRimTan;float rm=smoothstep(.55,1.,nd);vec2 dd=off*uDisp*.004*rm;',
      'vec3 col=vec3(0.),w=vec3(0.);float al=0.,wa=0.;for(int i=0;i<16;i++){float t=float(i)/15.;vec4 s=tp(b+dd*(t-.5));',
      'vec3 ww=vec3(exp(-pow(t/.38,2.)),exp(-pow((t-.5)/.38,2.)),exp(-pow((t-1.)/.38,2.)));col+=s.rgb*ww;w+=ww;al+=s.a*ww.g;wa+=ww.g;}col/=max(w,vec3(.001));al/=max(wa,.001);',
      'float l=dot(col,vec3(.299,.587,.114));col=mix(vec3(l),col,1.+.8*rm);return mix(base,vec4(col,al),smoothstep(1.,.93,d));}',
      'vec4 edge(){vec2 c=vUv*2.-1.;float k=ss(uX0,1.,abs(c.x));float sx=c.x*(1.-uA*k*k);float sy=c.y/(1.+uVy*k);vec2 b=vec2(sx*.5+.5,sy*.5+.5);',
      'float r=uBl*k/uRes.x;float co=uCa*k/uRes.x*sign(c.x);vec4 col=vec4(0.);float ws=0.;float jt=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)-.5;',
      'for(int i=-12;i<=12;i++){float f=(float(i)+jt)/12.;float w=1.-abs(f)*.55;vec2 q=b+vec2(f*r,f*r*.25*uRes.x/uRes.y);vec4 m=tp(q);',
      'col.r+=tp(q+vec2(co,0.)).r*w;col.g+=m.g*w;col.b+=tp(q-vec2(co,0.)).b*w;col.a+=m.a*w;ws+=w;}col/=ws;float l=dot(col.rgb,vec3(.299,.587,.114));return vec4(mix(vec3(l),col.rgb,1.+1.1*k),col.a);}',
      'void main(){vec4 o=uMode<.5?lens():edge();o=clamp(o,0.,1.);o.rgb=min(o.rgb,vec3(o.a));gl_FragColor=o;}'].join('');
    try{ function sh(t,src){ var o=gl.createShader(t); gl.shaderSource(o,src); gl.compileShader(o); if(!gl.getShaderParameter(o,gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(o); return o; }
      var pr=gl.createProgram(); gl.attachShader(pr,sh(gl.VERTEX_SHADER,VS)); gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,FS)); gl.linkProgram(pr); gl.useProgram(pr);
      var bf=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,bf); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
      var lc=gl.getAttribLocation(pr,'p'); gl.enableVertexAttribArray(lc); gl.vertexAttribPointer(lc,2,gl.FLOAT,false,0,0);
      var U={}; 'uRes uMode uAspect uSizeX uSizeY uRot uZoom uDisp uRimStart uRimTan uX0 uA uVy uBl uCa uBg'.split(' ').forEach(function(k){ U[k]=gl.getUniformLocation(pr,k); });
      var tex=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,tex); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
      [gl.TEXTURE_MIN_FILTER,gl.TEXTURE_MAG_FILTER].forEach(function(k){ gl.texParameteri(gl.TEXTURE_2D,k,gl.LINEAR); });
      [gl.TEXTURE_WRAP_S,gl.TEXTURE_WRAP_T].forEach(function(k){ gl.texParameteri(gl.TEXTURE_2D,k,gl.CLAMP_TO_EDGE); });
    }catch(e){ if(window.console) console.warn('st gl',e); return; }
    var N=cards.length, imgs=cards.map(function(c){ var im=new Image(); im.crossOrigin='anonymous'; im.decoding='async'; im.src=c.querySelector('img').getAttribute('src'); return im; });
    var data=cards.map(function(c){ return {h:c.querySelector('b').textContent, n:c.querySelector('.stc-n').textContent, r:c.querySelector('.stc-r').textContent.trim(), a:c.querySelector('.stc-r').firstChild.textContent, b:c.querySelector('.stc-r').lastChild.textContent}; });
    var c2=document.createElement('canvas'), x2=c2.getContext('2d');
    row.appendChild(cv); row.classList.add('gl-on');
    var off=0, last=0, raf=0, hover=false, drag=null, vis=false, SPEED=36, FF=getComputedStyle(document.body).fontFamily;
    function rr(c,x,y,w,h,r){ c.beginPath(); c.moveTo(x+r,y); c.arcTo(x+w,y,x+w,y+h,r); c.arcTo(x+w,y+h,x,y+h,r); c.arcTo(x,y+h,x,y,r); c.arcTo(x,y,x+w,y,r); c.closePath(); }
    function wrap(c,t,x,y,mw,lh){ var ws=t.split(' '), line='', yy=y; for(var i=0;i<ws.length;i++){ var tt=line?line+' '+ws[i]:ws[i]; if(c.measureText(tt).width>mw&&line){ c.fillText(line,x,yy); line=ws[i]; yy+=lh; } else line=tt; } c.fillText(line,x,yy); }
    function geo(){ var CW=cards[0].offsetWidth, CH=cards[0].offsetHeight, G=8, W=row.clientWidth, narrow=false, small=W<768, PAD=Math.round(CH*.24)+24; return {CW:CW,CH:CH,G:G,st:CW+G,tot:N*(CW+G),W:W,PAD:PAD,narrow:narrow,small:small}; }
    function frame(now){ raf=0; if(!vis){ last=0; return; }
      var dt=last?Math.min(.05,(now-last)/1000):0; last=now; if(!hover&&!drag&&!(dlg&&dlg.open)) off+=SPEED*dt;
      var g=geo(), CW=g.CW, CH=g.CH, PAD=g.PAD, W=g.W, H=CH+PAD*2, DPR=Math.min(2,window.devicePixelRatio||1), w=Math.round(W*DPR), h=Math.round(H*DPR);
      row.style.height=CH+'px'; cv.style.top=(-PAD)+'px'; cv.style.height=H+'px';
      if(c2.width!==w||c2.height!==h){ c2.width=w; c2.height=h; cv.width=w; cv.height=h; }
      var pg=document.getElementById('page')||document.body, bg=getComputedStyle(pg).backgroundColor.match(/\d+/g)||[248,248,248];
      x2.setTransform(DPR,0,0,DPR,0,0); x2.clearRect(0,0,W,H);
      var o=((off%g.tot)+g.tot)%g.tot, x0=(W-CW)/2;
      for(var k=0;k<N;k++){ for(var r=-1;r<=1;r++){ var xx=x0+k*g.st-o+r*g.tot; if(xx+CW<-20||xx>W+20) continue; var im=imgs[k], d=data[k], y=PAD;
          x2.save(); rr(x2,xx,y,CW,CH,8); x2.clip(); x2.fillStyle='#2a2a2a'; x2.fillRect(xx,y,CW,CH);
          if(im.complete&&im.naturalWidth){ var s=Math.max(CW/im.naturalWidth,CH/im.naturalHeight), iw=im.naturalWidth*s, ih=im.naturalHeight*s; x2.drawImage(im,xx+(CW-iw)/2,y+(CH-ih)/2,iw,ih); }
          var gt=x2.createLinearGradient(0,y,0,y+CH*.4); gt.addColorStop(0,'rgba(0,0,0,.5)'); gt.addColorStop(1,'rgba(0,0,0,0)'); x2.fillStyle=gt; x2.fillRect(xx,y,CW,CH*.4);
          var gb=x2.createLinearGradient(0,y+CH,0,y+CH*.66); gb.addColorStop(0,'rgba(0,0,0,.55)'); gb.addColorStop(1,'rgba(0,0,0,0)'); x2.fillStyle=gb; x2.fillRect(xx,y+CH*.66,CW,CH*.34);
          x2.fillStyle='#fff'; x2.textBaseline='top'; x2.font='500 16px '+FF; wrap(x2,d.h,xx+16,y+16,CW-32,22);
          x2.font='500 14px '+FF; x2.fillText(d.n,xx+16,y+CH-56);
          x2.font='500 11px '+FF; x2.globalAlpha=.85; x2.fillText(d.a,xx+16,y+CH-32); var aw=x2.measureText(d.a).width, bw=x2.measureText(d.b).width; x2.fillText(d.b,xx+CW-16-bw,y+CH-32);
          var ax0=xx+16+aw+10, ax1=xx+CW-16-bw-10, ay=y+CH-27; if(ax1-ax0>24){ x2.strokeStyle='rgba(255,255,255,.75)'; x2.lineWidth=1.2; x2.lineCap='round'; x2.lineJoin='round'; x2.beginPath(); x2.moveTo(ax0,ay); x2.lineTo(ax1,ay); x2.moveTo(ax1-4.5,ay-4); x2.lineTo(ax1,ay); x2.lineTo(ax1-4.5,ay+4); x2.stroke(); } x2.globalAlpha=1;
          x2.fillStyle='#fff'; x2.beginPath(); x2.arc(xx+CW/2,y+CH/2,24,0,Math.PI*2); x2.fill(); x2.fillStyle='#1d1d1d'; x2.beginPath(); var cx=xx+CW/2-3, cy=y+CH/2; x2.moveTo(cx-4,cy-8); x2.lineTo(cx-4,cy+8); x2.lineTo(cx+9,cy); x2.closePath(); x2.fill();
          x2.restore(); } }
      gl.viewport(0,0,w,h); gl.bindTexture(gl.TEXTURE_2D,tex); gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true); gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,c2);
      gl.uniform2f(U.uRes,w,h); gl.uniform1f(U.uMode,g.narrow?0:1); gl.uniform1f(U.uAspect,W/H); gl.uniform1f(U.uSizeX,1.12*CH/H); gl.uniform1f(U.uSizeY,0.7*CW/H); gl.uniform1f(U.uRot,Math.PI/2); gl.uniform1f(U.uZoom,0.4); gl.uniform1f(U.uDisp,26); gl.uniform1f(U.uRimStart,0.578); gl.uniform1f(U.uRimTan,0.3);
      gl.uniform1f(U.uX0,g.small?0.8:Math.min(0.9,Math.max(0.72,(2.4*CW/2)/(W/2)+0.12))); gl.uniform1f(U.uA,0.24); gl.uniform1f(U.uVy,0.36); gl.uniform1f(U.uBl,58*DPR); gl.uniform1f(U.uCa,30*DPR); gl.uniform3f(U.uBg,bg[0]/255,bg[1]/255,bg[2]/255);
      cv.classList.toggle('lens',g.narrow); gl.drawArrays(gl.TRIANGLE_STRIP,0,4); raf=requestAnimationFrame(frame); }
    function kick(){ if(!raf) raf=requestAnimationFrame(frame); }
    if('IntersectionObserver' in window) new IntersectionObserver(function(es){ vis=es[0].isIntersecting; if(vis) kick(); },{rootMargin:'100px'}).observe(row); else { vis=true; kick(); }
    row.addEventListener('pointerenter',function(e){ if(e.pointerType==='mouse') hover=true; }); row.addEventListener('pointerleave',function(){ hover=false; });
    row.addEventListener('pointerdown',function(e){ drag={x:e.clientX,o:off,m:0}; try{ row.setPointerCapture(e.pointerId); }catch(_){} });
    row.addEventListener('pointermove',function(e){ if(drag){ var dx=e.clientX-drag.x; drag.m=Math.max(drag.m,Math.abs(dx)); off=drag.o-dx; } });
    row.addEventListener('pointerup',function(e){ var d=drag; drag=null; if(!d||d.m>5) return; var g=geo(), rc=row.getBoundingClientRect(), x=e.clientX-rc.left, o=((off%g.tot)+g.tot)%g.tot, rel=x-(g.W-g.CW)/2+o; rel=((rel%g.tot)+g.tot)%g.tot; var i=Math.floor(rel/g.st); if(rel-i*g.st<=g.CW) openV(i); });
    row.addEventListener('pointercancel',function(){ drag=null; });
    window.addEventListener('resize',kick); kick(); });


  // PATIČKA: ilustrace dole, přes ně vodorovné sklo (stejný shader jako okraje sliderů, jen po ose Y), nad tím tagy
  aidLazy('#foIll',function(){ var box=document.getElementById('foIll'); if(!box) return; if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var imgs=[].slice.call(box.querySelectorAll('img'));
    var cv=document.createElement('canvas'), gl=cv.getContext('webgl',{antialias:false,premultipliedAlpha:false}); if(!gl) return;
    var VS='attribute vec2 p;varying vec2 vUv;void main(){vUv=p*.5+.5;gl_Position=vec4(p,0.,1.);}';
    var FS=['precision highp float;varying vec2 vUv;uniform sampler2D uTex;uniform vec2 uRes;uniform float uHb,uA,uVx,uBl,uCa;uniform vec3 uBg;',
      'float ss(float e0,float e1,float x){float k=clamp((x-e0)/(e1-e0),0.,1.);return k*k*(3.-2.*k);}',
      'vec3 tp(vec2 q){if(q.x<0.||q.x>1.||q.y<0.||q.y>1.)return uBg;return texture2D(uTex,q).rgb;}',
      'void main(){float k=1.-ss(0.,uHb,vUv.y);float sy=vUv.y+uA*uHb*k*k;float sx=.5+(vUv.x-.5)/(1.+uVx*k);vec2 b=vec2(sx,sy);',
      'float r=uBl*k/uRes.y;float co=uCa*k/uRes.y;vec3 col=vec3(0.);float ws=0.;float jt=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)-.5;',
      'for(int i=-10;i<=10;i++){float f=(float(i)+jt)/10.;float w=1.-abs(f)*.55;vec2 q=b+vec2(f*r*.25*uRes.y/uRes.x,f*r);',
      'col.r+=tp(q+vec2(0.,co)).r*w;col.g+=tp(q).g*w;col.b+=tp(q-vec2(0.,co)).b*w;ws+=w;}col/=ws;float l=dot(col,vec3(.299,.587,.114));col=mix(vec3(l),col,1.+.9*k);',
      'gl_FragColor=vec4(clamp(col,0.,1.),1.);}'].join('');
    try{ function sh(t,src){ var o=gl.createShader(t); gl.shaderSource(o,src); gl.compileShader(o); if(!gl.getShaderParameter(o,gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(o); return o; }
      var pr=gl.createProgram(); gl.attachShader(pr,sh(gl.VERTEX_SHADER,VS)); gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,FS)); gl.linkProgram(pr); gl.useProgram(pr);
      var bf=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,bf); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
      var lc=gl.getAttribLocation(pr,'p'); gl.enableVertexAttribArray(lc); gl.vertexAttribPointer(lc,2,gl.FLOAT,false,0,0);
      var U={}; 'uRes uHb uA uVx uBl uCa uBg'.split(' ').forEach(function(k){ U[k]=gl.getUniformLocation(pr,k); });
      var tex=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,tex); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
      [gl.TEXTURE_MIN_FILTER,gl.TEXTURE_MAG_FILTER].forEach(function(k){ gl.texParameteri(gl.TEXTURE_2D,k,gl.LINEAR); });
      [gl.TEXTURE_WRAP_S,gl.TEXTURE_WRAP_T].forEach(function(k){ gl.texParameteri(gl.TEXTURE_2D,k,gl.CLAMP_TO_EDGE); });
    }catch(e){ if(window.console) console.warn('fo gl',e); return; }
    // animované WebP: canvas drawImage kreslí jen 1. snímek, takže snímky dekódujeme přes ImageDecoder (WebCodecs); bez něj zůstane živé <img> + CSS blur
    if(!('ImageDecoder' in window)) return;
    var dec=imgs.map(function(im){ var o={im:im,n:0,i:0,cur:null,next:0,busy:false,ok:false};
      fetch(im.getAttribute('src')).then(function(r){ return r.arrayBuffer(); }).then(function(buf){ o.d=new ImageDecoder({data:buf,type:'image/webp'}); return o.d.tracks.ready; }).then(function(){ o.n=o.d.tracks.selectedTrack.frameCount||1; o.ok=true; }).catch(function(){});
      return o; });
    function step(now){ dec.forEach(function(o){ if(!o.ok||o.busy||now<o.next) return; o.busy=true;
      o.d.decode({frameIndex:o.i}).then(function(res){ if(o.cur) o.cur.close(); o.cur=res.image; o.next=now+Math.max(16,(o.cur.duration||50000)/1000); o.i=(o.i+1)%o.n; o.busy=false; }).catch(function(){ o.busy=false; o.ok=false; }); }); }
    var c2=document.createElement('canvas'), x2=c2.getContext('2d');
    box.appendChild(cv); box.classList.add('gl-on');
    function draw(){ var W=box.clientWidth, H=box.clientHeight; if(!W||!H) return; var DPR=Math.min(2,window.devicePixelRatio||1), w=Math.round(W*DPR), h=Math.round(H*DPR);
      if(c2.width!==w||c2.height!==h){ c2.width=w; c2.height=h; cv.width=w; cv.height=h; }
      var pg=document.getElementById('page')||document.body, bg=getComputedStyle(pg).backgroundColor.match(/\d+/g)||[248,248,248], br=box.getBoundingClientRect();
      x2.setTransform(DPR,0,0,DPR,0,0); x2.fillStyle='rgb('+bg[0]+','+bg[1]+','+bg[2]+')'; x2.fillRect(0,0,W,H);
      dec.forEach(function(o){ var im=o.im, src=o.cur||((im.complete&&im.naturalWidth)?im:null); if(!src) return; var r=im.getBoundingClientRect(); x2.drawImage(src,r.left-br.left,r.top-br.top,r.width,r.height); });
      var fu=H/640, band=Math.max(64,190*fu);
      gl.viewport(0,0,w,h); gl.bindTexture(gl.TEXTURE_2D,tex); gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true); gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,c2);
      gl.uniform2f(U.uRes,w,h); gl.uniform1f(U.uHb,Math.min(1,band/H)); gl.uniform1f(U.uA,0.18); gl.uniform1f(U.uVx,0.04); gl.uniform1f(U.uBl,36*DPR*Math.min(1,fu*1.4)); gl.uniform1f(U.uCa,18*DPR*Math.min(1,fu*1.4)); gl.uniform3f(U.uBg,bg[0]/255,bg[1]/255,bg[2]/255);
      gl.drawArrays(gl.TRIANGLE_STRIP,0,4); }
    var t=0; function later(){ clearTimeout(t); t=setTimeout(draw,60); }
    imgs.forEach(function(im){ if(!im.complete) im.addEventListener('load',later); });
    window.addEventListener('resize',later);
    if('ResizeObserver' in window) new ResizeObserver(later).observe(box);
    // animované WebP: dokud je patička vidět, překresluje se ~30 fps, takže sklem prochází i pohyb ilustrací
    var vis=false, raf=0, lt=0; function loop(now){ raf=0; if(!vis) return; step(now); if(now-lt>=33){ lt=now; draw(); } raf=requestAnimationFrame(loop); }
    if('IntersectionObserver' in window) new IntersectionObserver(function(es){ vis=es[0].isIntersecting; if(vis&&!raf) raf=requestAnimationFrame(loop); },{rootMargin:'100px'}).observe(box); else { vis=true; raf=requestAnimationFrame(loop); }
    draw(); });

  // NABÍDKA: kroužek s videem se scrollem roztáhne přes celou sekci a odmaskuje obsah
  (function(){ var sec=document.getElementById('nabidka'), box=document.getElementById('ofBox'); if(!sec||!box) return; var tools=document.querySelector('.tools');
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){ sec.classList.add('static','open'); return; }
    function mob(){ return sec.clientWidth<560; }
    
    function cl(x){ return x<0?0:x>1?1:x; } function eio(t){ return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2; }
    var ring=document.getElementById('ofRing');
    function upd(){
      var vh=innerHeight, r=box.getBoundingClientRect(), W=box.clientWidth, H=box.clientHeight;
      var p=cl((vh-r.top)/vh), e=p*p*(3-2*p);
      var ix=Math.min(W*0.08,120)*(1-e), iy=Math.min(H*0.06,56)*(1-e), rad=Math.min(W,H)*0.42*(1-e)+12*e;
      box.style.clipPath=e>=0.999?'none':'inset('+iy.toFixed(1)+'px '+ix.toFixed(1)+'px round '+rad.toFixed(1)+'px)';
      box.style.setProperty('--vs','1'); box.style.setProperty('--vb',(10*(1-e)).toFixed(2)+'px');
      var c=cl((p-0.3)/0.55), ce=1-Math.pow(1-c,3); box.style.setProperty('--co',cl(c*1.6).toFixed(3)); box.style.setProperty('--cf',ce>=0.999?'none':'blur('+(28*(1-ce)).toFixed(2)+'px)'); box.style.setProperty('--csc',(1.06-0.06*ce).toFixed(4)); sec.classList.toggle('open',c>0.6); }
    window.addEventListener('scroll',upd,{passive:true}); window.addEventListener('resize',upd); upd(); })();


  // RADAR: paprsek obíhá, a když přejede přes člověka, ten se rozsvítí
  (function(){ var rd=document.getElementById('rd'); if(!rd) return; if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var us=[].slice.call(rd.querySelectorAll('.rd-u')), CX=126, CY=128, T=10000, t0=performance.now(), last={}, vis=false;
    var ang=us.map(function(u){ var a=Math.atan2(+u.dataset.y-CY,+u.dataset.x-CX)*180/Math.PI; return (a+90+360)%360; });
    if('IntersectionObserver' in window) new IntersectionObserver(function(es){ vis=es[0].isIntersecting; if(vis) tick(); },{threshold:.1}).observe(rd); else vis=true;
    function tick(){ if(!vis) return; var a=((performance.now()-t0)%T)/T*360;
      us.forEach(function(u,i){ var d=(a-ang[i]+360)%360; if(d<8&&!last[i]){ last[i]=1; u.classList.add('ping','hit'); setTimeout(function(){ u.classList.remove('hit'); },1600); setTimeout(function(){ u.classList.remove('ping'); },2200); } if(d>20) last[i]=0; });
      requestAnimationFrame(tick); }
  })();
  // SLOŽKA: na dotykových zařízeních se otevře klepnutím
  (function(){ var fd=document.getElementById('fd'); if(!fd) return; fd.parentNode.addEventListener('click',function(){ fd.classList.toggle('open'); }); })();

  // BALÍČEK KARET (jako bencho card-stack): vějíř po načtení dlaždice, hover zvedne, klik do středu, klik vedle zpět
  (function(){ var deck=document.getElementById('deck'); if(!deck) return;
    var cards=[].slice.call(deck.querySelectorAll('.dk-c')), n=cards.length, order=cards.map(function(c,i){ return i; }), sel=-1, fanned=false;
    var DMAX=+deck.dataset.dw||134, RAT=+deck.dataset.ratio||1.33;
    function size(){ var W=deck.parentNode.clientWidth, H=deck.parentNode.clientHeight, dw=Math.round(Math.min(DMAX,(W-40)*0.72,(H-24)/RAT)); deck.style.setProperty('--dw',dw+'px'); deck.style.setProperty('--dh',Math.round(dw*RAT)+'px'); return dw; }
    function set(c,x,y,r,s,z){ c.style.setProperty('--x',x.toFixed(1)+'px'); c.style.setProperty('--y',y.toFixed(1)+'px'); c.style.setProperty('--r',r.toFixed(1)+'deg'); c.style.setProperty('--s',s); c.style.zIndex=z; }
    function lay(){ var dw=size();
      if(sel<0){ order.forEach(function(ci,j){ var t=j/(n-1), c=cards[ci]; c.classList.remove('sel');
          if(fanned) set(c,(-0.3+0.5*t)*dw,-8+12*t,-10+16*t,1,j+1); else set(c,(t-1)*3+0.1*dw,(1-t)*2,4+2*t,1,j+1); }); }
      else { var rest=order.filter(function(ci){ return ci!==sel; });
        rest.forEach(function(ci,j){ var t=rest.length>1?j/(rest.length-1):.5; set(cards[ci],(-0.45+0.9*t)*dw,8,-16+32*t,.88,j+1); cards[ci].classList.remove('sel'); });
        set(cards[sel],0,-4,0,1.08,50); cards[sel].classList.add('sel'); } }
    function fan(){ if(fanned) return; deck.classList.add('ready'); setTimeout(function(){ fanned=true; lay(); },150); }
    lay();
    var tile=deck.closest('.pn,.ft'); if(tile) tile.addEventListener('gen:done',fan);
    if(!window.__genOn){ if('IntersectionObserver' in window){ var io=new IntersectionObserver(function(es){ if(es[0].isIntersecting){ io.disconnect(); setTimeout(fan,300); } },{threshold:.55}); io.observe(deck.parentNode); } else fan(); }
    function pick(ci){ if(!fanned) return; if(sel===ci){ back(); return; } if(sel>=0) back(true); sel=ci; lay(); }
    function back(silent){ if(sel<0) return; order=order.filter(function(x){ return x!==sel; }).concat([sel]); sel=-1; if(!silent) lay(); }
    cards.forEach(function(c,ci){ c.addEventListener('click',function(e){ e.stopPropagation(); pick(ci); }); });
    document.addEventListener('click',function(){ if(sel>=0) back(); });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&sel>=0) back(); });
    window.addEventListener('resize',lay);
  })();

  // TIME SCRUBBER 1:1 jako bencho: tiky po 5 min, čtvrthodiny delší, hodiny nejdelší, 12h formát; sám ujíždí, jde táhnout a hodit
  (function(){ var ts=document.getElementById('ts'); if(!ts) return;
    var strip=document.getElementById('tsStrip'), out=document.getElementById('tsTime'), ap=document.getElementById('tsAp');
    var PX=1.7, MIN=5*60, MAX=25*60, STEP=15, START=9*60+30, v=START, tgt=v, raf=0, drag=null, idleT=0, wait=false, last='', inView=false;
    var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function h12(hh){ hh=((hh%24)+24)%24; return {h:(hh%12)||12, ap:hh<12?'AM':'PM'}; }
    var h=''; for(var m=MIN;m<=MAX;m+=5){ var x=((m-MIN)*PX).toFixed(1), cls=m%60===0?'h':(m%15===0?'q':''); h+='<i'+(cls?' class="'+cls+'"':'')+' style="left:'+x+'px"></i>'; if(m%60===0){ var t=h12(m/60); h+='<b style="left:'+x+'px">'+t.h+' '+t.ap+'</b>'; } }
    strip.innerHTML=h;
    function fmt(m){ var mm=((Math.round(m/STEP)*STEP)%1440+1440)%1440, t=h12(Math.floor(mm/60)); return {s:t.h+':'+String(mm%60).padStart(2,'0'), ap:t.ap}; }
    function digits(o){ var t=o.s; if(out.children.length!==t.length){ out.innerHTML=''; for(var i=0;i<t.length;i++){ var d=document.createElement('span'); d.className='dg'+(t[i]===':'?' col':''); d.innerHTML='<span></span>'; d.lastChild.textContent=t[i]; out.appendChild(d); } last=t; }
      else for(var k=0;k<t.length;k++){ if(t[k]===last[k]) continue; var d2=out.children[k], ol=d2.lastChild; ol.className='out'; var nw=document.createElement('span'); nw.className='in'; nw.textContent=t[k]; d2.appendChild(nw); (function(ol){ setTimeout(function(){ if(ol.parentNode) ol.remove(); },430); })(ol); }
      last=t; ap.textContent=o.ap; ts.setAttribute('aria-valuetext',t+' '+o.ap); }
    function render(){ strip.style.transform='translate3d('+(-(v-MIN)*PX).toFixed(1)+'px,0,0)'; digits(fmt(v)); }
    function frame(){ raf=0; if(!drag){ v+=(tgt-v)*0.12; if(Math.abs(tgt-v)<0.05) v=tgt; } render(); if(drag||v!==tgt) raf=requestAnimationFrame(frame); }
    function kick(){ if(!raf) raf=requestAnimationFrame(frame); }
    function clamp(x){ return Math.max(MIN+60,Math.min(MAX-60,x)); }
    function snap(x){ return clamp(Math.round(x/STEP)*STEP); }
    setInterval(function(){ if(!inView||drag||rm||performance.now()<idleT||wait) return; if(tgt>=23*60){ wait=true; setTimeout(function(){ tgt=START; wait=false; kick(); },2200); return; } tgt=snap(tgt+STEP); kick(); },1300);
    if('IntersectionObserver' in window) new IntersectionObserver(function(es){ inView=es[0].isIntersecting; },{threshold:.4}).observe(ts); else inView=true;
    var vx=0, lx=0, lt=0;
    ts.addEventListener('pointerdown',function(e){ drag={x:e.clientX,v:v}; lx=e.clientX; lt=performance.now(); vx=0; try{ ts.setPointerCapture(e.pointerId); }catch(_){} kick(); });
    ts.addEventListener('pointermove',function(e){ if(!drag) return; var now=performance.now(), dt=Math.max(1,now-lt); vx=0.8*vx+0.2*((e.clientX-lx)/dt); lx=e.clientX; lt=now; v=clamp(drag.v-(e.clientX-drag.x)/PX); tgt=v; kick(); });
    function up(){ if(!drag) return; drag=null; tgt=snap(v-vx*260/PX); idleT=performance.now()+6000; kick(); }
    ts.addEventListener('pointerup',up); ts.addEventListener('pointercancel',up);
    ts.addEventListener('keydown',function(e){ if(e.key==='ArrowRight'||e.key==='ArrowLeft'){ e.preventDefault(); tgt=snap(tgt+(e.key==='ArrowRight'?STEP:-STEP)); idleT=performance.now()+6000; kick(); } });
    render(); })();

  // SKLÁDANÁ BROŽURA
  (function(){ var sec=document.getElementById('recenze'), stage=document.getElementById('foldStage'), screen=document.getElementById('foldScreen'); if(!sec||!stage||!screen) return;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var panels=[].slice.call(screen.querySelectorAll('.fold-panel')), shades=panels.map(function(p){ return p.querySelector('i'); }), num=document.getElementById('foldNum');
    var n=panels.length, P=380, H=390, MAX=72*Math.PI/180, f=0, ft=0, raf=0, last=0;
    function size(){ var w=sec.clientWidth; P=Math.round(Math.max(200,Math.min(340,w*0.235))); if(w<560) P=Math.round(w*0.62); H=Math.round(P*471/459);
      stage.style.setProperty('--pw',P+'px'); stage.style.setProperty('--ph',H+'px'); }
    function ease(t){ return t<0?0:t>1?1:t*t*(3-2*t); }
    function draw(){ var xs=[0], th=[];
      for(var i=0;i<n;i++){ var d=Math.abs(i+0.5-(f+0.5)); th[i]=MAX*ease((d-0.45)/1.6); }
      var X=[0], Z=[0];
      for(i=0;i<n;i++){ var s=(i%2?1:-1); X[i+1]=X[i]+P*Math.cos(th[i]); Z[i+1]=Z[i]+s*P*Math.sin(th[i]); }
      var fi=Math.max(0,Math.min(n-1,Math.floor(f))), fr=f-fi, cx=X[fi]+(X[fi+1]-X[fi])*(0.5+fr*0) , cz=Z[fi]+(Z[fi+1]-Z[fi])*0.5;
      var k=Math.max(0,Math.min(n-1,f)), ki=Math.min(n-1,Math.floor(k)), kf=k-ki;
      var mx0=(X[ki]+X[ki+1])/2, mz0=(Z[ki]+Z[ki+1])/2, mx1=ki+1<n?(X[ki+1]+X[ki+2])/2:mx0, mz1=ki+1<n?(Z[ki+1]+Z[ki+2])/2:mz0;
      cx=mx0+(mx1-mx0)*kf; cz=mz0+(mz1-mz0)*kf;
      for(i=0;i<n;i++){ var s2=(i%2?1:-1), mx=(X[i]+X[i+1])/2-cx, mz=(Z[i]+Z[i+1])/2-cz, a=th[i];
        panels[i].style.transform='translate3d('+mx.toFixed(1)+'px,0,'+mz.toFixed(1)+'px) rotateY('+(-s2*a).toFixed(4)+'rad)';
        shades[i].style.opacity=(Math.sin(a)*(s2>0?0.28:0.08)).toFixed(3); }
      if(num){ var c=Math.round(f)+1; num.textContent=(c<10?'0':'')+c; } }
    var drag=null, vel=0, prevB=document.getElementById('foldPrev'), nextB=document.getElementById('foldNext');
    function clampF(x){ return Math.max(0,Math.min(n-1,x)); }
    function ui(){ var c=Math.round(ft); if(prevB) prevB.disabled=c<=0; if(nextB) nextB.disabled=c>=n-1; }
    function loop(now){ raf=0; var dt=last?Math.min(64,now-last):16; last=now;
      if(!drag){ f+=(ft-f)*(1-Math.exp(-dt/140)); if(Math.abs(ft-f)<0.0005) f=ft; }
      draw(); if(drag||f!==ft) raf=requestAnimationFrame(loop); else last=0; }
    function kick(){ if(!raf) raf=requestAnimationFrame(loop); }
    function go(i){ ft=clampF(Math.round(i)); ui(); kick(); }
    stage.addEventListener('pointerdown',function(e){ drag={x:e.clientX,f:f,t:performance.now(),lx:e.clientX}; vel=0; stage.setPointerCapture&&stage.setPointerCapture(e.pointerId); kick(); });
    stage.addEventListener('pointermove',function(e){ if(!drag) return; var now=performance.now(), dx=e.clientX-drag.x;
      f=Math.max(-0.4,Math.min(n-0.6,drag.f-dx/(P*0.9))); ft=f;
      var dtm=Math.max(1,now-drag.t); vel=0.8*vel+0.2*(-(e.clientX-drag.lx)/(P*0.9))/dtm; drag.t=now; drag.lx=e.clientX; });
    function end(){ if(!drag) return; drag=null; go(f+vel*260); }
    stage.addEventListener('pointerup',end); stage.addEventListener('pointercancel',end);
    stage.addEventListener('keydown',function(e){ if(e.key==='ArrowRight'){ go(ft+1); e.preventDefault(); } if(e.key==='ArrowLeft'){ go(ft-1); e.preventDefault(); } });
    if(prevB) prevB.addEventListener('click',function(){ go(ft-1); }); if(nextB) nextB.addEventListener('click',function(){ go(ft+1); });
    function relayout(){ size(); draw(); ui(); }
    window.addEventListener('resize',relayout); if(window.ResizeObserver) new ResizeObserver(relayout).observe(sec); f=ft=2; relayout(); window.__fold={go:go}; })();
  aidLazy('#cflow',function(){ var cf=document.getElementById('cflow'); if(!cf) return;
    var stage=cf.querySelector('.cf-stage'), src=document.getElementById('cfSrc'), cap=document.getElementById('cfCap'), tpl=[].slice.call(src.querySelectorAll('.cf-card')), tabs=[].slice.call(cf.querySelectorAll('.cf-tab')), arrows=cf.querySelectorAll('[data-cf]');
    var n=tpl.length, GAP=40, CW=640, CH=400, scroll=0, target=0, raf=0, drag=null, moved=false, slots=[], mode='auto', FW=112;
    function eff(){ return mode==='auto'?(stage.clientWidth<768?'lens':'edge'):mode; }
    var useGL=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function wrapIdx(i){ return ((i%n)+n)%n; }
    function step(){ return CW+GAP; }
    function centerIdx(){ return Math.round(scroll/step()); }
    function go(i){ var cur=scroll/step(); var k=Math.round(cur); var tgt=k+((wrapIdx(i)-wrapIdx(k)+n+n/2)%n)-n/2; target=tgt*step(); if(!useGL||!gl) target=Math.max(0,Math.min(n-1,i))*step(); kick(); }
    function goRel(d){ var k=Math.round(target/step())+d; if(!gl) k=Math.max(0,Math.min(n-1,k)); target=k*step(); kick(); }
    // ---------- DOM fallback (bez WebGL): rovné karty se snapem ----------
    function buildSlots(){ slots.forEach(function(s){ s.remove(); }); slots=[]; var W=stage.clientWidth, cw=Math.min(778,Math.round(W*0.86));
      tpl.forEach(function(card,i){ var sl=document.createElement('div'); sl.className='cf-slot'; sl.setAttribute('aria-hidden','true'); sl.style.width=cw+'px'; sl.style.marginLeft=(-cw/2)+'px';
        var c=card.cloneNode(true); c.style.width='100%'; c.style.left='0'; sl.appendChild(c); sl.addEventListener('click',function(){ if(!moved) go(i); }); stage.appendChild(sl); slots.push(sl); }); }
    // ---------- WebGL ----------
    var gl=null, glc=null, c2=null, x2=null, tex=null, U={}, DPR=1, imgs=[], t0=performance.now();
    var VS='attribute vec2 p;varying vec2 vUv;void main(){vUv=p*.5+.5;gl_Position=vec4(p,0.,1.);}';
    /* Čočka: upraveno podle Liquid Glass Carousel (Osmo / Yousuf Soomro, MIT). Okraje: vlastní. */
    var FS=['precision highp float;varying vec2 vUv;uniform sampler2D uTex;uniform vec2 uRes;uniform float uMode,uAspect,uSizeX,uSizeY,uRot,uZoom,uDisp,uRimStart,uRimTan,uTime,uX0,uA,uVy,uBl,uCa;',
      'float ss(float e0,float e1,float x){float k=clamp((x-e0)/(e1-e0),0.,1.);return k*k*(3.-2.*k);}',
      'vec4 tp(vec2 q){if(q.x<0.||q.x>1.||q.y<0.||q.y>1.)return vec4(0.);return texture2D(uTex,q);}',
      'vec4 lens(){vec2 c=vec2(.5);vec2 p=vUv-c;p.x*=uAspect;float ca=cos(uRot),sa=sin(uRot);p=mat2(ca,-sa,sa,ca)*p;',
      'float d=length(p/vec2(uSizeX,uSizeY));vec4 base=tp(vUv);if(d>1.)return base;float nd=clamp(d,0.,1.);',
      'vec2 off=vUv-c;vec2 rd=normalize(off+1e-6);vec2 td=vec2(-rd.y,rd.x);float ang=atan(p.y,p.x);float pull=uZoom*.30*nd*nd;',
      'float rimS=smoothstep(uRimStart,1.,nd);float wave=sin(ang*2.)*.55+sin(ang)*.25;float rs=(uSizeX+uSizeY)*.5;',
      'vec2 b=c+off*(1.-pull)+td*wave*rimS*rs*uRimTan;float rm=smoothstep(.55,1.,nd);vec2 dd=off*uDisp*.004*rm;',
      'vec3 col=vec3(0.),w=vec3(0.);float al=0.,wa=0.;for(int i=0;i<16;i++){float t=float(i)/15.;vec4 s=tp(b+dd*(t-.5));',
      'vec3 ww=vec3(exp(-pow(t/.38,2.)),exp(-pow((t-.5)/.38,2.)),exp(-pow((t-1.)/.38,2.)));col+=s.rgb*ww;w+=ww;al+=s.a*ww.g;wa+=ww.g;}col/=max(w,vec3(.001));al/=max(wa,.001);',
      'float l=dot(col,vec3(.299,.587,.114));col=mix(vec3(l),col,1.+.8*rm);return mix(base,vec4(col,al),smoothstep(1.,.93,d));}',
      'vec4 edge(){vec2 c=vUv*2.-1.;float k=ss(uX0,1.,abs(c.x));float sx=c.x*(1.-uA*k*k);float sy=c.y/(1.+uVy*k);vec2 b=vec2(sx*.5+.5,sy*.5+.5);',
      'float r=uBl*k/uRes.x;float co=uCa*k/uRes.x*sign(c.x);vec4 col=vec4(0.);float ws=0.;float jt=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)-.5;',
      'for(int i=-12;i<=12;i++){float f=(float(i)+jt)/12.;float w=1.-abs(f)*.55;vec2 q=b+vec2(f*r,f*r*.25*uRes.x/uRes.y);vec4 m=tp(q);',
      'col.r+=tp(q+vec2(co,0.)).r*w;col.g+=m.g*w;col.b+=tp(q-vec2(co,0.)).b*w;col.a+=m.a*w;ws+=w;}col/=ws;float l=dot(col.rgb,vec3(.299,.587,.114));return vec4(mix(vec3(l),col.rgb,1.+1.1*k),col.a);}',
      'void main(){vec4 o=uMode<.5?lens():edge();o=clamp(o,0.,1.);o.rgb=min(o.rgb,vec3(o.a));gl_FragColor=o;}'].join('');
    function glInit(){ try{ glc=document.createElement('canvas'); glc.className='cf-gl'; glc.setAttribute('aria-hidden','true');
        gl=glc.getContext('webgl',{antialias:false,alpha:true,premultipliedAlpha:true}); if(!gl) return false;
        function sh(t,s2){ var o=gl.createShader(t); gl.shaderSource(o,s2); gl.compileShader(o); if(!gl.getShaderParameter(o,gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(o); return o; }
        var pr=gl.createProgram(); gl.attachShader(pr,sh(gl.VERTEX_SHADER,VS)); gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,FS)); gl.linkProgram(pr); if(!gl.getProgramParameter(pr,gl.LINK_STATUS)) throw gl.getProgramInfoLog(pr); gl.useProgram(pr);
        var bf=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,bf); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
        var lc=gl.getAttribLocation(pr,'p'); gl.enableVertexAttribArray(lc); gl.vertexAttribPointer(lc,2,gl.FLOAT,false,0,0);
        'uRes uMode uAspect uSizeX uSizeY uRot uZoom uDisp uRimStart uRimTan uTime uX0 uA uVy uBl uCa'.split(' ').forEach(function(k){ U[k]=gl.getUniformLocation(pr,k); });
        tex=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,tex); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
        [gl.TEXTURE_MIN_FILTER,gl.TEXTURE_MAG_FILTER].forEach(function(k){ gl.texParameteri(gl.TEXTURE_2D,k,gl.LINEAR); });
        [gl.TEXTURE_WRAP_S,gl.TEXTURE_WRAP_T].forEach(function(k){ gl.texParameteri(gl.TEXTURE_2D,k,gl.CLAMP_TO_EDGE); });
        c2=document.createElement('canvas'); x2=c2.getContext('2d'); stage.insertBefore(glc,stage.firstChild); return true;
      }catch(e){ if(window.console) console.warn('cf gl',e); gl=null; if(glc&&glc.parentNode) glc.remove(); return false; } }
    function rr(c,x,y,w,h,r){ c.beginPath(); c.moveTo(x+r,y); c.arcTo(x+w,y,x+w,y+h,r); c.arcTo(x+w,y+h,x,y+h,r); c.arcTo(x,y+h,x,y,r); c.arcTo(x,y,x+w,y,r); c.closePath(); }
    var CS=getComputedStyle(document.documentElement), C_INK=CS.getPropertyValue('--ink').trim()||'#1d1d1d', C_BLUE=CS.getPropertyValue('--blue').trim()||'#3367ce', C_BBG=CS.getPropertyValue('--blue-bg').trim()||'#cfe0f5';
    var FAM=getComputedStyle(document.querySelector('h2')).fontFamily;
    var meta=tpl.map(function(c){ return {t:c.querySelector('h3').textContent, ch:[].map.call(c.querySelectorAll('.chip'),function(x){ return x.textContent; }), d:c.querySelector('p').textContent}; });
    function chipsW(m,fC,cp,cg){ x2.font='500 '+fC+'px '+FAM; var ws=m.ch.map(function(c){ return x2.measureText(c).width+cp*2; }); return {ws:ws, w:ws.reduce(function(a,b){ return a+b; },0)+cg*(ws.length-1)}; }
    function drawChips(m,ws,x,yc,fC,cp,cg){ x2.font='500 '+fC+'px '+FAM; x2.textAlign='left'; m.ch.forEach(function(c,k){ x2.fillStyle=C_BBG; rr(x2,x,yc-12,ws[k],24,4); x2.fill(); x2.fillStyle=C_BLUE; x2.fillText(c,x+cp,yc+1); x2.fillStyle='#fff'; x+=ws[k]+cg; }); }
    function wrap2(t,max){ if(x2.measureText(t).width<=max) return [t]; var w=t.split(' '), best=[t], bd=1e9; for(var k=1;k<w.length;k++){ var a=w.slice(0,k).join(' '), b=w.slice(k).join(' '), d=Math.max(x2.measureText(a).width,x2.measureText(b).width); if(d<bd){ bd=d; best=[a,b]; } } return best; }
    function label(i,x,top,W){ var m=meta[i], cp=8, cg=4, fC=12; x2.textBaseline='middle';
      if(W<560){ var cx=x+CW/2, y=top+22+14; x2.textAlign='center'; x2.fillStyle='#fff'; x2.font='500 20px '+FAM; x2.fillText(m.t,cx,y+1);
        var c=chipsW(m,fC,cp,cg); drawChips(m,c.ws,cx-c.w/2,y+14+8+12,fC,cp,cg);
        x2.font='500 16px '+FAM; x2.textAlign='center'; x2.fillStyle='rgba(255,255,255,.8)'; var ls=wrap2(m.d,CW-2*Math.max(24,FW*0.7)); ls.forEach(function(l,k){ x2.fillText(l,cx,top+CH-22-12-(ls.length-1-k)*24+1); });
      } else { var yc=top+CH-20-12; x2.textAlign='left'; x2.fillStyle='#fff'; x2.font='500 16px '+FAM; x2.fillText(m.t,x+24,yc+1); var tw=x2.measureText(m.t).width;
        var c2w=chipsW(m,fC,cp,cg); drawChips(m,c2w.ws,x+24+tw+12,yc,fC,cp,cg);
        // popis 16 px od pravého okraje karty; když se nevejde vedle nadpisu a čipů, jde o řádek výš (případně na dva řádky)
        x2.font='500 16px '+FAM; x2.textAlign='right'; x2.fillStyle='rgba(255,255,255,.8)'; var rx=x+CW-16, lend=x+24+tw+12+c2w.w+24, dw=x2.measureText(m.d).width;
        if(rx-dw>=lend) x2.fillText(m.d,rx,yc+1); else { var ls2=wrap2(m.d,CW-40); ls2.forEach(function(l,k){ x2.fillText(l,rx,yc-28-(ls2.length-1-k)*22+1); }); } }
      x2.textAlign='left'; }
    if(document.fonts&&document.fonts.ready) document.fonts.ready.then(function(){ kick(); });
    function sizes(){ var W=stage.clientWidth, H=stage.clientHeight; CW=Math.round(W<560?W*0.86:Math.min(700,W*0.46)); CH=Math.round(CW*(W<560?1.25:0.68)); cf.style.setProperty('--cw',CW+'px'); cf.style.setProperty('--cb',Math.round(H*0.5-CH/2)+CH+'px'); FW=W<560?72:Math.round(Math.min(124,CW*0.18)); var bar=cf.querySelector('.cf-bar'); if(bar) bar.style.marginTop=Math.round(40-(H-(H*0.5+CH/2)))+'px'; cf.style.setProperty('--fw',FW+'px'); }
    function render(){ if(!gl) return; var W=stage.clientWidth, H=stage.clientHeight; DPR=Math.min(W>1600?1.5:2,window.devicePixelRatio||1); var w=Math.round(W*DPR), h=Math.round(H*DPR);
      if(c2.width!==w||c2.height!==h){ c2.width=w; c2.height=h; glc.width=w; glc.height=h; }
      x2.setTransform(DPR,0,0,DPR,0,0); x2.clearRect(0,0,W,H);
      var st=step(), tot=n*st, top=Math.round(H*0.5-CH/2);
      for(var i=0;i<n;i++){ var x=i*st-scroll; x=((x%tot)+tot)%tot; if(x>tot/2) x-=tot;
        for(var r=-1;r<=1;r++){ var cx=W/2+x+r*tot; if(cx+CW/2<-40||cx-CW/2>W+40) continue; var im=imgs[i];
          x2.save(); rr(x2,cx-CW/2,top,CW,CH,8); x2.clip(); x2.fillStyle='#f2f2f2'; x2.fillRect(cx-CW/2,top,CW,CH);
          if(im&&im.complete&&im.naturalWidth){ var op=(im.style.objectPosition||'50% 50%').split(' ').map(function(v){return parseFloat(v)/100;}); var sc=Math.max(CW/im.naturalWidth,CH/im.naturalHeight), dw=im.naturalWidth*sc, dh=im.naturalHeight*sc; x2.drawImage(im,cx-CW/2+(CW-dw)*op[0],top+(CH-dh)*op[1],dw,dh); }
          var gy=top+CH*(W<560?0.52:0.42), g=x2.createLinearGradient(0,gy,0,top+CH); g.addColorStop(0,'rgba(0,0,0,0)'); g.addColorStop(0.5,'rgba(0,0,0,.24)'); g.addColorStop(1,'rgba(0,0,0,.6)'); x2.fillStyle=g; x2.fillRect(cx-CW/2,gy,CW,top+CH-gy); if(W<560){ var g2=x2.createLinearGradient(0,top,0,top+CH*0.36); g2.addColorStop(0,'rgba(0,0,0,.45)'); g2.addColorStop(1,'rgba(0,0,0,0)'); x2.fillStyle=g2; x2.fillRect(cx-CW/2,top,CW,CH*0.36); } label(i,cx-CW/2,top,W); x2.restore(); } }
      gl.viewport(0,0,w,h); gl.bindTexture(gl.TEXTURE_2D,tex); gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true); gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,c2);
      var narrow=W<768, asp=W/H; gl.uniform2f(U.uRes,w,h); var em=eff(); cf.classList.toggle('mode-edge',em==='edge'); cf.classList.toggle('mode-lens',em==='lens'); gl.uniform1f(U.uMode,em==='lens'?0:1); gl.uniform1f(U.uAspect,asp);
      if(narrow){ gl.uniform1f(U.uSizeX,1.24*CH/H); gl.uniform1f(U.uSizeY,0.82*CW/H); } else { gl.uniform1f(U.uSizeX,asp); gl.uniform1f(U.uSizeY,0.6*asp); } gl.uniform1f(U.uRot,Math.PI/2);
      gl.uniform1f(U.uZoom,0.4); gl.uniform1f(U.uDisp,26); gl.uniform1f(U.uRimStart,0.578); gl.uniform1f(U.uRimTan,0.3); gl.uniform1f(U.uTime,(performance.now()-t0)/1000);
      gl.uniform1f(U.uX0,Math.min(0.9,(CW/2)/(W/2)+0.26)); gl.uniform1f(U.uA,0.24); gl.uniform1f(U.uVy,0.36); gl.uniform1f(U.uBl,58*DPR); gl.uniform1f(U.uCa,30*DPR);
      gl.drawArrays(gl.TRIANGLE_STRIP,0,4); }
    var lastCap=-1;
    function caption(){ var ci=wrapIdx(centerIdx()); if(ci===lastCap) return; lastCap=ci; var t=tpl[ci];
      cap.innerHTML='<p></p>'; cap.querySelector('p').textContent=t.querySelector('h3').textContent+' · '+[].map.call(t.querySelectorAll('.chip'),function(c){ return c.textContent; }).join(', ')+'. '+t.querySelector('p').textContent;
      cap.querySelector('p').className='sr';
      tabs.forEach(function(tb,j){ tb.classList.toggle('on',j===ci); tb.setAttribute('aria-selected',j===ci?'true':'false'); });
      tpl.forEach(function(c,j){ c.setAttribute('aria-hidden',j===ci?'false':'true'); }); }
    function drawDom(){ var st=Math.min(778,Math.round(stage.clientWidth*0.86))+24, k=scroll/step();
      slots.forEach(function(sl,i){ sl.style.transform='translate3d('+((i-k)*st).toFixed(1)+'px,0,0)'; });
      var cur=Math.round(target/step()); tabs.forEach(function(tb,j){ tb.classList.toggle('on',j===cur); });
      arrows[0].disabled=cur<=0; arrows[1].disabled=cur>=n-1; }
    function frame(){ raf=0; var e=drag?0.35:0.12; scroll+=(target-scroll)*e; if(Math.abs(target-scroll)<0.3) scroll=target;
      if(gl){ render(); caption(); } else drawDom();
      if(drag||scroll!==target) raf=requestAnimationFrame(frame); }
    function kick(){ if(!raf) raf=requestAnimationFrame(frame); }
    tabs.forEach(function(t,i){ t.setAttribute('role','tab'); t.addEventListener('click',function(){ go(i); }); });
    [].forEach.call(arrows,function(b){ b.addEventListener('click',function(){ goRel(Number(b.getAttribute('data-cf'))); }); });
    cf.addEventListener('keydown',function(e){ if(e.key==='ArrowRight'){ goRel(1); e.preventDefault(); } if(e.key==='ArrowLeft'){ goRel(-1); e.preventDefault(); } });
    stage.addEventListener('pointerdown',function(e){ if(e.button&&e.pointerType==='mouse') return; drag={x:e.clientX,t:target,id:e.pointerId}; moved=false; try{ stage.setPointerCapture(e.pointerId); }catch(_){} kick(); });
    stage.addEventListener('pointermove',function(e){ if(!drag||e.pointerId!==drag.id) return; var dx=e.clientX-drag.x; if(Math.abs(dx)>6) moved=true; target=drag.t-dx; if(!gl) target=Math.max(-0.3*step(),Math.min((n-0.7)*step(),target)); });
    function up(){ if(!drag) return; drag=null; if(!gl) target=Math.max(0,Math.min(n-1,Math.round(target/step())))*step(); kick(); }
    stage.addEventListener('pointerup',up); stage.addEventListener('pointercancel',up);
    stage.addEventListener('click',function(e){ if(!gl||moved) return; var r=stage.getBoundingClientRect(), dx=e.clientX-r.left-r.width/2; if(Math.abs(dx)<CW/2) return; target=scroll+Math.round(dx/step())*step(); kick(); });
    stage.addEventListener('wheel',function(e){ if(!gl||Math.abs(e.deltaX)<=Math.abs(e.deltaY)) return; e.preventDefault(); target+=e.deltaX*1.2; kick(); },{passive:false});
    var lw=0; function relayout(){ var w=stage.clientWidth; if(w===lw) { kick(); return; } var k=step()?target/step():0; lw=w; sizes(); if(!gl) buildSlots(); scroll=target=k*step(); lastCap=-1; kick(); }
    if(useGL&&glInit()){ cf.classList.add('gl-on','mode-lens'); imgs=tpl.map(function(c){ var im=c.querySelector('img'); im.loading='eager'; if(!im.complete) im.addEventListener('load',kick); return im; }); }
    window.__cfMode=function(m){ mode=m; kick(); };
    window.addEventListener('resize',relayout); if(window.ResizeObserver) new ResizeObserver(relayout).observe(cf); window.__cf={go:go}; relayout(); });
})();

;

/* NAČÍTÁNÍ: fotky v About a knihy v patičce se stáhnou dopředu (po načtení stránky / s velkým předstihem), aby při doscrollování už byly hotové */
(function(){
  var sel='#about img[loading="lazy"], .fo-stack img[loading="lazy"]';
  function go(){ [].forEach.call(document.querySelectorAll(sel),function(im){ im.loading='eager'; if(im.decode) im.decode().catch(function(){}); }); }
  if('IntersectionObserver' in window){ var io=new IntersectionObserver(function(es){ if(es.some(function(e){ return e.isIntersecting; })){ io.disconnect(); go(); } },{rootMargin:'3000px 0px'}); ['#about','#paticka'].forEach(function(q){ var el=document.querySelector(q); if(el) io.observe(el); }); }
  if(document.readyState==='complete') setTimeout(go,1200); else window.addEventListener('load',function(){ setTimeout(go,1200); });
})();
/* MŮSTEK: parting letters parade */
aidLazy('#most',function(){
  var sec=document.getElementById('most'); if(!sec) return;
  var pin=document.getElementById('brPin'), h=document.getElementById('brH'), ms=[].slice.call(sec.querySelectorAll('.br-m'));
  var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if('IntersectionObserver' in window) new IntersectionObserver(function(es){ sec.classList.toggle('br-on',es[0].isIntersecting); if(es[0].isIntersecting) loop(); },{rootMargin:'200px 0px'}).observe(sec); else sec.classList.add('br-on');
  ms.forEach(function(m){ var im=m.querySelector('img'); im.loading='eager'; });
  if(RM) return;
  var C=[];
  [].forEach.call(h.querySelectorAll('.br-l'),function(line){ var li=line.parentNode===h.querySelector('.br-g')?0:1;
    var words=line.textContent.split(' '); line.textContent='';
    words.forEach(function(w,wi){ var ws=document.createElement('span'); ws.className='br-w';
      Array.from(w).forEach(function(ch){ var c=document.createElement('span'); c.className='br-c'; c.textContent=ch; ws.appendChild(c); C.push({el:c,top:li===0,x:0,t:0,b:0,y:0,r:0,wy:0,wr:0}); });
      line.appendChild(ws); if(wi<words.length-1) line.appendChild(document.createTextNode(' ')); });
  });
  var caps=ms.map(function(m){return m.querySelector('figcaption');});
  var X0=0,XE=0,GS=[].slice.call(h.querySelectorAll('.br-g')),SWK=-1,TL=0,TR=0,IL=1,GL=0,TS=0,TB=0,BT=0,W=0,H=0,CY=0,BW=0,BH=0,S=0,LT=0,SMIN=.42,GAP=18,run=false,mob=false;
  function measure(){
    C.forEach(function(c){c.el.style.transform='';});
    W=pin.clientWidth; H=pin.clientHeight; mob=W<=560;
    var pr=pin.getBoundingClientRect(), tb=-1e9, bt=1e9;
    C.forEach(function(c){ var r=c.el.getBoundingClientRect(); c.x=r.left+r.width/2-pr.left; c.t=r.top-pr.top; c.b=r.bottom-pr.top; if(c.top) tb=Math.max(tb,c.b); else bt=Math.min(bt,c.t); c.wy=c.wr=1e9; });
    TB=tb; BT=bt; CY=(tb+bt)/2; TL=1e9; TR=-1e9; C.forEach(function(c){ TL=Math.min(TL,c.x); TR=Math.max(TR,c.x); }); pin.style.setProperty('--cy',CY.toFixed(1)+'px');
    BW=ms[0].offsetWidth; BH=ms[0].offsetHeight; GAP=mob?12:18;
    S=mob?W*1.02:Math.max(BW*1.55,W*.42);
    var sg=mob?BW/2*.75+40:BW/2*.8+70; X0=Math.max(W+BW*.6,TR+BW/2+sg+6); XE=Math.min(-BW*.6,TL-BW/2-sg-6);
    LT=X0-XE+(ms.length-1)*S;
    IL=Math.max(LT*(mob?.8:.5),H*(mob?2:2.2)); GL=H*1.15;
    TS=IL*(X0+(ms.length-1)*S-W/2)/LT-H*.35;
    sec.style.height=Math.round(H+IL+GL)+'px';
    grid();
    glSize();
    frame(true);
  }
  function cl(v,a,b){return v<a?a:v>b?b:v;}
  // DUHOVÉ SKLO NA KRAJÍCH (stejný shader jako u sliderů): weby se kreslí do canvasu a na okrajích se lomí s chromatickou aberací
  var gcv=null, ggl=null, gU={}, gtex=null, c2=document.createElement('canvas'), x2=c2.getContext('2d'), gDPR=1, GBH=0, gKey='', FF='';
  var gIm=ms.map(function(m){ return m.querySelector('img'); }), gAv=ms.map(function(m){ return [].slice.call(m.querySelectorAll('.br-av img')); }),
      gTx=ms.map(function(m){ return [m.querySelector('.br-t b').textContent, m.querySelector('.br-t span').textContent]; });
  (function(){ try{
    gcv=document.createElement('canvas'); gcv.className='br-glc'; gcv.setAttribute('aria-hidden','true');
    ggl=gcv.getContext('webgl',{premultipliedAlpha:true,alpha:true,antialias:false}); if(!ggl) throw 0;
    var VS='attribute vec2 p;varying vec2 vUv;void main(){vUv=p*.5+.5;gl_Position=vec4(p,0.,1.);}';
    var FS=['precision highp float;varying vec2 vUv;uniform sampler2D uTex;uniform vec2 uRes;uniform float uX0,uA,uVy,uBl,uCa;',
      'float ss(float e0,float e1,float x){float k=clamp((x-e0)/(e1-e0),0.,1.);return k*k*(3.-2.*k);}',
      'vec4 tp(vec2 q){if(q.x<0.||q.x>1.||q.y<0.||q.y>1.)return vec4(0.);return texture2D(uTex,q);}',
      'void main(){vec2 c=vUv*2.-1.;float k=ss(uX0,1.,abs(c.x));if(k<=0.){gl_FragColor=tp(vUv);return;}',
      'float sx=c.x*(1.-uA*k*k);float sy=c.y/(1.+uVy*k);vec2 b=vec2(sx*.5+.5,sy*.5+.5);',
      'float r=uBl*k/uRes.x;float co=uCa*k/uRes.x*sign(c.x);vec4 col=vec4(0.);float ws=0.;float jt=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)-.5;',
      'for(int i=-12;i<=12;i++){float f=(float(i)+jt)/12.;float w=1.-abs(f)*.55;vec2 q=b+vec2(f*r,f*r*.25*uRes.x/uRes.y);vec4 m=tp(q);',
      'col.r+=tp(q+vec2(co,0.)).r*w;col.g+=m.g*w;col.b+=tp(q-vec2(co,0.)).b*w;col.a+=m.a*w;ws+=w;}col/=ws;',
      'float l=dot(col.rgb,vec3(.299,.587,.114));vec4 o=vec4(mix(vec3(l),col.rgb,1.+1.1*k),col.a);o=clamp(o,0.,1.);o.rgb=min(o.rgb,vec3(o.a));gl_FragColor=o;}'].join('');
    function sh(t,src){ var o=ggl.createShader(t); ggl.shaderSource(o,src); ggl.compileShader(o); if(!ggl.getShaderParameter(o,ggl.COMPILE_STATUS)) throw ggl.getShaderInfoLog(o); return o; }
    var pr=ggl.createProgram(); ggl.attachShader(pr,sh(ggl.VERTEX_SHADER,VS)); ggl.attachShader(pr,sh(ggl.FRAGMENT_SHADER,FS)); ggl.linkProgram(pr); ggl.useProgram(pr);
    var bf=ggl.createBuffer(); ggl.bindBuffer(ggl.ARRAY_BUFFER,bf); ggl.bufferData(ggl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),ggl.STATIC_DRAW);
    var lc=ggl.getAttribLocation(pr,'p'); ggl.enableVertexAttribArray(lc); ggl.vertexAttribPointer(lc,2,ggl.FLOAT,false,0,0);
    'uRes uX0 uA uVy uBl uCa'.split(' ').forEach(function(k){ gU[k]=ggl.getUniformLocation(pr,k); });
    gtex=ggl.createTexture(); ggl.bindTexture(ggl.TEXTURE_2D,gtex); ggl.pixelStorei(ggl.UNPACK_FLIP_Y_WEBGL,true); ggl.pixelStorei(ggl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true);
    [ggl.TEXTURE_MIN_FILTER,ggl.TEXTURE_MAG_FILTER].forEach(function(k){ ggl.texParameteri(ggl.TEXTURE_2D,k,ggl.LINEAR); });
    [ggl.TEXTURE_WRAP_S,ggl.TEXTURE_WRAP_T].forEach(function(k){ ggl.texParameteri(ggl.TEXTURE_2D,k,ggl.CLAMP_TO_EDGE); });
    sec.querySelector('.br-ms').after(gcv); sec.classList.add('gl');
    gIm.concat([].concat.apply([],gAv)).forEach(function(im){ if(!im.complete) im.addEventListener('load',function(){ gKey=''; }); });
  }catch(e){ gcv=null; ggl=null; sec.classList.remove('gl'); } })();
  function glSize(){ if(!ggl) return; gDPR=Math.min(1.5,window.devicePixelRatio||1); GBH=Math.round(BH*1.6+60);
    gcv.style.top=(CY-GBH/2).toFixed(1)+'px'; gcv.style.height=GBH+'px';
    var w=Math.round(W*gDPR), h=Math.round(GBH*gDPR); gcv.width=c2.width=w; gcv.height=c2.height=h; FF=getComputedStyle(h2el).fontFamily; gKey=''; }
  var h2el=h;
  function rr(c,x,y,w,hh,r){ c.beginPath(); c.moveTo(x+r,y); c.arcTo(x+w,y,x+w,y+hh,r); c.arcTo(x+w,y+hh,x,y+hh,r); c.arcTo(x,y+hh,x,y,r); c.arcTo(x,y,x+w,y,r); c.closePath(); }
  function glDraw(xs){ if(!ggl) return; var key=xs.map(function(v){return Math.round(v*2);}).join(','); if(key===gKey) return; gKey=key;
    x2.setTransform(gDPR,0,0,gDPR,0,0); x2.clearRect(0,0,W,GBH); var top=(GBH-BH)/2, R=mob?10:12, AV=mob?28:32, P=mob?12:16;
    for(var i=0;i<ms.length;i++){ var l=xs[i]-BW/2; if(l>W+4||l+BW<-4) continue; var im=gIm[i];
      x2.save(); rr(x2,l,top,BW,BH,R); x2.clip(); x2.fillStyle='#dfe6f3'; x2.fillRect(l,top,BW,BH);
      if(im.complete&&im.naturalWidth){ var sc=Math.max(BW/im.naturalWidth,BH/im.naturalHeight), dw=im.naturalWidth*sc, dh=im.naturalHeight*sc; x2.drawImage(im,l+(BW-dw)/2,top+(BH-dh)/2,dw,dh); }
      var gy=top+BH*.45, g=x2.createLinearGradient(0,gy,0,top+BH); g.addColorStop(0,'rgba(8,14,34,0)'); g.addColorStop(.55,'rgba(8,14,34,.55)'); g.addColorStop(1,'rgba(8,14,34,.78)'); x2.fillStyle=g; x2.fillRect(l,gy,BW,top+BH-gy);
      var cy=top+BH-P-AV/2, ax=l+P;
      gAv[i].forEach(function(a,j){ var x=ax+j*(AV-10); x2.save(); x2.beginPath(); x2.arc(x+AV/2,cy,AV/2+2,0,7); x2.fillStyle='rgba(255,255,255,.85)'; x2.fill(); x2.beginPath(); x2.arc(x+AV/2,cy,AV/2,0,7); x2.clip(); if(a.complete&&a.naturalWidth){ var m=Math.min(a.naturalWidth,a.naturalHeight); x2.drawImage(a,(a.naturalWidth-m)/2,(a.naturalHeight-m)/2,m,m,x,cy-AV/2,AV,AV); } x2.restore(); });
      var tx=ax+AV+(gAv[i].length-1)*(AV-10)+10; x2.textBaseline='alphabetic';
      x2.font='500 12px '+FF; x2.fillStyle='rgba(255,255,255,.72)'; x2.fillText(gTx[i][0],tx,cy-4);
      x2.font='500 '+(mob?14:16)+'px '+FF; x2.fillStyle='#fff'; x2.fillText(gTx[i][1],tx,cy+(mob?13:15));
      x2.restore(); }
    var w=gcv.width, hh=gcv.height; ggl.viewport(0,0,w,hh); ggl.bindTexture(ggl.TEXTURE_2D,gtex); ggl.texImage2D(ggl.TEXTURE_2D,0,ggl.RGBA,ggl.RGBA,ggl.UNSIGNED_BYTE,c2);
    var band=mob?30:64; ggl.uniform2f(gU.uRes,w,hh); ggl.uniform1f(gU.uX0,1-2*band/W); ggl.uniform1f(gU.uA,.24); ggl.uniform1f(gU.uVy,.36); ggl.uniform1f(gU.uBl,58*gDPR); ggl.uniform1f(gU.uCa,30*gDPR);
    ggl.clearColor(0,0,0,0); ggl.clear(ggl.COLOR_BUFFER_BIT); ggl.drawArrays(ggl.TRIANGLE_STRIP,0,4); }
  // mřížka profilovek: při posledním průjezdu se od středu zaplní celá obrazovka, k okrajům se vytrácí
  var cv=document.createElement('canvas'); cv.className='br-grid'; cv.setAttribute('aria-hidden','true'); pin.insertBefore(cv,pin.querySelector('.br-halo'));
  var glw=pin.querySelector('.pg-glow'), ctx=cv.getContext('2d'), halo=pin.querySelector('.br-halo'), dots=[], spr=[], D=30, DPR=1, lq=-1;
  var AVI=[], ATL=null, AN=+sec.getAttribute('data-atlas-n')||0, AC=+sec.getAttribute('data-atlas-cols')||1, ACS=+sec.getAttribute('data-atlas-cell')||80;
  var TONES=[['#dde6f5','#b9c9e8'],['#cfdcf2','#a9bde4'],['#e6ebf3','#c3cfe3'],['#d4e0f4','#9fb6e2'],['#e9eef7','#c8d4ea'],['#c9d7f0','#9cb2dd']];
  function sprites(){ spr=[]; var px=Math.round(D*DPR);
    TONES.forEach(function(t){ var c=document.createElement('canvas'); c.width=c.height=px; var x=c.getContext('2d'), r=px/2;
      x.beginPath(); x.arc(r,r,r,0,7); x.closePath(); x.save(); x.clip(); x.fillStyle=t[0]; x.fillRect(0,0,px,px); x.fillStyle=t[1];
      x.beginPath(); x.arc(r,r*.78,r*.36,0,7); x.fill(); x.beginPath(); x.ellipse(r,r*1.72,r*.72,r*.56,0,0,7); x.fill(); x.restore(); spr.push(c); });
    AVI=[]; if(ATL&&ATL.naturalWidth){ for(var i=0;i<AN;i++){ var c=document.createElement('canvas'); c.width=c.height=px; var x=c.getContext('2d');
      x.beginPath(); x.arc(px/2,px/2,px/2,0,7); x.clip(); x.drawImage(ATL,(i%AC)*ACS,Math.floor(i/AC)*ACS,ACS,ACS,0,0,px,px); spr.push(c); AVI.push(1); } } }
  if(sec.getAttribute('data-atlas')){ ATL=new Image(); ATL.crossOrigin='anonymous'; ATL.decoding='async'; ATL.onload=function(){ sprites(); lq=-1; }; ATL.src=sec.getAttribute('data-atlas'); }
  function grid(){ DPR=Math.min(2,window.devicePixelRatio||1); D=mob?44:60;
    cv.width=Math.round(W*DPR); cv.height=Math.round(H*DPR); sprites(); dots=[];
    // organické rozložení: různé velikosti, náhodně poházené, bez pravidelných mezer; hustota i viditelnost slábne ke krajům
    var seed=11; function rnd(){ seed=(seed*16807)%2147483647; return seed/2147483647; }
    var cell=mob?26:34, hash={}, tries=mob?3200:7000, sc=mob?.72:1;
    function key(x,y){ return Math.floor(x/cell)+','+Math.floor(y/cell); }
    for(var t=0;t<tries;t++){
      var x=rnd()*W, y=rnd()*H, e=Math.hypot((x-W/2)/(W*.56),(y-CY)/(H*.5)); if(e>1.22) continue;
      var u=rnd(), d=(u<.62?14+rnd()*12:u<.9?28+rnd()*14:44+rnd()*16)*sc; if(e>.7) d*=.85;
      var gap=3+rnd()*9, ok=true, cx=Math.floor(x/cell), cy=Math.floor(y/cell);
      for(var ix=cx-2;ix<=cx+2&&ok;ix++) for(var iy=cy-2;iy<=cy+2&&ok;iy++){ var L=hash[ix+','+iy]; if(!L) continue;
        for(var m=0;m<L.length;m++){ var o=L[m]; if(Math.hypot(o.x-x,o.y-y)<(o.d+d)/2+gap){ ok=false; break; } } }
      if(!ok) continue;
      var a=(1-sm(.62,1.22,e))*sm(0,H*.08,y)*sm(0,H*.08,H-y), dt={x:x,y:y,d:d,a:a,t:Math.min(.72,e*.5+rnd()*.22),k:Math.floor(rnd()*1e6)};
      (hash[key(x,y)]=hash[key(x,y)]||[]).push(dt); dots.push(dt);
    }
    lq=-1; }
  function sm(a,b,v){ v=cl((v-a)/(b-a),0,1); return v*v*(3-2*v); }
  function paint(q){ if(Math.abs(q-lq)<.0005) return; lq=q; halo.style.opacity=sm(0,.35,q).toFixed(3); if(glw) glw.style.opacity=(.75*(1-sm(0,.45,q))).toFixed(3);
    ctx.setTransform(DPR,0,0,DPR,0,0); ctx.clearRect(0,0,W,H); if(q<=0||!spr.length) return;
    var nA=AVI.length, base=spr.length-nA;
    for(var i=0;i<dots.length;i++){ var d=dots[i], l=cl((q-d.t)/.24,0,1); if(l<=0) continue; var e=1-Math.pow(1-l,3), z=d.d*(.4+.6*e);
      ctx.globalAlpha=d.a*e*.28; ctx.drawImage(spr[nA?base+d.k%nA:d.k%base],d.x-z/2,d.y-z/2,z,z); }
    ctx.globalAlpha=1; }
  function frame(snap,dt){ dt=dt||1/60;
    var r=sec.getBoundingClientRect(), sc=cl(-r.top,0,IL+GL), p=cl(sc/IL,0,1), q=cl((sc-TS)/Math.max(1,IL+GL-H*.25-TS),0,1);
    paint(q);
    // primární je nejdřív horní řádek; jakmile se v pozadí začnou objevovat studenti, zvýrazní se spodní
    var sw=sm(0,.1,q); if(Math.abs(sw-SWK)>.004){ SWK=sw; GS[0].style.color='rgba(29,29,29,'+(1-.44*sw).toFixed(3)+')'; if(GS[1]) GS[1].style.color='rgba(29,29,29,'+(.56+.44*sw).toFixed(3)+')'; }
    var xs=[];
    for(var i=0;i<ms.length;i++){
      var x=X0-p*LT+i*S; xs[i]=x;
      ms[i].style.transform='translate3d('+(x-BW/2).toFixed(1)+'px,-50%,0)';
    }
    glDraw(xs);
    var hw=BW/2, hh=BH/2, sig=mob?hw*.75+40:hw*.8+70, needT=Math.max(0,hh+GAP-(CY-TB)), needB=Math.max(0,hh+GAP-(BT-CY));
    var n1=ms.length-1, ea=sm(0,W*.22,TR-(xs[0]-hw)), eb=sm(0,W*.22,TL-(xs[n1]+hw)), env=ea*(1-eb);
    var moving=false;
    for(var k=0;k<C.length;k++){
      var c=C[k], miss=1, rot=0, best=0;
      for(i=0;i<ms.length;i++){
        var d=Math.abs(c.x-xs[i])-hw, f=d<=0?1:Math.exp(-Math.pow(d/sig,2)); if(f<.003) continue;
        miss*=1-f; if(f>best){ best=f; rot=cl((c.x-xs[i])/(hw+120),-1,1)*f; }
      }
      // rozevírá se písmeno po písmenu, jak dorazí čelo „vláčku“ kartiček, a stejně postupně se zavírá za poslední kartičkou
      var o1=sm(-sig,sig*.25,c.x-(xs[0]-hw)), o2=sm(-sig,sig*.25,(xs[n1]+hw)-c.x), f2=o1*o2, ty=(c.top?-needT:needB)*f2, tr=(c.top?1:-1)*rot*(mob?2.5:5);
      if(snap){ c.y=ty; c.v=0; c.r=tr; }
      else { // pružina: lehce podkmitne, písmena „houpou“
        var n=Math.max(1,Math.ceil(dt/(1/120))), h=dt/n;
        for(var j=0;j<n;j++){ var acc=170*(ty-c.y)-18*(c.v||0); c.v=(c.v||0)+acc*h; c.y+=c.v*h; }
        c.r+=(tr+(c.v||0)*.012*(c.top?-1:1)-c.r)*Math.min(1,dt*10);
      }
      if(Math.abs(ty-c.y)>.05||Math.abs(c.v||0)>.5||Math.abs(tr-c.r)>.02) moving=true;
      if(Math.abs(c.y-c.wy)>.05||Math.abs(c.r-c.wr)>.01){ c.wy=c.y; c.wr=c.r; c.el.style.transform=(Math.abs(c.y)<.05&&Math.abs(c.r)<.01)?'':'translate3d(0,'+c.y.toFixed(2)+'px,0) rotate('+c.r.toFixed(2)+'deg)'; }
    }
    return moving;
  }
  var lastY=-1,mv=true,lt=0;
  function tick(){
    if(!sec.classList.contains('br-on')){ run=false; return; }
    var y=window.scrollY, now=performance.now(), dt=Math.min(now-(lt||now-16),200); lt=now;
    if(y!==lastY||mv) mv=frame(false,dt/1000);
    lastY=y; requestAnimationFrame(tick);
  }
  function loop(){ if(run) return; run=true; requestAnimationFrame(tick); }
  var rt; function re(){ clearTimeout(rt); rt=setTimeout(measure,80); }
  window.addEventListener('resize',re); if(window.ResizeObserver) new ResizeObserver(re).observe(pin);
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(measure);
  if(ms[0].querySelector('img').complete) measure(); else ms[0].querySelector('img').addEventListener('load',measure);
  measure();
});

;

/* VSTUPENKA: kovové logo přes normálovou mapu */
aidLater(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var dlg=document.getElementById('reg'); if(!dlg) return;
  var tks=[].slice.call(dlg.querySelectorAll('.rg-tk')), src=new Image(); src.crossOrigin='anonymous'; src.src='https://jblazek-design.github.io/ai-designer-webinar/assets/reg/logo.svg';
  var VS='attribute vec2 p;varying vec2 v;void main(){v=vec2(p.x*.5+.5,.5-p.y*.5);gl_Position=vec4(p,0.,1.);}';
  var FS=['precision highp float;varying vec2 v;uniform sampler2D uN;uniform vec2 uL;uniform float uT;',
    'void main(){vec4 t=texture2D(uN,v);float a=t.a;if(a<.004){gl_FragColor=vec4(0.);return;}',
    'vec3 n=normalize(t.rgb*2.-1.);vec3 V=vec3(0.,0.,1.);vec3 L=normalize(vec3(uL,.75));vec3 H=normalize(L+V);',
    'float nh=max(dot(n,H),0.);float df=max(dot(n,L),0.);',
    'vec3 R=reflect(-V,n);float e=R.x*1.15+R.y*.85+uT;',
    'float b=.5+.5*sin(e*5.2)+.18*sin(e*13.+1.3);',
    'vec3 env=mix(vec3(.20,.25,.46),vec3(.93,.95,1.),smoothstep(.15,.95,b));',
    'vec3 base=vec3(.70,.75,.90);',
    'vec3 col=env*.78+base*df*.22+vec3(1.)*(pow(nh,70.)*1.25+pow(nh,10.)*.18);',
    'col=mix(col,col*vec3(.92,.95,1.08),.5);',
    'gl_FragColor=vec4(col*a,a);}'].join('');
  function build(tk){
    var cv=document.createElement('canvas'); cv.className='rg-mtc'; cv.setAttribute('aria-hidden','true');
    var gl=cv.getContext('webgl',{premultipliedAlpha:true,alpha:true,preserveDrawingBuffer:true,antialias:false}); if(!gl) return null;
    var DPR=Math.min(2,window.devicePixelRatio||1), W=Math.round(288*DPR), H=Math.round(68*DPR); cv.width=W; cv.height=H;
    // výška = rozmazaný tvar loga (zkosení), normály ze Sobela, k tomu kartáčované vlákno
    var c2=document.createElement('canvas'); c2.width=W; c2.height=H; var x=c2.getContext('2d');
    var lw=W*276/288, lh=lw*56/276; x.drawImage(src,(W-lw)/2,(H-lh)/2,lw,lh);
    var A=x.getImageData(0,0,W,H).data, a=new Float32Array(W*H), h=new Float32Array(W*H), tmp=new Float32Array(W*H);
    for(var i=0;i<W*H;i++) a[i]=A[i*4+3]/255;
    function blur(src,dst,r){ for(var y=0;y<H;y++){ var acc=0; for(var xx=-r;xx<=r;xx++) acc+=src[y*W+Math.min(W-1,Math.max(0,xx))]; for(var X=0;X<W;X++){ tmp[y*W+X]=acc/(2*r+1); acc+=src[y*W+Math.min(W-1,X+r+1)]-src[y*W+Math.max(0,X-r)]; } }
      for(X=0;X<W;X++){ acc=0; for(var yy=-r;yy<=r;yy++) acc+=tmp[Math.min(H-1,Math.max(0,yy))*W+X]; for(y=0;y<H;y++){ dst[y*W+X]=acc/(2*r+1); acc+=tmp[Math.min(H-1,y+r+1)*W+X]-tmp[Math.max(0,y-r)*W+X]; } } }
    var r=Math.max(1,Math.round(1.6*DPR)); blur(a,h,r); blur(h,h,r);
    var seed=3; function rnd(){ seed=(seed*16807)%2147483647; return seed/2147483647; }
    var row=new Float32Array(H); for(i=0;i<H;i++) row[i]=rnd();
    var out=new Uint8Array(W*H*4), K=5.5;
    for(var y=1;y<H-1;y++) for(var X=1;X<W-1;X++){ var o=y*W+X;
      var dx=(h[o+1]-h[o-1])*2+(h[o-W+1]-h[o-W-1])+(h[o+W+1]-h[o+W-1]);
      var dy=(h[o+W]-h[o-W])*2+(h[o+W-1]-h[o-W-1])+(h[o+W+1]-h[o-W+1]);
      var br=(row[y]-.5)*.22+(Math.sin(X*.045+row[y]*40)*.5)*.05;
      var nx=-dx*K, ny=dy*K+br, nz=1, l=Math.hypot(nx,ny,nz); nx/=l; ny/=l; nz/=l;
      out[o*4]=(nx*.5+.5)*255; out[o*4+1]=(ny*.5+.5)*255; out[o*4+2]=(nz*.5+.5)*255; out[o*4+3]=Math.min(1,a[o]*1.08)*255; }
    function sh(t,s){ var q=gl.createShader(t); gl.shaderSource(q,s); gl.compileShader(q); return q; }
    var pr=gl.createProgram(); gl.attachShader(pr,sh(gl.VERTEX_SHADER,VS)); gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,FS)); gl.linkProgram(pr); if(!gl.getProgramParameter(pr,gl.LINK_STATUS)) return null; gl.useProgram(pr);
    var bf=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,bf); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
    var lp=gl.getAttribLocation(pr,'p'); gl.enableVertexAttribArray(lp); gl.vertexAttribPointer(lp,2,gl.FLOAT,false,0,0);
    var tx=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,tx); gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,W,H,0,gl.RGBA,gl.UNSIGNED_BYTE,out);
    [gl.TEXTURE_MIN_FILTER,gl.TEXTURE_MAG_FILTER].forEach(function(k){ gl.texParameteri(gl.TEXTURE_2D,k,gl.LINEAR); });
    [gl.TEXTURE_WRAP_S,gl.TEXTURE_WRAP_T].forEach(function(k){ gl.texParameteri(gl.TEXTURE_2D,k,gl.CLAMP_TO_EDGE); });
    var uL=gl.getUniformLocation(pr,'uL'), uT=gl.getUniformLocation(pr,'uT');
    gl.viewport(0,0,W,H); tk.appendChild(cv); tk.classList.add('gl');
    var st={mx:0,my:0,tx:0,ty:0};
    tk.addEventListener('pointermove',function(e){ var rc=tk.getBoundingClientRect(); st.tx=((e.clientX-rc.left)/rc.width-.5)*2; st.ty=-((e.clientY-rc.top)/rc.height-.5)*2; });
    tk.addEventListener('pointerleave',function(){ st.tx=st.ty=0; });
    return function(t){ st.mx+=(st.tx-st.mx)*.08; st.my+=(st.ty-st.my)*.08;
      gl.uniform2f(uL,Math.cos(t*.55)*.75+st.mx*.9,Math.sin(t*.8)*.45+st.my*.7); gl.uniform1f(uT,t*.12+st.mx*.25);
      gl.clearColor(0,0,0,0); gl.clear(gl.COLOR_BUFFER_BIT); gl.drawArrays(gl.TRIANGLE_STRIP,0,4); };
  }
  var draws=[], raf=0, t0=performance.now();
  function loop(now){ raf=0; if(!dlg.open) return; var t=(now-t0)/1000; draws.forEach(function(d){ d(t); }); raf=requestAnimationFrame(loop); }
  function start(){ if(!draws.length) tks.forEach(function(tk){ var d=build(tk); if(d) draws.push(d); }); if(!raf) raf=requestAnimationFrame(loop); }
  function ready(){ new MutationObserver(function(){ if(dlg.open) start(); }).observe(dlg,{attributes:true,attributeFilter:['open']}); if(dlg.open) start(); }
  if(src.complete&&src.naturalWidth) ready(); else src.onload=ready;
});
