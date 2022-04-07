import React, { useEffect } from 'react';
import { firstPuzzles } from '../../data/puzzleData';
import { createPuzzleGridFromVisual, getColumnAtPosition, getTrueCountsForSet, getDataForRows, getDataForColumns, parseDataIntoPuzzle } from '../../logic/puzzleParser';
import { RowOrCol } from '../../data/constants/puzzleConstants';
import Canvas from '../Canvas/Canvas';

const Test = () => {

    const testPuzzle = parseDataIntoPuzzle(firstPuzzles[0]);

    useEffect(() => {
        // // test turning puzzle to grid
        // console.log('Testing createPuzzleGridFromVisual()');
        // let testPuzzleGrid = createPuzzleGridFromVisual(firstPuzzles[0].visual);
        // console.log(testPuzzleGrid);

        // // test creating a column from the grid at a certain position
        // console.log('Testing getColumnAtPosition()');
        // let testColumn2 = getColumnAtPosition(testPuzzleGrid, 2);
        // console.log(testColumn2);

        // // test counting true values for a set and putting them in an array
        // console.log('Testing getTrueCountsForSet()');
        // let trueCounts2 = getTrueCountsForSet(testColumn2, RowOrCol.COLUMN, 2);
        // console.log(trueCounts2);

        // // test getting data for all rows on grid
        // console.log('Testing getDataForRows()');
        // let rowsData = getDataForRows(testPuzzleGrid);
        // console.log(rowsData);

        // // test getting data for all columns on grid
        // console.log('Testing getDataForColumns()');
        // let columnsData = getDataForColumns(testPuzzleGrid);
        // console.log(columnsData);

        // test parsing puzzle data into a puzzle for a game level
        console.log('Testing parseDataIntoPuzzle()');
        //let testPuzzle = parseDataIntoPuzzle(firstPuzzles[0]);
        console.log(testPuzzle);
    }, []);

    return (
        <div>
            Test Div
            <Canvas puzzle={testPuzzle} showSolution={true}/>
        </div>
    )
}

export default Test;