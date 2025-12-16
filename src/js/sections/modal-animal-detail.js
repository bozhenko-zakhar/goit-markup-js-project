import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getAnimalById } from "./modal-animal-detail-api";


export const refs = {
    backdrop: document.querySelector(".animal-detail-backdrop"),
}

document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("product-card__btn--learnMore")) return;
    
    const id = e.target.dataset.modalId;
    openAnimalModal(id);
});

async function openAnimalModal(id) {
    try {
        const animal = await getAnimalById(id);

        refs.backdrop.innerHTML = createMarkup(animal);
        refs.backdrop.classList.add("is-open");
    }
    catch {
        iziToast.error({
            message: "Щось пішло не так. Спробуйте ще раз пізніше.",
            position: "topRight",
        });
    }
    
}

function createMarkup({image, species, name, age, gender, description, healthStatus, behavior}) {
    return `<div class="container animal-detail-modal">
            <button type="button" aria-label="close button" class="animal-detail-close-btn">
                <svg class="animal-detail-close-svg" width="14" height="14">
                    <use href="../img/sprite.svg#icon-close"></use>
                </svg>
            </button>
            <div class="animal-detail-picture-wrap">
                <img src="${image}" alt="${species}" width="295" height="295" class="animal-detail-picture">
            </div>
            
            <div class="animal-detail-info-wrap">
                
                <p class="animal-detail-animal">${species}</p>
                <h3 class="animal-detail-headline">${name}</h3>
                <ul class="animal-detail-short-info">
                    <li class="animal-detail-descript-item">${age}</li>
                    <li class="animal-detail-descript-item">${gender}</li>
                </ul>
                <button type="button" data-btn="take-home" class="animal-detail-get-btn animal-detail-get-btn-top">Взяти
                    додому</button>
                <ul class="animal-detail-info">
                    <li class="animal-detail-info-item">
                        <span class="animal-detail-info-span">Опис:</span>
                        ${description}
                    </li>
                    <li class="animal-detail-info-item">
                        <span class="animal-detail-info-span">Здоров’я:</span>
                        ${healthStatus}
                    </li>
                    <li class="animal-detail-info-item">
                        <span class="animal-detail-info-span">Поведінка:</span>
                         ${behavior}
                    </li>
                </ul>
                <button type="button" data-btn="take-home" class="animal-detail-get-btn animal-detail-get-btn-botom">Взяти додому</button>
            </div>
        </div>`
}

refs.backdrop.addEventListener("click", (e) => {

    if (e.target === refs.backdrop || e.target.closest(".animal-detail-close-btn")) {
        refs.backdrop.classList.remove("is-open")
    }
    
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        refs.backdrop.classList.remove("is-open");
    }
})