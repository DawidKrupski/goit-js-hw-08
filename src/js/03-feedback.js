const throttle = require('lodash.throttle');
const form = document.querySelector('form');
const email = document.querySelector(`[name="email"]`);
const message = document.querySelector(`[name="message"]`);
const submit = document.querySelector(`[type="submit"]`);

const emailValue = email.value;
let savedValue = [email.value, message.value];

const saveInformations = event => {
  savedValue = [email.value, message.value];
  localStorage.setItem('feedback-form-state', JSON.stringify(savedValue));
};

form.addEventListener('keyup', throttle(saveInformations, 500));

if (localStorage.getItem('feedback-form-state') !== null) {
  const loadValue = localStorage.getItem('feedback-form-state');
  email.value = JSON.parse(loadValue)[0];
  message.value = JSON.parse(loadValue)[1];
}

const clearForm = event => {
  savedValue = [email.value, message.value];
  event.preventDefault();
  console.log(savedValue);
  localStorage.removeItem('feedback-form-state');
  form.reset();
};

submit.addEventListener('click', clearForm);
