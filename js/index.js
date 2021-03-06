window.addEventListener('load', () => {
  modalHandler();


  if (window.innerWidth < 991) {
    rebuildTestimonialCard();
    fixStepsHeight();
  }
  scrollToAnchor();
  mobileMenu();
});

$(document).ready(function(){
  spoilerHandler();

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
        breakpoint: 768,
        settings: 'unslick'
      }
    ]
  });

  $('.cards-container').slick({
    dots: false,
    infinite: false,
    arrows: false,
    respondTo: 'min',
    mobileFirst: true,
    centerMode: true,
    centerPadding: '30px',
    responsive: [
      {
        breakpoint: 768,
        settings: 'unslick'
      }
    ]
  });

  $('.steps').slick({
    dots: false,
    infinite: false,
    arrows: false,
    respondTo: 'min',
    mobileFirst: true,
    centerMode: true,
    centerPadding: '30px',
    responsive: [
      {
        breakpoint: 768,
        settings: 'unslick'
      }
    ]
  });


});

function modalHandler() {
  let addPadding = getScrollbarWidth();
  let containers = document.body.querySelectorAll('.container');

  let modalBtns = document.body.querySelectorAll('.more');

  modalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.toggle('opened-modal');
      containers.forEach(container => {
        let padd = parseInt(getComputedStyle(container).paddingRight, 10);
        container.style.paddingRight = `${padd + addPadding}px`;
      });
      let modalID = btn.getAttribute('data-target');
      let modal = document.getElementById(modalID);
      modal.classList.toggle('opened');

      $('.opened .testimonials').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '.opened .custom-prev',
        nextArrow: '.opened .custom-next',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true
            }
          }
        ]
      });
    })
  });

  let closeBtns = document.body.querySelectorAll('.close-btn');

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      containers.forEach(container => {
        let padd = parseInt(getComputedStyle(container).paddingRight, 10);
        container.style.paddingRight = `${padd - addPadding}px`;
      });
      document.body.classList.toggle('opened-modal');
      document.body.querySelector('.modal-bg.opened').classList.toggle('opened');
    })
  });

  let modalContact = document.body.querySelectorAll('.blue-btn');

  modalContact.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.toggle('opened-modal');
      containers.forEach(container => {
        let padd = parseInt(getComputedStyle(container).paddingRight, 10);
        container.style.paddingRight = `${padd + addPadding}px`;
      });
      let modal = document.body.querySelector('#modal-contact-us');
      modal.classList.toggle('opened');
    })
  });
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

function rebuildTestimonialCard() {
  let testimonialCards = document.body.querySelectorAll('.testimonial-card');
  if (testimonialCards.length) {
    testimonialCards.forEach( block => {
      let social = block.querySelector('.social-links');
      block.appendChild(social);
    })
  }
}

function fixStepsHeight() {
  let steps = document.body.querySelectorAll('.steps .row');
  let maxHeight = 0;
  steps.forEach(el => {
    let elHeight = el.offsetHeight;

    if (elHeight > maxHeight) {
      maxHeight = elHeight;
    }
  })

  steps.forEach(el => {
    el.style.height = `${maxHeight}px`;
  })
}

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}