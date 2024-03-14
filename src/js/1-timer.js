import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const input = document.getElementById('datetime-picker');
const button = document.querySelector('button');
button.addEventListener('click', () => {
  button.setAttribute('disabled', '');
});
let userSelectedDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    console.log(selectedDates[0]);
  },
};
flatpickr(input, options);

// const dateStart = new Data('2023-10-081T7:25');
// const dateEnd = new Data();
