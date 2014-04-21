define(['model/common/game'], function(Base) {
	'use strict';
	
	function Game() {
	}
	
	Game.prototype = new Base('Sudoku');
	
	return Game;
});
