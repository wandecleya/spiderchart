describe("Spider Chart", function() {
	it("Calculate Ending X Coordinate of a Line from an Angle and ", function(){
		var angle = Math.PI / 3;
		var length = 200;
		var xCoordinate = length * Math.cos(angle);
		var result = calculateX(angle, length);
		expect(result).toBeCloseTo(xCoordinate, 0);
	});
});