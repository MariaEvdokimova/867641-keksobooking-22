import {getRandomInt, getRandomFloat, getRandomArrayElement, getRandomLengthArray} from './util.js';

const PROPERTY_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
]

const CHECK_IN_TIMES = [
  '12:00',
  '13:00',
  '14:00',
]

const CHECK_OUT_TIMES = [
  '12:00',
  '13:00',
  '14:00',
]

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]

const SIMILAR_AD_COUNT = 10;

/**
 * Возвращает объект
 *
 * @returns {{offer: {features: (*[]|BigUint64Array|Uint8ClampedArray|Uint32Array|Blob|Int16Array|Float64Array|SharedArrayBuffer|string|Uint16Array|ArrayBuffer|Int32Array|Float32Array|BigInt64Array|Uint8Array|Int8Array), rooms: (string|number), address: string, checkin: *, price: (string|number), guests: (string|number), description: string, title: string, type: *, checkout: *, photos: (*[]|BigUint64Array|Uint8ClampedArray|Uint32Array|Blob|Int16Array|Float64Array|SharedArrayBuffer|string|Uint16Array|ArrayBuffer|Int32Array|Float32Array|BigInt64Array|Uint8Array|Int8Array)}, author: {avatar: string}, location: {x: string, y: string}}}
 */
const createAd = () => {

  const locationX = getRandomFloat(35.65000, 35.70000, 5);
  const locationY = getRandomFloat(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomInt(1, 8)}.png`,
    },
    offer: {
      title: `Объявление ${getRandomInt(1,10)}`,
      address: `${locationX}, ${locationY}`,
      price: getRandomInt(1, 100000),
      type: getRandomArrayElement(PROPERTY_TYPES),
      rooms: getRandomInt(1, 10),
      guests: getRandomInt(1, 10),
      checkin: getRandomArrayElement(CHECK_IN_TIMES),
      checkout: getRandomArrayElement(CHECK_OUT_TIMES),
      features: getRandomLengthArray(FEATURES),
      description: 'Улучшенный двухместный номер с 2 отдельными кроватями и видом на город.',
      photos: getRandomLengthArray(PHOTOS),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  }
}

const similarAd = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createAd());

export {similarAd};
