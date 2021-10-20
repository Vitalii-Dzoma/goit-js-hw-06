function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const outputEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
const body = document.querySelector('body')

btnEl.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor()
  outputEl.textContent = getRandomHexColor();
})