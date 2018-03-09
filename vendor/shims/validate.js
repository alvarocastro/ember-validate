(function () {
	function vendorModule () {
		'use strict';

		return {
			'default': self['validate'],
			__esModule: true,
		};
	}

	define('validate', [], vendorModule);
})();
