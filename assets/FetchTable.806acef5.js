import{B as c}from"./TableImg.8fabf6b1.js";import"./BasicForm.228ab876.js";import{u as l}from"./useTable.2bde7989.js";import{getBasicColumns as d}from"./tableData.0902c609.js";import{P as _}from"./index.0d9bd947.js";import{d as f}from"./table.dca3737a.js";import{aw as g,a as B,ay as e,o as C,j as h,z as t,n as i,B as n}from"./index.f9f900e6.js";import"./index.8f7b730b.js";import"./Checkbox.5927d72c.js";import"./index.51a53b0a.js";import"./index.28dff6c0.js";import"./eagerComputed.2af19872.js";import"./useForm.e7c99840.js";import"./index.9e08c71d.js";import"./index.48594fa7.js";import"./index.d2d5cc10.js";import"./uuid.2b29000c.js";import"./index.7bc1ac87.js";import"./_baseIteratee.b63253c3.js";import"./get.1dfcc3a3.js";import"./DeleteOutlined.feb9eab5.js";import"./index.ab67d296.js";import"./useRefs.ba109595.js";import"./Form.8cc90ed0.js";import"./Col.17b8a245.js";import"./useFlexGapSupport.1066b3b8.js";import"./useSize.3b26681d.js";import"./useWindowSizeFn.43384c2b.js";import"./index.c84fb1ae.js";import"./FullscreenOutlined.274e2222.js";import"./index.d439524b.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.89f59b13.js";import"./index.e4c4815e.js";import"./fromPairs.84aabb58.js";import"./scrollTo.8b0ad200.js";import"./index.2e04b93b.js";/* empty css              *//* empty css              */import"./index.dd5ee25b.js";import"./transButton.f68b2bf4.js";import"./index.23ec2fbf.js";import"./index.099c49a9.js";import"./download.3185cb3d.js";import"./base64Conver.08b9f4ec.js";import"./index.2404db05.js";import"./index.61fc494c.js";import"./uniqBy.9390c093.js";import"./index.2efdfe86.js";import"./index.72ec446a.js";import"./useContentViewHeight.d28faa17.js";import"./ArrowLeftOutlined.150d932e.js";import"./index.67770ccb.js";const b=B({components:{BasicTable:c,PageWrapper:_},setup(){const[o,{reload:r}]=l({title:"\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B",api:f,columns:d(),pagination:{pageSize:10}});function p(){r()}function m(){r({page:1})}return{registerTable:o,handleReloadCurrent:p,handleReload:m}}}),T=n(" \u5237\u65B0\u5F53\u524D\u9875 "),k=n(" \u5237\u65B0\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9875 ");function F(o,r,p,m,R,y){const a=e("a-button"),s=e("BasicTable"),u=e("PageWrapper");return C(),h(u,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:t(()=>[i(s,{onRegister:o.registerTable},{toolbar:t(()=>[i(a,{type:"primary",onClick:o.handleReloadCurrent},{default:t(()=>[T]),_:1},8,["onClick"]),i(a,{type:"primary",onClick:o.handleReload},{default:t(()=>[k]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}var Do=g(b,[["render",F]]);export{Do as default};