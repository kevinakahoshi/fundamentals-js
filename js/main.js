import { closures } from './lessons/closures.js';

document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    initializeApp();
  }
};

function initializeApp() {
  const contentArea = document.getElementsByClassName('content');
  const heading = document.createElement('h1');
  const headingText = 'This is a test';
  heading.innerText = headingText;
  contentArea[0].appendChild(heading);
  console.log(lessons);
}
