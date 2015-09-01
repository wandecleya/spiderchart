describe("Creates a Point object", function(){

	it("Creates a point with x coordinate", function(){
		var point = new Point(4);
		expect(point.x).toBe(4);
	});

	it("Creates a point with y coordinate", function(){
		var point = new Point(2, 4);
		expect(point.y).toBe(4);
	});


	it("Creates a point with a text value as description", function(){
		var point = new Point(2, 4, "Javascript");
		expect(point.description).toBe("Javascript");
	});


});