const toggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const closeToggle = document.querySelector('.close');
toggleBtn.addEventListener('click', () => menu.classList.add('open-menu'));
closeToggle.addEventListener('click', () => menu.classList.remove('open-menu'));
