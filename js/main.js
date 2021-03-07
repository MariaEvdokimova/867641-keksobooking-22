import {setUserFormSubmit, setUserFormReset} from './ad-form.js';
import {resetForm} from './reset-form.js';
import {changeMapFiltersForm} from'./map-filters.js';
import {renderSimilarList} from './map-canvas.js';
import {getData} from './api.js';
import './ad-form-images.js';

const RERENDER_DELAY = 500;

const debounce = (cb, timeout) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => cb.apply(this), timeout);
  };
};

getData((ads) => {
  renderSimilarList(ads);
  changeMapFiltersForm(debounce(
    () => renderSimilarList(ads),
    RERENDER_DELAY,
  ));
});

setUserFormSubmit(resetForm);
setUserFormReset(resetForm);
