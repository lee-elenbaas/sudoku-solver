define(['./cell-options'], function(CellOptions) {
	'use strict';
	
	function Cell(options) {
		this.options = new CellOptions(options);
		this.value = options.UNASSIGNED;
		this.groups = [];
	}
	
	function addGroup(group) {
		this.groups.push(group);
	}
	
	Cell.prototype.addGroup = addGroup;
	
	return Cell;
});
