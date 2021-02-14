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

cardElement.querySelector('.popup__title').textContent = itemOffer.title;
cardElement.querySelector('.popup__text--address').textContent = itemOffer.address;
cardElement.querySelector('.popup__text--price').innerHTML = `${itemOffer.price} <span>₽/ночь</span>`;
cardElement.querySelector('.popup__type').textContent = TYPES_DESCRIPTION[itemOffer.type];
cardElement.querySelector('.popup__text--capacity').textContent = `${itemOffer.rooms} комнаты для ${itemOffer.guests} гостей`;
cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${itemOffer.checkin}, выезд до ${itemOffer.checkout}`;

const featuresList = cardElement.querySelector('.popup__features');
const featuresArray = itemOffer.features;

for (let i = featuresList.children.length - 1; i >= 0; i--) {
  const child = featuresList.children[i];
  child.parentElement.removeChild(child);
}

for (let i = 0; i < featuresArray.length; i++) {
  const newFeature = document.createElement('li');
  newFeature.classList.add('popup__feature');
  newFeature.classList.add(`popup__feature--${featuresArray[i]}`);

  featuresList.appendChild(newFeature);
}

cardElement.querySelector('.popup__description').textContent = itemOffer.description;

const photosList = cardElement.querySelector('.popup__photos');
const photosArray = itemOffer.photos;

for (let i = 0; i < photosArray.length; i++) {
  const photoElement = photosList.children[0].cloneNode(true);
  photoElement.src = photosArray[i];

  photosList.appendChild(photoElement);
}

photosList.removeChild(photosList.children[0]);

cardElement.querySelector('.popup__avatar').src = adItem.author.avatar;

similarListElement.appendChild(cardElement);
