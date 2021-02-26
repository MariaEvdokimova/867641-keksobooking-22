import {showAlert} from './util.js';

/**
 * Получение данных с сервера
 * @param onSuccess функция callback
 */
const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((responce) => responce.json())
    .then((ads) => {
      onSuccess(ads);
    })
    .catch(() => {
      showAlert('Ошибка при загрузке данных с сервера!');
    });
};

/**
 * fetch для отправки данных на сервер
 * @param onSuccess
 * @param successMessage
 * @param failMessage
 * @param body
 */
const sendData = (onSuccess, successMessage, failMessage, body) => {
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then ((response) => {
      if (response.ok) {
        successMessage();
        onSuccess();
      } else {
        failMessage();
      }
    })
    .catch(() => failMessage());
};

export {getData, sendData};
