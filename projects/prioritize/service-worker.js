if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,n,i)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(n.map((r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}}))).then((e=>{const r=i(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-abcf31fd"],(function(e){"use strict";e.setCacheNameDetails({prefix:"assets"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./css/main.e07ff1dbe9ae84e836e3.css",revision:null},{url:"./index.html",revision:"8914dd62c137116e4402f846ff68d5f3"},{url:"./js/bootstrap.71219e60cbe05e476ff3.js",revision:null},{url:"./js/font-awesome.5275c9a96582840f5d7a.js",revision:null},{url:"./js/main.6e4757f6759948f67d8b.js",revision:null},{url:"./manifest.json",revision:"34c0a9334d30001f90df7bd1cc7749a3"},{url:"fonts/CabinSketchab0ff884e785c1272279.woff2",revision:null},{url:"fonts/Neucha22d709d0358065f913da7.woff2",revision:null},{url:"fonts/Neuchab13fb60584abc71457ed.woff2",revision:null},{url:"img/backgrounda5265f38a651f8fd4c18.png",revision:null},{url:"img/cwc-shadesa05dc6e0694f089c83c8.png",revision:null},{url:"img/oopsfe704e0dccb8e85da8a9.png",revision:null}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/.(?:png|jpg|jpeg|svg)$/,new e.StaleWhileRevalidate({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:10})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
