
// const swiper = new Swiper('.swiper', {
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//     },
// });

const swiper = new Swiper('.swiper', {
  loop: false, // turn off loop when using multi-rows (optional)
  slidesPerView: 2, // how many slides per row
  grid: {
    rows: 2, // how many rows
    fill: 'row', // can also use 'column' if needed
  },
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

