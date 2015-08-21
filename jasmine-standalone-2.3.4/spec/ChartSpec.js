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
		expect(Math.cos(angle)).toBeCloseTo(1, 0);
		expect(Math.sin(angle)).toBeCloseTo(0, 0);
		expect(result[0]).toBeCloseTo(30, 0);
		expect(result[1]).toBeCloseTo(10, 0);
	});

	it("Calculates Polygon angle and length of the side from number os sides and radius", function(){
		var numberOfSides = 4;
		var radius = 10 * Math.sqrt(2);

		var angle = (2 * Math.PI) / numberOfSides;
		var sideLength = (2 * radius) * Math.sin(Math.PI / numberOfSides);

		var result = polygonParameters(numberOfSides, radius);

		expect(result["angle"]).toBeCloseTo(angle, 0);
		expect(result["length"]).toBeCloseTo(sideLength, 0);
	});

	it("Calculates Vertices Coordinates of Polygon", function(){
		var numberOfSides = 4;
		var initial = [10, 10];

		var radius = 10 * Math.sqrt(2);
		var square = [[10, 10], [30, 10], [30, 30], [10, 30]];
		var result = verticesCoordinates(initial, numberOfSides, radius);

		expect(result[0][0]).toBeCloseTo(square[0][0]);
		expect(result[0][1]).toBeCloseTo(square[0][1]);
		expect(result[1][0]).toBeCloseTo(square[1][0]);
		expect(result[1][1]).toBeCloseTo(square[1][1]);
		expect(result[2][0]).toBeCloseTo(square[2][0]);
		expect(result[2][1]).toBeCloseTo(square[2][1]);
		expect(result[3][0]).toBeCloseTo(square[3][0]);
		expect(result[3][1]).toBeCloseTo(square[3][1]);
	});

});