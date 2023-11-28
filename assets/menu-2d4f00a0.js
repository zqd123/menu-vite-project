import{r as i,z as G,N as B,d as J,A as V,o as g,l as _,e as F,w as H,T as R,B as C,q as f,b as O,v as $,m as y,F as S,p as D,C as T}from"./index-9f3059c3.js";import{a as q}from"./axios-28bc18a3.js";import{_ as U}from"./plugin-vueexport-helper-c27b6911.js";const K=""+new URL("stringData-4f6bc0b1.png",import.meta.url).href;function W(){const d=i([]),m=i([]);async function w(){const{data:e}=await q.get(K);return e.split(/\n/).filter(t=>t.trim()!=="")}async function v(){return(await w()).map((n,t)=>({menuName:n,menuId:n+(t+1)}))}function a(e,n=5,{onlySingle:t}={}){e=JSON.parse(JSON.stringify(e));const s=[];for(;n>0;){if(e.length<=0)throw new Error("菜单剩余不足,取不到了");const l=Math.floor(Math.random()*e.length);s.find(L=>L.menuId===e[l].menuId)?n++:(s.push(e[l]),e=e.filter(L=>L.menuId!==e[l].menuId),n--)}return t&&p(e,s),s}function M(e,n){return e.reduce((t,s)=>(n.find(l=>l.menuId===s.menuId)||t.push(s),t),[])}function p(e,n){m.value=M(e,n)}const h=i([]);function u(e){const n=a(d.value,e);console.log("🚀 ~ file: useProcessDataHook.js:83 ~ initMenu ~ menuLevel1:",n),h.value=r(n,e)}function r(e,n){return e.map(t=>(t.children=a(d.value,n).map(s=>(s.parentId=t.menuId,s)),t.children.map(s=>{s.children=a(d.value,n).map(l=>(l.parentId=s.menuId,l))}),t)),e}function c(e,{parentList:n,onlySingle:t}={}){return n?n.reduce((s,l)=>{const L=a(m.value,e,{onlySingle:t}).map(b=>(b.parentId=l.menuId,b));return s.concat(L)},[]):a(m.value,e,{onlySingle:t})}return{allMenu:d,remainMenu:m,mapData:v,getRandomData:a,changeRemainMenu:p,menuTree:h,initMenu:u,createLevelDataList:c}}const{allMenu:P,remainMenu:Q,mapData:X,getRandomData:Y,changeRemainMenu:fe,menuTree:de,initMenu:me,createLevelDataList:E}=W();function Z(){const d=i(!1),m=i(!1),w=i(!1),v=i(!0),a=i(!1),M=i(!1),p=i([]),h=i([]),u=i([]),r=i([]),c=i([]),e=i([]);async function n(o=5,k=!1){B.start(),P.value=await X(),Q.value=P.value,p.value=E(o),console.log("🚀 ~ file: menuHook.ts:47 ~ initMenu ~ menuLevel1List.value:",p.value),r.value=p.value,h.value=E(o,{parentList:p.value,onlySingle:k}),console.log("🚀 ~ file: menuHook.ts:46 ~ initMenu ~ menuLevel2List.value:",h.value);const j=E(o,{parentList:h.value,onlySingle:k});u.value=j.map(N=>(N.children=Y(Q.value,o),N)),B.done(),console.log("🚀 ~ file: menuHook.ts:51 ~ initMenu ~ menuLevel3List.value:",u.value)}const t=G(()=>w.value?`flex-row ${m.value?"justify-center ":"justify-start"}`:`flex-col ${m.value?"items-center  pl-36":"items-start"}`);return{isHide:d,isGlobalColumn:m,isThirdColumn:w,isShowFirstMenu:v,isShowSecondMenu:a,isShowThirdMenu:M,thirdCenter:t,firstMenuClick:o=>{console.log("一级菜单点击"),d.value&&(v.value=!1),a.value=!0,M.value=!1,c.value=h.value.filter(k=>k.parentId===o.menuId)},secondMenuClick:o=>{d.value&&(v.value=!1,a.value=!1),M.value=!0,e.value=u.value.filter(k=>k.parentId===o.menuId),console.log("🚀 ~ file: menuHook.ts:90 ~ secondMenuClick ~ menuLevel3.value:",e.value)},selectClick:o=>{console.log("选中:",o)},refreshStatus:()=>{v.value=!0,a.value=!1,M.value=!1},initMenu:n,menuLevel1:r,menuLevel2:c,menuLevel3:e,menuLevel1List:p,menuLevel2List:h,menuLevel3List:u}}function ee(){const d=["column","row"],m=[5,7,9],w=["column","row"],v=[!1,!0];function a(u="column"){const r=[];return d.forEach((c,e)=>{m.forEach((n,t)=>{v.forEach((s,l)=>{r.push({num:n,thirdDirection:c,globDirection:u,isFirstShow:s})})})}),r.forEach((c,e)=>{c.id=e+1}),r}function M(u){return u[Math.floor(Math.random()*u.length)]}function p({level1List:u,level2List:r,level3List:c}){const e=M(u),n=e.menuName,t=r.find(o=>o.parentId===e.menuId)??r[0],s=t.menuName,l=c.find(o=>o.parentId===t.menuId)??c[0],L=l.menuName,b=l.children&&l.children[0].menuName;return console.log(n,s,L,b),"该页面中节点A与节点B是否属于父子关系（第一层级和第二层级） 是/否"}function h(){const u=[];return m.forEach((r,c)=>{for(let e=0;e<2;e++){const n={num:r,thirdDirection:w[e],globDirection:d[e],isFirstShow:v[e]};u.push(n)}}),u}return{createMenuTypeList:a,createQuestionList:p,generateFirstTypeList:h}}const ne=["onClick"],te=["onClick"],se={class:"font-bold w-32 rounded-sm py-2 px-2"},ue=["onClick"],le=J({__name:"menu",setup(d){V();const{isHide:m,isGlobalColumn:w,isThirdColumn:v,isShowFirstMenu:a,isShowSecondMenu:M,isShowThirdMenu:p,thirdCenter:h,firstMenuClick:u,secondMenuClick:r,selectClick:c,refreshStatus:e,initMenu:n,menuLevel1:t,menuLevel2:s,menuLevel3:l,menuLevel1List:L,menuLevel2List:b,menuLevel3List:o}=Z(),{createMenuTypeList:k,createQuestionList:j}=ee(),N=k();console.log("🚀 ~ file: menu.vue:103 ~ arr:",N);async function z({num:A=5}={}){await n(A),j({level1List:L.value,level2List:b.value,level3List:o.value})}return z({num:5}),(A,oe)=>(g(),_("div",{class:C(["flex h-full w-full",f(w)?"flex-col":"flex-row"])},[F(R,{name:"fade"},{default:H(()=>[O(y("div",{class:C(["bg-[#324868] flex gap-1 text-white border-solid border-[#e4e4e4]",f(w)?"flex-row justify-center border-b":"flex-col border-r"])},[(g(!0),_(S,null,D(f(t),x=>(g(),_("div",{key:x.menuId,onClick:I=>f(u)(x),class:"w-32 font-bold min-w-max rounded-sm py-2 px-2"},T(x.menuName),9,ne))),128))],2),[[$,f(a)]])]),_:1}),F(R,{name:"fade"},{default:H(()=>[y("div",{class:C(["bg-[#e2e0df] flex gap-1 text-black border-solid border-[#e4e4e4]",f(w)?"flex-row justify-center border-b":"flex-col border-r"])},[(g(!0),_(S,null,D(f(s),x=>(g(),_("div",{key:x.menuId,onClick:I=>f(r)(x),class:"w-32 font-bold min-w-max rounded-sm py-2 px-2"},T(x.menuName),9,te))),128))],2)]),_:1}),F(R,{name:"fade"},{default:H(()=>[O(y("div",{class:C(["flex-1 bg-[#ffffff] flex gap-1 text-black overflow-auto",f(h)])},[(g(!0),_(S,null,D(f(l),x=>(g(),_("div",{key:x.menuId,class:C(["flex items-center gap-1",f(v)?"flex-col":"flex-row"])},[y("span",se,T(x.menuName),1),y("div",{class:C(["flex gap-1",f(v)?"flex-col":"flex-row"])},[(g(!0),_(S,null,D(x.children,I=>(g(),_("div",{key:I.menuId,onClick:ae=>f(c)(I),class:"w-32 min-w-max rounded-sm py-2 px-2"},T(I.menuName),9,ue))),128))],2)],2))),128))],2),[[$,f(p)]])]),_:1})],2))}});const ve=U(le,[["__scopeId","data-v-91c16f55"]]);export{ve as default};