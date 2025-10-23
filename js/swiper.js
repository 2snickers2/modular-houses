document.addEventListener("DOMContentLoaded", function () {
  let swiper; // переменная для хранения экземпляра
  const breakpoint = 850; // ширина экрана, при которой включается слайдер
  const swiperContainer = document.querySelector(".swiper");

  function initSwiper() {
    swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 10 },
        500: { slidesPerView: 2, spaceBetween: 10 },
      },
    });
  }

  function checkWindowSize() {
    if (window.innerWidth <= breakpoint) {
      if (!swiper) initSwiper(); // если Swiper ещё не создан — создаем
    } else {
      if (swiper) {
        swiper.destroy(true, true); // удаляем слайдер
        swiper = undefined;
      }
    }
  }

  // Проверяем при загрузке страницы
  checkWindowSize();

  // Проверяем при изменении размера окна
  window.addEventListener("resize", checkWindowSize);
});
