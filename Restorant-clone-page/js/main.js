// jshint esversion:6
// Navbar toggler
const navBtn = document.querySelector('.nav-toggler');
const links = document.querySelector('.links');
const closeBtn = document.querySelector('.close-btn');
const barsBtn = document.querySelector('.bars-btn');

navBtn.addEventListener('click', function() {
  links.classList.toggle('show-links');
  if (links.classList.contains('show-links')) {
    closeBtn.style.display = 'block';
    barsBtn.style.display = 'none';
  } else {
    closeBtn.style.display = 'none';
    barsBtn.style.display = 'block';
  }
});
$(document).ready(function() {
  $('.first-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    prevArrow: ".site-slider-one .slider-btn .prev",
    nextArrow: ".site-slider-one .slider-btn .next",
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
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