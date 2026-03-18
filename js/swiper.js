document.addEventListener("DOMContentLoaded", function () {
  let swiper; 
  const breakpoint = 850; 
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
      if (!swiper) initSwiper(); 
    } else {
      if (swiper) {
        swiper.destroy(true, true);
        swiper = undefined;
      }
    }
  }

  checkWindowSize();

  window.addEventListener("resize", checkWindowSize);
});
