import{aw as m,a as l,dY as c,b as d,ay as _,o as i,h as r,F as f,aB as u,q as p,bm as k,n as h}from"./index.f9f900e6.js";import{b as v}from"./index.fa17c7b6.js";import"./index.c3e6856b.js";import"./index.3f8ad1db.js";import"./ArrowLeftOutlined.150d932e.js";import"./index.d439524b.js";import"./index.68f451a2.js";import"./FullscreenOutlined.274e2222.js";import"./index.d0aa6421.js";import"./useWindowSizeFn.43384c2b.js";import"./useContentViewHeight.d28faa17.js";import"./uniqBy.9390c093.js";import"./_baseIteratee.b63253c3.js";import"./get.1dfcc3a3.js";import"./index.1e316b42.js";import"./useRefs.ba109595.js";import"./PlusOutlined.5d15fc24.js";import"./RedoOutlined.89f59b13.js";import"./index.80825418.js";import"./lock.24f7f3b3.js";const C=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:n}=d("setting-theme-picker");function o(s){e.event&&v(e.event,s)}return{prefixCls:n,handleClick:o}}}),b=["onClick"];function g(e,n,o,s,y,x){const a=_("CheckOutlined");return i(),r("div",{class:p(e.prefixCls)},[(i(!0),r(f,null,u(e.colorList||[],t=>(i(),r("span",{key:t,onClick:$=>e.handleClick(t),class:p([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:k({background:t})},[h(a)],14,b))),128))],2)}var J=m(C,[["render",g]]);export{J as default};