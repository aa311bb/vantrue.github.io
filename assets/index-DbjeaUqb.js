import{a as ue,e as pe,t as Y,c as ve,f as $e,d as me,p as Re,w as he,H as xe,I as Q,g as Ie,Y as Ae}from"./index-CRmXhf89.js";import{I as J}from"./index-CXizdvbV.js";import"./index-DpB2-7h_.js";/* empty css              */import{S as Le,a as Se}from"./index-D9I-z36f.js";import{I as je}from"./index-RWQE4MgJ.js";import{T as W}from"./index-CwhPZDJQ.js";import{r as h,x as G,d as _e,c as Z,a as Ne,b as a,y as Pe,z as Be,A as Me,_ as U,o as v,m as j,w as N,j as Te,g as o,f as L,F as z,k as F,t as I,h as T,s as B,v as De,T as Ee,p as ge,i as fe,B as Oe,C as Ye,D as ze,E as Fe,e as Ue,q as H,n as Ve}from"./index-De6GvLOu.js";import{d as qe,t as K,s as Ze}from"./index-6D-J8YWV.js";import{$}from"./useConfig-taU0ARZl.js";import{L as He,V as Ge}from"./index-CiyPEjco.js";import{n as Ke}from"./index-BrNI2toJ.js";import{a as E}from"./function-call-CfxAJxnl.js";import{B as Qe}from"./index-B0MXCt0I.js";import"./index-mqVKvPC4.js";import{F as Je}from"./index-D9FTmRDZ.js";import{u as We,p as Xe,a as et,P as ye}from"./index-ChOJ9s9T.js";import{u as tt}from"./use-touch-B8mpADtW.js";import"./use-expose-Oe1mBPbS.js";import"./use-id-oIfCwicp.js";import"./use-lazy-render-gBwbLmzk.js";function de(s,_){return s.reduce((t,r)=>Math.abs(t-_)<Math.abs(r-_)?t:r)}const ot=(s,_)=>{const t=h(s());return G(s,r=>{r!==t.value&&(t.value=r)}),G(t,r=>{r!==s()&&_(r)}),t},nt={height:ue(0),anchors:pe(),duration:ue(.3),contentDraggable:Y,lockScroll:Boolean,safeAreaInsetBottom:Y},[st,q]=ve("floating-panel");var at=_e({name:st,props:nt,emits:["heightChange","update:height"],setup(s,{emit:_,slots:t}){const l=h(),f=h(),m=ot(()=>+s.height,d=>_("update:height",d)),k=Z(()=>{var d,c;return{min:(d=s.anchors[0])!=null?d:100,max:(c=s.anchors[s.anchors.length-1])!=null?c:Math.round($e.value*.6)}}),R=Z(()=>s.anchors.length>=2?s.anchors:[k.value.min,k.value.max]),g=h(!1),p=Z(()=>({height:me(k.value.max),transform:`translateY(calc(100% + ${me(-m.value)}))`,transition:g.value?"none":`transform ${s.duration}s cubic-bezier(0.18, 0.89, 0.32, 1.28)`})),y=d=>{const c=Math.abs(d),{min:i,max:w}=k.value;return c>w?-(w+(c-w)*.2):c<i?-(i-(i-c)*.2):d};let n,e=-1;const u=tt(),b=d=>{u.start(d),g.value=!0,n=-m.value,e=-1},A=d=>{var c;u.move(d);const i=d.target;if(f.value===i||(c=f.value)!=null&&c.contains(i)){const{scrollTop:P}=f.value;if(e=Math.max(e,P),!s.contentDraggable)return;if(-n<k.value.max)Re(d,!0);else if(!(P<=0&&u.deltaY.value>0)||e>0)return}const w=u.deltaY.value+n;m.value=-y(w)},x=()=>{e=-1,g.value=!1,m.value=de(R.value,m.value),m.value!==-n&&_("heightChange",{height:m.value})};return G(k,()=>{m.value=de(R.value,m.value)},{immediate:!0}),We(l,()=>s.lockScroll||g.value),Ne("touchmove",A,{target:l}),()=>{var d;return a("div",{class:[q(),{"van-safe-area-bottom":s.safeAreaInsetBottom}],ref:l,style:p.value,onTouchstartPassive:b,onTouchend:x,onTouchcancel:x},[a("div",{class:q("header")},[a("div",{class:q("header-bar")},null)]),a("div",{class:q("content"),ref:f},[(d=t.default)==null?void 0:d.call(t)])])}}});const lt=he(at),ct=s=>s==null?void 0:s.includes("/"),it=[...Xe,"round","closeOnPopstate","safeAreaInsetBottom"],rt={qq:"qq",link:"link-o",weibo:"weibo",qrcode:"qr",poster:"photo-o",wechat:"wechat","weapp-qrcode":"miniprogram-o","wechat-moments":"wechat-moments"},[ut,S,mt]=ve("share-sheet"),dt=Pe({},et,{title:String,round:Y,options:pe(),cancelText:String,description:String,closeOnPopstate:Y,safeAreaInsetBottom:Y});var pt=_e({name:ut,props:dt,emits:["cancel","select","update:show"],setup(s,{emit:_,slots:t}){const r=n=>_("update:show",n),l=()=>{r(!1),_("cancel")},f=(n,e)=>_("select",n,e),m=()=>{const n=t.title?t.title():s.title,e=t.description?t.description():s.description;if(n||e)return a("div",{class:S("header")},[n&&a("h2",{class:S("title")},[n]),e&&a("span",{class:S("description")},[e])])},k=n=>ct(n)?a("img",{src:n,class:S("image-icon")},null):a("div",{class:S("icon",[n])},[a(Q,{name:rt[n]||n},null)]),R=(n,e)=>{const{name:u,icon:b,className:A,description:x}=n;return a("div",{role:"button",tabindex:0,class:[S("option"),A,xe],onClick:()=>f(n,e)},[k(b),u&&a("span",{class:S("name")},[u]),x&&a("span",{class:S("option-description")},[x])])},g=(n,e)=>a("div",{class:S("options",{border:e})},[n.map(R)]),p=()=>{const{options:n}=s;return Array.isArray(n[0])?n.map((e,u)=>g(e,u!==0)):g(n)},y=()=>{var n;const e=(n=s.cancelText)!=null?n:mt("cancel");if(t.cancel||e)return a("button",{type:"button",class:S("cancel"),onClick:l},[t.cancel?t.cancel():e])};return()=>a(ye,Be({class:S(),position:"bottom","onUpdate:show":r},Me(s,it)),{default:()=>[m(),p(),y()]})}});const vt=he(pt),ht={class:"commtent"},_t={class:"content"},gt={class:"other"},ft={class:"left"},yt={class:"time"},wt=["onClick"],kt=["onClick"],bt=["src"],Ct={__name:"reply",props:{replyList:{type:Array,default:()=>[]},toggle:{type:Boolean,default:!1},cuttent:{type:Number}},emits:["getReplyLike","goReply"],setup(s,{emit:_}){const t=_,r=s,l=m=>{t("getReplyLike",r.cuttent,m)},f=m=>{t("goReply",m)};return(m,k)=>{const R=J,g=W;return v(),j(Ee,{name:"collapse"},{default:N(()=>[Te(o("div",null,[(v(!0),L(z,null,F(r.replyList,(p,y)=>{var n,e;return v(),L("div",{class:"replyBox",key:y},[a(R,{style:{width:"10.13333vw",height:"10.13333vw"},round:"",src:(n=p.user)==null?void 0:n.avatar},null,8,["src"]),o("div",ht,[a(g,{class:"name",content:(e=p.user)==null?void 0:e.name},null,8,["content"]),o("div",_t,I(p.content),1),o("div",gt,[o("div",ft,[o("div",yt,I(p.time),1),o("div",{class:"replyBtn",onClick:u=>f(p)},"回复",8,wt)]),o("div",{class:"right",onClick:u=>l(y)},[o("img",{src:p.flag?T($)("/community/isLike.png"):T($)("/community/like.png"),style:{width:"6vw",height:"6vw"}},null,8,bt),B(" "+I(p.likeNum),1)],8,kt)])])])}),128))],512),[[De,r.toggle]])]),_:1})}}},$t=U(Ct,[["__scopeId","data-v-f157091c"]]),we=s=>(ge("data-v-65356a04"),s=s(),fe(),s),Rt={class:"listNull"},xt=["src"],It=we(()=>o("div",{class:"test"},"居然还没有评论",-1)),At=we(()=>o("div",{class:"test"},[B("发一条"),o("span",null,"“有看头”"),B("吧")],-1)),Lt={__name:"listNull",setup(s){return(_,t)=>(v(),L("div",Rt,[o("img",{src:T($)("/community/listNull.png"),style:{width:"30.66667vw",height:"30.66667vw"}},null,8,xt),It,At]))}},St=U(Lt,[["__scopeId","data-v-65356a04"]]),jt={class:"contentBox"},Nt={class:"title"},Pt={class:"commtent"},Bt={class:"content"},Mt={class:"other"},Tt={class:"left"},Dt={class:"time"},Et=["onClick"],Ot=["onClick"],Yt=["onClick"],zt=["src"],Ft={class:"reply"},Ut={__name:"index",emits:["goReply"],setup(s,{emit:_}){const t=_,r=[{user:{name:"还是做不到吗",avatar:"https://himg.bdimg.com/sys/portrait/item/public.1.200d7efd.5RZzpjx4Ydb4LCORjEcAMA.jpg"},content:"菜就多练，菜就多练，菜就多练",time:"2天前",likeNum:3,flag:!1,reply:[{user:{name:"还是做不到吗",avatar:"https://himg.bdimg.com/sys/portrait/item/public.1.200d7efd.5RZzpjx4Ydb4LCORjEcAMA.jpg"},content:"菜就多练，菜就多练，菜就多练",time:"2天前",likeNum:3,flag:!1,replyPeople:"做不到啊"},{user:{name:"还是做不到吗",avatar:"https://himg.bdimg.com/sys/portrait/item/public.1.200d7efd.5RZzpjx4Ydb4LCORjEcAMA.jpg"},content:"菜就多练，菜就多练，菜就多练",time:"2天前",likeNum:3,flag:!1,replyPeople:"做不到啊"}]},{user:{name:"还是做不到吗",avatar:"https://himg.bdimg.com/sys/portrait/item/public.1.200d7efd.5RZzpjx4Ydb4LCORjEcAMA.jpg"},content:"菜就多练，菜就多练，菜就多练",time:"2024-1-1",likeNum:5,flag:!1,reply:[]},{user:{name:"还是做不到吗",avatar:"https://himg.bdimg.com/sys/portrait/item/public.1.200d7efd.5RZzpjx4Ydb4LCORjEcAMA.jpg"},content:"求回复求回复求回复求回复求回复求回复求回复求回复求回复求回复求回复求回复求回复求回复",time:"2天前",likeNum:3,flag:!1,reply:[{user:{name:"还是做不到吗",avatar:"https://himg.bdimg.com/sys/portrait/item/public.1.200d7efd.5RZzpjx4Ydb4LCORjEcAMA.jpg"},content:"已回",time:"2天前",likeNum:3,flag:!1,replyPeople:""},{user:{name:"还是做不到吗",avatar:"https://himg.bdimg.com/sys/portrait/item/public.1.200d7efd.5RZzpjx4Ydb4LCORjEcAMA.jpg"},content:"菜已回",time:"2天前",likeNum:3,flag:!1,replyPeople:""},{user:{name:"还是做不到吗",avatar:"https://himg.bdimg.com/sys/portrait/item/public.1.200d7efd.5RZzpjx4Ydb4LCORjEcAMA.jpg"},content:"菜",time:"2天前",likeNum:3,flag:!1,replyPeople:""}]},{user:{name:"还是做不到吗",avatar:"https://himg.bdimg.com/sys/portrait/item/public.1.200d7efd.5RZzpjx4Ydb4LCORjEcAMA.jpg"},content:"菜就多练，菜就多练，菜就多练",time:"2024-1-1",likeNum:5,flag:!1,reply:[]},{user:{name:"还是做不到吗",avatar:"https://himg.bdimg.com/sys/portrait/item/public.1.200d7efd.5RZzpjx4Ydb4LCORjEcAMA.jpg"},content:"菜就多练，菜就多练，菜就多练",time:"2024-1-1",likeNum:5,flag:!1,reply:[]}],l=h(r),f=h(!1),m=h(!1),k=()=>{setTimeout(()=>{const e=qe(r);l.value=[...l.value,...e],f.value=!1,l.value.length>=12&&(m.value=!0)},1e3)},R=e=>{t("goReply",e)},g=h([]),p=e=>{g.value[e]=!g.value[e]},y=e=>{K(()=>{l.value[e].flag?(l.value[e].likeNum-=1,E("取消点赞")):(l.value[e].likeNum+=1,E("点赞成功")),l.value[e].flag=!l.value[e].flag},500)},n=(e,u)=>{K(()=>{l.value[e].reply[u].flag?(l.value[e].reply[u].likeNum-=1,E("取消点赞")):(l.value[e].reply[u].likeNum+=1,E("点赞成功")),l.value[e].reply[u].flag=!l.value[e].reply[u].flag},500)};return(e,u)=>{var c;const b=J,A=W,x=Q,d=He;return v(),L("div",jt,[o("div",Nt,"评论 "+I((c=l.value)==null?void 0:c.length),1),l.value.length?(v(),j(d,{key:0,loading:f.value,"onUpdate:loading":u[0]||(u[0]=i=>f.value=i),finished:m.value,"finished-text":"没有更多了",onLoad:k},{default:N(()=>[(v(!0),L(z,null,F(l.value,(i,w)=>{var P,V;return v(),L("div",{class:"commentBox",key:w},[a(b,{style:{width:"10.13333vw",height:"10.13333vw"},round:"",src:(P=i.user)==null?void 0:P.avatar},null,8,["src"]),o("div",Pt,[a(A,{class:"name",content:(V=i.user)==null?void 0:V.name},null,8,["content"]),o("div",Bt,I(i.content),1),o("div",Mt,[o("div",Tt,[o("div",Dt,I(i.time),1),o("div",{class:"goReply",onClick:D=>R(i)},"回复",8,Et),o("div",{class:"replyBtn",onClick:D=>p(w)},[B(I(i==null?void 0:i.reply.length)+"条回复 ",1),g.value[w]?(v(),j(x,{key:1,name:"arrow-up"})):(v(),j(x,{key:0,name:"arrow-down"}))],8,Ot)]),o("div",{class:"right",onClick:D=>y(w)},[o("img",{src:i.flag?T($)("/community/isLike.png"):T($)("/community/like.png"),style:{width:"6vw",height:"6vw"}},null,8,zt),B(" "+I(i.likeNum),1)],8,Yt)]),o("div",Ft,[a($t,{replyList:i.reply,toggle:g.value[w],cuttent:w,onGoReply:R,onGetReplyLike:n},null,8,["replyList","toggle","cuttent"])])])])}),128))]),_:1},8,["loading","finished"])):(v(),j(St,{key:1}))])}}},Vt=U(Ut,[["__scopeId","data-v-554247c3"]]),qt=s=>(ge("data-v-0295f19b"),s=s(),fe(),s),Zt={class:"comment-input"},Ht={class:"input-container"},Gt=qt(()=>o("div",{class:"van-safe-area-bottom"},null,-1)),Kt={__name:"index",setup(s,{expose:_}){const t=h(""),r=h(!1),l=h({}),f=()=>{console.log("提交评论:",t.value),r.value=!1,t.value=""},m=()=>{document.getElementById("inputField").focus()},k=(g={})=>{l.value=g,r.value=!0,Oe(()=>{m()})},R=()=>{l.value={}};return _({onPopupOpened:k}),(g,p)=>{const y=Q,n=Je,e=Qe,u=ye;return v(),L("div",Zt,[a(n,{modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=b=>t.value=b),placeholder:"您怎么看",onFocus:k,readonly:""},{"right-icon":N(()=>[a(y,{name:"comment-o",color:"#828282"})]),_:1},8,["modelValue"]),a(u,{show:r.value,"onUpdate:show":p[2]||(p[2]=b=>r.value=b),position:"bottom",onClosed:R},{default:N(()=>{var b,A,x,d;return[o("div",Ht,[a(n,{modelValue:t.value,"onUpdate:modelValue":p[1]||(p[1]=c=>t.value=c),placeholder:(A=(b=l.value)==null?void 0:b.user)!=null&&A.name?`回复 @${(d=(x=l.value)==null?void 0:x.user)==null?void 0:d.name} :`:"请输入评论",autosize:"",type:"textarea",rows:"3",id:"inputField"},null,8,["modelValue","placeholder"]),a(e,{type:"primary",onClick:f},{default:N(()=>[B("发送")]),_:1})])]}),_:1},8,["show"]),Gt])}}},Qt=U(Kt,[["__scopeId","data-v-0295f19b"]]),Jt={class:"custom-indicator"},Wt={class:"custom-indicatorRight"},Xt={class:"user"},eo={class:"userInfo"},to={class:"other"},oo={class:"time"},no={class:"interaction"},so={class:"onRoad"},ao={class:"Item"},lo=["src"],co={class:"Item"},io=["src"],ro={class:"viewVolume"},uo=["onClick"],mo=["src"],po={class:"num"},vo={__name:"index",setup(s){const _=Ye(),t=h(JSON.parse(_.query.id)),r=h(0),l=h(!1),f=h([]),m=c=>{r.value=c,t.value.picture.forEach(i=>{f.value.push(i.src)}),l.value=!0},k=()=>{r.value=0,f.value=[]},R=h(null),g=c=>{R.value.onPopupOpened(c)},p=c=>{K(()=>{y[c].flag?(y[c].num-=1,E("取消点赞")):(y[c].num+=1,E("点赞成功")),y[c].flag=!y[c].flag},500)},y=ze([{type:1,url:$("/community/like.png"),isUrl:$("/community/isLike.png"),num:0,flag:!1},{type:2,url:$("/community/collection.png"),isUrl:$("/community/isCollection.png"),num:0,flag:!1},{type:3,url:$("/community/follow.png"),isUrl:$("/community/isFollow.png"),num:0,flag:!1},{type:4,url:$("/community/share.png"),isUrl:$("/community/share.png"),num:0,flag:!1}]),n=h(null),e=h(null),u=h([]),b=h(0);Fe(async()=>{Ie("titleBackground",{background:"#000"}).then(P=>{console.log(P)}),await Ze(100);const c=Ue(n.value),i=c.height+c.top,w=c.top;u.value=[window.innerHeight-i,window.innerHeight-w],b.value=u.value[0]});const A=h(!1),x=()=>{A.value=!0},d=[[{name:"微信",icon:"wechat"},{name:"朋友圈",icon:"wechat-moments"},{name:"微博",icon:"weibo"},{name:"QQ",icon:"qq"}],[{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"},{name:"小程序码",icon:"weapp-qrcode"}]];return(c,i)=>{const w=J,P=Se,V=Le,D=W,ke=lt,be=vt,Ce=je;return v(),j(Ae,null,{default:N(()=>{var X,ee,te,oe,ne,se,ae,le,ce,ie;return[a(Ke,{onOpenRight:x,back:"",share:""}),(ee=(X=t.value)==null?void 0:X.video)!=null&&ee.id?(v(),j(Ge,{key:0,id:(te=t.value.video)==null?void 0:te.id,src:(oe=t.value.video)==null?void 0:oe.src,poster:(ne=t.value.video)==null?void 0:ne.poster,isDetail:!0},null,8,["id","src","poster"])):H("",!0),(se=t.value)!=null&&se.picture.length?(v(),j(V,{key:1,class:"my-swipe","lazy-render":"",loop:!1},{indicator:N(({active:C,total:M})=>[o("div",Jt,[(v(!0),L(z,null,F(M,(O,re)=>(v(),L("div",{class:"custom-indicator-item",key:O,style:Ve({backgroundColor:C===re?"#FF5200":"#D8D8D8"})},null,4))),128))]),o("div",Wt,I(C+1)+"/"+I(M),1)]),default:N(()=>{var C;return[(v(!0),L(z,null,F((C=t.value)==null?void 0:C.picture,(M,O)=>(v(),j(P,{key:O},{default:N(()=>[a(w,{style:{width:"100%",height:"100%"},src:M.src,onClick:re=>m(O)},null,8,["src","onClick"])]),_:2},1024))),128))]}),_:1})):H("",!0),o("div",{class:"info",ref_key:"infoDom",ref:n},[o("div",Xt,[a(w,{style:{width:"10.13333vw",height:"10.13333vw"},round:"",src:(ae=t.value.userInfo)==null?void 0:ae.avatar},null,8,["src"]),o("div",eo,[a(D,{class:"name",content:(le=t.value.userInfo)==null?void 0:le.name},null,8,["content"]),o("div",to,[o("div",oo,I((ce=t.value.userInfo)==null?void 0:ce.time),1),a(D,{class:"address",content:(ie=t.value.userInfo)==null?void 0:ie.address},null,8,["content"])])])]),a(D,{rows:"2",content:t.value.title,class:"title"},null,8,["content"]),o("div",no,[o("div",so,[o("div",ao,[o("img",{style:{width:"7.2vw",height:"7.2vw"},src:T($)("/community/other.png")},null,8,lo),B(" 在路上 ")]),o("div",co,[o("img",{style:{width:"7.2vw",height:"7.2vw"},src:T($)("/community/other.png")},null,8,io),B(" 在路上 ")])]),o("div",ro,I(t.value.viewVolume)+"浏览量",1)]),o("div",{class:"like",ref_key:"nums",ref:e},[(v(!0),L(z,null,F(y,(C,M)=>(v(),L("div",{class:"likeItem",key:M,onClick:O=>p(M)},[o("img",{style:{width:"9.6vw",height:"9.6vw"},src:C.flag?C.isUrl:C.url},null,8,mo),o("div",po,I(C.num),1)],8,uo))),128))],512)],512),u.value.length?(v(),j(ke,{key:2,height:b.value,"onUpdate:height":i[0]||(i[0]=C=>b.value=C),anchors:u.value},{default:N(()=>[a(Vt,{onGoReply:g})]),_:1},8,["height","anchors"])):H("",!0),a(Qt,{ref_key:"field",ref:R},null,512),a(be,{show:A.value,"onUpdate:show":i[1]||(i[1]=C=>A.value=C),title:"立即分享给好友",options:d},null,8,["show"]),a(Ce,{show:l.value,"onUpdate:show":i[2]||(i[2]=C=>l.value=C),images:f.value,"start-position":r.value,closeable:"",onChange:c.onChange,onClosed:k},null,8,["show","images","start-position","onChange"])]}),_:1})}}},To=U(vo,[["__scopeId","data-v-a7ed7425"]]);export{To as default};