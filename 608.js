(()=>{var e,t,r,n,o={69314:()=>{},18983:()=>{},34372:(e,t,r)=>{"use strict";var n=r(48801),o=r(52107),a=r(36631),i=r(60576),s=r(38090);const c=(0,a.Z)((async function(e){const t=new i.U(e);return await s.G.create({provider:t})}));onmessage=e=>{const{endpoint:t,stakerAddress:r}=e.data;(async function(e,t){const r=await c(e),a=new Map,i=(await r.query.staking.currentEra()).unwrap();return(await r.query.staking.erasStakers.entries(i)).map((e=>e[1].others)).flat().forEach((e=>{const t=String(e.who),r=new n(String(e.value));a.get(t)?a.set(t,r.add(a.get(t))):a.set(t,r)})),{isInList:!!a.get(t),minNominated:(0,o.N)(...a.values())}})(t,r).then((e=>{postMessage(e)}))}}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={id:e,loaded:!1,exports:{}};return o[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=o,i.x=()=>{var e=i.O(void 0,[593],(()=>i(34372)));return i.O(e)},e=[],i.O=(t,r,n,o)=>{if(!r){var a=1/0;for(f=0;f<e.length;f++){for(var[r,n,o]=e[f],s=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(i.O).every((e=>i.O[e](r[c])))?r.splice(c--,1):(s=!1,o<a&&(a=o));if(s){e.splice(f--,1);var p=n();void 0!==p&&(t=p)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[r,n,o]},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var s=2&n&&e;"object"==typeof s&&!~t.indexOf(s);s=r(s))Object.getOwnPropertyNames(s).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,i.d(o,a),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={608:1};i.f.i=(t,r)=>{e[t]||importScripts(i.p+i.u(t))};var t=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension||[],r=t.push.bind(t);t.push=t=>{var[n,o,a]=t;for(var s in o)i.o(o,s)&&(i.m[s]=o[s]);for(a&&a(i);n.length;)e[n.pop()]=1;r(t)}})(),n=i.x,i.x=()=>i.e(593).then(n),i.x()})();