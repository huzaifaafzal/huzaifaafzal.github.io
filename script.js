const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

function closeMenu() {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('.sr-only').textContent = 'Open menu';
  mobileMenu.classList.remove('open');
  document.body.classList.remove('menu-open');
}

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.querySelector('.sr-only').textContent = isOpen ? 'Open menu' : 'Close menu';
    mobileMenu.classList.toggle('open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
