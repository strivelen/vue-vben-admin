import{u as m}from"./useContextMenu.82c3ddb0.js";import{aw as d,a as C,cD as _,ay as l,o as f,j as b,z as t,n as a,B as c,E as x}from"./index.f9f900e6.js";import{P as h}from"./index.0d9bd947.js";import"./index.d439524b.js";import"./index.2efdfe86.js";import"./index.72ec446a.js";import"./useSize.3b26681d.js";import"./eagerComputed.2af19872.js";import"./useWindowSizeFn.43384c2b.js";import"./useContentViewHeight.d28faa17.js";import"./ArrowLeftOutlined.150d932e.js";import"./index.67770ccb.js";import"./transButton.f68b2bf4.js";const w=C({components:{CollapseContainer:_,PageWrapper:h},setup(){const[e]=m(),{createMessage:n}=x();function s(o){e({event:o,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})}function i(o){e({event:o,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}return{handleContext:s,handleMultipleContext:i}}}),N=c(" Right Click on me "),g=c(" Right Click on me ");function k(e,n,s,i,o,M){const r=l("a-button"),p=l("CollapseContainer"),u=l("PageWrapper");return f(),b(u,{title:"\u53F3\u952E\u83DC\u5355\u793A\u4F8B"},{default:t(()=>[a(p,{title:"Simple"},{default:t(()=>[a(r,{type:"primary",onContextmenu:e.handleContext},{default:t(()=>[N]),_:1},8,["onContextmenu"])]),_:1}),a(p,{title:"Multiple",class:"mt-4"},{default:t(()=>[a(r,{type:"primary",onContextmenu:e.handleMultipleContext},{default:t(()=>[g]),_:1},8,["onContextmenu"])]),_:1})]),_:1})}var A=d(w,[["render",k]]);export{A as default};