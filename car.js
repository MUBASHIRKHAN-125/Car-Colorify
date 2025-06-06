let button = document.querySelector('button');
let carimage = document.querySelector('.carbody');

button.addEventListener('click', () => {

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const rgb = `rgb(${red} , ${green} , ${blue})`;
    carimage.style.background = rgb;

    // carimage.style.display = 'none';
   


    const span = document.querySelector('span');
    span.innerHTML = ` rgb(${red} , ${green} , ${blue}) `;

});



