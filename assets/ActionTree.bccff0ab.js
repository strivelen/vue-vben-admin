import{_ as v}from"./index.f534f27f.js";import{t as N}from"./data.ec134722.js";import{aw as S,a as A,v as F,ay as c,o as K,j as g,z as u,i as p,n as o,B as l,E as $,k as G}from"./index.f9f900e6.js";import{P as T}from"./index.0d9bd947.js";import"./fromPairs.84aabb58.js";import"./index.28dff6c0.js";import"./eagerComputed.2af19872.js";import"./useContextMenu.82c3ddb0.js";import"./index.d439524b.js";import"./get.1dfcc3a3.js";import"./index.2efdfe86.js";import"./index.72ec446a.js";import"./useSize.3b26681d.js";import"./useWindowSizeFn.43384c2b.js";import"./useContentViewHeight.d28faa17.js";import"./ArrowLeftOutlined.150d932e.js";import"./index.67770ccb.js";import"./transButton.f68b2bf4.js";const b=A({components:{BasicTree:v,PageWrapper:T},setup(){const n=F(null),{createMessage:e}=$();function a(){const t=G(n);if(!t)throw new Error("tree is null!");return t}function f(t){a().filterByLevel(t)}function m(){a().setCheckedKeys(["0-0"])}function k(){const t=a().getCheckedKeys();e.success(JSON.stringify(t))}function s(){a().setSelectedKeys(["0-0"])}function i(){const t=a().getSelectedKeys();e.success(JSON.stringify(t))}function r(){const t=a().getSelectedKeys(),B=a().getSelectedNode(t[0]);e.success(B!==null?JSON.stringify(B):null)}function d(){a().setExpandedKeys(["0-0"])}function C(){const t=a().getExpandedKeys();e.success(JSON.stringify(t))}function y(t){a().checkAll(t)}function _(t){a().expandAll(t)}function E(t=null){a().insertNodeByKey({parentKey:t,node:{title:"\u65B0\u589E\u8282\u70B9",key:"2-2-2"},push:"push"})}function h(t){a().deleteNodeByKey(t)}function D(t){a().updateNodeByKey(t,{title:"parent2-new"})}return{treeData:N,treeRef:n,handleLevel:f,handleSetCheckData:m,handleGetCheckData:k,handleSetSelectData:s,handleGetSelectData:i,handleSetExpandData:d,handleGetExpandData:C,handleGetSelectNode:r,appendNodeByKey:E,deleteNodeByKey:h,updateNodeByKey:D,checkAll:y,expandAll:_}}}),w={class:"mb-4"},J=l(" \u5C55\u5F00\u5168\u90E8 "),L=l(" \u6298\u53E0\u5168\u90E8 "),O=l(" \u5168\u9009 "),P=l(" \u5168\u4E0D\u9009 "),V=l(" \u663E\u793A\u5230\u7B2C2\u7EA7 "),W=l(" \u663E\u793A\u5230\u7B2C1\u7EA7 "),M={class:"mb-4"},R=l(" \u8BBE\u7F6E\u52FE\u9009\u6570\u636E "),j=l(" \u83B7\u53D6\u52FE\u9009\u6570\u636E "),z=l(" \u8BBE\u7F6E\u9009\u4E2D\u6570\u636E "),q=l(" \u83B7\u53D6\u9009\u4E2D\u6570\u636E "),H=l(" \u83B7\u53D6\u9009\u4E2D\u8282\u70B9 "),I=l(" \u8BBE\u7F6E\u5C55\u5F00\u6570\u636E "),Q=l(" \u83B7\u53D6\u5C55\u5F00\u6570\u636E "),U={class:"mb-4"},X=l(" \u6DFB\u52A0\u6839\u8282\u70B9 "),Y=l(" \u6DFB\u52A0\u5728parent3\u5185\u6DFB\u52A0\u8282\u70B9 "),Z=l(" \u5220\u9664parent3\u8282\u70B9 "),x=l(" \u66F4\u65B0parent2\u8282\u70B9 ");function ee(n,e,a,f,m,k){const s=c("a-button"),i=c("BasicTree"),r=c("PageWrapper");return K(),g(r,{title:"Tree\u51FD\u6570\u64CD\u4F5C\u793A\u4F8B",contentBackground:"",contentClass:"p-4"},{default:u(()=>[p("div",w,[o(s,{onClick:e[0]||(e[0]=d=>n.expandAll(!0)),class:"mr-2"},{default:u(()=>[J]),_:1}),o(s,{onClick:e[1]||(e[1]=d=>n.expandAll(!1)),class:"mr-2"},{default:u(()=>[L]),_:1}),o(s,{onClick:e[2]||(e[2]=d=>n.checkAll(!0)),class:"mr-2"},{default:u(()=>[O]),_:1}),o(s,{onClick:e[3]||(e[3]=d=>n.checkAll(!1)),class:"mr-2"},{default:u(()=>[P]),_:1}),o(s,{onClick:e[4]||(e[4]=d=>n.handleLevel(2)),class:"mr-2"},{default:u(()=>[V]),_:1}),o(s,{onClick:e[5]||(e[5]=d=>n.handleLevel(1)),class:"mr-2"},{default:u(()=>[W]),_:1})]),p("div",M,[o(s,{onClick:n.handleSetCheckData,class:"mr-2"},{default:u(()=>[R]),_:1},8,["onClick"]),o(s,{onClick:n.handleGetCheckData,class:"mr-2"},{default:u(()=>[j]),_:1},8,["onClick"]),o(s,{onClick:n.handleSetSelectData,class:"mr-2"},{default:u(()=>[z]),_:1},8,["onClick"]),o(s,{onClick:n.handleGetSelectData,class:"mr-2"},{default:u(()=>[q]),_:1},8,["onClick"]),o(s,{onClick:n.handleGetSelectNode,class:"mr-2"},{default:u(()=>[H]),_:1},8,["onClick"]),o(s,{onClick:n.handleSetExpandData,class:"mr-2"},{default:u(()=>[I]),_:1},8,["onClick"]),o(s,{onClick:n.handleGetExpandData,class:"mr-2"},{default:u(()=>[Q]),_:1},8,["onClick"])]),p("div",U,[o(s,{onClick:e[6]||(e[6]=d=>n.appendNodeByKey(null)),class:"mr-2"},{default:u(()=>[X]),_:1}),o(s,{onClick:e[7]||(e[7]=d=>n.appendNodeByKey("2-2")),class:"mr-2"},{default:u(()=>[Y]),_:1}),o(s,{onClick:e[8]||(e[8]=d=>n.deleteNodeByKey("2-2")),class:"mr-2"},{default:u(()=>[Z]),_:1}),o(s,{onClick:e[9]||(e[9]=d=>n.updateNodeByKey("1-1")),class:"mr-2"},{default:u(()=>[x]),_:1})]),o(i,{treeData:n.treeData,title:"\u51FD\u6570\u64CD\u4F5C",ref:"treeRef",checkable:!0},null,8,["treeData"])]),_:1})}var _e=S(b,[["render",ee]]);export{_e as default};
