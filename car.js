let button = document.querySelector('button');
let carimage = document.querySelector('.carbody');

carimage.setAttribute("class" , "carbody");

button.addEventListener('click', () => {

const red = Math.floor(Math.random() * 256);
const green =  Math.floor(Math.random() * 256);
const blue =  Math.floor(Math.random() * 256);

const rgb =  `rgb(${red} , ${green} , ${blue})`;
carimage.style.background = rgb ;

carimage.setAttribute("class" , "carbodyVisible");

const span = document.querySelector('span');
span.innerHTML = ` rgb(${red} , ${green} , ${blue}) `;

});



