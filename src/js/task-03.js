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
let result = "";
const imgElements = images
  .map(image => {
    const imgElement = document.createElement('img');
    const liElement = document.createElement('li');
    liElement.classList.add('item-img')
    imgElement.src = image.url;
    imgElement.alt = image.alt;
    imgElement.width = 300;
    result += `<li class="item-img"><img src="${image.url}" alt="${image.alt}" width="300"></li>`;

    return result;
  })


ulEl.insertAdjacentHTML("afterbegin", result)