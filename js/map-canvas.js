import {includeForm, getCoordinatesString} from './util.js';
import {adForm, address} from './ad-form.js';
import {mapFiltersForm} from './map-filters.js';
import {similarAd} from './data.js';
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
  }, 11);

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

address.value = getCoordinatesString(COORDINATES.lat, COORDINATES.lng);

mainPinMarker.on('moveend', (evt) => {
  let coordinatesMarker = evt.target.getLatLng();
  address.value = getCoordinatesString(coordinatesMarker.lat, coordinatesMarker.lng);
});

similarAd.forEach((ad) => {
  const lat = ad.location.x;
  const lng = ad.location.y;

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
