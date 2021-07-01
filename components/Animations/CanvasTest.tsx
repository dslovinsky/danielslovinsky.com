import {useRef, useEffect} from 'react';

// guides:
// raw JS canvas:
// https://github.com/HungryTurtleCode/gameoflife/blob/master/index.js
// https://www.youtube.com/watch?v=deXzu0Eregs

// how to use canvas in react:
// https://dev.to/vetswhocode/game-of-life-as-a-react-component-using-canvas-275g

// GoL in canvas in react:
// https://dev.to/vetswhocode/game-of-life-as-a-react-component-using-canvas-275g

export default function Canvas({
  rows = 10,
  cols = 10,
  resolution = 10,
}: {
  rows?: number;
  cols?: number;
  resolution?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const buildGrid = (r: number, c: number) => {
    let initialGrid: number[][] = [];
    initialGrid = Array.from({length: r}).map(() =>
      Array.from({length: c}).fill(0),
    ) as number[][];

    // initialGrid.forEach((row, i) => {
    //   row.forEach((_col, j) => {
    //     const posX = i % 10;
    //     const posY = j % 10;
    //     if (
    //       (posX === 0 && posY === 1) ||
    //       (posX === 1 && posY === 2) ||
    //       (posX === 2 && [0, 1, 2].includes(posY))
    //     ) {
    //       initialGrid[i][j] = 1;
    //     }
    //   });
    // });

    return initialGrid;
  };

  const grid = buildGrid(rows, cols);

  function render(g: number[][], ctx: CanvasRenderingContext2D) {
    g.forEach((row, i) => {
      row.forEach((_col, j) => {
        // ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.rect(i * resolution, j * resolution, resolution, resolution);
        ctx.stroke();
      });
    });
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    render(grid, ctx);
  }, []);

  return <canvas ref={canvasRef} />;
}
