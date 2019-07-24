import { elements } from './base';

export const hideAllSlides = () => {
  for(let i = 0; i < elements.slides.length; i++) {
    elements.slides[i].classList.remove('fade-in');
    elements.slides[i].style.display = 'none';
    elements.slideDots[i].classList.remove('dot--active');
  }
}

export const showCurrSlide = (ind) => {
  elements.slides[ind - 1].style.display = 'flex';
  elements.slides[ind - 1].classList.add('fade-in');
  elements.slideDots[ind - 1].classList.add('dot--active');
}