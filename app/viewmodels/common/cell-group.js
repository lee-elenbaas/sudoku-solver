define([], function() {
	'use strict';
	
	function CellGroup() {
		this.cells = [];
	}
	
	function addCell(cell) {
		this.cells.push(cell);
		cell.addGroup(this);
	}
	
	CellGroup.prototype.addCell = addCell;
	
	return CellGroup;
});
