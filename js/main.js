(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });
})(jQuery);

$(document).ready(function () {
  // preloader
  $("#preloader").fadeOut(500);
});

$(function () {
  // Remove svg.radial-progress .complete inline styling
  $("svg.radial-progress").each(function (index, value) {
    $(this).find($("circle.complete")).removeAttr("style");
  });

  // Activate progress animation on scroll
  $(window)
    .scroll(function () {
      $("svg.radial-progress").each(function (index, value) {
        // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
        if (
          $(window).scrollTop() >
            $(this).offset().top - $(window).height() * 0.75 &&
          $(window).scrollTop() <
            $(this).offset().top + $(this).height() - $(window).height() * 0.25
        ) {
          // Get percentage of progress
          percent = $(value).data("percentage");
          // Get radius of the svg's circle.complete
          radius = $(this).find($("circle.complete")).attr("r");
          // Get circumference (2πr)
          circumference = 2 * Math.PI * radius;
          // Get stroke-dashoffset value based on the percentage of the circumference
          strokeDashOffset = circumference - (percent * circumference) / 100;
          // Transition progress for 1.25 seconds
          $(this)
            .find($("circle.complete"))
            .animate({ "stroke-dashoffset": strokeDashOffset }, 1250);
        }
      });
    })
    .trigger("scroll");
});

// chart
{
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Sat", "Sun", "Man", "Tue", "Wed", "Thu", "Fri"],
      datasets: [
        {
          label: "",
          data: [3, 7, 5, 6, 5, 8, 4],
          borderWidth: 1,
          backgroundColor: ["#EDF5FF", "#1C75CE"],
          borderWidth: 0,
          borderRadius: 6,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          border: {
            display: false,
          },
          grid: {
            drawOnChartArea: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            padding: 10,
            callback: (value, index, values) => {},
          },
        },
        x: {
          border: {
            display: false,
          },
          grid: {
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            padding: 12,
            color: "#9E9E9E",
            font: {
              Weight: "bold",
            },
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            boxWidth: 0,
          },
        },
      },
    },
  });
}

//custom-scrollbar
$(".custom-scrollbar").mCustomScrollbar({
  scrollButtons: { enable: true },
  theme: "dark-thick",
  axis: "yx",
  scrollbarPosition: "inside",
  mouseWheelPixels: 50,
  scrollInertia: 50,
  scrollbarPosition: "inside",
  scrollButtons: { enable: false },
});
