(function ($) {
	"use strict";

	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});

	/*=========================
	HERO SLIDER JS
	===========================*/
	
	const progressLine = document.querySelectorAll('.progress-line')
	const heroSlideCount = document.querySelectorAll('.hero-slide').length

	function heroSlider() {
		var BasicSlider = $('.hero-slider');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.hero-slide:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.hero-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: true,
			prevArrow : '.hero-prev',
			nextArrow : '.hero-next',
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	heroSlider();

	progressLine.forEach(line => {
		line.style.width = line.parentElement.clientWidth / heroSlideCount * 1 + "px"
	});
	$('.hero-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		progressLine.forEach(line => {
			line.style.width = line.parentElement.clientWidth / heroSlideCount * (nextSlide + 1) + "px"
		});
	 });



	/*=========================
	team-slider
	===========================*/
	$('.team-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		centerMode: true,
		centerPadding: '0px',
		arrows: true,
		prevArrow : '.team-prev',
		nextArrow : '.team-next',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	/*=========================
	product-slider
	===========================*/
	$('.product-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow : '.product-prev',
		nextArrow : '.product-next',

		responsive: [{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 990,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});
	/*=========================
	service-slider
	===========================*/
	$('.service-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		infinite: false,
		arrows: true,
		prevArrow : '.service-prev',
		nextArrow : '.service-next',

		responsive: [{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 990,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	/*=========================
	tips-slider
	===========================*/
	$('.tips-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		infinite: false,
		arrows: true,
		prevArrow : '.tips-prev',
		nextArrow : '.tips-next',

		responsive: [{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 990,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});

	/*=========================
	testemony-slider
	===========================*/
	$('.testemony-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow : '.testemony-prev',
		nextArrow : '.testemony-next',
	});


	// service card
	const serviceCard = document.querySelectorAll('.service-card, .service-slide')

	serviceCard.forEach(card => {
		let serviceCardHover = card.querySelector('.hover-expand')
		card.addEventListener('mouseover', ()=>{
			serviceCardHover.style.maxHeight = serviceCardHover.scrollHeight + 15 + 'px'
			serviceCardHover.classList.add('active')
		})
		card.addEventListener('mouseout', ()=>{
			serviceCardHover.style.maxHeight = null
		})

	});

	// tab
	tabFunc('.package-links ul li', '.package-content')
	function tabFunc(tabLinks, tabContents) {
		let links = document.querySelectorAll(tabLinks)
		let contents = document.querySelectorAll(tabContents)

		links.forEach((link, index) => {
			link.addEventListener('click', ()=>{
				for (let i = 0; i < links.length; i++) {
					links[i].classList.remove('active')
					contents[i].classList.remove('active')
				}
				link.classList.add('active')
				contents[index].classList.add('active')
			})
		});

	}


	/*=========================
	magnificPopup image JS
	===========================*/
	$('.video-btn').magnificPopup({
		type: 'iframe'
	});

	$('.pop-img-btn').magnificPopup({
		type: 'image'
	});

	// reponsive menu
	const resBar = document.querySelectorAll('.humberger-bar, .resonsive-slide, .resonsive-slide-overlay')
	resBar.forEach(btn => {
		btn.addEventListener('click', ()=>{
			for (let i = 0; i < resBar.length; i++) {
				resBar[i].classList.toggle('active')
			}
		})
	});
	
	
	// skrollr activation
	var s = skrollr.init();
	if (s.isMobile()) {
			s.destroy();
	}

	/*=========================
	SCROLL-UP JS
	===========================*/
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	
	// One Page Nav
	var top_offset = $('.header-area').height() - 170;
	$('.mainmenu ul, .sidebar-menu ul').onePageNav({
		scrollOffset: top_offset,
	});


	
})(jQuery);