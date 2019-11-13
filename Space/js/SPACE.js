
$(".circle").scrollTo(function(){

	var controller = new ScrollMagic.Controller();

	var tween = TweenMax.to("animate", 1, {scale: 3, ease: Linear.easeNone});

	var scene = new ScrollMagic.Scene({triggerElement: "#multiDirect", duration: 400, offset: 250})
						.setTween(tween)
						.setPin("#animate")
						.addIndicators({name: "resize"}) // add indicators (requires plugin)
						.addTo(controller);

		var controller_h = new ScrollMagic.Controller({vertical: false});

		var tween_h = TweenMax.to("#animate", 1, {ease: Linear.easeNone});

		var scene_h = new ScrollMagic.Scene({duration: 700})
						.setTween(tween_h)
						.setPin("#animate")
						.addTo(controller_h);
	});









//$(function () { // wait for document ready
//		// init controller
//		var controller = new ScrollMagic.Controller();
//
//		// build tween
//		var tween = TweenMax.to("#animate", 0.5, {scale: 3, ease: Linear.easeNone});
//
//		// build scene
//		var scene = new ScrollMagic.Scene({triggerElement: "#multiDirect", duration: 400, offset: 250})
//						.setTween(tween)
//						.setPin("#animate")
//						.addIndicators({name: "resize"}) // add indicators (requires plugin)
//						.addTo(controller);
//
//		// init controller horizontal
//		var controller_h = new ScrollMagic.Controller({vertical: false});
//
//		// build tween horizontal
//		var tween_h = TweenMax.to("#animate", 0.5, {rotation: 360, ease: Linear.easeNone});
//
//		// build scene
//		var scene_h = new ScrollMagic.Scene({duration: 700})
//						.setTween(tween_h)
//						.setPin("#animate")
//						.addIndicators({name: "rotate"}) // add indicators (requires plugin)
//						.addTo(controller_h);
//	});













//
// $(document).scroll(function() {

//	var scrolledSoFar = $(document).scrollTop()
//	var totalHeight = $(document).height()-$(window).height();
//	var scrollPercentage = scrolledSoFar / totalHeight;
//	var scrollDegree = scrollPercentage * 360

//		$(".MOON").css({

//				"transform":"rotate("+scrollDegree+"deg)"
//		})

//		console.log(scrollDegree)

//})
