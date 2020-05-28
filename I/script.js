var Tom = 0;
var cT = 1;
var L = 0;
var Lp = 50;
var Toml = Lp;
function clicked(){
	Tom = Tom + cT;
	Toml = Lp - Tom;
	document.getElementById("lub").innerHTML = "Tomatoes till level up: " + Toml;
	if (Tom >= Lp){
		document.getElementById("lub").innerHTML = "level up now!";
	}

	document.getElementById("cTb").innerHTML = "Cheap Tomatoes: " + Tom;
	console.log(Tom)
}

function levelUp(){
	if (Tom >= Lp){
		L = L + 1;
		Tom = Tom - Lp;
		cT = cT + 2;
		Lp = Lp * 2;
		Toml = Lp - Tom;
		document.getElementById("lub").innerHTML = "Tomatoes till level up: " + Toml;
		document.getElementById("cTb").innerHTML = "Cheap Tomatoes: " + Tom;
		document.getElementById("level").innerHTML = "Level: " + L;
	}
	else{
		document.getElementById("lub").innerHTML = "Not enough tomatoes!";
		setTimeout(function(){ document.getElementById("lub").innerHTML = "Tomatoes till level up: " + Toml;}, 500);
	}
}