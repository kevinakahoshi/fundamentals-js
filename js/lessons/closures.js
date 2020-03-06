export const closures = contentArea => {
  const headingElement = document.createElement('h1');
  headingElement.innerText = 'The closures function has run successfully';
  headingElement.classList.add('mount');
  contentArea.appendChild(headingElement);
}
