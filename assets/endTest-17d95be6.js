import{E as h}from"./el-button-940c8f12.js";import{E as b,a as v}from"./el-tag-39290cf1.js";import{d as x,O as g,u as y,r as c,o as E,l as q,m as a,e as t,w as d,y as B}from"./index-188853fa.js";import{a as C}from"./axios-7bad2321.js";import{E as u}from"./el-overlay-ff6e7837.js";import"./el-input-1607a7ec.js";import"./typescript-75ae0d46.js";import"./_initCloneObject-ad00f691.js";const j={class:"flex flex-col justify-center items-center"},w=a("div",null,"感谢您的合作!",-1),T={class:"flex justify-between pb-2"},k=a("div",{class:"flex items-center gap-2"},null,-1),D=a("span",{class:"pl-1"},"保存数据",-1),A=x({__name:"endTest",setup(O){const _=g(),r=y(),n=c(!1),s=c([]),e=r.radiosData;s.value.push({name:e.name,question1:[e.radio1_1,e.radio1_2,e.radio1_3,e.radio1_4,e.radio1_5,e.radio1_6,e.radio1_7].join(","),question2:[e.radio2_1,e.radio2_2,e.radio2_3,e.radio2_4,e.radio2_5].join(","),secondCount:e.secondCount}),console.log(s.value);const p=()=>{const i=s.value[0];n.value=!0,C.post("https://zhangqd.mynatapp.cc/add_user",{...i}).then(l=>{n.value=!1,u.alert(l.data.data.message??"保存成功","提示",{confirmButtonText:"确定",callback:()=>{r.checkQuestion=[],B.push({path:"/seconde/test2",query:_.query})}})}).catch(l=>{u.alert("保存失败","提示",{confirmButtonText:"确定"})})};return(i,l)=>{const m=h,o=v,f=b;return E(),q("div",j,[w,a("div",null,[a("div",T,[k,t(m,{type:"success",loading:n.value,onClickOnce:p},{default:d(()=>[D]),_:1},8,["loading"])]),t(f,{data:s.value,"max-height":"60vh",style:{width:"60vw"},border:!0,center:""},{default:d(()=>[t(o,{type:"index",label:"序号",width:"100"}),t(o,{prop:"name",label:"姓名"}),t(o,{prop:"question1",label:"第一个问题"}),t(o,{prop:"question2",label:"第二个问题"}),t(o,{prop:"secondCount",label:"用时（s）"})]),_:1},8,["data"])])])}}});export{A as default};