import{_ as m,c,d as _,o as p,e as t,t as b,r as n,a as r,w as g,f as y,v as x}from"./index-JKhKBOs3.js";import{H as C,F as M}from"./Footer-h2rNzouf.js";const V={key:0,class:"modal-overlay"},w={class:"modal"},h={__name:"AlertModal",props:{message:{type:String,required:!0},visible:{type:Boolean,required:!0}},emits:["close"],setup(o,{emit:s}){const a=s,l=()=>{a("close")};return(i,d)=>o.visible?(p(),c("div",V,[t("div",w,[t("p",null,b(o.message),1),t("button",{onClick:l},"Accept")])])):_("",!0)}},q=m(h,[["__scopeId","data-v-6ed36bcb"]]),S={__name:"ContactView",setup(o){const s=n(""),a=n(""),l=n(!1),i=()=>{l.value=!1},d=u=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u),v=()=>{d(s.value)?a.value="Email sent successfully ✅":a.value="Invalid email format, please enter a valid email ❌",l.value=!0};return(u,e)=>(p(),c("main",null,[r(C),t("section",null,[t("form",{onSubmit:g(v,["prevent"])},[e[1]||(e[1]=t("input",{type:"text",placeholder:"Company name / Personal name",required:""},null,-1)),y(t("input",{type:"text",placeholder:"Email address","onUpdate:modelValue":e[0]||(e[0]=f=>s.value=f),required:""},null,512),[[x,s.value]]),e[2]||(e[2]=t("textarea",{name:"",id:"",cols:"50",rows:"10",placeholder:"Write your message here",required:""},null,-1)),e[3]||(e[3]=t("button",{type:"submit"},"Send message",-1))],32),r(q,{message:a.value,visible:l.value,onClose:i},null,8,["message","visible"])]),r(M)]))}},B=m(S,[["__scopeId","data-v-f2d7a8c8"]]);export{B as default};
