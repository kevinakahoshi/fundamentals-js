import { closures } from './lessons/closures.js';
import { functions } from './lessons/functions.js';

window.lessons = { closures, functions };

const documentReady = callback => {
  document.readyState === 'interactive' || document.readyState === 'complete' ? callback() : document.addEventListener('DOMContentLoaded', callback);
}

documentReady(initializeApp);

function initializeApp() {
  const contentArea = document.getElementsByClassName('content');
  const heading = document.createElement('h1');
  const headingText = 'This is a test';
  heading.innerText = headingText;
  contentArea[0].appendChild(heading);

  const topicForm = document.querySelector('#topic-form');
  const lessonSelect = document.querySelector('#lesson-select');

  createOptions(lessonSelect);

  topicForm.addEventListener('submit', function(event) {
    event.preventDefault();
    window.lessons[lessonSelect.value]();
  });
}

function createOptions(lessonSelect) {
  for (const keys in window.lessons) {
    const option = document.createElement('option');
    const optionText = window.lessons[keys].toString().split(' ')[1][0].toUpperCase() + window.lessons[keys].toString().split(' ')[1].slice(1, window.lessons[keys].length - 2);
    option.value = window.lessons[keys].toString().split(' ')[1].slice(0, window.lessons[keys].length - 2);
    option.innerHTML = optionText;
    lessonSelect.appendChild(option);
  }
}
