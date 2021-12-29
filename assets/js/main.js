jQuery(function ($) {
  //hero Slider
  $('.heroSlider').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 0,
    rtl: true,
    dots: false,
    items: 1
  });
  $(".gallerySlider").owlCarousel({
    autoplay: true,
    loop: true,
    rtl: true,
    dots: false,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 5
      }
    }
  });
  $(".partnerSlider").owlCarousel({
    autoplay: true,
    loop: true,
    rtl: true,
    dots: false,
    margin: 60,
    nav: true,
    responsive: {
      0: {
        items: 2,
      
      },
      600: {
        items: 5
      },
      1000: {
        items: 7
      }
    }
  });
  $(".clientsSlider").owlCarousel({
    autoplay: true,
    loop: true,
    rtl: true,
    dots: false,
    margin:30,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav:false,
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});


