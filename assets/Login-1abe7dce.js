import{b as v,E as C}from"./el-button-c467b779.js";import{E as F}from"./el-card-244b83c1.js";import{E as h,a as k}from"./el-form-item-5a7f826d.js";import{E as I}from"./el-input-41efb839.js";/* empty css                */import{d as V,u as j,r as m,a as u,k as c,o as R,l as S,e,w as o,p as B,q as p,s as q}from"./index-8ec7d654.js";import"./event-337f95ab.js";import"./_initCloneObject-9442602b.js";import"./typescript-defaf979.js";const z={class:"w-full flex justify-center items-center"},H=V({__name:"Login",setup(L){const f=j(),d=m("right"),l=m(),s=u({studyName:""}),_=u({studyName:[{required:!0,message:"请输入姓名",trigger:"blur"}]}),y=async r=>{r&&await r.validate((t,n)=>{t?(sessionStorage.setItem("userName",s.studyName),f.userInfo=s,q.push({name:"menu-test",params:{globDirection:"row",type:"type1"}})):console.log("error submit!",n)})};return(r,t)=>{const n=c("Opportunity"),a=v,b=I,g=h,x=c("CaretRight"),E=C,w=k,N=F;return R(),S("div",z,[e(N,{class:"w-96 h-72 flex justify-center items-center","body-class":"flex",shadow:"always","body-style":"display: flex; flex-direction:column; justify-content: center; align-items: center"},{default:o(()=>[e(a,{color:"#409EFC",size:50,class:"mb-8"},{default:o(()=>[e(n)]),_:1}),e(w,{ref_key:"ruleFormRef",ref:l,rules:_,"label-position":d.value,model:s,onSubmit:t[2]||(t[2]=B(()=>{},["prevent"])),class:"flex flex-col justify-center items-center"},{default:o(()=>[e(g,{label:"姓名",prop:"studyName"},{default:o(()=>[e(b,{modelValue:s.studyName,"onUpdate:modelValue":t[0]||(t[0]=i=>s.studyName=i)},null,8,["modelValue"])]),_:1}),e(E,{type:"primary",size:"default",onClick:t[1]||(t[1]=i=>y(l.value))},{default:o(()=>[e(a,{style:{"margin-right":"8px"}},{default:o(()=>[e(x)]),_:1}),p(" 确认")]),_:1}),p(" 本实验为导航搜索任务，请根据随后出现的页面中的问题，在导航栏中进行单词的关联关系搜索，并回答问题。 ")]),_:1},8,["rules","label-position","model"])]),_:1})])}}});export{H as default};
