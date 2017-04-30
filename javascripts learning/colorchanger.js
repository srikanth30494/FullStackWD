var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;
// document.body.style.backgroundColor = "white";
button.addEventListener("click", changecolor);

function changecolor(){
	
	if (isPurple) {
		body.style.backgroundColor= "purple";
		isPurple = false;
	}
	else  {
		body.style.backgroundColor= "white";
		isPurple = true;
	}
	
	
}

// var button = document.querySelector("button");
// var paragraph = document.querySelector("p");

// button.addEventListener("click", function(){
// 	paragraph.textContent = "some body clicked the button";
// });