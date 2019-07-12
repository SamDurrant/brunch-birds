let slideIndex = 1;
let timer;
let slides = Array.from(document.querySelectorAll('.slide'));
let dots = Array.from(document.querySelectorAll('.dot'));

function showSlide() {

  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    slides[i].classList.remove('fade-in');
    dots[i].classList.remove('dot--active');
  }
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = 'flex';
  slides[slideIndex - 1].classList.add('fade-in');
  dots[slideIndex - 1].classList.add('dot--active');
  setTimeout(showSlide, 4000);
}

function setTimer() {
  timer = setInterval(() => {
    slideIndex += 1;
    showSlide();
  }, 4000);
}

function currentSlide() {
  slideIndex = (dots.indexOf(this) + 1);
  showSlide();
  clearInterval(timer);
  setTimer();
}

window.addEventListener('load', () => {
  showSlide();
  setTimer();
})
dots.forEach(dot => dot.addEventListener('click', currentSlide));
