import{b as q,E as B}from"./el-button-2a9ec420.js";import{E as L}from"./el-card-adc727e5.js";import{E as S,a as U}from"./el-form-item-594dcda7.js";import{E as z}from"./el-input-ac463826.js";/* empty css                */import{d as G,u as O,r as $,a as x,k as E,o as t,l as r,m as i,e as s,w as c,F as _,p as b,q as I,s as D,x as M,b as k,y as P,v as w}from"./index-63607777.js";import"./typescript-49c83922.js";const C="",H=[4,5],J=[4,5,3,2,3,5,3,1,1,6,5,6,2,4,6,2,5,1,1,6],N=({preStr:f=""}={})=>{const g=f===""?J:H,m=[];for(let o=1;o<=g.length;o++){const n={url:`${C}${f}${o}.0`},y=[];for(let a=1;a<=6;a++){const u={url:`${C}${f}${o}.${a}`,isTrue:a===g[o-1]};y.push(u)}n.children=y,m.push(n)}return console.log("🚀 ~ file: allImage.ts:25 ~ createImage ~ testArr:",m),m},K=N({preStr:"t"}),Q=N(),W=["src"],X=["src"],Y=["src"],Z=["src"],ae=G({__name:"Login",setup(f){const g=O(),m=$("right"),o=$(),n=x({studyCode:"",studyName:"",email:""}),y=x({studyCode:[{required:!0,message:"请输入学号",trigger:"blur"}],studyName:[{required:!0,message:"请输入姓名",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"}]}),a=async d=>{d&&await d.validate((l,h)=>{l?(sessionStorage.setItem("userName",n.studyName),g.userInfo=n,P.push({path:"/first/guidance"})):console.log("error submit!",h)})},u=d=>new URL(Object.assign({})[`../../assets/first-test/${d}`],self.location).href;return(d,l)=>{const h=E("Grape"),v=q,F=z,V=S,A=E("CaretRight"),R=B,T=U,j=L;return t(),r(_,null,[i("div",null,[s(j,{class:"w-96 h-72 flex justify-center items-center",shadow:"always"},{default:c(()=>[s(v,{color:"#409EFC",size:50,class:"mb-8"},{default:c(()=>[s(h)]),_:1}),s(T,{ref_key:"ruleFormRef",ref:o,rules:y,"label-position":m.value,model:n,onSubmit:l[2]||(l[2]=D(()=>{},["prevent"]))},{default:c(()=>[s(V,{label:"姓名",prop:"studyName"},{default:c(()=>[s(F,{modelValue:n.studyName,"onUpdate:modelValue":l[0]||(l[0]=e=>n.studyName=e)},null,8,["modelValue"])]),_:1}),s(R,{type:"primary",size:"default",onClick:l[1]||(l[1]=e=>a(o.value))},{default:c(()=>[s(v,{style:{"margin-right":"8px"}},{default:c(()=>[s(A)]),_:1}),M(" 确认")]),_:1})]),_:1},8,["rules","label-position","model"])]),_:1})]),i("div",null,[(t(!0),r(_,null,b(I(K),e=>k((t(),r("div",{key:e.url},[i("img",{src:u(`${e.url}.png`),alt:""},null,8,W),(t(!0),r(_,null,b(e.children,p=>(t(),r("div",{key:p.url},[i("img",{src:u(`${p.url}.png`),alt:""},null,8,X)]))),128))],512)),[[w,!1]])),128)),(t(!0),r(_,null,b(I(Q),e=>k((t(),r("div",{key:e.url},[i("img",{src:u(`${e.url}.png`),alt:""},null,8,Y),(t(!0),r(_,null,b(e.children,p=>(t(),r("div",{key:p.url},[i("img",{src:u(`${p.url}.png`),alt:""},null,8,Z)]))),128))],512)),[[w,!1]])),128))])],64)}}});export{ae as default};
