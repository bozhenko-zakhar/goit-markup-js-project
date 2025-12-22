import sprite from "../../img/sprite.svg"

const galleryNavBtn = document.querySelector(".galleryNavBtn");

const markup = `
	<button
		class="swiper-button-prev galleryBtn"
		type="button"
		aria-label="previous"
	>
		<svg
			class="gallery-btn__icon"
			width="24"
			height="24"
			aria-hidden="true"
		>
			<use href="${sprite}#icon-arrow_back"></use>
		</svg>
	</button>

	<button
		class="swiper-button-next galleryBtn"
		type="button"
		aria-label="next"
	>
		<svg
			class="gallery-btn__icon"
			width="24"
			height="24"
			aria-hidden="true"
		>
			<use href="${sprite}#icon-arrow_forward"></use>
		</svg>
	</button>
`;

export default function rednerGallerySvges() {
	galleryNavBtn.innerHTML = markup;
}