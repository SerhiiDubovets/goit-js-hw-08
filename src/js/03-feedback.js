import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const KEY_INPUT = 'feedback-form-state';

populateTextarea();

const formDate = JSON.parse(localStorage.getItem(KEY_INPUT)) || {};

form.addEventListener('submit', onFormSabmit);
form.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('input', e => {
  formDate[e.target.name] = e.target.value;
  console.dir(formDate);
});

function onFormSabmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(KEY_INPUT);
}

function onTextareaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(KEY_INPUT, JSON.stringify(formDate));
  console.log(message);
}

function populateTextarea() {
  const saveMessage = localStorage.getItem(KEY_INPUT);
  const parsKey = JSON.parse(saveMessage);
  if (saveMessage) {
    textarea.value = parsKey.message || '';
    input.value = parsKey.email || '';
  }
}
