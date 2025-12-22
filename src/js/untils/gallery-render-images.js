import images from "./gallery-images";

const slides = document.querySelectorAll(".gallerySlide");
const galleryWrapper = document.querySelector(".galleryWrapper");

const newSlides = images.map(image => {
	return (`
	<div class="swiper-slide gallerySlide">
		<picture>
			<source
				media="(min-width: 1440px)"
				srcset="
					${image[0]} 1x,
					${image[1]} 2x
				"
			/>
			<source
				media="(min-width: 768px)"
				srcset="
					${image[2]} 1x,
					${image[3]} 2x
				"
			/>
			<source
				media="(max-width: 768px)"
				srcset="
					${image[4]} 1x,
					${image[5]} 2x
				"
			/>
			<img
				src="${image[0]}}"
				alt="${image[6]}"
				loading="lazy"
			/>
		</picture>
		<p class="p-overlay">
			${image[7]}
		</p>
	</div>
	`)
})

export default function renderSlides() {
	galleryWrapper.insertAdjacentHTML("beforeend", newSlides.join(""))
}
