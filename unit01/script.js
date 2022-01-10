// TODO:  replace with server php code in the future
const dateSpan = document.querySelectorAll('.date');
[...dateSpan].forEach((span) => {
    span.textContent = dateSpan.textContent = new Date().getFullYear();
});

// ? Glider stuff goes here
const slider = document.querySelector('.glider');
slider.style.overflow = 'hidden';
new Glider(slider, {
    slidesToShow: 1,
    slidesToScroll: 'auto',
    duration: 0.5,
    dots: '.dots',
    draggable: true
});
