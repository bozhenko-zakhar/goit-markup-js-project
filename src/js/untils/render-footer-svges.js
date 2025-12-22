import sprite from "../../img/sprite.svg";

const logoContainer = document.querySelector(".footer-logo");
const footerIcons = document.querySelector(".footer-social-links-list");

const logo = `
<svg class="footer-logo-icon">
		<use href="${sprite}#icon-alternate-false"></use>
</svg>
`

const svgItems = `
<li class="footer-social-links-list-item">
	<a href="https://www.facebook.com/" class="footer-social-icon" target="_blank">
		<svg class="footer-social-icon-unit">
				<use href="${sprite}#icon-facebook"></use>
		</svg>
	</a>
</li>
<li class="footer-social-links-list-item">
	<a href="https://www.instagram.com/" class="footer-social-icon" target="_blank">
		<svg class="footer-social-icon-unit">
				<use href="${sprite}#icon-instagram"></use>
		</svg>
	</a>
</li>
`

export default function renderFooterSvges() {
	logoContainer.innerHTML = logo;
	footerIcons.innerHTML = svgItems;
}