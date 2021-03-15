const ALERT_SHOW_TIME = 5000;
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

/**
 * Изменение выбранного значения из списка в соответствии с указаным
 *
 * @param value значение, в соответствии с которым изменить значение из списка
 * @param list список значений
 */
const changeSelectedValue = (value, list) => {
  for (let item of list) {
    if (value === item.value) {
      item.selected = true;
    }
  }
};

/**
 * Делает неактивное состояние формы, элементам проставляется свойство disabled
 *
 * @param collection
 */
const disableForm = (collection) => {
  collection.classList.add('ad-form--disabled');

  for (let element of collection) {
    element.disabled = true;
  }
};

/**
 * Делает активное состояние формы, у элементов удаляется disabled
 *
 * @param collection
 */
const includeForm = (collection) => {
  collection.classList.remove('ad-form--disabled');

  for (let element of collection) {
    element.disabled = false;
  }
};

/**
 * Возвращает координаты, округленные до 5 символов после запятой в виде строки
 *
 * @param lat
 * @param lng
 * @returns {string}
 */
const getCoordinatesString = (lat, lng) => {
  return `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

/**
 * Если данных нет, то блок удаляется и возвращается true, иначе false
 *
 * @param value проверяемое значение
 * @param element
 * @param selector селектор
 * @returns {boolean}
 */
const isEmptyValue = (value, element, selector) => {
  if (value === undefined) {
    element.removeChild(element.querySelector(selector))
    return true;
  }
  return false;
};

/**
 * при выборе количества комнат вводятся ограничения на допустимые варианты выбора количества гостей
 *
 * @param rooms
 * @param capacity
 */
const validateCapacityRooms = (rooms, capacity) => {
  const roomValue = rooms.options[rooms.selectedIndex].value;
  const capacityValue = capacity.options[capacity.selectedIndex].value;

  if (roomValue === '100' && capacityValue !== '0') {
    capacity.setCustomValidity('100 комнат — «не для гостей»');
  } else if (roomValue === '3' && capacityValue === '0') {
    capacity.setCustomValidity('3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»');
  } else if (roomValue === '2' && (capacityValue === '0' || capacityValue === '3')) {
    capacity.setCustomValidity('2 комнаты — «для 2 гостей» или «для 1 гостя»');
  } else if (roomValue === '1' && capacityValue !== '1') {
    capacity.setCustomValidity('1 комната — «для 1 гостя»');
  } else {
    capacity.setCustomValidity('');
  }

  capacity.reportValidity();
};

/**
 * Проверяет была ли нажата кнопка Esc
 *
 * @param evt
 * @returns {boolean}
 */
const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

/**
 * создает модальное окно с сообщением
 *
 * @param container
 * @param button
 */
const createMessageModal = (container, button = undefined) => {
  const main = document.querySelector('main');

  main.append(container);

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      container.remove();
    }
  }, {once: true});

  document.addEventListener('click', () => {
    container.remove();
  }, {once: true});

  if (button !== undefined) {
    button.addEventListener('click', () => {
      container.remove();
    }, {once: true});
  }
};

/**
 * показывает сообщение об ошибке
 *
 * @param message
 */
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

/**
 * Загрузка изображений на страницу
 *
 * @param fileChooser
 * @param preview
 */
const postingPhoto = (fileChooser, preview) => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((type) => {
    return fileName.endsWith(type);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      preview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
};

/**
 * Возвращает соответствие по количеству удобств
 * @param ad
 * @param featuresSelected
 * @returns {number}
 */
const getFeaturesRunk = (ad, featuresSelected) => {
  let features = ad.offer.features;
  let runk = 0;

  for (let feature of featuresSelected) {
    if (features.includes(feature.value)) {
      runk++;
    }
  }
  return runk;
};

export {changeSelectedValue, disableForm, includeForm, getCoordinatesString, isEmptyValue, validateCapacityRooms, createMessageModal, showAlert, postingPhoto, getFeaturesRunk};
