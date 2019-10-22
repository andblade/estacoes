$(document).ready(function() {
	$("#img-01").click(function(){
		$("#bg-image-01").fadeIn("fast").removeClass("d-none");
		$("#bg-image-02").fadeOut("fast").addClass("d-none");
		$("#bg-image-03").fadeOut("fast").addClass("d-none");
		$("#bg-image-04").fadeOut("fast").addClass("d-none");
		$("#bg-image-05").fadeOut("fast").addClass("d-none");
	});

	$("#img-02").click(function(){
		$("#bg-image-01").fadeOut("fast").addClass("d-none");
		$("#bg-image-02").fadeIn("fast").removeClass("d-none");
		$("#bg-image-03").fadeOut("fast").addClass("d-none");
		$("#bg-image-04").fadeOut("fast").addClass("d-none");
		$("#bg-image-05").fadeOut("fast").addClass("d-none");
	});

	$("#img-03").click(function(){
		$("#bg-image-01").fadeOut("fast").addClass("d-none");
		$("#bg-image-02").fadeOut("fast").addClass("d-none");
		$("#bg-image-03").fadeIn("fast").removeClass("d-none");
		$("#bg-image-04").fadeOut("fast").addClass("d-none");
		$("#bg-image-05").fadeOut("fast").addClass("d-none");
	});

	$("#img-04").click(function(){
		$("#bg-image-01").fadeOut("fast").addClass("d-none");
		$("#bg-image-02").fadeOut("fast").addClass("d-none");
		$("#bg-image-03").fadeOut("fast").addClass("d-none");
		$("#bg-image-04").fadeIn("fast").removeClass("d-none");
		$("#bg-image-05").fadeOut("fast").addClass("d-none");
	});
});