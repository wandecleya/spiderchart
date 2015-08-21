
function baseChart() {
	var canvas = document.getElementById("myCanvas");

	if(canvas.getContext){
		var context = canvas.getContext("2d");
		var numberOfSides = 12;
		var width = 800;
		var xInitial = startingPoint()
		var initialCoordinates = [, 0];

		var vertices = verticesCoordinates(numberOfSides, width);

		context.beginPath();
		context.moveTo(vertices[0][0], vertices[0][1]);

		for (var i=1; i<vertices.length; i++){
			
			context.lineTo(vertices[i][0], vertices[i][1]);
			context.stroke();
			context.beginPath();
			context.moveTo(vertices[i][0], vertices[i][1]);
		}

		context.lineTo(vertices[0][0], vertices[0][1]);
		context.stroke();
	}
}



function nextCoordinates(initial, angle, length){
	var coordinates = [];
	coordinates[0] = (length * Math.cos(angle)) + initial[0];
	coordinates[1] = (length * Math.sin(angle)) + initial[1];
	return coordinates;
}

function polygonParameters(numberOfSides, diameter){
	var parameters = {};
	parameters["angle"] = (2 * Math.PI )/ numberOfSides;
	parameters["side"] = diameter * Math.sin(Math.PI/numberOfSides);
	
	return parameters;
}

function verticesCoordinates(numberOfSides, width){
	var coordinates = [];
	var diameter = width /2;
	var parameters = polygonParameters(numberOfSides, diameter);
	var initial = startingPoint(width, parameters.side);
	var angle = 0;

	for(var i=0; i < numberOfSides; i++){
		coordinates.push(initial);
		var next = nextCoordinates(initial, angle, parameters.side);
		initial = next;
		angle += parameters.angle;
	}
	

	return coordinates;
}

function startingPoint(width, side){
	var xCoordinate = 0;
	xCoordinate += width/2;
	xCoordinate -= side/2;

	var coordinates = [xCoordinate, 0];

	return coordinates;
}



