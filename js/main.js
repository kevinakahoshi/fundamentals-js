import { closures } from './lessons/closures.js';
import { functions } from './lessons/functions.js';
window.lessons = { closures, functions };

const documentReady = callback => {
  document.readyState === 'interactive' || document.readyState === 'complete'
  ? callback()
  : document.addEventListener('DOMContentLoaded', callback);
}

const  initializeApp = () => {
  const contentArea = document.getElementsByClassName('content');
  const heading = document.createElement('h1');
  const headingText = 'This is a test';
  heading.innerText = headingText;
  contentArea[0].appendChild(heading);

  const topicForm = document.querySelector('#topic-form');
  const lessonSelect = document.querySelector('#lesson-select');

  createOptions(lessonSelect);

  topicForm.addEventListener('submit', event => {
    event.preventDefault();
    heading.innerText = window.lessons[lessonSelect.value]();
  });
}

const createOptions = lessonSelect => {
  for (const keys in window.lessons) {
    const option = document.createElement('option');
    const optionText = keys[0].toUpperCase() + keys.slice(1, keys.length);
    option.value = keys;
    option.innerHTML = optionText;
    lessonSelect.appendChild(option);
  }
}

documentReady(initializeApp);
