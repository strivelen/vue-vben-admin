var j=Object.defineProperty,D=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var _=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))O.call(t,n)&&_(e,n,t[n]);if(g)for(var n of g(t))S.call(t,n)&&_(e,n,t[n]);return e},w=(e,t)=>D(e,N(t));import{a as z,v as C,f as P,N as A,al as B,b$ as E,k as h,n as r,b7 as b,F,cB as H,b6 as R,f3 as V,f4 as W,at as T}from"./index.f9f900e6.js";import{D as U}from"./index.d439524b.js";function X(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!H(e)}const v="context-menu",Y={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default(){return{x:0,y:0}}},items:{type:Array,default(){return[]}}},I=e=>{const{item:t}=e;return r("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&r(R,{class:"mr-2",icon:t.icon},null),r("span",null,[t.label])])};var q=z({name:"ContextMenu",props:Y,setup(e){const t=C(null),n=C(!1),a=P(()=>{const{axis:i,items:o,styles:l,width:s}=e,{x:u,y:d}=i||{x:0,y:0},x=(o||[]).length*40,f=s,y=document.body,L=y.clientWidth<u+f?u-f:u,$=y.clientHeight<d+x?d-x:d;return w(k({},l),{position:"absolute",width:`${s}px`,left:`${L+1}px`,top:`${$+1}px`,zIndex:9999})});A(()=>{B(()=>n.value=!0)}),E(()=>{const i=h(t);i&&document.body.removeChild(i)});function p(i,o){const{handler:l,disabled:s}=i;s||(n.value=!1,o==null||o.stopPropagation(),o==null||o.preventDefault(),l==null||l())}function c(i){return i.filter(l=>!l.hidden).map(l=>{const{disabled:s,label:u,children:d,divider:x=!1}=l,f={item:l,handler:p,showIcon:e.showIcon};return!d||d.length===0?r(F,null,[r(b.Item,{disabled:s,class:`${v}__item`,key:u},{default:()=>[r(I,f,null)]}),x?r(U,{key:`d-${u}`},null):null]):h(n)?r(b.SubMenu,{key:u,disabled:s,popupClassName:`${v}__popup`},{title:()=>r(I,f,null),default:()=>c(d)}):null})}return()=>{let i;if(!h(n))return null;const{items:o}=e;return r("div",{class:v},[r(b,{inlineIndent:12,mode:"vertical",ref:t,style:h(a)},X(i=c(o))?i:{default:()=>[i]})])}}});const m={domList:[],resolve:()=>{}},G=function(e){const{event:t}=e||{};if(t&&(t==null||t.preventDefault()),!!V)return new Promise(n=>{const a=document.body,p=document.createElement("div"),c={};e.styles&&(c.styles=e.styles),e.items&&(c.items=e.items),e.event&&(c.customEvent=t,c.axis={x:t.clientX,y:t.clientY});const i=r(q,c);W(i,p);const o=function(){m.resolve("")};m.domList.push(p);const l=function(){m.domList.forEach(s=>{try{s&&a.removeChild(s)}catch(u){}}),a.removeEventListener("click",o),a.removeEventListener("scroll",o)};m.resolve=function(s){l(),n(s)},l(),a.appendChild(p),a.addEventListener("click",o),a.addEventListener("scroll",o)})},M=function(){m&&(m.resolve(""),m.domList=[])};function Z(e=!0){return T()&&e&&E(()=>{M()}),[G,M]}export{Z as u};
