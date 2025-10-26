// Inicialização do AOS
AOS.init({ duration: 700, once: true, offset: 50 });

// Menu mobile
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Fecha o menu ao clicar em um link
document.querySelectorAll('#mobile-menu a, .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      setTimeout(() => mobileMenu.classList.add('hidden'), 150);
    }
  });
});

// Tema claro/escuro
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const htmlElement = document.documentElement;

function setTheme(theme) {
  if (theme === 'dark') {
    htmlElement.classList.remove('light');
    htmlElement.classList.add('dark');
    themeToggleLightIcon.classList.remove('hidden');
    themeToggleDarkIcon.classList.add('hidden');
    localStorage.setItem('theme', 'dark');
  } else {
    htmlElement.classList.remove('dark');
    htmlElement.classList.add('light');
    themeToggleDarkIcon.classList.remove('hidden');
    themeToggleLightIcon.classList.add('hidden');
    localStorage.setItem('theme', 'light');
  }
}

// Aplica o tema preferido
const preferredTheme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(preferredTheme);

// Alternar tema ao clicar
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Pop-up de dica
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('theme-popup');
  const hasVisited = localStorage.getItem('hasVisitedSite');
  if (!hasVisited) {
    popup.style.display = 'flex';
    setTimeout(() => popup.style.display = 'none', 5000);
    localStorage.setItem('hasVisitedSite', 'true');
  }
});
