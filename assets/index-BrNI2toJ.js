import{c as D,R as I,n as S,t as k,H as m,S as A,I as B,j as L,w as z}from"./index-CRmXhf89.js";import{d as P,r as N,b as l,_,a4 as E,l as O,o,m as f,w as x,q as d,f as V}from"./index-De6GvLOu.js";const[H,a]=D("nav-bar"),j={title:String,fixed:Boolean,zIndex:S,border:k,leftText:String,rightText:String,leftDisabled:Boolean,rightDisabled:Boolean,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:k};var q=P({name:H,props:j,emits:["clickLeft","clickRight"],setup(e,{emit:c,slots:t}){const i=N(),u=I(i,a),h=r=>{e.leftDisabled||c("clickLeft",r)},g=r=>{e.rightDisabled||c("clickRight",r)},b=()=>t.left?t.left():[e.leftArrow&&l(B,{class:a("arrow"),name:"arrow-left"},null),e.leftText&&l("span",{class:a("text")},[e.leftText])],n=()=>t.right?t.right():l("span",{class:a("text")},[e.rightText]),s=()=>{const{title:r,fixed:v,border:y,zIndex:C}=e,R=L(C),w=e.leftArrow||e.leftText||t.left,T=e.rightText||t.right;return l("div",{ref:i,style:R,class:[a({fixed:v}),{[A]:y,"van-safe-area-top":e.safeAreaInsetTop}]},[l("div",{class:a("content")},[w&&l("div",{class:[a("left",{disabled:e.leftDisabled}),e.clickable&&!e.leftDisabled?m:""],onClick:h},[b()]),l("div",{class:[a("title"),"van-ellipsis"]},[t.title?t.title():r]),T&&l("div",{class:[a("right",{disabled:e.rightDisabled}),e.clickable&&!e.rightDisabled?m:""],onClick:g},[n()])])])};return()=>e.fixed&&e.placeholder?u(s):s()}});const F=z(q),K={key:2,style:{"font-size":"3.86667vw",color:"#000000"}},M={__name:"index",props:{title:{type:String,default:""},back:{type:Boolean,default:!1},share:{type:Boolean,default:!1},user:{type:Boolean,default:!1},upload:{type:Boolean,default:!1},placeholder:{type:Boolean,default:!1},color:{type:String,default:"#fff"},border:{type:Boolean,default:!1},background:{type:String,default:"transparent"}},emits:["openRight"],setup(e,{emit:c}){E(g=>({"267e2ef7":e.background}));const t=O(),i=c,u=()=>{t.back()},h=()=>{i("openRight")};return(g,b)=>{const n=B,s=F;return o(),f(s,{title:e.title,"left-text":"","left-arrow":"",fixed:"",placeholder:e.placeholder,border:e.border,"safe-area-inset-top":!0,onClickLeft:u,onClickRight:h},{left:x(()=>[e.back?(o(),f(n,{key:0,name:"arrow-left",size:"20",color:e.color},null,8,["color"])):d("",!0)]),right:x(()=>[e.share?(o(),f(n,{key:0,name:"share-o",size:"20",color:e.color},null,8,["color"])):d("",!0),e.user?(o(),f(n,{key:1,name:"bars",size:"20",color:e.color},null,8,["color"])):d("",!0),e.upload?(o(),V("div",K,"发布")):d("",!0)]),_:1},8,["title","placeholder","border"])}}},J=_(M,[["__scopeId","data-v-d0924e63"]]);export{J as n};
