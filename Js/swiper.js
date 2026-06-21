const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  loopedSlides: 4,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    480: {
      slidesPerView: 2,
      spaceBetween: 20,
      
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }
});