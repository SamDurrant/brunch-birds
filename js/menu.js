let btns = Array.from(document.querySelectorAll('.btn--toggle'));

btns.forEach(btn => {
  btn.addEventListener('click', toggleOpen);
})

function toggleOpen() {
  let menuSection = this.parentNode.nextElementSibling;

  this.innerHTML === '+' ? this.innerHTML = '-' : this.innerHTML = '+';
  menuSection.classList.toggle('open');
}