import{U as ae,d as M,K as j,z as A,o as F,l as _,m as L,E as D,D as y,q as e,B as te,e as O,w as k,A as q,P as ne,G as K,H as W,r as E,O as Z,n as re,R as ie,W as ue,X as de,Y as ce,b as fe,Z as me,_ as pe,v as ve,T as ye,$ as ge}from"./index-3e1debba.js";import{u as Ce,a as be,E as he,b as ke}from"./el-overlay-ad19c685.js";import{c as X,h as De,v as Ee,b as Ae,_ as Q,C as Be,d as G,x as Fe,y as Ie,z as Y,A as Te,B as Se,D as we,q as H,i as $e,F as J,e as Pe,w as Re}from"./el-button-8130740a.js";import{F as Le,i as Oe,b as Me}from"./axios-4757cd06.js";import{U as x}from"./event-0e1210c4.js";const Ne=(...o)=>s=>{o.forEach(r=>{ae(r)?r(s):r.value=s})},ee=Symbol("dialogInjectionKey"),oe=X({center:Boolean,alignCenter:Boolean,closeIcon:{type:De},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),ze={close:()=>!0},Ue=["aria-level"],Ve=["aria-label"],_e=["id"],qe=M({name:"ElDialogContent"}),Ke=M({...qe,props:oe,emits:ze,setup(o){const s=o,{t:r}=Ee(),{Close:S}=Be,{dialogRef:n,headerRef:c,bodyId:B,ns:t,style:g}=j(ee),{focusTrapRef:i}=j(Le),f=A(()=>[t.b(),t.is("fullscreen",s.fullscreen),t.is("draggable",s.draggable),t.is("align-center",s.alignCenter),{[t.m("center")]:s.center},s.customClass]),m=Ne(i,n),C=A(()=>s.draggable);return Ce(n,c,C),(a,d)=>(F(),_("div",{ref:e(m),class:y(e(f)),style:W(e(g)),tabindex:"-1"},[L("header",{ref_key:"headerRef",ref:c,class:y(e(t).e("header"))},[D(a.$slots,"header",{},()=>[L("span",{role:"heading","aria-level":a.ariaLevel,class:y(e(t).e("title"))},te(a.title),11,Ue)]),a.showClose?(F(),_("button",{key:0,"aria-label":e(r)("el.dialog.close"),class:y(e(t).e("headerbtn")),type:"button",onClick:d[0]||(d[0]=w=>a.$emit("close"))},[O(e(Ae),{class:y(e(t).e("close"))},{default:k(()=>[(F(),q(ne(a.closeIcon||e(S))))]),_:1},8,["class"])],10,Ve)):K("v-if",!0)],2),L("div",{id:e(B),class:y(e(t).e("body"))},[D(a.$slots,"default")],10,_e),a.$slots.footer?(F(),_("footer",{key:0,class:y(e(t).e("footer"))},[D(a.$slots,"footer")],2)):K("v-if",!0)],6))}});var je=Q(Ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const Ze=X({...oe,appendToBody:Boolean,appendTo:{type:G(String),default:"body"},beforeClose:{type:G(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),Ge={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[x]:o=>Fe(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ye=(o,s)=>{var r;const n=ue().emit,{nextZIndex:c}=Ie();let B="";const t=Y(),g=Y(),i=E(!1),f=E(!1),m=E(!1),C=E((r=o.zIndex)!=null?r:c());let a,d;const w=Te("namespace",we),N=A(()=>{const u={},h=`--${w.value}-dialog`;return o.fullscreen||(o.top&&(u[`${h}-margin-top`]=o.top),o.width&&(u[`${h}-width`]=Se(o.width))),u}),z=A(()=>o.alignCenter?{display:"flex"}:{});function $(){n("opened")}function U(){n("closed"),n(x,!1),o.destroyOnClose&&(m.value=!1)}function V(){n("close")}function P(){d==null||d(),a==null||a(),o.openDelay&&o.openDelay>0?{stop:a}=H(()=>R(),o.openDelay):R()}function I(){a==null||a(),d==null||d(),o.closeDelay&&o.closeDelay>0?{stop:d}=H(()=>l(),o.closeDelay):l()}function T(){function u(h){h||(f.value=!0,i.value=!1)}o.beforeClose?o.beforeClose(u):I()}function p(){o.closeOnClickModal&&T()}function R(){$e&&(i.value=!0)}function l(){i.value=!1}function v(){n("openAutoFocus")}function b(){n("closeAutoFocus")}function le(u){var h;((h=u.detail)==null?void 0:h.focusReason)==="pointer"&&u.preventDefault()}o.lockScroll&&be(i);function se(){o.closeOnPressEscape&&T()}return Z(()=>o.modelValue,u=>{u?(f.value=!1,P(),m.value=!0,C.value=Oe(o.zIndex)?c():C.value++,re(()=>{n("open"),s.value&&(s.value.scrollTop=0)})):i.value&&I()}),Z(()=>o.fullscreen,u=>{s.value&&(u?(B=s.value.style.transform,s.value.style.transform=""):s.value.style.transform=B)}),ie(()=>{o.modelValue&&(i.value=!0,m.value=!0,P())}),{afterEnter:$,afterLeave:U,beforeLeave:V,handleClose:T,onModalClick:p,close:I,doClose:l,onOpenAutoFocus:v,onCloseAutoFocus:b,onCloseRequested:se,onFocusoutPrevented:le,titleId:t,bodyId:g,closed:f,style:N,overlayDialogStyle:z,rendered:m,visible:i,zIndex:C}},He=["aria-label","aria-labelledby","aria-describedby"],Je=M({name:"ElDialog",inheritAttrs:!1}),We=M({...Je,props:Ze,emits:Ge,setup(o,{expose:s}){const r=o,S=de();J({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},A(()=>!!S.title)),J({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},A(()=>!!r.customClass));const n=Pe("dialog"),c=E(),B=E(),t=E(),{visible:g,titleId:i,bodyId:f,style:m,overlayDialogStyle:C,rendered:a,zIndex:d,afterEnter:w,afterLeave:N,beforeLeave:z,handleClose:$,onModalClick:U,onOpenAutoFocus:V,onCloseAutoFocus:P,onCloseRequested:I,onFocusoutPrevented:T}=Ye(r,c);ce(ee,{dialogRef:c,headerRef:B,bodyId:f,ns:n,rendered:a,style:m});const p=ke(U),R=A(()=>r.draggable&&!r.fullscreen);return s({visible:g,dialogContentRef:t}),(l,v)=>(F(),q(ge,{to:l.appendTo,disabled:l.appendTo!=="body"?!1:!l.appendToBody},[O(ye,{name:"dialog-fade",onAfterEnter:e(w),onAfterLeave:e(N),onBeforeLeave:e(z),persisted:""},{default:k(()=>[fe(O(e(he),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(d)},{default:k(()=>[L("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(i),"aria-describedby":e(f),class:y(`${e(n).namespace.value}-overlay-dialog`),style:W(e(C)),onClick:v[0]||(v[0]=(...b)=>e(p).onClick&&e(p).onClick(...b)),onMousedown:v[1]||(v[1]=(...b)=>e(p).onMousedown&&e(p).onMousedown(...b)),onMouseup:v[2]||(v[2]=(...b)=>e(p).onMouseup&&e(p).onMouseup(...b))},[O(e(Me),{loop:"",trapped:e(g),"focus-start-el":"container",onFocusAfterTrapped:e(V),onFocusAfterReleased:e(P),onFocusoutPrevented:e(T),onReleaseRequested:e(I)},{default:k(()=>[e(a)?(F(),q(je,me({key:0,ref_key:"dialogContentRef",ref:t},l.$attrs,{"custom-class":l.customClass,center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(R),fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,"aria-level":l.headerAriaLevel,onClose:e($)}),pe({header:k(()=>[l.$slots.title?D(l.$slots,"title",{key:1}):D(l.$slots,"header",{key:0,close:e($),titleId:e(i),titleClass:e(n).e("title")})]),default:k(()=>[D(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:k(()=>[D(l.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","aria-level","onClose"])):K("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,He)]),_:3},8,["mask","overlay-class","z-index"]),[[ve,e(g)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var Xe=Q(We,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const so=Re(Xe);export{so as E};
