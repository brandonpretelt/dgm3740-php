const closeBtn = document.querySelector('.close-menu');
const openBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');

const liToggle = document.querySelector('.sub-menu');
// const submenuAnchor = document.querySelectorAll('.menu-item-has-children > a');
const getMenuItemsParent = document.querySelector(
    '.open-agents-nav.menu-item-has-children'
);
const allMenuItemsParents = document.querySelectorAll(
    '.menu-item-has-children'
);

const dropdownMenuAbout = document.querySelector('.open-about-nav > .sub-menu');

const dropdownMenuAgents = document.querySelector(
    '.open-agents-nav > .sub-menu'
);

allMenuItemsParents.forEach((item, index) => {
    const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    );

    if (item.classList.contains('open-agents-nav')) {
        item.addEventListener('click', () => {
            dropdownMenuAgents.classList.toggle('open-menu-items');
        });
        item.addEventListener('mouseenter', () => {
            dropdownMenuAgents.classList.add('open-menu-items');
        });
        item.addEventListener('mouseleave', () => {
            dropdownMenuAgents.classList.remove('open-menu-items');
        });
    }

    if (item.classList.contains('open-about-nav')) {
        item.addEventListener('click', () => {
            dropdownMenuAbout.classList.toggle('open-menu-items');
        });
        if (vw > 697) {
            item.addEventListener('mouseenter', () => {
                dropdownMenuAbout.classList.toggle('open-menu-items');
            });
            item.addEventListener('mouseleave', () => {
                dropdownMenuAbout.classList.remove('open-menu-items');
            });
        }
    }
});

const openServiceNav = document.querySelector('.open-service-nav');

const searchBar = document.querySelector(
    ' .site-nav-container .menu-search .search-bar'
);
// submenuAnchor.classList.add('sub-menu-toggle/');

/* submenuAnchor.forEach((anchor) => {
    anchor.classList.add('sub-menu-toggle');
}); */

const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
);

/* if (document.innerWidth >= 700 || document.innerWidth <= 861) {
    searchBar.classList.add('hide-search-bar');
    console.log(vw);
} */

/* if (vw > 697) {
    getMenuItemsParent.addEventListener('click', () => {
        dropdownMenuAgents.classList.toggle('open-menu-items');
    });
    getMenuItemsParent.addEventListener('mouseleave', () =>
        dropdownMenuAgents.classList.remove('open-menu-items')
    );
}  */

// ! Important for the mobile menu

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

/* liToggle.addEventListener('click', () => {
    const allItems = document.querySelectorAll('.menu-item');
    allItems.forEach((item) => {
        console.log(item);
    });
}); */

// document.addEventListener('click', (e) => {
// console.log(e);
// submenuAnchor.classList.add('sub-menu-toggle');
/*     if (
        !e.target.classList.contains('sub-menu-toggle') ||
        e.target !== submenuAnchor
    ) {
        dropdownMenuAgents.classList.remove('open-dropdown-links');
        dropdownMenuAgents.classList.remove('open-menu-items');
    } */
// });
