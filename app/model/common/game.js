define(['./cell-options', './cell'], function(CellOptions, Cell) {
	'use strict';
	
	function Game(type, size, name) {
		this.type = type;
		this.size = size;
		this.name = name;
		this.options = new CellOptions(size);
		this.board = [];
		
		for(var x=0;x<size;++x){
			this.board[x] = [];
			
			for(var y=0;y<size;++y)
				this.board[x][y] = new Cell(this.options);
		}
	}
	
	return Game;
});
