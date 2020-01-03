window.addEventListener('load', () => {
  if (document.body.querySelector('.more')) {
    modalHandler();
  }
  scrollToAnchor();
  mobileMenu();


});

$(document).ready(function(){
  spoilerHandler();
});

function modalHandler() {
  let modalBtns = document.body.querySelectorAll('.more');

  modalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      document.body.classList.toggle('opened-modal');
      let modalID = btn.getAttribute('data-target');
      let modal = document.getElementById(modalID);
      modal.classList.toggle('opened');

      $('.opened .testimonials').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '.opened .custom-prev',
        nextArrow: '.opened .custom-next'
      });
    })
  });

  let closeBtns = document.body.querySelectorAll('.close-btn');

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('opened-modal');
      document.body.querySelector('.modal-bg.opened').classList.toggle('opened');
    })
  })
}

function scrollToAnchor() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

function spoilerHandler() {
  let spoilers = document.body.querySelectorAll('.question');

  spoilers.forEach(header => {
    header.addEventListener('click', (e) => {
      let answerId = header.getAttribute('data-target');
      let answer = document.getElementById(answerId);

      $(answer).slideToggle();

      header.parentElement.classList.toggle('opened');
    })
  })

}

function mobileMenu() {
  let menuBtn = document.body.querySelector('.menu-btn');
  menuBtn.addEventListener('click', () => {
    $('.navigation').slideToggle();
  })
}