
var numSquares = 6;
colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = colors[pickColor()];
var result = document.getElementById("result");
var jumbotron = document.querySelector(".jumbotron");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var newColor = document.getElementById("newColor");
var selected = document.querySelector(".selected");

colorDisplay.textContent = pickedColor;
hard.style.color = "white";



for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
	var clickedColor = this.style.background;
	
	if (clickedColor===pickedColor) {
		result.textContent = "Correct!"
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.background = clickedColor;
		}
		jumbotron.style.background = clickedColor;
		newColor.textContent = "Play Again!"
	}
	else {
		this.style.background = "#232323";
		result.textContent = "Try Again!!"
	}

});
}

newColor.addEventListener("click", function(){
numSquares = 6;
colors = generateRandomColors(numSquares);
pickedColor = colors[pickColor()];
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
}
newColor.textContent = "New Colors";
result.textContent = "";
jumbotron.style.background = "#4178aa";
});

easy.addEventListener("click", function(){
	numSquares =3;
	colors = generateRandomColors(numSquares);
	pickedColor = colors[pickColor()];
	colorDisplay.textContent = pickedColor;
	hard.classList.remove("selected");
	easy.classList.add("selected");
	easy.style.color = "white";
	hard.style.color = "#4178aa";
	jumbotron.style.background = "#4178aa";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display= "none";
		}
	}
});

hard.addEventListener("click", function(){
	numSquares =6;
	colors = generateRandomColors(numSquares);
	pickedColor = colors[pickColor()];
	colorDisplay.textContent = pickedColor;
	hard.classList.add("selected");
	easy.classList.remove("selected");
	hard.style.color = "white";
	easy.style.color = "#4178aa";
	jumbotron.style.background = "#4178aa";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "inline";
		squares[i].style.background = colors[i];
		
		}

});


function pickColor(){
	var rand = Math.floor(Math.random()*colors.length);
	return rand;
}

function generateRandomColors(numSquares){
	var colors =[];
	for (var i = 0; i < numSquares; i++) {
	colors.push(randomColor());
	}
	return colors;
		
}

function randomColor(){
	var red = Math.floor(Math.random()*255);
	var green = Math.floor(Math.random()*255);
	var blue = Math.floor(Math.random()*255);
	var rgb = "rgb("+ red+", "+green+", "+blue+")";
	return rgb;
}

