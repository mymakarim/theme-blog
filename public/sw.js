if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,r,t)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=t(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts("fallback--zm1BxnsBRTd4_pz7RnbG.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/-zm1BxnsBRTd4_pz7RnbG/_buildManifest.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/-zm1BxnsBRTd4_pz7RnbG/_ssgManifest.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/137.cb50185663a32eb7947d.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/299-c60c2cd9328c6d3d5a73.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/303.74e9d10ab9eb58a2755d.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/424.5db3c7151a1c13dfe10a.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/462.81a4b669f73731e40873.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/490.d6cc57fe6777410cfce3.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/542.20d20d4bd30a4e268cea.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/561.e09138071beb5530557d.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/616.b83059e11b6caebb3286.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/653-f7b46eda41ee6f0d7b54.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/662.e12fcfef7e60c6e3d209.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/747.1993b12230639bd5bbb3.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/861-79a4b13b31dd0eea2e65.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/934.8833d328ce4c84199ba1.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/commons-b30140e8af158dce3d78.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/framework-d23658296916ce920464.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/main-d5949018301ae088d232.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/pages/%5Bslug%5D-d74ab05fb4edfbcaa95c.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/pages/_app-a066613045ee5a2ce835.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/pages/_error-94ed2348718d59e1af9b.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/pages/_offline-d0eeeba0f68974a4365a.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/pages/author/%5Bslug%5D-18b2c19cf450d91ddafd.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-a46e1fbbfb683c81a6f3.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/pages/category/%5Bslug%5D-ff7e0b2c0e35ea79eb12.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/pages/index-8db5c1148ecc8164943e.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/pages/index-CSR-RestSections-387b44a7e9775dd39ffb.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/pages/search/%5Bslug%5D-b8f6953e412b5ba8f038.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/pages/tag/%5Bslug%5D-f8ab3c31cc1390b86a0d.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/chunks/webpack-a2fb1b45debd9c1b359d.js",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_next/static/css/355e4db2480017398abb.css",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/_offline",revision:"-zm1BxnsBRTd4_pz7RnbG"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/android-chrome-192x192.png",revision:"0bbd64d1ee937300fb1505ec5c88b154"},{url:"/icons/apple-touch-icon.png",revision:"7090a7b2693181947331e38efa4f3486"},{url:"/icons/icon-512x512.png",revision:"9312927ec9f042055794a59d924e8c03"},{url:"/manifest.json",revision:"45cead512545af158b12e10b6d1f3759"},{url:"/robots.txt",revision:"f19689993240883402b2b0cce6eb5683"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:r})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
