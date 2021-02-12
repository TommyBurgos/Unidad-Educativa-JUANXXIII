const facebook= document.querySelector(".facebook");
facebook.setAttribute("title", "facebook");

const instagram = document.querySelector(".instagram");
instagram.setAttribute("title","Instagram");

const youtube = document.querySelector(".youtube");
youtube.setAttribute("title","youtube");

$(document).ready(function(){
	let altura= $('.nav').offset().top;
	$(window).scroll(function(){
		if ($(window).scrollTop() > altura){
			$('.nav').addClass('menu-fixed');
		} else{
			$('nav').removeClass('menu-fixed');
		}
	})
	
	
})



