import{z as p,O as ke,r as T,a3 as q,M as G,I as Ke,i as ae,d as Pe,aq as je,P as We,ar as Ue,as as Ye,n as F,B as Xe,a5 as qe,b as Ge,v as Ze,o as v,l as S,G as m,F as oe,C as h,q as t,E as U,m as V,K as I,w as A,L as Y,R as ne,e as Je,at as Qe,s as et,a6 as tt,D as X,H as at,f as we}from"./index-ff12e7a3.js";import{u as ot,U as le,m as nt,i as st,a as lt,d as Se}from"./typescript-e3111e6a.js";import{i as Fe,a6 as rt,s as Ce,c as it,t as ut,d as se,f as Ie,ac as ct,z as dt,y as pt,ab as ft,e as Ee,ai as vt,b as L,_ as mt,w as yt}from"./el-button-4504869c.js";const ht=()=>Fe&&/firefox/i.test(window.navigator.userAgent),bt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),gt=["class","style"],xt=/^on[A-Z]/,wt=(o={})=>{const{excludeListeners:f=!1,excludeKeys:u}=o,a=p(()=>((u==null?void 0:u.value)||[]).concat(gt)),r=ke();return r?p(()=>{var i;return rt(Object.entries((i=r.proxy)==null?void 0:i.$attrs).filter(([c])=>!a.value.includes(c)&&!(f&&xt.test(c))))}):p(()=>({}))};function St(o){const f=T();function u(){if(o.value==null)return;const{selectionStart:r,selectionEnd:i,value:c}=o.value;if(r==null||i==null)return;const b=c.slice(0,Math.max(0,r)),d=c.slice(Math.max(0,i));f.value={selectionStart:r,selectionEnd:i,value:c,beforeTxt:b,afterTxt:d}}function a(){if(o.value==null||f.value==null)return;const{value:r}=o.value,{beforeTxt:i,afterTxt:c,selectionStart:b}=f.value;if(i==null||c==null||b==null)return;let d=r.length;if(r.endsWith(c))d=r.length-c.length;else if(r.startsWith(i))d=i.length;else{const g=i[b-1],w=r.indexOf(g,b-1);w!==-1&&(d=w+1)}o.value.setSelectionRange(d,d)}return[u,a]}function Ct(o,{afterFocus:f,beforeBlur:u,afterBlur:a}={}){const r=ke(),{emit:i}=r,c=q(),b=T(!1),d=s=>{b.value||(b.value=!0,i("focus",s),f==null||f())},g=s=>{var N;Ke(u)&&u(s)||s.relatedTarget&&((N=c.value)!=null&&N.contains(s.relatedTarget))||(b.value=!1,i("blur",s),a==null||a())},w=()=>{var s;(s=o.value)==null||s.focus()};return G(c,s=>{s&&s.setAttribute("tabindex","-1")}),ot(c,"click",w),{wrapperRef:c,isFocused:b,handleFocus:d,handleBlur:g}}let x;const It=`
  height:0 !important;
  visibility:hidden !important;
  ${ht()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Et=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function zt(o){const f=window.getComputedStyle(o),u=f.getPropertyValue("box-sizing"),a=Number.parseFloat(f.getPropertyValue("padding-bottom"))+Number.parseFloat(f.getPropertyValue("padding-top")),r=Number.parseFloat(f.getPropertyValue("border-bottom-width"))+Number.parseFloat(f.getPropertyValue("border-top-width"));return{contextStyle:Et.map(c=>`${c}:${f.getPropertyValue(c)}`).join(";"),paddingSize:a,borderSize:r,boxSizing:u}}function ze(o,f=1,u){var a;x||(x=document.createElement("textarea"),document.body.appendChild(x));const{paddingSize:r,borderSize:i,boxSizing:c,contextStyle:b}=zt(o);x.setAttribute("style",`${b};${It}`),x.value=o.value||o.placeholder||"";let d=x.scrollHeight;const g={};c==="border-box"?d=d+i:c==="content-box"&&(d=d-r),x.value="";const w=x.scrollHeight-r;if(Ce(f)){let s=w*f;c==="border-box"&&(s=s+r+i),d=Math.max(s,d),g.minHeight=`${s}px`}if(Ce(u)){let s=w*u;c==="border-box"&&(s=s+r+i),d=Math.min(s,d)}return g.height=`${d}px`,(a=x.parentNode)==null||a.removeChild(x),x=void 0,g}const kt=it({id:{type:String,default:void 0},size:ut,disabled:Boolean,modelValue:{type:se([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:se([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ie},prefixIcon:{type:Ie},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:se([Object,Array,String]),default:()=>nt({})},autofocus:{type:Boolean,default:!1}}),Pt={[le]:o=>ae(o),input:o=>ae(o),change:o=>ae(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Ft=["role"],Vt=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Tt=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Nt=Pe({name:"ElInput",inheritAttrs:!1}),Rt=Pe({...Nt,props:kt,emits:Pt,setup(o,{expose:f,emit:u}){const a=o,r=je(),i=We(),c=p(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),b=p(()=>[a.type==="textarea"?ie.b():l.b(),l.m(re.value),l.is("disabled",z.value),l.is("exceed",Re.value),{[l.b("group")]:i.prepend||i.append,[l.bm("group","append")]:i.append,[l.bm("group","prepend")]:i.prepend,[l.m("prefix")]:i.prefix||a.prefixIcon,[l.m("suffix")]:i.suffix||a.suffixIcon||a.clearable||a.showPassword,[l.bm("suffix","password-clear")]:j.value&&Q.value},r.class]),d=p(()=>[l.e("wrapper"),l.is("focus",J.value)]),g=wt({excludeKeys:p(()=>Object.keys(c.value))}),{form:w,formItem:s}=ct(),{inputId:N}=dt(a,{formItemContext:s}),re=pt(),z=ft(),l=Ee("input"),ie=Ee("textarea"),O=q(),C=q(),Z=T(!1),R=T(!1),H=T(!1),ue=T(),D=q(a.inputStyle),k=p(()=>O.value||C.value),{wrapperRef:Ve,isFocused:J,handleFocus:_,handleBlur:K}=Ct(k,{afterBlur(){var e;a.validateEvent&&((e=s==null?void 0:s.validate)==null||e.call(s,"blur").catch(n=>Se()))}}),ce=p(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),B=p(()=>(s==null?void 0:s.validateState)||""),de=p(()=>B.value&&vt[B.value]),Te=p(()=>H.value?Ue:Ye),Ne=p(()=>[r.style,a.inputStyle]),pe=p(()=>[a.inputStyle,D.value,{resize:a.resize}]),E=p(()=>st(a.modelValue)?"":String(a.modelValue)),j=p(()=>a.clearable&&!z.value&&!a.readonly&&!!E.value&&(J.value||Z.value)),Q=p(()=>a.showPassword&&!z.value&&!a.readonly&&!!E.value&&(!!E.value||J.value)),P=p(()=>a.showWordLimit&&!!g.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),ee=p(()=>E.value.length),Re=p(()=>!!P.value&&ee.value>Number(g.value.maxlength)),Be=p(()=>!!i.suffix||!!a.suffixIcon||j.value||a.showPassword||P.value||!!B.value&&ce.value),[Me,$e]=St(O);lt(C,e=>{if(Ae(),!P.value||a.resize!=="both")return;const n=e[0],{width:y}=n.contentRect;ue.value={right:`calc(100% - ${y+15+6}px)`}});const M=()=>{const{type:e,autosize:n}=a;if(!(!Fe||e!=="textarea"||!C.value))if(n){const y=we(n)?n.minRows:void 0,W=we(n)?n.maxRows:void 0,xe=ze(C.value,y,W);D.value={overflowY:"hidden",...xe},F(()=>{C.value.offsetHeight,D.value=xe})}else D.value={minHeight:ze(C.value).minHeight}},Ae=(e=>{let n=!1;return()=>{var y;if(n||!a.autosize)return;((y=C.value)==null?void 0:y.offsetParent)===null||(e(),n=!0)}})(M),$=()=>{const e=k.value,n=a.formatter?a.formatter(E.value):E.value;!e||e.value===n||(e.value=n)},te=async e=>{Me();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n),!R.value){if(n===E.value){$();return}u(le,n),u("input",n),await F(),$(),$e()}},fe=e=>{u("change",e.target.value)},ve=e=>{u("compositionstart",e),R.value=!0},me=e=>{var n;u("compositionupdate",e);const y=(n=e.target)==null?void 0:n.value,W=y[y.length-1]||"";R.value=!bt(W)},ye=e=>{u("compositionend",e),R.value&&(R.value=!1,te(e))},Le=()=>{H.value=!H.value,he()},he=async()=>{var e;await F(),(e=k.value)==null||e.focus()},Oe=()=>{var e;return(e=k.value)==null?void 0:e.blur()},He=e=>{Z.value=!1,u("mouseleave",e)},De=e=>{Z.value=!0,u("mouseenter",e)},be=e=>{u("keydown",e)},_e=()=>{var e;(e=k.value)==null||e.select()},ge=()=>{u(le,""),u("change",""),u("clear"),u("input","")};return G(()=>a.modelValue,()=>{var e;F(()=>M()),a.validateEvent&&((e=s==null?void 0:s.validate)==null||e.call(s,"change").catch(n=>Se()))}),G(E,()=>$()),G(()=>a.type,async()=>{await F(),$(),M()}),Xe(()=>{!a.formatter&&a.parser,$(),F(M)}),f({input:O,textarea:C,ref:k,textareaStyle:pe,autosize:qe(a,"autosize"),focus:he,blur:Oe,select:_e,clear:ge,resizeTextarea:M}),(e,n)=>Ge((v(),S("div",ne(t(c),{class:t(b),style:t(Ne),role:e.containerRole,onMouseenter:De,onMouseleave:He}),[m(" input "),e.type!=="textarea"?(v(),S(oe,{key:0},[m(" prepend slot "),e.$slots.prepend?(v(),S("div",{key:0,class:h(t(l).be("group","prepend"))},[U(e.$slots,"prepend")],2)):m("v-if",!0),V("div",{ref_key:"wrapperRef",ref:Ve,class:h(t(d))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),S("span",{key:0,class:h(t(l).e("prefix"))},[V("span",{class:h(t(l).e("prefix-inner"))},[U(e.$slots,"prefix"),e.prefixIcon?(v(),I(t(L),{key:0,class:h(t(l).e("icon"))},{default:A(()=>[(v(),I(Y(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),V("input",ne({id:t(N),ref_key:"input",ref:O,class:t(l).e("inner")},t(g),{type:e.showPassword?H.value?"text":"password":e.type,disabled:t(z),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,autofocus:a.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:ye,onInput:te,onFocus:n[0]||(n[0]=(...y)=>t(_)&&t(_)(...y)),onBlur:n[1]||(n[1]=(...y)=>t(K)&&t(K)(...y)),onChange:fe,onKeydown:be}),null,16,Vt),m(" suffix slot "),t(Be)?(v(),S("span",{key:1,class:h(t(l).e("suffix"))},[V("span",{class:h(t(l).e("suffix-inner"))},[!t(j)||!t(Q)||!t(P)?(v(),S(oe,{key:0},[U(e.$slots,"suffix"),e.suffixIcon?(v(),I(t(L),{key:0,class:h(t(l).e("icon"))},{default:A(()=>[(v(),I(Y(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(j)?(v(),I(t(L),{key:1,class:h([t(l).e("icon"),t(l).e("clear")]),onMousedown:et(t(tt),["prevent"]),onClick:ge},{default:A(()=>[Je(t(Qe))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(Q)?(v(),I(t(L),{key:2,class:h([t(l).e("icon"),t(l).e("password")]),onClick:Le},{default:A(()=>[(v(),I(Y(t(Te))))]),_:1},8,["class"])):m("v-if",!0),t(P)?(v(),S("span",{key:3,class:h(t(l).e("count"))},[V("span",{class:h(t(l).e("count-inner"))},X(t(ee))+" / "+X(t(g).maxlength),3)],2)):m("v-if",!0),t(B)&&t(de)&&t(ce)?(v(),I(t(L),{key:4,class:h([t(l).e("icon"),t(l).e("validateIcon"),t(l).is("loading",t(B)==="validating")])},{default:A(()=>[(v(),I(Y(t(de))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(v(),S("div",{key:1,class:h(t(l).be("group","append"))},[U(e.$slots,"append")],2)):m("v-if",!0)],64)):(v(),S(oe,{key:1},[m(" textarea "),V("textarea",ne({id:t(N),ref_key:"textarea",ref:C,class:t(ie).e("inner")},t(g),{tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(pe),"aria-label":e.label,placeholder:e.placeholder,form:a.form,autofocus:a.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:ye,onInput:te,onFocus:n[2]||(n[2]=(...y)=>t(_)&&t(_)(...y)),onBlur:n[3]||(n[3]=(...y)=>t(K)&&t(K)(...y)),onChange:fe,onKeydown:be}),null,16,Tt),t(P)?(v(),S("span",{key:0,style:at(ue.value),class:h(t(l).e("count"))},X(t(ee))+" / "+X(t(g).maxlength),7)):m("v-if",!0)],64))],16,Ft)),[[Ze,e.type!=="hidden"]])}});var Bt=mt(Rt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Ot=yt(Bt);export{Ot as E};