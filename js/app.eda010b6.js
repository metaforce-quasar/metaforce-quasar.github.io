(()=>{"use strict";var e={4647:(e,r,t)=>{t(8964),t(702);var o=t(1957),n=t(4196),a=t(499),i=t(9835);function l(e,r,t,o,n,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const c=(0,i.aZ)({name:"App"});var s=t(1639);const u=(0,s.Z)(c,[["render",l]]),p=u;var d=t(3340),f=t(8339);const h=[{path:"/",component:()=>Promise.all([t.e(736),t.e(387)]).then(t.bind(t,6387)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(523)]).then(t.bind(t,4523))},{path:"privacy",component:()=>Promise.all([t.e(736),t.e(918)]).then(t.bind(t,7918))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(862)]).then(t.bind(t,1862))}],v=h,b=(0,d.BC)((function(){const e=f.r5,r=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("")});return r}));async function m(e,r){const t=e(p);t.use(n.Z,r);const o=(0,a.Xl)("function"===typeof b?await b({}):b);return{app:t,router:o}}const g={config:{}},y="";async function w({app:e,router:r},t){let o=!1;const n=e=>{try{return r.resolve(e).href}catch(t){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const r=n(e);null!==r&&(window.location.href=r,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let c=0;!1===o&&c<t.length;c++)try{await t[c]({app:e,router:r,ssrContext:null,redirect:a,urlPath:i,publicPath:y})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(r),e.mount("#q-app"))}m(o.ri,g).then((e=>Promise.all([Promise.resolve().then(t.bind(t,1569))]).then((r=>{const t=r.map((e=>e.default)).filter((e=>"function"===typeof e));w(e,t)}))))},1569:(e,r,t)=>{t.r(r),t.d(r,{api:()=>i,default:()=>l});var o=t(3340),n=t(9981),a=t.n(n);const i=a().create({baseURL:"https://api.example.com"}),l=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(r,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],l=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](o[c])))?o.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var s=n();void 0!==s&&(r=s)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{387:"dd87fa97",523:"e27f37f9",862:"19530036",918:"d13eb994"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"e657c03f"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="metaforcehome:";t.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var p=s[u];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==r+a){l=p;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",r+a),l.src=o),e[o]=[n];var d=(r,t)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(t))),r)return r(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),c&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{var e={143:0};t.f.j=(r,o)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));o.push(n[2]=a);var i=t.p+t.u(r),l=new Error,c=o=>{if(t.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};t.l(i,c,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,o)=>{var n,a,[i,l,c]=o,s=0;if(i.some((r=>0!==e[r]))){for(n in l)t.o(l,n)&&(t.m[n]=l[n]);if(c)var u=c(t)}for(r&&r(o);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},o=globalThis["webpackChunkmetaforcehome"]=globalThis["webpackChunkmetaforcehome"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(4647)));o=t.O(o)})();