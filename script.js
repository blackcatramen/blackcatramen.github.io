
const swiper = new Swiper('.swiper', {
  loop: false,
  grid: {
    rows: 2, // two rows of slides
    fill: 'row', // fills by row, not column
  },
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1, // 1 per row on very small screens
    },
    640: {
      slidesPerView: 2, // 2 per row on small to medium screens
    },
    1024: {
      slidesPerView: 3, // 3 per row on large screens
    }
  }
});


