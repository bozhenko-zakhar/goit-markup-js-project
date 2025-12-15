import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'css-star-rating/css/star-rating.css';


const swiperWrapper = document.querySelector('.swiper-wrapper');

function renderStars(value) {
  const rating = parseFloat(value);
  const rounded = Math.round(rating * 2) / 2;
  const integerPart = Math.floor(rounded);
  const hasHalf = rounded % 1 !== 0;

  return `
    <div class="rating star-icon color-default value-${integerPart} ${hasHalf ? 'half' : ''}">
      <div class="star-container">
        ${Array(5).fill(`
          <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
          </div>`).join('')}
      </div>
    </div>`;
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
         <div class="js-testimonials-star">${renderStars(fb.rate)}</div>
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
