import{B as l}from"./TableImg.8fabf6b1.js";import{l as s}from"./BasicForm.228ab876.js";import{u as d}from"./useTable.2bde7989.js";import{d as c}from"./table.dca3737a.js";import{aw as F,a as b,ay as n,o as m,h as f,n as h,z as B,j as A,l as C}from"./index.f9f900e6.js";import"./index.8f7b730b.js";import"./Checkbox.5927d72c.js";import"./index.51a53b0a.js";import"./index.28dff6c0.js";import"./eagerComputed.2af19872.js";import"./useForm.e7c99840.js";import"./index.0d9bd947.js";import"./index.2efdfe86.js";import"./index.72ec446a.js";import"./useSize.3b26681d.js";import"./useWindowSizeFn.43384c2b.js";import"./useContentViewHeight.d28faa17.js";import"./ArrowLeftOutlined.150d932e.js";import"./index.67770ccb.js";import"./transButton.f68b2bf4.js";import"./index.9e08c71d.js";import"./index.48594fa7.js";import"./index.d2d5cc10.js";import"./uuid.2b29000c.js";import"./index.7bc1ac87.js";import"./_baseIteratee.b63253c3.js";import"./get.1dfcc3a3.js";import"./DeleteOutlined.feb9eab5.js";import"./index.ab67d296.js";import"./useRefs.ba109595.js";import"./Form.8cc90ed0.js";import"./Col.17b8a245.js";import"./useFlexGapSupport.1066b3b8.js";import"./index.c84fb1ae.js";import"./FullscreenOutlined.274e2222.js";import"./index.d439524b.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.89f59b13.js";import"./index.e4c4815e.js";import"./fromPairs.84aabb58.js";import"./scrollTo.8b0ad200.js";import"./index.2e04b93b.js";/* empty css              *//* empty css              */import"./index.dd5ee25b.js";import"./index.23ec2fbf.js";import"./index.099c49a9.js";import"./download.3185cb3d.js";import"./base64Conver.08b9f4ec.js";import"./index.2404db05.js";import"./index.61fc494c.js";import"./uniqBy.9390c093.js";const T=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"\u59D3\u540D",dataIndex:"name",width:260},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],_=b({components:{BasicTable:l,TableAction:s},setup(){const[t]=d({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:c,columns:T,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function i(o){}function e(o){}return{registerTable:t,handleDelete:i,handleOpen:e}}}),w={class:"p-4"};function x(t,i,e,o,D,I){const p=n("TableAction"),a=n("BasicTable");return m(),f("div",w,[h(a,{onRegister:t.registerTable},{bodyCell:B(({column:u,record:r})=>[u.key==="action"?(m(),A(p,{key:0,actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,r)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,r)}}]},null,8,["actions","dropDownActions"])):C("",!0)]),_:1},8,["onRegister"])])}var Dt=F(_,[["render",x]]);export{Dt as default};
