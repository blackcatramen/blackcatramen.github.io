
const swiper = new Swiper('.swiper', {
  loop: false,
  grid: {
    rows: 2,
    fill: 'row',
  },
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


