import {isEmptyValue} from './util.js';

/**
 * Получениу DOM-элемента из разметки для балуна
 *
 * @param ad объект данных
 * @returns {Node}
 */
const createCardPopup = (ad) => {
  const TYPES_DESCRIPTION = {
    'palace': 'Дворец',
    'flat': 'Квартира',
    'house': 'Дом',
    'bungalow': 'Бунгало',
  }

  const similarCardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const cardElement = similarCardTemplate.cloneNode(true);

  const adOffer = ad.offer;

  if (!isEmptyValue (adOffer.title, cardElement,'.popup__title')) {
    cardElement.querySelector('.popup__title').textContent = adOffer.title;
  }

  if (!isEmptyValue (adOffer.address, cardElement, '.popup__text--address')) {
    cardElement.querySelector('.popup__text--address').textContent = adOffer.address;
  }

  if (!isEmptyValue (adOffer.price, cardElement, '.popup__text--price')) {
    cardElement.querySelector('.popup__text--price').innerHTML = `${adOffer.price} <span>₽/ночь</span>`;
  }

  if (!isEmptyValue (adOffer.type, cardElement, '.popup__type')) {
    cardElement.querySelector('.popup__type').textContent = TYPES_DESCRIPTION[adOffer.type];
  }

  if (!isEmptyValue (adOffer.rooms, cardElement, '.popup__text--capacity')
    && !isEmptyValue (adOffer.guests, cardElement, '.popup__text--capacity')) {
    cardElement.querySelector('.popup__text--capacity').textContent = `${adOffer.rooms} комнаты для ${adOffer.guests} гостей`;
  }

  if (!isEmptyValue (adOffer.checkin, cardElement, '.popup__text--time')
    && !isEmptyValue (adOffer.checkout, cardElement, '.popup__text--time')) {
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${adOffer.checkin}, выезд до ${adOffer.checkout}`;
  }

  const featuresList = cardElement.querySelector('.popup__features');
  const featuresArray = adOffer.features;

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

  if (!isEmptyValue (adOffer.description, cardElement, '.popup__description')) {
    cardElement.querySelector('.popup__description').textContent = adOffer.description;
  }

  const photosList = cardElement.querySelector('.popup__photos');
  const photosArray = adOffer.photos;

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

  if (!isEmptyValue (ad.author.avatar, cardElement, '.popup__avatar')) {
    cardElement.querySelector('.popup__avatar').src = ad.author.avatar;
  }

  return cardElement;
}

export {createCardPopup};
