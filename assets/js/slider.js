$("#slider")
.on('mousemove',function(event) {
	var x=event.pageX
	var y=event.pageY;

		if(x++){
			$("#slider .girl1").css('marginLeft', -x/30+'px');
			$("#slider .girl2").css('marginLeft', x/25+'px');
			$("#slider .boy1").css('marginLeft', -x/35+'px');

			$("#slider .fun").css('marginLeft', x/40+'px');
			$("#slider .two").css('marginLeft', x/40+'px');
			$("#slider .cup").css('marginLeft', x/40+'px');
			$("#slider .bring").css('marginLeft', -x/60+'px');
			$("#slider .life").css('marginLeft', -x/60+'px');
			$("#slider .trendy").css('marginLeft',-x/60+'px');

			$("#slider .boy2").css('marginLeft',-x/35+'px');
			$("#slider .boy3").css('marginLeft',-x/40+'px');
		}

		if(y++){
			$("#slider .girl1").css('marginTop', -y/15+'px');
			$("#slider .girl2").css('marginTop', y/25+'px');

			$("#slider .fun").css('marginTop', y/40+'px');
			$("#slider .two").css('marginTop', y/40+'px');
			$("#slider .cup").css('marginTop', y/40+'px');
			$("#slider .bring").css('marginTop', -y/60+'px');
			$("#slider .life").css('marginTop', -y/60+'px');
			$("#slider .trendy").css('marginTop',-y/60+'px');

			$("#slider .boy2").css('marginTop',-y/35+'px');
			$("#slider .boy3").css('marginTop',-y/40+'px');
		}
		
});

