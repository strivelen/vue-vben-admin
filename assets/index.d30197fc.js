import{aw as _,a as C,cD as v,v as y,fo as F,ay as a,o as B,j as g,z as n,n as s,i as h,k as i,B as w,E as b}from"./index.f9f900e6.js";import{P as k}from"./index.0d9bd947.js";import"./index.2efdfe86.js";import"./index.72ec446a.js";import"./useSize.3b26681d.js";import"./eagerComputed.2af19872.js";import"./useWindowSizeFn.43384c2b.js";import"./useContentViewHeight.d28faa17.js";import"./ArrowLeftOutlined.150d932e.js";import"./index.67770ccb.js";import"./transButton.f68b2bf4.js";const x=C({name:"Copy",components:{CollapseContainer:v,PageWrapper:k},setup(){const e=y(""),{createMessage:o}=b(),{clipboardRef:r,copiedRef:p}=F();function u(){const t=i(e);if(!t){o.warning("\u8BF7\u8F93\u5165\u8981\u62F7\u8D1D\u7684\u5185\u5BB9\uFF01");return}r.value=t,i(p)&&o.warning("copy success\uFF01")}return{handleCopy:u,value:e}}}),D={class:"flex justify-center"},P=w(" Copy ");function $(e,o,r,p,u,t){const l=a("a-input"),c=a("a-button"),d=a("CollapseContainer"),m=a("PageWrapper");return B(),g(m,{title:"\u6587\u672C\u590D\u5236\u793A\u4F8B"},{default:n(()=>[s(d,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:n(()=>[h("div",D,[s(l,{placeholder:"\u8BF7\u8F93\u5165",value:e.value,"onUpdate:value":o[0]||(o[0]=f=>e.value=f)},null,8,["value"]),s(c,{type:"primary",onClick:e.handleCopy},{default:n(()=>[P]),_:1},8,["onClick"])])]),_:1})]),_:1})}var q=_(x,[["render",$]]);export{q as default};
