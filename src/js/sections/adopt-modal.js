import axios from 'axios';
import Swal from 'sweetalert2';
import { closeAnimalModal } from './modal-animal-detail';

//  STATE & SELECTORS;
let currentAnimalId = '682f9bbf8acbdf505592ac36';

const backdrop = document.querySelector('[data-modal]');
const closeBtn = document.querySelector('[data-modal-close]');
const formEl = document.querySelector('.adopt-modal-form');

//  MODAL LOGIC
export function openModal(animalId) {
  if (animalId) currentAnimalId = animalId;
  backdrop?.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
	closeAnimalModal();
}

function closeModal() {
  backdrop?.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
}

if (closeBtn) closeBtn.addEventListener('click', closeModal);
if (backdrop) {
  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closeModal();
  });
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !backdrop?.classList.contains('is-hidden')) {
    closeModal();
  }
});

// FORM SUBMIT

if (formEl) {
  formEl.setAttribute('novalidate', 'true');

  formEl.addEventListener('submit', async e => {
    e.preventDefault();

    const { name, phone, comment } = e.target.elements;

    const onlyDigits = phone.value.replace(/\D/g, '');

    if (onlyDigits.length !== 12) {
      Swal.fire({
        icon: 'error',
        title: 'Помилка',
        text: 'Телефон має містити 12 цифр',
      });
      return;
    }

    if (!name.value.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Помилка заповнення',
        text: 'Будь ласка, введіть ваше ім’я',
      });
      return;
    }

    const orderData = 
			{
		name: name.value.trim(),
		phone: onlyDigits,
		animalId: currentAnimalId,
		comment: comment.value.trim() || 'Запит на знайомство'
}
    

    try {
      Swal.showLoading();

      const response = await axios.post(
        'https://paw-hut.b.goit.study/api/orders',
        orderData
      );

      console.log('orderData :>> ', response.data);

      await Swal.fire({
        icon: 'success',
        title: 'Дякуємо за Вашу заявку!',
        text: 'Запис на знайомство прийнято.',
      });

      e.target.reset();
      closeModal();
    } catch (error) {
      console.error('SERVER ERROR:', error.response?.data);

      Swal.fire({
        icon: 'error',
        title: 'Помилка сервера',
        text: 'Спробуйте пізніше',
      });
    }
  });
}
