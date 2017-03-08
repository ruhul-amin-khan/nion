$(document).ready(function() {
	
	// data-toggle
	$(".toggle-btn").on("click", function () {
	
		$(this).toggleClass("active");
		$("#home").toggleClass("active");
	});


	// isotope
	$(".project-item").isotope({

		itemSelector: '.single-work',
		layoutMode: 'fitRows',
		stagger: 30
	});

	// Add isotope click function
	$('.work-btn-ul li').click(function(){

		$(".work-btn-ul li").removeClass("active");

			$(this).addClass("active");
			var selector = $(this).attr('data-filter');

			$(".project-item").isotope({        	
				filter: selector,
				animationOptions: {
				duration: 1000,
				easing: 'linear',
				queue: false,
			}
		});

		return false;
	});

	// counter
	$('.counter').counterUp(); 

	// transparent nav
	$(window).scroll(function(){

		if($(document).scrollTop() > 200){

			$(".navbar").addClass('navbar-bg');
		}
		
		else{

			$(".navbar").removeClass('navbar-bg');
		}
	});

	// animated scrolling
	$('.nav li a').click(function() {

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {

			var $target = $(this.hash);
			$target = $target.length && $target
			|| $('[name=' + this.hash.slice(1) +']');

		if ($target.length) {

			var targetOffset = $target.offset().top;
			$('html,body')
			.animate({scrollTop: targetOffset}, 2000);
			return false;
			}
		}
	});

	// lightbox
	$(document).on('click', '[data-toggle="lightbox"]', function(event) {

		event.preventDefault();
		$(this).ekkoLightbox();

		});

		$('li.smooth-menu a, .home-arrow-down a').bind('click', function (event) {
			var $anchor = $(this);
			var headerH = '63';

		$('html, body').stop().animate({

		scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
		}, 1200, 'easeInOutExpo');

		//you can use any animation
		event.preventDefault();
	});

	new WOW().init();
});




