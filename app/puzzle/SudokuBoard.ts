/*******************
 * Sudoku board
 *******************/

class SodukoBoard extends BaseBoard<Number> {
  constructor(prefilledHints: Number[][], limit = 9) {
    alphaValues = [];
    for (let v = 1; v <= limit; ++v)
      alphaValues.push(v);

    alpha = new AlphaBeit(alphaValues);

    cells = [];
    cellsGrid = [];
    for (let r = 0; r < limit; ++r) {
      cellsGrid[r] = [];
      for (let c = 0; c < limit; ++c) {
        if (prefilledHints[r][c])
          cellGrids[r][c] = new PrefilledCell<Number>(alpha, prefilledHints[r][c]);
      }
    }
    super(alpha, )
  }
}

