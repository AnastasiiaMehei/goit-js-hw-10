import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import"./assets/vendor-4daf66c6.js";const r=document.querySelector("form"),s=parseInt(document.querySelector("input[name='delay']".value));document.querySelector("input[name='state']:checked");r.addEventListener("submit",o=>{o.preventDefault();const t=parseInt(s);new Promise((e,n)=>{stateInputa&&stateInput.targer.delay.value=="fulfilled"?setTimeout(()=>{e(t)},t):n(t)}).then(e=>{console.log(`✅ Fulfilled promise in ${e}ms`)}).catch(e=>{console.log(`❌ Rejected promise in ${e}ms`)})});
//# sourceMappingURL=commonHelpers2.js.map
