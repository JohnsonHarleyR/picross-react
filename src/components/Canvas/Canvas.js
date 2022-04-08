import React, { useEffect, useRef, useState } from 'react';
import { createCanvasInfo } from '../../logic/objectCreator';
import { 
    setCanvasSize,
    fillCanvasBackground,
    drawCanvasGrid,
    getMousePos,
    showSolutionGrid,
    showPlayerGrid
} from '../../logic/canvasLogic';

const Canvas = ({puzzle, showSolution}) => {
    const CELL_WIDTH = 20;
    const [canvasInfo, setCanvasInfo] = useState(null);
    const canvasRef = useRef();

    useEffect(() => {
        if (puzzle) {
            let newInfo = createCanvasInfo(puzzle.xAcross, puzzle.yAcross, CELL_WIDTH);
            setCanvasInfo(newInfo);
        }
    }, [puzzle]);

    useEffect(() => {
        if (canvasInfo) {
            displayCanvas();
        }
    }, [canvasInfo, showSolution]);

    const displayCanvas = () => {
        setCanvasSize(canvasRef, canvasInfo);
        fillCanvasBackground(canvasRef, "#ffffff");
        if (showSolution) {
            showSolutionGrid(canvasRef, canvasInfo, puzzle.grid);
        } else {
            //showPlayerGrid(canvasRef, canvasInfo, playerGrid);
        }
        drawCanvasGrid(canvasRef, canvasInfo);
    }

    return (
        <div>
            <canvas ref={canvasRef}/>
        </div>
    )
}

export default Canvas;