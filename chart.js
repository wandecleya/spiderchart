
function baseChart() {
	var canvas = document.getElementById("myCanvas");

	if(canvas.getContext){
		var context = canvas.getContext("2d");



	}
}

function calculateX(angle, length){
	var x_coordinate = length * Math.cos(angle);
	return x_coordinate;
}

function calculateY(angle, length){
	var y_coordinate = length * Math.sin(angle);
	return y_coordinate;
}
