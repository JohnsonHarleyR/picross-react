import React, { useEffect } from 'react';
import { firstPuzzles } from '../../data/puzzles';
import { createPuzzleGridFromVisual, getColumnAtPosition, getTrueCountsForSet } from '../../logic/puzzleParser';
import { RowOrCol } from '../../data/constants/puzzleConstants';

const Test = () => {

    useEffect(() => {
        // test turning puzzle to grid
        console.log('Testing createPuzzleGridFromVisual()');
        let testPuzzleGrid = createPuzzleGridFromVisual(firstPuzzles[0].visual);
        console.log(testPuzzleGrid);

        // test creating a column from the grid at a certain position
        console.log('Testing getColumnAtPosition()');
        let testColumn2 = getColumnAtPosition(testPuzzleGrid, 2);
        console.log(testColumn2);

        // test counting true values for a set and putting them in an array
        console.log('Testing getTrueCountsForSet()');
        let trueCounts2 = getTrueCountsForSet(testColumn2, RowOrCol.COLUMN, 2);
        console.log(trueCounts2);
    }, []);

    return (
        <div>
            Test Div
        </div>
    )
}

export default Test;