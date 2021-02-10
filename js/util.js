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
}

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
}

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

export {getRandomInt, getRandomFloat, getRandomArrayElement, getRandomLengthArray};