$(function () {
  // trigger NiceSccrool
  $("body").niceScroll();

  $(".header").height($(window).height());
  $(".header .intro").each(function () {
    $(this).css(
      "paddingTop",
      ($(window).height() - $(".header .intro").height()) / 2
    );
  });
  // Scrool
  $(".header .arrow i").click(function () {
    $("html").animate(
      {
        scrollTop: $(".feauther").offset().top,
      },
      1000
    );
  });
  // Show More From Our Work

  $(".our-work-button").click(function () {
    $(".our-work .imges-wrap .hidden").fadeIn("slow");
  });

  // Function Check The First child and the Last
  let ArrowLeft = $(".fa-arrow-left");
  let ArrowRgiht = $(".fa-arrow-right");
  function checkClient() {
    $(".what-our-cleint-say:first").hasClass("active")
      ? ArrowLeft.hide()
      : ArrowLeft.show();
    $(".what-our-cleint-say:last").hasClass("active")
      ? ArrowRgiht.hide()
      : ArrowRgiht.show();
  }
  checkClient();
  $(".testio i").click(function () {
    if ($(this).hasClass("fa-arrow-right")) {
      $(".testio .active").fadeOut(100, function () {
        $(this)
          .removeClass("active")
          .next(".what-our-cleint-say")
          .addClass("active")
          .fadeIn();
        checkClient();
      });
    } else {
      $(".testio .active").fadeOut(100, function () {
        $(this)
          .removeClass("active")
          .prev(".what-our-cleint-say")
          .addClass("active")
          .fadeIn();
        checkClient();
      });
    }
  });
  // Reponives Part
  let x = $(window).width();
  if (x <= 375) {
    (function e() {
      $(".testio i").remove();
      $(".testio .active").each(function () {
        $(this)
          .delay(1000)
          .fadeOut(1000, function () {
            if (!$(this).is(":last-child")) {
              $(this).removeClass("active").next().addClass("active").fadeIn();
              e();
            } else {
              $(this).removeClass("active");
              $(".testio  .what-our-cleint-say")
                .eq(0)
                .addClass("active")
                .fadeIn();
              e();
            }
          });
      });
    })();
  }
});
