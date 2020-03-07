export const variables = contentArea => {
  const initialHeading = document.createElement('h4');
  initialHeading.innerText = 'So what are variables?';
  initialHeading.classList.add('mount');

  const initialSubheading = document.createElement('h5');
  initialSubheading.innerText = 'You can think of them like this:';
  initialSubheading.classList.add('mount');

  const preBox = document.createElement('pre');
  preBox.innerText = 'var index = 1;';
  preBox.classList.add('mount');

  contentArea.appendChild(initialHeading);
  contentArea.appendChild(initialSubheading);
  contentArea.appendChild(preBox);
}
