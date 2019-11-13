
$(document).scroll(function() {

	var scrolledSoFar = $(document).scrollTop()
	var totalHeight = $(document).height()-$(window).height();
	var scrollPercentage = scrolledSoFar / totalHeight;
	var scrollDegree = scrollPercentage * 360

		$(".MOON").css({

				"transform":"rotate("+scrollDegree+"deg)"
		})

		console.log(scrollDegree)

})
