let logo = document.querySelector('.navigation__icon');
let nav = document.querySelector('.navigation__nav');

logo.addEventListener('click', navToggle);

function navToggle() {

  if (logo.src.includes('Closed')) {
    logo.src = '../assets/icons/owlLogoOpen.svg';
    nav.style.width = '100%';

  } else {
    logo.src = '../assets/icons/owlLogoClosed.svg';
    nav.style.width = '0%';

  }

}