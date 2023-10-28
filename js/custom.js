// ****************************banner part start*********************************/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ****************************banner part end*********************************/

//*************************about veno-box start*******************************/
new VenoBox({
  selector: ".my-video-links",
});
//*************************about veno-box end*******************************/

// ************************back to top button part start*****************************/
$(window).scroll(function () {
  if ($(this).scrollTop() > 600) {
    $(".back_top i").fadeIn();
  } else {
    $(".back_top i").fadeOut();
  }

  if ($(this).scrollTop() > 50) {
    $(".scrool_nav").addClass("bggg");
  } else {
    $(".scrool_nav").removeClass("bggg");
  }
});
$(".back_top i").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    600
  );
  return false;
});
// ************************back to top button part end*****************************/



// ******************************about us aos animation start**********************/
AOS.init();
// ******************************about us aos animation end**********************/

// ************************gallery mixitup part start********************************/
var mixer = mixitup(".gallery_mixer");
// ************************gallery mixitup part start********************************/

//*************************gallery lightbox part start ********************************/
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  positionFromTop: 150,
  alwaysShowNavOnTouchDevices: true,
});
//*************************gallery lightbox part end ********************************/

//***************************/ review slick part start***************************/
$(".review_slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  prevArrow:
    '<span class="prev_arrow"><i class="fa-solid fa-angle-left"></i></span>',
  nextArrow:
    '<span class="next_arrow"><i class="fa-solid fa-angle-right"></i></span>',
});
//***************************/ review slick part end***************************/

//**************************award slick part start********************************/
$(".award_slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        dots: false,
      },
    },
  ],
});
//**************************award slick part end**********************************/
