$(function() {

	$("#models-link").click(function() {
		$(this).toggleClass("active");
		$(".models").toggleClass("d-block");
	});

	$("#menu-link").click(function() {
		$(".adaptive-menu").toggleClass("d-block");
	});

});
