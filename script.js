let css = document.querySelector('h3');
let input1 = document.querySelector('.color1');
let input2 = document.querySelector('.color2');
let body = document.getElementById("gradient");
let btn = document.getElementById("btn");

function getHaxColor() {
	let randNum = Math.floor(Math.random() * 16777215);
	let color = "#" + randNum.toString(16).padStart(6, "0");
	return color;
}

let randomColor1 = getHaxColor();
let randomColor2 = getHaxColor();

css.textContent = `linear-gradient(to right, ${input1.value}, ${input2.value})`;

function bgGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ input1.value 
	+ ", " 
	+ input2.value 
	+ ")"; 
	css.textContent = body.style.background;

}

// input1.addEventListener('input', bgGradient());

// input2.addEventListener('input',	bgGradient());

btn.addEventListener('click', function() {
	input1.value = randomColor1;
	input2.value = randomColor2;
	body.style.background = "linear-gradient(to right, " 
	+ input1.value 
	+ ", " 
	+ input2.value 
	+ ")"; 
	css.textContent = body.style.background;
	bgGradient()
})