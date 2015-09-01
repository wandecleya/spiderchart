
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

Polygon.prototype.firstVertice = function(){
	var y = this.center.y + this.radius;
	return new Point(this.center.x, y);
};



