"use strict";var precacheConfig=[["/index.html","318db9d948d45603f453e1a072fd0cbf"],["/static/css/main.ff15b1b3.css","1fb82efaff066768cc06205f9bc22a85"],["/static/js/main.65f6ecdb.js","9dd46b9f972bdf5d9d6bd0dc8ea9d7bf"],["/static/media/BeauLuloClean-OneBold.35d252df.eot","35d252df500899288459e249b97525f5"],["/static/media/BeauLuloClean-OneBold.4ce34c0e.otf","4ce34c0eaf26a1818d6dc4bae56dbaf8"],["/static/media/BeauLuloClean-OneBold.6b4a34a4.svg","6b4a34a4a40dc09d96ceab0014eed9b2"],["/static/media/BeauLuloClean-OneBold.bb0cd109.woff","bb0cd1091bc6a5db5422e4e6cffb558a"],["/static/media/BeauLuloClean-OneBold.d1ee2979.ttf","d1ee29797ead94565f78c9aa426ed32b"],["/static/media/NittiTypewriter.21d21375.otf","21d2137501e11e71a7bc1d5f496a6b7f"],["/static/media/NittiTypewriter.ae3476cf.eot","ae3476cff310a486029be4af3625ad8c"],["/static/media/NittiTypewriter.b84d67fc.ttf","b84d67fc231e62347ff81673c6a08c43"],["/static/media/NittiTypewriter.bb31242d.woff","bb31242d8e591f5cb40182b53e4efa96"],["/static/media/NittiTypewriter.db30162c.svg","db30162ce32b5e6693161cd910ceb8cb"],["/static/media/Spin-1s-58px.b6c76d43.gif","b6c76d43cc4a75cb6f31d9bf618b388c"],["/static/media/company.b1199e1b.jpg","b1199e1b39885222fc1a28a29ddd88e6"],["/static/media/demo3.5e725b3f.png","5e725b3f5bcf828a34d1af2e444c9750"],["/static/media/dmtd1.d94978df.jpg","d94978dff57389f3bdf67322d67b60ae"],["/static/media/dmtd2.feae9939.jpg","feae9939d841d80a5ea0646a6f086a4a"],["/static/media/dmtd3.d8dad9e8.jpg","d8dad9e899eaf9806f7f719c63a1a7fe"],["/static/media/icon-back.237f3810.png","237f38109744dc49336be0ec5b293e52"],["/static/media/img-social1.4fc4cd98.png","4fc4cd981cb1006080240cb7772942e5"],["/static/media/img-social2.2cc32fbd.png","2cc32fbda7ce37c5de995496e2d5cd64"],["/static/media/img-social3.49ffe7d5.png","49ffe7d53999fb347519f610c61d6285"],["/static/media/say.ac8e972a.jpg","ac8e972a5fa281eb0c1a4b82ffb21c0a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});