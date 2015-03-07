
$(function(){
	/**
	*main menu.
	*/
	var mainMenu = $(".sf-menu");

	//create the responsive menu by cloning the existing one.
	mainMenu.clone().removeClass().addClass("rwd-menu").prependTo(".navbar-container nav");

	//initialize the superfish menu.
	mainMenu.superfish();

	//toggle the responsive menu
	$("#rwd-trigger").on("click", function(e){
		e.preventDefault();

		$(".rwd-menu").slideToggle();
	});

	//animations

	$( "#demo-animations" ).find(".demo-col").on( "click", function(){
		var $this = $( this );

		$this.addClass( "animated" + $this.text() );
	});


	//tabs.

	$(".tabs-links a").on("click", function(e){
		e.preventDefault();


		//get the target tab
		var newTab = $( this ).attr( "href");

		//show the targeted tab content while hiding the rest.
		$(newTab).show().siblings().hide();

		//add the active class to parent list item while removingt from the rest.
		$(this).parent("li").addClass("active").siblings().removeClass("active");
	})


	$(".accordion-element-title").on("click", function(e){
		e.preventDefault();

		//get the target
		var targetAccordion = $(this).attr("href");
		//colabse all accordion elements.
		$(".accordion-element-title").removeClass("active");
		$(".accordion-element-content").hide();

		//show the targeted element only.

		$(this).addClass("active");
		$(targetAccordion).show();



	});
}); 