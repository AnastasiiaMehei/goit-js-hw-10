import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
let userSelectedDate = 0;
flatpickr('.input#datetime-picker', { options });
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
const dateStart = new Data('2023-10-081T7:25');
const dateEnd = new Data();
