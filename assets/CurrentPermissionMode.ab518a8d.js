import{a as m,bG as c,f as d,du as p,fv as _,aw as l,ay as i,o as f,h as F,n as o,z as r,B as s,t as C}from"./index.f9f900e6.js";import{D as M}from"./index.d439524b.js";const A=m({name:"CurrentPermissionMode",components:{Divider:M},setup(){const e=c(),t=d(()=>e.getProjectConfig.permissionMode),{togglePermissionMode:n}=p();return{permissionMode:t,PermissionModeEnum:_,togglePermissionMode:n}}}),D={class:"mt-2"},P=s(" \u5F53\u524D\u6743\u9650\u6A21\u5F0F\uFF1A "),g=s(" \u5207\u6362\u6743\u9650\u6A21\u5F0F ");function v(e,t,n,h,k,y){const u=i("a-button"),a=i("Divider");return f(),F("div",D,[P,o(u,{type:"link"},{default:r(()=>[s(C(e.permissionMode===e.PermissionModeEnum.BACK?"\u540E\u53F0\u6743\u9650\u6A21\u5F0F":"\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F"),1)]),_:1}),o(u,{class:"ml-4",onClick:e.togglePermissionMode,type:"primary"},{default:r(()=>[g]),_:1},8,["onClick"]),o(a)])}var $=l(A,[["render",v]]);export{$ as default};
