const throttle = require('lodash.throttle');
const form = document.querySelector('form');
const email = document.querySelector(`[name="email"]`);
const message = document.querySelector(`[name="message"]`);
const submit = document.querySelector(`[type="submit"]`);

const emailValue = email.value;

const saveInformations = event => {
  const savedValue = [email.value, message.value];
  localStorage.setItem('feedback-form-state', JSON.stringify(savedValue));
};

form.addEventListener('keyup', throttle(saveInformations, 500));

if (localStorage.length !== 0) {
  const loadValue = localStorage.getItem('feedback-form-state');
  email.value = JSON.parse(loadValue)[0];
  message.value = JSON.parse(loadValue)[1];
}

const clearForm = event => {
  event.preventDefault();
  const sentValue = localStorage.getItem('feedback-form-state');
  localStorage.removeItem('feedback-form-state');
  form.reset();
  console.log(sentValue);
};

submit.addEventListener('click', clearForm);
