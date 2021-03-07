import {adForm} from './ad-form.js';
import {previewAvatar, previewPhoto} from './ad-form-images.js';
import {setMainPinMarker} from './map-canvas.js';
import {mapFiltersForm} from './map-filters.js';

/**
 * страница переходит в начальное состояние
 */
const resetForm = () => {
  setMainPinMarker();
  mapFiltersForm.reset();
  adForm.reset();

  previewAvatar.src = 'img/muffin-grey.svg';
  if(previewPhoto.firstChild) {
    previewPhoto.removeChild(previewPhoto.firstChild);
  }
};

export {resetForm};
