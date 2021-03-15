import {adForm, price, DEFAULT_MIN_PRICE} from './ad-form.js';
import {previewAvatar, previewPhoto} from './ad-form-images.js';
import {setMainPinMarker, renderSimilarList} from './map-canvas.js';
import {mapFiltersForm} from './map-filters.js';
import {getData} from './api.js';

/**
 * страница переходит в начальное состояние
 */
const resetForm = () => {
  setMainPinMarker();
  getData((ads) => {
    renderSimilarList(ads);
  });
  mapFiltersForm.reset();
  adForm.reset();
  price.placeholder = DEFAULT_MIN_PRICE;

  previewAvatar.src = 'img/muffin-grey.svg';
  if(previewPhoto.firstChild) {
    previewPhoto.removeChild(previewPhoto.firstChild);
  }
};

export {resetForm};
