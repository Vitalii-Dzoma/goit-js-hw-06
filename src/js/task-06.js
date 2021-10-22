const inputEl = document.querySelector('#validation-input')



const lostFocusChange = () => {
    console.log("Потерял фокус")
    for (let i = 0; i < inputEl.value.length; i += 1) {
        console.log(inputEl.dataset.length - 1)
        console.log(i)
        if ( inputEl.value.length - 1 === inputEl.dataset.length - 1) {
            return inputEl.classList.remove('invalid'), inputEl.classList.add('valid');
        }
      
      return inputEl.classList.add('invalid'), inputEl.classList.remove('valid')  
    }

}
    inputEl.addEventListener('blur', lostFocusChange)