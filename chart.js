
function baseChart() {
	var canvas = document.getElementById("myCanvas");

	if(canvas.getContext){
		var context = canvas.getContext("2d");

		var radian = 2 * Math.PI;
		var vertices = 4; //get this value from a counter
		var x_coordinate = 50;
		var y_coordinate = 50;
		var side_length = 100;
		var angle = radian / vertices;

		context.beginPath();


		context.moveTo(x_coordinate, y_coordinate);
		x_coordinate += side_length;
		context.lineTo(x_coordinate, y_coordinate);
		context.stroke();

/*
		context.rotate(angle);
		x_coordinate += side_length;
		context.lineTo(x_coordinate, y_coordinate);
		context.stroke();
		
		context.beginPath();
		context.strokeStyle='#00cc00';
		context.moveTo(0,0);
		context.lineTo(200,100);
		context.stroke();

		context.beginPath();
		context.strokeStyle='#cc0000';
		context.moveTo(200,100);
		context.lineTo(400,300);
		context.stroke();

		context.font = "20px Arial";
		context.textAlign = "right";
		context.fillText("Hello World",10,50);
		*/
	}
}

function calculateX(angle, length){
	var x_coordinate = length * Math.cos(angle);
	return x_coordinate;
}

