const banner = document.getElementById('discountBanner');
let closed = false;

window.addEventListener('scroll', () => {
  if (closed) return;
  if (window.scrollY > 80) {
    banner.classList.add('show');
  } else {
    banner.classList.remove('show');
  }
});

document.getElementById('bannerClose').addEventListener('click', () => {
  closed = true;
  banner.classList.remove('show');
});


