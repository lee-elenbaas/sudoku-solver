define(['./sudoku/predefined'], function(predefined) {
	'use strict';
	
	var game = predefined[0];
	
    function Solve() {
        this.game = predefined[0];
    };

    return Solve;
});
