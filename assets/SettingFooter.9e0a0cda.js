import{aw as b,a as k,bw as h,b as v,bM as R,s as M,bG as O,ay as c,o as B,h as T,n as o,z as i,B as d,t as u,q as w,c as x,fo as A,k as m,bZ as C,fD as $,fE as D,E}from"./index.f9f900e6.js";import{C as F}from"./CopyOutlined.c2bfebf8.js";import{R as N}from"./RedoOutlined.89f59b13.js";const P=k({name:"SettingFooter",components:{CopyOutlined:F,RedoOutlined:N},setup(){const e=h(),{prefixCls:p}=v("setting-footer"),{t:s}=x(),{createSuccessModal:f,createMessage:r}=E(),g=R(),l=M(),t=O();function a(){const{isSuccessRef:n}=A(JSON.stringify(m(t.getProjectConfig),null,2));m(n)&&f({title:s("layout.setting.operatingTitle"),content:s("layout.setting.operatingContent")})}function y(){try{t.setProjectConfig(C);const{colorWeak:n,grayMode:_}=C;$(n),D(_),r.success(s("layout.setting.resetSuccess"))}catch(n){r.error(n)}}function S(){localStorage.clear(),t.resetAllState(),e.resetState(),g.resetState(),l.resetState(),location.reload()}return{prefixCls:p,t:s,handleCopy:a,handleResetSetting:y,handleClearAndRedo:S}}});function j(e,p,s,f,r,g){const l=c("CopyOutlined"),t=c("a-button"),a=c("RedoOutlined");return B(),T("div",{class:w(e.prefixCls)},[o(t,{type:"primary",block:"",onClick:e.handleCopy},{default:i(()=>[o(l,{class:"mr-2"}),d(" "+u(e.t("layout.setting.copyBtn")),1)]),_:1},8,["onClick"]),o(t,{color:"warning",block:"",onClick:e.handleResetSetting,class:"my-3"},{default:i(()=>[o(a,{class:"mr-2"}),d(" "+u(e.t("common.resetText")),1)]),_:1},8,["onClick"]),o(t,{color:"error",block:"",onClick:e.handleClearAndRedo},{default:i(()=>[o(a,{class:"mr-2"}),d(" "+u(e.t("layout.setting.clearBtn")),1)]),_:1},8,["onClick"])],2)}var V=b(P,[["render",j],["__scopeId","data-v-2d4de409"]]);export{V as default};