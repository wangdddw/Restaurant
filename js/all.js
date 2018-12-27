$(document).ready(function() {
	//漢堡選單
	$('.showmenu').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('body').toggleClass('menu-show');
	});

	
});