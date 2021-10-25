const formEl = document.querySelector('.login-form')
const inEl = document.querySelectorAll('input')
const inputEmail = document.querySelector('[type="email"]')
const inputPassword = document.querySelector('[type="password"]')
let result = {};
const formSubmit = (event) => {
    event.preventDefault()

    const eMailEl = inputEmail.name;
    const passEl = inputPassword.name;
    result[eMailEl] = inputEmail.value;
    result[passEl] = inputPassword.value;
    if (!inputEmail.value || !inputPassword.value) {
            alert("Необходимо заполнить все поля!!!")        
    }
    else {
console.log(result)
    }
 formEl.reset()

}



    formEl.addEventListener('submit', formSubmit)