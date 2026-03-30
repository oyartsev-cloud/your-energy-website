const burgerButton = document.querySelector('.nav-toggle');
const closeButton = document.querySelector('.nav-close');
const mobileMenuBackdrop = document.querySelector('.mobile-menu-backdrop');

export function addMenuHandlers() {
  burgerButton.addEventListener('click', () => {
    mobileMenuBackdrop.classList.add('opened');
    addMobileMenuListeners();
  });
}

const closeMobileMenu = function () {
  mobileMenuBackdrop.classList.remove('opened');
  removeMobileMenuListeners();
};

const onEscCloseMobileMenu = function (event) {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }
};

const addMobileMenuListeners = function () {
  closeButton.addEventListener('click', closeMobileMenu);
  mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
  document.addEventListener('keydown', onEscCloseMobileMenu);
};

const removeMobileMenuListeners = function () {
  closeButton.removeEventListener('click', closeMobileMenu);
  mobileMenuBackdrop.removeEventListener('click', closeMobileMenu);
  document.removeEventListener('keydown', onEscCloseMobileMenu);
};
