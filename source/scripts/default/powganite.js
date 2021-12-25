var isAnim = -1;
var tenthCardSetInteval;

$(window).bind("load", function () {
  $("#header").css("background-color", "#00AFAA");

  if (window.innerWidth >= 768) {
    $(".block-sixth-card-container").slick({
      dots: true,
      arrows: false,
      dotsClass: "block-tips",
      autoplay: true,
      focusOnSelect: true,
      pauseOnHover: false,
      autoplaySpeed: 1500,
      infinite: true,
      customPaging: function (slick, index) {
        switch (index) {
          case 0:
            return (
              '<div><img src="' +
              pathBeforeStr +
              'styles/images/product/pdw/desktop/menu-01-icon.png"><div class="content"><div>' +
              sixCardIconNameArr[0] +
              "</div><div></div></div></div>"
            );
          case 1:
            return (
              '<div><img src="' +
              pathBeforeStr +
              'styles/images/product/pdw/desktop/menu-02-icon.png"><div class="content"><div>' +
              sixCardIconNameArr[1] +
              "</div><div></div></div></div>"
            );
          case 2:
            return (
              '<div><img src="' +
              pathBeforeStr +
              'styles/images/product/pdw/desktop/menu-03-icon.png"><div class="content"><div>' +
              sixCardIconNameArr[2] +
              "</div><div></div></div></div>"
            );
          case 3:
            return (
              '<div><img src="' +
              pathBeforeStr +
              'styles/images/product/pdw/desktop/menu-04-icon.png"><div class="content"><div>' +
              sixCardIconNameArr[3] +
              "</div><div></div></div></div>"
            );
          case 4:
            return (
              '<div><img src="' +
              pathBeforeStr +
              'styles/images/product/pdw/desktop/menu-05-icon.png"><div class="content"><div>' +
              sixCardIconNameArr[4] +
              "</div><div></div></div></div>"
            );
        }
      },
    });
  } else {
    $(".block-sixth-card-container").slick({
      dots: true,
      arrows: false,
      dotsClass: "block-tips",
      autoplay: true,
      swipeToSlide: false,
      focusOnSelect: false,
      pauseOnFocus: true,
      pauseOnHover: false,
      pauseOnDotsHover: true,
      autoplaySpeed: 1500,
      infinite: true,
      customPaging: function (slick, index) {
        switch (index) {
          case 0:
            return (
              '<div><img src="' +
              pathBeforeStr +
              'styles/images/product/pdw/desktop/menu-01-icon.png"><div class="content"><div>' +
              sixCardIconNameArr[0] +
              "</div><div></div></div></div>"
            );
          case 1:
            return (
              '<div><img src="' +
              pathBeforeStr +
              'styles/images/product/pdw/desktop/menu-02-icon.png"><div class="content"><div>' +
              sixCardIconNameArr[1] +
              "</div><div></div></div></div>"
            );
          case 2:
            return (
              '<div><img src="' +
              pathBeforeStr +
              'styles/images/product/pdw/desktop/menu-03-icon.png"><div class="content"><div>' +
              sixCardIconNameArr[2] +
              "</div><div></div></div></div>"
            );
          case 3:
            return (
              '<div><img src="' +
              pathBeforeStr +
              'styles/images/product/pdw/desktop/menu-04-icon.png"><div class="content"><div>' +
              sixCardIconNameArr[3] +
              "</div><div></div></div></div>"
            );
          case 4:
            return (
              '<div><img src="' +
              pathBeforeStr +
              'styles/images/product/pdw/desktop/menu-05-icon.png"><div class="content"><div>' +
              sixCardIconNameArr[4] +
              "</div><div></div></div></div>"
            );
        }
      },
    });
  }

  if (window.innerWidth >= 1024) {
    $(".info-card").slick({
      arrows: true,
      autoplay: true,
      focusOnSelect: true,
      pauseOnHover: false,
      autoplaySpeed: 1500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1023,
          settings: "unslick",
        },
      ],
    });
  }

  $(window).resize(function () {
    if (window.innerWidth >= 1024) {
      $(".info-card").slick({
        arrows: true,
        autoplay: ture,
        focusOnSelect: true,
        pauseOnHover: false,
        autoplaySpeed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1023,
            settings: "unslick",
          },
        ],
      });
    }
  });

  $(".block-fourth-card-container").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    focusOnSelect: false,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
  });

  $(
    ".block-eleventh-card-container .content .certification_container .certification .certification_items_container_slick"
  ).slick({
    dots: true,
    arrows: false,
    autoplay: true,
    focusOnSelect: true,
    pauseOnHover: false,
    autoplaySpeed: 5000,
  });

  secondCardHoverInit();

  fourCardAnimTriggerInit();

  ninethCardLightToggleAutoInit();

  tenthCardBtnClickInit();

  tenthCardToggleBgBtnInit(0);
});

$(document).ready(function () {
  $(".click-button").on("click", function () {
    if (window.innerWidth < 100) {
      $(".slide-dot").css("width", "115px");
    } else {
      $(".slide").css("width", "90%");

      let offsetTop = $(".block-demo-video2").offset().top;

      setTimeout(function () {
        $(".click-button").css("opacity", "0");
        $(".click-button").css("cursor", "auto");

        $(".block-demo-video2").css("height", "54%");

        window.scrollTo({
          top: offsetTop / 3,
          behavior: "smooth",
        });
      }, 700);
    }
  });
});

$(document).ready(function () {
  window.innerWidth >= 1024
    ? $(".block-secret-warning .wire-plug").addClass("wire-plug--active")
    : null;

  $(".block-secret-warning .wire-plug").on("click", function () {
    $(".block-secret .condition").css("left", 0);
    $(".block-secret-warning .wire-plug").removeClass("wire-plug--active");
    setTimeout(function () {
      $(".block-secret .examination").css("opacity", 1);
      $(".block-secret .list").css("opacity", 1);
      $(".wire-clickme").css("display", "none");
    }, 1000);
  });

  $(".block-secret-warning .begin").on("click", function () {
    $(".block-secret-warning .wire .wire--brand").addClass("loadingBar");

    setTimeout(function () {
      $(".block-secret-warning .wire .wire--brand").removeClass("loadingBar");
      $(".block-secret-warning").css("opacity", 0);
      $(".block-secret-check").css("opacity", 1);
      $(".block-secret-check").css("z-index", 5);
    }, 1000);
  });
  $(".block-secret-check .finished").on("click", function () {
    $(".block-secret-check").css("opacity", 0);
    $(".block-secret-warning").css("opacity", 1);
    $(".block-secret-check").css("z-index", -2);
  });

  var mobileInterval;
  var mobileInterval2;
  var isSecMobileActive = 0;
  var firstSecMobileActive = 0;
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 1800 && isAnim != 0) {
      $(
        ".block-fourth-card-container ._step-item1 .left_container .graph_img_container .float_icon_2"
      ).animate({ width: "100px" }, 1000);
      $(
        ".block-fourth-card-container ._step-item1 .left_container .graph_img_container .float_icon_1"
      )
        .delay(1000)
        .animate({ width: "240px" }, 1000);
      window.setTimeout(function () {
        $(
          ".block-fourth-card-container ._step-item1 .left_container .graph_img_container .float_icon_1"
        )
          .delay(0)
          .animate({ height: "235px" }, 1000);
      }, 2000);
      isAnim = 0;
    }

    /* 手機 */
    if (
      isSecMobileActive == 0 &&
      $(window).scrollTop() > 100 &&
      $(window).width() < 768
    ) {
      if (firstSecMobileActive == 0) {
        $(
          ".block-second-card-container .content .feasure_list_container .feasure_list li"
        ).each(function (eq) {
          console.log(btnActivityArr[eq]);
          $(this).find(".btn_activity").addClass("active");
          $(this).find(".btn_activity").html(btnActivityArr[eq]);
        });
        window.setTimeout(function () {
          $(
            ".block-second-card-container .content .feasure_list_container .feasure_list li"
          ).each(function (eq) {
            $(this).find(".btn_activity").removeClass("active");
            $(this).find(".btn_activity").html(btnArr[eq]);
          });
        }, 3000);
        firstSecMobileActive = 1;
      }
      isSecMobileActive = 1;
      mobileInterval = window.setInterval(function () {
        $(
          ".block-second-card-container .content .feasure_list_container .feasure_list li"
        ).each(function (eq) {
          $(this).find(".btn_activity").addClass("active");
          $(this).find(".btn_activity").html(btnActivityArr[eq]);
        });

        window.setTimeout(function () {
          $(
            ".block-second-card-container .content .feasure_list_container .feasure_list li"
          ).each(function (eq) {
            $(this).find(".btn_activity").removeClass("active");
            $(this).find(".btn_activity").html(btnArr[eq]);
          });
        }, 3000);
      }, 6000);

      /* 桌面板 */
    } else if ($(window).scrollTop() > 0 && $(window).width() >= 768) {
      $(
        ".block-second-card-container .content .feasure_list_container .feasure_list li"
      ).each(function (eq) {
        $(this)
          .find(".btn_activity")
          .mouseover(function () {
            $(this).html(btnActivityArr[eq]);
          });
        $(this)
          .find(".btn_activity")
          .mouseout(function () {
            $(this).html(btnArr[eq]);
          });
      });
    }
  });

  window.onload = function () {
    let newLivingOffsetTop = $(".block-newLiving").offset().top;
    let newLivingInnerHeight = $(".block-newLiving").innerHeight();
    let intelligenceOffsetTop = $(".block-intelligence").offset().top;
    let intelligenceInnerHeight = $(".block-intelligence").innerHeight();

    if (
      window.pageYOffset > newLivingOffsetTop - newLivingInnerHeight &&
      window.pageYOffset < newLivingOffsetTop
    ) {
      $(".block-newLiving .content").addClass("fadeIn");
    }

    if (
      window.pageYOffset > intelligenceOffsetTop - intelligenceInnerHeight &&
      window.pageYOffset < intelligenceOffsetTop
    ) {
      $(".block-intelligence .content").addClass("fadeIn");
    }

    window.onscroll = function () {
      if (
        window.pageYOffset > newLivingOffsetTop - newLivingInnerHeight &&
        window.pageYOffset < newLivingOffsetTop
      ) {
        $(".block-newLiving .content").addClass("fadeIn");
      }

      if (
        window.pageYOffset > intelligenceOffsetTop - intelligenceInnerHeight &&
        window.pageYOffset < intelligenceOffsetTop
      ) {
        $(".block-intelligence .content").addClass("fadeIn");
      }
    };
  };
});

function secondCardHoverInit() {}

function fourCardAnimTriggerInit() {
  var eq5SetInterval;
  var _i = 0;
  eq5SetInterval = window.setInterval(function () {
    if (_i == 0) {
      $(
        ".block-fourth-card-container ._step-item5 .left_container .graph_img_container"
      ).css(
        "background-image",
        "url(" + pathBeforeStr + "styles/images/product/pdw/desktop/l2.png)"
      );
      _i = 1;
    } else if (_i == 1) {
      $(
        ".block-fourth-card-container ._step-item5 .left_container .graph_img_container"
      ).css(
        "background-image",
        "url(" + pathBeforeStr + "styles/images/product/pdw/desktop/l3.png)"
      );
      _i = 2;
    } else if (_i == 2) {
      $(
        ".block-fourth-card-container ._step-item5 .left_container .graph_img_container"
      ).css(
        "background-image",
        "url(" + pathBeforeStr + "styles/images/product/pdw/desktop/l1.png)"
      );
      _i = 0;
    }
  }, 200);

  $(".block-fourth-card-container").on(
    "beforeChange",
    function (event, slick, currentSlide, eq) {
      //isAnim = eq;

      console.log(isAnim, eq);
      if (eq == 0 && isAnim != eq) {
        fourthCardInitialize();
        isAnim = 0;
        $(
          ".block-fourth-card-container ._step-item1 .left_container .graph_img_container .float_icon_2"
        ).animate({ width: "100px" }, 1000);
        $(
          ".block-fourth-card-container ._step-item1 .left_container .graph_img_container .float_icon_1"
        )
          .delay(1000)
          .animate({ width: "240px" }, 1000);
        window.setTimeout(function () {
          $(
            ".block-fourth-card-container ._step-item1 .left_container .graph_img_container .float_icon_1"
          )
            .delay(0)
            .animate({ height: "235px" }, 1000);
        }, 2000);
      } else if (eq == 1 && isAnim != eq) {
        fourthCardInitialize();
        isAnim = 1;
        var animSec = 300;
        for (i = 0; i < 7; i++) {
          $(
            ".block-fourth-card-container ._step-item2 .left_container .graph_img_container_1 .graph_img .power_icon:nth-child(" +
              (7 - i) +
              ")"
          )
            .delay(animSec * i)
            .animate({ opacity: "1" }, 50);
          if (i < 5) {
            $(
              ".block-fourth-card-container ._step-item2 .left_container .graph_img_container_2 .graph_img .power_icon:nth-child(" +
                (5 - i) +
                ")"
            )
              .delay(animSec * 2 * i)
              .animate({ opacity: "1" }, 50);
          }
        }
      } else if (eq == 2 && isAnim != eq) {
        fourthCardInitialize();
        isAnim = 2;
        $(
          ".block-fourth-card-container ._step-item3 .left_container .graph_img_container_1 .graph_img .power_icon:nth-child(1)"
        )
          .delay(0)
          .animate({ height: "260px", top: "95px" }, 2000);
        $(
          ".block-fourth-card-container ._step-item3 .left_container .graph_img_container_2 .graph_img .power_icon:nth-child(1)"
        )
          .delay(0)
          .animate({ height: "160px", top: "195px" }, 2000);
        $(
          ".block-fourth-card-container ._step-item3 .left_container .graph_img_container_1 .graph_img .power_icon:nth-child(2)"
        )
          .delay(2000)
          .animate({ opacity: "1" }, 50);
        $(
          ".block-fourth-card-container ._step-item3 .left_container .graph_img_container_2 .graph_img .power_icon:nth-child(2)"
        )
          .delay(2000)
          .animate({ opacity: "1" }, 50);
      } else if (eq == 3 && isAnim != eq) {
        fourthCardInitialize();
        isAnim = 3;
        $(
          ".block-fourth-card-container ._step-item4 .left_container .graph_img_container .graph_img:nth-child(1)"
        ).addClass("add_transform");

        $(
          ".block-fourth-card-container ._step-item4 .left_container .graph_img_container .graph_text .big_text"
        ).each(function () {
          var $this = $(this);
          jQuery({ Counter: 0 }).animate(
            { Counter: 1000 },
            {
              duration: 1500,
              easing: "swing",
              step: function () {
                $this.text(Math.ceil(this.Counter));
              },
            }
          );
        });
      } else if (eq == 4 && isAnim != eq) {
        fourthCardInitialize();
        var _i = 0;
        isAnim = 4;
      }
    }
  );

  function fourthCardInitialize() {
    $(
      ".block-fourth-card-container ._step-item1 .left_container .graph_img_container .float_icon_1"
    )
      .css("width", "0px")
      .css("height", "2px");
    $(
      ".block-fourth-card-container ._step-item1 .left_container .graph_img_container .float_icon_2"
    ).css("width", "0px");
    for (i = 0; i < 7; i++) {
      $(
        ".block-fourth-card-container ._step-item2 .left_container .graph_img_container_1 .graph_img .power_icon:nth-child(" +
          (7 - i) +
          ")"
      ).css("opacity", "0");
      if (i < 5) {
        $(
          ".block-fourth-card-container ._step-item2 .left_container .graph_img_container_2 .graph_img .power_icon:nth-child(" +
            (5 - i) +
            ")"
        ).css("opacity", "0");
      }
    }
    $(
      ".block-fourth-card-container ._step-item3 .left_container .graph_img_container_1 .graph_img .power_icon:nth-child(2),.block-fourth-card-container ._step-item3 .left_container .graph_img_container_2 .graph_img .power_icon:nth-child(2)"
    ).css("opacity", "0");
    $(
      ".block-fourth-card-container ._step-item4 .left_container .graph_img_container .graph_img:nth-child(1)"
    ).removeClass("add_transform");
    $(
      ".block-fourth-card-container ._step-item3 .left_container .graph_img_container_1 .graph_img .power_icon:nth-child(1)"
    )
      .css("height", "60px")
      .css("top", "295px");
    $(
      ".block-fourth-card-container ._step-item3 .left_container .graph_img_container_2 .graph_img .power_icon:nth-child(1)"
    )
      .css("height", "60px")
      .css("top", "295px");
  }
}

function ninethCardLightToggleAutoInit() {
  var _i = 0;
  window.setInterval(function () {
    if (_i == 0) {
      $(
        ".block-nineth-card-container .content .left_container .charge_status_container .charge_status"
      )
        .eq(0)
        .removeClass("active");
      $(
        ".block-nineth-card-container .content .left_container .charge_status_container .charge_status"
      )
        .eq(1)
        .addClass("active");
      $(
        ".block-nineth-card-container .content .charger_img_container .charger_img .charger_light_img"
      ).removeClass("red_light");
      $(
        ".block-nineth-card-container .content .charger_img_container .charger_img .charger_light_img"
      ).addClass("green_light");
      _i = 1;
    } else {
      $(
        ".block-nineth-card-container .content .left_container .charge_status_container .charge_status"
      )
        .eq(0)
        .addClass("active");
      $(
        ".block-nineth-card-container .content .left_container .charge_status_container .charge_status"
      )
        .eq(1)
        .removeClass("active");
      $(
        ".block-nineth-card-container .content .charger_img_container .charger_img .charger_light_img"
      ).addClass("red_light");
      $(
        ".block-nineth-card-container .content .charger_img_container .charger_img .charger_light_img"
      ).removeClass("green_light");
      _i = 0;
    }
  }, 1000);
}

function tenthCardToggleBgBtnInit(_i) {
  //var _i = 0;
  clearInterval(tenthCardSetInteval);
  tenthCardSetInteval = setInterval(function () {
    //console.log(_i);
    if (_i == 5) {
      _i = 0;
    }
    $(
      ".block-tenth-card-container .content .feasure_list_container .feasure_list li"
    ).each(function (eq) {
      if (eq == _i) {
        $(
          ".block-tenth-card-container .content .feasure_list_container .feasure_list li"
        ).each(function () {
          $(this).removeClass("active");
        });
        $(".block-tenth-card-container .bg_container").each(function () {
          $(this).removeClass("active");
        });
        $(this).addClass("active");
        $(
          ".block-tenth-card-container .content .feasure_list_container .step_content_mobile_container"
        ).html(stepContentHtml[eq]);
        $(
          ".block-tenth-card-container .bg_container.bg_step" + (eq + 1)
        ).addClass("active");
      } else {
      }
    });
    _i++;
  }, 3000);
  //clearInterval(tenthCardSetInteval);

  //$('.block-tenth-card-container').
}

function tenthCardBtnClickInit() {
  $(
    ".block-tenth-card-container .content .feasure_list_container .feasure_list li"
  ).each(function (eq) {
    $(this)
      .off()
      .click(function () {
        tenthCardToggleBgBtnInit(eq);
        if (window.innerWidth < 768) {
          clearInterval(tenthCardSetInteval);
        }
        $(
          ".block-tenth-card-container .content .feasure_list_container .feasure_list li"
        ).each(function () {
          $(this).removeClass("active");
        });
        $(".block-tenth-card-container .bg_container").each(function () {
          $(this).removeClass("active");
        });
        $(this).addClass("active");
        $(
          ".block-tenth-card-container .content .feasure_list_container .step_content_mobile_container"
        ).html(stepContentHtml[eq]);
        $(
          ".block-tenth-card-container .bg_container.bg_step" + (eq + 1)
        ).addClass("active");
      });
  });
}
