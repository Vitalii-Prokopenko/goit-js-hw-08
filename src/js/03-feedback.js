import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const FORM_STATE_STORAGE_KEY = 'feedback-form-state';

let formSavedData = {
  email: '',
  message: '',
};

if (localStorage.getItem(FORM_STATE_STORAGE_KEY)) {
  formSavedData = JSON.parse(localStorage.getItem(FORM_STATE_STORAGE_KEY));

  form.elements.email.value = formSavedData.email;
  form.elements.message.value = formSavedData.message;
}

// Function to handle input events

const handleInput = event => {
  const {
    elements: { email, message },
  } = event.currentTarget;

  formSavedData.email = email.value;
  formSavedData.message = message.value;

  localStorage.setItem(FORM_STATE_STORAGE_KEY, JSON.stringify(formSavedData));

  // const saveInLocalStorage = () => {
  //   localStorage.setItem(FORM_STATE_STORAGE_KEY, JSON.stringify(formSavedData));
  // };
  // throttle(saveInLocalStorage, 2000);
};

// Function to handle submit event

const handleSubmit = event => {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  console.log(formSavedData);

  localStorage.removeItem(FORM_STATE_STORAGE_KEY);

  email.value = '';
  message.value = '';
};

form.addEventListener('input', throttle(handleInput, 2000));
// form.addEventListener('input', handleInput);

form.addEventListener('submit', handleSubmit);
