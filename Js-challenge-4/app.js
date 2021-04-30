
const header = document.querySelector('header');
const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.navIcon');
const hamburger = document.querySelector('#hamburger');
const bg = document.querySelector('.hidden');
const bgOne = document.querySelector('.show');

navToggle.addEventListener('click',() => {
  // header.style.background = 'black';
  nav.classList.toggle('open');
  navIcon.forEach(icon => {
    icon.classList.toggle('hidden');
  });
});

window.addEventListener('resize', () => {
  // alert('fdv')
  if(document.body.clientWidth > 720) {
    header.style.background = 'transparent';
    nav.classList.remove('open');
    navIcon.forEach(icon => {
      icon.classList.add('hidden');
    });
    hamburger.classList.remove('hidden');
  }
});

bgOne.addEventListener('click', () => {
  header.style.background = 'black';
});

bg.addEventListener('click', () => {
  header.style.background = 'transparent';
});
