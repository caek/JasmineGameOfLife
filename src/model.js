caek = {};

caek.GameOfLifeGrid = function (){
    return {
        setCurrentState: function(){},

        calculateNextGeneration: function(){},

        getCurrentState: function(){
            return [
                [false, false, false, false, false, false, false, false],
                [false, false, false, false, true, true, false, false],
                [false, false, false, false, true, true, false, false],
                [false, false, false, false, false, false, false, false]

            ]
        }
    };
};