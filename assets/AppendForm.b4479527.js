var B=(e,n,r)=>new Promise((s,i)=>{var t=o=>{try{p(r.next(o))}catch(m){i(m)}},a=o=>{try{p(r.throw(o))}catch(m){i(m)}},p=o=>o.done?s(o.value):Promise.resolve(o.value).then(t,a);p((r=r.apply(e,n)).next())});import{B as h}from"./BasicForm.228ab876.js";import{u as $}from"./useForm.e7c99840.js";import{aw as P,a as g,cD as k,I as _,dA as F,v as I,ay as u,o as d,j as f,z as l,n as b,l as C,B as v}from"./index.f9f900e6.js";import{P as y}from"./index.0d9bd947.js";/* empty css              *//* empty css              */import"./index.d439524b.js";import"./index.8f7b730b.js";import"./Checkbox.5927d72c.js";import"./index.51a53b0a.js";import"./index.d2d5cc10.js";import"./index.9e08c71d.js";import"./index.48594fa7.js";import"./index.dd5ee25b.js";import"./get.1dfcc3a3.js";import"./index.28dff6c0.js";import"./eagerComputed.2af19872.js";import"./index.7bc1ac87.js";import"./_baseIteratee.b63253c3.js";import"./DeleteOutlined.feb9eab5.js";import"./index.ab67d296.js";import"./useRefs.ba109595.js";import"./Form.8cc90ed0.js";import"./Col.17b8a245.js";import"./useFlexGapSupport.1066b3b8.js";import"./useSize.3b26681d.js";import"./transButton.f68b2bf4.js";import"./index.23ec2fbf.js";import"./index.c84fb1ae.js";import"./useWindowSizeFn.43384c2b.js";import"./FullscreenOutlined.274e2222.js";import"./index.099c49a9.js";import"./index.e4c4815e.js";import"./uuid.2b29000c.js";import"./download.3185cb3d.js";import"./base64Conver.08b9f4ec.js";import"./index.2404db05.js";import"./index.61fc494c.js";import"./uniqBy.9390c093.js";import"./index.2efdfe86.js";import"./index.72ec446a.js";import"./useContentViewHeight.d28faa17.js";import"./ArrowLeftOutlined.150d932e.js";import"./index.67770ccb.js";const S=g({components:{BasicForm:h,CollapseContainer:k,PageWrapper:y,[_.name]:_,Button:F},setup(){const[e,{appendSchemaByField:n,removeSchemaByField:r,validate:s}]=$({schemas:[{field:"field0a",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});function i(){return B(this,null,function*(){try{const o=yield s()}catch(o){}})}const t=I(1);function a(){n({field:`field${t.value}a`,component:"Input",label:"\u5B57\u6BB5"+t.value,colProps:{span:8},required:!0},""),n({field:`field${t.value}b`,component:"Input",label:"\u5B57\u6BB5"+t.value,colProps:{span:8},required:!0},""),n({field:`${t.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),t.value++}function p(o){r([`field${o}a`,`field${o}b`,`${o}`]),t.value--}return{register:e,handleSubmit:i,add:a,del:p}}}),q=v("+"),N=v("-");function W(e,n,r,s,i,t){const a=u("Button"),p=u("BasicForm"),o=u("CollapseContainer"),m=u("PageWrapper");return d(),f(m,{title:"\u8868\u5355\u589E\u5220\u793A\u4F8B"},{default:l(()=>[b(o,{title:"\u8868\u5355\u589E\u5220"},{default:l(()=>[b(p,{onRegister:e.register,onSubmit:e.handleSubmit},{add:l(({field:c})=>[Number(c)===0?(d(),f(a,{key:0,onClick:e.add},{default:l(()=>[q]),_:1},8,["onClick"])):C("",!0),c>0?(d(),f(a,{key:1,onClick:w=>e.del(c)},{default:l(()=>[N]),_:2},1032,["onClick"])):C("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Fo=P(S,[["render",W]]);export{Fo as default};