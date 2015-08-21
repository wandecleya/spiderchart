
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
		coordinates = calculatesEndingCoordinates(xCoordinate, yCoordinate, angle, length);
		context.lineTo(coordinates.x, coordinates.y);
		context.stroke();


	}
}



function calculatesEndingCoordinates(xInitial, yInitial, angle, length){
	var coordinates = {};
	coordinates["x"] = (length * Math.cos(angle)) + xInitial;
	coordinates["y"] = (length * Math.sin(angle)) + yInitial;
	return coordinates;
}
