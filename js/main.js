new WOW().init();

$(document).ready(function() {
	//smooth scroll to sctions
	$('nav a').click(function(e) {
		e.preventDefault();
		let target = $(this).data('scroll');
		$('html,body').animate(
			{
				scrollTop: $(target).offset().top
			},
			1000
		);
	});

	//scroll to top
	$('#contact-us a .fa-chevron-up').click(function(e) {
		e.preventDefault();
		$('html,body').animate(
			{
				scrollTop: 0
			},
			1000
		);
	});

	//hide placeholder on focus
	let placeholder;
	$('[placeholder]')
		.focus(function() {
			placeholder = $(this).attr('placeholder');
			$(this).attr('placeholder', '');
		})
		.blur(function() {
			$(this).attr('placeholder', placeholder);
		});
});
