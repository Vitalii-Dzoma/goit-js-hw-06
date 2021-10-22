function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divList = document.querySelector('#boxes')
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const inputEl = document.querySelector('input')
let acc = 30;
const createBoxes = function (amount) {
  amount = inputEl.value;
  for (let i = 0; i < amount; i+=1) {
    let divCreate = document.createElement('div')
    divCreate.style.width = `${acc += 10}px`;
    divCreate.style.height = `${acc}px`;
    divCreate.style.backgroundColor = getRandomHexColor();
    console.log(divCreate)
    divList.append(divCreate)
  }

}
btnCreate.addEventListener('click', createBoxes)
const destroyBoxes = function () {
  divList.innerHTML = '';
  console.log(divList.innerHTML)
}

btnDestroy.addEventListener('click', destroyBoxes)