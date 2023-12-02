import{W as ae,d as O,z as j,A as I,o as S,l as _,m as R,D,C as y,q as e,E as te,e as M,w as k,K as q,S as ne,M as K,G as W,r as E,J as G,n as re,H as ie,Y as ue,Z as de,I as ce,b as fe,_ as me,$ as pe,v as ve,T as ye,a0 as ge}from"./index-f5bc4975.js";import{u as Ce,a as be,E as he,b as ke}from"./el-overlay-30e83c47.js";import{c as Q,q as De,B as Ee,b as Ie,_ as X,C as Fe,p as Z,e as Se,D as Te,l as H,F as Ae,G as Be,H as we,y as J,i as $e,I as Y,k as Pe,w as Le}from"./el-button-dd980a67.js";import{F as Re,i as Me,b as Oe}from"./axios-e3130426.js";import{U as x}from"./event-0e1210c4.js";const Ne=(...o)=>s=>{o.forEach(r=>{ae(r)?r(s):r.value=s})},ee=Symbol("dialogInjectionKey"),oe=Q({center:Boolean,alignCenter:Boolean,closeIcon:{type:De},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),ze={close:()=>!0},Ue=["aria-level"],Ve=["aria-label"],_e=["id"],qe=O({name:"ElDialogContent"}),Ke=O({...qe,props:oe,emits:ze,setup(o){const s=o,{t:r}=Ee(),{Close:B}=Fe,{dialogRef:n,headerRef:c,bodyId:F,ns:t,style:g}=j(ee),{focusTrapRef:i}=j(Re),f=I(()=>[t.b(),t.is("fullscreen",s.fullscreen),t.is("draggable",s.draggable),t.is("align-center",s.alignCenter),{[t.m("center")]:s.center},s.customClass]),m=Ne(i,n),C=I(()=>s.draggable);return Ce(n,c,C),(a,d)=>(S(),_("div",{ref:e(m),class:y(e(f)),style:W(e(g)),tabindex:"-1"},[R("header",{ref_key:"headerRef",ref:c,class:y(e(t).e("header"))},[D(a.$slots,"header",{},()=>[R("span",{role:"heading","aria-level":a.ariaLevel,class:y(e(t).e("title"))},te(a.title),11,Ue)]),a.showClose?(S(),_("button",{key:0,"aria-label":e(r)("el.dialog.close"),class:y(e(t).e("headerbtn")),type:"button",onClick:d[0]||(d[0]=w=>a.$emit("close"))},[M(e(Ie),{class:y(e(t).e("close"))},{default:k(()=>[(S(),q(ne(a.closeIcon||e(B))))]),_:1},8,["class"])],10,Ve)):K("v-if",!0)],2),R("div",{id:e(F),class:y(e(t).e("body"))},[D(a.$slots,"default")],10,_e),a.$slots.footer?(S(),_("footer",{key:0,class:y(e(t).e("footer"))},[D(a.$slots,"footer")],2)):K("v-if",!0)],6))}});var je=X(Ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const Ge=Q({...oe,appendToBody:Boolean,appendTo:{type:Z(String),default:"body"},beforeClose:{type:Z(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),Ze={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[x]:o=>Se(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},He=(o,s)=>{var r;const n=ue().emit,{nextZIndex:c}=Te();let F="";const t=H(),g=H(),i=E(!1),f=E(!1),m=E(!1),C=E((r=o.zIndex)!=null?r:c());let a,d;const w=Ae("namespace",we),N=I(()=>{const u={},h=`--${w.value}-dialog`;return o.fullscreen||(o.top&&(u[`${h}-margin-top`]=o.top),o.width&&(u[`${h}-width`]=Be(o.width))),u}),z=I(()=>o.alignCenter?{display:"flex"}:{});function $(){n("opened")}function U(){n("closed"),n(x,!1),o.destroyOnClose&&(m.value=!1)}function V(){n("close")}function P(){d==null||d(),a==null||a(),o.openDelay&&o.openDelay>0?{stop:a}=J(()=>L(),o.openDelay):L()}function T(){a==null||a(),d==null||d(),o.closeDelay&&o.closeDelay>0?{stop:d}=J(()=>l(),o.closeDelay):l()}function A(){function u(h){h||(f.value=!0,i.value=!1)}o.beforeClose?o.beforeClose(u):T()}function p(){o.closeOnClickModal&&A()}function L(){$e&&(i.value=!0)}function l(){i.value=!1}function v(){n("openAutoFocus")}function b(){n("closeAutoFocus")}function le(u){var h;((h=u.detail)==null?void 0:h.focusReason)==="pointer"&&u.preventDefault()}o.lockScroll&&be(i);function se(){o.closeOnPressEscape&&A()}return G(()=>o.modelValue,u=>{u?(f.value=!1,P(),m.value=!0,C.value=Me(o.zIndex)?c():C.value++,re(()=>{n("open"),s.value&&(s.value.scrollTop=0)})):i.value&&T()}),G(()=>o.fullscreen,u=>{s.value&&(u?(F=s.value.style.transform,s.value.style.transform=""):s.value.style.transform=F)}),ie(()=>{o.modelValue&&(i.value=!0,m.value=!0,P())}),{afterEnter:$,afterLeave:U,beforeLeave:V,handleClose:A,onModalClick:p,close:T,doClose:l,onOpenAutoFocus:v,onCloseAutoFocus:b,onCloseRequested:se,onFocusoutPrevented:le,titleId:t,bodyId:g,closed:f,style:N,overlayDialogStyle:z,rendered:m,visible:i,zIndex:C}},Je=["aria-label","aria-labelledby","aria-describedby"],Ye=O({name:"ElDialog",inheritAttrs:!1}),We=O({...Ye,props:Ge,emits:Ze,setup(o,{expose:s}){const r=o,B=de();Y({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},I(()=>!!B.title)),Y({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},I(()=>!!r.customClass));const n=Pe("dialog"),c=E(),F=E(),t=E(),{visible:g,titleId:i,bodyId:f,style:m,overlayDialogStyle:C,rendered:a,zIndex:d,afterEnter:w,afterLeave:N,beforeLeave:z,handleClose:$,onModalClick:U,onOpenAutoFocus:V,onCloseAutoFocus:P,onCloseRequested:T,onFocusoutPrevented:A}=He(r,c);ce(ee,{dialogRef:c,headerRef:F,bodyId:f,ns:n,rendered:a,style:m});const p=ke(U),L=I(()=>r.draggable&&!r.fullscreen);return s({visible:g,dialogContentRef:t}),(l,v)=>(S(),q(ge,{to:l.appendTo,disabled:l.appendTo!=="body"?!1:!l.appendToBody},[M(ye,{name:"dialog-fade",onAfterEnter:e(w),onAfterLeave:e(N),onBeforeLeave:e(z),persisted:""},{default:k(()=>[fe(M(e(he),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(d)},{default:k(()=>[R("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(i),"aria-describedby":e(f),class:y(`${e(n).namespace.value}-overlay-dialog`),style:W(e(C)),onClick:v[0]||(v[0]=(...b)=>e(p).onClick&&e(p).onClick(...b)),onMousedown:v[1]||(v[1]=(...b)=>e(p).onMousedown&&e(p).onMousedown(...b)),onMouseup:v[2]||(v[2]=(...b)=>e(p).onMouseup&&e(p).onMouseup(...b))},[M(e(Oe),{loop:"",trapped:e(g),"focus-start-el":"container",onFocusAfterTrapped:e(V),onFocusAfterReleased:e(P),onFocusoutPrevented:e(A),onReleaseRequested:e(T)},{default:k(()=>[e(a)?(S(),q(je,me({key:0,ref_key:"dialogContentRef",ref:t},l.$attrs,{"custom-class":l.customClass,center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(L),fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,"aria-level":l.headerAriaLevel,onClose:e($)}),pe({header:k(()=>[l.$slots.title?D(l.$slots,"title",{key:1}):D(l.$slots,"header",{key:0,close:e($),titleId:e(i),titleClass:e(n).e("title")})]),default:k(()=>[D(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:k(()=>[D(l.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","aria-level","onClose"])):K("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Je)]),_:3},8,["mask","overlay-class","z-index"]),[[ve,e(g)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var Qe=X(We,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const so=Le(Qe);export{so as E};
