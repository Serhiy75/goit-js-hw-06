const body = document.querySelector('body');
const span = document.querySelector('.color');
const btn = document.querySelector('.change-color');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener('click', () => {
  const hexColor = getRandomHexColor();
  body.style.backgroundColor = hexColor;
  span.textContent = hexColor;
});


















