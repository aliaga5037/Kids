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

	// SLIDER2--------------------------------------
	img=['assets/images/add1.jpg','assets/images/add2.jpg','assets/images/add1.jpg']

	$("#slider2 .one")
	.on('click',function(event) {
		$("#slider2 .tablet img").attr('src', img[0]);
	});
	$("#slider2 .two")
	.on('click',function(event) {
		$("#slider2 .tablet img").attr('src', img[1]);
	});
	$("#slider2 .three")
	.on('click',function(event) {
		$("#slider2 .tablet img").attr('src', img[2]);
	});

	// TOP-----------------------------------------------
	$(".top").hide(400);
	$(".top")
	.on('click',function(event) {
		$("html,body")
		.animate({scrollTop:0}, 600);
	});
	$(window).scroll(function(event) {
		var x=$(window).scrollTop();
		if (x<500) {
			$(".top").hide(400);
		}else{
			$(".top").show(400);
		}
	});
});
