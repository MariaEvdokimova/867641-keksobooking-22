const adForm = document.querySelector('.ad-form');
const types = adForm.querySelector('#type');
const price = adForm.querySelector('#price');
const timeInList = adForm.querySelector('#timein');
const timeOutList = adForm.querySelector('#timeout');

const TYPES_MIN_PRICE = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
}

types.addEventListener('change', (evt) => {
  price.placeholder = TYPES_MIN_PRICE[evt.target.value];
})

adForm.addEventListener('submit', (evt) => {
  if (price.value < TYPES_MIN_PRICE[types.options[types.selectedIndex].value] || price.value > 1000000){
    evt.preventDefault();
  }
})

timeInList.addEventListener('change', (evt) => {
  for (let timeOut of timeOutList) {
    if (evt.target.value === timeOut.value) {
      timeOut.selected = true;
    }
  }
});

timeOutList.addEventListener('change', (evt) => {
  for (let timeIn of timeInList) {
    if (evt.target.value === timeIn.value) {
      timeIn.selected = true;
    }
  }
});
