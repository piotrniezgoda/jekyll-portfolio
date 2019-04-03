$(document).ready(function(){
  $('.portfolio__slider').slick({
    nextArrow: $('.slide__arrow--right'),
    prevArrow: $('.slide__arrow--left'),
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    appendDots: $('.slider__dots'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});



