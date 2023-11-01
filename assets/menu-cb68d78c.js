import{r as o,z as q,N as F,d as z,A as G,B as J,o as p,l as w,e as N,w as B,T as H,C,q as l,b as R,v as $,m as b,F as T,p as D,D as S}from"./index-18d1a91c.js";import"./el-button-481ed74e.js";import{E as O}from"./el-overlay-ab87b258.js";import"./el-input-1534bf9c.js";import{a as V}from"./axios-b6baa2bc.js";import{_ as K}from"./plugin-vueexport-helper-c27b6911.js";import"./typescript-766677d7.js";function Q(){const d=o([]),f=o([]);async function I(){const{data:e}=await V.get("/src/views/menu/stringData.txt");return e.split(/\n/).filter(s=>s.trim()!=="")}async function c(){return(await I()).map((t,s)=>({menuName:t,menuId:t+(s+1)}))}function u(e,t=5,{onlySingle:s}={}){e=JSON.parse(JSON.stringify(e));const a=[];for(;t>0;){if(e.length<=0)throw new Error("菜单剩余不足,取不到了");const r=Math.floor(Math.random()*e.length);a.find(v=>v.menuId===e[r].menuId)?t++:(a.push(e[r]),e=e.filter(v=>v.menuId!==e[r].menuId),t--)}return s&&h(e,a),a}function x(e,t){return e.reduce((s,a)=>(t.find(r=>r.menuId===a.menuId)||s.push(a),s),[])}function h(e,t){f.value=x(e,t)}const m=o([]);function g(e){const t=u(d.value,e);console.log("🚀 ~ file: useProcessDataHook.js:83 ~ initMenu ~ menuLevel1:",t),m.value=M(t,e)}function M(e,t){return e.map(s=>(s.children=u(d.value,t).map(a=>(a.parentId=s.menuId,a)),s.children.map(a=>{a.children=u(d.value,t).map(r=>(r.parentId=a.menuId,r))}),s)),e}function k(e,{parentList:t,onlySingle:s}={}){return t?t.reduce((a,r)=>{const v=u(f.value,e,{onlySingle:s}).map(_=>(_.parentId=r.menuId,_));return a.concat(v)},[]):u(f.value,e,{onlySingle:s})}return{allMenu:d,remainMenu:f,mapData:c,getRandomData:u,changeRemainMenu:h,menuTree:m,initMenu:g,createLevelDataList:k}}const{allMenu:E,remainMenu:P,mapData:U,getRandomData:W,changeRemainMenu:ce,menuTree:fe,initMenu:de,createLevelDataList:j}=Q();function X(){const d=o(!1),f=o(!1),I=o(!1),c=o(!0),u=o(!1),x=o(!1),h=o([]),m=o([]),g=o([]),M=o([]),k=o([]),e=o([]);async function t(n=5,i=!1){F.start(),E.value=await U(),P.value=E.value,h.value=j(n),M.value=h.value,m.value=j(n,{parentList:h.value,onlySingle:i}),console.log("🚀 ~ file: menuHook.ts:46 ~ initMenu ~ menuLevel2List.value:",m.value);const y=j(n,{parentList:m.value,onlySingle:i});g.value=y.map(A=>(A.children=W(P.value,n),A)),F.done(),console.log("🚀 ~ file: menuHook.ts:51 ~ initMenu ~ menuLevel3List.value:",g.value)}const s=q(()=>I.value?`flex-row ${f.value?"justify-center ":"justify-start"}`:`flex-col ${f.value?"items-center  pl-36":"items-start"}`),a=new Date,r=n=>{console.log("一级菜单点击"),d.value&&(c.value=!1),u.value=!0,x.value=!1,k.value=m.value.filter(i=>i.parentId===n.menuId)},v=n=>{d.value&&(c.value=!1,u.value=!1),x.value=!0,e.value=g.value.filter(i=>i.parentId===n.menuId),console.log("🚀 ~ file: menuHook.ts:90 ~ secondMenuClick ~ menuLevel3.value:",e.value)},_=n=>{console.log("选中:",n);const y=(new Date().getTime()-a.getTime())/1e3;O.alert(`用时: ${y}秒`,"提示",{confirmButtonText:"确定",callback:()=>{L()}})},L=()=>{c.value=!0,u.value=!1,x.value=!1};return{isHide:d,isGlobalColumn:f,isThirdColumn:I,isShowFirstMenu:c,isShowSecondMenu:u,isShowThirdMenu:x,thirdCenter:s,firstMenuClick:r,secondMenuClick:v,selectClick:_,refreshStatus:L,initMenu:t,menuLevel1:M,menuLevel2:k,menuLevel3:e}}const Y=["onClick"],Z=["onClick"],ee={class:"font-bold w-32 rounded-sm py-2 px-2"},ne=["onClick"],te=z({__name:"menu",setup(d){const f=G(),{isHide:I,isGlobalColumn:c,isThirdColumn:u,isShowFirstMenu:x,isShowSecondMenu:h,isShowThirdMenu:m,thirdCenter:g,firstMenuClick:M,secondMenuClick:k,selectClick:e,refreshStatus:t,initMenu:s,menuLevel1:a,menuLevel2:r,menuLevel3:v}=X();return J(()=>{const{num:_=5,direction:L="row",thirdDirection:n="row",single:i="false"}=f.query;c.value=L==="column",u.value=n==="column",s(typeof _=="string"?parseInt(_):5,!0)}),(_,L)=>(p(),w("div",{class:C(["flex h-full w-full",l(c)?"flex-col":"flex-row"])},[N(H,{name:"fade"},{default:B(()=>[R(b("div",{class:C(["bg-[#324868] flex gap-1 text-white border-r border-solid border-[#e4e4e4]",l(c)?"flex-row justify-center":"flex-col"])},[(p(!0),w(T,null,D(l(a),n=>(p(),w("div",{key:n.menuId,onClick:i=>l(M)(n),class:"w-32 font-bold min-w-max rounded-sm py-2 px-2"},S(n.menuName),9,Y))),128))],2),[[$,l(x)]])]),_:1}),N(H,{name:"fade"},{default:B(()=>[R(b("div",{class:C(["bg-[#e2e0df] flex gap-1 text-black border-r border-solid border-[#e4e4e4]",l(c)?"flex-row justify-center":"flex-col"])},[(p(!0),w(T,null,D(l(r),n=>(p(),w("div",{key:n.menuId,onClick:i=>l(k)(n),class:"w-32 font-bold min-w-max rounded-sm py-2 px-2"},S(n.menuName),9,Z))),128))],2),[[$,l(h)]])]),_:1}),N(H,{name:"fade"},{default:B(()=>[R(b("div",{class:C(["flex-1 bg-[#ffffff] flex gap-1 text-black overflow-auto",l(g)])},[(p(!0),w(T,null,D(l(v),n=>(p(),w("div",{key:n.menuId,class:C(["flex items-center gap-1",l(u)?"flex-col":"flex-row"])},[b("span",ee,S(n.menuName),1),b("div",{class:C(["flex gap-1",l(u)?"flex-col":"flex-row"])},[(p(!0),w(T,null,D(n.children,i=>(p(),w("div",{key:i.menuId,onClick:y=>l(e)(i),class:"w-32 min-w-max rounded-sm py-2 px-2"},S(i.menuName),9,ne))),128))],2)],2))),128))],2),[[$,l(m)]])]),_:1})],2))}});const me=K(te,[["__scopeId","data-v-c143662c"]]);export{me as default};
