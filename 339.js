(()=>{var n,t,e,r,o={69314:()=>{},18983:()=>{},64440:(n,t,e)=>{"use strict";var r=e(56623),o=e(48533);function i(n){return(0,r.z)((0,o.G)(n))}var l=e(6424),a=e(48801);new(e.n(a)())(6);const u={info:{display:null,legal:null,web:null,email:null,twitter:null}};var d=e(60576),s=e(38090);async function c(n){var t;const e=await async function(n){const t=new d.U(n);return await s.G.create({provider:t})}(n);console.log("getting crowdloans ...");const r=(await e.query.paras.paraLifecycles.entries()).map((([n,t])=>n.args[0])),[o,a,c,f,p]=await Promise.all([e.query.auctions.auctionInfo(),e.query.auctions.auctionCounter(),e.query.crowdloan.funds.multi(r),e.query.slots.leases.multi(r),e.rpc.chain.getHeader()]),v=o.isSome?JSON.parse(o.toString()):null,g=v?v[1]:null,w=Number(null!==(t=null==p?void 0:p.number)&&void 0!==t?t:0),y=g&&w?w-g+1:0,m=[];f.forEach(((n,t)=>{n.length&&m.push(r[t].toString())}));const b=c.map(((n,t)=>{if(n.toString()){const e=JSON.parse(n.toString());return e.raised=(0,l.m)(e.raised).toString(),e.cap=(0,l.m)(e.cap).toString(),e.deposit=e.deposit.toString(),e.paraId=String(r[t]),e.hasLeased=m.includes(e.paraId),e}return null})).filter((n=>n)),h=b.map((n=>n.depositor)),S=await async function(n,t){return(await n.query.identity.identityOf.multi(t)).map((n=>{var t,e,r,o,l,a,d,s,c,f,p,v,g,w,y,m,b,h,S,O;if(!n.toString())return u;const j=JSON.parse(n.toString());return{info:{display:(null==j||null===(t=j.info)||void 0===t||null===(e=t.display)||void 0===e?void 0:e.raw)&&i(null==j||null===(r=j.info)||void 0===r||null===(o=r.display)||void 0===o?void 0:o.raw),legal:(null==j||null===(l=j.info)||void 0===l||null===(a=l.legal)||void 0===a?void 0:a.raw)&&i(null==j||null===(d=j.info)||void 0===d||null===(s=d.legal)||void 0===s?void 0:s.raw),web:(null==j||null===(c=j.info)||void 0===c||null===(f=c.web)||void 0===f?void 0:f.raw)&&i(null==j||null===(p=j.info)||void 0===p||null===(v=p.web)||void 0===v?void 0:v.raw),email:(null==j||null===(g=j.info)||void 0===g||null===(w=g.email)||void 0===w?void 0:w.raw)&&i(null==j||null===(y=j.info)||void 0===y||null===(m=y.email)||void 0===m?void 0:m.raw),twitter:(null==j||null===(b=j.info)||void 0===b||null===(h=b.twitter)||void 0===h?void 0:h.raw)&&i(null==j||null===(S=j.info)||void 0===S||null===(O=S.twitter)||void 0===O?void 0:O.raw)}}}))}(e,h),O=b.map(((n,t)=>({fund:n,identity:S[t]}))),j=y>1?await e.query.auctions.winning(y):void 0;return console.log("winning :",null!=j&&j.toString()?Array.from(j.toHuman()):""),{auctionCounter:Number(a),auctionInfo:o.toString()?JSON.parse(o.toString()):null,crowdloans:O,currentBlockNumber:Number(String(p.number)),minContribution:e.consts.crowdloan.minContribution.toString(),winning:[]}}onmessage=n=>{const{endpoint:t}=n.data;c(t).then((n=>{postMessage(n)}))}}},i={};function l(n){var t=i[n];if(void 0!==t)return t.exports;var e=i[n]={id:n,loaded:!1,exports:{}};return o[n].call(e.exports,e,e.exports,l),e.loaded=!0,e.exports}l.m=o,l.x=()=>{var n=l.O(void 0,[90],(()=>l(64440)));return l.O(n)},n=[],l.O=(t,e,r,o)=>{if(!e){var i=1/0;for(s=0;s<n.length;s++){for(var[e,r,o]=n[s],a=!0,u=0;u<e.length;u++)(!1&o||i>=o)&&Object.keys(l.O).every((n=>l.O[n](e[u])))?e.splice(u--,1):(a=!1,o<i&&(i=o));if(a){n.splice(s--,1);var d=r();void 0!==d&&(t=d)}}return t}o=o||0;for(var s=n.length;s>0&&n[s-1][2]>o;s--)n[s]=n[s-1];n[s]=[e,r,o]},l.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return l.d(t,{a:t}),t},e=Object.getPrototypeOf?n=>Object.getPrototypeOf(n):n=>n.__proto__,l.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);l.r(o);var i={};t=t||[null,e({}),e([]),e(e)];for(var a=2&r&&n;"object"==typeof a&&!~t.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach((t=>i[t]=()=>n[t]));return i.default=()=>n,l.d(o,i),o},l.d=(n,t)=>{for(var e in t)l.o(t,e)&&!l.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},l.f={},l.e=n=>Promise.all(Object.keys(l.f).reduce(((t,e)=>(l.f[e](n,t),t)),[])),l.u=n=>n+".js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),l.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),l.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),(()=>{var n;l.g.importScripts&&(n=l.g.location+"");var t=l.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var e=t.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=n})(),(()=>{var n={339:1};l.f.i=(t,e)=>{n[t]||importScripts(l.p+l.u(t))};var t=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension||[],e=t.push.bind(t);t.push=t=>{var[r,o,i]=t;for(var a in o)l.o(o,a)&&(l.m[a]=o[a]);for(i&&i(l);r.length;)n[r.pop()]=1;e(t)}})(),r=l.x,l.x=()=>l.e(90).then(r),l.x()})();