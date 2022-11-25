var d=(o,l,r)=>new Promise((m,n)=>{var c=t=>{try{e(r.next(t))}catch(a){n(a)}},u=t=>{try{e(r.throw(t))}catch(a){n(a)}},e=t=>t.done?m(t.value):Promise.resolve(t.value).then(c,u);e((r=r.apply(o,l)).next())});import{B as P}from"./BasicForm.228ab876.js";import{u as b}from"./useForm.e7c99840.js";import A from"./PersonTable.556031ed.js";import{P as F}from"./index.0d9bd947.js";import{aw as g,a as v,v as C,ay as s,o as D,j as h,z as i,n as p,B as q}from"./index.f9f900e6.js";import{C as _}from"./index.22077685.js";import"./index.1e316b42.js";/* empty css              */import"./index.50e42080.js";/* empty css              */import"./index.d439524b.js";import"./index.8f7b730b.js";import"./Checkbox.5927d72c.js";import"./index.51a53b0a.js";import"./index.d2d5cc10.js";import"./index.9e08c71d.js";import"./index.48594fa7.js";import"./index.dd5ee25b.js";import"./get.1dfcc3a3.js";import"./index.28dff6c0.js";import"./eagerComputed.2af19872.js";import"./index.7bc1ac87.js";import"./_baseIteratee.b63253c3.js";import"./DeleteOutlined.feb9eab5.js";import"./index.ab67d296.js";import"./useRefs.ba109595.js";import"./Form.8cc90ed0.js";import"./Col.17b8a245.js";import"./useFlexGapSupport.1066b3b8.js";import"./useSize.3b26681d.js";import"./transButton.f68b2bf4.js";import"./index.23ec2fbf.js";import"./index.c84fb1ae.js";import"./useWindowSizeFn.43384c2b.js";import"./FullscreenOutlined.274e2222.js";import"./index.099c49a9.js";import"./index.e4c4815e.js";import"./uuid.2b29000c.js";import"./download.3185cb3d.js";import"./base64Conver.08b9f4ec.js";import"./index.2404db05.js";import"./index.61fc494c.js";import"./uniqBy.9390c093.js";import"./TableImg.8fabf6b1.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.89f59b13.js";import"./fromPairs.84aabb58.js";import"./scrollTo.8b0ad200.js";import"./index.2e04b93b.js";import"./useTable.2bde7989.js";import"./index.2efdfe86.js";import"./index.72ec446a.js";import"./useContentViewHeight.d28faa17.js";import"./ArrowLeftOutlined.150d932e.js";import"./index.67770ccb.js";import"./index.80825418.js";import"./PlusOutlined.5d15fc24.js";import"./Grid.4c985c90.js";const f=[{label:"\u4ED8\u6653\u6653",value:"1"},{label:"\u5468\u6BDB\u6BDB",value:"2"}],B=[{label:"\u79C1\u5BC6",value:"1"},{label:"\u516C\u5F00",value:"2"}],k=[{field:"f1",component:"Input",label:"\u4ED3\u5E93\u540D",required:!0},{field:"f2",component:"Input",label:"\u4ED3\u5E93\u57DF\u540D",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"\u4ED3\u5E93\u7BA1\u7406\u5458",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"\u5BA1\u6279\u4EBA",componentProps:{options:f},required:!0},{field:"f5",component:"RangePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"\u4ED3\u5E93\u7C7B\u578B",componentProps:{options:B},required:!0,colProps:{offset:2}}],y=[{field:"t1",component:"Input",label:"\u4EFB\u52A1\u540D",required:!0},{field:"t2",component:"Input",label:"\u4EFB\u52A1\u63CF\u8FF0",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"\u6267\u884C\u4EBA",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"\u8D23\u4EFB\u4EBA",componentProps:{options:f},required:!0},{field:"t5",component:"TimePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"\u4EFB\u52A1\u7C7B\u578B",componentProps:{options:B},required:!0,colProps:{offset:2}}];const T=v({name:"FormHightPage",components:{BasicForm:P,PersonTable:A,PageWrapper:F,[_.name]:_},setup(){const o=C(null),[l,{validate:r}]=b({layout:"vertical",baseColProps:{span:6},schemas:k,showActionButtonGroup:!1}),[m,{validate:n}]=b({layout:"vertical",baseColProps:{span:6},schemas:y,showActionButtonGroup:!1});function c(){return d(this,null,function*(){try{o.value&&o.value.getDataSource();const[u,e]=yield Promise.all([r(),n()])}catch(u){}})}return{register:l,registerTask:m,submitAll:c,tableRef:o}}}),S=q(" \u63D0\u4EA4 ");function R(o,l,r,m,n,c){const u=s("BasicForm"),e=s("a-card"),t=s("PersonTable"),a=s("a-button"),E=s("PageWrapper");return D(),h(E,{class:"high-form",title:"\u9AD8\u7EA7\u8868\u5355",content:" \u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"},{rightFooter:i(()=>[p(a,{type:"primary",onClick:o.submitAll},{default:i(()=>[S]),_:1},8,["onClick"])]),default:i(()=>[p(e,{title:"\u4ED3\u5E93\u7BA1\u7406",bordered:!1},{default:i(()=>[p(u,{onRegister:o.register},null,8,["onRegister"])]),_:1}),p(e,{title:"\u4EFB\u52A1\u7BA1\u7406",bordered:!1,class:"!mt-5"},{default:i(()=>[p(u,{onRegister:o.registerTask},null,8,["onRegister"])]),_:1}),p(e,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1},{default:i(()=>[p(t,{ref:"tableRef"},null,512)]),_:1})]),_:1})}var Go=g(T,[["render",R],["__scopeId","data-v-6b59bc47"]]);export{Go as default};
