


function baseChart() {
	var canvas = document.getElementById("myCanvas");

	if(canvas.getContext){
		var context = canvas.getContext("2d");
		var width = 800;
		var hight = 400;
		var steps =5;

		var radius = 200;
		var numberOfSides = 8;
		var center = new Point(400, 200);

		var spiderchart = new Spiderchart(steps, radius, numberOfSides, center);

		for(var i =0; i<steps; i++){
			drawPolygon(context, spiderchart.polygons[i].generateVertices());
		}

		var polygon = new Polygon(radius, numberOfSides, center);
		drawRadius(context, polygon.generateVertices(), center);

		


	}
}



var drawPolygon = function(context, vertices){

		context.beginPath();
		context.moveTo(vertices[0].x, vertices[0].y);

		for (var i=1; i<vertices.length; i++){
			
			context.lineTo(vertices[i].x, vertices[i].y);
			context.stroke();
		}

		context.lineTo(vertices[0].x, vertices[0].y);
		context.stroke();
}

var drawRadius = function(context, vertices, center){
		context.beginPath();
		context.moveTo(center.x, center.y);

		for (var i=0; i<vertices.length; i++){
			
			context.lineTo(vertices[i].x, vertices[i].y);
			context.stroke();
			context.moveTo(center.x, center.y);
		}
}

function Spiderchart(steps, radius, sides, center){
	this.steps = steps,
	this.radius = radius,
	this.sides = sides,
	this.center = center,
	this.polygons = [],
	this.generatePolygons();

}

Spiderchart.prototype.generatePolygons = function(){
	var radiusFraction = this.radius/this.steps;
	var currentRadius = radiusFraction;
	for (var i = 0; i < this.steps; i++) {
		this.polygons.push(new Polygon(currentRadius, this.sides, this.center));
		currentRadius += radiusFraction ;
	}
}

function Point(x, y, description){
	this.x = x,
	this.y = y,
	this.description = description
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






