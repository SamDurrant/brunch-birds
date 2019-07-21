let elements = {
  logo: document.querySelector('.navigation__icon'),
  nav: document.querySelector('.navigation__nav'),
  navItems: Array.from(document.querySelectorAll('.navigation__nav-item'))
}


elements.logo.addEventListener('click', navToggle);
elements.navItems.forEach(li => li.addEventListener('click', closeNav));

function navToggle() {
  elements.logo.src.includes('Closed') ? openNav() : closeNav();
}

function openNav() {
  elements.logo.src = 'assets/icons/owlLogoOpen.svg';
  elements.nav.style.width = '100%';
  
  elements.navItems.forEach(item => {
    item.classList.remove('slide-out');    
    item.classList.add('slide-in');    
  })
}

function closeNav() {
  elements.logo.src = 'assets/icons/owlLogoClosed.svg';

  elements.navItems.forEach(item => {
    item.classList.add('slide-out');      
    item.classList.remove('slide-in');
  })

  setTimeout(() => {
    elements.nav.style.width = '0';      
  }, 2000);
}