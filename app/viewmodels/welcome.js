define(function() {
	'use strict';

    function Welcome() {
        this.displayName = 'Welcome to the Sudoku solver';
        this.description = 'This sudoku solver is my attempt to learn Durandal in addition to solve some simple problem that i want to solve in a good way.';
        this.features = [
			'Uses Durandal for its organization and UI',
			'Clean JS as much as possible'
        ];
    };

    return Welcome;
});
