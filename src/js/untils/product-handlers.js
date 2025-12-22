import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

import { fetchAllProducts, fetchCategories, fetchProductsByCategory } from "./product-api";
import { renderCategories, renderProducts, renderPagination } from "./renders/product-render-function";
import {
    getScreenType, getLimitByScreenType, debounce,
    clearProducts, changeActiveBtn, smoothScroll, checkBtnStatus,
    showLoader,
    hideLoader,
    hideLoadMoreButton,
    updatePaginationButtons,
    hidePagination,
    showPagination,
    isMobile,
    showPaginationOrLoadMore,
    showLoadMoreButton,
} from "./product-helpers";
import { refs } from "./product-refs";

let currentScreenType = getScreenType();
let currentPage = 1;  
let activeCategory = 'all';
let totalPages;

export const initCategories = async () => {
    try {
        const categories = await fetchCategories();

        const allCategory = {
            _id: 'all',
            name: 'Всі',
        };
        const sorted = [...categories].sort((a, b) =>
            a._id.localeCompare(b._id));

        renderCategories([allCategory, ...sorted]);

        const firstBtn = document.querySelector('.categories__btn');
        if (firstBtn) {
            firstBtn.classList.add('categories__btn--active');
        }
    } catch (error) {
        console.log(error);
        iziToast.error({ message: 'Oops, something went wrong!' })
    }
};

export const handleResize = debounce(async () => {
    const newScreenType = getScreenType();
    if (newScreenType === currentScreenType) return;

    currentScreenType = newScreenType;
    
    showPaginationOrLoadMore();
    
}, 300);

window.addEventListener('resize', handleResize);

export const initProducts = async () => {
    clearProducts();
    showLoader();
    hidePagination();
    currentPage = 1;

    try {
        const limit = getLimitByScreenType(currentScreenType);
        const { animals, totalItems } = await fetchAllProducts(currentPage, limit);
        
        renderProducts(animals, false);
        totalPages = Math.ceil(totalItems / limit);
        
        checkBtnStatus(currentPage, totalPages);

        if (!isMobile()) {
            renderPagination(currentPage, totalPages); 
        }
        updatePaginationButtons(currentPage, totalPages);
        showPaginationOrLoadMore();
        checkBtnStatus(currentPage, totalPages);

    } catch (error) {
        console.log(error);
        iziToast.error({message: 'Oops, something went wrong!' })
    }
    finally {
        hideLoader();
    }
}

export const getProductsByCategory = async (e) => {
    if (e.target.nodeName !== 'BUTTON') return;
    
    activeCategory = e.target.dataset.categoryId;
    currentPage = 1;

    const limit = getLimitByScreenType(currentScreenType);
    
    clearProducts();
    changeActiveBtn(e.target);
    showLoader();
    hidePagination();

    try {
        if (activeCategory === 'all') {
            const { animals, totalItems } = await fetchAllProducts(currentPage, limit);  
            
            renderProducts(animals, false);
            totalPages = Math.ceil(totalItems / limit);
            checkBtnStatus(currentPage, totalPages)
        } else {
            const { animals, totalItems } = await fetchProductsByCategory({
                categoryId: activeCategory,
                page: currentPage,
                limit,
            });
            renderProducts(animals, false);
            totalPages = Math.ceil(totalItems / limit);
        }
        checkBtnStatus(currentPage, totalPages);

        if (!isMobile()) {
            renderPagination(currentPage, totalPages);
        }
        

        updatePaginationButtons(currentPage, totalPages);
        showPaginationOrLoadMore();
        smoothScroll();
        
    } catch (error){
        console.log(error);
        iziToast.error({message: 'Oops, something went wrong!' })
    } finally {
        hideLoader();
    }
}
refs.categoryList.addEventListener('click', getProductsByCategory);

refs.paginationList.addEventListener('click', async (e) => {
    if (e.target.nodeName !== 'BUTTON') return;

    e.target.blur();
    const newPage = Number(e.target.dataset.page);
    if (newPage === currentPage) return;

    currentPage = newPage;
    await loadPage();
});

refs.prevBtn.addEventListener('click', async (e) => {
    e.target.blur();
    if (currentPage === 1) return;
    currentPage -= 1;
    await loadPage();
});

refs.nextBtn.addEventListener('click', async (e) => {
    
    e.target.blur();
    if (currentPage === totalPages) return;
    currentPage += 1;
    await loadPage();
});

export const loadPage = async () => {
    if (isMobile()) return;

    clearProducts();
    showLoader();
    hidePagination();

    try {
        const limit = getLimitByScreenType(currentScreenType);

        if (activeCategory === 'all') {
            const { animals, totalItems } = await fetchAllProducts(currentPage, limit);
            renderProducts(animals, false);
            totalPages = Math.ceil(totalItems / limit);
        } else {
            const { animals, totalItems } = await fetchProductsByCategory({
                categoryId: activeCategory,
                page: currentPage,
                limit,
            });
            renderProducts(animals, false);
            totalPages = Math.ceil(totalItems / limit);
        }
        renderPagination(currentPage, totalPages);
        updatePaginationButtons(currentPage, totalPages);
        showPagination();
    } catch (error) {
        console.log(error);
        iziToast.error({ message: 'Oops, something went wrong!' });
    } finally {
        hideLoader();
    }
};


refs.loadMoreBtn.addEventListener('click', async () => {
    
    currentPage += 1;
    const limit = getLimitByScreenType(currentScreenType);
    showLoader();
    hideLoadMoreButton();
    try {
        if (activeCategory === 'all') {
            const { animals } = await fetchAllProducts(currentPage, limit);
            renderProducts(animals, true);
            smoothScroll();
            checkBtnStatus(currentPage, totalPages);
        } else {
            const { animals } = await fetchProductsByCategory({
                categoryId: activeCategory,
                page: currentPage,
                limit,
            });
            
            renderProducts(animals, true);
            smoothScroll();
            checkBtnStatus(currentPage, totalPages);
        }
        renderPagination(currentPage, totalPages);
    } catch (error) {
        console.log(error);
        iziToast.error({ message: 'Oops, something went wrong!' });
    } finally {
        hideLoader();
    }
});