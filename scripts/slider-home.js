$('.slider-container').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fas btn-prev">&lt;</i>',
    nextArrow: '<i class="fas btn-next">&gt;</i>',
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            //arrows: false,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 2
        }
        },
        {
        breakpoint: 768,
        settings: {
            //arrows: false,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1
        }
        }
    ]
});