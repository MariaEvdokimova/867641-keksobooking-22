/**
 * Возвращает случайное целое число из переданного диапазона
 * Получение случайного целого числа взято с https://developer.mozilla.org
 *
 * @param min Минимальное положительное число из диапазона, включая 0
 * @param max Максимальное положительное число из диапазона, включая 0
 * @returns {string|number} целое число из диапазона "от...до"
 */
const getRandomInt = (min, max) => {
  if (typeof (min) !== 'number' || typeof (max) !== 'number' || min < 0 || max < 0) {
    return 'Диапазон чисел может быть только положительный, включая ноль.';
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  if (min === max) {
    return min;
  }

  return max < min
    ? Math.floor(Math.random() * (min - max + 1)) + max
    : Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
 *
 * @param min Минимальное положительное число из диапазона, включая 0
 * @param max Максимальное положительное число из диапазона, включая 0
 * @param precision Количество знаков после запятой
 * @returns {string} число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
 */
const getRandomFloat = (min, max, precision) => {
  if (typeof (min) !== 'number' || typeof (max) !== 'number' || min < 0 || max < 0) {
    return 'Диапазон чисел может быть только положительный, включая ноль.';
  }

  let randomNumber;

  if (min === max) {
    randomNumber = min;
  } else {
    randomNumber = max < min
      ? Math.random() * (min - max) + max
      : Math.random() * (max - min) + min;
  }

  return randomNumber.toFixed(precision);
};

/**
 * Возвращает случайный элемент массива
 *
 * @param elements Массив
 * @returns {*}
 */
const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

/**
 * Возвращает массив случайной длинны
 *
 * @param arr Массив
 * @returns {any[] | BigUint64Array | Uint8ClampedArray | Uint32Array | Blob | Int16Array | Float64Array | SharedArrayBuffer | string | Uint16Array | ArrayBuffer | Int32Array | Float32Array | BigInt64Array | Uint8Array | Int8Array}
 */
const getRandomLengthArray = (arr) => {
  return arr.slice(0, getRandomInt(1, arr.length))
};

/**
 * Изменение выбранного значения из списка в соответствии с указаным
 *
 * @param value значение, в соответствии с которым изменить значение из списка
 * @param list список значений
 */
const changeSelectedValue = (value, list) => {
  for (let item of list) {
    if (value === item.value) {
      item.selected = true;
    }
  }
};

/**
 * Делает неактивное состояние формы, элементам проставляется свойство disabled
 *
 * @param collection
 */
const disableForm = (collection) => {
  collection.classList.add('ad-form--disabled');

  for (let element of collection) {
    element.disabled = true;
  }
};

/**
 * Делает активное состояние формы, у элементов удаляется disabled
 *
 * @param collection
 */
const includeForm = (collection) => {
  collection.classList.remove('ad-form--disabled');

  for (let element of collection) {
    element.disabled = false;
  }
};

/**
 * Возвращает координаты, округленные до 5 символов после запятой в виде строки
 *
 * @param lat
 * @param lng
 * @returns {string}
 */
const getCoordinatesString = (lat, lng) => {
  return `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

/**
 * Если данных нет, то блок удаляется и возвращается true, иначе false
 *
 * @param value проверяемое значение
 * @param element
 * @param selector селектор
 * @returns {boolean}
 */
const isEmptyValue = (value, element, selector) => {
  if (value === undefined) {
    element.removeChild(element.querySelector(selector))
    return true;
  }
  return false;
};

/**
 * при выборе количества комнат вводятся ограничения на допустимые варианты выбора количества гостей
 *
 * @param rooms
 * @param capacity
 */
const validateCapacityRooms = (rooms, capacity) => {
  const roomValue = rooms.options[rooms.selectedIndex].value;
  const capacityValue = capacity.options[capacity.selectedIndex].value;

  if (roomValue === '100' && capacityValue !== '0') {
    capacity.setCustomValidity('100 комнат — «не для гостей»');
  } else if (roomValue === '3' && capacityValue === '0') {
    capacity.setCustomValidity('3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»');
  } else if (roomValue === '2' && (capacityValue === '0' || capacityValue === '3')) {
    capacity.setCustomValidity('2 комнаты — «для 2 гостей» или «для 1 гостя»');
  } else if (roomValue === '1' && capacityValue !== '1') {
    capacity.setCustomValidity('1 комната — «для 1 гостя»');
  } else {
    capacity.setCustomValidity('');
  }

  capacity.reportValidity();
};

export {getRandomInt, getRandomFloat, getRandomArrayElement, getRandomLengthArray, changeSelectedValue, disableForm, includeForm, getCoordinatesString, isEmptyValue, validateCapacityRooms};
