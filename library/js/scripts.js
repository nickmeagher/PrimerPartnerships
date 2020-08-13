jQuery(document).ready(function($) {
	
	// Slick Slider
	$('.work-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true
  });
    //caches a jQuery object containing the header element
  var body = $(".navbar-light");
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 140) {
          body.removeClass('navbar-light').addClass("nav-scroll");
      } else {
          body.removeClass("nav-scroll").addClass('navbar-light');
      }
  }); 
		//Swaps Navbrand img src on scroll
	
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 140) {
          $("#primer-logo").attr("src","file:///Users/dawsonwear/Documents/GitHub/PrimerPartnerships/library/images/primer-logo-scroll.svg");
      } else {
          $("#primer-logo").attr("src","file:///Users/dawsonwear/Documents/GitHub/PrimerPartnerships/library/images/primer-logo.svg");
      }
  }); 
	
	
});

//Nav Scrolling
