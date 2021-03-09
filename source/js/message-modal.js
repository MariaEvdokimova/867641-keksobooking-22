import {createMessageModal} from './util.js';

const showSuccessMessage = () => {
  const containerTemplate = document.querySelector('#success').content.querySelector('.success');
  const container = containerTemplate.cloneNode(true);

  createMessageModal(container);
};

const showErrorMessage = () => {
  const containerTemplate = document.querySelector('#error').content.querySelector('.error');
  const container = containerTemplate.cloneNode(true);
  const errorButton = container.querySelector('.error__button');

  createMessageModal(container, errorButton);
};

export {showSuccessMessage, showErrorMessage};
