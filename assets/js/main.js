jQuery(function ($) {
  //hero Slider
  $('.heroSlider').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 0,
    rtl: true,
    dots: true,
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
  function onScroll(event){
			
		var scrollPosition = $(document).scrollTop();
    //add class active when select item from navbar 
		$('.navbar-collapse .nav-item a[href^="#"').each(function () {
			console.log($(this).attr('href')); 
		  var refElement = $($(this).attr("href"));
		  if (refElement.length&&refElement.position().top -50 <= scrollPosition) {
			$('.navbar-collapse .nav-item ').removeClass("active");
			$(this).parent().addClass("active");
		  }
		  else{
			$(this).removeClass("active");
		  }
  
		});
	  }
    $(document).on("scroll", onScroll);
// animate to the section when click  on it
    $('.navbar-collapse ul li a').on('click', function () {
      $('html, body').animate({ scrollTop: $(this.hash).offset().top  - 50 }, 1000);
      $(".collapse").removeClass("show");
      return false;
    });
    
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
//add fix header when scroll down and remove when back up
    if (scrollTop > $('header').height()) {
      $('header').addClass('scrollNav');
    }

    else {
      $('header').removeClass('scrollNav');
    }

  });
  //close menu when choose item
  $(".navbar .nav-link").click(function(){
    $(".collapse").removeClass("show");
  });

  $(window).on('load', function(){
    setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
  });
  function removeLoader(){
      $( "#loadingDiv" ).fadeOut(500, function() {
        // fadeOut complete. Remove the loading div
        $( "#loadingDiv" ).remove(); //makes page more lightweight 
    });  
  }
});


