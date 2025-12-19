import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperWrapper = document.querySelector('.swiper-wrapper');

function renderStars(value) {
  const rating = parseFloat(value) || 0;
  const rounded = Math.floor(rating) + (rating % 1 >= 0.5 ? 0.5 : 0);
  let starsMarkup = '';

  for (let i = 1; i <= 5; i++) {
    let icon = 'icon-star-outline'; 
    let starClass = ''; 

    if (i <= Math.floor(rounded)) {
      icon = 'icon-star-filled';
      starClass = 'filled';
    } else if (i === Math.ceil(rounded) && rounded % 1 !== 0) {
      icon = 'icon-star-half';
      starClass = 'half';
    }

    starsMarkup += `
      <div class="star">
        <svg class="star-icon">
          <use href="../img/sprite.svg#${icon}"></use>
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
        <p class="testimonial-quote">${fb.description}</p>
        <p class="testimonial-author">${fb.author}</p>
      </div>
    </div>
  `).join('');

  swiperWrapper.innerHTML = markup;
}

function initSwiper() {
  new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 32,
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