// TODO:  replace with server php code in the future
const dateSpan = document.querySelector('.date');
dateSpan.textContent = new Date().getFullYear();

const closeBtn = document.querySelector('.close-menu');
const openBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');
const dropdown = document.querySelector('.open-dropdown');
const dropdownMenu = document.querySelector('.drop-down');
const liToggle = document.querySelector('.li-heading');

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

liToggle.addEventListener('click', () => {
    dropdown.classList.toggle('rotate');
    dropdownMenu.classList.toggle('open-dropdown-links');
});

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('rotate');
    dropdownMenu.classList.toggle('open-dropdown-links');
});

document.addEventListener('click', (e) => {
    if (e.target !== dropdown && e.target !== liToggle) {
        dropdown.classList.remove('rotate');
        dropdownMenu.classList.remove('open-dropdown-links');
    }
});

// this block of codes adds an active class to the current
// list item

const getURL = window.location.pathname;
// hard coded array values are not ideal but, it's workable for now
const paths = [
    '/unit02/index.php',
    '/unit02/cruises.php',
    '/unit02/agent-1.php',
    '/unit02/agent-2.php',
    '/unit02/book.php'
];
const getListItems = document.querySelectorAll('.nav-link');
paths.forEach((path, index) => {
    if (getURL === path) {
        switch (index) {
            case 0:
                getListItems[0].classList.toggle('active');
                break;
            case 1:
                getListItems[1].classList.toggle('active');
                break;
            case 2:
                getListItems[2].classList.toggle('active');
                break;
            case 3:
                getListItems[2].classList.add('active');
                break;
            case 4:
                getListItems[5].classList.toggle('active');
                break;
            default:
                console.log('nothing matches this');
                break;
        }
    }
});

const stateSelect = document.querySelector('[data-select="state"]');

if (stateSelect) {
    states.forEach((state) => {
        const option = document.createElement('option');
        option.value = state.name;
        option.textContent = state.name;
        stateSelect.appendChild(option);
    });
}
