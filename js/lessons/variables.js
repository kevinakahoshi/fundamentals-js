export const variables = contentArea => {
  const initialHeading = document.createElement('h4');
  initialHeading.innerText = 'So what are variables?';
  initialHeading.classList.add('mount');

  const initialSubheading = document.createElement('h5');
  initialSubheading.innerText = 'You can think of them like this:';
  initialSubheading.classList.add('mount');

  const varPre = document.createElement('span');
  varPre.innerText = 'var';

  const varDefinition = document.createElement('p');
  varDefinition.innerText = `The var statement declares a variable, though you do not need to assign a value to the variable initially.`;
  initialHeading.classList.add('mount');

  const preBox = document.createElement('pre');
  preBox.innerText = 'var index = 0;\n\nvar isEditing = true;\n\nvar someString = "Hello, world."';
  preBox.classList.add('mount');

  contentArea.appendChild(initialHeading);
  contentArea.appendChild(varDefinition)
  contentArea.appendChild(initialSubheading);
  contentArea.appendChild(preBox);
}
