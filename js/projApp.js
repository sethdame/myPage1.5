$(document).ready(function() {
	$('#projSlider').zAccordion({
		width: 900,
		speed: 1500,
		timeout: 10000,
		slideClass: "slider",
		animationStart: function() {
			$('#projSlider').find('li.slide-previous div').fadeOut();
		},
		animationComplete: function() {
			$('#projSlider').find('li.slide-open div').fadeIn();
		},
		buildComplete: function() {
			$('#projSlider').find('li.slide-closed div').css('display', 'none');
			$('#projSlider').find('li.slide-open div').fadeIn();
		},
		slideWidth: 600,
		height: 400,
		easing: 'easeOutBounce'
	});
});