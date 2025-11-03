const swiper = new Swiper('.swiper', {
  direction: 'horizontal', // ou 'vertical' se preferir
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 3000, // muda a cada 3 segundos
    disableOnInteraction: false, // continua mesmo se clicar
  },
});
