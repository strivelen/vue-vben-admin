import{m as c,B as l}from"./BasicForm.228ab876.js";import{aw as d,a as g,ay as r,o as f,j as B,z as F,n as t,E as _}from"./index.f9f900e6.js";import{u as A}from"./useForm.e7c99840.js";import{P as C}from"./index.0d9bd947.js";import{A as a}from"./index.099c49a9.js";import{u as m}from"./upload.5ece2b40.js";/* empty css              *//* empty css              */import"./index.d439524b.js";import"./index.8f7b730b.js";import"./Checkbox.5927d72c.js";import"./index.51a53b0a.js";import"./index.d2d5cc10.js";import"./index.9e08c71d.js";import"./index.48594fa7.js";import"./index.dd5ee25b.js";import"./get.1dfcc3a3.js";import"./index.28dff6c0.js";import"./eagerComputed.2af19872.js";import"./index.7bc1ac87.js";import"./_baseIteratee.b63253c3.js";import"./DeleteOutlined.feb9eab5.js";import"./index.ab67d296.js";import"./useRefs.ba109595.js";import"./Form.8cc90ed0.js";import"./Col.17b8a245.js";import"./useFlexGapSupport.1066b3b8.js";import"./useSize.3b26681d.js";import"./transButton.f68b2bf4.js";import"./index.23ec2fbf.js";import"./index.c84fb1ae.js";import"./useWindowSizeFn.43384c2b.js";import"./FullscreenOutlined.274e2222.js";import"./index.e4c4815e.js";import"./uuid.2b29000c.js";import"./download.3185cb3d.js";import"./base64Conver.08b9f4ec.js";import"./index.2404db05.js";import"./index.61fc494c.js";import"./uniqBy.9390c093.js";import"./index.2efdfe86.js";import"./index.72ec446a.js";import"./useContentViewHeight.d28faa17.js";import"./ArrowLeftOutlined.150d932e.js";import"./index.67770ccb.js";const h=[{field:"field1",component:"Upload",label:"\u5B57\u6BB51",colProps:{span:8},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"}],componentProps:{api:m}}],E=g({components:{BasicUpload:c,BasicForm:l,PageWrapper:C,[a.name]:a},setup(){const{createMessage:o}=_(),[e]=A({labelWidth:120,schemas:h,actionColOptions:{span:16}});return{handleChange:p=>{o.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(p)}`)},uploadApi:m,register:e}}});function P(o,e,p,$,x,y){const i=r("a-alert"),s=r("BasicUpload"),n=r("BasicForm"),u=r("PageWrapper");return f(),B(u,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:F(()=>[t(i,{message:"\u57FA\u7840\u793A\u4F8B"}),t(s,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),t(i,{message:"\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C"}),t(n,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}var Ao=d(E,[["render",P]]);export{Ao as default};
