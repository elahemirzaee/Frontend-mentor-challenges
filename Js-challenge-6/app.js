// console.log('hello');
// alert('hellooo')

const hamburgerIcon = document.querySelector('.header__hamburger');
const navbar = document.querySelector('.navbar');
function toggleMenu() {
  navbar.classList.toggle('navbar--show');
  hamburgerIcon.classList.toggle('header__hamburger--close');
}
hamburgerIcon.addEventListener('click', toggleMenu);
