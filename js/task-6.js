function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
  const baseSize = 30;
  let boxesHTML = '';

  for (let i = 0; i < amount; i++) {
    const width = baseSize + i * 10;
    const height = baseSize + i * 10;
    const color = getRandomHexColor();
    boxesHTML += `<div style="width: ${width}px; height: ${height}px; background-color: ${color};"></div>`;
  }

  boxesContainer.innerHTML = boxesHTML;
}

function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const input = document.querySelector('#controls input');
  const amount = Number(input.value);
  
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
