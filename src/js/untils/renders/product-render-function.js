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
export const renderProducts = (data) => {
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
    refs.productlist.insertAdjacentHTML('beforeend', markup);
};