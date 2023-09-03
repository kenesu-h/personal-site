(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Ur(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const q={},bt=[],Oe=()=>{},ro=()=>!1,ao=/^on[^a-z]/,zn=e=>ao.test(e),Hr=e=>e.startsWith("onUpdate:"),ne=Object.assign,Br=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},io=Object.prototype.hasOwnProperty,$=(e,t)=>io.call(e,t),R=Array.isArray,yt=e=>jn(e)==="[object Map]",Ri=e=>jn(e)==="[object Set]",L=e=>typeof e=="function",re=e=>typeof e=="string",Yr=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",Li=e=>V(e)&&L(e.then)&&L(e.catch),zi=Object.prototype.toString,jn=e=>zi.call(e),so=e=>jn(e).slice(8,-1),ji=e=>jn(e)==="[object Object]",Wr=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,xn=Ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},oo=/-(\w)/g,Me=Dn(e=>e.replace(oo,(t,n)=>n?n.toUpperCase():"")),lo=/\B([A-Z])/g,Et=Dn(e=>e.replace(lo,"-$1").toLowerCase()),$n=Dn(e=>e.charAt(0).toUpperCase()+e.slice(1)),rr=Dn(e=>e?`on${$n(e)}`:""),Cn=(e,t)=>!Object.is(e,t),ar=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Tn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},fo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ia;const pr=()=>Ia||(Ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=re(r)?po(r):Kr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(re(e))return e;if(V(e))return e}}const co=/;(?![^(]*\))/g,uo=/:([^]+)/,mo=/\/\*[^]*?\*\//g;function po(e){const t={};return e.replace(mo,"").split(co).forEach(n=>{if(n){const r=n.split(uo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Xr(e){let t="";if(re(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Xr(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ho="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vo=Ur(ho);function Di(e){return!!e||e===""}const Na=e=>re(e)?e:e==null?"":R(e)||V(e)&&(e.toString===zi||!L(e.toString))?JSON.stringify(e,$i,2):String(e),$i=(e,t)=>t&&t.__v_isRef?$i(e,t.value):yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ri(t)?{[`Set(${t.size})`]:[...t.values()]}:V(t)&&!R(t)&&!ji(t)?String(t):t;let ye;class go{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ye,!t&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){ye=this}off(){ye=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function bo(e,t=ye){t&&t.active&&t.effects.push(e)}function yo(){return ye}const qr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ui=e=>(e.w&Ve)>0,Hi=e=>(e.n&Ve)>0,xo=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ve},_o=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ui(a)&&!Hi(a)?a.delete(e):t[n++]=a,a.w&=~Ve,a.n&=~Ve}t.length=n}},hr=new WeakMap;let Mt=0,Ve=1;const vr=30;let _e;const lt=Symbol(""),gr=Symbol("");class Vr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bo(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,Xe=!0,Ve=1<<++Mt,Mt<=vr?xo(this):Ma(this),this.fn()}finally{Mt<=vr&&_o(this),Ve=1<<--Mt,_e=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(Ma(this),this.onStop&&this.onStop(),this.active=!1)}}function Ma(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const Bi=[];function Pt(){Bi.push(Xe),Xe=!1}function Ct(){const e=Bi.pop();Xe=e===void 0?!0:e}function me(e,t,n){if(Xe&&_e){let r=hr.get(e);r||hr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=qr()),Yi(a)}}function Yi(e,t){let n=!1;Mt<=vr?Hi(e)||(e.n|=Ve,n=!Ui(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function je(e,t,n,r,a,i){const s=hr.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&R(e)){const l=Number(r);s.forEach((c,d)=>{(d==="length"||d>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":R(e)?Wr(n)&&o.push(s.get("length")):(o.push(s.get(lt)),yt(e)&&o.push(s.get(gr)));break;case"delete":R(e)||(o.push(s.get(lt)),yt(e)&&o.push(s.get(gr)));break;case"set":yt(e)&&o.push(s.get(lt));break}if(o.length===1)o[0]&&br(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);br(qr(l))}}function br(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Fa(r);for(const r of n)r.computed||Fa(r)}function Fa(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const wo=Ur("__proto__,__v_isRef,__isVue"),Wi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Yr)),ko=Jr(),Ao=Jr(!1,!0),Oo=Jr(!0),Ra=Eo();function Eo(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,s=this.length;i<s;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Pt();const r=U(this)[t].apply(this,n);return Ct(),r}}),e}function Po(e){const t=U(this);return me(t,"has",e),t.hasOwnProperty(e)}function Jr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Bo:Ji:t?Vi:qi).get(r))return r;const s=R(r);if(!e){if(s&&$(Ra,a))return Reflect.get(Ra,a,i);if(a==="hasOwnProperty")return Po}const o=Reflect.get(r,a,i);return(Yr(a)?Wi.has(a):wo(a))||(e||me(r,"get",a),t)?o:ce(o)?s&&Wr(a)?o:o.value:V(o)?e?Gi(o):Qr(o):o}}const Co=Ki(),To=Ki(!0);function Ki(e=!1){return function(n,r,a,i){let s=n[r];if($t(s)&&ce(s)&&!ce(a))return!1;if(!e&&(!yr(a)&&!$t(a)&&(s=U(s),a=U(a)),!R(n)&&ce(s)&&!ce(a)))return s.value=a,!0;const o=R(n)&&Wr(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(o?Cn(a,s)&&je(n,"set",r,a):je(n,"add",r,a)),l}}function So(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&je(e,"delete",t,void 0),r}function Io(e,t){const n=Reflect.has(e,t);return(!Yr(t)||!Wi.has(t))&&me(e,"has",t),n}function No(e){return me(e,"iterate",R(e)?"length":lt),Reflect.ownKeys(e)}const Xi={get:ko,set:Co,deleteProperty:So,has:Io,ownKeys:No},Mo={get:Oo,set(e,t){return!0},deleteProperty(e,t){return!0}},Fo=ne({},Xi,{get:Ao,set:To}),Gr=e=>e,Un=e=>Reflect.getPrototypeOf(e);function an(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:s}=Un(a),o=r?Gr:n?na:ta;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function sn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function on(e,t=!1){return e=e.__v_raw,!t&&me(U(e),"iterate",lt),Reflect.get(e,"size",e)}function La(e){e=U(e);const t=U(this);return Un(t).has.call(t,e)||(t.add(e),je(t,"add",e,e)),this}function za(e,t){t=U(t);const n=U(this),{has:r,get:a}=Un(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?Cn(t,s)&&je(n,"set",e,t):je(n,"add",e,t),this}function ja(e){const t=U(this),{has:n,get:r}=Un(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&je(t,"delete",e,void 0),i}function Da(){const e=U(this),t=e.size!==0,n=e.clear();return t&&je(e,"clear",void 0,void 0),n}function ln(e,t){return function(r,a){const i=this,s=i.__v_raw,o=U(s),l=t?Gr:e?na:ta;return!e&&me(o,"iterate",lt),s.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function fn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),s=yt(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=a[e](...r),d=n?Gr:t?na:ta;return!t&&me(i,"iterate",l?gr:lt),{next(){const{value:m,done:g}=c.next();return g?{value:m,done:g}:{value:o?[d(m[0]),d(m[1])]:d(m),done:g}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function Ro(){const e={get(i){return an(this,i)},get size(){return on(this)},has:sn,add:La,set:za,delete:ja,clear:Da,forEach:ln(!1,!1)},t={get(i){return an(this,i,!1,!0)},get size(){return on(this)},has:sn,add:La,set:za,delete:ja,clear:Da,forEach:ln(!1,!0)},n={get(i){return an(this,i,!0)},get size(){return on(this,!0)},has(i){return sn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:ln(!0,!1)},r={get(i){return an(this,i,!0,!0)},get size(){return on(this,!0)},has(i){return sn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:ln(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=fn(i,!1,!1),n[i]=fn(i,!0,!1),t[i]=fn(i,!1,!0),r[i]=fn(i,!0,!0)}),[e,n,t,r]}const[Lo,zo,jo,Do]=Ro();function Zr(e,t){const n=t?e?Do:jo:e?zo:Lo;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const $o={get:Zr(!1,!1)},Uo={get:Zr(!1,!0)},Ho={get:Zr(!0,!1)},qi=new WeakMap,Vi=new WeakMap,Ji=new WeakMap,Bo=new WeakMap;function Yo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wo(e){return e.__v_skip||!Object.isExtensible(e)?0:Yo(so(e))}function Qr(e){return $t(e)?e:ea(e,!1,Xi,$o,qi)}function Ko(e){return ea(e,!1,Fo,Uo,Vi)}function Gi(e){return ea(e,!0,Mo,Ho,Ji)}function ea(e,t,n,r,a){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=Wo(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function xt(e){return $t(e)?xt(e.__v_raw):!!(e&&e.__v_isReactive)}function $t(e){return!!(e&&e.__v_isReadonly)}function yr(e){return!!(e&&e.__v_isShallow)}function Zi(e){return xt(e)||$t(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Qi(e){return Tn(e,"__v_skip",!0),e}const ta=e=>V(e)?Qr(e):e,na=e=>V(e)?Gi(e):e;function Xo(e){Xe&&_e&&(e=U(e),Yi(e.dep||(e.dep=qr())))}function qo(e,t){e=U(e);const n=e.dep;n&&br(n)}function ce(e){return!!(e&&e.__v_isRef===!0)}function xr(e){return ce(e)?e.value:e}const Vo={get:(e,t,n)=>xr(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ce(a)&&!ce(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function es(e){return xt(e)?e:new Proxy(e,Vo)}class Jo{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Vr(t,()=>{this._dirty||(this._dirty=!0,qo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Xo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Go(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Oe):(r=e.get,a=e.set),new Jo(r,a,i||!a,n)}function qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Hn(i,t,n)}return a}function Ee(e,t,n,r){if(L(e)){const i=qe(e,t,n,r);return i&&Li(i)&&i.catch(s=>{Hn(s,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function Hn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,o=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,s,o)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){qe(l,null,10,[e,s,o]);return}}Zo(e,n,a,r)}function Zo(e,t,n,r=!0){console.error(e)}let Ut=!1,_r=!1;const oe=[];let Ie=0;const _t=[];let Le=null,at=0;const ts=Promise.resolve();let ra=null;function Qo(e){const t=ra||ts;return e?t.then(this?e.bind(this):e):t}function el(e){let t=Ie+1,n=oe.length;for(;t<n;){const r=t+n>>>1;Ht(oe[r])<e?t=r+1:n=r}return t}function aa(e){(!oe.length||!oe.includes(e,Ut&&e.allowRecurse?Ie+1:Ie))&&(e.id==null?oe.push(e):oe.splice(el(e.id),0,e),ns())}function ns(){!Ut&&!_r&&(_r=!0,ra=ts.then(as))}function tl(e){const t=oe.indexOf(e);t>Ie&&oe.splice(t,1)}function nl(e){R(e)?_t.push(...e):(!Le||!Le.includes(e,e.allowRecurse?at+1:at))&&_t.push(e),ns()}function $a(e,t=Ut?Ie+1:0){for(;t<oe.length;t++){const n=oe[t];n&&n.pre&&(oe.splice(t,1),t--,n())}}function rs(e){if(_t.length){const t=[...new Set(_t)];if(_t.length=0,Le){Le.push(...t);return}for(Le=t,Le.sort((n,r)=>Ht(n)-Ht(r)),at=0;at<Le.length;at++)Le[at]();Le=null,at=0}}const Ht=e=>e.id==null?1/0:e.id,rl=(e,t)=>{const n=Ht(e)-Ht(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function as(e){_r=!1,Ut=!0,oe.sort(rl);const t=Oe;try{for(Ie=0;Ie<oe.length;Ie++){const n=oe[Ie];n&&n.active!==!1&&qe(n,null,14)}}finally{Ie=0,oe.length=0,rs(),Ut=!1,ra=null,(oe.length||_t.length)&&as()}}function al(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:g}=r[d]||q;g&&(a=n.map(w=>re(w)?w.trim():w)),m&&(a=n.map(fo))}let o,l=r[o=rr(t)]||r[o=rr(Me(t))];!l&&i&&(l=r[o=rr(Et(t))]),l&&Ee(l,e,6,a);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ee(c,e,6,a)}}function is(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!L(e)){const l=c=>{const d=is(c,t,!0);d&&(o=!0,ne(s,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(V(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>s[l]=null):ne(s,i),V(e)&&r.set(e,s),s)}function Bn(e,t){return!e||!zn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Et(t))||$(e,t))}let we=null,ss=null;function Sn(e){const t=we;return we=e,ss=e&&e.type.__scopeId||null,t}function il(e,t=we,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ga(-1);const i=Sn(t);let s;try{s=e(...a)}finally{Sn(i),r._d&&Ga(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function ir(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:d,renderCache:m,data:g,setupState:w,ctx:z,inheritAttrs:N}=e;let D,k;const O=Sn(e);try{if(n.shapeFlag&4){const T=a||r;D=Se(d.call(T,T,m,i,w,g,z)),k=l}else{const T=t;D=Se(T.length>1?T(i,{attrs:l,slots:o,emit:c}):T(i,null)),k=t.props?l:sl(l)}}catch(T){zt.length=0,Hn(T,e,1),D=te(Bt)}let M=D;if(k&&N!==!1){const T=Object.keys(k),{shapeFlag:H}=M;T.length&&H&7&&(s&&T.some(Hr)&&(k=ol(k,s)),M=kt(M,k))}return n.dirs&&(M=kt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),D=M,Sn(O),D}const sl=e=>{let t;for(const n in e)(n==="class"||n==="style"||zn(n))&&((t||(t={}))[n]=e[n]);return t},ol=(e,t)=>{const n={};for(const r in e)(!Hr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ll(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ua(r,s,c):!!s;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const g=d[m];if(s[g]!==r[g]&&!Bn(c,g))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Ua(r,s,c):!0:!!s;return!1}function Ua(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Bn(n,i))return!0}return!1}function fl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const cl=e=>e.__isSuspense;function ul(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):nl(e)}const cn={};function _n(e,t,n){return os(e,t,n)}function os(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=q){var o;const l=yo()===((o=ae)==null?void 0:o.scope)?ae:null;let c,d=!1,m=!1;if(ce(e)?(c=()=>e.value,d=yr(e)):xt(e)?(c=()=>e,r=!0):R(e)?(m=!0,d=e.some(T=>xt(T)||yr(T)),c=()=>e.map(T=>{if(ce(T))return T.value;if(xt(T))return ht(T);if(L(T))return qe(T,l,2)})):L(e)?t?c=()=>qe(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return g&&g(),Ee(e,l,3,[w])}:c=Oe,t&&r){const T=c;c=()=>ht(T())}let g,w=T=>{g=O.onStop=()=>{qe(T,l,4)}},z;if(Wt)if(w=Oe,t?n&&Ee(t,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const T=ff();z=T.__watcherHandles||(T.__watcherHandles=[])}else return Oe;let N=m?new Array(e.length).fill(cn):cn;const D=()=>{if(O.active)if(t){const T=O.run();(r||d||(m?T.some((H,ie)=>Cn(H,N[ie])):Cn(T,N)))&&(g&&g(),Ee(t,l,3,[T,N===cn?void 0:m&&N[0]===cn?[]:N,w]),N=T)}else O.run()};D.allowRecurse=!!t;let k;a==="sync"?k=D:a==="post"?k=()=>de(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),k=()=>aa(D));const O=new Vr(c,k);t?n?D():N=O.run():a==="post"?de(O.run.bind(O),l&&l.suspense):O.run();const M=()=>{O.stop(),l&&l.scope&&Br(l.scope.effects,O)};return z&&z.push(M),M}function dl(e,t,n){const r=this.proxy,a=re(e)?e.includes(".")?ls(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const s=ae;At(this);const o=os(a,i.bind(r),n);return s?At(s):ft(),o}function ls(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ht(e,t){if(!V(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ce(e))ht(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(Ri(e)||yt(e))e.forEach(n=>{ht(n,t)});else if(ji(e))for(const n in e)ht(e[n],t);return e}function tt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(Pt(),Ee(l,n,8,[e.el,o,e,t]),Ct())}}function Yn(e,t){return L(e)?(()=>ne({name:e.name},t,{setup:e}))():e}const wn=e=>!!e.type.__asyncLoader,fs=e=>e.type.__isKeepAlive;function ml(e,t){cs(e,"a",t)}function pl(e,t){cs(e,"da",t)}function cs(e,t,n=ae){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Wn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)fs(a.parent.vnode)&&hl(r,t,n,a),a=a.parent}}function hl(e,t,n,r){const a=Wn(t,e,r,!0);us(()=>{Br(r[t],a)},n)}function Wn(e,t,n=ae,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Pt(),At(n);const o=Ee(t,n,e,s);return ft(),Ct(),o});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=ae)=>(!Wt||e==="sp")&&Wn(e,(...r)=>t(...r),n),vl=He("bm"),gl=He("m"),bl=He("bu"),yl=He("u"),xl=He("bum"),us=He("um"),_l=He("sp"),wl=He("rtg"),kl=He("rtc");function Al(e,t=ae){Wn("ec",e,t)}const ds="components";function Ol(e,t){return Pl(ds,e,!0,t)||e}const El=Symbol.for("v-ndc");function Pl(e,t,n=!0,r=!1){const a=we||ae;if(a){const i=a.type;if(e===ds){const o=af(i,!1);if(o&&(o===t||o===Me(t)||o===$n(Me(t))))return i}const s=Ha(a[e]||i[e],t)||Ha(a.appContext[e],t);return!s&&r?i:s}}function Ha(e,t){return e&&(e[t]||e[Me(t)]||e[$n(Me(t))])}const wr=e=>e?ks(e)?ua(e)||e.proxy:wr(e.parent):null,Lt=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wr(e.parent),$root:e=>wr(e.root),$emit:e=>e.emit,$options:e=>ia(e),$forceUpdate:e=>e.f||(e.f=()=>aa(e.update)),$nextTick:e=>e.n||(e.n=Qo.bind(e.proxy)),$watch:e=>dl.bind(e)}),sr=(e,t)=>e!==q&&!e.__isScriptSetup&&$(e,t),Cl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const w=s[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(sr(r,t))return s[t]=1,r[t];if(a!==q&&$(a,t))return s[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return s[t]=3,i[t];if(n!==q&&$(n,t))return s[t]=4,n[t];kr&&(s[t]=0)}}const d=Lt[t];let m,g;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=o.__cssModules)&&(m=m[t]))return m;if(n!==q&&$(n,t))return s[t]=4,n[t];if(g=l.config.globalProperties,$(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return sr(a,t)?(a[t]=n,!0):r!==q&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==q&&$(e,s)||sr(t,s)||(o=i[0])&&$(o,s)||$(r,s)||$(Lt,s)||$(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ba(e){return R(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let kr=!0;function Tl(e){const t=ia(e),n=e.proxy,r=e.ctx;kr=!1,t.beforeCreate&&Ya(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:c,created:d,beforeMount:m,mounted:g,beforeUpdate:w,updated:z,activated:N,deactivated:D,beforeDestroy:k,beforeUnmount:O,destroyed:M,unmounted:T,render:H,renderTracked:ie,renderTriggered:se,errorCaptured:ge,serverPrefetch:ve,expose:Fe,inheritAttrs:St,components:en,directives:tn,filters:er}=t;if(c&&Sl(c,r,null),s)for(const J in s){const Y=s[J];L(Y)&&(r[J]=Y.bind(n))}if(a){const J=a.call(n,n);V(J)&&(e.data=Qr(J))}if(kr=!0,i)for(const J in i){const Y=i[J],Qe=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):Oe,nn=!L(Y)&&L(Y.set)?Y.set.bind(n):Oe,et=rt({get:Qe,set:nn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>et.value,set:Pe=>et.value=Pe})}if(o)for(const J in o)ms(o[J],r,n,J);if(l){const J=L(l)?l.call(n):l;Reflect.ownKeys(J).forEach(Y=>{Ll(Y,J[Y])})}d&&Ya(d,e,"c");function le(J,Y){R(Y)?Y.forEach(Qe=>J(Qe.bind(n))):Y&&J(Y.bind(n))}if(le(vl,m),le(gl,g),le(bl,w),le(yl,z),le(ml,N),le(pl,D),le(Al,ge),le(kl,ie),le(wl,se),le(xl,O),le(us,T),le(_l,ve),R(Fe))if(Fe.length){const J=e.exposed||(e.exposed={});Fe.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:Qe=>n[Y]=Qe})})}else e.exposed||(e.exposed={});H&&e.render===Oe&&(e.render=H),St!=null&&(e.inheritAttrs=St),en&&(e.components=en),tn&&(e.directives=tn)}function Sl(e,t,n=Oe){R(e)&&(e=Ar(e));for(const r in e){const a=e[r];let i;V(a)?"default"in a?i=kn(a.from||r,a.default,!0):i=kn(a.from||r):i=kn(a),ce(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function Ya(e,t,n){Ee(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ms(e,t,n,r){const a=r.includes(".")?ls(n,r):()=>n[r];if(re(e)){const i=t[e];L(i)&&_n(a,i)}else if(L(e))_n(a,e.bind(n));else if(V(e))if(R(e))e.forEach(i=>ms(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&_n(a,i,e)}}function ia(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>In(l,c,s,!0)),In(l,t,s)),V(t)&&i.set(t,l),l}function In(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&In(e,i,n,!0),a&&a.forEach(s=>In(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=Il[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const Il={data:Wa,props:Ka,emits:Ka,methods:Ft,computed:Ft,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:Ft,directives:Ft,watch:Ml,provide:Wa,inject:Nl};function Wa(e,t){return t?e?function(){return ne(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Nl(e,t){return Ft(Ar(e),Ar(t))}function Ar(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function Ft(e,t){return e?ne(Object.create(null),e,t):t}function Ka(e,t){return e?R(e)&&R(t)?[...new Set([...e,...t])]:ne(Object.create(null),Ba(e),Ba(t??{})):t}function Ml(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function ps(){return{app:null,config:{isNativeTag:ro,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fl=0;function Rl(e,t){return function(r,a=null){L(r)||(r=ne({},r)),a!=null&&!V(a)&&(a=null);const i=ps(),s=new Set;let o=!1;const l=i.app={_uid:Fl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:cf,get config(){return i.config},set config(c){},use(c,...d){return s.has(c)||(c&&L(c.install)?(s.add(c),c.install(l,...d)):L(c)&&(s.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!o){const g=te(r,a);return g.appContext=i,d&&t?t(g,c):e(g,c,m),o=!0,l._container=c,c.__vue_app__=l,ua(g.component)||g.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Nn=l;try{return c()}finally{Nn=null}}};return l}}let Nn=null;function Ll(e,t){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[e]=t}}function kn(e,t,n=!1){const r=ae||we;if(r||Nn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Nn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r&&r.proxy):t}}function zl(e,t,n,r=!1){const a={},i={};Tn(i,Xn,1),e.propsDefaults=Object.create(null),hs(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:Ko(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function jl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=U(a),[l]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let g=d[m];if(Bn(e.emitsOptions,g))continue;const w=t[g];if(l)if($(i,g))w!==i[g]&&(i[g]=w,c=!0);else{const z=Me(g);a[z]=Or(l,o,z,w,e,!1)}else w!==i[g]&&(i[g]=w,c=!0)}}}else{hs(e,t,a,i)&&(c=!0);let d;for(const m in o)(!t||!$(t,m)&&((d=Et(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Or(l,o,m,void 0,e,!0)):delete a[m]);if(i!==o)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&je(e,"set","$attrs")}function hs(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(xn(l))continue;const c=t[l];let d;a&&$(a,d=Me(l))?!i||!i.includes(d)?n[d]=c:(o||(o={}))[d]=c:Bn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(i){const l=U(n),c=o||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Or(a,l,m,c[m],e,!$(c,m))}}return s}function Or(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=$(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(At(a),r=c[n]=l.call(null,t),ft())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===Et(n))&&(r=!0))}return r}function vs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[g,w]=vs(m,t,!0);ne(s,g),w&&o.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return V(e)&&r.set(e,bt),bt;if(R(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);Xa(m)&&(s[m]=q)}else if(i)for(const d in i){const m=Me(d);if(Xa(m)){const g=i[d],w=s[m]=R(g)||L(g)?{type:g}:ne({},g);if(w){const z=Ja(Boolean,w.type),N=Ja(String,w.type);w[0]=z>-1,w[1]=N<0||z<N,(z>-1||$(w,"default"))&&o.push(m)}}}const c=[s,o];return V(e)&&r.set(e,c),c}function Xa(e){return e[0]!=="$"}function qa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Va(e,t){return qa(e)===qa(t)}function Ja(e,t){return R(t)?t.findIndex(n=>Va(n,e)):L(t)&&Va(t,e)?0:-1}const gs=e=>e[0]==="_"||e==="$stable",sa=e=>R(e)?e.map(Se):[Se(e)],Dl=(e,t,n)=>{if(t._n)return t;const r=il((...a)=>sa(t(...a)),n);return r._c=!1,r},bs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(gs(a))continue;const i=e[a];if(L(i))t[a]=Dl(a,i,r);else if(i!=null){const s=sa(i);t[a]=()=>s}}},ys=(e,t)=>{const n=sa(t);e.slots.default=()=>n},$l=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Tn(t,"_",n)):bs(t,e.slots={})}else e.slots={},t&&ys(e,t);Tn(e.slots,Xn,1)},Ul=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=q;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(ne(a,t),!n&&o===1&&delete a._):(i=!t.$stable,bs(t,a)),s=t}else t&&(ys(e,t),s={default:1});if(i)for(const o in a)!gs(o)&&!(o in s)&&delete a[o]};function Er(e,t,n,r,a=!1){if(R(e)){e.forEach((g,w)=>Er(g,t&&(R(t)?t[w]:t),n,r,a));return}if(wn(r)&&!a)return;const i=r.shapeFlag&4?ua(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,c=t&&t.r,d=o.refs===q?o.refs={}:o.refs,m=o.setupState;if(c!=null&&c!==l&&(re(c)?(d[c]=null,$(m,c)&&(m[c]=null)):ce(c)&&(c.value=null)),L(l))qe(l,o,12,[s,d]);else{const g=re(l),w=ce(l);if(g||w){const z=()=>{if(e.f){const N=g?$(m,l)?m[l]:d[l]:l.value;a?R(N)&&Br(N,i):R(N)?N.includes(i)||N.push(i):g?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else g?(d[l]=s,$(m,l)&&(m[l]=s)):w&&(l.value=s,e.k&&(d[e.k]=s))};s?(z.id=-1,de(z,n)):z()}}}const de=ul;function Hl(e){return Bl(e)}function Bl(e,t){const n=pr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:g,setScopeId:w=Oe,insertStaticContent:z}=e,N=(f,u,p,v=null,h=null,x=null,A=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!Nt(f,u)&&(v=rn(f),Pe(f,h,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:S,shapeFlag:P}=u;switch(b){case Kn:D(f,u,p,v);break;case Bt:k(f,u,p,v);break;case An:f==null&&O(u,p,v,A);break;case xe:en(f,u,p,v,h,x,A,y,_);break;default:P&1?H(f,u,p,v,h,x,A,y,_):P&6?tn(f,u,p,v,h,x,A,y,_):(P&64||P&128)&&b.process(f,u,p,v,h,x,A,y,_,dt)}S!=null&&h&&Er(S,f&&f.ref,x,u||f,!u)},D=(f,u,p,v)=>{if(f==null)r(u.el=o(u.children),p,v);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},k=(f,u,p,v)=>{f==null?r(u.el=l(u.children||""),p,v):u.el=f.el},O=(f,u,p,v)=>{[f.el,f.anchor]=z(f.children,u,p,v,f.el,f.anchor)},M=({el:f,anchor:u},p,v)=>{let h;for(;f&&f!==u;)h=g(f),r(f,p,v),f=h;r(u,p,v)},T=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=g(f),a(f),f=p;a(u)},H=(f,u,p,v,h,x,A,y,_)=>{A=A||u.type==="svg",f==null?ie(u,p,v,h,x,A,y,_):ve(f,u,h,x,A,y,_)},ie=(f,u,p,v,h,x,A,y)=>{let _,b;const{type:S,props:P,shapeFlag:I,transition:F,dirs:j}=f;if(_=f.el=s(f.type,x,P&&P.is,P),I&8?d(_,f.children):I&16&&ge(f.children,_,null,v,h,x&&S!=="foreignObject",A,y),j&&tt(f,null,v,"created"),se(_,f,f.scopeId,A,v),P){for(const B in P)B!=="value"&&!xn(B)&&i(_,B,null,P[B],x,f.children,v,h,Re);"value"in P&&i(_,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Te(b,v,f)}j&&tt(f,null,v,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&F&&!F.persisted;W&&F.beforeEnter(_),r(_,u,p),((b=P&&P.onVnodeMounted)||W||j)&&de(()=>{b&&Te(b,v,f),W&&F.enter(_),j&&tt(f,null,v,"mounted")},h)},se=(f,u,p,v,h)=>{if(p&&w(f,p),v)for(let x=0;x<v.length;x++)w(f,v[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;se(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},ge=(f,u,p,v,h,x,A,y,_=0)=>{for(let b=_;b<f.length;b++){const S=f[b]=y?Ke(f[b]):Se(f[b]);N(null,S,u,p,v,h,x,A,y)}},ve=(f,u,p,v,h,x,A)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:S}=u;_|=f.patchFlag&16;const P=f.props||q,I=u.props||q;let F;p&&nt(p,!1),(F=I.onVnodeBeforeUpdate)&&Te(F,p,u,f),S&&tt(u,f,p,"beforeUpdate"),p&&nt(p,!0);const j=h&&u.type!=="foreignObject";if(b?Fe(f.dynamicChildren,b,y,p,v,j,x):A||Y(f,u,y,null,p,v,j,x,!1),_>0){if(_&16)St(y,u,P,I,p,v,h);else if(_&2&&P.class!==I.class&&i(y,"class",null,I.class,h),_&4&&i(y,"style",P.style,I.style,h),_&8){const W=u.dynamicProps;for(let B=0;B<W.length;B++){const Q=W[B],be=P[Q],mt=I[Q];(mt!==be||Q==="value")&&i(y,Q,be,mt,h,f.children,p,v,Re)}}_&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&St(y,u,P,I,p,v,h);((F=I.onVnodeUpdated)||S)&&de(()=>{F&&Te(F,p,u,f),S&&tt(u,f,p,"updated")},v)},Fe=(f,u,p,v,h,x,A)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],S=_.el&&(_.type===xe||!Nt(_,b)||_.shapeFlag&70)?m(_.el):p;N(_,b,S,null,v,h,x,A,!0)}},St=(f,u,p,v,h,x,A)=>{if(p!==v){if(p!==q)for(const y in p)!xn(y)&&!(y in v)&&i(f,y,p[y],null,A,u.children,h,x,Re);for(const y in v){if(xn(y))continue;const _=v[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,A,u.children,h,x,Re)}"value"in v&&i(f,"value",p.value,v.value)}},en=(f,u,p,v,h,x,A,y,_)=>{const b=u.el=f?f.el:o(""),S=u.anchor=f?f.anchor:o("");let{patchFlag:P,dynamicChildren:I,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),f==null?(r(b,p,v),r(S,p,v),ge(u.children,p,S,h,x,A,y,_)):P>0&&P&64&&I&&f.dynamicChildren?(Fe(f.dynamicChildren,I,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&xs(f,u,!0)):Y(f,u,p,S,h,x,A,y,_)},tn=(f,u,p,v,h,x,A,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,v,A,_):er(u,p,v,h,x,A,_):Oa(f,u,_)},er=(f,u,p,v,h,x,A)=>{const y=f.component=Ql(f,v,h);if(fs(f)&&(y.ctx.renderer=dt),ef(y),y.asyncDep){if(h&&h.registerDep(y,le),!f.el){const _=y.subTree=te(Bt);k(null,_,u,p)}return}le(y,f,u,p,h,x,A)},Oa=(f,u,p)=>{const v=u.component=f.component;if(ll(f,u,p))if(v.asyncDep&&!v.asyncResolved){J(v,u,p);return}else v.next=u,tl(v.update),v.update();else u.el=f.el,v.vnode=u},le=(f,u,p,v,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:S,bu:P,u:I,parent:F,vnode:j}=f,W=S,B;nt(f,!1),S?(S.el=j.el,J(f,S,A)):S=j,P&&ar(P),(B=S.props&&S.props.onVnodeBeforeUpdate)&&Te(B,F,S,j),nt(f,!0);const Q=ir(f),be=f.subTree;f.subTree=Q,N(be,Q,m(be.el),rn(be),f,h,x),S.el=Q.el,W===null&&fl(f,Q.el),I&&de(I,h),(B=S.props&&S.props.onVnodeUpdated)&&de(()=>Te(B,F,S,j),h)}else{let S;const{el:P,props:I}=u,{bm:F,m:j,parent:W}=f,B=wn(u);if(nt(f,!1),F&&ar(F),!B&&(S=I&&I.onVnodeBeforeMount)&&Te(S,W,u),nt(f,!0),P&&nr){const Q=()=>{f.subTree=ir(f),nr(P,f.subTree,f,h,null)};B?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Q()):Q()}else{const Q=f.subTree=ir(f);N(null,Q,p,v,f,h,x),u.el=Q.el}if(j&&de(j,h),!B&&(S=I&&I.onVnodeMounted)){const Q=u;de(()=>Te(S,W,Q),h)}(u.shapeFlag&256||W&&wn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&de(f.a,h),f.isMounted=!0,u=p=v=null}},_=f.effect=new Vr(y,()=>aa(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,nt(f,!0),b()},J=(f,u,p)=>{u.component=f;const v=f.vnode.props;f.vnode=u,f.next=null,jl(f,u.props,v,p),Ul(f,u.children,p),Pt(),$a(),Ct()},Y=(f,u,p,v,h,x,A,y,_=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,P=u.children,{patchFlag:I,shapeFlag:F}=u;if(I>0){if(I&128){nn(b,P,p,v,h,x,A,y,_);return}else if(I&256){Qe(b,P,p,v,h,x,A,y,_);return}}F&8?(S&16&&Re(b,h,x),P!==b&&d(p,P)):S&16?F&16?nn(b,P,p,v,h,x,A,y,_):Re(b,h,x,!0):(S&8&&d(p,""),F&16&&ge(P,p,v,h,x,A,y,_))},Qe=(f,u,p,v,h,x,A,y,_)=>{f=f||bt,u=u||bt;const b=f.length,S=u.length,P=Math.min(b,S);let I;for(I=0;I<P;I++){const F=u[I]=_?Ke(u[I]):Se(u[I]);N(f[I],F,p,null,h,x,A,y,_)}b>S?Re(f,h,x,!0,!1,P):ge(u,p,v,h,x,A,y,_,P)},nn=(f,u,p,v,h,x,A,y,_)=>{let b=0;const S=u.length;let P=f.length-1,I=S-1;for(;b<=P&&b<=I;){const F=f[b],j=u[b]=_?Ke(u[b]):Se(u[b]);if(Nt(F,j))N(F,j,p,null,h,x,A,y,_);else break;b++}for(;b<=P&&b<=I;){const F=f[P],j=u[I]=_?Ke(u[I]):Se(u[I]);if(Nt(F,j))N(F,j,p,null,h,x,A,y,_);else break;P--,I--}if(b>P){if(b<=I){const F=I+1,j=F<S?u[F].el:v;for(;b<=I;)N(null,u[b]=_?Ke(u[b]):Se(u[b]),p,j,h,x,A,y,_),b++}}else if(b>I)for(;b<=P;)Pe(f[b],h,x,!0),b++;else{const F=b,j=b,W=new Map;for(b=j;b<=I;b++){const pe=u[b]=_?Ke(u[b]):Se(u[b]);pe.key!=null&&W.set(pe.key,b)}let B,Q=0;const be=I-j+1;let mt=!1,Ca=0;const It=new Array(be);for(b=0;b<be;b++)It[b]=0;for(b=F;b<=P;b++){const pe=f[b];if(Q>=be){Pe(pe,h,x,!0);continue}let Ce;if(pe.key!=null)Ce=W.get(pe.key);else for(B=j;B<=I;B++)if(It[B-j]===0&&Nt(pe,u[B])){Ce=B;break}Ce===void 0?Pe(pe,h,x,!0):(It[Ce-j]=b+1,Ce>=Ca?Ca=Ce:mt=!0,N(pe,u[Ce],p,null,h,x,A,y,_),Q++)}const Ta=mt?Yl(It):bt;for(B=Ta.length-1,b=be-1;b>=0;b--){const pe=j+b,Ce=u[pe],Sa=pe+1<S?u[pe+1].el:v;It[b]===0?N(null,Ce,p,Sa,h,x,A,y,_):mt&&(B<0||b!==Ta[B]?et(Ce,p,Sa,2):B--)}}},et=(f,u,p,v,h=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=f;if(b&6){et(f.component.subTree,u,p,v);return}if(b&128){f.suspense.move(u,p,v);return}if(b&64){A.move(f,u,p,dt);return}if(A===xe){r(x,u,p);for(let P=0;P<_.length;P++)et(_[P],u,p,v);r(f.anchor,u,p);return}if(A===An){M(f,u,p);return}if(v!==2&&b&1&&y)if(v===0)y.beforeEnter(x),r(x,u,p),de(()=>y.enter(x),h);else{const{leave:P,delayLeave:I,afterLeave:F}=y,j=()=>r(x,u,p),W=()=>{P(x,()=>{j(),F&&F()})};I?I(x,j,W):W()}else r(x,u,p)},Pe=(f,u,p,v=!1,h=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:S,patchFlag:P,dirs:I}=f;if(y!=null&&Er(y,null,p,f,!0),S&256){u.ctx.deactivate(f);return}const F=S&1&&I,j=!wn(f);let W;if(j&&(W=A&&A.onVnodeBeforeUnmount)&&Te(W,u,f),S&6)no(f.component,p,v);else{if(S&128){f.suspense.unmount(p,v);return}F&&tt(f,null,u,"beforeUnmount"),S&64?f.type.remove(f,u,p,h,dt,v):b&&(x!==xe||P>0&&P&64)?Re(b,u,p,!1,!0):(x===xe&&P&384||!h&&S&16)&&Re(_,u,p),v&&Ea(f)}(j&&(W=A&&A.onVnodeUnmounted)||F)&&de(()=>{W&&Te(W,u,f),F&&tt(f,null,u,"unmounted")},p)},Ea=f=>{const{type:u,el:p,anchor:v,transition:h}=f;if(u===xe){to(p,v);return}if(u===An){T(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,_=()=>A(p,x);y?y(f.el,x,_):_()}else x()},to=(f,u)=>{let p;for(;f!==u;)p=g(f),a(f),f=p;a(u)},no=(f,u,p)=>{const{bum:v,scope:h,update:x,subTree:A,um:y}=f;v&&ar(v),h.stop(),x&&(x.active=!1,Pe(A,f,u,p)),y&&de(y,u),de(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Re=(f,u,p,v=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Pe(f[A],u,p,v,h)},rn=f=>f.shapeFlag&6?rn(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),Pa=(f,u,p)=>{f==null?u._vnode&&Pe(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),$a(),rs(),u._vnode=f},dt={p:N,um:Pe,m:et,r:Ea,mt:er,mc:ge,pc:Y,pbc:Fe,n:rn,o:e};let tr,nr;return t&&([tr,nr]=t(dt)),{render:Pa,hydrate:tr,createApp:Rl(Pa,tr)}}function nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function xs(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=Ke(a[i]),o.el=s.el),n||xs(s,o)),o.type===Kn&&(o.el=s.el)}}function Yl(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<c?i=o+1:s=o;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const Wl=e=>e.__isTeleport,xe=Symbol.for("v-fgt"),Kn=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),An=Symbol.for("v-stc"),zt=[];let ke=null;function oa(e=!1){zt.push(ke=e?null:[])}function Kl(){zt.pop(),ke=zt[zt.length-1]||null}let Yt=1;function Ga(e){Yt+=e}function Xl(e){return e.dynamicChildren=Yt>0?ke||bt:null,Kl(),Yt>0&&ke&&ke.push(e),e}function la(e,t,n,r,a,i){return Xl(G(e,t,n,r,a,i,!0))}function Pr(e){return e?e.__v_isVNode===!0:!1}function Nt(e,t){return e.type===t.type&&e.key===t.key}const Xn="__vInternal",_s=({key:e})=>e??null,On=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||ce(e)||L(e)?{i:we,r:e,k:t,f:!!n}:e:null);function G(e,t=null,n=null,r=0,a=null,i=e===xe?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&_s(t),ref:t&&On(t),scopeId:ss,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:we};return o?(fa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=re(n)?8:16),Yt>0&&!s&&ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ke.push(l),l}const te=ql;function ql(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===El)&&(e=Bt),Pr(e)){const o=kt(e,t,!0);return n&&fa(o,n),Yt>0&&!i&&ke&&(o.shapeFlag&6?ke[ke.indexOf(e)]=o:ke.push(o)),o.patchFlag|=-2,o}if(sf(e)&&(e=e.__vccOpts),t){t=Vl(t);let{class:o,style:l}=t;o&&!re(o)&&(t.class=Xr(o)),V(l)&&(Zi(l)&&!R(l)&&(l=ne({},l)),t.style=Kr(l))}const s=re(e)?1:cl(e)?128:Wl(e)?64:V(e)?4:L(e)?2:0;return G(e,t,n,r,a,s,i,!0)}function Vl(e){return e?Zi(e)||Xn in e?ne({},e):e:null}function kt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=e,o=t?Jl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&_s(o),ref:t&&t.ref?n&&a?R(a)?a.concat(On(t)):[a,On(t)]:On(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&kt(e.ssContent),ssFallback:e.ssFallback&&kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function qn(e=" ",t=0){return te(Kn,null,e,t)}function ws(e,t){const n=te(An,null,e);return n.staticCount=t,n}function Se(e){return e==null||typeof e=="boolean"?te(Bt):R(e)?te(xe,null,e.slice()):typeof e=="object"?Ke(e):te(Kn,null,String(e))}function Ke(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:kt(e)}function fa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),fa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Xn in t)?t._ctx=we:a===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[qn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Jl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Xr([t.class,r.class]));else if(a==="style")t.style=Kr([t.style,r.style]);else if(zn(a)){const i=t[a],s=r[a];s&&i!==s&&!(R(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function Te(e,t,n,r=null){Ee(e,t,7,[n,r])}const Gl=ps();let Zl=0;function Ql(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Gl,i={uid:Zl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new go(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vs(r,a),emitsOptions:is(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=al.bind(null,i),e.ce&&e.ce(i),i}let ae=null,ca,pt,Za="__VUE_INSTANCE_SETTERS__";(pt=pr()[Za])||(pt=pr()[Za]=[]),pt.push(e=>ae=e),ca=e=>{pt.length>1?pt.forEach(t=>t(e)):pt[0](e)};const At=e=>{ca(e),e.scope.on()},ft=()=>{ae&&ae.scope.off(),ca(null)};function ks(e){return e.vnode.shapeFlag&4}let Wt=!1;function ef(e,t=!1){Wt=t;const{props:n,children:r}=e.vnode,a=ks(e);zl(e,n,a,t),$l(e,r);const i=a?tf(e,t):void 0;return Wt=!1,i}function tf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Qi(new Proxy(e.ctx,Cl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?rf(e):null;At(e),Pt();const i=qe(r,e,0,[e.props,a]);if(Ct(),ft(),Li(i)){if(i.then(ft,ft),t)return i.then(s=>{Qa(e,s,t)}).catch(s=>{Hn(s,e,0)});e.asyncDep=i}else Qa(e,i,t)}else As(e,t)}function Qa(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=es(t)),As(e,n)}let ei;function As(e,t,n){const r=e.type;if(!e.render){if(!t&&ei&&!r.render){const a=r.template||ia(e).template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,c=ne(ne({isCustomElement:i,delimiters:o},s),l);r.render=ei(a,c)}}e.render=r.render||Oe}At(e),Pt(),Tl(e),Ct(),ft()}function nf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function rf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return nf(e)},slots:e.slots,emit:e.emit,expose:t}}function ua(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(es(Qi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Lt)return Lt[n](e)},has(t,n){return n in t||n in Lt}}))}function af(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function sf(e){return L(e)&&"__vccOpts"in e}const rt=(e,t)=>Go(e,t,Wt);function of(e,t,n){const r=arguments.length;return r===2?V(t)&&!R(t)?Pr(t)?te(e,null,[t]):te(e,t):te(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pr(n)&&(n=[n]),te(e,t,n))}const lf=Symbol.for("v-scx"),ff=()=>kn(lf),cf="3.3.4",uf="http://www.w3.org/2000/svg",it=typeof document<"u"?document:null,ti=it&&it.createElement("template"),df={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?it.createElementNS(uf,e):it.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>it.createTextNode(e),createComment:e=>it.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>it.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ti.innerHTML=r?`<svg>${e}</svg>`:e;const o=ti.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function mf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function pf(e,t,n){const r=e.style,a=re(n);if(n&&!a){if(t&&!re(t))for(const i in t)n[i]==null&&Cr(r,i,"");for(const i in n)Cr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ni=/\s*!important$/;function Cr(e,t,n){if(R(n))n.forEach(r=>Cr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=hf(e,t);ni.test(n)?e.setProperty(Et(r),n.replace(ni,""),"important"):e[r]=n}}const ri=["Webkit","Moz","ms"],or={};function hf(e,t){const n=or[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return or[t]=r;r=$n(r);for(let a=0;a<ri.length;a++){const i=ri[a]+r;if(i in e)return or[t]=i}return t}const ai="http://www.w3.org/1999/xlink";function vf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ai,t.slice(6,t.length)):e.setAttributeNS(ai,t,n);else{const i=vo(t);n==null||i&&!Di(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function gf(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const c=o==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Di(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function bf(e,t,n,r){e.addEventListener(t,n,r)}function yf(e,t,n,r){e.removeEventListener(t,n,r)}function xf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=_f(t);if(r){const c=i[t]=Af(r,a);bf(e,o,c,l)}else s&&(yf(e,o,s,l),i[t]=void 0)}}const ii=/(?:Once|Passive|Capture)$/;function _f(e){let t;if(ii.test(e)){t={};let r;for(;r=e.match(ii);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Et(e.slice(2)),t]}let lr=0;const wf=Promise.resolve(),kf=()=>lr||(wf.then(()=>lr=0),lr=Date.now());function Af(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(Of(r,n.value),t,5,[r])};return n.value=e,n.attached=kf(),n}function Of(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const si=/^on[a-z]/,Ef=(e,t,n,r,a=!1,i,s,o,l)=>{t==="class"?mf(e,r,a):t==="style"?pf(e,n,r):zn(t)?Hr(t)||xf(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Pf(e,t,r,a))?gf(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),vf(e,t,r,a))};function Pf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&si.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||si.test(t)&&re(n)?!1:t in e}const Cf=ne({patchProp:Ef},df);let oi;function Tf(){return oi||(oi=Hl(Cf))}const Sf=(...e)=>{const t=Tf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=If(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function If(e){return re(e)?document.querySelector(e):e}const Nf=""+new URL("background-2bfe5c39.png",import.meta.url).href,Mf=G("div",{class:"input"},[G("span",{class:"prompt-green"},"❯"),G("span",{class:"green"},"neofetch")],-1),Ff={class:"output"},Rf=ws('<div class="left"><div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⠿⢛⣻⣭⣿</div><div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⡒⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣶⡶⣖⣦⣷⣶⣶⣿⣿⣿⣿⣿</div><div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⣄⡑⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠠⠄⠐⣒⣀⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div><div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣷⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div><div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡻⠿⢋⣴⣿⣧⣀⠤⣤⣴⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div><div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣽⣷⣿⣿⣿⣿⣿⣿⣿⣶⣭⣙⣛⠿⢿⡿⠿⣛⡛⠉⣉⣁⣠⣤⣤⣶⣾⢙⣿⣿⣿⣿⣿⣿⣿⣿⣿</div><div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠴⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣾⠏⣥⣾⣿⣿⣿⣿⣿⣿⡿⢃⣾⣿⣿⣿⣿⡿⣱⣿⣿⣿</div><div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣎⣀⣀⡀⠈⠛⠻⣿⠿⢛⣫⣷⣿⣿⣿⣿⣿⣿⣿⣧⢰⣿⣿⣿⣿⣿⣿⠿⣋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div><div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⢻⡻⡍⠿⢿⣷⣤⣴⣫⣾⡿⠛⠛⠻⣿⣿⣿⣿⣿⣿⣿⢶⣟⣛⠿⢛⣩⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div><div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡈⣎⣻⣶⣿⣷⣿⣿⣿⡿⣿⣿⣷⣦⡄⠀⠹⣿⣿⣿⣿⡏⠈⢋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠟⠛⠋⠉⠁</div><div>⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠠⠀⠀⡆⢠⣵⣿⣿⣿⣿⣿⣿⣿⣿⠸⣌⠻⢿⣷⣤⣀⣨⣿⣿⠏⠀⢀⣸⣿⣿⣿⣿⠟⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴</div><div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⣄⣀⣻⢪⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠻⠻⣿⣿⣿⣵⡾⠟⠛⠁⣠⣴⣾⣿⣿⡿⠟⢁⣀⠀⠀⢀⡀⣀⡠⠀⣀⣤⣴⣶⣿⣿⣿</div><div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢁⣠⡘⡃⠟⠛⠿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠉⠉⣀⣠⣴⣶⣾⣿⣿⡿⠋⣁⣴⣾⣿⣿⠿⠟⠛⣋⣥⣶⣿⣿⣿⣿⣿⣿⣿⣿</div><div>⢀⠀⠀⠐⣄⠀⢀⢤⢄⣠⢅⡼⣻⣾⣷⣄⡀⢀⣠⠟⢛⣋⣥⣶⡀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⡡⠐⣙⣋⣭⣥⣴⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div><div>⡥⣨⣂⡆⣀⣬⣮⣄⣠⡾⣿⣿⣿⣿⣿⣿⣧⣻⢿⣿⣿⣿⡟⣀⣤⣤⣈⠛⠛⠛⠛⠛⢋⣉⣤⣤⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div><div>⣥⣝⡷⢶⣿⣷⣿⠉⠀⠉⠉⢛⣻⢿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div><div>⣉⣵⣿⣾⣿⣿⣿⣷⣦⣄⠘⠻⣿⣿⣶⣭⣛⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣛</div><div>⡛⠿⣯⣿⣿⣿⣿⣿⣿⣿⣷⣦⣌⡈⠉⠛⠿⣿⣷⣯⣟⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢟⣛⣭⣵⣶⣿⣿⣿</div><div>⣦⣹⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⣈⠙⠿⠿⠛⠉⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣛⣫⣭⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿</div><div>⣿⣿⣿⣿⣿⣏⣙⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⣋⣩⣽⣶⣜⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div></div>',1),Lf={class:"right"},zf=G("div",null,[G("span",{class:"green"},"kenneth-ho")],-1),jf=G("div",null,"----------",-1),Df=G("div",null,[G("span",{class:"green"},"OS:"),qn(" openSUSE Leap 15.5 x86_64 ")],-1),$f=G("span",{class:"green"},"Uptime:",-1),Uf=ws('<div><span class="green">Shell:</span> zsh 5.6 </div><div> </div><div><span class="green">GitHub: </span><a href="https://github.com/kenesu-h">kenesu-h</a></div><div><span class="green">LinkedIn: </span><a href="https://www.linkedin.com/in/kenneth-ho-2001/">kenneth-ho-2001</a></div><div> </div><div><span class="green">College: </span> Northeastern University </div><div><span class="green">Class of: </span> 2023 </div><div> </div><div><span class="green">Languages:</span> TypeScript, Python, Rust, Java, C/C++ </div><div><span class="green">Technologies:</span> Git, Linux, React, Angular, GraphQL </div><div> </div><div><span class="green">PFP:</span> From <a href="https://en.wikipedia.org/wiki/Cowboy_Bebop">Cowboy Bebop</a> (Sunrise, 1997) </div><div> Generated using <a href="https://github.com/TheZoraiz/ascii-image-converter"> TheZoraiz/ascii-image-converter </a></div><div> </div><div><span class="green">Background:</span> From <a href="https://en.wikipedia.org/wiki/Persona_5">Persona 5</a> (Atlus, 2016) </div><div> </div><div class="palette"><span class="black">███</span><span class="red">███</span><span class="green">███</span><span class="yellow">███</span><span class="blue">███</span><span class="purple">███</span><span class="cyan">███</span><span class="white">███</span></div><div class="palette"><span class="bright-black">███</span><span class="red">███</span><span class="green">███</span><span class="yellow">███</span><span class="blue">███</span><span class="purple">███</span><span class="cyan">███</span><span class="bright-white">███</span></div>',18),Hf=Yn({__name:"NeofetchPrompt",setup(e){function t(a){const i=new Date;var s=i.getFullYear()-a.getFullYear(),o=i.getMonth()-a.getMonth();return o<0&&(s-=1,o+=12),{years:s,months:o}}const{years:n,months:r}=t(new Date("2001-01-01"));return(a,i)=>(oa(),la(xe,null,[Mf,G("div",Ff,[Rf,G("div",Lf,[zf,jf,Df,G("div",null,[$f,qn(" "+Na(xr(n))+" years, "+Na(xr(r))+" months ",1)]),Uf])])],64))}});const Bf={class:"terminal-window"},Yf={class:"title-bar"},Wf={class:"tab"},Kf={class:"controls"},Xf={class:"minimize"},qf={class:"maximize"},Vf={class:"close"},Jf={class:"client-area"},Gf=Yn({__name:"TerminalWindow",setup(e){return(t,n)=>{const r=Ol("font-awesome-icon");return oa(),la("div",Bf,[G("div",Yf,[G("div",Wf,[te(r,{icon:"fa-solid fa-terminal"}),qn("   Terminal ")]),G("div",Kf,[G("div",Xf,[te(r,{icon:"fa-solid fa-window-minimize"})]),G("div",qf,[te(r,{icon:"fa-solid fa-window-maximize"})]),G("div",Vf,[te(r,{icon:"fa-solid fa-xmark"})])])]),G("div",Jf,[te(Hf)])])}}});const Zf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Qf=Zf(Gf,[["__scopeId","data-v-3ef16792"]]),ec=G("img",{class:"background-image",onload:"this.style.opacity=0.33",src:Nf,alt:"Persona 5 - Tokyo Night"},null,-1),tc=Yn({__name:"App",setup(e){return(t,n)=>(oa(),la(xe,null,[ec,te(Qf)],64))}});function li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?li(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):li(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Mn(e){"@babel/helpers - typeof";return Mn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mn(e)}function nc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function rc(e,t,n){return t&&fi(e.prototype,t),n&&fi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function da(e,t){return ic(e)||oc(e,t)||Os(e,t)||fc()}function Gt(e){return ac(e)||sc(e)||Os(e)||lc()}function ac(e){if(Array.isArray(e))return Tr(e)}function ic(e){if(Array.isArray(e))return e}function sc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function oc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function Os(e,t){if(e){if(typeof e=="string")return Tr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tr(e,t)}}function Tr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ci=function(){},ma={},Es={},Ps=null,Cs={mark:ci,measure:ci};try{typeof window<"u"&&(ma=window),typeof document<"u"&&(Es=document),typeof MutationObserver<"u"&&(Ps=MutationObserver),typeof performance<"u"&&(Cs=performance)}catch{}var cc=ma.navigator||{},ui=cc.userAgent,di=ui===void 0?"":ui,Je=ma,X=Es,mi=Ps,un=Cs;Je.document;var Be=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Ts=~di.indexOf("MSIE")||~di.indexOf("Trident/"),dn,mn,pn,hn,vn,De="___FONT_AWESOME___",Sr=16,Ss="fa",Is="svg-inline--fa",ct="data-fa-i2svg",Ir="data-fa-pseudo-element",uc="data-fa-pseudo-element-pending",pa="data-prefix",ha="data-icon",pi="fontawesome-i2svg",dc="async",mc=["HTML","HEAD","STYLE","SCRIPT"],Ns=function(){try{return!0}catch{return!1}}(),K="classic",Z="sharp",va=[K,Z];function Zt(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var Kt=Zt((dn={},ee(dn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ee(dn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),dn)),Xt=Zt((mn={},ee(mn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ee(mn,Z,{solid:"fass",regular:"fasr",light:"fasl"}),mn)),qt=Zt((pn={},ee(pn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ee(pn,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),pn)),pc=Zt((hn={},ee(hn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ee(hn,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),hn)),hc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ms="fa-layers-text",vc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,gc=Zt((vn={},ee(vn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ee(vn,Z,{900:"fass",400:"fasr",300:"fasl"}),vn)),Fs=[1,2,3,4,5,6,7,8,9,10],bc=Fs.concat([11,12,13,14,15,16,17,18,19,20]),yc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],st={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Vt=new Set;Object.keys(Xt[K]).map(Vt.add.bind(Vt));Object.keys(Xt[Z]).map(Vt.add.bind(Vt));var xc=[].concat(va,Gt(Vt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",st.GROUP,st.SWAP_OPACITY,st.PRIMARY,st.SECONDARY]).concat(Fs.map(function(e){return"".concat(e,"x")})).concat(bc.map(function(e){return"w-".concat(e)})),jt=Je.FontAwesomeConfig||{};function _c(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function wc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var kc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];kc.forEach(function(e){var t=da(e,2),n=t[0],r=t[1],a=wc(_c(n));a!=null&&(jt[r]=a)})}var Rs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ss,replacementClass:Is,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};jt.familyPrefix&&(jt.cssPrefix=jt.familyPrefix);var Ot=E(E({},Rs),jt);Ot.autoReplaceSvg||(Ot.observeMutations=!1);var C={};Object.keys(Rs).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){Ot[e]=n,Dt.forEach(function(r){return r(C)})},get:function(){return Ot[e]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){Ot.cssPrefix=t,Dt.forEach(function(n){return n(C)})},get:function(){return Ot.cssPrefix}});Je.FontAwesomeConfig=C;var Dt=[];function Ac(e){return Dt.push(e),function(){Dt.splice(Dt.indexOf(e),1)}}var We=Sr,Ne={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Oc(e){if(!(!e||!Be)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Ec="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Jt(){for(var e=12,t="";e-- >0;)t+=Ec[Math.random()*62|0];return t}function Tt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ga(e){return e.classList?Tt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ls(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ls(e[n]),'" ')},"").trim()}function Vn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ba(e){return e.size!==Ne.size||e.x!==Ne.x||e.y!==Ne.y||e.rotate!==Ne.rotate||e.flipX||e.flipY}function Cc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Tc(e){var t=e.transform,n=e.width,r=n===void 0?Sr:n,a=e.height,i=a===void 0?Sr:a,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&Ts?l+="translate(".concat(t.x/We-r/2,"em, ").concat(t.y/We-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/We,"em), calc(-50% + ").concat(t.y/We,"em)) "):l+="translate(".concat(t.x/We,"em, ").concat(t.y/We,"em) "),l+="scale(".concat(t.size/We*(t.flipX?-1:1),", ").concat(t.size/We*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Sc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function zs(){var e=Ss,t=Is,n=C.cssPrefix,r=C.replacementClass,a=Sc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var hi=!1;function fr(){C.autoAddCss&&!hi&&(Oc(zs()),hi=!0)}var Ic={mixout:function(){return{dom:{css:zs,insertCss:fr}}},hooks:function(){return{beforeDOMElementCreation:function(){fr()},beforeI2svg:function(){fr()}}}},$e=Je||{};$e[De]||($e[De]={});$e[De].styles||($e[De].styles={});$e[De].hooks||($e[De].hooks={});$e[De].shims||($e[De].shims=[]);var Ae=$e[De],js=[],Nc=function e(){X.removeEventListener("DOMContentLoaded",e),Fn=1,js.map(function(t){return t()})},Fn=!1;Be&&(Fn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Fn||X.addEventListener("DOMContentLoaded",Nc));function Mc(e){Be&&(Fn?setTimeout(e,0):js.push(e))}function Qt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ls(e):"<".concat(t," ").concat(Pc(r),">").concat(i.map(Qt).join(""),"</").concat(t,">")}function vi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Fc=function(t,n){return function(r,a,i,s){return t.call(n,r,a,i,s)}},cr=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=a!==void 0?Fc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<s;l++)c=i[l],d=o(d,t[c],c,t);return d};function Rc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Nr(e){var t=Rc(e);return t.length===1?t[0].toString(16):null}function Lc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function gi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Mr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=gi(t);typeof Ae.hooks.addPack=="function"&&!a?Ae.hooks.addPack(e,gi(t)):Ae.styles[e]=E(E({},Ae.styles[e]||{}),i),e==="fas"&&Mr("fa",t)}var gn,bn,yn,vt=Ae.styles,zc=Ae.shims,jc=(gn={},ee(gn,K,Object.values(qt[K])),ee(gn,Z,Object.values(qt[Z])),gn),ya=null,Ds={},$s={},Us={},Hs={},Bs={},Dc=(bn={},ee(bn,K,Object.keys(Kt[K])),ee(bn,Z,Object.keys(Kt[Z])),bn);function $c(e){return~xc.indexOf(e)}function Uc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!$c(a)?a:null}var Ys=function(){var t=function(i){return cr(vt,function(s,o,l){return s[l]=cr(o,i,{}),s},{})};Ds=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),$s=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),Bs=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in vt||C.autoFetchSvg,r=cr(zc,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Us=r.names,Hs=r.unicodes,ya=Jn(C.styleDefault,{family:C.familyDefault})};Ac(function(e){ya=Jn(e.styleDefault,{family:C.familyDefault})});Ys();function xa(e,t){return(Ds[e]||{})[t]}function Hc(e,t){return($s[e]||{})[t]}function ot(e,t){return(Bs[e]||{})[t]}function Ws(e){return Us[e]||{prefix:null,iconName:null}}function Bc(e){var t=Hs[e],n=xa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ge(){return ya}var _a=function(){return{prefix:null,iconName:null,rest:[]}};function Jn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,a=Kt[r][e],i=Xt[r][e]||Xt[r][a],s=e in Ae.styles?e:null;return i||s||null}var bi=(yn={},ee(yn,K,Object.keys(qt[K])),ee(yn,Z,Object.keys(qt[Z])),yn);function Gn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ee(t,K,"".concat(C.cssPrefix,"-").concat(K)),ee(t,Z,"".concat(C.cssPrefix,"-").concat(Z)),t),s=null,o=K;(e.includes(i[K])||e.some(function(c){return bi[K].includes(c)}))&&(o=K),(e.includes(i[Z])||e.some(function(c){return bi[Z].includes(c)}))&&(o=Z);var l=e.reduce(function(c,d){var m=Uc(C.cssPrefix,d);if(vt[d]?(d=jc[o].includes(d)?pc[o][d]:d,s=d,c.prefix=d):Dc[o].indexOf(d)>-1?(s=d,c.prefix=Jn(d,{family:o})):m?c.iconName=m:d!==C.replacementClass&&d!==i[K]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var g=s==="fa"?Ws(c.iconName):{},w=ot(c.prefix,c.iconName);g.prefix&&(s=null),c.iconName=g.iconName||w||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!vt.far&&vt.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},_a());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===Z&&(vt.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=ot(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Ge()||"fas"),l}var Yc=function(){function e(){nc(this,e),this.definitions={}}return rc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=E(E({},n.definitions[o]||{}),s[o]),Mr(o,s[o]);var l=qt[K][o];l&&Mr(l,s[o]),Ys()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,c=s.icon,d=c[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[o][m]=c)}),n[o][l]=c}),n}}]),e}(),yi=[],gt={},wt={},Wc=Object.keys(wt);function Kc(e,t){var n=t.mixoutsTo;return yi=e,gt={},Object.keys(wt).forEach(function(r){Wc.indexOf(r)===-1&&delete wt[r]}),yi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),Mn(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){gt[s]||(gt[s]=[]),gt[s].push(i[s])})}r.provides&&r.provides(wt)}),n}function Fr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=gt[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function ut(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=gt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return wt[e]?wt[e].apply(null,t):void 0}function Rr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ge();if(t)return t=ot(n,t)||t,vi(Ks.definitions,n,t)||vi(Ae.styles,n,t)}var Ks=new Yc,Xc=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,ut("noAuto")},qc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Be?(ut("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,Mc(function(){Jc({autoReplaceSvgRoot:n}),ut("watch",t)})}},Vc={icon:function(t){if(t===null)return null;if(Mn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ot(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Jn(t[0]);return{prefix:r,iconName:ot(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(hc))){var a=Gn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ge(),iconName:ot(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ge();return{prefix:i,iconName:ot(i,t)||t}}}},he={noAuto:Xc,config:C,dom:qc,parse:Vc,library:Ks,findIconDefinition:Rr,toHtml:Qt},Jc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Ae.styles).length>0||C.autoFetchSvg)&&Be&&C.autoReplaceSvg&&he.dom.i2svg({node:r})};function Zn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Qt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Be){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Gc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(ba(s)&&n.found&&!r.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};a.style=Vn(E(E({},i),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Zc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:s}),children:r}]}]}function wa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,g=e.watchable,w=g===void 0?!1:g,z=r.found?r:n,N=z.width,D=z.height,k=a==="fak",O=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(ve){return m.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(m.classes).join(" "),M={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(D)})},T=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/D*16*.0625,"em")}:{};w&&(M.attributes[ct]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||Jt())},children:[l]}),delete M.attributes.title);var H=E(E({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:s,symbol:o,styles:E(E({},T),m.styles)}),ie=r.found&&n.found?Ue("generateAbstractMask",H)||{children:[],attributes:{}}:Ue("generateAbstractIcon",H)||{children:[],attributes:{}},se=ie.children,ge=ie.attributes;return H.children=se,H.attributes=ge,o?Zc(H):Gc(H)}function xi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,c=E(E(E({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(c[ct]="");var d=E({},s.styles);ba(a)&&(d.transform=Tc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Vn(d);m.length>0&&(c.style=m);var g=[];return g.push({tag:"span",attributes:c,children:[t]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Qc(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Vn(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var ur=Ae.styles;function Lr(e){var t=e[0],n=e[1],r=e.slice(4),a=da(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(st.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(st.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(st.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var eu={found:!1,width:512,height:512};function tu(e,t){!Ns&&!C.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function zr(e,t){var n=t;return t==="fa"&&C.styleDefault!==null&&(t=Ge()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=Ws(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ur[t]&&ur[t][e]){var s=ur[t][e];return r(Lr(s))}tu(e,t),r(E(E({},eu),{},{icon:C.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var _i=function(){},jr=C.measurePerformance&&un&&un.mark&&un.measure?un:{mark:_i,measure:_i},Rt='FA "6.4.2"',nu=function(t){return jr.mark("".concat(Rt," ").concat(t," begins")),function(){return Xs(t)}},Xs=function(t){jr.mark("".concat(Rt," ").concat(t," ends")),jr.measure("".concat(Rt," ").concat(t),"".concat(Rt," ").concat(t," begins"),"".concat(Rt," ").concat(t," ends"))},ka={begin:nu,end:Xs},En=function(){};function wi(e){var t=e.getAttribute?e.getAttribute(ct):null;return typeof t=="string"}function ru(e){var t=e.getAttribute?e.getAttribute(pa):null,n=e.getAttribute?e.getAttribute(ha):null;return t&&n}function au(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function iu(){if(C.autoReplaceSvg===!0)return Pn.replace;var e=Pn[C.autoReplaceSvg];return e||Pn.replace}function su(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function ou(e){return X.createElement(e)}function qs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?su:ou:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(qs(s,{ceFn:r}))}),a}function lu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Pn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(qs(a),n)}),n.getAttribute(ct)===null&&C.keepOriginalSource){var r=X.createComment(lu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ga(n).indexOf(C.replacementClass))return Pn.replace(t);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===C.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return Qt(o)}).join(`
`);n.setAttribute(ct,""),n.innerHTML=s}};function ki(e){e()}function Vs(e,t){var n=typeof t=="function"?t:En;if(e.length===0)n();else{var r=ki;C.mutateApproach===dc&&(r=Je.requestAnimationFrame||ki),r(function(){var a=iu(),i=ka.begin("mutate");e.map(a),i(),n()})}}var Aa=!1;function Js(){Aa=!0}function Dr(){Aa=!1}var Rn=null;function Ai(e){if(mi&&C.observeMutations){var t=e.treeCallback,n=t===void 0?En:t,r=e.nodeCallback,a=r===void 0?En:r,i=e.pseudoElementsCallback,s=i===void 0?En:i,o=e.observeMutationsRoot,l=o===void 0?X:o;Rn=new mi(function(c){if(!Aa){var d=Ge();Tt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!wi(m.addedNodes[0])&&(C.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&wi(m.target)&&~yc.indexOf(m.attributeName))if(m.attributeName==="class"&&ru(m.target)){var g=Gn(ga(m.target)),w=g.prefix,z=g.iconName;m.target.setAttribute(pa,w||d),z&&m.target.setAttribute(ha,z)}else au(m.target)&&a(m.target)})}}),Be&&Rn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fu(){Rn&&Rn.disconnect()}function cu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function uu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Gn(ga(e));return a.prefix||(a.prefix=Ge()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Hc(a.prefix,e.innerText)||xa(a.prefix,Nr(e.innerText))),!a.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function du(e){var t=Tt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return C.autoA11y&&(n?t["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||Jt()):(t["aria-hidden"]="true",t.focusable="false")),t}function mu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ne,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=uu(e),r=n.iconName,a=n.prefix,i=n.rest,s=du(e),o=Fr("parseNodeAttributes",{},e),l=t.styleParser?cu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ne,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var pu=Ae.styles;function Gs(e){var t=C.autoReplaceSvg==="nest"?Oi(e,{styleParser:!1}):Oi(e);return~t.extra.classes.indexOf(Ms)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}var Ze=new Set;va.map(function(e){Ze.add("fa-".concat(e))});Object.keys(Kt[K]).map(Ze.add.bind(Ze));Object.keys(Kt[Z]).map(Ze.add.bind(Ze));Ze=Gt(Ze);function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Be)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(pi,"-").concat(m))},a=function(m){return n.remove("".concat(pi,"-").concat(m))},i=C.autoFetchSvg?Ze:va.map(function(d){return"fa-".concat(d)}).concat(Object.keys(pu));i.includes("fa")||i.push("fa");var s=[".".concat(Ms,":not([").concat(ct,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ct,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Tt(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ka.begin("onTree"),c=o.reduce(function(d,m){try{var g=Gs(m);g&&d.push(g)}catch(w){Ns||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(g){Vs(g,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(g){l(),m(g)})})}function hu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gs(e).then(function(n){n&&Vs([n],t)})}function vu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Rr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Rr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var gu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ne:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,c=n.maskId,d=c===void 0?null:c,m=n.title,g=m===void 0?null:m,w=n.titleId,z=w===void 0?null:w,N=n.classes,D=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,M=n.styles,T=M===void 0?{}:M;if(t){var H=t.prefix,ie=t.iconName,se=t.icon;return Zn(E({type:"icon"},t),function(){return ut("beforeDOMElementCreation",{iconDefinition:t,params:n}),C.autoA11y&&(g?O["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(z||Jt()):(O["aria-hidden"]="true",O.focusable="false")),wa({icons:{main:Lr(se),mask:l?Lr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:ie,transform:E(E({},Ne),a),symbol:s,title:g,maskId:d,titleId:z,extra:{attributes:O,styles:T,classes:D}})})}},bu={mixout:function(){return{icon:vu(gu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ei,n.nodeCallback=hu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,s=i===void 0?function(){}:i;return Ei(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,g=r.extra;return new Promise(function(w,z){Promise.all([zr(a,o),d.iconName?zr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var D=da(N,2),k=D[0],O=D[1];w([n,wa({icons:{main:k,mask:O},prefix:o,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:s,extra:g,watchable:!0})])}).catch(z)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=Vn(o);l.length>0&&(a.style=l);var c;return ba(s)&&(c=Ue("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},yu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Zn({type:"layer"},function(){ut("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(Gt(i)).join(" ")},children:s}]})}}}},xu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Zn({type:"counter",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),Qc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(Gt(o))}})})}}}},_u={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ne:a,s=r.title,o=s===void 0?null:s,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,g=r.styles,w=g===void 0?{}:g;return Zn({type:"text",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),xi({content:n,transform:E(E({},Ne),i),title:o,extra:{attributes:m,styles:w,classes:["".concat(C.cssPrefix,"-layers-text")].concat(Gt(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(Ts){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/c,l=d.height/c}return C.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,xi({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},wu=new RegExp('"',"ug"),Pi=[1105920,1112319];function ku(e){var t=e.replace(wu,""),n=Lc(t,0),r=n>=Pi[0]&&n<=Pi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Nr(a?t[0]:t),isSecondary:r||a}}function Ci(e,t){var n="".concat(uc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Tt(e.children),s=i.filter(function(se){return se.getAttribute(Ir)===t})[0],o=Je.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(vc),c=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&d!=="none"&&d!==""){var m=o.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?Z:K,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Xt[g][l[2].toLowerCase()]:gc[g][c],z=ku(m),N=z.value,D=z.isSecondary,k=l[0].startsWith("FontAwesome"),O=xa(w,N),M=O;if(k){var T=Bc(N);T.iconName&&T.prefix&&(O=T.iconName,w=T.prefix)}if(O&&!D&&(!s||s.getAttribute(pa)!==w||s.getAttribute(ha)!==M)){e.setAttribute(n,M),s&&e.removeChild(s);var H=mu(),ie=H.extra;ie.attributes[Ir]=t,zr(O,w).then(function(se){var ge=wa(E(E({},H),{},{icons:{main:se,mask:_a()},prefix:w,iconName:M,extra:ie,watchable:!0})),ve=X.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=ge.map(function(Fe){return Qt(Fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Au(e){return Promise.all([Ci(e,"::before"),Ci(e,"::after")])}function Ou(e){return e.parentNode!==document.head&&!~mc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ir)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ti(e){if(Be)return new Promise(function(t,n){var r=Tt(e.querySelectorAll("*")).filter(Ou).map(Au),a=ka.begin("searchPseudoElements");Js(),Promise.all(r).then(function(){a(),Dr(),t()}).catch(function(){a(),Dr(),n()})})}var Eu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ti,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;C.searchPseudoElements&&Ti(a)}}},Si=!1,Pu={mixout:function(){return{dom:{unwatch:function(){Js(),Si=!0}}}},hooks:function(){return{bootstrap:function(){Ai(Fr("mutationObserverCallbacks",{}))},noAuto:function(){fu()},watch:function(n){var r=n.observeMutationsRoot;Si?Dr():Ai(Fr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ii=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Cu={mixout:function(){return{parse:{transform:function(n){return Ii(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ii(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},g={transform:"translate(".concat(s/2*-1," -256)")},w={outer:o,inner:m,path:g};return{tag:"g",attributes:E({},w.outer),children:[{tag:"g",attributes:E({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),w.path)}]}]}}}},dr={x:0,y:0,width:"100%",height:"100%"};function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Tu(e){return e.tag==="g"?e.children:[e]}var Su={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Gn(a.split(" ").map(function(s){return s.trim()})):_a();return i.prefix||(i.prefix=Ge()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,c=i.width,d=i.icon,m=s.width,g=s.icon,w=Cc({transform:l,containerWidth:m,iconWidth:c}),z={tag:"rect",attributes:E(E({},dr),{},{fill:"white"})},N=d.children?{children:d.children.map(Ni)}:{},D={tag:"g",attributes:E({},w.inner),children:[Ni(E({tag:d.tag,attributes:E(E({},d.attributes),w.path)},N))]},k={tag:"g",attributes:E({},w.outer),children:[D]},O="mask-".concat(o||Jt()),M="clip-".concat(o||Jt()),T={tag:"mask",attributes:E(E({},dr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,k]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Tu(g)},T]};return r.push(H,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(O,")")},dr)}),{children:r,attributes:a}}}},Iu={provides:function(t){var n=!1;Je.matchMedia&&(n=Je.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=E(E({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Nu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Mu=[Ic,bu,yu,xu,_u,Eu,Pu,Cu,Su,Iu,Nu];Kc(Mu,{mixoutsTo:he});he.noAuto;he.config;var Qn=he.library;he.dom;var $r=he.parse;he.findIconDefinition;he.toHtml;var Fu=he.icon;he.layer;he.text;he.counter;function Mi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mi(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ln(e){"@babel/helpers - typeof";return Ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ln(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ru(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Lu(e,t){if(e==null)return{};var n=Ru(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zs={exports:{}};(function(e){(function(t){var n=function(k,O,M){if(!c(O)||m(O)||g(O)||w(O)||l(O))return O;var T,H=0,ie=0;if(d(O))for(T=[],ie=O.length;H<ie;H++)T.push(n(k,O[H],M));else{T={};for(var se in O)Object.prototype.hasOwnProperty.call(O,se)&&(T[k(se,M)]=n(k,O[se],M))}return T},r=function(k,O){O=O||{};var M=O.separator||"_",T=O.split||/(?=[A-Z])/;return k.split(T).join(M)},a=function(k){return z(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,M){return M?M.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},s=function(k,O){return r(k,O).toLowerCase()},o=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return o.call(k)=="[object Array]"},m=function(k){return o.call(k)=="[object Date]"},g=function(k){return o.call(k)=="[object RegExp]"},w=function(k){return o.call(k)=="[object Boolean]"},z=function(k){return k=k-0,k===k},N=function(k,O){var M=O&&"process"in O?O.process:O;return typeof M!="function"?k:function(T,H){return M(T,k,H)}},D={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(s,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(zu)})(Zs);var ju=Zs.exports,Du=["class","style"];function $u(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ju.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Uu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Qs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Qs(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Uu(d);break;case"style":l.style=$u(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=Lu(n,Du);return of(e.tag,ze(ze(ze({},t),{},{class:a.class,style:ze(ze({},a.style),s)},a.attrs),o),r)}var eo=!1;try{eo=!0}catch{}function Hu(){if(!eo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function mr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function Bu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Fi(e){if(e&&Ln(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if($r.icon)return $r.icon(e);if(e===null)return null;if(Ln(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Yu=Yn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=rt(function(){return Fi(t.icon)}),i=rt(function(){return mr("classes",Bu(t))}),s=rt(function(){return mr("transform",typeof t.transform=="string"?$r.transform(t.transform):t.transform)}),o=rt(function(){return mr("mask",Fi(t.mask))}),l=rt(function(){return Fu(a.value,ze(ze(ze(ze({},i.value),s.value),o.value),{},{symbol:t.symbol,title:t.title}))});_n(l,function(d){if(!d)return Hu("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var c=rt(function(){return l.value?Qs(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Wu={prefix:"fas",iconName:"terminal",icon:[576,512,[],"f120","M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Ku={prefix:"fas",iconName:"window-maximize",icon:[512,512,[128470],"f2d0","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Xu={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},qu={prefix:"fas",iconName:"window-minimize",icon:[512,512,[128469],"f2d1","M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"]};Qn.add(Wu);Qn.add(qu);Qn.add(Ku);Qn.add(Xu);Sf(tc).component("font-awesome-icon",Yu).mount("#app");
