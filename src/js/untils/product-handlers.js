import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

import { fetchAllProducts, fetchCategories, fetchProductsByCategory } from "./product-api";
import { renderCategories, renderProducts } from "./renders/product-render-function";
import {
    getScreenType, getLimitByScreenType, debounce, clearProducts, changeActiveBtn, smoothScroll, checkBtnStatus,
    showLoader,
    hideLoader,
    hideLoadMoreButton
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

        renderCategories([allCategory, ...categories]);

        const firstBtn = document.querySelector('.categories__btn');
        if (firstBtn) {
            firstBtn.classList.add('categories__btn--active');
        }
    } catch (error) {
        console.log(error);
        iziToast.error({ message: 'Oops, something went wrong!' })
    }
};
    // ===============Прослуховувач resize=============
export const handleResize = debounce(async () => {
    const newScreenType = getScreenType();
    if (newScreenType === currentScreenType) return;

    currentScreenType = newScreenType;
    // currentPage = 1;

    // await initProducts();
}, 300);

window.addEventListener('resize', handleResize);

// =============================================================//
export const initProducts = async () => {
    clearProducts();
    showLoader();
    try {
        const limit = getLimitByScreenType(currentScreenType);
        const { animals, totalItems } = await fetchAllProducts(currentPage, limit);
        
        renderProducts(animals);
        totalPages = Math.ceil(totalItems / limit);
        
        checkBtnStatus(currentPage, totalPages);

    } catch (error) {
        console.log(error);
        iziToast.error({message: 'Oops, something went wrong!' })
    }
    finally {
        hideLoader();
    }
}
// ==============================================================

export const getProductsByCategory = async (e) => {
    if (e.target.nodeName !== 'BUTTON') return;
    
    activeCategory = e.target.dataset.categoryId;
    currentPage = 1;

    const limit = getLimitByScreenType(currentScreenType);
    
    clearProducts();
    changeActiveBtn(e.target);
    showLoader();
    hideLoadMoreButton();
    try {
        if (activeCategory === 'all') {
            const { animals, totalItems } = await fetchAllProducts(currentPage, limit);  
            
            renderProducts(animals);
            totalPages = Math.ceil(totalItems / limit);
            
            checkBtnStatus(currentPage, totalPages);
        } else {
            const { animals, totalItems } = await fetchProductsByCategory({
                categoryId: activeCategory,
                page: currentPage,
                limit,
            });
            renderProducts(animals);
            
            totalPages = Math.ceil(totalItems / limit);
            checkBtnStatus(currentPage, totalPages);
        }
        
    } catch (error){
        console.log(error);
        iziToast.error({message: 'Oops, something went wrong!' })
    } finally {
        hideLoader();
    }
}
refs.categoryList.addEventListener('click', getProductsByCategory);

// ======================pagination===================//

refs.loadMoreBtn.addEventListener('click', async () => {
    
    currentPage += 1;
    const limit = getLimitByScreenType(currentScreenType);
    showLoader();
    hideLoadMoreButton();
    try {
        if (activeCategory === 'all') {
            const { animals } = await fetchAllProducts(currentPage, limit);
                
            renderProducts(animals);
            smoothScroll();
            checkBtnStatus(currentPage, totalPages);
        } else {
            const { animals } = await fetchProductsByCategory({
                categoryId: activeCategory,
                page: currentPage,
                limit,
            });
            if (animals.length === 0) {
                refs.divNotFound.classList.add('not-found--visible');
            }
            renderProducts(animals);
            smoothScroll();
            checkBtnStatus(currentPage, totalPages);
        }
        
    } catch (error) {
        console.log(error);
        iziToast.error({ message: 'Oops, something went wrong!' });
    } finally {
        hideLoader();
    }
});