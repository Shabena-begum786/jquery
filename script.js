$(document).ready(function() { 
  // Common sticky nav
  $(window).scroll(function() { 
    if ($(this).scrollTop() > 30) { 
      $("nav").addClass("sticky"); 
    } else { 
      $("nav").removeClass("sticky"); 
    } 
  }); 

  // Scroll animation function
  $.fn.scrollFX = function() { 
    $(this).each(function() { 
      let element = $(this); 
      $(window).scroll(function() { 
        if ($(window).scrollTop() > element.offset().top - $(window).height()) { 
          element.addClass("scrolled"); 
        } 
      }); 
    }); 
  }; 
  $(".animate-on-scroll").scrollFX(); 
});
