import{B as O,a2 as R,r as w,d as te,S as ne,A as h,q as T,O as se,n as $,i as oe}from"./index-c9f4c8ba.js";import{i as q,_ as re}from"./el-button-225c26f5.js";import{i as ce}from"./typescript-c9fe0726.js";const X={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"};let v=[];const M=e=>{const n=e;n.key===X.esc&&v.forEach(s=>s(n))},ae=e=>{O(()=>{v.length===0&&document.addEventListener("keydown",M),q&&v.push(e)}),R(()=>{v=v.filter(n=>n!==e),v.length===0&&q&&document.removeEventListener("keydown",M)})},L="focus-trap.focus-after-trapped",C="focus-trap.focus-after-released",ue="focus-trap.focusout-prevented",j={cancelable:!0,bubbles:!1},ie={cancelable:!0,bubbles:!1},W="focusAfterTrapped",J="focusAfterReleased",de=Symbol("elFocusTrap"),k=w(),y=w(0),A=w(0);let F=0;const Z=e=>{const n=[],s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const c=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||c?NodeFilter.FILTER_SKIP:o.tabIndex>=0||o===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)n.push(s.currentNode);return n},Y=(e,n)=>{for(const s of e)if(!fe(s,n))return s},fe=(e,n)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},le=e=>{const n=Z(e),s=Y(n,e),o=Y(n.reverse(),e);return[s,o]},pe=e=>e instanceof HTMLInputElement&&"select"in e,l=(e,n)=>{if(e&&e.focus){const s=document.activeElement;e.focus({preventScroll:!0}),A.value=window.performance.now(),e!==s&&pe(e)&&n&&e.select()}};function z(e,n){const s=[...e],o=e.indexOf(n);return o!==-1&&s.splice(o,1),s}const ve=()=>{let e=[];return{push:o=>{const c=e[0];c&&o!==c&&c.pause(),e=z(e,o),e.unshift(o)},remove:o=>{var c,d;e=z(e,o),(d=(c=e[0])==null?void 0:c.resume)==null||d.call(c)}}},Ee=(e,n=!1)=>{const s=document.activeElement;for(const o of e)if(l(o,n),document.activeElement!==s)return},G=ve(),me=()=>y.value>A.value,b=()=>{k.value="pointer",y.value=window.performance.now()},Q=()=>{k.value="keyboard",y.value=window.performance.now()},Te=()=>(O(()=>{F===0&&(document.addEventListener("mousedown",b),document.addEventListener("touchstart",b),document.addEventListener("keydown",Q)),F++}),R(()=>{F--,F<=0&&(document.removeEventListener("mousedown",b),document.removeEventListener("touchstart",b),document.removeEventListener("keydown",Q))}),{focusReason:k,lastUserFocusTimestamp:y,lastAutomatedFocusTimestamp:A}),_=e=>new CustomEvent(ue,{...ie,detail:e}),Fe=te({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[W,J,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:n}){const s=w();let o,c;const{focusReason:d}=Te();ae(t=>{e.trapped&&!p.paused&&n("release-requested",t)});const p={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},E=t=>{if(!e.loop&&!e.trapped||p.paused)return;const{key:r,altKey:a,ctrlKey:u,metaKey:i,currentTarget:H,shiftKey:x}=t,{loop:V}=e,ee=r===X.tab&&!a&&!u&&!i,m=document.activeElement;if(ee&&m){const P=H,[S,g]=le(P);if(S&&g){if(!x&&m===g){const f=_({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||(t.preventDefault(),V&&l(S,!0))}else if(x&&[S,P].includes(m)){const f=_({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||(t.preventDefault(),V&&l(g,!0))}}else if(m===P){const f=_({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||t.preventDefault()}}};ne(de,{focusTrapRef:s,onKeydown:E}),h(()=>e.focusTrapEl,t=>{t&&(s.value=t)},{immediate:!0}),h([s],([t],[r])=>{t&&(t.addEventListener("keydown",E),t.addEventListener("focusin",I),t.addEventListener("focusout",D)),r&&(r.removeEventListener("keydown",E),r.removeEventListener("focusin",I),r.removeEventListener("focusout",D))});const N=t=>{n(W,t)},U=t=>n(J,t),I=t=>{const r=T(s);if(!r)return;const a=t.target,u=t.relatedTarget,i=a&&r.contains(a);e.trapped||u&&r.contains(u)||(o=u),i&&n("focusin",t),!p.paused&&e.trapped&&(i?c=a:l(c,!0))},D=t=>{const r=T(s);if(!(p.paused||!r))if(e.trapped){const a=t.relatedTarget;!ce(a)&&!r.contains(a)&&setTimeout(()=>{if(!p.paused&&e.trapped){const u=_({focusReason:d.value});n("focusout-prevented",u),u.defaultPrevented||l(c,!0)}},0)}else{const a=t.target;a&&r.contains(a)||n("focusout",t)}};async function K(){await $();const t=T(s);if(t){G.push(p);const r=t.contains(document.activeElement)?o:document.activeElement;if(o=r,!t.contains(r)){const u=new Event(L,j);t.addEventListener(L,N),t.dispatchEvent(u),u.defaultPrevented||$(()=>{let i=e.focusStartEl;oe(i)||(l(i),document.activeElement!==i&&(i="first")),i==="first"&&Ee(Z(t),!0),(document.activeElement===r||i==="container")&&l(t)})}}}function B(){const t=T(s);if(t){t.removeEventListener(L,N);const r=new CustomEvent(C,{...j,detail:{focusReason:d.value}});t.addEventListener(C,U),t.dispatchEvent(r),!r.defaultPrevented&&(d.value=="keyboard"||!me()||t.contains(document.activeElement))&&l(o??document.body),t.removeEventListener(C,U),G.remove(p)}}return O(()=>{e.trapped&&K(),h(()=>e.trapped,t=>{t?K():B()})}),R(()=>{e.trapped&&B()}),{onKeydown:E}}});function be(e,n,s,o,c,d){return se(e.$slots,"default",{handleKeydown:e.onKeydown})}var Se=re(Fe,[["render",be],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{Se as E,de as F,X as a};
