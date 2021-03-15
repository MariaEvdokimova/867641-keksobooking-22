import {adForm} from './ad-form.js';
import {postingPhoto} from './util.js';

const IMG_WIDTH = 70;
const IMG_HEIGHT = 70;

const fileAvatarChooser = adForm.querySelector('#avatar');
const previewAvatar = adForm.querySelector('.ad-form-header__preview img');
const filePhotoChooser = adForm.querySelector('#images');
const previewPhoto = adForm.querySelector('.ad-form__photo');

fileAvatarChooser.addEventListener('change', () => {
  postingPhoto(fileAvatarChooser, previewAvatar);
});

filePhotoChooser.addEventListener('change', () => {
  const imgContainer = document.createElement('img');
  imgContainer.alt = 'Фотография жилья';
  imgContainer.width = IMG_WIDTH;
  imgContainer.height = IMG_HEIGHT;

  postingPhoto(filePhotoChooser, imgContainer);

  if(previewPhoto.firstChild) {
    previewPhoto.removeChild(previewPhoto.firstChild);
  }

  previewPhoto.appendChild(imgContainer);
});

export {previewAvatar, previewPhoto};
