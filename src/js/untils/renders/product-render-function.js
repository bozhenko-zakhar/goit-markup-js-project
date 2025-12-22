import { refs } from '../product-refs';

export const renderCategories = (data) => {
    const markup = data
        .map(({ _id, name }) => `<li class="categories__item">
   <button class="categories__btn" data-category-id="${_id}" type="button">${name}</button>
 </li>
`)
        .join('');
    refs.categoryList.innerHTML = markup;
};
//======================================================================================
export const renderProducts = (data, shouldAppend = false) => {
    const markup = data
        .map(({ _id, image, species, name, categories, age, gender, behavior }) => {
                
            const categoriesMarkup = `
                    <ul class="product-card__categories">
                        ${categories.map(cat => `<li class="product-card__category">${cat.name}</li>`).join('')}
                    </ul>
                `;
            
            return `
            <li class="product-card" data-id="${_id}">
                <article class="product-card__body">
                
                <div class="product-card__image-wrapper">
                    <img class="product-card__image" src="${image}" alt="${species}" loading="lazy" width="392" height="309"/>
                </div>
                    
                    <p class="product-card__title">${species}</p>
                    <h3 class="product-card__name">${name}</h3>

                    ${categories.length ? categoriesMarkup : ''}
            
                    <ul class="product-card__meta">
                        <li class="product-card__meta-item product-card__meta-item--age">${age}</li>
                        <li class="product-card__meta-item product-card__meta-item--gender">${gender}</li>
                    </ul>
            
                    <p class="product-card__info">${behavior}</p>
                    <button class="product-card__btn product-card__btn--learnMore" data-modal-id=${_id} type="button">
                        Дізнатись більше
                    </button>
                </article>
            </li>`;
        })
        .join('');
    if (shouldAppend) {
        refs.productlist.insertAdjacentHTML('beforeend', markup);
    } else {
        refs.productlist.innerHTML = markup;
    }
};

export const renderPagination = (currentPage, totalPages) => {
    let markup = '';

    if (totalPages <= 1) {
        refs.paginationList.innerHTML = '';
        return;
    }

    if (totalPages <= 3) {
        for (let i = 1; i <= totalPages; i++) {
            const activeClass = i === currentPage
                ? 'products-pagination__btn--active'
                : '';

            markup += `
                <li class="products-pagination__item">
                    <button class="products-pagination__btn ${activeClass}"
                            data-page="${i}"
                            type="button">
                        ${i}
                    </button>
                </li>
            `;
        }
        refs.paginationList.innerHTML = markup;
        return;
    }
    const maxVisibleButtons = 3;

    if (currentPage > 2) {
        const activeClass = currentPage === 1 ? 'products-pagination__btn--active' : '';
        markup += `<li class="products-pagination__item">
            <button class="products-pagination__btn ${activeClass}" data-page="1" type="button">1</button>
        </li>`
    
        if (currentPage > 3) {
            markup += `<li class="products-pagination__item products-pagination__dots">
                    <span>...</span>
                </li>`;
        }
    }
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);

    if (endPage - startPage < 2) {
        if (startPage === 1) {
            endPage = Math.min(3, totalPages);
        } else if (endPage === totalPages) {
            startPage = Math.max(1, totalPages - 2);
        }
    }
    for (let i = startPage; i <= endPage; i++) {
        const activeClass = i === currentPage ? 'products-pagination__btn--active' : '';
        markup += `<li class="products-pagination__item">
                <button class="products-pagination__btn ${activeClass}" data-page="${i}" type="button">${i}</button>
            </li>`
    }
    if (currentPage < totalPages - 1) {
        if (currentPage < totalPages - 2) {
            markup += `<li class="products-pagination__item products-pagination__dots">
                    <span>...</span>
                </li>`;
        }
        const activeClass = currentPage === totalPages ? 'products-pagination__btn--active' :
            '';
        markup += `<li class="products-pagination__item">
                <button class="products-pagination__btn ${activeClass}" data-page="${totalPages}" 
                type="button">${totalPages}</button>
            </li>`;
    }
    refs.paginationList.innerHTML = markup;
        
};