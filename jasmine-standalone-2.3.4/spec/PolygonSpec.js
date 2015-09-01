describe("Creates a Point object", function(){

	it("Creates a point with x coordinate", function(){
		var point = new Point(4);
		expect(point.x).toBe(4);
	});

	it("Creates a point with y coordinate", function(){
		var point = new Point(2, 4);
		expect(point.y).toBe(4);
	});

	it("Creates a point with a description value", function(){
		var point = new Point(2, 4, "Javascript");
		expect(point.description).toBe("Javascript");
	});

});

describe("Creates a Polygon object", function(){

	it("Creates a Polygon object with radius", function(){
		var polygon = new Polygon(5);
		expect(polygon.radius).toBe(5);
	});

	it("Creates a Polygon object with number of sides", function(){
		var polygon = new Polygon(5, 6);
		expect(polygon.sides).toBe(6);
	});

	it("Creates a Polygon object with a center point", function(){
		var point = new Point(0, 0);
		var polygon = new Polygon(5, 6, point);
		expect(polygon.center).toEqual(point);
	});

});

describe("Generates list of vertices for Polygon", function(){

	var polygon;

	beforeAll(function() {
		var center = new Point(0,0);
	    polygon = new Polygon(5, 4, center);
	});

	it("Generates vertice at a radius distance above the center", function(){
		var point = new Point(0, 5);
		expect(polygon.vertice(Math.PI/2)).toEqual(point);
	});

	it("Generates vertice at a radius distance right from the center", function(){
		var point = new Point(5, 0);
		expect(polygon.vertice(0)).toEqual(point);
	});

	it("Generates first vertice in a list", function(){
		var point = new Point(5, 0);
		expect(polygon.generateVertices()[0]).toEqual(point);
	});

	it("Generates next vertice of a square in a list", function(){
		var point = new Point(0, 5);
		expect(polygon.generateVertices()[1]).toEqual(point);
	});

	it("Access vertices list of a polygon", function(){
		var vertices = polygon.generateVertices();
		expect(polygon.vertices).toEqual(vertices);
	});

});

