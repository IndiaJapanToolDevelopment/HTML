//	dropdownMenu     ///////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
	const loginButton = document.querySelector(".loginButton");
	const dropdownMenu = document.querySelector(".dropdown__menu");
    
	loginButton.addEventListener("click", function() {
	  dropdownMenu.hidden = !dropdownMenu.hidden;
	});
    });


//    humbergerMenu    ////////////////////////////////////
$(function() {
	$('.hamburger').click(function() {
	    $(this).toggleClass('active');
   
	    if ($(this).hasClass('active')) {
		  $('.globalMenuSp').addClass('active');
	    } else {
		  $('.globalMenuSp').removeClass('active');
	    }
	});
  });

  $(".openbtn").click(function () {
	$(this).toggleClass('active');
});
    

