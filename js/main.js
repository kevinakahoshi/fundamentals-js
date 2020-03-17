import { closures } from './lessons/closures.js';
import { functions } from './lessons/functions.js';
import { variables } from './lessons/variables.js';
window.lessons = {
  variables,
  functions,
  closures
};

const documentReady = callback => {
  document.readyState === 'interactive' || document.readyState === 'complete'
  ? callback()
  : document.addEventListener('DOMContentLoaded', callback);
}

const  initializeApp = () => {
  const header = document.querySelector('.header');
  const contentArea = document.querySelector('.content');
  const topicForm = document.querySelector('.topic-form');
  const lessonSelect = document.querySelector('.lesson-select');
  const heading = document.createElement('h1');
  const headingText = 'Select a lesson from the dropdown above to get started.';
  heading.classList.add('testing');
  heading.innerText = headingText;
  contentArea.appendChild(heading);

  window.addEventListener('scroll', () => {
    parallaxImage(header);
  }, false);

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
  const childNodes = Array.from(mainContainer.children);
  childNodes.forEach(element => {
    element.classList.remove('mount');
    element.classList.add('unmount');
  });
  setTimeout(() => {
    mainContainer.innerHTML = '';
  }, 300);
}

const parallaxImage = header => {
  header.style.backgroundPositionY = `${20 + window.pageYOffset * .025}%`;
}

documentReady(initializeApp);
