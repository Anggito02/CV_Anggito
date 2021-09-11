// Navbar Animation

var nav = document.querySelector('nav');

window.addEventListener('scroll', function (event) {
    event.preventDefault();

    if (window.scrollY >= 508) {
        nav.style.backgroundColor = '#BBC8DD';
        nav.style.color = '#030824';
        nav.style.transitionDuration = '0.4s';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});

/* Parallax Effect Header */
window.addEventListener('scroll', function(event) {
    event.preventDefault();

    var yScroll = this.window.scrollY;
    var headWrap = this.document.querySelector('#head-par');

    headWrap.style.transform = 'translate(0px, '+ yScroll/6 +'%)'
})