import { elements } from '../views/base';

export default class Slide {
  constructor(slideIndex = 1) {
    this.slideIndex = slideIndex;
  }

  setTimer(showSlide) {
    this.timer = setInterval(() => {
      this.slideIndex += 1;
      if (this.slideIndex > elements.slides.length) { this.slideIndex = 1; }
      showSlide();
    }, 4000);
  }

  currentSlide(e, showSlide) {
    this.slideIndex = (elements.slideDots.indexOf(e.target) + 1);
    showSlide();
    clearInterval(this.timer);
    this.setTimer(showSlide);
  }
}