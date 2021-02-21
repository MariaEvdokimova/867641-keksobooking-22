import {changeSelectedValue, disableForm, validateCapacityRooms} from './util.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

const TYPES_MIN_PRICE = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
}

const adForm = document.querySelector('.ad-form');
const title = adForm.querySelector('#title');
const address = adForm.querySelector('#address');
const types = adForm.querySelector('#type');
const price = adForm.querySelector('#price');
const timeInList = adForm.querySelector('#timein');
const timeOutList = adForm.querySelector('#timeout');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');

disableForm(adForm);

title.addEventListener('input', () => {
  const valueLength = title.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    title.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    title.setCustomValidity('');
  }

  title.reportValidity();
});

address.readOnly = true;

price.addEventListener('input', () => {
  const value = price.value;
  const typeOption = types.options[types.selectedIndex];

  if (value < TYPES_MIN_PRICE[typeOption.value]) {
    price.setCustomValidity(`Минимальная цена за ${typeOption.textContent} - ${TYPES_MIN_PRICE[typeOption.value]}`);
  } else if (value > MAX_PRICE) {
    price.setCustomValidity(`Цена превышает ${MAX_PRICE}`);
  } else {
    price.setCustomValidity('');
  }

  price.reportValidity();
});

types.addEventListener('change', (evt) => {
  price.placeholder = TYPES_MIN_PRICE[evt.target.value];
});

timeInList.addEventListener('change', (evt) => {
  changeSelectedValue(evt.target.value, timeOutList);
});

timeOutList.addEventListener('change', (evt) => {
  changeSelectedValue(evt.target.value, timeInList);
});

roomNumber.addEventListener('change', () => {
  validateCapacityRooms(roomNumber, capacity);
});

capacity.addEventListener('change', () => {
  validateCapacityRooms(roomNumber, capacity);
});

export {adForm, address};
