$(document).ready(function () {
  const swiper = new Swiper(".portfolio-slides", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".portfolio-slide-wrap .next",
      prevEl: ".portfolio-slide-wrap .prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  const menuToggleBtn = $(".menu-toggle-btn"),
    mainMenu = $(".main-menu");
  menuToggleBtn.click(function () {
    mainMenu.slideToggle();
  });
});
