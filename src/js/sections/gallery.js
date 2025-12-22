import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import renderSlides from '../untils/renders/gallery-render-images';
import rednerGallerySvges from '../untils/renders/gallery-render-svges';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';

renderSlides();
rednerGallerySvges();

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