/******************************************/
/*         INDEX                          */
/*==========================================
 *     01.  mobile menu         		   *
 *     02.  portfolio gallery              *
 *     03.  team model           		   *
 *     04.  Dropdown toggle         	   *
 *     05.  scroll spy            		   *
 *     06.  Date Picker         		   *
 *     07.  slider js           		   *
 ==========================================*/


/* ====== mobile menu ========*/

burger = document.querySelector('.burg');
$(document).ready(function () {
	$("#toggle-button").click(function () {
		
		$("#toggle-menu").toggleClass('-translate-y-[200%] ');
	});

	$('.nav_link').click(function(e){
		e.preventDefault()
		$("#toggle-menu").removeClass('-translate-y-[200%] ');
	})
});


/*======= portfolio gallery ========*/ 
$(window).on('load', function () {
	'use strict';
	var $container = $('.portfoliodiv');
	$container.isotope({
		filter: '*',
		layoutMode: 'masonry',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: true,
			layoutMode: 'fitRows',

		},

	});

	$('.filter ul li a').on('click', function () {
		$('.filter .active').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');


		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				queue: true,
			}
		});

		return false;
	});

});

/* ======= team model =======*/ 

const models = [1, 2, 3, 4]; // Array of model numbers

models.forEach((num) => {
    const model = document.getElementById(`model${num}`);

    window[`openmodel${num}`] = () => {
        model.classList.toggle('model-desp');
    };

    window[`closemodel${num}`] = () => {
        model.classList.remove('model-desp');
    };
});

/*======= Dropdown toggle ==========*/

$(function () {
	$('.dropdown-toggle').click(function () {
		$(this).next('.dropdown').slideToggle();
		$(this).find('svg').toggleClass('rotate-180'); // Toggle the rotation class
	});
	$(document).click(function (e) {
		var target = e.target;
		if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
			$('.dropdown').slideUp();
			$('.dropdown-toggle').find('svg').removeClass('rotate-180'); // Remove the rotation class
		}
	});
});

/*======== scroll spy  ===========*/

$(document).ready(function () {
    var sectionIds = $('.main-link li a.nav_link');

    // Smooth scrolling when clicking on navigation links
    sectionIds.click(function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        var target = $(this).attr('href');
        var targetOffset = $(target).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000); // Adjust the duration (1000ms = 1 second) as needed
    });

    // Highlighting navigation links on scroll

    $(document).scroll(function () {
        sectionIds.each(function () {
            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();

            if (scrollPosition < containerBottom - 100 && scrollPosition >= containerOffset - 0) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
});
 

/* ============= Date Picker =========*/

$(function() {
	$('input[name="booking"]').daterangepicker({
	  singleDatePicker: true,
	  showDropdowns: true,
	  currentDate: true,
	  minYear: 2000,
	  maxYear: parseInt(moment().format('YYYY'),10)
	}, )
  });



/*========= slider js =========*/

// hero slider 
var swiper = new Swiper(".mySwiper", {

	loop: true,
	speed: 2000,
	parallax: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},

	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// secvice slider 
var swiper = new Swiper(".service-swiper", {
	loop: true,
	speed: 2200,
	parallax: true,
	slidesPerView: "auto",
	centeredSlides: false,
	spaceBetween: 0,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
        640: {
          slidesPerView: 1,
		  spaceBetween: 0,
        },
        768: {
          slidesPerView: 1,
          
        },
        1024: {
          slidesPerView: 'auto',
		  centeredSlides: true,
        },
      },
});

// testimonial slider 
var swiper = new Swiper(".testi-slider", {
	spaceBetween: 0,
	effect: "fade",
	speed: 1500,
	loop: true,
	perallax: true,
	pagination: {
		el: ".swiper-pagination1",
		clickable: true,
	},
});