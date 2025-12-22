import sprite from "../../img/sprite.svg"

const testimonialNavigationButtons = document.querySelector(".testimonial-navigation-buttons");

const markup = `
	<div class="testimonials-prev js-testimonials-prev">
		<svg class="icon-back" viewBox="0 0 24 24">
			<use href="${sprite}#icon-arrow_back"></use>
		</svg>
	</div>
	<div class="testimonials-next js-testimonials-next">
		<svg class="icon-forward" viewBox="0 0 24 24">
			<use href="${sprite}#icon-arrow_forward"></use>
		</svg>
	</div>
`

export default function renderTestimonialSvges() {
	testimonialNavigationButtons.innerHTML = markup;
}
