import{_ as c,c as m,e as _,d as p,f as t,t as b,r,a as i,w as g,g as x,v as y}from"./index-BjAm9iGs.js";import{H as M,F as V}from"./Footer-CQsIr6bI.js";const w={key:0,class:"modal-overlay"},C={class:"modal"},S={__name:"AlertModal",props:{message:{type:String,required:!0},visible:{type:Boolean,required:!0}},emits:["close"],setup(o,{emit:s}){const a=s,l=()=>{a("close")};return(n,u)=>o.visible?(p(),m("div",w,[t("div",C,[t("p",null,b(o.message),1),t("button",{onClick:l},"Accept")])])):_("",!0)}},h=c(S,[["__scopeId","data-v-6ed36bcb"]]),q={__name:"ContactView",setup(o){const s=r(""),a=r(""),l=r(!1),n=()=>{l.value=!1},u=d=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d),v=()=>{u(s.value)?a.value="Email sent successfully ✅":a.value="Invalid email format, please enter a valid email ❌",l.value=!0};return(d,e)=>(p(),m("main",null,[i(M),t("section",null,[t("form",{onSubmit:g(v,["prevent"])},[x(t("input",{type:"text",placeholder:"Email address","onUpdate:modelValue":e[0]||(e[0]=f=>s.value=f),required:""},null,512),[[y,s.value]]),e[1]||(e[1]=t("input",{type:"text",placeholder:"Subject",required:""},null,-1)),e[2]||(e[2]=t("textarea",{name:"",id:"",cols:"50",rows:"10",placeholder:"Write your message here",required:""},null,-1)),e[3]||(e[3]=t("button",{type:"submit"},"Send message",-1))],32)]),i(V),i(h,{message:a.value,visible:l.value,onClose:n},null,8,["message","visible"])]))}},B=c(q,[["__scopeId","data-v-c496e9ae"]]);export{B as default};
