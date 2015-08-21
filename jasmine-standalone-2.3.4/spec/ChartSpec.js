describe("Spider Chart", function() {
	it("Calculate Ending X Coordinate of a Line from an Angle and Length", function(){
		var angle = Math.PI / 3;
		var length = 200;
		var xCoordinate = length * Math.cos(angle);
		var result = calculateX(angle, length);
		expect(result).toBeCloseTo(xCoordinate, 0);
	});

		it("Calculate Ending Y Coordinate of a Line from an Angle and Length", function(){
		var angle = Math.PI / 3;
		var length = 200;
		var yCoordinate = length * Math.sin(angle);
		var result = calculateY(angle, length);
		expect(result).toBeCloseTo(yCoordinate, 0);
	});

});