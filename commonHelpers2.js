import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as t}from"./assets/vendor-77e16229.js";const n=document.querySelector(".form");n.addEventListener("submit",r=>{r.preventDefault();const e=parseInt(document.querySelector('input[name="delay"]').value),i=document.querySelector('input[name="state"]:checked').value;new Promise((o,s)=>{setTimeout(()=>{i==="fulfilled"?o(`✅ Fulfilled promise in ${e}ms`):s(`❌ Rejected promise in ${e}ms`)},e)}).then(o=>{t.success({backgroundColor:"green",position:"topRight",message:`✅ Fulfilled promise in ${e}ms`})},o=>{t.error({backgroundColor:"red",position:"topRight",message:`❌ Rejected promise in ${e}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map
