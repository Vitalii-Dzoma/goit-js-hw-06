let counterValue = 0;
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const counterChange = document.querySelector('#value')



const increaseFn = () => {
    counterValue += 1;
    counterChange.textContent = counterValue;
    return counterChange;
}
const decreaseFn = () => {
    counterValue -= 1;
    counterChange.textContent = counterValue;
    return counterChange;
}




btnIncrement.addEventListener("click", increaseFn)
btnDecrement.addEventListener("click",decreaseFn)