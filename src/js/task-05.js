const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');


const addValueFromInput = () => {
    if (!inputEl.value) {
       return outputEl.textContent;
    }
    return outputEl.textContent = inputEl.value;
}



inputEl.addEventListener('input',addValueFromInput)