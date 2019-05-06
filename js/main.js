//// Js features

$(function() {
	/////Creacte mobile menu function////
	$('.menu-toggle').click(function() {

		$('.navbar').toggleClass('navbar--open');
		$(this).toggleClass('open');

	});

	/*Give culture section "Load more" btn
	function of loading more images after
	is's clicked	
 	*/
 	$('#loadMore-btn').click(function(){

 		$('#events-row2').toggleClass('.events-item--btn', '.events-row2--showed');

 	});
 	////// It doesn't work yet 

});