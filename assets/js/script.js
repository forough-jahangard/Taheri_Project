// carousel-slide
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    rtl: true,
    autoplay: true,
    touchDrag: true,

    autoplayTimeout: 5000,

    responsiveClass: true,

    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      576: {
        items: 2,
        nav: true,
      },
      768: {
        items: 3,
        nav: true,
      },

      1000: {
        items: 4,
        nav: true,

        loop: false,
      },
    },
  });
});

// slider-text

function showText() {
  const element = document.querySelectorAll("#test-show");
  for (let i = 0; i < element.length; i++) {
    element[i].style.display = "block";
  }
}
setTimeout(showText, 1500);
