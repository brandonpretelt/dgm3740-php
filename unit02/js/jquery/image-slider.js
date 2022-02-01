$(document).ready(function () {
    $('.image-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        appendDots: $('.image-slider-dots-container')
    });
});
$('.image-slider button[role="tab"]').innerHTML = '';
