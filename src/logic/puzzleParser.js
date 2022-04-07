import { RowOrCol } from "../data/constants/puzzleConstants";

export const createPuzzleGridFromVisual = (visual) => {
    let grid = [];
    for (let y = 0; y < visual.length; y++) {
        let newRow = [];
        for (let x = 0; x < visual[y].length; x++) {
            let bitString = visual[y].charAt(x);
            if (bitString === '0') {
                newRow.push(false);
            } else if (bitString === '1') {
                newRow.push(true);
            }
        }
        grid.push(newRow);
    }
    return grid;
}

export const getColumnAtPosition = (grid, position) => {
    let column = [];
    for (let y = 0; y < grid.length; y++) {
        column.push(grid[y][position]);
    }
    return column;
}

const createGridPosition = (rowOrCol, otherIndex, newIndex) => {
    if (rowOrCol === RowOrCol.COLUMN) {
        return ({
            x: otherIndex,
            y: newIndex
        })
    }
    return ({
        x: newIndex,
        y: otherIndex
    })
}

export const getTrueCountsForSet = (set, rowOrCol, otherIndex) => {
    let counts = [];

    let lastResult = null;
    let currentCount = 0;
    let currentPositions = [];
    for (let i = 0; i < set.length; i++) {
        let value = set[i];
        if (value === true) {
            currentCount++;
            currentPositions.push(createGridPosition(rowOrCol, otherIndex, i));
        } else if (value === false) {
            if (lastResult === true) {
                counts.push({
                    count: currentCount,
                    positions: currentPositions,
                    isComplete: false
                });
                currentCount = 0;
                currentPositions = [];
            }
        }
        lastResult = value;

        if (i === set.length - 1 && currentCount != 0) {
            counts.push({
                count: currentCount,
                positions: currentPositions
            });
        }
    }
    return counts;
}