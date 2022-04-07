import { RowOrCol } from "../data/constants/puzzleConstants";

export const parseDataIntoPuzzle = (puzzleData) => {
    let grid = createPuzzleGridFromVisual(puzzleData.visual);
    let puzzle = {
        name: puzzleData.name,
        xAcross: puzzleData.xAcross,
        yAcross: puzzleData.yAcross,
        grid: grid,
        rowData: getDataForRows(grid),
        columnData: getDataForColumns(grid)
    };
    return puzzle;
}

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

export const getDataForColumns = (grid) => {
    let columns = [];
    for (let i = 0; i < grid[0].length; i++) {
        let column = getColumnAtPosition(grid, i);
        columns.push(column);
    }
    let data = getDataForSets(columns, RowOrCol.COLUMN);
    return {columns: data};
}

export const getDataForRows = (grid) => {
    let data = getDataForSets(grid, RowOrCol.ROW);
    //return data;
    return {rows: data};
}

const getDataForSets = (sets, rowOrCol) => {
    let data = [];
    for (let i = 0; i < sets.length; i++) {
        data.push({
            trueCounts: getTrueCountsForSet(sets[i], rowOrCol, i)
        });
    }
    return data;
}

export const getColumnAtPosition = (grid, position) => {
    let column = [];
    for (let y = 0; y < grid.length; y++) {
        column.push(grid[y][position]);
    }
    return column;
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