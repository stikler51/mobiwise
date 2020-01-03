$(document).ready(function(){

  $('.tariffs').slick({
    dots: true,
    infinite: true,
    arrows: false,
    respondTo: 'min',
    mobileFirst: true,
    centerMode: true,
    centerPadding: '30px',
    responsive: [
      {
        breakpoint: 991,
        settings: 'unslick'
      }
    ]
  });
});
