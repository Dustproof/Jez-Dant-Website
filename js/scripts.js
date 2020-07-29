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

window.onscroll = function() {
    var top = window.scrollY;
    console.log(top);
    if (top > 32) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}