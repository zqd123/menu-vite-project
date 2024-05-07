import{x as ae,d as N,y as j,z as k,o as B,k as K,l as O,D,C as m,B as e,E as se,e as M,w,L as _,a0 as te,O as q,F as Y,r as E,I as G,n as ne,G as re,a4 as ie,a5 as de,H as ue,b as ce,a6 as fe,a7 as ve,v as ye,T as pe,a8 as me}from"./index-f135e29b.js";import{u as ge,a as Ce,E as be,b as he}from"./el-overlay-eca0c3db.js";import{c as Q,y as we,t as De,b as Ee,_ as W,I as ke,x as J,e as Ie,J as Fe,n as Z,K as Be,C as Te,L as Ae,F as H,i as Se,l as $e,m as Le,w as Pe}from"./el-button-00713da7.js";import{F as Re,i as Oe,b as Me}from"./axios-a8b078e2.js";import{U as X}from"./index-23572607.js";const Ne=(...o)=>a=>{o.forEach(r=>{ae(r)?r(a):r.value=a})},x=Symbol("dialogInjectionKey"),ee=Q({center:Boolean,alignCenter:Boolean,closeIcon:{type:we},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),ze={close:()=>!0},Ve=["aria-level"],Ue=["aria-label"],Ke=["id"],_e=N({name:"ElDialogContent"}),qe=N({..._e,props:ee,emits:ze,setup(o){const a=o,{t:r}=De(),{Close:S}=ke,{dialogRef:n,headerRef:c,bodyId:I,ns:t,style:g}=j(x),{focusTrapRef:i}=j(Re),f=k(()=>[t.b(),t.is("fullscreen",a.fullscreen),t.is("draggable",a.draggable),t.is("align-center",a.alignCenter),{[t.m("center")]:a.center}]),v=Ne(i,n),C=k(()=>a.draggable),u=k(()=>a.overflow);return ge(n,c,C,u),(s,F)=>(B(),K("div",{ref:e(v),class:m(e(f)),style:Y(e(g)),tabindex:"-1"},[O("header",{ref_key:"headerRef",ref:c,class:m([e(t).e("header"),{"show-close":s.showClose}])},[D(s.$slots,"header",{},()=>[O("span",{role:"heading","aria-level":s.ariaLevel,class:m(e(t).e("title"))},se(s.title),11,Ve)]),s.showClose?(B(),K("button",{key:0,"aria-label":e(r)("el.dialog.close"),class:m(e(t).e("headerbtn")),type:"button",onClick:F[0]||(F[0]=$=>s.$emit("close"))},[M(e(Ee),{class:m(e(t).e("close"))},{default:w(()=>[(B(),_(te(s.closeIcon||e(S))))]),_:1},8,["class"])],10,Ue)):q("v-if",!0)],2),O("div",{id:e(I),class:m(e(t).e("body"))},[D(s.$slots,"default")],10,Ke),s.$slots.footer?(B(),K("footer",{key:0,class:m(e(t).e("footer"))},[D(s.$slots,"footer")],2)):q("v-if",!0)],6))}});var je=W(qe,[["__file","dialog-content.vue"]]);const Ge=Q({...ee,appendToBody:Boolean,appendTo:{type:J(String),default:"body"},beforeClose:{type:J(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),Je={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[X]:o=>Ie(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ze=(o,a)=>{var r;const n=ie().emit,{nextZIndex:c}=Fe();let I="";const t=Z(),g=Z(),i=E(!1),f=E(!1),v=E(!1),C=E((r=o.zIndex)!=null?r:c());let u,s;const F=Be("namespace",Ae),$=k(()=>{const d={},h=`--${F.value}-dialog`;return o.fullscreen||(o.top&&(d[`${h}-margin-top`]=o.top),o.width&&(d[`${h}-width`]=Te(o.width))),d}),z=k(()=>o.alignCenter?{display:"flex"}:{});function L(){n("opened")}function V(){n("closed"),n(X,!1),o.destroyOnClose&&(v.value=!1)}function U(){n("close")}function P(){s==null||s(),u==null||u(),o.openDelay&&o.openDelay>0?{stop:u}=H(()=>R(),o.openDelay):R()}function T(){u==null||u(),s==null||s(),o.closeDelay&&o.closeDelay>0?{stop:s}=H(()=>l(),o.closeDelay):l()}function A(){function d(h){h||(f.value=!0,i.value=!1)}o.beforeClose?o.beforeClose(d):T()}function y(){o.closeOnClickModal&&A()}function R(){Se&&(i.value=!0)}function l(){i.value=!1}function p(){n("openAutoFocus")}function b(){n("closeAutoFocus")}function oe(d){var h;((h=d.detail)==null?void 0:h.focusReason)==="pointer"&&d.preventDefault()}o.lockScroll&&Ce(i);function le(){o.closeOnPressEscape&&A()}return G(()=>o.modelValue,d=>{d?(f.value=!1,P(),v.value=!0,C.value=Oe(o.zIndex)?c():C.value++,ne(()=>{n("open"),a.value&&(a.value.scrollTop=0)})):i.value&&T()}),G(()=>o.fullscreen,d=>{a.value&&(d?(I=a.value.style.transform,a.value.style.transform=""):a.value.style.transform=I)}),re(()=>{o.modelValue&&(i.value=!0,v.value=!0,P())}),{afterEnter:L,afterLeave:V,beforeLeave:U,handleClose:A,onModalClick:y,close:T,doClose:l,onOpenAutoFocus:p,onCloseAutoFocus:b,onCloseRequested:le,onFocusoutPrevented:oe,titleId:t,bodyId:g,closed:f,style:$,overlayDialogStyle:z,rendered:v,visible:i,zIndex:C}},He=["aria-label","aria-labelledby","aria-describedby"],Ye=N({name:"ElDialog",inheritAttrs:!1}),Qe=N({...Ye,props:Ge,emits:Je,setup(o,{expose:a}){const r=o,S=de();$e({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},k(()=>!!S.title));const n=Le("dialog"),c=E(),I=E(),t=E(),{visible:g,titleId:i,bodyId:f,style:v,overlayDialogStyle:C,rendered:u,zIndex:s,afterEnter:F,afterLeave:$,beforeLeave:z,handleClose:L,onModalClick:V,onOpenAutoFocus:U,onCloseAutoFocus:P,onCloseRequested:T,onFocusoutPrevented:A}=Ze(r,c);ue(x,{dialogRef:c,headerRef:I,bodyId:f,ns:n,rendered:u,style:v});const y=he(V),R=k(()=>r.draggable&&!r.fullscreen);return a({visible:g,dialogContentRef:t}),(l,p)=>(B(),_(me,{to:l.appendTo,disabled:l.appendTo!=="body"?!1:!l.appendToBody},[M(pe,{name:"dialog-fade",onAfterEnter:e(F),onAfterLeave:e($),onBeforeLeave:e(z),persisted:""},{default:w(()=>[ce(M(e(be),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(s)},{default:w(()=>[O("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(i),"aria-describedby":e(f),class:m(`${e(n).namespace.value}-overlay-dialog`),style:Y(e(C)),onClick:p[0]||(p[0]=(...b)=>e(y).onClick&&e(y).onClick(...b)),onMousedown:p[1]||(p[1]=(...b)=>e(y).onMousedown&&e(y).onMousedown(...b)),onMouseup:p[2]||(p[2]=(...b)=>e(y).onMouseup&&e(y).onMouseup(...b))},[M(e(Me),{loop:"",trapped:e(g),"focus-start-el":"container",onFocusAfterTrapped:e(U),onFocusAfterReleased:e(P),onFocusoutPrevented:e(A),onReleaseRequested:e(T)},{default:w(()=>[e(u)?(B(),_(je,fe({key:0,ref_key:"dialogContentRef",ref:t},l.$attrs,{center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(R),overflow:l.overflow,fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,"aria-level":l.headerAriaLevel,onClose:e(L)}),ve({header:w(()=>[l.$slots.title?D(l.$slots,"title",{key:1}):D(l.$slots,"header",{key:0,close:e(L),titleId:e(i),titleClass:e(n).e("title")})]),default:w(()=>[D(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:w(()=>[D(l.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):q("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,He)]),_:3},8,["mask","overlay-class","z-index"]),[[ye,e(g)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var We=W(Qe,[["__file","dialog.vue"]]);const ao=Pe(We);export{ao as E};