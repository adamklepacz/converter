//get output element and hide it
let output = document.getElementById('output');
	
output.style.visibility = "hidden";

document.getElementById('kgInput').addEventListener('input', function (e) {
	//get elements 
	let kilos = e.target.value,
			grams = document.getElementById('gramsOutput'),
			pounds = document.getElementById('poundsOutput'),
			ounces = document.getElementById('ouncesOutput'); 
			
	//check if input is empty and clean cards output
	if(kilos == "") {
		grams.innerHTML = "";
		pounds.innerHTML = "";
		ounces.innerHTML = "";
		output.style.visibility = "hidden"; 
	} else {
		//set output div to visible
		output.style.visibility = "visible";
		//fetch the cards output values
		grams.innerHTML = kilos * 1000;
		pounds.innerHTML = kilos * 2.20462262;
		ounces.innerHTML = kilos * 35.2739619;
	}
});

