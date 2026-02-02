(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // Використовуємо is-hidden, щоб модалка зникала/з'являлася
    refs.modal.classList.toggle("is-hidden");
  }
})();


(() => {
  /* ===== MOBILE MENU ===== */
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('is-open');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  /* ===== MODAL ===== */
  const modal = document.querySelector('[data-modal]');
  const openModalBtn = document.querySelector('[data-modal-open]');
  const closeModalBtn = document.querySelector('[data-modal-close]');

  const toggleModal = () => {
    modal.classList.toggle('is-open');
  };

  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  // Закриття по кліку на backdrop
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      toggleModal();
    }
  });
})();