import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import sprite from "../../img/sprite.svg";
const swiperWrapperTestimonials = document.querySelector('.testimonials-wrapper');

function renderStars(value) {
  const rating = parseFloat(value) || 0;
  const rounded = Math.floor(rating) + (rating % 1 >= 0.5 ? 0.5 : 0);
  let starsMarkup = '';

  for (let i = 1; i <= 5; i++) {
    let icon = 'icon-star-outline';
    let starClass = 'outline';

    if (i <= Math.floor(rounded)) {
      icon = 'icon-star-filled';
      starClass = 'filled';
    } else if (i === Math.ceil(rounded) && rounded % 1 !== 0) {
      icon = 'icon-star-half';
      starClass = 'half';
    }

    starsMarkup += `
      <div class="star ${starClass}">
        <svg class="star-icon">
          <use href="${sprite}#${icon}"></use>
        </svg>
      </div>
    `;
  }

  return `<div class="rating">${starsMarkup}</div>`;
}

async function getFeedbacks() {
  try {
    const res = await fetch('https://paw-hut.b.goit.study/api/feedbacks');
    const data = await res.json();

    const feedbacks = Array.isArray(data)
    ?data.slice(1, 7)
    :data.feedbacks.slice(1, 7);

    if (feedbacks.length) {
      renderSlides(feedbacks);
      initSwiper();
    }
  } catch (error) {
    console.error('Помилка завантаження відгуків:', error);
  }
}

function renderSlides(feedbackSection) {
  if (!swiperWrapperTestimonials) return;
  swiperWrapperTestimonials.innerHTML = feedbackSection
    .map(
      fb => `
        <div class="swiper-slide swiper-slide-testimonial">
          <div class="testimonial-card">
            ${renderStars(fb.rate)}
            <p class="testimonial-quote">${fb.description}</p>
            <p class="testimonial-author">${fb.author}</p>
          </div>
        </div>
      `
    )
    .join('');
}

function initSwiper() {
  const section = document.querySelector('.section.testimonial');
  if (!section) return;

  const swiperEl = section.querySelector('.testimonials-swiper');
  const nextBtn = section.querySelector('.js-testimonials-next');
  const prevBtn = section.querySelector('.js-testimonials-prev');
  const paginationEl = section.querySelector('.testimonials-pagination');

  const prevBtnUse = section.querySelector('.js-testimonials-prev svg use');
  const nextBtnUse = section.querySelector('.js-testimonials-next svg use');
  if (prevBtnUse) prevBtnUse.setAttribute('href', `${sprite}#icon-arrow_back`);
  if (nextBtnUse) nextBtnUse.setAttribute('href', `${sprite}#icon-arrow_forward`);

  const swiper = new Swiper(swiperEl, {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 32,
    loop: false,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
      disabledClass: 'swiper-button-isNotActive',
    },
keyboard: {
      enabled: true,        
      onlyInViewport: true,  
      pageUpDown: true,      
    },
    pagination: {
      el: paginationEl,
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerGroup: 1,
        slidesPerView: 2,
        spaceBetween: 32,
    }},
    on: {
      slideChange: function () {
        const disabledClass = 'swiper-button-isNotActive';
        
        if (this.isBeginning) {
          prevBtn.classList.add(disabledClass);
        } else {
          prevBtn.classList.remove(disabledClass);
        }

        if (this.isEnd) {
          nextBtn.classList.add(disabledClass);
        } else {
          nextBtn.classList.remove(disabledClass);
        }
      },
    }
});
swiper.emit('slideChange');
}
document.addEventListener('DOMContentLoaded', () => {
getFeedbacks();
})

