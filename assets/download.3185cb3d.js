import{aN as s}from"./index.f9f900e6.js";import{u as c,d as l}from"./base64Conver.08b9f4ec.js";function m(e,o,a,t){c(e).then(d=>{f(d,o,a,t)})}function f(e,o,a,t){const d=l(e);u(d,o,a,t)}function u(e,o,a,t){const d=typeof t!="undefined"?[t,e]:[e],i=new Blob(d,{type:a||"application/octet-stream"}),r=window.URL.createObjectURL(i),n=document.createElement("a");n.style.display="none",n.href=r,n.setAttribute("download",o),typeof n.download=="undefined"&&n.setAttribute("target","_blank"),document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(r)}function p({url:e,target:o="_blank",fileName:a}){const t=window.navigator.userAgent.toLowerCase().indexOf("chrome")>-1,d=window.navigator.userAgent.toLowerCase().indexOf("safari")>-1;if(/(iP)/g.test(window.navigator.userAgent))return console.error("Your browser does not support download!"),!1;if(t||d){const i=document.createElement("a");if(i.href=e,i.target=o,i.download!==void 0&&(i.download=a||e.substring(e.lastIndexOf("/")+1,e.length)),document.createEvent){const r=document.createEvent("MouseEvents");return r.initEvent("click",!0,!0),i.dispatchEvent(r),!0}}return e.indexOf("?")===-1&&(e+="?download"),s(e,{target:o}),!0}export{u as a,f as b,m as c,p as d};
