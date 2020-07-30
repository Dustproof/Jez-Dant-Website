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
const burgerLines = document.querySelectorAll('.burger-line');

window.onscroll = function() {
    var top = window.scrollY;
    if (top > 32) for(var i = 0; i < burgerLines.length; i++) {
        nav.classList.add('scrolled');
        navButton.classList.remove('light');
        burgerLines[i].classList.remove('light');
    } else for(var i = 0; i < burgerLines.length; i++) {
        nav.classList.remove('scrolled');
        navButton.classList.add('light');
        burgerLines[i].classList.add('light');
    }
}