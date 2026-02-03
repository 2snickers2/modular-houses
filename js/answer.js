
document.querySelectorAll('.section-questions__item').forEach(item => {
  const btn = item.querySelector('.section-questions__text');
  btn.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

