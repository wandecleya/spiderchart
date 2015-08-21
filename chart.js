window.onload = function() {
	var canvas = document.getElementById("myCanvas");

	if(canvas.getContext){
		var context = canvas.getContext("2d");

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
		context.fillText("Hello World",10,50);
	}
}


