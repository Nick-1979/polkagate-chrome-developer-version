(()=>{var o,t,e,n,r={69314:()=>{},18983:()=>{},90959:(o,t,e)=>{"use strict";var n=e(52107),r=e(95292),a=e(36631),i=e(60576),l=e(38090);const s=(0,a.Z)((async function(o){const t=new i.U(o);return await l.G.create({provider:t})}));var d=e(64021),u=e(51330),c=e(57928);const p=new Uint8Array(32),f=(0,d.d)("modl");function m(o,t,e){return o.registry.createType("AccountId32",(0,u.e)(f,o.consts.nominationPools.palletId.toU8a(),new Uint8Array([e]),(0,c.a)(t,{bitLength:32}),p)).toString()}const v=(0,a.Z)((function(o,t){return{rewardId:m(o,t,1),stashId:m(o,t,0)}}));onmessage=o=>{const{address:t,endpoint:e}=o.data;(async function(o,t){var e;const a=await s(t),i=await a.query.nominationPools.lastPoolId();if(console.log(`get pools for poolId:${i.toNumber()}`),!i)return null;const l=[];for(let o=1;o<=i.toNumber();o++)l.push(Promise.all([a.query.nominationPools.metadata(o),a.query.nominationPools.bondedPools(o),a.query.nominationPools.rewardPools(o)]));const d=(null===(e=(await Promise.all(l)).map(((o,t)=>{if(o[1].isSome){var e,n,r,a,i;const l=o[1].unwrap();return{bondedPool:{memberCounter:String(l.memberCounter),points:String(l.points),roles:l.roles,state:l.state},metadata:null!==(e=o[0])&&void 0!==e&&e.length?null!==(n=o[0])&&void 0!==n&&n.isUtf8?null===(r=o[0])||void 0===r?void 0:r.toUtf8():null===(a=o[0])||void 0===a?void 0:a.toString():null,poolId:t+1,rewardPool:null!==(i=o[2])&&void 0!==i&&i.isSome?o[2].unwrap():null}}})))||void 0===e?void 0:e.filter((o=>void 0!==o))).filter((t=>{var e,n,r;return String(null==t||null===(e=t.bondedPool)||void 0===e?void 0:e.roles.root)===o||String(null==t||null===(n=t.bondedPool)||void 0===n?void 0:n.roles.stateToggler)===o||String(null==t||null===(r=t.bondedPool)||void 0===r?void 0:r.roles.nominator)===o})),u=a.registry.chainTokens[0],c=a.registry.chainDecimals[0],p=d.map((async o=>{const t=v(a,o.poolId);if(!t)return console.log(`can not find a pool with id:${o.poolId}`),null;const[e,i,l]=await Promise.all([a.query.nominationPools.rewardPools(o.poolId),a.query.system.account(t.rewardId),a.derive.staking.account(t.stashId)]),s=e.isSome?e.unwrap():null,d=(0,n.x)(r.nw,i.data.free.sub(a.consts.balances.existentialDeposit)),p={};return s&&(p.balance=null!=s&&s.balance?String(s.balance):void 0,p.points=null!=s&&s.points?String(s.points):void 0,p.totalEarnings=null!=s&&s.totalEarnings?String(s.totalEarnings):void 0),{accounts:t,bondedPool:o.bondedPool,decimal:c,member:void 0,metadata:o.metadata.length?o.metadata.isUtf8?o.metadata.toUtf8():o.metadata.toString():null,myClaimable:Number("0"),poolId:o.poolId,rewardClaimable:Number(d),rewardIdBalance:i.data,rewardPool:s,stashIdAccount:l,token:u}})),f=await Promise.all(p);return JSON.stringify(f)})(t,e).then((o=>{postMessage(o)}))}}},a={};function i(o){var t=a[o];if(void 0!==t)return t.exports;var e=a[o]={id:o,loaded:!1,exports:{}};return r[o].call(e.exports,e,e.exports,i),e.loaded=!0,e.exports}i.m=r,i.x=()=>{var o=i.O(void 0,[593],(()=>i(90959)));return i.O(o)},o=[],i.O=(t,e,n,r)=>{if(!e){var a=1/0;for(u=0;u<o.length;u++){for(var[e,n,r]=o[u],l=!0,s=0;s<e.length;s++)(!1&r||a>=r)&&Object.keys(i.O).every((o=>i.O[o](e[s])))?e.splice(s--,1):(l=!1,r<a&&(a=r));if(l){o.splice(u--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var u=o.length;u>0&&o[u-1][2]>r;u--)o[u]=o[u-1];o[u]=[e,n,r]},e=Object.getPrototypeOf?o=>Object.getPrototypeOf(o):o=>o.__proto__,i.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var r=Object.create(null);i.r(r);var a={};t=t||[null,e({}),e([]),e(e)];for(var l=2&n&&o;"object"==typeof l&&!~t.indexOf(l);l=e(l))Object.getOwnPropertyNames(l).forEach((t=>a[t]=()=>o[t]));return a.default=()=>o,i.d(r,a),r},i.d=(o,t)=>{for(var e in t)i.o(t,e)&&!i.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:t[e]})},i.f={},i.e=o=>Promise.all(Object.keys(i.f).reduce(((t,e)=>(i.f[e](o,t),t)),[])),i.u=o=>o+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"==typeof window)return window}}(),i.o=(o,t)=>Object.prototype.hasOwnProperty.call(o,t),i.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},i.nmd=o=>(o.paths=[],o.children||(o.children=[]),o),(()=>{var o;i.g.importScripts&&(o=i.g.location+"");var t=i.g.document;if(!o&&t&&(t.currentScript&&(o=t.currentScript.src),!o)){var e=t.getElementsByTagName("script");e.length&&(o=e[e.length-1].src)}if(!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=o})(),(()=>{var o={142:1};i.f.i=(t,e)=>{o[t]||importScripts(i.p+i.u(t))};var t=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension||[],e=t.push.bind(t);t.push=t=>{var[n,r,a]=t;for(var l in r)i.o(r,l)&&(i.m[l]=r[l]);for(a&&a(i);n.length;)o[n.pop()]=1;e(t)}})(),n=i.x,i.x=()=>i.e(593).then(n),i.x()})();