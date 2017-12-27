$(document).ready(function blogSlider() {
  $('.blog-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
        }
      },
    ]

  });
});

