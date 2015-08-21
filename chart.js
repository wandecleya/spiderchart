
function baseChart() {
	var canvas = document.getElementById("myCanvas");

	if(canvas.getContext){
		var context = canvas.getContext("2d");
		var angle = Math.PI/2;
		var length = 300;
		var xCoordinate = 100;
		var yCoordinate = 100;

		context.beginPath();
		context.moveTo(xCoordinate, yCoordinate);
		xCoordinate = calculateX(xCoordinate, angle, length);
		yCoordinate = calculateY(yCoordinate, angle, length);
		context.lineTo(xCoordinate, yCoordinate);
		context.stroke();


	}
}

function calculateX(xInitial, angle, length){
	var x_coordinate = (length * Math.cos(angle)) + xInitial;
	return x_coordinate;
}

function calculateY(yInitial, angle, length){
	var y_coordinate = (length * Math.sin(angle)) + yInitial;
	return y_coordinate;
}
