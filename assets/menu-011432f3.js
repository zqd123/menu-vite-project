import{r as l,z as q,N as A,d as z,A as E,B as G,o as p,l as h,e as N,w as R,T as H,C as I,q as o,b as F,v as $,m as L,F as D,p as S,D as T}from"./index-63607777.js";import{a as J}from"./axios-47b9d439.js";import{_ as O}from"./plugin-vueexport-helper-c27b6911.js";const V=""+new URL("stringData-4f6bc0b1.png",import.meta.url).href;function U(){const d=l([]),f=l([]);async function k(){const{data:e}=await J.get(V);return e.split(/\n/).filter(t=>t.trim()!=="")}async function c(){return(await k()).map((n,t)=>({menuName:n,menuId:n+(t+1)}))}function u(e,n=5,{onlySingle:t}={}){e=JSON.parse(JSON.stringify(e));const a=[];for(;n>0;){if(e.length<=0)throw new Error("菜单剩余不足,取不到了");const r=Math.floor(Math.random()*e.length);a.find(w=>w.menuId===e[r].menuId)?n++:(a.push(e[r]),e=e.filter(w=>w.menuId!==e[r].menuId),n--)}return t&&_(e,a),a}function x(e,n){return e.reduce((t,a)=>(n.find(r=>r.menuId===a.menuId)||t.push(a),t),[])}function _(e,n){f.value=x(e,n)}const m=l([]);function M(e){const n=u(d.value,e);console.log("🚀 ~ file: useProcessDataHook.js:83 ~ initMenu ~ menuLevel1:",n),m.value=C(n,e)}function C(e,n){return e.map(t=>(t.children=u(d.value,n).map(a=>(a.parentId=t.menuId,a)),t.children.map(a=>{a.children=u(d.value,n).map(r=>(r.parentId=a.menuId,r))}),t)),e}function b(e,{parentList:n,onlySingle:t}={}){return n?n.reduce((a,r)=>{const w=u(f.value,e,{onlySingle:t}).map(g=>(g.parentId=r.menuId,g));return a.concat(w)},[]):u(f.value,e,{onlySingle:t})}return{allMenu:d,remainMenu:f,mapData:c,getRandomData:u,changeRemainMenu:_,menuTree:m,initMenu:M,createLevelDataList:b}}const{allMenu:B,remainMenu:P,mapData:K,getRandomData:Q,changeRemainMenu:ue,menuTree:le,initMenu:oe,createLevelDataList:j}=U();function W(){const d=l(!1),f=l(!1),k=l(!1),c=l(!0),u=l(!1),x=l(!1),_=l([]),m=l([]),M=l([]),C=l([]),b=l([]),e=l([]);async function n(i=5,s=!1){A.start(),B.value=await K(),P.value=B.value,_.value=j(i),C.value=_.value,m.value=j(i,{parentList:_.value,onlySingle:s}),console.log("🚀 ~ file: menuHook.ts:46 ~ initMenu ~ menuLevel2List.value:",m.value);const v=j(i,{parentList:m.value,onlySingle:s});M.value=v.map(y=>(y.children=Q(P.value,i),y)),A.done(),console.log("🚀 ~ file: menuHook.ts:51 ~ initMenu ~ menuLevel3List.value:",M.value)}const t=q(()=>k.value?`flex-row ${f.value?"justify-center ":"justify-start"}`:`flex-col ${f.value?"items-center  pl-36":"items-start"}`);return{isHide:d,isGlobalColumn:f,isThirdColumn:k,isShowFirstMenu:c,isShowSecondMenu:u,isShowThirdMenu:x,thirdCenter:t,firstMenuClick:i=>{console.log("一级菜单点击"),d.value&&(c.value=!1),u.value=!0,x.value=!1,b.value=m.value.filter(s=>s.parentId===i.menuId)},secondMenuClick:i=>{d.value&&(c.value=!1,u.value=!1),x.value=!0,e.value=M.value.filter(s=>s.parentId===i.menuId),console.log("🚀 ~ file: menuHook.ts:90 ~ secondMenuClick ~ menuLevel3.value:",e.value)},selectClick:i=>{console.log("选中:",i)},refreshStatus:()=>{c.value=!0,u.value=!1,x.value=!1},initMenu:n,menuLevel1:C,menuLevel2:b,menuLevel3:e}}const X=["onClick"],Y=["onClick"],Z={class:"font-bold w-32 rounded-sm py-2 px-2"},ee=["onClick"],ne=z({__name:"menu",setup(d){const f=E(),{isHide:k,isGlobalColumn:c,isThirdColumn:u,isShowFirstMenu:x,isShowSecondMenu:_,isShowThirdMenu:m,thirdCenter:M,firstMenuClick:C,secondMenuClick:b,selectClick:e,refreshStatus:n,initMenu:t,menuLevel1:a,menuLevel2:r,menuLevel3:w}=W();return G(()=>{const{num:g=5,hide:i="false",direction:s="row",thirdDirection:v="row",single:y="false"}=f.query;c.value=s==="column",u.value=v==="column",k.value=i==="true",t(typeof g=="string"?parseInt(g):5,!0)}),(g,i)=>(p(),h("div",{class:I(["flex h-full w-full",o(c)?"flex-col":"flex-row"])},[N(H,{name:"fade"},{default:R(()=>[F(L("div",{class:I(["bg-[#324868] flex gap-1 text-white border-solid border-[#e4e4e4]",o(c)?"flex-row justify-center border-b":"flex-col border-r"])},[(p(!0),h(D,null,S(o(a),s=>(p(),h("div",{key:s.menuId,onClick:v=>o(C)(s),class:"w-32 font-bold min-w-max rounded-sm py-2 px-2"},T(s.menuName),9,X))),128))],2),[[$,o(x)]])]),_:1}),N(H,{name:"fade"},{default:R(()=>[L("div",{class:I(["bg-[#e2e0df] flex gap-1 text-black border-solid border-[#e4e4e4]",o(c)?"flex-row justify-center border-b":"flex-col border-r"])},[(p(!0),h(D,null,S(o(r),s=>(p(),h("div",{key:s.menuId,onClick:v=>o(b)(s),class:"w-32 font-bold min-w-max rounded-sm py-2 px-2"},T(s.menuName),9,Y))),128))],2)]),_:1}),N(H,{name:"fade"},{default:R(()=>[F(L("div",{class:I(["flex-1 bg-[#ffffff] flex gap-1 text-black overflow-auto",o(M)])},[(p(!0),h(D,null,S(o(w),s=>(p(),h("div",{key:s.menuId,class:I(["flex items-center gap-1",o(u)?"flex-col":"flex-row"])},[L("span",Z,T(s.menuName),1),L("div",{class:I(["flex gap-1",o(u)?"flex-col":"flex-row"])},[(p(!0),h(D,null,S(s.children,v=>(p(),h("div",{key:v.menuId,onClick:y=>o(e)(v),class:"w-32 min-w-max rounded-sm py-2 px-2"},T(v.menuName),9,ee))),128))],2)],2))),128))],2),[[$,o(m)]])]),_:1})],2))}});const re=O(ne,[["__scopeId","data-v-8a1031df"]]);export{re as default};