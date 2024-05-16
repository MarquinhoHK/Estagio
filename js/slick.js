$(document).ready(function(){
    $('#block-banner').slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        arrows: true,
        dots: true,
        autoplaySpeed: 2500,

        prevArrow: '<button type="button" class="slick-prev-arrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next-arrow"><i class="fas fa-chevron-right"></i></button>',
    });
});