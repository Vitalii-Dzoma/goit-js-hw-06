
const liItemElems = document.querySelectorAll(".item");
const textElem = document.querySelectorAll("h2");
const ulElems = document.querySelectorAll("h2 ~ ul")
console.log(`Number of categories : ${liItemElems.length}`)
const cat = document.querySelectorAll('#categories > li')
cat.forEach(el => {
 console.log('Category: ' + el.querySelector('h2').textContent)
 console.log('Elements: ' + el.querySelectorAll('li').length)
})


