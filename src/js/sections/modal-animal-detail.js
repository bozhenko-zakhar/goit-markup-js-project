import { dataStorage } from "../untils/product-refs";
import { openModal } from "./adopt-modal";
import sprite from "../../img/sprite.svg";


const refs = {
    backdrop: document.querySelector(".animal-detail-backdrop"),
}

document.addEventListener("click", (e) => {
    const moreInformationBtn = e.target.closest(".product-card__btn--learnMore")
    if (!moreInformationBtn) return;
    
    const id = moreInformationBtn.dataset.modalId;
    openAnimalModal(id);
});

function openAnimalModal(id) {
    const animal = dataStorage.animals.get(id);

    if (!animal) return;

    refs.backdrop.innerHTML = createMarkup(animal);
    refs.backdrop.classList.add("is-open");

    document.body.classList.add("not-scroll");


		refs.dataBtn = document.querySelector("[data-btn]");

		refs.dataBtn.addEventListener("click", () => {
			openModal(id);
      closeAnimalModal();
		})
}

function createMarkup({image, species, name, age, gender, description, healthStatus, behavior}) {
	return (`
		<div class="animal-detail-modal">
			<button type="button" aria-label="close button" class="animal-detail-close-btn">
					<svg class="animal-detail-close-svg" width="32" height="32">
							<use href="${sprite}#icon-close"></use>
					</svg>
			</button>
			<div class="animal-detail-picture-wrap">
					<img src="${image}" alt="${species}" width="295" height="295" class="animal-detail-picture">
			</div>
		
			<div class="animal-detail-info-wrap">
				<div class="animal-detail-animal-preview">
					<p class="animal-detail-animal">${species}</p>
					<h3 class="animal-detail-headline">${name}</h3>
					<ul class="animal-detail-short-info">
							<li class="animal-detail-descript-item">${age}</li>
							<li class="animal-detail-descript-item">${gender}</li>
					</ul>
				</div>

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

				<button type="button" data-btn="take-home" class="animal-detail-get-btn">Взяти додому</button>
			</div>
		</div>
`)
}

export function closeAnimalModal() {
    refs.backdrop.classList.remove("is-open");
    document.body.classList.remove("not-scroll");
};

refs.backdrop.addEventListener("click", (e) => {

    if (e.target === refs.backdrop || e.target.closest(".animal-detail-close-btn")) {
        closeAnimalModal();
    };
    
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeAnimalModal();
    };
});