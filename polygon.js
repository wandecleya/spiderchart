
function Point(x, y, description){
	this.x= x,
	this.y= y,
	this.description= description
}

function Polygon(radius, sides, center){
	this.radius = radius,
	this.sides = sides,
	this.center = center

}

Polygon.prototype.vertice = function(angle){
	var x = this.center.x + (this.radius * Math.cos(angle).toFixed(2));
	var y = this.center.y + (this.radius * Math.sin(angle).toFixed(2));

	return new Point(x, y);
}





