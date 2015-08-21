
function baseChart() {
	var canvas = document.getElementById("myCanvas");

	if(canvas.getContext){
		var context = canvas.getContext("2d");
		var numberOfSides = 6;
		var radius = 200;
		var initialCoordinates = [100, 100];

		var vertices = verticesCoordinates(initialCoordinates, numberOfSides, radius);

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

function polygonParameters(numberOfSides, radius){
	var parameters = {};
	parameters["angle"] = (2 * Math.PI )/ numberOfSides;
	parameters["length"] = (2 * radius) * Math.sin(Math.PI/numberOfSides);
	return parameters;
}

function verticesCoordinates(initial, numberOfSides, radius){
	var coordinates = [];
	var parameters = polygonParameters(numberOfSides, radius);
	var angle = 0;

	for(var i=0; i < numberOfSides; i++){
		coordinates.push(initial);
		var next = nextCoordinates(initial, angle, parameters.length);
		initial = next;
		angle += parameters.angle;
	}
	

	return coordinates;
}



