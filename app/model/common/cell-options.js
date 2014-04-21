define([], function() {
	'use strict';
	
	function CellOptions(options) {
		if (options instanceof CellOptions) {
			options = options.options.splice();
		} else if ((typeof options === 'number') && (options > 0)) {
			var naturalOptions = [];
			
			for (var o=1; o<=options; ++o)
				naturalOptions.push(o);
				
			options = naturalOptions;
		}
		
		this.options = options;
	}
	
	CellOptions.prototype.UNASSIGNED = 0;
	
	return CellOptions;
});
