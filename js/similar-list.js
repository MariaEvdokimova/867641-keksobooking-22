import {similarAd} from './data.js';

const TYPES_DESCRIPTION = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
}

const similarListElement = document.querySelector('.map__canvas');
const similarCardTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardElement = similarCardTemplate.cloneNode(true);

const adItem = similarAd[0];
const itemOffer = adItem.offer;

/**
 * Если данных нет, то блок удаляется и возвращается true, иначе false
 *
 * @param value проверяемое значение
 * @param selector селектор
 * @returns {boolean}
 */
const isEmptyValue = (value, selector) => {
  if (value === undefined) {
    cardElement.removeChild(cardElement.querySelector(selector))
    return true;
  }
  return false;
}

if (!isEmptyValue (itemOffer.title, '.popup__title')) {
  cardElement.querySelector('.popup__title').textContent = itemOffer.title;
}

if (!isEmptyValue (itemOffer.address, '.popup__text--address')) {
  cardElement.querySelector('.popup__text--address').textContent = itemOffer.address;
}

if (!isEmptyValue (itemOffer.price, '.popup__text--price')) {
  cardElement.querySelector('.popup__text--price').innerHTML = `${itemOffer.price} <span>₽/ночь</span>`;
}

if (!isEmptyValue (itemOffer.type, '.popup__type')) {
  cardElement.querySelector('.popup__type').textContent = TYPES_DESCRIPTION[itemOffer.type];
}

if (!isEmptyValue (itemOffer.rooms, '.popup__text--capacity')
    && !isEmptyValue (itemOffer.guests, '.popup__text--capacity')) {
  cardElement.querySelector('.popup__text--capacity').textContent = `${itemOffer.rooms} комнаты для ${itemOffer.guests} гостей`;
}

if (!isEmptyValue (itemOffer.checkin, '.popup__text--time')
  && !isEmptyValue (itemOffer.checkout, '.popup__text--time')) {
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${itemOffer.checkin}, выезд до ${itemOffer.checkout}`;
}

const featuresList = cardElement.querySelector('.popup__features');
const featuresArray = itemOffer.features;

if (featuresArray.length === 0) {
  cardElement.removeChild(featuresList)
} else {
  for (let i = featuresList.children.length - 1; i >= 0; i--) {
    const child = featuresList.children[i];
    child.parentElement.removeChild(child);
  }

  featuresArray.forEach((value) => {
    const newFeature = document.createElement('li');
    newFeature.classList.add('popup__feature');
    newFeature.classList.add(`popup__feature--${value}`);

    featuresList.appendChild(newFeature);
  });
}

if (!isEmptyValue (itemOffer.description, '.popup__description')) {
  cardElement.querySelector('.popup__description').textContent = itemOffer.description;
}

const photosList = cardElement.querySelector('.popup__photos');
const photosArray = itemOffer.photos;

if (photosArray.length === 0) {
  cardElement.removeChild(photosList)
} else {
  photosArray.forEach((value) => {
    const photoElement = photosList.children[0].cloneNode(true);
    photoElement.src = value;

    photosList.appendChild(photoElement);
  });

  photosList.removeChild(photosList.children[0]);
}

if (!isEmptyValue (adItem.author.avatar, '.popup__avatar')) {
  cardElement.querySelector('.popup__avatar').src = adItem.author.avatar;
}

similarListElement.appendChild(cardElement);
