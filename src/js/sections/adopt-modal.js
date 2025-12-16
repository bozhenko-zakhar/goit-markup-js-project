const backdrop = document.querySelector('[data-modal]');
const closeBtn = document.querySelector('[data-modal-close]');

function openModal() {
  backdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
}

closeBtn.addEventListener('click', closeModal);

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) {
    closeModal();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !backdrop.classList.contains('is-hidden')) {
    closeModal();
  }
});

function closeModal() {
  backdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
}

const form = document.querySelector('.modal-form');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    phone: form.phone.value,
    comment: form.comment.value,
    animalId: currentAnimalId,
  };

  // тут fetch
});

await fetch('/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

Swal.fire({
  icon: 'success',
  title: 'Заявку відправлено',
});

form.reset();
closeModal();
