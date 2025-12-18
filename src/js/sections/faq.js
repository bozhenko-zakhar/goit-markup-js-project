import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion', {
  duration: 300,
  showMultiple: false,
  collapse: true,
});
 

const accordions = document.querySelectorAll('#faq .ac');

accordions.forEach(ac => {
	const iconPlus = ac.querySelector('.icon-plus');
	const iconClose = ac.querySelector('.icon-close');

	const observer = new MutationObserver(() => {
		if (ac.classList.contains('is-active')) {
			iconPlus.style.display = 'none';
			iconClose.style.display = 'inline-block';
		} else {
			iconPlus.style.display = 'inline-block';
			iconClose.style.display = 'none';
		}
	});

	observer.observe(ac, {
		attributes: true,
		attributeFilter: ['class']
	});
});








