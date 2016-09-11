$("#slider")
.on('mousemove',function(event) {
	var x=event.pageX
	var y=event.pageY;

		if(x++){
			$(".girl1").css('marginLeft', -x/30);
			$(".girl2").css('marginLeft', x/25);
			$(".boy1").css('marginLeft', -x/35);

			$(".fun").css('marginLeft', x/40);
			$(".two").css('marginLeft', x/40);
			$(".cup").css('marginLeft', x/40);
			$(".bring").css('marginLeft', -x/60);
			$(".life").css('marginLeft', -x/60);
			$(".trendy").css('marginLeft',-x/60);

			$(".boy2").css('marginLeft',-x/35);
			$(".boy3").css('marginLeft',-x/40);
		}

		if(y++){
			$(".girl1").css('marginTop', -y/15);
			$(".girl2").css('marginTop', y/25);

			$(".fun").css('marginTop', y/40);
			$(".two").css('marginTop', y/40);
			$(".cup").css('marginTop', y/40);
			$(".bring").css('marginTop', -y/60);
			$(".life").css('marginTop', -y/60);
			$(".trendy").css('marginTop',-y/60);

			$(".boy2").css('marginTop',-y/35);
			$(".boy3").css('marginTop',-y/40);
		}
		
});

