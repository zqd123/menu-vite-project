import{c as f,s as y,k as c,_ as u,w as m}from"./el-button-77ab536f.js";import{d as i,o as r,l as t,C as o,B as a,D as l,O as d,m as h,F as v,q as n,E as p}from"./index-f12797b4.js";const C=f({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:y([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),S=i({name:"ElCard"}),b=i({...S,props:C,setup(g){const s=c("card");return(e,k)=>(r(),t("div",{class:o([a(s).b(),a(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),t("div",{key:0,class:o(a(s).e("header"))},[l(e.$slots,"header",{},()=>[n(p(e.header),1)])],2)):d("v-if",!0),h("div",{class:o([a(s).e("body"),e.bodyClass]),style:v(e.bodyStyle)},[l(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),t("div",{key:1,class:o(a(s).e("footer"))},[l(e.$slots,"footer",{},()=>[n(p(e.footer),1)])],2)):d("v-if",!0)],2))}});var w=u(b,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const B=m(w);export{B as E};