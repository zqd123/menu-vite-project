import{E as h}from"./el-button-690ae315.js";import{E as b,a as v}from"./el-tag-7d2f0070.js";import"./el-popper-69530132.js";import{d as x,X as g,u as E,r as c,o as y,l as q,m as a,e as t,w as d,s as B}from"./index-638b00b5.js";import{a as C}from"./axios-a80d51ab.js";import{E as u}from"./el-message-box-7a33201c.js";import"./el-input-16659c52.js";import"./el-overlay-ec4df404.js";import"./typescript-af9adc0b.js";import"./event-fe80fd0c.js";import"./_initCloneObject-1848aba8.js";const j={class:"flex flex-col justify-center items-center"},w=a("div",null,"感谢您的合作!",-1),T={class:"flex justify-between pb-2"},k=a("div",{class:"flex items-center gap-2"},null,-1),D=a("span",{class:"pl-1"},"保存数据",-1),G=x({__name:"endTest",setup(N){const p=g(),r=E(),n=c(!1),s=c([]),e=r.radiosData;s.value.push({name:e.name,question1:[e.radio1_1,e.radio1_2,e.radio1_3,e.radio1_4,e.radio1_5,e.radio1_6,e.radio1_7].join(","),question2:[e.radio2_1,e.radio2_2,e.radio2_3,e.radio2_4,e.radio2_5].join(","),secondCount:e.secondCount}),console.log(s.value);const _=()=>{const i=s.value[0];n.value=!0,C.post("https://zhangqd.mynatapp.cc/add_user",{...i}).then(l=>{n.value=!1,u.alert(l.data.data.message??"保存成功","提示",{confirmButtonText:"确定",callback:()=>{r.checkQuestion=[],B.push({path:"/seconde/test2",query:p.query})}})}).catch(l=>{u.alert("保存失败","提示",{confirmButtonText:"确定"})})};return(i,l)=>{const m=h,o=v,f=b;return y(),q("div",j,[w,a("div",null,[a("div",T,[k,t(m,{type:"success",loading:n.value,onClickOnce:_},{default:d(()=>[D]),_:1},8,["loading"])]),t(f,{data:s.value,"max-height":"60vh",style:{width:"60vw"},border:!0,center:""},{default:d(()=>[t(o,{type:"index",label:"序号",width:"100"}),t(o,{prop:"name",label:"姓名"}),t(o,{prop:"question1",label:"第一个问题"}),t(o,{prop:"question2",label:"第二个问题"}),t(o,{prop:"secondCount",label:"用时（s）"})]),_:1},8,["data"])])])}}});export{G as default};