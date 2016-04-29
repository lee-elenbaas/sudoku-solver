Sudoku-solver
=============

A sudoku and similar games solver using JS

The board is a grid that define how to present the cells - it also defines the possible alphabet to be used in all cells in the grid (this limit the options for the solution)

each cell in the grid can have one of several types: nit participating, empty & prefilled hint

each cell will belong to one or more expected results: a cumulative sum for kakuro/sudoku, a word definition for puzzles. A cell can belong to more then one expected result, and it could also have a specific place in the result.
The expected result can force conditions on the cells belonging to it (like not having duplications between the cells) that will limit the number of options each cell has

