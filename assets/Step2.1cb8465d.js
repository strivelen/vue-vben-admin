var f=(p,r,i)=>new Promise((c,s)=>{var _=o=>{try{t(i.next(o))}catch(m){s(m)}},n=o=>{try{t(i.throw(o))}catch(m){s(m)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(_,n);t((i=i.apply(p,r)).next())});import{B as v}from"./BasicForm.228ab876.js";import{u as h}from"./useForm.e7c99840.js";import{step2Schemas as E}from"./data.1866c55a.js";import{a as b,aw as x,ay as u,o as g,h as C,n as e,z as a,B as l}from"./index.f9f900e6.js";import{A as B}from"./index.099c49a9.js";import{D}from"./index.d439524b.js";import{D as d}from"./index.cdd73df1.js";/* empty css              *//* empty css              */import"./index.8f7b730b.js";import"./Checkbox.5927d72c.js";import"./index.51a53b0a.js";import"./index.d2d5cc10.js";import"./index.9e08c71d.js";import"./index.48594fa7.js";import"./index.dd5ee25b.js";import"./get.1dfcc3a3.js";import"./index.28dff6c0.js";import"./eagerComputed.2af19872.js";import"./index.7bc1ac87.js";import"./_baseIteratee.b63253c3.js";import"./DeleteOutlined.feb9eab5.js";import"./index.ab67d296.js";import"./useRefs.ba109595.js";import"./Form.8cc90ed0.js";import"./Col.17b8a245.js";import"./useFlexGapSupport.1066b3b8.js";import"./useSize.3b26681d.js";import"./transButton.f68b2bf4.js";import"./index.23ec2fbf.js";import"./index.c84fb1ae.js";import"./useWindowSizeFn.43384c2b.js";import"./FullscreenOutlined.274e2222.js";import"./index.e4c4815e.js";import"./uuid.2b29000c.js";import"./download.3185cb3d.js";import"./base64Conver.08b9f4ec.js";import"./index.2404db05.js";import"./index.61fc494c.js";import"./uniqBy.9390c093.js";const y=b({components:{BasicForm:v,[B.name]:B,[D.name]:D,[d.name]:d,[d.Item.name]:d.Item},emits:["next","prev"],setup(p,{emit:r}){const[i,{validate:c,setProps:s}]=h({labelWidth:80,schemas:E,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:_,submitFunc:n});function _(){return f(this,null,function*(){r("prev")})}function n(){return f(this,null,function*(){try{const t=yield c();s({submitButtonOptions:{loading:!0}}),setTimeout(()=>{s({submitButtonOptions:{loading:!1}}),r("next",t)},1500)}catch(t){}})}return{register:i}}}),A={class:"step2"},w=l(" ant-design@alipay.com "),O=l(" test@example.com "),S=l(" Vben "),$=l(" 500\u5143 ");function I(p,r,i,c,s,_){const n=u("a-alert"),t=u("a-descriptions-item"),o=u("a-descriptions"),m=u("a-divider"),F=u("BasicForm");return g(),C("div",A,[e(n,{message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002","show-icon":""}),e(o,{column:1,class:"mt-5"},{default:a(()=>[e(t,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:a(()=>[w]),_:1}),e(t,{label:"\u6536\u6B3E\u8D26\u6237"},{default:a(()=>[O]),_:1}),e(t,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:a(()=>[S]),_:1}),e(t,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:a(()=>[$]),_:1})]),_:1}),e(m),e(F,{onRegister:p.register},null,8,["onRegister"])])}var ht=x(y,[["render",I],["__scopeId","data-v-01481d2f"]]);export{ht as default};
