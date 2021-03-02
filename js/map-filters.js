import {disableForm} from './util.js';

const mapFiltersForm = document.querySelector('.map__filters');
const housingTypes = mapFiltersForm.querySelector('#housing-type');
const housingRooms = mapFiltersForm.querySelector('#housing-rooms');
const housingPrice = mapFiltersForm.querySelector('#housing-price');
const housingGuests = mapFiltersForm.querySelector('#housing-guests');
const housingFeatures = mapFiltersForm.querySelector('#housing-features');

disableForm(mapFiltersForm);

const changeMapFiltersForm = (cb) => {
  mapFiltersForm.addEventListener('change', () => {
    cb();
  });
}

/**
 * Сравнение: попадает ли цена в выбранный диапазон
 *
 * @param value
 * @param limit
 * @returns {boolean|boolean}
 */
const comparePrice = (value, limit) => {
  return (limit === 'low' && value <= 10000)
    || (limit === 'middle' && value > 10000 && value < 50000)
    || (limit === 'high' && value >= 50000);

};

/**
 * Фильтр похожих объявлений
 *
 * @param ad
 * @returns {boolean|*}
 */
const  filterAds = (ad) => {
  const type = housingTypes.options[housingTypes.selectedIndex].value;
  const room = housingRooms.options[housingRooms.selectedIndex].value;
  const price = housingPrice.options[housingPrice.selectedIndex].value;
  const guest = housingGuests.options[housingGuests.selectedIndex].value;

  if ((ad.offer.type === type || type === 'any')
    && (ad.offer.rooms === +room || room === 'any')
    && (comparePrice(ad.offer.price, price) || price === 'any')
    && (ad.offer.guests === +guest || guest === 'any')
  ) {
    return ad;
  }

  return false;
};

export {mapFiltersForm, changeMapFiltersForm, filterAds, housingFeatures};
