/**
 * scrollToElement
 * @see http://www.dconnell.co.uk/blog/index.php/2012/03/12/scroll-to-any-element-using-jquery/
 */
function scrollToElement(selector, time, verticalOffset) {
	time = typeof(time) != 'undefined' ? time : 1000;
	verticalOffset = typeof(verticalOffset) !== 'undefined' ? verticalOffset : 0;
	element = $(selector);
	offset = element.offset();
	offsetTop = offset.top + verticalOffset;
	$('html, body').animate({
		scrollTop: offsetTop
	}, time);
}