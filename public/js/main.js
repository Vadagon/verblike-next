$('.carousel-inner > .carousel-item, .carousel-indicators.testimonials-indicators li').removeClass("active hiding");
$('.carousel-inner > .carousel-item').eq(0).addClass("active");
$('.carousel-indicators.testimonials-indicators li').eq(0).addClass("active");

var i = 0;
function carouselMove(next){
	$('.carousel-inner > .carousel-item').addClass("hiding");
	if(++i >= $('.carousel-inner > .carousel-item').length) i = 0;
	if(next !== undefined) i = next;
	setTimeout(function() {
		$('.carousel-inner > .carousel-item').eq(i).removeClass("hiding");
		// $('.carousel-inner > .carousel-item').eq(i).removeClass("hiding");
		$('.carousel-inner > .carousel-item, .carousel-indicators.testimonials-indicators li').removeClass("active");
		$('.carousel-inner > .carousel-item').eq(i).addClass("active");
		$('.carousel-indicators.testimonials-indicators li').eq(i).addClass("active");
	}, 600);
}

var carouselInt = setInterval(carouselMove, 5000)

$('.carousel-indicators.testimonials-indicators > li').on('click', function(){
	clearInterval(carouselInt);

	let next = parseInt($(this).attr('data-slide-to'));
	$('.carousel-indicators.testimonials-indicators li').eq(next).addClass("active");
	carouselMove(next)
})


$(window).scroll(function() {
	if($(document).scrollTop() > 20){
		$('header.header').addClass("header-active");
	}else{
		$('header.header').removeClass("header-active");
	}
})

$('.core-nav-toggle').on('click', ()=>{
	$('nav.core-nav').toggleClass('nav-opened-menu')
})

function openContactFrom(){
	$(`
	    <div id="contactForm">
		  <iframe src="https://extension.expert/wp-content/themes/chrome.expert/form.html"></iframe>
		  <span>×</span>
	    </div>
	`).prependTo('body')

	setTimeout(function() {
		$('#contactForm').addClass('animation')
	}, 50);

	$('#contactForm > span').on('click', ()=>{
		$('#contactForm').remove();	
	})
}

console.log($(window).height(), $('.footer-bottom').offset(), $('.footer-bottom').innerHeight())
var difference = $(window).height()-$('.footer-bottom').innerHeight()-$('.footer-bottom').offset().top;
if(difference > 0) $('.footer-bottom').css('top', difference+'px')