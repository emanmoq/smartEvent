jQuery(function ($) {
    //hero Slider
    $('.heroSlider').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 0,
        rtl:true,
        dots:false,
        items:1
      });
      $(".gallerySlider").owlCarousel({
        autoplay: true,
        loop: true,
        margin: 0,
        rtl:true,
        dots:false,
        margin:15,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:2
          },
          1000:{
            items:5
          }
        }
      });
});


