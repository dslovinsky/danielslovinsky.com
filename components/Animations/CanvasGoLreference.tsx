import React, {useRef, useEffect} from 'react';

const fieldColor = '#9732a8';
const colonyColor = '#c22fbf';

const buildGrid = (COLS, ROWS) => {
  return new Array(COLS)
    .fill(null)
    .map(() =>
      new Array(ROWS).fill(null).map(() => Math.floor(Math.random() * 2)),
    );
};

const getPixelRatio = (context) => {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

  return (window.devicePixelRatio || 1) / backingStore;
};

export default function GameOfLife() {
  const canvasRef = useRef(null);

  const nextGen = (grid, COLS, ROWS) => {
    const nextGen = grid.map((arr) => [...arr]);

    for (let col = 0; col < grid.length; col++) {
      for (let row = 0; row < grid[col].length; row++) {
        const cell = grid[col][row];
        let numNeighbours = 0;
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            if (i === 0 && j === 0) {
              continue;
            }
            const x_cell = col + i;
            const y_cell = row + j;

            if (x_cell >= 0 && y_cell >= 0 && x_cell < COLS && y_cell < ROWS) {
              const currentNeighbour = grid[col + i][row + j];
              numNeighbours += currentNeighbour;
            }
          }
        }

        // rules
        if (cell === 1 && numNeighbours < 2) {
          nextGen[col][row] = 0;
        } else if (cell === 1 && numNeighbours > 3) {
          nextGen[col][row] = 0;
        } else if (cell === 0 && numNeighbours === 3) {
          nextGen[col][row] = 1;
        }
      }
    }
    return nextGen;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resolution = 1;

    let ratio = getPixelRatio(ctx);
    let width = getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);
    let height = getComputedStyle(canvas)
      .getPropertyValue('height')
      .slice(0, -2);

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `100%`;
    canvas.style.height = `100%`;

    const COLS = Math.floor(canvas.width / resolution);
    const ROWS = Math.floor(canvas.height / resolution);

    let grid = buildGrid(COLS, ROWS);

    requestAnimationFrame(update);

    function update() {
      grid = nextGen(grid, COLS, ROWS);
      render(grid);
      setTimeout(() => requestAnimationFrame(update), 100);
    }

    function render(grid) {
      for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
          const cell = grid[col][row];

          ctx.beginPath();
          ctx.rect(col * resolution, row * resolution, resolution, resolution);
          ctx.fillStyle = cell ? colonyColor : fieldColor;
          ctx.fill();
        }
      }
    }
  });

  return (
    <header>
      <canvas ref={canvasRef}></canvas>
    </header>
  );
}
