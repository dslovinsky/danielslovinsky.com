import {useState, useEffect} from 'react';
import produce from 'immer';

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

export default function GoL({rows, cols}: {rows: number; cols: number}) {
  const [grid, setGrid] = useState(() => {
    let initialGrid: number[][] = [];
    initialGrid = Array.from({length: rows}).map(() =>
      Array.from({length: cols}).fill(0),
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
  });

  useEffect(() => {
    const frame = setInterval(() => {
      setGrid((g) => {
        return produce(g, (gridCopy) => {
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
        });
      });
    }, 50);

    return () => clearInterval(frame);
  }, [grid, setGrid]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 10px)`,
        gridTemplateRows: `repeat(${rows}, 10px)`,
      }}>
      {grid.map((rows, i) =>
        rows.map((_col, k) => (
          <div
            key={`${i}-${k}`}
            style={{
              width: 10,
              height: 10,
              backgroundColor: grid[i][k] ? 'black' : 'white',
            }}
          />
        )),
      )}
    </div>
  );
}
