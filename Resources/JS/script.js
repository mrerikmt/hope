$(document).ready(function () {
  /* For the sticky navigation */
  $(".js--section-mission").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;",
    }
  );

  /* Scroll on buttons */
  $(".js--scroll-to-help").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-help").offset().top - 50 },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-mission").offset().top - 50 },
      1000
    );
  });

  /* Navigation Scroll */

  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 50,
            },
            1500
          );
          return false;
        }
      }
    });
  });

  /* Animations on Scroll */
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "75%",
    }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  // $(".js--wp-3").waypoint(
  //   function (direction) {
  //     $(".js--wp-3").addClass("animated fadeIn");
  //   },
  //   {
  //     offset: "75%",
  //   }
  // );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "50%",
    }
  );

  /* Mobile navigation */
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
});

// var waypoints = $("#handler-first").waypoint(
//   function (direction) {
//     notify(this.element.id + " hit 25% from top of window");
//   },
//   {
//     offset: "25%",
//   }
// );

// Display Navbar after widow resize

// window.addEventListener("resize", (e) => {
//   // e.preventDefault();
//   const width = window.innerWidth;
//   const nav = document.querySelector(".main-nav");
//   if (width > 850) {
//     nav.style.display = "flex";
//   }
//   if (width <= 850) {
//     nav.style.display = "none";
//   }
// });

// -----------Form Submission----------------------

const form = document.getElementById("email-form");
// const submitBtn = document.getElementById("my-form-button");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok == true) {
        status.innerHTML = "Thank you! Your submission has been received!";
        form.reset();
      } else {
        status.innerHTML =
          "Uh Oh! Something went wrong while submitting the form. Try again.";
      }
    })
    .catch((error) => {
      status.innerHTML =
        "Uh Oh! Something went wrong while submitting the form. Try again.";
    });
}

form.addEventListener("submit", handleSubmit);
