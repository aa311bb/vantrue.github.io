import{Y as I}from"./index-CRmXhf89.js";import{S as T}from"./index-B7i01bgF.js";import{$ as c}from"./useConfig-taU0ARZl.js";import{_ as b,r as g,o as p,f as v,F as S,k as A,G as L,n as x,h as l,g as t,b as u,t as f,q as B,l as W,D as z,m as D,w as y,p as M,i as V}from"./index-De6GvLOu.js";import{n as Y}from"./index-BrNI2toJ.js";import{T as U}from"./index-CwhPZDJQ.js";import{I as O}from"./index-CXizdvbV.js";import"./use-expose-Oe1mBPbS.js";const R=["onClick"],j={class:"logo"},q={class:"center"},F={class:"foot"},G={class:"footItem"},J={class:"footItem"},H={__name:"swiper",props:{extendeList:{type:Array,default:()=>[]}},emits:["goAddExtended"],setup(o,{emit:i}){const n=o,m=i,e=g(1);let r=0,d=g(!1);const E=s=>{r=s.touches[0].clientY,d.value=!1},w=s=>{if(d.value)return;const _=s.touches[0].clientY-r;Math.abs(_)>50&&(s.preventDefault(),d.value=!0,_<0?e.value<n.extendeList.length-1&&e.value++:e.value>0&&e.value--)},N=()=>{d.value=!1},k=s=>{m("goAddExtended",s)};return(s,_)=>{const C=O,$=U;return p(),v("div",{class:"card-container",onTouchstart:E,onTouchmove:w,onTouchend:N},[n.extendeList.length?(p(!0),v(S,{key:0},A(n.extendeList,(h,a)=>(p(),v("div",{key:a,class:L(["card",{active:e.value===a}]),style:x({transform:`translate3d(0,${a!==e.value?(a-e.value)*30:0}%, ${a!==e.value?-Math.abs(a-e.value)*100+"px":"0"})`,background:`url(${e.value===a?l(c)("/extendedWarranty/currentCardBg.png"):l(c)("/extendedWarranty/cardBg.png")})`,zIndex:-(e.value-a),top:n.extendeList.length<=2?"20%":`${5+e.value*7.5}%`}),onClick:te=>k(h)},[t("div",j,[u(C,{src:l(c)("/extendedWarranty/logo.png"),style:{width:"19.6vw",height:"3.6vw"}},null,8,["src"]),t("span",null,"NO.000"+f(a+1),1)]),t("div",q,[u($,{rows:"2",content:"延保服务卡",class:"text"})]),t("div",F,[t("div",G,"购买机型："+f(h.buyModel),1),t("div",J,"延保日期："+f(h.buyDate),1)])],14,R))),128)):B("",!0)],32)}}},K=b(H,[["__scopeId","data-v-32e71e45"]]),P=o=>(M("data-v-2c41cc99"),o=o(),V(),o),Q={class:"add"},X=["src"],Z=P(()=>t("span",null,"添加延保服务",-1)),ee={__name:"index",setup(o){const i=W(),n=()=>{i.push({path:"addExtendedWarranty"})},m=r=>{i.push({path:"addExtendedWarranty",query:{id:JSON.stringify(r)}})},e=z([{OrderNumber:"fb0003137zu",buyChannel:"vantrue.com",buyDate:"2024-06-20",buyModel:"VANTRUE E1",serialNumber:"1234567890",uploadUrl:[],name:"zjt",phone:"12345678910"},{OrderNumber:"fb0004567df",buyChannel:"vantrue.com",buyDate:"2024-06-01",buyModel:"VANTRUE E2",serialNumber:"1234567890",uploadUrl:[],name:"zjt",phone:"12345678910"},{OrderNumber:"fb0233137qw",buyChannel:"vantrue.com",buyDate:"2024-06-07",buyModel:"VANTRUE E3",serialNumber:"1234567890",uploadUrl:[],name:"zjt",phone:"12345678910"}]);return(r,d)=>(p(),D(I,{background:"#fff"},{default:y(()=>[u(Y,{back:"",placeholder:"",color:"#000",title:"延保服务"}),u(T,{scrollY:"",height:"93vh"},{default:y(()=>[u(K,{extendeList:e,onGoAddExtended:m},null,8,["extendeList"]),t("div",Q,[t("div",{class:"addCard",style:x({background:`url(${l(c)("/extendedWarranty/addBg.png")})`}),onClick:n},[t("img",{src:l(c)("/extendedWarranty/add.png"),style:{width:"24.13333vw",height:"24.13333vw"}},null,8,X),Z],4)])]),_:1})]),_:1}))}},ue=b(ee,[["__scopeId","data-v-2c41cc99"]]);export{ue as default};