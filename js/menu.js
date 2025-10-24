
  const burger = document.getElementById('burger');
  const nav = document.getElementById('header__nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('lock'); 
  });

  // Закрытие меню при клике на ссылку
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      nav.classList.remove('active');
      document.body.classList.remove('lock');
    });
  });

