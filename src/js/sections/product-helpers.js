import { initProducts } from "./product-handlers";
import { refs } from "./product-refs";
// import { mobile, tablet, desctop } from "./product-refs"


const BREAKPOINTS = {
        mobile: 375,
        tablet: 768,
        desktop: 1440,
};
export const getScreenType = () => {
  const width = window.innerWidth;

  if (width >= 1440) return 'desktop';
  if (width >= 768) return 'tablet';
  return 'mobile';
};

export const getLimitByScreenType = (screenType) => {
    switch (screenType) {
        case 'desktop':
        return 9;
        case 'tablet':
        case 'mobile':
        default:
        return 8;
    }
}

// Без debounce буде 100+ запитів при resize
export const debounce = (fn, delay = 300) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

export const changeActiveBtn = (button) => {
  const allBtn = document.querySelectorAll(".categories__btn--active")
    allBtn.forEach(btn => btn.classList.remove('categories__btn--active'))
    button.classList.add('categories__btn--active')
}
export const smoothScroll = () => {
    const firstCard = document.querySelector(".product-card");
    if (!firstCard) return;

    const { height: cardHeight } = firstCard.getBoundingClientRect();

    window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth"
    });
}

export const clearProducts = () => {
    refs.productlist.innerHTML = '';
}
//===========================================================
export function showLoader() {
    refs.loader.classList.remove("hidden")
}
//===========================================================

export function hideLoader() {
    refs.loader.classList.add("hidden")
}
//==========================================
export function showLoadMoreButton() {
    refs.loadMoreBtn.classList.remove("hidden")
}

export function hideLoadMoreButton() {
    refs.loadMoreBtn.classList.add("hidden")
}

export function checkBtnStatus(currentPage, totalPages) {
    if (currentPage < totalPages) {
        showLoadMoreButton();
    } else {
        hideLoadMoreButton(); 
    }
}