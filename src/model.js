caek = {};

caek.GameOfLifeGrid = function (){

    var currentState;

    return {
        setCurrentState: function(state){
            currentState = state;
        },

        calculateNextGeneration: function(){
            var newState = [];
            for (var i=0;i<currentState.length;i++) {
                var row = currentState[i];
                newRow = [];
                for (var j=0;j<row.length;j++) {
                    var countOfNeighbours = 0;

                    var currentRow = currentState[i];
                    if (currentRow[j-1]) countOfNeighbours++;
                    if (currentRow[j+1]) countOfNeighbours++;

                    var rowAbove = currentState[i-1];
                    if(rowAbove) {
                        if(rowAbove[j-1]) countOfNeighbours++;
                        if(rowAbove[j]) countOfNeighbours++;
                        if(rowAbove[j+1]) countOfNeighbours++;
                    }
                    var rowBelow = currentState[i+1];
                    if(rowBelow) {
                        if(rowBelow[j-1]) countOfNeighbours++;
                        if(rowBelow[j]) countOfNeighbours++;
                        if(rowBelow[j+1]) countOfNeighbours++;
                    }

                    if (countOfNeighbours > 3) {
                        newRow.push(false);
                    } else {
                        if (countOfNeighbours < 2) {
                            newRow.push(false);
                        } else {
                            newRow.push(true);
                        }

                    }
//                    newRow.push(countOfNeighbours)
                }
                console.log(newRow)
                newState.push(newRow);
            }
            currentState = newState;
        },

        getCurrentState: function(){
            return currentState;
        }
    };
};