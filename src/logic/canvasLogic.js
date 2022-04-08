import { CellSpace } from "../data/constants/puzzleConstants";

export const getMousePos = (canvas, evt) => {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

export const setCanvasSize = (canvasRef, canvasInfo) => {
    let width = canvasInfo.width * canvasInfo.cellLength;
    let height = canvasInfo.height * canvasInfo.cellLength;
    canvasRef.current.width = width;
    canvasRef.current.height = height;
}

export const fillCanvasBackground = (canvasRef, color) => {
    let ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.rect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

export const showSolutionGrid = (canvasRef, canvasInfo, grid) => {
    let canvas = canvasRef.current;
    for (let y = 0; y < grid.length; y++) {
        let row = grid[y];
        for (let x = 0; x < row.length; x++) {
            let cell = row[x];
            let position = {
                x: x,
                y: y
            };
            if (cell === true) {
                fillCell(canvas, canvasInfo, "#000000", position);
            } // TODO consider logic for empty cell too?
        }
    }
}

export const showPlayerGrid = (canvasRef, canvasInfo, grid) => {
    let canvas = canvasRef.current;
    for (let y = 0; y < grid.length; y++) {
        let row = grid[y];
        for (let x = 0; x < row.length; x++) {
            let cell = row[x];
            let position = {
                x: x,
                y: y
            };
            switch (cell) {
                default:
                case CellSpace.EMPTY:
                    break;
                case CellSpace.FILLED:
                    fillCell(canvas, canvasInfo, "#000000", position);
                    break;
                case CellSpace.WRONG:
                    fillCell(canvas, canvasInfo, "#FF0000", position);
                    break;
                case CellSpace.XOUT:
                    // logic to draw a gray x inside the square
                    break;
            }
        }
    }
}


export const getCellPos = (mousePos, canvasInfo) => {
    let x = Math.floor(mousePos.x / canvasInfo.cellLength);
    let y = Math.floor(mousePos.y / canvasInfo.cellLength);
    return {
        x: x,
        y: y
    }
}

export const fillCell = (canvas, canvasInfo, color, position) => {
    let ctx = canvas.getContext("2d");
    let xStart = position.x * canvasInfo.cellLength;
    let yStart = position.y * canvasInfo.cellLength;

    ctx.beginPath();
    ctx.rect(xStart, yStart, canvasInfo.cellLength, canvasInfo.cellLength);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

export const drawCanvasGrid = (canvasRef, canvasInfo) => {
    let ctx = canvasRef.current.getContext("2d");

    // first do horizontal
    let yStart = 0;
    let yEnd = canvasInfo.height * canvasInfo.cellLength;
    for (let x = 1; x < canvasInfo.width; x++) {
        let xPos = x * canvasInfo.cellLength;
        ctx.beginPath();
        ctx.lineWidth = (x % 5 === 0) ? 3 : 1;
        ctx.strokeStyle = (x % 5 === 0) ? "#39FF14" : "grey";
        ctx.moveTo(xPos, yStart);
        ctx.lineTo(xPos, yEnd);
        ctx.stroke();
        ctx.closePath();
    }

    // now vertical
    let xStart = 0;
    let xEnd = canvasInfo.width * canvasInfo.cellLength;
    for (let y = 1; y < canvasInfo.height; y++) {
        let yPos = y * canvasInfo.cellLength;
        ctx.beginPath();
        ctx.lineWidth = (y % 5 === 0) ? 3 : 1;
        ctx.strokeStyle = (y % 5 === 0) ? "#39FF14" : "grey";
        ctx.moveTo(xStart, yPos);
        ctx.lineTo(xEnd, yPos);
        ctx.stroke();
        ctx.closePath();
    }
}