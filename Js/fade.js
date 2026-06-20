document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll(
    '.title__section, .paragraf__section, .button__section, .title__img'
  );

  setTimeout(() => {
    elements.forEach(el => el.classList.add('animate'));
  }, 100);
});