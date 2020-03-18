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
  const spanTag = document.createElement('span');
  spanTag.classList.add('mount');

  const varText = 'var index = 0;';
  const boolText = 'var isEditing = true;';
  const stringText = 'var someString = "Hello, world."';

  const es5Syntax = [
    varText,
    boolText,
    stringText
  ];

  let currentIndex = 0;

  spanTag.innerText = es5Syntax[currentIndex];
  preBox.appendChild(spanTag);
  preBox.classList.add('mount');

  const nextButton = document.createElement('button');
  nextButton.innerText = 'What about booleans?'
  nextButton.classList.add('mount');
  nextButton.addEventListener('click', () => {
    if (currentIndex < 2) {
      currentIndex++;
    }
    switch (currentIndex) {
      case 1: {
        nextButton.innerText = 'How about a string?';
        break;
      }
      case 2: {
        nextButton.innerText = 'Nice! What\'s next?';
        break;
      }
    }
    spanTag.innerText = es5Syntax[currentIndex];
  });

  const elementsArray = [
    initialHeading,
    varDefinition,
    initialHeading,
    preBox,
    nextButton
  ];

  elementsArray.map(element => {
    contentArea.appendChild(element);
  });
}
