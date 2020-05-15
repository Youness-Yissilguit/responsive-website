/*global $, console, alert*/

$(function () {
	'use strict';

	$(window).scroll(function () {

		var navbar = $('nav'),
			button = $('.fa-chevron-circle-up');

		if ($(window).scrollTop() >= navbar.outerHeight()) {

			navbar.addClass('low-opacity');

		} else {
			navbar.removeClass('low-opacity');
		}

		//show the botton of scroll top
		if ($(window).scrollTop() >= 400) {

			button.fadeIn();

		} else {
			button.fadeOut();
		}
	});

	//body paddinig top
	$('body').css('paddingTop', $('nav').outerHeight() + 'px');

	//navbar  click
	$('nav .navbar-nav .nav-item .nav-link').on('click', function () {

		$('nav .navbar-nav .nav-item').removeClass('active');
		$(this).parent('.nav-item').addClass('active');

		$('html, body').animate({
			scrollTop: $($(this).data('link')).offset().top
		}, 800);
	});

	//change content onclickig on Tabs
	$('.section-tabs .list-group-item').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
		console.log($(this).data('content'));

		$('.section-tabs .content').fadeOut().delay(600);
		$($(this).data('content')).fadeIn(400);
	});

	//scroll to top
	$('.fa-chevron-circle-up').click(function () {
		$('html, body').animate({
			scrollTop : 0
		}, 1000);
	});

});
