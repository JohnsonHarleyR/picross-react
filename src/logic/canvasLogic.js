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

export const showCanvasCells = (canvasRef, grid) => {

}


export const getCellPos = (mousePos, canvasInfo) => {
    let x = Math.floor(mousePos.x / canvasInfo.cellLength);
    let y = Math.floor(mousePos.y / canvasInfo.cellLength);
    return {
        x: x,
        y: y
    }
}

// const drawCellGridLines = (canvasRef, canvasInfo, cellInfo) => {
//     let ctx = canvasRef.current.getContext("2d");

//     // first do horizontal
//     let yStart = 0;
//     let yEnd = canvasInfo.height * canvasInfo.cellLength;
//     for (let x = 1; x < canvasInfo.width; x++) {
//         let xPos = x * canvasInfo.cellLength;
//         ctx.beginPath();
//         ctx.lineWidth = (x % 10 === 0) ? 2 : 1;
//         ctx.strokeStyle = (x % 10 === 0) ? "black" : "grey";
//         ctx.moveTo(xPos, yStart);
//         ctx.lineTo(xPos, yEnd);
//         ctx.stroke();
//         ctx.closePath();
//     }
// }

export const drawCanvasGrid = (canvasRef, canvasInfo) => {
    let ctx = canvasRef.current.getContext("2d");

    // first do horizontal
    let yStart = 0;
    let yEnd = canvasInfo.height * canvasInfo.cellLength;
    for (let x = 1; x < canvasInfo.width; x++) {
        let xPos = x * canvasInfo.cellLength;
        ctx.beginPath();
        ctx.lineWidth = (x % 5 === 0) ? 2 : 1;
        ctx.strokeStyle = (x % 5 === 0) ? "black" : "grey";
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
        ctx.lineWidth = (y % 5 === 0) ? 2 : 1;
        ctx.strokeStyle = (y % 5 === 0) ? "black" : "grey";
        ctx.moveTo(xStart, yPos);
        ctx.lineTo(xEnd, yPos);
        ctx.stroke();
        ctx.closePath();
    }
}