import{B as g,T as _}from"./TableImg.8fabf6b1.js";import"./BasicForm.228ab876.js";import{u as E}from"./useTable.2bde7989.js";import{aw as T,a as y,ay as r,o as t,h as l,n as k,z as a,F as A,B as m,t as p,j as i,l as B}from"./index.f9f900e6.js";import{T as C}from"./index.d2d5cc10.js";import{A as f}from"./index.72ec446a.js";import{d as I}from"./table.dca3737a.js";import"./index.8f7b730b.js";import"./Checkbox.5927d72c.js";import"./index.51a53b0a.js";import"./index.28dff6c0.js";import"./eagerComputed.2af19872.js";import"./useForm.e7c99840.js";import"./index.0d9bd947.js";import"./index.2efdfe86.js";import"./useWindowSizeFn.43384c2b.js";import"./useContentViewHeight.d28faa17.js";import"./ArrowLeftOutlined.150d932e.js";import"./index.67770ccb.js";import"./useSize.3b26681d.js";import"./transButton.f68b2bf4.js";import"./index.9e08c71d.js";import"./index.48594fa7.js";import"./uuid.2b29000c.js";import"./index.7bc1ac87.js";import"./_baseIteratee.b63253c3.js";import"./get.1dfcc3a3.js";import"./DeleteOutlined.feb9eab5.js";import"./index.ab67d296.js";import"./useRefs.ba109595.js";import"./Form.8cc90ed0.js";import"./Col.17b8a245.js";import"./useFlexGapSupport.1066b3b8.js";import"./index.c84fb1ae.js";import"./FullscreenOutlined.274e2222.js";import"./index.d439524b.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.89f59b13.js";import"./index.e4c4815e.js";import"./fromPairs.84aabb58.js";import"./scrollTo.8b0ad200.js";import"./index.2e04b93b.js";/* empty css              *//* empty css              */import"./index.dd5ee25b.js";import"./index.23ec2fbf.js";import"./index.099c49a9.js";import"./download.3185cb3d.js";import"./base64Conver.08b9f4ec.js";import"./index.2404db05.js";import"./index.61fc494c.js";import"./uniqBy.9390c093.js";const b=[{title:"ID",dataIndex:"id"},{title:"\u5934\u50CF",dataIndex:"avatar",width:100},{title:"\u5206\u7C7B",dataIndex:"category",width:80,align:"center",defaultHidden:!0},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u56FE\u7247\u5217\u88681",dataIndex:"imgArr",helpMessage:["\u8FD9\u662F\u7B80\u5355\u6A21\u5F0F\u7684\u56FE\u7247\u5217\u8868","\u53EA\u4F1A\u663E\u793A\u4E00\u5F20\u5728\u8868\u683C\u4E2D","\u4F46\u70B9\u51FB\u53EF\u9884\u89C8\u591A\u5F20\u56FE\u7247"],width:140},{title:"\u7167\u7247\u5217\u88682",dataIndex:"imgs",width:160},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no"},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime"}],x=y({components:{BasicTable:g,TableImg:_,Tag:C,Avatar:f},setup(){const[u]=E({title:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",titleHelpMessage:"\u8868\u683C\u4E2D\u6240\u6709\u5934\u50CF\u3001\u56FE\u7247\u5747\u4E3Amock\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u6F14\u793A\u56FE\u7247\u5360\u4F4D",api:I,columns:b,bordered:!0,showTableSetting:!0});return{registerTable:u}}}),h={class:"p-4"};function D(u,v,w,L,z,$){const s=r("Tag"),c=r("Avatar"),n=r("TableImg"),F=r("BasicTable");return t(),l("div",h,[k(F,{onRegister:u.registerTable},{bodyCell:a(({column:e,record:o,text:d})=>[e.key==="id"?(t(),l(A,{key:0},[m(" ID: "+p(o.id),1)],64)):e.key==="no"?(t(),i(s,{key:1,color:"green"},{default:a(()=>[m(p(o.no),1)]),_:2},1024)):e.key==="avatar"?(t(),i(c,{key:2,size:60,src:o.avatar},null,8,["src"])):e.key==="imgArr"?(t(),i(n,{key:3,size:60,simpleShow:!0,imgList:d},null,8,["imgList"])):e.key==="imgs"?(t(),i(n,{key:4,size:60,imgList:d},null,8,["imgList"])):e.key==="category"?(t(),i(s,{key:5,color:"green"},{default:a(()=>[m(p(o.no),1)]),_:2},1024)):B("",!0)]),_:1},8,["onRegister"])])}var zt=T(x,[["render",D]]);export{zt as default};
