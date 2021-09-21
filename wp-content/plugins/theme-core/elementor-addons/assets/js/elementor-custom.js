(function ($) {
  "use strict";
 


  var newsCarousel = function ($scope, $) {
    var tt = $scope.find(".news-carousel").each(function () {
      $(".news-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        smartSpeed: 700,
        autoHeight: true,
        autoplay: true,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
          768: { items: 2 },
          800: { items: 2 },
          1024: { items: 3 },
          1200: { items: 3 },
          1400: { items: 4 },
        },
      });
    });
  };


  var testimonials2Carousel = function ($scope, $) {
    var tt = $scope.find(".testimonial-carousel").each(function () {
      $(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 500,
        autoplay: true,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        responsive: {
          0: { items: 1 },
          764: { items: 1 },
          800: { items: 2 },
          1024: { items: 2 },
          1200: { items: 3 },
        },
      });
    });
  };

 

  $(window).on("elementor/frontend/init", function () {
 
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/testimonials2.default",
      testimonials2Carousel
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/blogstwo.default",
      newsCarousel
    );

    
   
  });
})(window.jQuery);
