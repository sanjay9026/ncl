(function ($) {
  "use strict";
  function handlePreloader() {
    if ($(".preloader").length) {
      $(".preloader").delay(200).fadeOut(500);
    }
  }

  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);
        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({ countNum: $t.find(".count-text").text() }).animate(
            { countNum: n },
            {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              },
            }
          );
        }
      },
      { accY: 0 }
    );
  }

  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      $("html, body").animate({ scrollTop: $(target).offset().top }, 1500);
    });
  }
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }
  
  $(window).on("load", function () {
    handlePreloader();
  });
})(window.jQuery);
