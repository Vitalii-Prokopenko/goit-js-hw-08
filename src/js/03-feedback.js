import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const FORM_STATE_STORAGE_KEY = 'feedback-form-state';

let formSavedData = {};

console.log(localStorage.getItem(FORM_STATE_STORAGE_KEY));

if (localStorage.getItem(FORM_STATE_STORAGE_KEY)) {
  formSavedData = JSON.parse(localStorage.getItem(FORM_STATE_STORAGE_KEY));

  form.elements.email.textContent = formSavedData.emailInputValue;
  form.elements.message.textContent = formSavedData.messageInputValue;
}
console.log(formSavedData);

const handleInput = event => {
  const {
    elements: { email, message },
  } = event.currentTarget;

  formSavedData.emailInputValue = email.value;
  formSavedData.messageInputValue = message.value;

  console.log(formSavedData);

  localStorage.setItem(FORM_STATE_STORAGE_KEY, JSON.stringify(formSavedData));

  //   const SaveData = formSavedData => {
  //     console.log(1);
  //     localStorage.setItem(FORM_STATE_STORAGE_KEY, JSON.stringify(formSavedData));
  //   };

  //   myThrottle(formSavedData => {
  //     console.log(1);
  //     localStorage.setItem(FORM_STATE_STORAGE_KEY, JSON.stringify(formSavedData));
  //   }, 500);
  //   console.log(localStorage.getItem(FORM_STATE_STORAGE_KEY));
};

const handleSubmit = event => {
  event.preventDefault();
  console.log(formSavedData);
  localStorage.setItem(FORM_STATE_STORAGE_KEY, '');
  form.elements.email.textContent = '';
  form.elements.message.textContent = '';
};

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
