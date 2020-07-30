// Nav Slider

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-menu');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-menu-active');
    });
}

navSlide();


// Nav Scroller

const nav = document.querySelector('nav');
const navButton = document.getElementById('cv-button')
const burgerLines = document.querySelector('.burger-line');

window.onscroll = function() {
    var top = window.scrollY;
    console.log(top);
    if (top > 32) {
        nav.classList.add('scrolled');
        navButton.classList.remove('light');
        burgerLines.classList.remove('light');
    } else {
        nav.classList.remove('scrolled');
        navButton.classList.add('light');
        burgerLines.classList.add('light');
    }
}