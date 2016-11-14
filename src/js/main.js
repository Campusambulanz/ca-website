var APP = APP || {};


$(window).load(function(){

  //hide loading
  $('#loading').fadeOut(300);

  //show page
  $('#wrapper').fadeIn(150);

  //scroll to bottom (#how to compensate for lazy disque plugin height?)
  var bodyHeight = $('body').prop("scrollHeight")
  $('body').scrollTop(bodyHeight + 300);
});

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
