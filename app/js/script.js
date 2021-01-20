//console.log("Hello world!");
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function () {
    console.log('click hamburger');
    if (header.classList.contains('open')) { //Closing the hamburger menu
        //remove it
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');

    }
    else { //opening the hamburger menu
        //add other class
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
});