document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    initializeApp();
  }
};

function initializeApp() {
  const contentArea = document.getElementsByClassName('main');
  const heading = document.createElement('h1');
  const headingText = 'This is a test';
  heading.innerText = headingText;
  contentArea[0].appendChild(heading);
}
