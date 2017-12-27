$(function asideToggle() {
 	$('.js-toggle-info').click(function(e) {
 		$(this).parent().children('.toggle-info').slideToggle(500);
 		$(this).siblings().children().next().slideUp();
 		e.preventDefault();
 	});
});

