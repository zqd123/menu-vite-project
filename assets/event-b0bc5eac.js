import{aa as P,aj as N,i as T,ak as C,al as A,am as Q,an as L,ao as j}from"./el-button-eb2cca96.js";import{I as S,r as R}from"./index-a304595a.js";function O(e){var t;const r=N(e);return(t=r==null?void 0:r.$el)!=null?t:r}const _=T?window:void 0;function E(...e){let t,r,n,u;if(C(e[0])||Array.isArray(e[0])?([r,n,u]=e,t=_):[t,r,n,u]=e,!t)return A;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const p=[],i=()=>{p.forEach(a=>a()),p.length=0},l=(a,f,s,o)=>(a.addEventListener(f,s,o),()=>a.removeEventListener(f,s,o)),d=S(()=>[O(t),N(u)],([a,f])=>{i(),a&&p.push(...r.flatMap(s=>n.map(o=>l(a,s,o,f))))},{immediate:!0,flush:"post"}),m=()=>{d(),i()};return P(m),m}let v=!1;function D(e,t,r={}){const{window:n=_,ignore:u=[],capture:p=!0,detectIframe:i=!1}=r;if(!n)return;j&&!v&&(v=!0,Array.from(n.document.body.children).forEach(s=>s.addEventListener("click",A)));let l=!0;const d=s=>u.some(o=>{if(typeof o=="string")return Array.from(n.document.querySelectorAll(o)).some(c=>c===s.target||s.composedPath().includes(c));{const c=O(o);return c&&(s.target===c||s.composedPath().includes(c))}}),a=[E(n,"click",s=>{const o=O(e);if(!(!o||o===s.target||s.composedPath().includes(o))){if(s.detail===0&&(l=!d(s)),!l){l=!0;return}t(s)}},{passive:!0,capture:p}),E(n,"pointerdown",s=>{const o=O(e);o&&(l=!s.composedPath().includes(o)&&!d(s))},{passive:!0}),i&&E(n,"blur",s=>{var o;const c=O(e);((o=n.document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(c!=null&&c.contains(n.document.activeElement))&&t(s)})].filter(Boolean);return()=>a.forEach(s=>s())}function W(e,t=!1){const r=R(),n=()=>r.value=!!e();return n(),Q(n,t),r}const y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I="__vueuse_ssr_handlers__";y[I]=y[I]||{};var b=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,x=(e,t)=>{var r={};for(var n in e)$.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&b)for(var n of b(e))t.indexOf(n)<0&&k.call(e,n)&&(r[n]=e[n]);return r};function q(e,t,r={}){const n=r,{window:u=_}=n,p=x(n,["window"]);let i;const l=W(()=>u&&"ResizeObserver"in u),d=()=>{i&&(i.disconnect(),i=void 0)},m=S(()=>O(e),f=>{d(),l.value&&u&&f&&(i=new ResizeObserver(t),i.observe(f,p))},{immediate:!0,flush:"post"}),a=()=>{d(),m()};return P(a),{isSupported:l,stop:a}}var h;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(h||(h={}));var U=Object.defineProperty,w=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t)=>{for(var r in t||(t={}))B.call(t,r)&&g(e,r,t[r]);if(w)for(var r of w(t))V.call(t,r)&&g(e,r,t[r]);return e};const z={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};M({linear:L},z);function K(e){return e==null}class F extends Error{constructor(t){super(t),this.name="ElementPlusError"}}function J(e,t){throw new F(`[${e}] ${t}`)}function X(e,t){}const Y="update:modelValue",Z="change",ee="input";export{Z as C,ee as I,Y as U,q as a,O as b,X as d,K as i,D as o,J as t,E as u};