(()=>{var g=e=>{let c=()=>s("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",e),s=(o,i)=>{let t=[...o];for(let n=0;n<i.length;n++){let r=i.charCodeAt(n)%o.length,u=r<0?r+o.length:r;for(let p=0;p<o.length;p++){let l=(p+u)%o.length,m=t[p];t[p]=t[l],t[l]=m}}return t.join("")},d=o=>{let i=c(),t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";return[...btoa(o)].map(n=>{let r=t.indexOf(n);return r!==-1?i[r]:n}).join("")},a=o=>{let i=c(),t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";return atob([...o].map(n=>{let r=i.indexOf(n);return r!==-1?t[r]:n}).join(""))};return{encode:d,decode:o=>(o.includes("?")&&(o=d(`${a(o.split("?")[0])}?${o.split("?")[1]}`)),a(o))}},f=g((location.origin+navigator.userAgent).toUpperCase());var h={locvar:f,base64:{encode(e){return encodeURIComponent(btoa(e))},decode(e){return decodeURIComponent(atob(e))}},xor:{encode(e){return e&&encodeURIComponent(e.toString().split("").map((c,s)=>s%2?String.fromCharCode(c.charCodeAt(0)^2):c).join(""))},decode(e){if(!e)return e;let[c,...s]=e.split("?");return decodeURIComponent(c).split("").map((d,a)=>a%2?String.fromCharCode(d.charCodeAt(0)^2):d).join("")+(s.length?`?${s.join("?")}`:"")}},plain:{encode(e){return encodeURIComponent(e)},decode(e){return decodeURIComponent(e)}}};self.$meteor_codecs=h;})();
//# sourceMappingURL=meteor.codecs.js.map