$(document).ready(function(){

		
	//mobile manu
	$('#mobile-menu').slicknav({
		'label' : '',
	});

	//trending-product-active
	$('.trending-product-active').slick({
		dots: false,
		accessibility:true,
		autoplay:false,
		autoplaySpeed:5000,
		infinite: true,
		arrows:false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});
	//hero active
	$('.hero-active').slick({
		dots: false,
		accessibility:true,
		autoplay:true,
		autoplaySpeed:5000,
		infinite: true,
		arrows:false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  });

	//brand-active
	$('.brand-active').slick({
		dots: false,
		accessibility:true,
		autoplay:false,
		autoplaySpeed:5000,
		infinite: true,
		arrows:false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
			breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
			breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	
	//selector
	$('select').niceSelect();


	// videos play
	$('#videos-play').magnificPopup({
		type: 'iframe',
		iframe: {
			patterns: {
			  youtube: {
				index: 'youtube.com/', 
		  
				id: 'v=', 
		  
				src: 'http://www.youtube.com/embed/%id%?autoplay=1'
			  },
			  vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			  },
			  gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			  }
			},
		  
			srcAction: 'iframe_src', 
		  }
	});
	
	//range
	$("#slider-range" ).slider({
		range: true,
		min: 0,
		max: 500,
		values: [ 10, 90 ],
		slide: function( event, ui ) {
			$( "#amount" ).text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
		});

	$( "#amount" ).text( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	" - $" + $( "#slider-range" ).slider( "values", 1 ) );

	//product-details-slide

	$('.product-details-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		centerMode: true,
		asNavFor: '.product-nav , .product-discrip-active'
	});
	$('.product-discrip-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		centerMode: true,
		asNavFor: '.product-nav ,.product-details-active'
	});
	$('.product-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.product-details-active , .product-discrip-active',
		dots: false,
		centerMode: true,
		centerPadding:0,
		vertical:true,
		verticalSwiping:true,
		focusOnSelect: true,
		prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-chevron-up" aria-hidden="true"></i></button>',
		nextArrow:'<button type="button" class="slick-next"><i class="fa fa-chevron-down" aria-hidden="true"></i></button>',
		responsive: [
			{
			breakpoint: 992,
				settings: {
					slidesToScroll: 1,
					slidesToShow: 4,
				}
			},
			{
			breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
			breakpoint: 576,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			}
		]
	});

	//related-product-active
	$('.related-product-active').slick({
		dots: false,
		accessibility:true,
		autoplay:false,
		autoplaySpeed:5000,
		infinite: true,
		arrows:false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});
	//contact-loging
	$("#submit").click(function(e){
        var inValid = true;
        $("input[type='text']#requered").each(function(){
            if($(this).val()==''){
                inValid = false;
                $(this).css({
                    "border":"1px solid #d9485b",
                    "background":''
                });
            }else{
                $(this).css({
                    "border":"",
                    "background":''
                });
            }
        });
        $("input[type='email']#requered").each(function(){
            if($(this).val()==''){
                inValid = false;
                $(this).css({
                    "border":"1px solid #d9485b",
                    "background":''
                });
            }else{
                $(this).css({
                    "border":"",
                    "background":''
                });
            }
        });
        $("input[type='number']#requered").each(function(){
            if($(this).val()==''){
                inValid = false;
                $(this).css({
                    "border":"1px solid #d9485b",
                    "background":''
                });
            }else{
                $(this).css({
                    "border":"",
                    "background":''
                });
            }
        });
        if(inValid == false){
            e.preventDefault();
        }else{
            clear();
            document.getElementById("reply") .innerHTML = "thank fon senting message dear";
            return false;
        }
    });

    //costomar function

    function clear(){
        $('#myaction :input').each(function(){
            $(this).val('');
        });
    }



	/* scroll-top */
	$(window).scroll(function(){
		if($(this).scrollTop() > 200 ) {
			$('#scroll').addClass('scroll-top');

		} else {
			$('#scroll').removeClass('scroll-top');
		}
	});

	$('#scroll').click(function(){
		$('html, body').animate({
			scrollTop:0
		},300);
	});

	//menu-stacky

	$(window).on('scroll', function(){
		if($(window).scrollTop() > 300){
			$('.header-area').addClass('stacky');
		}
		else{
			$('.header-area').removeClass('stacky');
		}
	})

	//mobile-menu
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 200){
			$('.slicknav_menu').addClass('stacky');
		}
		else{
			$('.slicknav_menu').removeClass('stacky');
		}
	})



});

//preload-active
$(window).on('load', function(){
	$('.preload-area').fadeOut()
});


	
