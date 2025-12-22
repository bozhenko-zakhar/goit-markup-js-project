export const refs = {
    categoryList: document.querySelector('.categories-list'),
    productlist: document.querySelector('.products-list'),
    divNotFound: document.querySelector('.not-found'),
    loadMoreBtn: document.querySelector('.js-products-load-more'),
    loader: document.querySelector('.js-product-loader'),
    paginationList: document.querySelector('.products-pagination__list'),
    prevBtn: document.querySelector('.products-pagination__btn--prev'),
    nextBtn: document.querySelector('.products-pagination__btn--next'),
    paginationContainer: document.querySelector('.products-pagination-container'),
};
export const dataStorage = {
    animals: new Map()
}