$(document).ready(function () {

//ACCORDION FAQS
	$('#accordion').accordion({
		heightStyle: 'content'
	});


// ARROW MOVEMENT

	$('#box-1').hover(function() {
		$('.arrow-og').toggle(false);
		$('.arrow').toggleClass("arrow-1", true);
		$('.arrow').toggleClass("arrow-2", false);
		$('#box-1').toggleClass("box-highlight");

	});

	$('#box-2').hover(function() {
		$('.arrow-og').toggle(false);
		$('.arrow').toggleClass("arrow-2", true);
		$('.arrow').toggleClass("arrow-3", false);
		$('#box-2').toggleClass("box-highlight");

	});

	$('#box-2').mouseleave(function() {
		$('.arrow-og').toggle(false);
		$('.arrow').toggleClass('arrow-2', true);
	})

	$('#box-3').hover(function() {
		
		$('.arrow').toggleClass("arrow-3", true);
		$('.arrow').toggleClass("arrow-4", false);
		$('#box-3').toggleClass("box-highlight");
	});

	$('#box-3').mouseleave(function() {
		$('.arrow-og').toggle(false);
		$('.arrow').toggleClass('arrow-3', true);
	})

	$('#box-4').hover(function() {
		
		$('.arrow').toggleClass("arrow-4", true);
		$('.arrow').toggleClass("arrow-5", false);
		$('#box-4').toggleClass("box-highlight");
	});

	$('#box-4').mouseleave(function() {
		$('.arrow-og').toggle(false);
		$('.arrow').toggleClass('arrow-4', true);
	})

	$('#box-5').hover(function() {
		
		$('.arrow').toggleClass("arrow-5", true);
		$('#box-5').toggleClass("box-highlight");
	});

	$('#box-5').mouseleave(function() {
		
		$('.arrow').toggleClass('arrow-5', true);
	})

// LEARN MORE SCROLL
function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#learn-more").click(function() {
   scrollToAnchor('more');
});

});