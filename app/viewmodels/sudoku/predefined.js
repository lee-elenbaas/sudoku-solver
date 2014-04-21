define(['model/sudoku/game'], function(Game) {
	'use strict';
	
	var predefined = [];
	
	predefined[0] = new Game('Empty');
	
	return predefined;
});
