var css = document.querySelector("h3");
var button = document.querySelector("h1");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+")";

	css.textContent = body.style.background + ";"
}

function generateRandomNum(){
	return (Math.floor(100000 + Math.random() * 900000));
}

function setRandomBackground(){
	body.style.background = 
	"linear-gradient(to right, "
	+ "#" + generateRandomNum() 
	+ ", " 
	+ "#" + generateRandomNum()
	+")";

	css.textContent = body.style.background + ";"
}

function createBtn(){
	var createButton = document.createElement("button");
	var createButtonText = document.createTextNode("Generate Random Background");
	createButton.appendChild(createButtonText);
	button.appendChild(createButton);

	createButton.addEventListener("click", setRandomBackground);
}

setGradient();

createBtn();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);