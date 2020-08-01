'use strict';
 
function toggleMenu(){
	var menuDrawer = document.getElementById('menu-drawer');
	var menuButton = document.querySelector('.menu-btn');
	var arr = '';
	
	if(menuDrawer.style.display == 'none' || menuDrawer.style.display == '') {
		menuDrawer.style.display = 'block';
		
		//menuButton.classList.toggle('is-open');
	
		arr = menuButton.className.split(' ');
		arr.push('is-open');
		arr = arr.join(" ");
		menuButton.className = arr;
		return;
	}else{
		menuDrawer.style.display = 'none';
		
		//menuButton.classList.toggle('is-open');
		
		arr = menuButton.className.split(" ");
		arr.pop();
		arr = arr.join(" ");
		menuButton.className = arr;
		return;		
	}
}

/*
setPro('header', 'height', 'menu-drawer', 'top');
setPro('header', 'height', 'slider-section', 'marginTop');*/
setPro('form-left-column', 'height', 'textarea', 'height');
window.addEventListener("resize", function(){
	/*setPro('header', 'height', 'menu-drawer', 'top');
	setPro('header', 'height', 'slider-section', 'marginTop');*/
	setPro('form-left-column', 'height', 'textarea', 'height');
});

//alert('the height of header is ' + getComputedStyle(document.getElementById('header')).height)


/*
*function setPro()
* This sets the css property of an element (target) equal to the css property value of another element (capture)
* It essentially grabs the css property value of the "capture" and uses it as the property value of "target"

*FOR EXAMPLE:*
*
* Since the height of header is "auto" (determined by its descendants)
* If we set the "top" property of our nav-bar to an 'absolute' value, it would overlap (definitely not what we want).
* So, it can help set the value of the "top" property of the nav-bar to the value of the "height" property of the header
* this helps to prevent overlapping.
*/
function setPro(captureId, captureCSS, targetId, targetCSS, targetPull) {
	targetPull = (targetPull) ? targetPull : '';
	var theCapture = document.getElementById(captureId);
	var theTarget = document.getElementById(targetId);
	theTarget.style[targetCSS] = targetPull + getComputedStyle(theCapture)[captureCSS];
}


function validateForm() {
	var elem, fname, email, subject, message, emptyElem, errorMessage;
	elem = document.forms['contact-form'].elements;
	fname = elem['fname'];
	email = elem['email'];
	subject = elem['subject'];
	message = elem['message'];
	//emptyElem = fname.value && email.value && message.value;
	emptyElem = fname.value.length < 1 ? fname : email.value.length < 1  ? email : message.value.length < 1  ? message : 'good';
	
	reverse_color(elem);
	
	if(emptyElem == 'good') {
		if(fname.value.length > 5 && fname.value !== 'name too small') {
			if(/^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/.test(email.value)) {
				//submitted
				return true;
			}else {
				email.value = 'enter a valid email';
				email.focus();
				email.style.color = 'red';
				return false;
			}
		}else {
			fname.value = 'name too small';
			fname.focus();
			fname.style.color = 'red';
			return false;
		}
	}else {		
		emptyElem.focus();
		//emptyElem.style.backgroundColor = "white";
		emptyElem.style.color = "red"
		return false;
	}
	
	function reverse_color(obj) {
		for(var i = 0; i < obj.length - 1; i++) {
			if(obj[i].style.color == 'red') {
				obj[i].style.color = 'gray'
			}
		}
	}
}


(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
  
    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();
  
      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
      }
    });
  });

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on( 'click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

})(jQuery);