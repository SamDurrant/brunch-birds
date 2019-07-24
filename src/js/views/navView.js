import { elements } from './base';
import owlLogoOpen from '../../images/owlLogoOpen.svg';

export const navToggle = () => {
  elements.logo.src.includes('Closed') ? openNav() : closeNav();
}

export const openNav = () => {
  elements.logo.src = owlLogoOpen;
  elements.nav.style.width = '100%';
  
  elements.navItems.forEach(item => {
    item.classList.remove('slide-out');    
    item.classList.add('slide-in');    
  })
}

export const closeNav = () => {
  elements.logo.src = 'images/owlLogoClosed.svg';

  elements.navItems.forEach(item => {
    item.classList.add('slide-out');      
    item.classList.remove('slide-in');
  })

  setTimeout(() => {
    elements.nav.style.width = '0';      
  }, 2000);
}