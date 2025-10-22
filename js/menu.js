const burger = document.getElementById('burger');
const nav = document.getElementById('header__nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});
