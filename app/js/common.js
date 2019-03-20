//slick-clider
$(function() {
	$(".slider").slick ({
		autoplay: false,
		dots: true,
		arrows: false,
	});
});


//scroll top 
$(document).ready(function(){
  $('body').append('<a href="#" id="go__top"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="chevron-up"><polyline fill="none" stroke="#fff" stroke-width="1.03" points="4 13 10 7 16 13"></polyline></svg></a>');
});

$(function() {
  	$.fn.scrollToTop = function() {
    	$(this).hide().removeAttr("href");
      		if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
    	var scrollDiv = $(this);
 		$(window).scroll(function() {
      		if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
      		else $(scrollDiv).fadeIn("slow")
  		});
  		$(this).click(function() {
  			$("html, body").animate({scrollTop: 0}, "slow")
		})
 	}
});

$(function() {
	$("#go__top").scrollToTop();
});

//go_down list
$(".go__down").click(function(){
	$("html, body").animate({scrollTop: $("header").height()+ 10 },"slow");
return false;
});


//btn__burger
$(document).ready(function(){
	$('.btn__burger').click(function(){
		$('.btn__burger').toggleClass('btn__burger_active')
	});
	$('.menu-btn').click(function(){
		$('.menu-btn').toggleClass('menu-btn_active')
		$('.menu').toggleClass('menu_active')
	});
});