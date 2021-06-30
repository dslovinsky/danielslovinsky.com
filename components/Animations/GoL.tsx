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

export default function GoL({rows, cols}: {rows: number; cols: number}) {
  const [grid, setGrid] = useState(() => {
    let initialGrid: number[][] = [];
    initialGrid = Array.from({length: rows}).map(() =>
      Array.from({length: cols}).fill(0),
    );

    initialGrid.forEach((row, i) => {
      row.forEach((_col, j) => {
        if (i % 10 === 1 && j % 10 === 1) {
          initialGrid[i][j] = 1;
        } else if (i % 10 === 2 && j % 10 === 2) {
          initialGrid[i][j] = 1;
        } else if (i % 10 === 3 && [0, 1, 2].includes(j % 10)) {
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
                const newI = i + x;
                const newJ = j + y;
                if (newI >= 0 && newI < rows && newJ >= 0 && newJ < cols) {
                  liveNeighbors += g[newI][newJ];
                }
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
    }, 10);

    return () => {
      clearInterval(frame);
    };
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
              border: 'solid 1px black',
            }}></div>
        )),
      )}
    </div>
  );
}
