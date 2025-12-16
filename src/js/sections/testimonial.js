import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperWrapper = document.querySelector('.swiper-wrapper');

function renderStars(value) {
  const rating = parseFloat(value) || 0;              
  const rounded = Math.round(rating * 2) / 2;         
  const fullStars = Math.floor(rounded);
  const hasHalf = (rounded - fullStars) === 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  let starsMarkup = '';

  // Повні зірки
  for (let i = 0; i < fullStars; i++) {
    starsMarkup += `
      <div class="star">
        <svg class="star-icon">
          <use xlink:href="../img/sprite.svg#icon-star-filled"></use>
        </svg>
      </div>
    `;
  }

  // Половинка
  if (hasHalf) {
    starsMarkup += `
      <div class="star">
        <svg class="star-icon">
          <use xlink:href="../img/sprite.svg#icon-star-half"></use>
        </svg>
      </div>
    `;
  }

  // Порожні зірки
  for (let i = 0; i < emptyStars; i++) {
    starsMarkup += `
      <div class="star">
        <svg class="star-icon">
          <use xlink:href="../img/sprite.svg#icon-star-empty"></use>
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
    const feedbacks = Array.isArray(data) ? data.slice(0, 6) : data.feedbacks.slice(0, 6);
    if (feedbacks && feedbacks.length > 0) {
      renderSlides(feedbacks);
      initSwiper();
    }
  } catch (error) {
    console.error("Помилка завантаження відгуків:", error);
  }
}

function renderSlides(feedbacks) {
  const markup = feedbacks.map(fb => `
    <div class="swiper-slide">
      <div class="testimonial-card">
        ${renderStars(fb.rate)}
        <p class="testimonial__quote">${fb.description}</p>
        <p class="testimonial__author">${fb.author}</p>
      </div>
    </div>
  `).join('');

  swiperWrapper.innerHTML = markup;
}

function initSwiper() {
  new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      704: {
        slidesPerView: 2,
      }
    }
  });
}

getFeedbacks();