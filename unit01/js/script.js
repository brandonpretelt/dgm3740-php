// TODO:  replace with server php code in the future
const dateSpan = document.querySelector('.date');
dateSpan.textContent = new Date().getFullYear();

const closeBtn = document.querySelector('.close-menu');
const openBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');
const dropdown = document.querySelector('.open-dropdown');
const dropdownMenu = document.querySelector('.drop-down');

openBtn.addEventListener('click', () => {
    menu.classList.toggle('open-menu');
});

closeBtn.addEventListener('click', () => {
    menu.classList.toggle('open-menu');
    if (dropdown.classList.contains('rotate')) {
        dropdown.classList.remove('rotate');
        document
            .querySelector('.drop-down')
            .classList.remove('open-dropdown-links');
    }
});

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('rotate');
    dropdownMenu.classList.toggle('open-dropdown-links');
});

document.addEventListener('click', (e) => {
    if (e.target !== dropdown) {
        dropdown.classList.remove('rotate');
        dropdownMenu.classList.remove('open-dropdown-links');
    }
});
