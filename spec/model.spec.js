describe("grid", function() {

    it("should live if it has exactly two neighbours", function() {

        var expectedSecondGeneration = [
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, true, true, false, false],
            [false, false, false, false, true, true, false, false],
            [false, false, false, false, false, false, false, false]

        ]

        var grid = caek.GameOfLifeGrid(4, 8);

        grid.setCurrentState([
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, true, false, false, false],
            [false, false, false, false, true, true, false, false],
            [false, false, false, false, false, false, false, false]
        ]);

        grid.calculateNextGeneration();

        var nextGeneration = grid.getCurrentState();

        expect(nextGeneration).toEqual(expectedSecondGeneration);

    });

});