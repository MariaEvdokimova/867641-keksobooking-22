import {setUserFormSubmit, setUserFormReset} from './ad-form.js';
import {resetForm} from './reset-form.js';
import {changeMapFiltersForm} from'./map-filters.js';
import {renderSimilarList} from './map-canvas.js';
import {getData} from './api.js';

getData((ads) => {
  renderSimilarList(ads);
  changeMapFiltersForm(() => renderSimilarList(ads));
});

setUserFormSubmit(resetForm);
setUserFormReset(resetForm);
