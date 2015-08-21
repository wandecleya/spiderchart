describe("Spider Chart", function() {


	it("Calculates Endding Coordinates of a Line from Starting Point, Length and Angle", function(){
		var angle = Math.PI / 3;
		var length = 200;
		var xInitial = 50;
		var yInitial = 50;

		var xCoordinate = (length * Math.cos(angle)) + xInitial;
		var yCoordinate = (length * Math.sin(angle)) + yInitial;

		var result = calculatesEndingCoordinates(xInitial, yInitial, angle, length);

		expect(result["x"]).toBeCloseTo(xCoordinate, 0);
		expect(result["y"]).toBeCloseTo(yCoordinate, 0);
	});

});