const inputEl = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')
console.log(inputEl.value)

const inputChange = () => {
    spanEl.style.fontSize = `${inputEl.value}px`;
}

    inputEl.addEventListener('input', inputChange)