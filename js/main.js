import { closures } from './lessons/closures.js';
import { functions } from './lessons/functions.js';
window.lessons = { closures, functions };

const documentReady = callback => {
  document.readyState === 'interactive' || document.readyState === 'complete'
  ? callback()
  : document.addEventListener('DOMContentLoaded', callback);
}

const  initializeApp = () => {
  const contentArea = document.querySelector('.content');
  const topicForm = document.querySelector('#topic-form');
  const lessonSelect = document.querySelector('#lesson-select');
  const heading = document.createElement('h1');
  heading.classList.add('testing');
  const headingText = 'Select a lesson from the dropdown above to get started.';
  heading.innerText = headingText;
  contentArea.appendChild(heading);

  createOptions(lessonSelect);

  topicForm.addEventListener('submit', event => {
    event.preventDefault();
    destroyDOM(contentArea);
    setTimeout(() => {
      window.lessons[lessonSelect.value](contentArea);
    }, 300);
  });
}

const createOptions = lessonSelect => {
  for (const keys in window.lessons) {
    const option = document.createElement('option');
    const optionText = keys[0].toUpperCase() + keys.slice(1);
    option.value = keys;
    option.innerHTML = optionText;
    lessonSelect.appendChild(option);
  }
}

const destroyDOM = mainContainer => {
  mainContainer.children[0].classList.remove('mount');
  mainContainer.children[0].classList.add('unmount');
  setTimeout(() => {
    mainContainer.innerHTML = '';
  }, 300);
}

documentReady(initializeApp);
