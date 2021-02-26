import {includeForm, getCoordinatesString} from './util.js';
import {adForm, address} from './ad-form.js';
import {mapFiltersForm} from './map-filters.js';
import {getData} from './api.js';
import {createCardPopup} from './create-card-popup.js';

const COORDINATES = {
  lat: 35.6895000,
  lng: 139.6917100,
}

/* global L:readonly */
const map = L.map('map-canvas')
  .on('load', () => {
    includeForm(adForm);
    includeForm(mapFiltersForm);
  })
  .setView({
    lat: COORDINATES.lat,
    lng: COORDINATES.lng,
  }, 8);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: COORDINATES.lat,
    lng: COORDINATES.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

/**
 * метка адреса возвращается в исходное положение
 */
const setMainPinMarker = () => {
  mainPinMarker.setLatLng([COORDINATES.lat, COORDINATES.lng]);
};

const mainPinAddress = getCoordinatesString(COORDINATES.lat, COORDINATES.lng);
address.value = mainPinAddress;

mainPinMarker.on('moveend', (evt) => {
  let coordinatesMarker = evt.target.getLatLng();
  address.value = getCoordinatesString(coordinatesMarker.lat, coordinatesMarker.lng);
});

getData((ads) => {
  ads.forEach((ad) => {
    const lat = ad.location.lat;
    const lng = ad.location.lng;

    const icon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(
        createCardPopup(ad),
        {
          keepInView: true,
        },
      );
  });
});

export {mainPinAddress, setMainPinMarker};
