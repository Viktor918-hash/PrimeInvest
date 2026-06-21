const modalOverlay = document.getElementById('modalOverlay');

function openModal() {
  modalOverlay.classList.add('open');
}

function closeModal() {
  modalOverlay.classList.remove('open');
}

document.getElementById('modalClose').addEventListener('click', closeModal);

modalOverlay.addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

function openModal() {
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}