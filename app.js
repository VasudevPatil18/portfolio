

const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navbar.classList.remove('active');
    });
});


window.addEventListener('scroll', () => {
    document.querySelector('.header').style.background = window.scrollY > 50
        ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.9)';
});
