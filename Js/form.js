const panel1 = document.getElementById('lf-panel-1');
const panel2 = document.getElementById('lf-panel-2');
const bar    = document.getElementById('lf-bar');
const stepNum = document.getElementById('lf-step-num');

function setStep(n) {
  panel1.classList.toggle('active', n === 1);
  panel2.classList.toggle('active', n === 2);
  bar.style.width = n === 1 ? '50%' : '100%';
  stepNum.textContent = n;
}

function showErr(id, errId, show) {
  const el  = document.getElementById(id);
  const err = document.getElementById(errId);
  el.classList.toggle('lf-err', show);
  err.classList.toggle('show', show);
}


document.getElementById('lf-next').addEventListener('click', () => {
  const name    = document.getElementById('lf-name').value.trim();
  const email   = document.getElementById('lf-email').value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  showErr('lf-name',  'lf-name-error',  !name);
  showErr('lf-email', 'lf-email-error', !emailOk);
  if (name && emailOk) setStep(2);
});


document.getElementById('lf-back').addEventListener('click', () => setStep(1));


const phoneEl = document.getElementById('lf-phone');
phoneEl.addEventListener('input', () => {
  let v = phoneEl.value.replace(/\D/g, '').slice(0, 9);
  const p = [];
  if (v.length > 0) p.push(v.slice(0, 2));
  if (v.length > 2) p.push(v.slice(2, 5));
  if (v.length > 5) p.push(v.slice(5, 7));
  if (v.length > 7) p.push(v.slice(7, 9));
  phoneEl.value = p.join(' ');
});


document.getElementById('lf-submit').addEventListener('click', () => {
  const phone   = phoneEl.value.replace(/\D/g, '');
  const consent = document.getElementById('lf-consent').checked;
  const phoneOk = phone.length >= 9;
  showErr('lf-phone', 'lf-phone-error', !phoneOk);
  document.getElementById('lf-consent-error').classList.toggle('show', !consent);
  if (phoneOk && consent) document.getElementById('lf-modal').classList.add('open');
});


document.getElementById('lf-modal-close').addEventListener('click', reset);
document.getElementById('lf-modal').addEventListener('click', function(e) {
  if (e.target === this) reset();
});

function reset() {
  document.getElementById('lf-modal').classList.remove('open');
  ['lf-name','lf-email','lf-phone'].forEach(id => {
    document.getElementById(id).value = '';
    document.getElementById(id).classList.remove('lf-err');
  });
  document.getElementById('lf-consent').checked = false;
  setStep(1);
}


['lf-name','lf-email','lf-phone'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => {
    document.getElementById(id).classList.remove('lf-err');
    const err = document.getElementById(id + '-error');
    if (err) err.classList.remove('show');
  });
});

document.getElementById('lf-consent').addEventListener('change', () => {
  document.getElementById('lf-consent-error').classList.remove('show');
});
