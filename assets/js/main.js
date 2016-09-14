$(document).ready(function(){

$(window).bind('scroll', function () { //scroll
    if ($(window).scrollTop() > 50) {
        $('.mn').addClass('fixed').css({backgroundColor: 'white'});
    } else {
        $('.mn').removeClass('fixed');
    }
});


// //  // $('#header ul li a')
// //  // .hover(function(){
// //  // 	$(this).css({backgroundColor: 'blue', color: 'white'}).stop().slideToggle(400);
 
// //  // });

// //  $('#header ul li a')
// //  .hover(function(){
// //  	$(this).css({backgroundColor: 'blue', color: 'white'}).stop().slideToggle(600);
// //  },function(){
// //  	$(this).css({backgroundColor: 'white', color: 'blue'}).stop().slideToggle(600);
// //  });


});
