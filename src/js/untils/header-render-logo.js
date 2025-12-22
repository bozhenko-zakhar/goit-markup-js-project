import sprite from "../../img/sprite.svg";

const logoContainer = document.querySelector(".header__link-logo");

const markup = `
	<svg class="header-logo">
			<use href="${sprite}#icon-alternate-false"></use>
	</svg>
`

export default function renderHeaderLogo() {
	logoContainer.innerHTML = markup;
}