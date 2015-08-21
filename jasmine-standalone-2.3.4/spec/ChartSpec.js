describe("Spider Chart", function() {
	it("Calculate Ending X Coordinate of a Line from an Angle and Length and X initial", function(){
		var angle = Math.PI / 3;
		var length = 200;
		var xInitial = 50;
		var xCoordinate = (length * Math.cos(angle)) + xInitial;
		var result = calculateX(xInitial, angle, length);
		expect(result).toBeCloseTo(xCoordinate, 0);
	});

		it("Calculate Ending Y Coordinate of a Line from an Angle and Length and Y initial", function(){
		var angle = Math.PI / 3;
		var length = 200;
		var yInitial = 50;
		var yCoordinate = (length * Math.sin(angle)) + yInitial;
		var result = calculateY(yInitial, angle, length);
		expect(result).toBeCloseTo(yCoordinate, 0);
	});

});