

//滾動上menu
var headerView_2=function(){
		var scroll=$(window).scrollTop();
		if(scroll<=115){
			$("body").removeClass("upmenu");
		}
		else{
			$("body").addClass("upmenu");
		}
	}
headerView_2();$(window).scroll(function(){headerView_2();});
 

// end 滾動上menu

 
//側邊menu
$(".n-right").click(function(){
             
              $(".slider-menu").addClass("go-left");
            }); 
 $(".close-slider-btn").click(function(){

          $(".slider-menu").removeClass("go-left");
            }); 

 $(document).mouseup(function (e){
    var container = $(".slider-menu");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
    $(".slider-menu").removeClass("go-left");

    }
});

//end 側邊menu 

//to top
(function($) {
 "use strict";
 
$(document).ready(function(){

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});

});






})(jQuery);
//end to top 