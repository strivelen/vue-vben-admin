import{aw as o,a as r,cV as l,b as p,f as m,ay as d,o as c,h as u,i as f,t as g,n as b,az as v,q as _}from"./index.f9f900e6.js";import{b as y}from"./index.fa17c7b6.js";import"./index.c3e6856b.js";import"./index.3f8ad1db.js";import"./ArrowLeftOutlined.150d932e.js";import"./index.d439524b.js";import"./index.68f451a2.js";import"./FullscreenOutlined.274e2222.js";import"./index.d0aa6421.js";import"./useWindowSizeFn.43384c2b.js";import"./useContentViewHeight.d28faa17.js";import"./uniqBy.9390c093.js";import"./_baseIteratee.b63253c3.js";import"./get.1dfcc3a3.js";import"./index.1e316b42.js";import"./useRefs.ba109595.js";import"./PlusOutlined.5d15fc24.js";import"./RedoOutlined.89f59b13.js";import"./index.80825418.js";import"./lock.24f7f3b3.js";const C=r({name:"SelectItem",components:{Select:l},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item"),a=m(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function n(s){e.event&&y(e.event,s)}return{prefixCls:t,handleChange:n,getBindValue:a}}});function S(e,t,a,n,s,h){const i=d("Select");return c(),u("div",{class:_(e.prefixCls)},[f("span",null,g(e.title),1),b(i,v(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}var L=o(C,[["render",S],["__scopeId","data-v-6707e46b"]]);export{L as default};
