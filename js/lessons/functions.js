export const functions = contentArea => {
  const headingElement = document.createElement('h1');
  headingElement.innerText = 'The functions function has run successfully';
  headingElement.classList.add('mount');
  contentArea.appendChild(headingElement);
}
