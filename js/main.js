'use strict';

/**
 * Возвращает случайное целое число из переданного диапазона
 * Получение случайного целого числа взято с https://developer.mozilla.org
 *
 * @param min Минимальное положительное число из диапазона, включая 0
 * @param max Максимальное положительное число из диапазона, включая 0
 * @returns {string|number} целое число из диапазона "от...до"
 */
const getRandomInt = function (min, max) {
  if (typeof (min) !== 'number' || typeof (max) !== 'number' || min < 0 || max < 0) {
    return 'Диапазон чисел может быть только положительный, включая ноль.';
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  if (min === max) {
    return min;
  } else {
    return max < min
      ? Math.floor(Math.random() * (min - max + 1)) + max
      : Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

/**
 * Возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
 *
 * @param min Минимальное положительное число из диапазона, включая 0
 * @param max Максимальное положительное число из диапазона, включая 0
 * @param precision Количество знаков после запятой
 * @returns {string} число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
 */
const getRandomFloat = function (min, max, precision) {
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
