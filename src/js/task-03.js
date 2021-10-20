const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ulEl = document.querySelector('.gallery')
const imgElements = images
  .map(image => {
    const imgElement = document.createElement('img');
    const liElement = document.createElement('li')
    imgElement.src = image.url;
    imgElement.alt = image.alt;
    // `<li class="list-item"><img src: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt = "White and Black Long Fur Cat">${imgElement}</li>`;
    liElement.appendChild(imgElement)
    return liElement;
  })
  .join('')
  // const liElement = document.createElement('li')
  // liElement.appendChild(imgElement)
  // return liElement;

ulEl.insertAdjacentHTML("afterbegin", imgElements)