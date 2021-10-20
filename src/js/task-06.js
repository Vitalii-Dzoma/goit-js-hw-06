const inputEl = document.querySelector('#validation-input')



const lostFocusChange = () => {
    console.log("Потерял фокус")
    for (let i = 0; i < inputEl.value.length; i += 1) {
        console.log(inputEl.dataset.length)
        if (i > inputEl.dataset.length - 1) {
            inputEl.classList.add('invalid')
        }
        
        inputEl.classList.add('valid')
    }

}
    inputEl.addEventListener('blur', lostFocusChange)