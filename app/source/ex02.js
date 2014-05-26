var ConstructorName = (function() {
	'use strict';

	function ConstructorName(args) {
		// enforces new
		if (!(this instanceof ConstructorName)) {
			return new ConstructorName(args);
		}
		// constructor body
	}

	ConstructorName.prototype.methodName = function(args) {
		// method body
	};

	return ConstructorName;

}());