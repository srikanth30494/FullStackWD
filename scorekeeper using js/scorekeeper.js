var p1 = document.querySelector("#p1button");
var p2 = document.querySelector("#p2button");
var p1score = document.querySelector("#p1score");
var p2score = document.querySelector("#p2score");
var span = document.querySelector("span");
var playingto = document.querySelector("#playingto");
var input = document.querySelector("input");
var reset = document.querySelector("#reset");
p1s=0;
p2s=0;
winning = false;
winningscore = 5;

p1.addEventListener("click", function(){
		if (!winning) {
		p1s++;
		p1score.textContent = p1s;
			if (p1s === winningscore) {
				winning= true;
				p1score.style.color = "green";
			}
	}
	
});

p2.addEventListener("click", function(){
	if (!winning) {
		p2s++;
		p2score.textContent = p2s;
			if (p2s === winningscore) {
				winning= true;
				p2score.style.color = "green";
			}
	}
	
});

input.addEventListener("change", function(){
	playingto.textContent = Number(input.value);
	winningscore = Number(input.value);
});

reset.addEventListener("click", function(){
	p1s = 0;
	p2s = 0;
	p1score.textContent = p1s;
	p2score.textContent = p2s;
	winningscore=5;
	playingto.textContent = winningscore;
	input.value=0;
	p1score.style.color="black";
	p2score.style.color="black";
	winning=false;

});

