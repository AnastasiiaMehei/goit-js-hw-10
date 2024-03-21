import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const delayForm = document.querySelector('.form');
delayForm.addEventListener('submit', event => {
  event.preventDefault();
  const timer = Number(event.currentTarget.elements.delay.value);
  const radio = event.currentTarget.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radio === 'fulfilled') {
        resolve(`✅Fulfilled promise in ${timer}ms`);
      } else {
        reject(`❌Rejected promise in ${timer}ms`);
      }
    }, timer);
  });

  // Registering promise callbacks
  promise
    .then(value => {
      iziToast.success({
        backgroundColor: 'green',
        position: 'topRight',
        message: `✅ Fulfilled promise in ${timer}ms`,
      });
    })
    .catch(error => {
      iziToast.error({
        backgroundColor: 'red',
        position: 'topRight',
        message: `❌ Rejected promise in ${timer}ms`,
      });
    });
});
