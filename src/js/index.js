/*? no js js needed from me */
const menuToggle = document.querySelector('.icons .menuToggle');
const menus = document.querySelector('.menu');

menuToggle.addEventListener('click', (e) => {
  menus.classList.toggle('actives');
});

// ! PREVIEW BUTTON SEARCHING
const btnSearching = document.querySelector('.icons .searching');
const cardSearch = document.querySelector('.search_btn');
const btnClosing = cardSearch.querySelector('.close');

btnSearching.onclick = () => {
  cardSearch.classList.toggle('preview');
};

btnClosing.onclick = () => {
  cardSearch.classList.remove('preview');
};

// Button Mode Heart
const btnHeart = document.querySelectorAll('.overlay button');
const cardProf = document.querySelector('.rows_gallery .card_gallery');
btnHeart.forEach((e) => {
  e.addEventListener('dblclick', (e) => {
    e.target.classList.toggle('dblClick');
  });
});

window.addEventListener('scroll', (e) => {
  menus.classList.remove('actives');
});

const darkMode = document.querySelector('.icons .moon');
const container = document.querySelector('.container');
const icons = document.querySelector('.icons');
darkMode.addEventListener('click', (e) => {
  container.classList.toggle('darkMode');
  icons.classList.toggle('activess');
});
