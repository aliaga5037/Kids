//  * Leyla   contact Us  slideri    --------------------------------------

imgs = ['assets/images/activity1.jpg','assets/images/activity2.jpg','assets/images/activity3.jpg','assets/images/activity1.jpg','assets/images/activity2.jpg','assets/images/activity3.jpg']  
var sliderWidth=576; 
var sliderHeight=274; 
var count = 0; 

function slider() {
	$('#slider') 
	.append('<div></div><div></div>')
	.css({
		width: sliderWidth+"px",
		height: sliderHeight+"px"
	});

	$('#slider div:nth-child(2)') 
	.addClass('frame')
	.next()

	.children()
	.css({
		position: 'relative',
		bottom:sliderHeight/2+25+'px',

		height:'50px',

	})

// contact Us slideri  bitdi -------------------------------------------------



	
	$(".frame") 
	.css({
		width: sliderWidth+"px",
		height: sliderHeight+"px",
		overflow:"hidden",
		background:"url("+imgs[0]+")",
		backgroundSize:"cover",
		backgroundRepeat: 'no-repeat',
		backgroundPosition:"center center"
	});

	$('.frame').append('<div id="btnGroup"><button id="left"><</button><button id="right">></button></div>');
	$('#btnGroup').css({
		marginTop: sliderHeight/2 +"px"
	});

	// left button =====================================

	$("#left")
	.css({

		fontSize:"1.5em",
		marginLeft: '20'+'px',
		background:"transparent",
		color:"white",
		fontWeight:"600",
		outline:"none",
		border:"none",
		boxShadow:"0px 0px 5px white"
	})
	.addClass('pull-left btn btn-primary')
	.on('click', function() {
		count--;
		if (count == 0) {
			
			count=imgs.length ;
		}
		$('.frame')
			.css({
				backgroundImage:"url("+imgs[count]+")" 
			});
	});
	

	// right button ---------------------------------------------------

	$("#right")
	.css({
		fontSize:"1.5em",
		marginRight: '20'+'px',
		background:"transparent",
		color:"white",
		fontWeight:"600",
		outline:"none",
		border:"none",
		boxShadow:"0px 0px 5px white"
	})
	.addClass('pull-right btn btn-primary')
	.on('click', function() {
		count++;
		if (count == imgs.length) {
			
			count=0;
		}
		$('.frame')
			.css({
				backgroundImage:"url("+imgs[count]+")" 
				
			});

	});
	


}

// -------------------------------------------------------------------------------------
(function($) {

  $.fn.extend({
    slider: function(options) {
        var defaultOptions = {
          scroll: 200,
          mode: "full"
        };
        options = $.extend(options, defaultOptions);

        this.each(function() {

          var $slider = $(this);
          var $items_wrap = $(this)
            .find('.items-wrap')
            .first();

          $(this)
            .find('.next-control')
            .click(next);
          $(this)
            .find('.prev-control')
            .click(prev);
  
          function next() {
            slideFixed(-options.scroll); //slide to left
          }

          function prev() {
            slideFixed(options.scroll); //slide to right
          }

          function slideFixed(delta) {
            if ($items_wrap.prop('scrollWidth') < $slider.width()) {
              return;
            }

            var maxMarginLeft = 0;
            var minMarginLeft = $slider.width() - $items_wrap.prop('scrollWidth');
            var newMarginLeft = parseInt($items_wrap.css('margin-left')) + delta;

            if (newMarginLeft > maxMarginLeft) {
              newMarginLeft = maxMarginLeft;
            } else if (newMarginLeft < minMarginLeft) {
              newMarginLeft = minMarginLeft;
            }

            $items_wrap.css('margin-left', newMarginLeft);
          }

          function slideFull() {
            
 
            if ($items_wrap.prop('scrollWidth') < $slider.width()) {
              return;
            }

            var maxMarginLeft = 0;
            var minMarginLeft = $slider.width() - $items_wrap.prop('scrollWidth');
            var newMarginLeft = parseInt($items_wrap.css('margin-left')) + delta;

            if (newMarginLeft > maxMarginLeft) {
              newMarginLeft = maxMarginLeft;
            } else if (newMarginLeft < minMarginLeft) {
              newMarginLeft = minMarginLeft;
            }

            $items_wrap.css('margin-left', newMarginLeft);
          }
          
        }); 
      } 
  }); 


  $(document).ready(function() {
    $('.slider').slider();
  });

})(jQuery); 

           