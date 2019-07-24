import 'core-js/stable';
import '../sass/main.scss';
import { elements } from './views/base';
import { toggleOpen } from './views/menuView';
import { makeMap } from './views/mapView';
import * as slideView from './views/slideView';
import * as navView from './views/navView';
import Slide from './models/Slide';
import Map from './models/Map';

const state = {};

// *****menu*****
elements.menuBtns.forEach(btn => {
  btn.addEventListener('click', e => toggleOpen(e));
})


// *****slider & map*****
window.addEventListener('load', () => {
  // create index for first slide
  state.slide = new Slide();

  // show first slide
  showSlide();  

  // set timer
  state.slide.setTimer(showSlide);

  // create map
  makeMap(Map.map, Map.tile, Map.marker);
})


function showSlide() {
  slideView.hideAllSlides();
  slideView.showCurrSlide(state.slide.slideIndex);
  setTimeout(showSlide, 4000);
}

elements.slideDots.forEach(dot => { 
  dot.addEventListener('click', e => state.slide.currentSlide(e, showSlide))
});

// *****nav*****
elements.logo.addEventListener('click', navView.navToggle);

elements.navItems.forEach(li => li.addEventListener('click', navView.closeNav));