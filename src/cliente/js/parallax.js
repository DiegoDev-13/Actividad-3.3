let parallax = document.querySelector('.nosotros-banner');
let titulo = document.querySelector('.text-nosotros-banner');

function scrollParallax () {
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = 'translateY(' + scrollTop * -0.5 + 'px)';
    titulo.style.transform = 'translateY(' + scrollTop * 0.3 + 'px)';
};

window.addEventListener('scroll', scrollParallax);

module.exports = parallax;