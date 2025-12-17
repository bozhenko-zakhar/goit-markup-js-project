import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Keyboard],
  slidesPerView: 1,
  spaceBetween: 16,
  speed: 500,
  grabCursor: true,
  loop: false,

  navigation: {
    nextEl: '.swiper .swiper-button-next',
    prevEl: '.swiper .swiper-button-prev',
  },

  pagination: {
    el: '.swiper .swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
});
