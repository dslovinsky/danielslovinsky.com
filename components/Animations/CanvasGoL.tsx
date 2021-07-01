import {useRef, useEffect} from 'react';

const operations = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const mod = (a: number, b: number) => ((a % b) + b) % b;

export default function CanvasGoL({
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
    let initialGrid = Array.from({length: r}).map(() =>
      Array.from({length: c}).fill(0),
    ) as number[][];

    initialGrid.forEach((row, i) => {
      row.forEach((_col, j) => {
        const posX = i % 10;
        const posY = j % 10;
        if (
          (posX === 0 && posY === 1) ||
          (posX === 1 && posY === 2) ||
          (posX === 2 && [0, 1, 2].includes(posY))
        ) {
          initialGrid[i][j] = 1;
        }
      });
    });

    return initialGrid;
  };

  let grid = buildGrid(rows, cols);

  const nextFrame = (g: number[][]) => {
    const gridCopy = grid.map((arr) => [...arr]);

    gridCopy.forEach((row, i) => {
      row.forEach((_col, j) => {
        let liveNeighbors = 0;
        operations.forEach(([x, y]) => {
          const newI = mod(i + x, rows);
          const newJ = mod(j + y, cols);
          liveNeighbors += g[newI][newJ];
        });

        if (liveNeighbors < 2 || liveNeighbors > 3) {
          gridCopy[i][j] = 0;
        } else if (g[i][j] === 0 && liveNeighbors === 3) {
          gridCopy[i][j] = 1;
        }
      });
    });

    return gridCopy;
  };

  const render = (g: number[][], ctx: CanvasRenderingContext2D) => {
    g.forEach((row, i) => {
      row.forEach((_col, j) => {
        ctx.beginPath();
        ctx.rect(j * resolution, i * resolution, resolution, resolution);
        ctx.fillStyle = g[i][j] ? 'black' : 'white';
        // ctx.stroke(); displays grid lines
        ctx.fill();
      });
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = cols * resolution;
    canvas.height = rows * resolution;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const update = () => {
      grid = nextFrame(grid);
      render(grid, ctx);
    };

    const frame = setInterval(() => {
      requestAnimationFrame(update);
    }, 200);

    return () => clearInterval(frame);
  }, []);

  return <canvas ref={canvasRef} />;
}
