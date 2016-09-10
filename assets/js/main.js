$(document).ready(function($) {
	$("#primary .col-md-3")
	.on('mouseover',function(event) {
		$(this).find('h4').css('color', '#008C99')
		$(this).find('.circle')
			.css({
				opacity: '.7',
				transform: 'scale(16)'
			});
		$(this).find('i').css('opacity', '1')
		$(this).find('img').css('border', '2px solid #008C99');
		});


	$("#primary .col-md-3")
	.on('mouseleave',function(event) {
		$(this).find('h4').css('color', '#333333')
		$(this).find('.circle')
			.css({
				opacity: '0',
				transform: 'scale(1)'
			});
		$(this).find('i').css('opacity', '0');
		$(this).find('img').css('border', '2px solid white');
	});


	// PORTFOLIO--------------------------------------
	$("#portfolio .hexagon")
	.on('mouseover',function(event) {
		$(this).find('img').css('opacity', '.3')
		$(this).find('i').css('opacity', '1');
	});
	$("#portfolio .hexagon")
	.on('mouseleave',function(event) {
		$(this).find('img').css('opacity', '1')
		$(this).find('i').css('opacity', '0');
	});


	// PRODUCTS--------------------------------------
	var width=$("#products .margin .row").width();
	$("#products .hover").width(width);

	$(window).resize(function(event) {
		var width=$("#products .margin .row").width();
		$("#products .hover").width(width);
	});

	$("#products .col-md-3")
	.on('mouseover', function(event) {
		$(this).find('.hover').css('opacity', '.5')
		$(this).find('button').css('opacity', '1')
		$(this).find('.name').css('color', '#27939F');
	});

	$("#products .col-md-3")
	.on('mouseleave', function(event) {
		$(this).find('.hover').css('opacity', '0')
		$(this).find('button').css('opacity', '0')
		$(this).find('.name').css('color', '#8F9393');
	});
});
