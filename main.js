document.addEventListener("DOMContentLoaded", function() {
	const loginButton = document.querySelector(".loginButton");
	const dropdownMenu = document.querySelector(".dropdown__menu");
    
	loginButton.addEventListener("click", function() {
	  dropdownMenu.hidden = !dropdownMenu.hidden;
	});
    });
    