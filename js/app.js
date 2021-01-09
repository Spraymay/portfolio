$(function(){

	/* filter */
	let filter = $("[data-filter]");
	filter.on("click", function(event){
		event.preventDefault();
		let cat = $(this).data('filter');
		if(cat == 'all'){
			$("[data-cat]").removeClass('hide');
		}
		else{
			$("[data-cat]").each(function(){
				let workCat = $(this).data('cat');
				if(workCat != cat){
					$(this).addClass('hide');
				}
				else{
					$(this).removeClass('hide');
				}
			})
		}
	})

	const modelCall = $("[data-model]");
	const modelClose = $("[data-close]");
	modelCall.on("click", function(event){

		event.preventDefault();
		let $this = $(this);
		let modelId = $this.data('model');
		$(modelId).addClass('show');
		$("body").addClass('no-scroll');

		setTimeout(function(){
			$(modelId).find(".model__dialog").css({
				transform: "rotateX(0)"
			});
		}, 200);

	/* 	$('#worksSlider').slick('setPosition'); */
	})

	modelClose.on("click", function(event){
		event.preventDefault();
		let $this = $(this);
		let modelParent = $this.parents('.model');
		modelParent.find(".model__dialog").css({
			transform: "rotateX(90deg)"
		});
		modelParent.removeClass('show');
		$("body").removeClass('no-scroll');
	})

	$(".model").on("click", function(event){
		$(this).find(".model__dialog").css({
			transform: "rotateX(90deg)"
		});
		$(this).removeClass('show');
		$("body").removeClass('no-scroll');
	})

	$(".model__dialog").on("click", function(event){
		event.stopPropagation();
	})
})


/*

slider https://kenwheeler.github.io/slick/

*/

$('[data-slider="slick"]').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	arrows: false,
	dots: true
})

$(".slickPrev").on("click", function(event){
	event.preventDefault();

	let currentSlider = $(this).parents(".model").find('[data-slider="slick"]')
	currentSlider.slick("slickPrev");
})

$(".slickNext").on("click", function(event){
	event.preventDefault();
	let currentSlider = $(this).parents(".model").find('[data-slider="slick"]')
	currentSlider.slick("slickNext");
})
