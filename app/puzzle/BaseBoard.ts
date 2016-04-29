/**********************************
 * The board is responsible for 
 * definig the entire problem to be solved
 *********************************/
import Cell from cell.js

class BaseBoard() { 
  constructor(private domain: Domain, private criteria: Criteria[], private cells: Cells[]) {
  }
}

