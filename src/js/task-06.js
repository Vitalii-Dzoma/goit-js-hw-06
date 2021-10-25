const inputEl = document.querySelector('#validation-input')



const lostFocusChange = () => {
        if ( inputEl.value.length - 1 === inputEl.dataset.length - 1) {
            return inputEl.classList.remove('invalid'), inputEl.classList.add('valid');
        }  
      return inputEl.classList.add('invalid'), inputEl.classList.remove('valid')  

}
    inputEl.addEventListener('blur', lostFocusChange)