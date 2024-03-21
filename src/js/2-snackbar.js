import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const inputDelay = parseInt(
    document.querySelector('input[name="delay"]').value
  );
  const selectedCheckbox = document.querySelector(
    'input[name="state"]:checked'
  ).value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedCheckbox === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${inputDelay}ms`);
      } else {
        reject(`❌ Rejected promise in ${inputDelay}ms`);
      }
    }, inputDelay);
  });
  promise.then(
    value => {
      iziToast.success({
        title: 'Success',
        backgroundColor: 'green',
        position: 'topRight',
        message: `✅ Fulfilled promise in ${inputDelay}ms`,
      });
    },
    error => {
      iziToast.error({
        title: 'Error',
        backgroundColor: 'red',
        position: 'topRight',
        message: `❌ Rejected promise in ${inputDelay}ms`,
      });
    }
  );
});
