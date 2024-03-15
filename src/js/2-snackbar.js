import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('form');
const delayInput = parseInt(
  document.querySelector("input[name='delay']".value)
);
const steteInput = document.querySelector("input[name='state']:checked");
form.addEventListener('submit', evt => {
  evt.preventDefault();
  const delay = parseInt(delayInput);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(delay);
      } else {
        reject(delay);
      }
    });
  });
  promise
    .then(delay => {
      console.log(`✅ Fulfilled promise in ${delay}ms`);
    })
    .catch(delay => {
      console.log(`❌ Rejected promise in ${delay}ms`);
    });
});
