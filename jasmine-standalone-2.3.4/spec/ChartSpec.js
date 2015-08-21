describe("Spider Chart", function() {
	it("Calculate Ending X Coordinate of a Line from an Angle", function(){
		var angle = Math.PI / 3;
		var xCoordinate = Math.cos(angle).toFixed(1);
		var result = calculateX(angle);
		expect(result).toBeCloseTo(xCoordinate, 0);
	});
});