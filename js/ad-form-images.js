import {adForm} from './ad-form.js';
import {postingPhoto} from './util.js';

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
  imgContainer.width = 70;
  imgContainer.height = 70;

  postingPhoto(filePhotoChooser, imgContainer);

  if(previewPhoto.firstChild) {
    previewPhoto.removeChild(previewPhoto.firstChild);
  }

  previewPhoto.appendChild(imgContainer);
});

export {previewAvatar, previewPhoto};
