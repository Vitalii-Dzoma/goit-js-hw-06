const formEl = document.querySelector('.login-form')

let result = {};
const formSubmit = (event) => {
    event.preventDefault()
    
  
    for (let el of formEl.elements) {
        if (el.type === "submit") {
   continue
}
        const eMailEl = el.name;
        result[eMailEl] = el.value;     
        if (!el.value) {
            alert("Необходимо заполнить все поля!!!")
          
        }
        console.log(result)
}
       

 formEl.reset()

}



    formEl.addEventListener('submit', formSubmit)