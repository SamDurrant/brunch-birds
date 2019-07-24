export const toggleOpen = (e) => {
  let menuSection = e.target.parentNode.nextElementSibling;

  e.target.innerHTML === '+' ? e.target.innerHTML = '-' : e.target.innerHTML = '+';
  menuSection.classList.toggle('open');
}