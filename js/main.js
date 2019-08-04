//// Js features

$(function() {
	/////Creacte mobile menu function////
	////give menu-toggle event .click
	//// when we click that humburger button
	//// something happen
	$('.menu-toggle').click(function() {
		////something it's adding class navbar--open
		//// to navbar by event toggleClass
		//// also this class will be removed 
		//// after second click that because 
		//// toggleClass work that way 
		//// in contrast with addClass
		$('.navbar').toggleClass('navbar--open');
		///// and by this we add class open to parent class
		//// of this function ("this" === '.menu-toggle')
		$(this).toggleClass('open');

	});

	//Give culture section "Load more" btn
	//function of loading more images after
	//is's clicked	
	 //Line below give Load More button event click
	 let loadMore = '#loadMore-btn'
 	$(loadMore).click(function(){
 		/// and by clicking we remove class ".hidden"
 		/// and more lines of content show up
		 /// second click will hide the additional lines of content
		let event = '#events-row2';
		let hide = 'hidden'
		$(event).toggleClass(hide) 
 	});
});