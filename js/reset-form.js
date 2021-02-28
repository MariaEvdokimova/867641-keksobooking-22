import {adForm, address} from './ad-form.js';
import {mainPinAddress, setMainPinMarker} from './map-canvas.js';
import {mapFiltersForm} from './map-filters.js';

/**
 * страница переходит в начальное состояние
 */
const resetForm = () => {
  setMainPinMarker();
  mapFiltersForm.reset();
  adForm.reset();
  address.value = mainPinAddress;
};

export {resetForm};
