
document.querySelectorAll('.section-questions__item').forEach(item => {
  const btn = item.querySelector('.section-questions__btn');
  btn.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

