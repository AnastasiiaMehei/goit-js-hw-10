import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import"./assets/vendor-4daf66c6.js";const s=document.querySelector("form"),l=parseInt(document.querySelector("input[name='delay']".value)),r=document.querySelector("input[name='state']:checked");s.addEventListener("submit",o=>{o.preventDefault();const t=parseInt(l);new Promise((e,n)=>{r.value=="fulfilled"?setTimeout(()=>{e(t)},t):n(t)}).then(e=>{console.log(`✅ Fulfilled promise in ${e}ms`)}).catch(e=>{console.log(`❌ Rejected promise in ${e}ms`)})});
//# sourceMappingURL=commonHelpers2.js.map
