import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';

new Swiper('.gallerySwiper', {
  modules: [Navigation, Pagination, Keyboard],
  slidesPerView: 1,
  spaceBetween: 16,
  speed: 500,
  grabCursor: true,
  loop: false,

  navigation: {
    nextEl: '.gallerySwiper .swiper-button-next',
    prevEl: '.gallerySwiper .swiper-button-prev',
  },

  pagination: {
    el: '.gallerySwiper .swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
});
