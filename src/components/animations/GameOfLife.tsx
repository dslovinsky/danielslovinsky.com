import { memo, useEffect, useRef } from 'react';

import type { CanvasHTMLAttributes, FC } from 'react';

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

interface GameOfLifeProps extends CanvasHTMLAttributes<HTMLCanvasElement> {
  height: number;
  width: number;
  resolution?: number;
  fps?: number;
  streak?: number;
}

const mod = (a: number, b: number) => ((a % b) + b) % b;

/**
 * Runs a simulation of Conway's Game of Life with an initial position that spreads Gosper gliders evenly over the page's topmost full viewport
 */
const GameOfLife: FC<GameOfLifeProps> = ({ height, width, resolution = 10, fps = 10, streak = 0, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const numRows = Math.ceil((height * (10 / resolution)) / 10) * 10;
  const numCols = Math.ceil((width * (10 / resolution)) / 10) * 10;
  const interval = 1000 / fps;
  const opac = Math.abs(streak - 1);

  const buildGrid = (r: number, c: number) => {
    const initialGrid = Array.from({ length: r }).map(() => Array.from({ length: c }).fill(0)) as number[][];

    initialGrid.forEach((row, i) => {
      row.forEach((_col, j) => {
        const posX = i % 10;
        const posY = j % 10;
        if ((posX === 0 && posY === 1) || (posX === 1 && posY === 2) || (posX === 2 && [0, 1, 2].includes(posY))) {
          initialGrid[i][j] = 1;
        }
      });
    });

    return initialGrid;
  };

  let grid = buildGrid(numRows, numCols);

  const nextFrame = (g: number[][], r: number, c: number) => {
    const gridCopy = grid.map(arr => [...arr]);

    gridCopy.forEach((row, i) => {
      row.forEach((_col, j) => {
        let liveNeighbors = 0;
        operations.forEach(([x, y]) => {
          const newI = mod(i + x, r);
          const newJ = mod(j + y, c);
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
        ctx.fillStyle = g[i][j] ? 'rgba(255, 255, 255, 0.2)' : `rgba(13, 17, 22, ${opac})`;
        ctx.fillRect(j * resolution, i * resolution, resolution, resolution);
      });
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    canvas.width = numCols * resolution;
    canvas.height = numRows * resolution;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    let prevTime: number;
    let raf: number;

    const renderCallback = (timestamp: number) => {
      if (prevTime === undefined) {
        prevTime = timestamp;
      }

      if (Math.round(timestamp - prevTime) >= interval) {
        prevTime = timestamp;
        grid = nextFrame(grid, numRows, numCols);
        render(grid, ctx);
      }

      raf = requestAnimationFrame(renderCallback);
    };

    raf = requestAnimationFrame(renderCallback);

    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas {...props} ref={canvasRef} />;
};

export default memo(GameOfLife);
