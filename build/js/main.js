var APP = APP || {};

// scroll to bottom on load
window.onload = toBottom;
var scrollStart = document.body.scrollHeight;

// scroll to bottom function
function toBottom() {
		window.scrollTo(0,scrollStart);
	}

// jquery stuff
(function(window, $) {

	// defining the var
	var $direction = $('#rocket-direction');

	// look for scroll direction
	var lastScrollTop = 0;
	$(window).scroll(function(event){
	   var st = $(this).scrollTop();

		 // add or remove the rotate transform
	   if (st < lastScrollTop ||
		 st + $(window).height() === $(document).height()){
			 	$direction
	      .removeClass('down');
	   } else {
			 $direction
			 .addClass('down');
		 }

		 // update
	   lastScrollTop = st;
	});

	// collapse the menu when link is clicked
	$('.menu a').click(function(){
		$('.checkbox-toggle').prop('checked', false);
	});

})(window, jQuery);
