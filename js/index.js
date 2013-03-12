function displaySplash() {
	$(".splash-screen").hide().fadeIn(1000);
	$(".splash-screen").fadeOut(2000);
}

function displayHome() {
	//header should contain name of app, icon, account button?
	var header = $("<header>").html("home.hunt");
	var searchBar = $("<form>");
	var input = $('<input id="search-input" placeholder="Enter zip code">');
	var loginButton = $("<button>").html("Login");
	var registerButton = $("<button>").html("Register");
	
	searchBar.submit(function(event) {
		event.preventDefault();
		alert("searched something");
	});
	
	searchBar.append(input);
	$("body").append(header);
	$("body").append(searchBar);
	$("body").append(loginButton);
	$("body").append(registerButton);
	
} 

window.onload = function() {
	displaySplash();
	setTimeout(displayHome, 3000);
}
