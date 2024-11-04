(()=>{function P(e,t){return e.split(", ").map(n=>n.split(" ").map((r,o)=>o===0?self.$meteor.rewrite.url.encode(r,t):r).join(" ")).join(", ")}function c(e,t){return new Proxy(e,{apply(n,r,o){let i=t(o);return Reflect.apply(n,r,i)}})}function y(e,t){return new Proxy(e,{construct(n,r,o){let i=t(r);return Reflect.construct(n,i,o)}})}var U={src:[HTMLScriptElement,HTMLMediaElement,HTMLImageElement,HTMLIFrameElement,HTMLSourceElement],href:[HTMLAnchorElement,HTMLLinkElement],action:[HTMLFormElement],formaction:[HTMLInputElement],data:[HTMLObjectElement]},H=["nonce","integrity","csp"];for(let[e,t]of Object.entries(U))for(let n of t){let r=Object.getOwnPropertyDescriptor(n.prototype,e);Object.defineProperty(n.prototype,e,{get(){return self.$meteor.rewrite.url.decode(r.get.call(this))},set(o){o=self.$meteor.rewrite.url.encode(o,new URL(self.$location.origin)),r.set.call(this,o)}})}var B=Object.getOwnPropertyDescriptor(Element.prototype,"innerHTML");Object.defineProperty(Element.prototype,"innerHTML",{set(e){return this instanceof HTMLScriptElement?e=self.$meteor.rewrite.js(e,new URL(self.$location.origin)):this instanceof HTMLStyleElement&&(e=self.$meteor.rewrite.css(e,new URL(self.$location.origin))),B.set.call(this,e)}});var C=Object.getOwnPropertyDescriptor(HTMLImageElement.prototype,"srcset");Object.defineProperty(HTMLImageElement.prototype,"srcset",{get(){return C.get.call(this)},set(e){e=P(e,new URL(self.$location.origin)),C.set.call(this,e)}});Element.prototype.getAttribute=c(Element.prototype.getAttribute,([e])=>H.includes(e)?null:[e]);Element.prototype.setAttribute=c(Element.prototype.setAttribute,([e,t])=>H.includes(e)?[e,""]:(U[e]&&(t=self.$meteor.rewrite.url.encode(t,new URL(self.$location.origin))),e==="style"&&(t=self.$meteor.rewrite.css(t,new URL(self.$location.origin))),e.includes("srcset")&&(t=P(t,new URL(self.$location.origin))),[e,t]));var _=["background","background-image","mask","mask-image","list-style","list-style-image","border-image","border-image-source","cursor"];CSSStyleDeclaration.prototype.setProperty=c(CSSStyleDeclaration.prototype.setProperty,([e,t,...n])=>(_.includes(e)&&(t=self.$meteor.rewrite.css(t,new URL(self.$location.origin))),[e,t,...n]));window.$location=Object.create(window.location);Object.defineProperties(window.$location,{toString:{value(){return self.$meteor.util.createOrigin().toString()}},href:{get(){return self.$meteor.util.createOrigin().href},set(e){self.$meteor.rewrite.url.encode(e,self.$meteor.util.createOrigin())}},origin:{get(){return self.$meteor.util.createOrigin().origin}},search:{get(){return self.$meteor.util.createOrigin().search},set(e){window.location.search=self.$meteor.config.codec.encode(e)}},hash:{get(){return self.$meteor.util.createOrigin().hash}},pathname:{get(){return self.$meteor.util.createOrigin().pathname},set(e){let t=self.$meteor.util.createOrigin();t.pathname=e,window.location.pathname=self.$meteor.rewrite.url.encode(t.toString(),t)}},protocol:{get(){return self.$meteor.util.createOrigin().protocol},set(){}},host:{get(){return self.$meteor.util.createOrigin().host},set(e){let t=self.$meteor.util.createOrigin();t.host=e,window.location.host=self.$meteor.rewrite.url.encode(t.toString(),t)}},hostname:{get(){return self.$meteor.util.createOrigin().hostname},set(e){let t=self.$meteor.util.createOrigin();t.hostname=e,window.location.hostname=self.$meteor.rewrite.url.encode(t.toString(),t)}},port:{get(){return self.$meteor.util.createOrigin().port},set(){}},replace:{value(e){location.replace(self.$meteor.rewrite.url.encode(e,self.$meteor.util.createOrigin()))}}});globalThis.$location=window.$location;document.$location=window.$location;var X=["cross-origin-embedder-policy","cross-origin-opener-policy","cross-origin-resource-policy","content-security-policy","content-security-policy-report-only","expect-ct","feature-policy","origin-isolation","strict-transport-security","upgrade-insecure-requests","x-content-type-options","x-download-options","x-frame-options","x-permitted-cross-domain-policies","x-powered-by","x-xss-protection","clear-site-data"],J=["host","origin"];function j(e,t,n=Headers){let r=new n;for(let[o,i]of e.entries())r.set(o.toLowerCase(),i);for(let o of X)r.delete(o);for(let o of["referer","location","content-location"])r.set(o,self.$meteor.rewrite.url.encode(r.get(o),t));for(let o of J)r.has(o)&&r.set(o,new URL(self.$meteor.rewrite.url.encode(r.get(o),t))[o]);return r.has("link")&&r.set("link",r.get("link").replace(/<(.*?)>/gi,o=>self.$meteor.rewrite.url.encode(o,t))),r}function u(e,t){return t||(t=self.$meteor.util.createOrigin()),e instanceof URL?new URL(self.$meteor.rewrite.url.encode(e.toString(),self.$meteor.util.createOrigin())):self.$meteor.rewrite.url.encode(e,self.$meteor.util.createOrigin())}var W=globalThis.Headers;window.fetch=c(window.fetch,e=>{if(e[0]instanceof Request){let t=e[0];e[0]=new Request(self.$meteor.rewrite.url.encode(t.url,self.$meteor.util.createOrigin()),Object.defineProperty(t,"url",{value:void 0}))}else e[0]=u(e[0]);return e});window.XMLHttpRequest.prototype.open=c(XMLHttpRequest.prototype.open,e=>(e[1]instanceof URL?e[1]=new URL(self.$meteor.rewrite.url.encode(e[1].href,self.$meteor.util.createOrigin())):e[1]=self.$meteor.rewrite.url.encode(e[1],self.$meteor.util.createOrigin()),e));window.Request=y(Request,e=>{if(e[0]instanceof Request){let t=e[0];e[0]=new Request(self.$meteor.rewrite.url.encode(t.url,self.$meteor.util.createOrigin()),Object.defineProperty(t,"url",{value:void 0}))}else e[0]=u(e[0]);return e});window.Headers=y(Headers,([e])=>(e=j(new W(e),self.$meteor.util.createOrigin(),W),[e]));Response.redirect=c(Response.redirect,e=>(e[0]=u(e[0]),e));window.Worker=y(Worker,e=>[u(e[0],self.$meteor.util.createOrigin()),e[1]]);window.Worklet.prototype.addModule=c(Worklet.prototype.addModule,e=>[u(e[0],self.$meteor.util.createOrigin()),e[1]]);window.addEventListener=new Proxy(window.addEventListener,{apply(e,t,[n,r,...o]){return(n==="message"||n==="messageerror")&&(r=c(r,([i])=>(Object.defineProperty(i,"origin",{value:window.$location.origin,writable:!1}),[i]))),n==="hashchange"&&(r=c(r,([i])=>(Object.defineProperty(i,"newURL",{value:self.$meteor.rewrite.url.decode(i.newURL),writable:!1}),Object.defineProperty(i,"oldURL",{value:self.$meteor.rewrite.url.decode(i.oldURL),writable:!1}),[i]))),Reflect.apply(e,t,[n,r,...o])}});var S=([e,,t])=>(t&&(t=u(t)),[e,"",t]);window.history.replaceState=c(window.history.replaceState,S);window.history.pushState=c(window.history.pushState,S);window.History.prototype.replaceState=c(window.History.prototype.replaceState,S);window.History.prototype.pushState=c(window.History.prototype.pushState,S);var z=globalThis.fetch,w=globalThis.WebSocket,K=globalThis.Request,R=globalThis.Response,O=globalThis.SharedWorker,A=globalThis.localStorage,Q=globalThis.navigator.serviceWorker,b={prototype:{send:w.prototype.send},CLOSED:w.CLOSED,CLOSING:w.CLOSING,CONNECTING:w.CONNECTING,OPEN:w.OPEN};async function M(){let t=(await self.clients.matchAll({type:"window",includeUncontrolled:!0})).map(async r=>{let o=await V(r);return await F(o),o}),n=Promise.race([Promise.any(t),new Promise((r,o)=>setTimeout(o,1e3,new TypeError("timeout")))]);try{return await n}catch(r){if(r instanceof AggregateError)throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."),new Error("All clients returned an invalid MessagePort.");return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"),await M()}}function V(e){let t=new MessageChannel;return new Promise(n=>{e.postMessage({type:"getPort",port:t.port2},[t.port2]),t.port1.onmessage=r=>{n(r.data)}})}function F(e){let t=new MessageChannel,n=new Promise((r,o)=>{t.port1.onmessage=i=>{i.data.type==="pong"&&r()},setTimeout(o,1500)});return e.postMessage({message:{type:"ping"},port:t.port2},[t.port2]),n}function N(e,t){let n=new O(e,"bare-mux-worker");return t&&Q.addEventListener("message",r=>{if(r.data.type==="getPort"&&r.data.port){console.debug("bare-mux: recieved request for port from sw");let o=new O(e,"bare-mux-worker");r.data.port.postMessage(o.port,[o.port])}}),n.port}var k=class{constructor(t){this.channel=new BroadcastChannel("bare-mux"),t instanceof MessagePort?this.port=t:this.createChannel(t,!0)}createChannel(t,n){if(self.clients)this.port=M(),this.channel.onmessage=r=>{r.data.type==="refreshPort"&&(this.port=M())};else if(t&&O){if(!t.startsWith("/")&&!t.includes("://"))throw new Error("Invalid URL. Must be absolute or start at the root.");this.port=N(t,n),console.debug("bare-mux: setting localStorage bare-mux-path to",t),A["bare-mux-path"]=t}else if(O){let r=A["bare-mux-path"];if(console.debug("bare-mux: got localStorage bare-mux-path:",r),!r)throw new Error("Unable to get bare-mux workerPath from localStorage.");this.port=N(r,n)}else throw new Error("Unable to get a channel to the SharedWorker.")}async sendMessage(t,n){this.port instanceof Promise&&(this.port=await this.port);try{await F(this.port)}catch{return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."),this.createChannel(),await this.sendMessage(t,n)}let r=new MessageChannel,o=[r.port2,...n||[]],i=new Promise((d,a)=>{r.port1.onmessage=p=>{let l=p.data;l.type==="error"?a(l.error):d(l)}});return this.port.postMessage({message:t,port:r.port2},o),await i}},Y="!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~";function Z(e){for(let t=0;t<e.length;t++){let n=e[t];if(!Y.includes(n))return!1}return!0}var ee=["ws:","wss:"],te=[101,204,205,304],re=[301,302,303,307,308];var E=class{constructor(t){this.worker=new k(t)}createWebSocket(t,n=[],r,o,i){try{t=new URL(t)}catch{throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${t}' is invalid.`)}if(!ee.includes(t.protocol))throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${t.protocol}' is not allowed.`);Array.isArray(n)||(n=[n]),n=n.map(String);for(let s of n)if(!Z(s))throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${s}' is invalid.`);let d=r||w,a=new d("ws://127.0.0.1:1",n),p="",l=b.CONNECTING,f=!1;a.addEventListener("error",s=>{f||(l=w.CONNECTING,s.stopImmediatePropagation(),f=!0)});let $=!1;a.addEventListener("close",s=>{$||(s.stopImmediatePropagation(),$=!0)}),i=i||d.constructor.constructor("return ArrayBuffer")().prototype,o=o||{},o.Host=new URL(t).host,o.Pragma="no-cache",o["Cache-Control"]="no-cache",o.Upgrade="websocket",o.Connection="Upgrade";let T=s=>{l=b.OPEN,p=s,a.meta={headers:{"sec-websocket-protocol":s}},a.dispatchEvent(new Event("open"))},v=async s=>{typeof s=="string"?a.dispatchEvent(new MessageEvent("message",{data:s})):"byteLength"in s?(a.binaryType==="blob"?s=new Blob([s]):Object.setPrototypeOf(s,i),a.dispatchEvent(new MessageEvent("message",{data:s}))):"arrayBuffer"in s&&(a.binaryType==="arraybuffer"&&(s=await s.arrayBuffer(),Object.setPrototypeOf(s,i)),a.dispatchEvent(new MessageEvent("message",{data:s})))},D=(s,g)=>{l=b.CLOSED,a.dispatchEvent(new CloseEvent("close",{code:s,reason:g}))},G=()=>{l=b.CLOSED,a.dispatchEvent(new Event("error"))},h=new MessageChannel;h.port1.onmessage=s=>{s.data.type==="open"?T(s.data.args[0]):s.data.type==="message"?v(s.data.args[0]):s.data.type==="close"?D(s.data.args[0],s.data.args[1]):s.data.type==="error"&&G()},this.worker.sendMessage({type:"websocket",websocket:{url:t.toString(),origin,protocols:n,requestHeaders:o,channel:h.port2}},[h.port2]);let x=()=>l;Object.defineProperty(a,"readyState",{get:x,configurable:!0,enumerable:!0});let q=()=>{if(x()===b.CONNECTING)return new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.")};return a.send=function(...s){let g=q();if(g)throw g;let m=s[0];m.buffer&&(m=m.buffer),h.port1.postMessage({type:"data",data:m},m instanceof ArrayBuffer?[m]:[])},a.close=function(s,g){h.port1.postMessage({type:"close",closeCode:s,closeReason:g})},Object.defineProperty(a,"url",{get:()=>t.toString(),configurable:!0,enumerable:!0}),Object.defineProperty(a,"protocol",{get:()=>p,configurable:!0,enumerable:!0}),a}async fetch(t,n){let r=new K(t,n),o=n?.headers||r.headers,i=o instanceof Headers?Object.fromEntries(o):o,d=r.body,a=new URL(r.url);if(a.protocol.startsWith("blob:")){let p=await z(a),l=new R(p.body,p);return l.rawHeaders=Object.fromEntries(p.headers),l.rawResponse=p,l}for(let p=0;;p++){"host"in i?i.host=a.host:i.Host=a.host;let l=(await this.worker.sendMessage({type:"fetch",fetch:{remote:a.toString(),method:r.method,headers:i,body:d||void 0}},d?[d]:[])).fetch,f=new R(te.includes(l.status)?void 0:l.body,{headers:new Headers(l.headers),status:l.status,statusText:l.statusText});f.rawHeaders=l.headers,f.rawResponse=new R(l.body),f.finalURL=a.toString();let $=n?.redirect||r.redirect;if(re.includes(f.status))switch($){case"follow":{let T=f.headers.get("location");if(20>p&&T!==null){a=new URL(T,a);continue}else throw new TypeError("Failed to fetch")}case"error":throw new TypeError("Failed to fetch");case"manual":return f}else return f}}};var oe=new E,ne=globalThis.WebSocket;globalThis.WebSocket=new Proxy(globalThis.WebSocket,{construct(e,t){return self.$meteor_config.debug===!0&&self.$meteor.util.log(`Creating websocket to ${t[0]} on origin ${self.$meteor.util.createOrigin().origin}`,"teal"),oe.createWebSocket(t[0],t[1],ne,{"User-Agent":navigator.userAgent,origin:self.$location.origin},ArrayBuffer.prototype)}});Object.defineProperties(window.navigator,{});"sendBeacon"in globalThis.navigator&&(globalThis.navigator.sendBeacon=c(globalThis.navigator.sendBeacon,e=>(e[0]=u(e[0]),e)));"clipboard"in globalThis.navigator&&(globalThis.navigator.clipboard=c(globalThis.navigator.clipboard,e=>(e[0],e)));"credentials"in globalThis.navigator&&(globalThis.navigator.credentials=c(globalThis.navigator.credentials,e=>(self.$meteor.util.log(`Attempting to patch: ${e}`,"teal"),e)));var L="meteor$";function I(e){let t=()=>Object.keys(e).filter(n=>n.startsWith(L+window.$location.host));return new Proxy(e,{get(n,r){switch(r){case"setItem":return(o,i)=>n.setItem(`${L}${window.$location.host}@${o}`,i);case"getItem":return o=>n.getItem(`${L}${window.$location.host}@${o}`);case"removeItem":return o=>n.removeItem(`${L}${window.$location.host}@${o}`);case"clear":return()=>{for(let o of t())n.removeItem(o)};case"length":return t().length;case"key":return o=>n[t()[o]]}}})}var se=I(window.localStorage),ie=I(window.sessionStorage);delete window.localStorage;delete window.sessionStorage;window.localStorage=se;window.sessionStorage=ie;for(let e of self.$meteor.config.plugins)e.filter.test(window.$location.href)&&"handleClient"in e&&(self.$meteor.util.log(`Running handleClient for ${e.name}`,"teal"),e.handleClient(window));})();
//# sourceMappingURL=meteor.client.js.map