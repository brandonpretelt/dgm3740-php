// TODO:  replace with server php code in the future
const dateSpan = document.querySelector('.date');
dateSpan.textContent = new Date().getFullYear();

const closeBtn = document.querySelector('.close-menu');
const openBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');

const dropdownMenuAgents = document.querySelector(
    '.open-agents-nav > .sub-menu'
);
const liToggle = document.querySelector('.sub-menu');
const preventAnchorDefault = document.querySelector('.prevent-default a');
const preventLIDefault = document.querySelector('.prevent-default');
const submenuAnchor = document.querySelector('.menu-item-has-children > a');
const getMenuItemsParent = document.querySelector('.menu-item-has-children');
const openServiceNav = document.querySelector('.open-service-nav');
const dropdownMenuService = document.querySelector(
    '.open-service-nav > .sub-menu'
);
const searchBar = document.querySelector(
    ' .site-nav-container .menu-search .search-bar'
);
submenuAnchor.classList.add('sub-menu-toggle');

const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
);

console.log(vw);

if (document.innerWidth >= 700 || document.innerWidth <= 861) {
    searchBar.classList.add('hide-search-bar');
    console.log(vw);
}

getMenuItemsParent.addEventListener('click', () => {
    dropdownMenuAgents.classList.toggle('open-menu-items');
});
if (vw > 697) {
    getMenuItemsParent.addEventListener('mouseenter', () => {
        dropdownMenuAgents.classList.toggle('open-menu-items');
    });
    getMenuItemsParent.addEventListener('mouseleave', () =>
        dropdownMenuAgents.classList.remove('open-menu-items')
    );
} else {
    dropdownMenuAgents.classList.add('open-menu-items');
}

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
    dropdownMenuAgents.classList.remove('open-menu-items');
});

liToggle.addEventListener('click', () => {
    const allItems = document.querySelectorAll('.menu-item');
    allItems.forEach((item) => {
        console.log(item);
    });
    // dropdown.classList.toggle('rotate');
    // dropdownMenu.classList.toggle('open-dropdown-links');
});

/* dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('rotate');
    dropdownMenu.classList.toggle('open-dropdown-links');
}); */

document.addEventListener('click', (e) => {
    submenuAnchor.classList.add('sub-menu-toggle');
    if (
        !e.target.classList.contains('sub-menu-toggle') ||
        e.target !== submenuAnchor
    ) {
        dropdownMenuAgents.classList.remove('open-dropdown-links');
        dropdownMenuAgents.classList.remove('open-menu-items');
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
