


function baseChart() {
	var canvas = document.getElementById("myCanvas");

	if(canvas.getContext){
		var context = canvas.getContext("2d");
		var width = 800;
		var hight = 400;

		var radius = 100;
		var numberOfSides = 12;
		var center = new Point(400, 200);

		var polygon = new Polygon(radius, numberOfSides, center);
		


		var vertices = polygon.generateVertices();


		context.beginPath();
		context.moveTo(vertices[0].x, vertices[0].y);

		for (var i=1; i<vertices.length; i++){
			
			context.lineTo(vertices[i].x, vertices[i].y);
			context.stroke();
		}

		context.lineTo(vertices[0].x, vertices[0].y);
		context.stroke();
	}
}

function Point(x, y, description){
	this.x= x,
	this.y= y,
	this.description= description
}

function Polygon(radius, sides, center){
	this.radius = radius,
	this.sides = sides,
	this.center = center,
	this.vertices = []

}

Polygon.prototype.vertice = function(angle){
	var x = this.center.x + (this.radius * Math.cos(angle).toFixed(2));
	var y = this.center.y + (this.radius * Math.sin(angle).toFixed(2));

	return new Point(x, y);
}

Polygon.prototype.generateVertices = function(){
	var radiano = 2 * Math.PI;
	var internalAngle = radiano/this.sides;

	for(var angle = 0; angle<= radiano; angle += internalAngle){
		var point = this.vertice(angle);
		this.vertices.push(point);
	}	
	
	return this.vertices;
}






