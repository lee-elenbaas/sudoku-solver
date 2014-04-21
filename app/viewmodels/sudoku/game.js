define(['model/common/game', 'model/common/cell-group'], function(Base, CellGroup) {
	'use strict';
	
	function Game(name) {
		Base.call(this, 'Sudoku', 9, name);
		
		var x,y, group;
		
		// col groups
		for (x=0;x<9;++x) {
			group = new CellGroup();
			
			for(y=0;y<9;++y)
				group.addCell(this.board[x][y]);
		}
		
		// row groups
		for (y=0;y<9;++y) {
			group = new CellGroup();
			
			for(x=0;x<9;++x)
				group.addCell(this.board[x][y]);
		}
		
		// square groups
		for (x=1;x<9;x+=3) {
			for (y=1;y<9;y+=3) {
				group = new CellGroup();
				
				for (var dx=-1;dx<2;++dx) {
					for (var dy=-1;dy<2;++dy)
						group.addCell(this.board[x+dx][y+dy]);
				}
			}
		}
	}
	
	Game.prototype = new Base('Sudoku', 9);
	
	return Game;
});
