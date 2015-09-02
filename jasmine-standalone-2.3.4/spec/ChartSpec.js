describe("Spider Chart", function() {


	it("Calculates Next Coordinates of a Line from Starting Point, Length and Angle", function(){
		var angle = 0;
		var length = 20;
		var initial = [10, 10];

		var xCoordinate = (length * Math.cos(angle)) + initial[0];
		var yCoordinate = (length * Math.sin(angle)) + initial[1];

		var result = nextCoordinates(initial, angle, length);

		expect(result[0]).toBeCloseTo(xCoordinate, 0);
		expect(result[1]).toBeCloseTo(yCoordinate, 0);

	});

	it("Calculates Polygon external angle and length of the side from number os sides and diameter", function(){
		var numberOfSides = 4;
		var diameter = 20 * Math.sqrt(2);

		var angle = (2 * Math.PI) / numberOfSides;
		var sideLength = diameter * Math.sin(Math.PI / numberOfSides);

		var result = polygonParameters(numberOfSides, diameter);

		expect(result["angle"]).toBeCloseTo(angle, 0);
		expect(result["side"]).toBeCloseTo(sideLength, 0);
	});

	it("Calculates Vertices Coordinates of Polygon", function(){
		var numberOfSides = 4;
		var width = 20;

		var side = 10 * Math.sin(Math.PI/numberOfSides) ;
		var result = verticesCoordinates(numberOfSides, width);

		
		expect(result[0][1]).toBeCloseTo(0);
		expect(result[1][1]).toBeCloseTo(0);	
		expect(result[2][1]).toBeCloseTo(side);
		expect(result[3][1]).toBeCloseTo(side);
	});

	it("Calculates Starting Point Coordinates in Order to Centralize the Polygon", function(){
		var width = 600;
		var side = 600;

		var result = startingPoint(width, side);

		expect(result).toEqual([0, 0]);
	});

});